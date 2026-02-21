import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import {
  RotateCcw, ZoomIn, ZoomOut, Layers, Play, Pause, RefreshCw,
  Heart, Activity, Zap, Eye, EyeOff, Info, Microscope, Cpu, Wifi, WifiOff
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ECGChart } from './ECGChart';
import heartImg from 'figma:asset/ba3373db19c2dfa1aac8a3df4d1c4e9b61e0b80a.png';
import { useWindkessel } from '../../hooks/useBinaryEngine';
import type { WindkesselSimulationRequest } from '../../services/binaryTypes';

// ─── Styles ───────────────────────────────────────────────────────────────────
const GLASS = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  backdropFilter: 'blur(12px)',
};
const PANEL = {
  background: 'rgba(10,20,40,0.7)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(16px)',
};

// ─── Windkessel Pressure ─────────────────────────────────────────────────────
function pressureAt(phase: number, bpm: number, R: number, C: number): number {
  const sys = Math.max(70, Math.min(220, 75 + R * 45 + (bpm - 75) * 0.3 + (1.2 - C) * 12));
  const dia = Math.max(40, Math.min(130, 55 + R * 25 + (bpm - 75) * 0.15 - (1.2 - C) * 4));
  const p = ((phase % 1) + 1) % 1;
  const sysRatio = 0.38;
  if (p < sysRatio) {
    return dia + (sys - dia) * Math.pow(Math.sin(Math.PI * p / sysRatio), 0.75);
  }
  const frac = (p - sysRatio) / (1 - sysRatio);
  const tau = Math.max(0.08, C * 0.22);
  // dicrotic notch
  const notch = frac < 0.12 ? -0.05 * (sys - dia) * Math.sin(Math.PI * frac / 0.12) : 0;
  return dia + (sys - dia) * 0.32 * Math.exp(-frac / tau) + notch;
}

// ─── Anatomy Tab ─────────────────────────────────────────────────────────────
const LABELS = [
  { id: 'ao', name: 'Aorta Ascendente', x: 52, y: 14, active: true },
  { id: 'vi', name: 'Ventrículo Izquierdo', x: 38, y: 64, active: true },
  { id: 'vd', name: 'Ventrículo Derecho', x: 64, y: 62, active: false },
  { id: 'ai', name: 'Aurícula Izquierda', x: 32, y: 30, active: false },
  { id: 'vm', name: 'Válvula Mitral', x: 42, y: 48, active: true },
  { id: 'ad', name: 'Aurícula Derecha', x: 68, y: 28, active: false },
  { id: 'vcs', name: 'Vena Cava Superior', x: 70, y: 10, active: false },
];

const LAYERS = [
  { id: 'musculo', label: 'Músculo Cardíaco', color: '#FF2E63' },
  { id: 'arterias', label: 'Arterias', color: '#00EAD3' },
  { id: 'cavidades', label: 'Cavidades', color: '#7c6ef8' },
  { id: 'conduccion', label: 'Sist. Conducción', color: '#f59e0b' },
];

