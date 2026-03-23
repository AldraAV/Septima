import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Heart, Activity, Zap, Microscope, ArrowRight, Clock, BookOpen, Award, Droplets, Brain, Pill, Syringe, Cpu, Stethoscope, BarChart3 } from 'lucide-react';
import { useTour } from './Layout';
import { useOrganicAnimation } from '../../hooks/useOrganicAnimation';
import { ECGChart } from './ECGChart';

const API_BASE = (import.meta as any).env?.VITE_BINARY_API_URL || 'http://localhost:8000';

const GLASS = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  backdropFilter: 'blur(12px)',
};

const GLASS_HOVER = 'hover:border-[rgba(0,234,211,0.25)] hover:bg-[rgba(0,234,211,0.04)] transition-all duration-300 cursor-pointer';

function StatCard({ label, value, unit, color, icon: Icon, delay = 0 }: { label: string; value: string; unit: string; color: string; icon: React.ElementType; delay?: number }) {
  const animRef = useOrganicAnimation({ type: 'liquid-appear', delay });

  return (
    <div ref={animRef} className="rounded-2xl p-5 flex-1 opacity-0" style={GLASS}>
      <div className="flex items-start justify-between mb-3">
        <div className="text-[#94A3B8] text-xs uppercase tracking-wider">{label}</div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
          <Icon size={14} style={{ color }} />
        </div>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-[#F9FAFB]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{value}</span>
        <span className="text-[#94A3B8] text-sm">{unit}</span>
      </div>
    </div>
  );
}

function ModuleCard({ tab, title, desc, icon: Icon, color, status, progress, onClick, delay = 0 }: any) {
  const animRef = useOrganicAnimation({ type: 'liquid-appear', delay });

  return (
    <div ref={animRef} onClick={onClick} className={`rounded-2xl p-5 flex flex-col group ${GLASS_HOVER} opacity-0`} style={GLASS}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
          boxShadow: `0 0 20px ${color}10`,
        }}>
          <Icon size={22} style={{ color }} />
        </div>
        <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${status === 'active' ? 'text-[#00EAD3]' : 'text-[#94A3B8]'}`}
          style={{ background: status === 'active' ? 'rgba(0,234,211,0.1)' : 'rgba(255,255,255,0.05)', border: `1px solid ${status === 'active' ? 'rgba(0,234,211,0.25)' : 'rgba(255,255,255,0.08)'}` }}>
          {status === 'active' ? '● En progreso' : '○ Próximo'}
        </div>
      </div>
      <div className="text-[#F9FAFB] font-semibold text-base mb-1">{title}</div>
      <div className="text-[#94A3B8] text-sm mb-4 flex-1 leading-relaxed">{desc}</div>
      {progress !== undefined && (
        <div className="mb-3">
          <div className="flex justify-between text-xs text-[#94A3B8] mb-1.5">
            <span>Progreso</span><span style={{ fontFamily: 'JetBrains Mono' }}>{progress}%</span>
          </div>
          <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${color}, ${color}99)` }} />
          </div>
        </div>
      )}
      <div className="flex items-center gap-1.5 text-sm group-hover:gap-2.5 transition-all" style={{ color }}>
        <span>Explorar</span>
        <ArrowRight size={14} />
      </div>
    </div>
  );
}

