/**
 * PharmaModule.tsx — Simulador de Farmacocinética (Modelo 1-Compartimento)
 * Sprint 2 — Binary ↔ Séptima Integración
 *
 * Conecta al endpoint /api/septima/bio/pharmacokinetics de Binary EquaLab.
 * Simula absorción, distribución y eliminación de fármacos con dosis única o múltiple.
 */

import React, { useState, useMemo, useCallback } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Tooltip, ReferenceLine
} from 'recharts';
import { Pill, Cpu, RefreshCw, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useODE } from '../../hooks/useBinaryEngine';
import type { ODESimulationRequest } from '../../services/binaryTypes';
import { ExportButton } from './ExportButton';
import { QuizCard } from './QuizCard';
import { buildExportHandlers } from '../../utils/exportUtils';

// ─── Presets de fármacos reales ─────────────────────────────────────────────────
const DRUGS = {
  amoxicillin: {
    label: 'Amoxicilina 500mg',
    color: '#00EAD3',
    dose: 500, ka: 1.0, ke: 0.60, Vd: 15, F: 0.93,
    t_end: 24, interval: 8, n: 3,
    desc: 'Antibiótico β-lactámico. Tres dosis cada 8h. t½ ≈ 1.2h.',
    threshold: 1.5,  // MIC (mg/L)
    toxic: 50,        // nivel tóxico
  },
  ibuprofen: {
    label: 'Ibuprofeno 400mg',
    color: '#f59e0b',
    dose: 400, ka: 0.8, ke: 0.20, Vd: 10, F: 0.80,
    t_end: 24, interval: 6, n: 4,
    desc: 'AINE. Cuatro dosis cada 6h. t½ ≈ 3.5h.',
    threshold: 5,
    toxic: 100,
  },
  digoxin: {
    label: 'Digoxina 0.25mg',
    color: '#FF2E63',
    dose: 0.25, ka: 0.5, ke: 0.021, Vd: 440, F: 0.70,
    t_end: 168, interval: 24, n: 7,
    desc: 'Cardiotónico digital. Una dosis diaria · 7 días. t½ ≈ 33h.',
    threshold: 0.0005,
    toxic: 0.0012,
  },
};

// ─── Fallback local (1-compartimento, Euler) ─────────────────────────────────────
function localPK(req: ODESimulationRequest): import('../../services/binaryTypes').SimulationResult {
  const { ka = 1, ke = 0.15, Vd = 10, dose_mg = 500, F = 1, interval_h = 8, n_doses = 1 } = (req.params ?? {}) as any;
  const dose0 = dose_mg * F;
  const dt = req.dt;
  const steps = Math.ceil((req.t_end - req.t_start) / dt);
  const doseTimes = Array.from({ length: Number(n_doses) }, (_, i) => i * Number(interval_h));
  let A = dose0, C = 0;
  const t_arr: number[] = [], A_arr: number[] = [], C_arr: number[] = [];
  let t = 0;
  for (let i = 0; i <= steps; i++) {
    t_arr.push(t); A_arr.push(A); C_arr.push(C);
    // Añadir dosis en los tiempos correctos
    if (i > 0 && doseTimes.slice(1).some(dt2 => Math.abs(t - dt2) < dt / 2)) A += dose0;
    const dA = -ka * A;
    const dC = (ka * A) / Vd - ke * C;
    A += dA * dt; C += dC * dt;
    A = Math.max(0, A); C = Math.max(0, C);
    t += dt;
  }
  return { t: t_arr, y: [A_arr, C_arr], model: 'compartment_pk', metadata: { engine: 'local' as any } };
}

// ─── Slider ──────────────────────────────────────────────────────────────────────
function Slider({ label, value, min, max, step, unit, color, onChange }: any) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-[#94A3B8] text-[11px] uppercase tracking-wider font-semibold">{label}</span>
        <span className="font-mono text-sm font-bold" style={{ color }}>{value} <span className="text-[#94A3B8] text-[10px] font-normal">{unit}</span></span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))} className="w-full h-1.5 rounded-full cursor-pointer appearance-none"
        style={{ background: `linear-gradient(90deg, ${color} ${pct}%, rgba(255,255,255,0.1) 0%)` }} />
    </div>
  );
}