function AnatomyTab() {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [activeLayers, setActiveLayers] = useState(['musculo', 'arterias']);
  const [activeLabel, setActiveLabel] = useState<string | null>('vi');
  const heartRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => { setDragging(true); setLastX(e.clientX); };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setRotation(r => r + (e.clientX - lastX) * 0.5);
    setLastX(e.clientX);
  };
  const handleMouseUp = () => setDragging(false);

  const toggleLayer = (id: string) => setActiveLayers(l => l.includes(id) ? l.filter(x => x !== id) : [...l, id]);

  return (
    <div className="flex gap-5 h-full">
      {/* Heart Viewer */}
      <div className="flex-1 rounded-2xl overflow-hidden relative" style={{ background: '#050e1a', border: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Info tooltip */}
        <div className="absolute top-4 left-4 z-10 rounded-xl p-3 text-xs max-w-[200px]" style={{
          background: 'rgba(8,18,38,0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#00EAD3] animate-pulse" />
            <span className="text-[#00EAD3] font-mono text-[10px] font-semibold">EN VIVO · Vista Anterior</span>
          </div>
          <p className="text-[#94A3B8]">Arrastra para rotar. Hover sobre etiquetas para ver detalles.</p>
        </div>

        {/* Speed/layer badges */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          {activeLayers.map(lid => {
            const l = LAYERS.find(x => x.id === lid);
            return l ? (
              <div key={lid} className="px-2 py-1 rounded-full text-[10px] font-mono"
                style={{ background: `${l.color}18`, border: `1px solid ${l.color}30`, color: l.color }}>
                {l.label.split(' ')[0]}
              </div>
            ) : null;
          })}
        </div>

        {/* Heart 3D Image */}
        <div
          ref={heartRef}
          className="w-full h-full flex items-center justify-center relative select-none"
          style={{ cursor: dragging ? 'grabbing' : 'grab', minHeight: 420 }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Glow base */}
          <div className="absolute rounded-full" style={{
            width: 320, height: 60, background: 'rgba(255,46,99,0.15)',
            filter: 'blur(30px)', bottom: '15%', left: '50%', transform: 'translateX(-50%)'
          }} />
          <div style={{ position: 'relative', transform: `scale(${zoom})`, transition: dragging ? 'none' : 'transform 0.3s' }}>
            <img
              src={heartImg}
              alt="Corazón 3D"
              draggable={false}
              style={{
                width: 380,
                height: 380,
                objectFit: 'contain',
                transform: `rotateY(${rotation}deg)`,
                transition: dragging ? 'none' : 'transform 0.1s',
                filter: 'drop-shadow(0 0 40px rgba(255,46,99,0.25))',
                animation: dragging ? 'none' : 'heartFloat 4s ease-in-out infinite',
              }}
            />
            {/* Anatomical Labels */}
            {LABELS.map(label => (
              <div
                key={label.id}
                onMouseEnter={() => setHoveredLabel(label.id)}
                onMouseLeave={() => setHoveredLabel(null)}
                onClick={() => setActiveLabel(label.id === activeLabel ? null : label.id)}
                style={{
                  position: 'absolute',
                  left: `${label.x}%`,
                  top: `${label.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: activeLabel === label.id ? '#00EAD3' : 'rgba(255,255,255,0.6)',
                  border: `2px solid ${activeLabel === label.id ? '#00EAD3' : 'rgba(255,255,255,0.4)'}`,
                  boxShadow: activeLabel === label.id ? '0 0 12px #00EAD3' : '0 0 6px rgba(255,255,255,0.4)',
                  transition: 'all 0.2s',
                }} />
                {(hoveredLabel === label.id || activeLabel === label.id) && (
                  <div style={{
                    position: 'absolute', left: 14, top: -12, whiteSpace: 'nowrap',
                    background: 'rgba(5,14,26,0.95)', backdropFilter: 'blur(10px)',
                    border: `1px solid ${activeLabel === label.id ? 'rgba(0,234,211,0.4)' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: 8, padding: '4px 10px',
                    color: activeLabel === label.id ? '#00EAD3' : '#F9FAFB',
                    fontSize: 11, fontWeight: 600,
                    boxShadow: activeLabel === label.id ? '0 0 15px rgba(0,234,211,0.2)' : 'none',
                  }}>
                    {label.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {[
            { icon: RotateCcw, label: 'Rotar', action: () => setRotation(r => r - 45) },
            { icon: ZoomOut, label: 'Zoom −', action: () => setZoom(z => Math.max(0.5, z - 0.15)) },
            { icon: ZoomIn, label: 'Zoom +', action: () => setZoom(z => Math.min(2, z + 0.15)) },
            { icon: RefreshCw, label: 'Reset', action: () => { setRotation(0); setZoom(1); } },
          ].map(btn => (
            <button
              key={btn.label}
              onClick={btn.action}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-[#94A3B8] hover:text-[#F9FAFB] transition-all active:scale-95"
              style={{ background: 'rgba(8,18,38,0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <btn.icon size={13} />{btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-[220px] flex flex-col gap-4">
        {/* Layers */}
        <div className="rounded-2xl p-4" style={PANEL}>
          <div className="text-[#F9FAFB] text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers size={12} /><span>Capas Visibles</span>
          </div>
          <div className="space-y-2">
            {LAYERS.map(layer => {
              const on = activeLayers.includes(layer.id);
              return (
                <div key={layer.id} onClick={() => toggleLayer(layer.id)}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer transition-all hover:opacity-80"
                  style={{
                    background: on ? `${layer.color}10` : 'rgba(255,255,255,0.02)',
                    border: on ? `1px solid ${layer.color}30` : '1px solid rgba(255,255,255,0.05)',
                  }}>
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: on ? layer.color : '#94A3B8' }} />
                  <span className="text-xs flex-1" style={{ color: on ? '#F9FAFB' : '#94A3B8' }}>{layer.label}</span>
                  {on ? <Eye size={11} style={{ color: layer.color }} /> : <EyeOff size={11} className="text-[#94A3B8]" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Structure List */}
        <div className="rounded-2xl p-4 flex-1" style={PANEL}>
          <div className="text-[#F9FAFB] text-xs font-semibold uppercase tracking-wider mb-3">
            Etiquetas · <span className="text-[#00EAD3]">{LABELS.filter(l => l.active).length}/12</span>
          </div>
          <div className="space-y-1">
            {LABELS.map(label => (
              <div key={label.id}
                onClick={() => setActiveLabel(label.id === activeLabel ? null : label.id)}
                className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs cursor-pointer transition-all"
                style={{
                  background: activeLabel === label.id ? 'rgba(0,234,211,0.1)' : 'transparent',
                  color: activeLabel === label.id ? '#00EAD3' : '#94A3B8',
                  border: activeLabel === label.id ? '1px solid rgba(0,234,211,0.25)' : '1px solid transparent',
                }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: activeLabel === label.id ? '#00EAD3' : '#94A3B8' }} />
                {label.name}
                {activeLabel === label.id && <Eye size={10} className="ml-auto text-[#00EAD3]" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Physiology Tab ───────────────────────────────────────────────────────────
const PRESETS = {
  normal: { bpm: 75, resistance: 1.0, compliance: 1.2, label: 'Normal', color: '#00EAD3' },
  hipertension: { bpm: 90, resistance: 1.8, compliance: 0.8, label: 'Hipertensión', color: '#FF2E63' },
  insuficiencia: { bpm: 100, resistance: 1.5, compliance: 1.8, label: 'Insuf. Cardíaca', color: '#f59e0b' },
};

function PhysiologyTab({ bpm, setBpm, resistance, setResistance, compliance, setCompliance, running, setRunning, time }: any) {
  // ─── Valores locales (mock instantáneo) ─────────────────────────────────────
  const sys = Math.round(Math.max(70, Math.min(220, 75 + resistance * 45 + (bpm - 75) * 0.3 + (1.2 - compliance) * 12)));
  const dia = Math.round(Math.max(40, Math.min(130, 55 + resistance * 25 + (bpm - 75) * 0.15 - (1.2 - compliance) * 4)));
  const map = Math.round(dia + (sys - dia) / 3);

  // ─── Hook Bio-Engine de Binary (Windkessel C++) ───────────────────────────────
  const windkesselReq = useMemo<WindkesselSimulationRequest>(() => ({
    t_start: 0,
    t_end: 10,
    dt: 0.01,
    y0: [80],
    params: { R: resistance, C: compliance, P_venous: 5 },
    heart_rate: bpm,
  }), [bpm, resistance, compliance]);

  const { data: wkData, engineSource, loading: wkLoading } = useWindkessel(windkesselReq);

  // ─── Datos de presión: Binary si disponible, mock si no ──────────────────────
  const pressureData = useMemo(() => {
    // Si Binary respondió, usar sus datos
    if (wkData && wkData.y && wkData.y[0] && wkData.y[0].length > 1) {
      const step = Math.max(1, Math.floor(wkData.t.length / 300));
      return wkData.t
        .filter((_, i) => i % step === 0)
        .map((_, i) => ({ x: i, p: Math.round(wkData.y[0][i * step] ?? dia) }));
    }
    // Fallback: cálculo local
    const SAMPLES = 300;
    const WINDOW = 4;
    const period = 60 / bpm;
    return Array.from({ length: SAMPLES }, (_, i) => {
      const t = time - WINDOW + (i / SAMPLES) * WINDOW;
      if (t < 0) return { x: i, p: dia };
      const phase = (t % period) / period;
      return { x: i, p: Math.round(pressureAt(phase, bpm, resistance, compliance)) };
    });
  }, [bpm, time, resistance, compliance, dia, wkData]);

  const loadPreset = (key: keyof typeof PRESETS) => {
    const p = PRESETS[key];
    setBpm(p.bpm); setResistance(p.resistance); setCompliance(p.compliance);
  };

  const SliderRow = ({ label, value, min, max, step, unit, color, onChange }: any) => (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider">{label}</span>
        <span className="font-mono text-sm font-bold" style={{ color, fontFamily: 'JetBrains Mono, monospace' }}>
          {value.toFixed(step < 1 ? 1 : 0)} <span className="text-[#94A3B8] text-xs font-normal">{unit}</span>
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 rounded-full cursor-pointer appearance-none"
        style={{
          background: `linear-gradient(90deg, ${color} ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) 0%)`,
          outline: 'none',
        }}
      />
      <div className="flex justify-between text-[#94A3B8] text-[10px] mt-1">
        <span>{min}</span><span>{max}</span>
      </div>
    </div>
  );

  return (
    <div className="flex gap-5 h-full">
      {/* Left Panel: Controls */}
      <div className="w-[260px] flex flex-col gap-4 flex-shrink-0">
        <div className="rounded-2xl p-5" style={PANEL}>
          <h3 className="text-[#F9FAFB] font-semibold text-sm mb-4">Ciclo Cardíaco</h3>
          <p className="text-[#94A3B8] text-xs mb-5 leading-relaxed">
            Ajusta los parámetros hemodinámicos para observar el impacto en la presión aórtica.
          </p>
          <SliderRow label="Frecuencia Cardíaca" value={bpm} min={40} max={180} step={1} unit="bpm" color="#FF2E63" onChange={setBpm} />
          <SliderRow label="Resistencia" value={resistance} min={0.5} max={3.0} step={0.1} unit="PRU" color="#7c6ef8" onChange={setResistance} />
          <SliderRow label="Compliancia" value={compliance} min={0.5} max={2.5} step={0.1} unit="mL/mmHg" color="#00EAD3" onChange={setCompliance} />

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button onClick={() => setRunning(!running)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all active:scale-95"
              style={{ background: running ? 'rgba(255,46,99,0.15)' : 'rgba(0,234,211,0.15)', border: `1px solid ${running ? 'rgba(255,46,99,0.3)' : 'rgba(0,234,211,0.3)'}`, color: running ? '#FF2E63' : '#00EAD3' }}>
              {running ? <><Pause size={12} />Pausar</> : <><Play size={12} />Iniciar</>}
            </button>
            <button onClick={() => loadPreset('normal')}
              className="px-3 py-2 rounded-xl text-xs text-[#94A3B8] hover:text-white transition-all active:scale-95"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <RefreshCw size={12} />
            </button>
          </div>
        </div>

        {/* Clinical Presets */}
        <div className="rounded-2xl p-4" style={PANEL}>
          <div className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-3">Escenarios Clínicos</div>
          <div className="space-y-2">
            {Object.entries(PRESETS).map(([key, p]) => (
              <button key={key} onClick={() => loadPreset(key as keyof typeof PRESETS)}
                className="w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all hover:opacity-80 active:scale-[0.98]"
                style={{ background: `${p.color}0d`, border: `1px solid ${p.color}25`, color: '#F9FAFB' }}>
                <span className="w-2 h-2 rounded-full inline-block mr-2" style={{ background: p.color }} />
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Chart */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Pressure Values */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'SISTÓLICA', value: sys, unit: 'mmHg', color: '#FF2E63' },
            { label: 'DIASTÓLICA', value: dia, unit: 'mmHg', color: '#00EAD3' },
            { label: 'PRESIÓN MEDIA', value: map, unit: 'mmHg', color: '#7c6ef8' },
          ].map(v => (
            <div key={v.label} className="rounded-xl p-4" style={GLASS}>
              <div className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wider mb-1">{v.label}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold" style={{ color: v.color, fontFamily: 'JetBrains Mono' }}>{v.value}</span>
                <span className="text-[#94A3B8] text-xs">{v.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pressure Chart */}
        <div className="flex-1 rounded-2xl overflow-hidden relative" style={{ background: '#040d1e', border: '1px solid rgba(255,255,255,0.07)', minHeight: 280 }}>
          <div className="absolute top-4 left-5 z-10 flex items-center gap-3 flex-wrap">
            <div>
              <span className="text-[#F9FAFB] font-semibold text-sm">Presión Aórtica (P</span>
              <span className="text-[#F9FAFB] font-semibold text-xs">ao</span>
              <span className="text-[#F9FAFB] font-semibold text-sm">)</span>
              <span className="text-[#94A3B8] text-xs ml-3">Monitorización en tiempo real</span>
            </div>
            {/* Indicador de motor Binary */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold"
              style={{
                background: engineSource === 'cpp' ? 'rgba(0,234,211,0.10)'
                          : engineSource === 'python_mock' ? 'rgba(124,110,248,0.10)'
                          : 'rgba(255,255,255,0.05)',
                border: engineSource === 'cpp' ? '1px solid rgba(0,234,211,0.3)'
                      : engineSource === 'python_mock' ? '1px solid rgba(124,110,248,0.3)'
                      : '1px solid rgba(255,255,255,0.1)',
                color: engineSource === 'cpp' ? '#00EAD3'
                     : engineSource === 'python_mock' ? '#7c6ef8'
                     : '#94A3B8',
              }}>
              <Cpu size={9} />
              {wkLoading ? 'Binary...'
               : engineSource === 'cpp' ? 'Binary C++'
               : engineSource === 'python_mock' ? 'Binary Python'
               : 'Modo local'}
            </div>
          </div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(124,110,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,110,248,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="absolute inset-0 pt-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pressureData} margin={{ top: 10, right: 16, bottom: 24, left: 48 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="x" hide />
                <YAxis domain={[0, 200]} tickCount={6} tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} width={36} />
                <ReferenceLine y={sys} stroke="rgba(255,46,99,0.3)" strokeDasharray="4 4" />
                <ReferenceLine y={dia} stroke="rgba(0,234,211,0.3)" strokeDasharray="4 4" />
                <Line type="monotoneX" dataKey="p" stroke="#7c6ef8" strokeWidth={2} dot={false} isAnimationActive={false}
                  style={{ filter: 'drop-shadow(0 0 5px rgba(124,110,248,0.6))' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute bottom-4 right-5 text-[#94A3B8] text-xs font-mono">t (s)</div>
        </div>
      </div>
    </div>
  );
}

// ─── ECG Monitor Tab ──────────────────────────────────────────────────────────
function ECGMonitorTab({ bpm, time, running, setRunning }: any) {
  const [filter60Hz, setFilter60Hz] = useState(true);
  const [baselineWander, setBaselineWander] = useState(false);
  const [highPass, setHighPass] = useState(true);

  const noiseLevel = (!filter60Hz ? 0.04 : 0) + (baselineWander ? 0.03 : 0) + (!highPass ? 0.02 : 0);
  const period = 60 / bpm;
  const rPeaks = Math.round(4 / period);
  const rrInterval = Math.round(period * 1000);

  // HR display color
  const hrColor = bpm < 60 ? '#7c6ef8' : bpm > 100 ? '#FF2E63' : '#00EAD3';
  const hrStatus = bpm < 60 ? 'Bradicardia' : bpm > 100 ? 'Taquicardia' : 'Ritmo Sinusal Normal';

  const Toggle = ({ label, value, onChange }: { label: string; value: boolean; onChange: () => void }) => (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all hover:bg-white/5"
      onClick={onChange}
      style={{ border: value ? '1px solid rgba(0,234,211,0.2)' : '1px solid rgba(255,255,255,0.06)' }}>
      <div className="relative w-8 h-4 rounded-full transition-colors duration-300 flex-shrink-0"
        style={{ background: value ? '#00EAD3' : 'rgba(255,255,255,0.1)' }}>
        <div className="absolute top-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform duration-300"
          style={{ transform: value ? 'translateX(16px)' : 'translateX(2px)' }} />
      </div>
      <span className="text-sm" style={{ color: value ? '#F9FAFB' : '#94A3B8' }}>{label}</span>
    </div>
  );

  return (
    <div className="flex gap-5 h-full">
      {/* ECG Chart Area */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Chart Header */}
        <div className="rounded-2xl overflow-hidden" style={{ background: '#010f09', border: '1px solid rgba(0,234,211,0.1)' }}>
          <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid rgba(0,234,211,0.08)' }}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#00EAD3] animate-pulse" />
              <span className="text-[#00EAD3] text-xs font-mono font-semibold tracking-widest">LIVE MONITORING · LEAD II</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#94A3B8] text-xs font-mono">25mm/s</span>
              <span className="text-[#94A3B8] text-xs font-mono">10mm/mV</span>
              <button onClick={() => setRunning(!running)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all active:scale-95"
                style={{ background: running ? 'rgba(255,46,99,0.1)' : 'rgba(0,234,211,0.1)', border: `1px solid ${running ? 'rgba(255,46,99,0.3)' : 'rgba(0,234,211,0.3)'}`, color: running ? '#FF2E63' : '#00EAD3' }}>
                {running ? <><Pause size={10} />Pausar</> : <><Play size={10} />Iniciar</>}
              </button>
            </div>
          </div>
          {/* Y axis labels */}
          <div className="relative" style={{ height: 220 }}>
            {['1.0 mV', '0.5 mV', '0', '-0.5 mV'].map((l, i) => (
              <div key={l} className="absolute left-3 text-[10px] font-mono" style={{
                color: 'rgba(0,234,211,0.5)', top: `${i * 30 + 8}%`, fontFamily: 'JetBrains Mono'
              }}>{l}</div>
            ))}
            <div className="ml-12 mr-0 h-full">
              <ECGChart bpm={bpm} time={time} noiseLevel={noiseLevel} height={220} />
            </div>
            {/* PQRST labels on chart */}
            <div className="absolute inset-0 pointer-events-none ml-12">
              {['P', 'Q', 'R', 'S', 'T'].map((l, i) => (
                <div key={l} className="absolute text-white/40 text-xs font-mono"
                  style={{ left: `${10 + i * 6}%`, top: l === 'R' ? '15%' : l === 'Q' || l === 'S' ? '62%' : '30%' }}>
                  {l}
                </div>
              ))}
            </div>
          </div>
          {/* Time axis */}
          <div className="flex justify-between px-14 pb-3 text-[10px] font-mono" style={{ color: 'rgba(0,234,211,0.4)' }}>
            {['0.0s', '0.4s', '0.8s', '1.2s', '1.6s', '2.0s', '2.4s', '2.8s', '3.2s', '3.6s'].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>

        {/* Filters */}
        <div className="rounded-2xl p-4" style={PANEL}>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-[#94A3B8]">
              <Activity size={13} /><span className="text-xs font-semibold">Filtros de Señal</span>
            </div>
            <div className="flex gap-3 flex-1 flex-wrap">
              <Toggle label="Paso bajo (40 Hz)" value={filter60Hz} onChange={() => setFilter60Hz(v => !v)} />
              <Toggle label="Notch 60Hz" value={!baselineWander} onChange={() => setBaselineWander(v => !v)} />
              <Toggle label="Paso alto (0.5 Hz)" value={highPass} onChange={() => setHighPass(v => !v)} />
            </div>
          </div>
        </div>

        {/* Event History */}
        <div className="rounded-2xl p-4" style={PANEL}>
          <div className="flex items-center gap-2 mb-3 text-[#F9FAFB]">
            <Activity size={13} style={{ color: '#00EAD3' }} />
            <span className="text-sm font-semibold">Historial de Eventos</span>
          </div>
          <div className="text-xs" style={{ fontFamily: 'JetBrains Mono' }}>
            <div className="grid grid-cols-4 gap-2 pb-2 mb-2 text-[#94A3B8] text-[10px] uppercase tracking-wider" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span>Tiempo</span><span>Evento</span><span>Valor</span><span>Estado</span>
            </div>
            {[
              { t: '00:05:22', event: 'Pico R Detectado', val: '1.2 mV', status: 'Normal' },
              { t: '00:05:21', event: 'Inicio Segmento ST', val: '-0.1 mV', status: 'Normal' },
              { t: '00:05:19', event: 'Onda P Detectada', val: '0.13 mV', status: 'Normal' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-2 py-2 text-[11px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <span className="text-[#94A3B8]">{row.t}</span>
                <span className="text-[#F9FAFB]">{row.event}</span>
                <span className="text-[#00EAD3]">{row.val}</span>
                <span className="px-2 py-0.5 rounded-full text-center" style={{ background: 'rgba(0,234,211,0.1)', color: '#00EAD3', width: 'fit-content' }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Vitals Panel */}
      <div className="w-[220px] flex flex-col gap-4">
        {/* HR */}
        <div className="rounded-2xl p-5" style={PANEL}>
          <div className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wider mb-3">Frecuencia Cardíaca</div>
          <div className="flex items-end justify-between mb-1">
            <div>
              <span className="text-5xl font-bold" style={{ color: hrColor, fontFamily: 'JetBrains Mono' }}>{bpm}</span>
              <span className="text-[#94A3B8] text-sm ml-1">bpm</span>
            </div>
            <Heart size={32} style={{ color: hrColor, opacity: 0.2 }} className="fill-current" />
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: hrColor }} />
            <span className="text-xs" style={{ color: hrColor }}>{hrStatus}</span>
          </div>
        </div>

        {/* Blood Pressure */}
        <div className="rounded-2xl p-4" style={PANEL}>
          <div className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wider mb-3">Presión Arterial</div>
          {(() => {
            const sys = Math.round(Math.max(70, Math.min(220, 75 + 45 + (bpm - 75) * 0.3)));
            const dia = Math.round(Math.max(40, Math.min(130, 55 + 25 + (bpm - 75) * 0.15)));
            return (
              <div className="text-center">
                <span className="text-2xl font-bold text-[#F9FAFB]" style={{ fontFamily: 'JetBrains Mono' }}>{sys}</span>
                <span className="text-[#94A3B8] text-lg mx-1">/</span>
                <span className="text-2xl font-bold text-[#F9FAFB]" style={{ fontFamily: 'JetBrains Mono' }}>{dia}</span>
                <div className="text-[#94A3B8] text-xs mt-0.5">mmHg</div>
              </div>
            );
          })()}
        </div>

        {/* Events */}
        <div className="rounded-2xl p-4" style={PANEL}>
          <div className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wider mb-3 flex items-center justify-between">
            <span>Eventos Detectados</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <div className="text-[#94A3B8] text-[10px] mb-1">Picos R</div>
              <div className="text-[#F9FAFB] text-xl font-bold font-mono">{rPeaks}</div>
            </div>
            <div>
              <div className="text-[#94A3B8] text-[10px] mb-1">Intervalo RR</div>
              <div className="text-[#F9FAFB] text-xl font-bold font-mono">{rrInterval}<span className="text-[#94A3B8] text-xs"> ms</span></div>
            </div>
          </div>
          <div className="text-[#F9FAFB] text-xs font-semibold mb-3">Segmentos Clave</div>
          {[
            { label: 'Intervalo PR', val: 160, color: '#7c6ef8', max: 200 },
            { label: 'Complejo QRS', val: 90, color: '#FF2E63', max: 120 },
            { label: 'Intervalo QT', val: 380, color: '#f59e0b', max: 500 },
          ].map(s => (
            <div key={s.label} className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#94A3B8]">{s.label}</span>
                <span className="font-mono" style={{ color: s.color, fontFamily: 'JetBrains Mono' }}>{s.val} ms</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div className="h-full rounded-full" style={{ width: `${(s.val / s.max) * 100}%`, background: s.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Wave Guide */}
        <div className="rounded-2xl p-4" style={{ ...PANEL, background: 'rgba(0,234,211,0.04)', border: '1px solid rgba(0,234,211,0.15)' }}>
          <div className="flex items-center gap-1.5 mb-2">
            <Info size={12} style={{ color: '#00EAD3' }} />
            <span className="text-[#00EAD3] text-xs font-semibold">Guía de Ondas</span>
          </div>
          <p className="text-[#94A3B8] text-xs leading-relaxed">
            La onda P representa la despolarización auricular. El complejo QRS corresponde a la despolarización ventricular, y la onda T muestra la repolarización.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Cardiovascular Module ────────────────────────────────────────────────────
export function CardiovascularModule() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = (searchParams.get('tab') || 'anatomia') as 'anatomia' | 'fisiologia' | 'ecg';

  const [bpm, setBpm] = useState(75);
  const [resistance, setResistance] = useState(1.0);
  const [compliance, setCompliance] = useState(1.2);
  const [running, setRunning] = useState(true);
  const [time, setTime] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => setTime(t => t + 0.05), 50);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [running]);

  const TABS = [
    { id: 'anatomia', label: 'Anatomía 3D', icon: Microscope },
    { id: 'fisiologia', label: 'Fisiología', icon: Activity },
    { id: 'ecg', label: 'Monitor ECG', icon: Zap },
  ] as const;

  return (
    <div className="flex flex-col h-full p-5 gap-5" style={{ minHeight: 'calc(100vh - 48px)' }}>
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F9FAFB] mb-1" style={{ letterSpacing: '-0.4px' }}>
            Módulo Cardiovascular
          </h1>
          <p className="text-[#94A3B8] text-sm">Simulación del ciclo cardíaco y señales biomédicas en tiempo real</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl text-xs font-mono" style={{ background: 'rgba(0,234,211,0.08)', border: '1px solid rgba(0,234,211,0.2)', color: '#00EAD3' }}>
            HR: <strong>{bpm}</strong> bpm
          </div>
          <div className="px-3 py-1.5 rounded-xl text-xs font-mono" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8' }}>
            R: <strong>{resistance.toFixed(1)}</strong> PRU · C: <strong>{compliance.toFixed(1)}</strong> mL/mmHg
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', width: 'fit-content' }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSearchParams({ tab: tab.id })}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: activeTab === tab.id ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: activeTab === tab.id ? '#F9FAFB' : '#94A3B8',
              border: activeTab === tab.id ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
              boxShadow: activeTab === tab.id ? '0 2px 8px rgba(0,0,0,0.3)' : 'none',
            }}
          >
            <tab.icon size={14} style={{ color: activeTab === tab.id ? '#00EAD3' : 'inherit' }} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'anatomia' && <AnatomyTab />}
        {activeTab === 'fisiologia' && (
          <PhysiologyTab
            bpm={bpm} setBpm={setBpm}
            resistance={resistance} setResistance={setResistance}
            compliance={compliance} setCompliance={setCompliance}
            running={running} setRunning={setRunning}
            time={time}
          />
        )}
        {activeTab === 'ecg' && (
          <ECGMonitorTab bpm={bpm} time={time} running={running} setRunning={setRunning} />
        )}
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-between py-3 px-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <button onClick={() => {
          const idx = TABS.findIndex(t => t.id === activeTab);
          if (idx > 0) setSearchParams({ tab: TABS[idx - 1].id });
        }} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-white transition-all"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          ← Anterior
        </button>
        <div className="flex gap-2">
          {TABS.map(t => (
            <div key={t.id} onClick={() => setSearchParams({ tab: t.id })}
              className="w-2 h-2 rounded-full cursor-pointer transition-all duration-200"
              style={{ background: activeTab === t.id ? '#00EAD3' : 'rgba(255,255,255,0.2)', boxShadow: activeTab === t.id ? '0 0 8px #00EAD3' : 'none' }} />
          ))}
        </div>
        <button onClick={() => {
          const idx = TABS.findIndex(t => t.id === activeTab);
          if (idx < TABS.length - 1) setSearchParams({ tab: TABS[idx + 1].id });
        }} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95"
          style={{ background: 'rgba(0,234,211,0.1)', border: '1px solid rgba(0,234,211,0.3)', color: '#00EAD3' }}>
          Siguiente Lección →
        </button>
      </div>

      {/* Floating animation style */}
      <style>{`
        @keyframes heartFloat {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-12px) rotateY(4deg); }
        }
      `}</style>
    </div>
  );
}