export function Dashboard() {
  const navigate = useNavigate();
  const { startTour } = useTour();
  const [ecgTime, setEcgTime] = useState(0);
  const [backendStatus, setBackendStatus] = useState<'online' | 'offline' | 'checking'>('checking');
  const [clinicalCasesCount, setClinicalCasesCount] = useState(0);

  // Animate ECG mini-graph
  useEffect(() => {
    const interval = setInterval(() => setEcgTime(t => t + 0.016), 16);
    return () => clearInterval(interval);
  }, []);

  // Check backend health + fetch dynamic data
  useEffect(() => {
    const check = async () => {
      try {
        const [healthRes, casesRes] = await Promise.all([
          fetch(`${API_BASE}/api/septima/explain/pti`).then(r => r.ok),
          fetch(`${API_BASE}/api/septima/cases/pti`).then(r => r.json()).catch(() => ({ total: 0 })),
        ]);
        setBackendStatus(healthRes ? 'online' : 'offline');
        setClinicalCasesCount(casesRes.total || 0);
      } catch {
        setBackendStatus('offline');
      }
    };
    check();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Welcome Header with mini-ECG */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4"
            style={{ background: 'rgba(0,234,211,0.08)', border: '1px solid rgba(0,234,211,0.2)', color: '#00EAD3', fontFamily: 'JetBrains Mono' }}>
            <div className={`w-1.5 h-1.5 rounded-full ${backendStatus === 'online' ? 'bg-[#00EAD3] animate-pulse' : backendStatus === 'offline' ? 'bg-[#FF2E63]' : 'bg-[#FBBF24] animate-pulse'}`} />
            {backendStatus === 'online' ? 'MOTOR BIO-ENGINE · ONLINE' : backendStatus === 'offline' ? 'MOTOR OFFLINE' : 'CONECTANDO...'}
          </div>
          <h1 className="text-4xl font-bold text-[#F9FAFB] mb-2" style={{ letterSpacing: '-0.8px' }}>
            Séptima <span style={{ background: 'linear-gradient(90deg, #00EAD3, #7be3ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Biomédica</span>
          </h1>
          <p className="text-[#94A3B8] text-lg">Simulación biomédica educativa con motor C++ en tiempo real</p>
        </div>
        {/* Mini ECG */}
        <div className="w-48 h-16 flex-shrink-0 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0,234,211,0.1)' }}>
          <ECGChart bpm={72} time={ecgTime} noiseLevel={0.01} height={64} />
        </div>
      </div>

      {/* Dynamic Stats Row */}
      <div className="flex gap-4 mb-8">
        <StatCard label="Modelos ODE" value="5" unit="activos" color="#00EAD3" icon={BarChart3} delay={0} />
        <StatCard label="Casos Clínicos" value={String(clinicalCasesCount)} unit="PTI" color="#FF2E63" icon={Stethoscope} delay={50} />
        <StatCard label="Motor" value={backendStatus === 'online' ? 'ON' : 'OFF'} unit={backendStatus === 'online' ? 'Python' : ''} color={backendStatus === 'online' ? '#00EAD3' : '#FF2E63'} icon={Cpu} delay={100} />
        <StatCard label="Endpoints API" value="13" unit="activos" color="#FBBF24" icon={Zap} delay={150} />
      </div>
      
      {/* Module Cards */}
      <div className="mb-6">
        <h2 className="text-[#F9FAFB] font-semibold text-lg mb-4">Acceso Rápido</h2>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
          <ModuleCard tab="pti" title="PTI · Séptima"
            desc="Púrpura Trombocitopénica: simulación dinámica con IA multi-agente y WebSockets 60 FPS."
            icon={Syringe} color="#FF2E63" status="active" progress={90}
            onClick={() => navigate('/pti')} delay={0} />
          <ModuleCard tab="anatomia" title="Anatomía Cardíaca"
            desc="Explora el corazón humano en 3D. Capas, rotación y etiquetas anatómicas interactivas."
            icon={Microscope} color="#00EAD3" status="active" progress={75}
            onClick={() => navigate('/cardiovascular?tab=anatomia')} delay={50} />
          <ModuleCard tab="fisiologia" title="Fisiología Windkessel"
            desc="Simula el ciclo cardíaco. Presión aórtica en tiempo real con datos del Bio-Engine."
            icon={Activity} color="#7c6ef8" status="active" progress={60}
            onClick={() => navigate('/cardiovascular?tab=fisiologia')} delay={100} />
          <ModuleCard tab="ecg" title="Monitor ECG"
            desc="ECG en tiempo real. Análisis de segmentos P-QRS-T con filtros de señal digital."
            icon={Zap} color="#FF2E63" status="active" progress={55}
            onClick={() => navigate('/cardiovascular?tab=ecg')} delay={150} />
          <ModuleCard tab="glucosa" title="Glucosa-Insulina"
            desc="Modelo de Bergman: simula IVGTT, Diabetes Tipo 2 y respuesta post-ejercicio."
            icon={Droplets} color="#f59e0b" status="active" progress={50}
            onClick={() => navigate('/glucosa')} delay={200} />
          <ModuleCard tab="neuronal" title="Neuronal HH"
            desc="Hodgkin-Huxley: potencial de acción, canales iónicos Na⁺/K⁺ y bloqueos anestésicos."
            icon={Brain} color="#e879f9" status="active" progress={45}
            onClick={() => navigate('/neuronal')} delay={250} />
          <ModuleCard tab="farmaco" title="Farmacocinética"
            desc="PK 1-compartimento: amoxicilina, ibuprofeno, digoxina. MIC y niveles tóxicos."
            icon={Pill} color="#34d399" status="active" progress={40}
            onClick={() => navigate('/farmaco')} delay={300} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Quick Actions */}
        <div className="rounded-2xl p-5 flex flex-col" style={GLASS}>
          <div className="text-[#F9FAFB] font-semibold text-base mb-4">Acciones Rápidas</div>
          <div className="space-y-2 flex-1">
            <button onClick={() => navigate('/cardiovascular?tab=ecg')}
              className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-left transition-all hover:opacity-80"
              style={{ background: 'rgba(255,46,99,0.08)', border: '1px solid rgba(255,46,99,0.2)' }}>
              <Zap size={14} style={{ color: '#FF2E63' }} />
              <span className="text-[#F9FAFB]">Monitor ECG en vivo</span>
            </button>
            <button onClick={() => navigate('/cardiovascular?tab=fisiologia')}
              className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-left transition-all hover:opacity-80"
              style={{ background: 'rgba(124,110,248,0.08)', border: '1px solid rgba(124,110,248,0.2)' }}>
              <Activity size={14} style={{ color: '#7c6ef8' }} />
              <span className="text-[#F9FAFB]">Simular hipertensión</span>
            </button>
            <button onClick={() => navigate('/cardiovascular?tab=anatomia')}
              className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-left transition-all hover:opacity-80"
              style={{ background: 'rgba(0,234,211,0.06)', border: '1px solid rgba(0,234,211,0.15)' }}>
              <Microscope size={14} style={{ color: '#00EAD3' }} />
              <span className="text-[#F9FAFB]">Explorar anatomía</span>
            </button>
            <button onClick={() => navigate('/microcontrolador')}
              className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-left transition-all hover:opacity-80"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <Clock size={14} className="text-[#94A3B8]" />
              <span className="text-[#F9FAFB]">Emulador Arduino</span>
            </button>
          </div>
          <button onClick={startTour}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, rgba(0,234,211,0.15), rgba(0,234,211,0.05))', border: '1px solid rgba(0,234,211,0.3)', color: '#00EAD3' }}>
            <BookOpen size={14} />Iniciar Recorrido Guiado
          </button>
        </div>
      </div>
    </div>
  );
}