// ─── Tooltip personalizado ──────────────────────────────────────────────────────
const PKTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: 'rgba(4,13,30,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '8px 12px' }}>
      <p className="text-[#94A3B8] text-[10px] mb-1 font-mono">{`t = ${Number(label).toFixed(1)} h`}</p>
      {payload.map((p: any) => (
        <div key={p.name} className="flex justify-between gap-4 text-xs">
          <span style={{ color: p.color }}>{p.name}</span>
          <span className="font-mono font-bold" style={{ color: p.color }}>{Number(p.value).toFixed(3)} mg/L</span>
        </div>
      ))}
    </div>
  );
};

// ─── Componente Principal ────────────────────────────────────────────────────────
export function PharmaModule() {
  const [selectedDrug, setDrug] = useState<keyof typeof DRUGS>('amoxicillin');
  const [dose,     setDose]   = useState(500.0);
  const [ka,       setKa]     = useState(1.0);
  const [ke,       setKe]     = useState(0.60);
  const [Vd,       setVd]     = useState(15.0);
  const [F,        setF_]     = useState(0.93);
  const [tEnd,     setTend]   = useState(24.0);
  const [interval, setInt]    = useState(8.0);
  const [nDoses,   setNd]     = useState(3);
  const [regimen,  setReg]    = useState<'single'|'multiple'>('multiple');
  const [showAdv,  setAdv]    = useState(false);

  const drug = DRUGS[selectedDrug];

  const loadDrug = useCallback((key: keyof typeof DRUGS) => {
    const d = DRUGS[key];
    setDrug(key); setDose(d.dose); setKa(d.ka); setKe(d.ke);
    setVd(d.Vd); setF_(d.F); setTend(d.t_end);
    setInt(d.interval); setNd(d.n);
    setReg('multiple');
  }, []);

  // Request al backend
  const req = useMemo<ODESimulationRequest>(() => ({
    model: 'compartment_pk',
    t_start: 0, t_end: tEnd, dt: 0.05,
    y0: [dose * F, 0.0],
    params: { ka, ke, Vd, F, dose_mg: dose, interval_h: interval, n_doses: nDoses, regimen },
    method: 'RungeKutta4',
  }), [dose, ka, ke, Vd, F, tEnd, interval, nDoses, regimen]);

  const { data, loading, engineSource } = useODE(req, 400);

  // Datos para gráfica — solo C_plasma (y[1])
  const chartData = useMemo(() => {
    if (!data || !data.y[1]) return [];
    const step = Math.max(1, Math.floor(data.t.length / 300));
    return data.t.filter((_, i) => i % step === 0).map((t, i) => ({
      t: parseFloat(t.toFixed(2)),
      C: parseFloat(Math.max(0, data.y[1][i * step] ?? 0).toFixed(4)),
    }));
  }, [data]);

  // Estadísticas
  const Cmax   = data ? Math.max(...data.y[1].map(v => v ?? 0)).toFixed(3) : '—';
  const Cmin   = data ? Math.min(...data.y[1].filter((v, i) => i > 10 && (v ?? 0) > 0)).toFixed(3) : '—';
  const halfLife = (0.693 / ke).toFixed(1);
  const aboveThreshold = chartData.filter(d => d.C >= drug.threshold).length;
  const coverage = chartData.length > 0 ? Math.round((aboveThreshold / chartData.length) * 100) : 0;

  const engineColor = engineSource === 'cpp' ? '#00EAD3' : engineSource === 'python_mock' ? '#7c6ef8' : '#94A3B8';
  const engineLabel = loading ? 'Calculando...' : engineSource === 'cpp' ? 'Binary C++' : engineSource === 'python_mock' ? 'Binary Python' : 'Modo local';

  return (
    <div className="flex flex-col h-full p-5 gap-4" style={{ minHeight: 'calc(100vh - 48px)' }}>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F9FAFB] mb-0.5" style={{ letterSpacing: '-0.4px' }}>Módulo de Farmacocinética</h1>
          <p className="text-[#94A3B8] text-sm">Modelo 1-Compartimento · Absorción → Distribución → Eliminación</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold"
          style={{ background: `${engineColor}15`, border: `1px solid ${engineColor}30`, color: engineColor }}>
          <Cpu size={11}/>{engineLabel}
        </div>
        {!loading && data && (
          <ExportButton
            accentColor={drug.color}
            onExportCSV={buildExportHandlers(data, ['A_gut (mg)', 'C plasma (mg/L)'], { model: 'compartment_pk', engine: engineSource ?? 'local', params: { dose, ka, ke, Vd, F } }, 'pk-chart').onExportCSV}
            onExportPNG={buildExportHandlers(data, ['A_gut (mg)', 'C plasma (mg/L)'], { model: 'compartment_pk', engine: engineSource ?? 'local', params: { dose, ka, ke, Vd, F } }, 'pk-chart').onExportPNG}
          />
        )}
      </div>

      <div className="flex gap-4 flex-1 overflow-hidden">

        {/* Panel izquierdo */}
        <div className="w-[270px] flex flex-col gap-3 flex-shrink-0 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>

          {/* Selector de fármaco */}
          <div style={{ background:'rgba(10,20,40,0.7)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(16px)', borderRadius:16, padding:14 }}>
            <div className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wider mb-3">Fármaco</div>
            <div className="space-y-2">
              {Object.entries(DRUGS).map(([key, d]) => (
                <button key={key} onClick={() => loadDrug(key as keyof typeof DRUGS)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all ${selectedDrug === key ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                  style={{ background: `${d.color}${selectedDrug === key ? '15' : '08'}`, border: `1px solid ${d.color}${selectedDrug === key ? '40' : '18'}`, color: '#F9FAFB' }}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <Pill size={10} style={{ color: d.color }}/>
                    <span className="font-semibold">{d.label}</span>
                  </div>
                  <p className="text-[#94A3B8] text-[10px] leading-snug ml-4">{d.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Régimen de dosificación */}
          <div style={{ background:'rgba(10,20,40,0.7)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(16px)', borderRadius:16, padding:14 }}>
            <div className="text-[#F9FAFB] text-xs font-semibold mb-3">Régimen de Dosificación</div>
            <div className="flex gap-2 mb-3">
              {(['single', 'multiple'] as const).map(r => (
                <button key={r} onClick={() => setReg(r)}
                  className="flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-all"
                  style={{ background: regimen === r ? `${drug.color}15` : 'rgba(255,255,255,0.04)', border: `1px solid ${regimen === r ? drug.color + '40' : 'rgba(255,255,255,0.08)'}`, color: regimen === r ? drug.color : '#94A3B8' }}>
                  {r === 'single' ? 'Dosis única' : 'Múltiple'}
                </button>
              ))}
            </div>
            <Slider label="Dosis" value={dose} min={1} max={2000} step={1} unit="mg" color={drug.color} onChange={setDose}/>
            {regimen === 'multiple' && (
              <>
                <Slider label="Intervalo" value={interval} min={1} max={24} step={1} unit="h" color={drug.color} onChange={setInt}/>
                <Slider label="N.º de dosis" value={nDoses} min={1} max={10} step={1} unit="" color={drug.color} onChange={setNd}/>
              </>
            )}
            <Slider label="Duración total" value={tEnd} min={4} max={200} step={4} unit="h" color="#94A3B8" onChange={setTend}/>
          </div>

          {/* Parámetros avanzados */}
          <div style={{ background:'rgba(10,20,40,0.7)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(16px)', borderRadius:16, padding:14 }}>
            <button onClick={() => setAdv(v => !v)} className="w-full flex items-center justify-between text-xs font-semibold text-[#F9FAFB] mb-2">
              <span>Parámetros PK</span>
              {showAdv ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
            </button>
            {showAdv && (
              <>
                <Slider label="ka — Absorción" value={ka} min={0.05} max={5} step={0.05} unit="1/h" color="#00EAD3" onChange={setKa}/>
                <Slider label="ke — Eliminación" value={ke} min={0.01} max={2} step={0.01} unit="1/h" color="#FF2E63" onChange={setKe}/>
                <Slider label="Vd — Distribución" value={Vd} min={1} max={500} step={1} unit="L" color="#7c6ef8" onChange={setVd}/>
                <Slider label="F — Biodisponibilidad" value={F} min={0.1} max={1} step={0.01} unit="" color="#f59e0b" onChange={setF_}/>
              </>
            )}
          </div>
        </div>

        {/* Panel de gráficas */}
        <div className="flex-1 flex flex-col gap-3 overflow-hidden">

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'C MÁXIMA', value: Cmax, unit: 'mg/L', color: drug.color },
              { label: 'C MÍNIMA', value: Cmin, unit: 'mg/L', color: '#94A3B8' },
              { label: 't½ VIDA MEDIA', value: halfLife, unit: 'h', color: '#f59e0b' },
              { label: 'COBERTURA MIC', value: `${coverage}%`, unit: '', color: '#7c6ef8' },
            ].map(v => (
              <div key={v.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-[#94A3B8] text-[9px] uppercase tracking-wider font-semibold mb-0.5">{v.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold" style={{ color: v.color, fontFamily: 'JetBrains Mono' }}>{v.value}</span>
                  <span className="text-[#94A3B8] text-[10px]">{v.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gráfica principal */}
          <div id="pk-chart" className="flex-1 rounded-2xl overflow-hidden relative" style={{ background: '#040d1e', border: '1px solid rgba(255,255,255,0.07)', minHeight: 280 }}>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-10" style={{ background: 'rgba(4,13,30,0.65)', backdropFilter: 'blur(4px)' }}>
                <div className="flex items-center gap-2 font-mono text-sm" style={{ color: drug.color }}>
                  <RefreshCw size={14} className="animate-spin"/>Calculando con Binary...
                </div>
              </div>
            )}
            <div className="absolute top-4 left-5 z-10">
              <span className="text-[#F9FAFB] font-semibold text-sm">Concentración Plasmática C(t)</span>
              <span className="text-[#94A3B8] text-xs ml-3">{drug.label}</span>
            </div>
            <div className="absolute inset-0 pt-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 8, right: 20, bottom: 28, left: 52 }}>
                  <defs>
                    <linearGradient id="pkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={drug.color} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={drug.color} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)"/>
                  <XAxis dataKey="t" tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} label={{ value: 'Tiempo (h)', position: 'insideBottom', offset: -12, fill: '#94A3B8', fontSize: 10 }}/>
                  <YAxis tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} width={48} label={{ value: 'C (mg/L)', angle: -90, position: 'insideLeft', fill: drug.color, fontSize: 10, dx: -8 }}/>
                  {/* MIC — Concentración mínima inhibitoria */}
                  <ReferenceLine y={drug.threshold} stroke={`${drug.color}60`} strokeDasharray="6 3" label={{ value: 'MIC', fill: drug.color, fontSize: 10, position: 'right' }}/>
                  {/* Nivel tóxico */}
                  <ReferenceLine y={drug.toxic} stroke="rgba(255,46,99,0.4)" strokeDasharray="4 4" label={{ value: 'Tóxico', fill: '#FF2E63', fontSize: 10, position: 'right' }}/>
                  <Tooltip content={<PKTooltip/>}/>
                  <Area type="monotone" dataKey="C" name="C plasma" stroke={drug.color} strokeWidth={2.5} fill="url(#pkGrad)" dot={false} isAnimationActive={false}/>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Nota educativa */}
          <div className="rounded-xl p-3 flex gap-3 items-start" style={{ background: `${drug.color}06`, border: `1px solid ${drug.color}15` }}>
            <Info size={13} style={{ color: drug.color, flexShrink: 0, marginTop: 2 }}/>
            <p className="text-[#94A3B8] text-[11px] leading-relaxed">
              <span className="font-semibold" style={{ color: drug.color }}>Modelo 1-Compartimento:</span>{' '}
              El fármaco se absorbe del GI (tasa <em>ka</em>), se distribuye en el volumen aparente <em>Vd</em>
              y se elimina por riñón/hígado (tasa <em>ke</em>). La concentración por encima del MIC
              garantiza eficacia antimicrobiana. Por encima del nivel tóxico se producen efectos adversos.
            </p>
          </div>

          {/* Quiz Adaptativo */}
          <QuizCard
            accentColor={drug.color}
            context={`Farmacocinética ${drug.label}. ka=${ka}/h, ke=${ke}/h, Vd=${Vd}L, F=${F}. Régimen: ${regimen}, ${nDoses} dosis de ${dose}mg c/${interval}h. Cmax=${Cmax} mg/L, t½=${halfLife}h, cobertura MIC=${coverage}%.`}
          />
        </div>
      </div>
    </div>
  );
}
