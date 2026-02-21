/**
 * NeuralModule.tsx — Simulador de Potencial de Acción (Modelo Hodgkin-Huxley)
 * Sprint 2 — Binary ↔ Séptima Integración
 *
 * Conecta al endpoint /api/septima/bio/neuron de Binary EquaLab.
 * Fallback local con cálculo Euler simplificado si Binary no responde.
 */

import React, { useState, useMemo, useCallback } from 'react';
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis,
  CartesianGrid, ResponsiveContainer, Tooltip, Legend, ReferenceLine
} from 'recharts';
import { Zap, Brain, RefreshCw, Cpu, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useODE } from '../../hooks/useBinaryEngine';
import type { ODESimulationRequest } from '../../services/binaryTypes';
import { ExportButton } from './ExportButton';
import { QuizCard } from './QuizCard';
import { buildExportHandlers } from '../../utils/exportUtils';

// ─── Estilos ────────────────────────────────────────────────────────────────────
const PANEL: React.CSSProperties = {
  background: 'rgba(10,20,40,0.7)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(16px)',
  borderRadius: 16,
  padding: 16,
};

// ─── Presets fisiológicos ────────────────────────────────────────────────────────
const PRESETS = {
  normal: {
    label: 'Axón Normal',
    color: '#00EAD3',
    I_ext: 10, g_Na: 120, g_K: 36, desc: 'Potencial de acción estándar del axón gigante de calamar.',
  },
  epilepsy: {
    label: 'Actividad Epiléptica',
    color: '#FF2E63',
    I_ext: 20, g_Na: 150, g_K: 30, desc: 'Hiperexcitabilidad: corriente elevada y conductancia Na⁺ aumentada.',
  },
  anesthesia: {
    label: 'Bloqueo Anestésico',
    color: '#94A3B8',
    I_ext: 10, g_Na: 30, g_K: 36, desc: 'Bloqueo de canales Na⁺ (efecto lidocaína): inhibe el potencial de acción.',
  },
};

// ─── Fallback local (HH simplificado con Euler) ─────────────────────────────────
function localHH(req: ODESimulationRequest): import('../../services/binaryTypes').SimulationResult {
  const [g_Na, g_K, g_L, E_Na, E_K, E_L, I_ext, C_m] = [
    req.params?.g_Na ?? 120, req.params?.g_K ?? 36, 0.3,
    50, -77, -54.4, req.params?.I_ext ?? 10, 1.0
  ] as number[];
  let [V, m, h, n] = req.y0;
  const dt = req.dt;
  const steps = Math.ceil((req.t_end - req.t_start) / dt);
  const t_arr: number[] = [], V_arr: number[] = [], m_arr: number[] = [];
  const h_arr: number[] = [], n_arr: number[] = [];
  let t = req.t_start;
  for (let i = 0; i <= steps; i++) {
    t_arr.push(t); V_arr.push(V); m_arr.push(m); h_arr.push(h); n_arr.push(n);
    const am = Math.abs(V+40)<1e-4 ? 1.0 : 0.1*(V+40)/(1-Math.exp(-(V+40)/10));
    const bm = 4*Math.exp(-(V+65)/18);
    const ah = 0.07*Math.exp(-(V+65)/20);
    const bh = 1/(1+Math.exp(-(V+35)/10));
    const an = Math.abs(V+55)<1e-4 ? 0.1 : 0.01*(V+55)/(1-Math.exp(-(V+55)/10));
    const bn = 0.125*Math.exp(-(V+65)/80);
    const INa = g_Na*m**3*h*(V-E_Na);
    const IK  = g_K*n**4*(V-E_K);
    const IL  = g_L*(V-E_L);
    V += ((I_ext - INa - IK - IL)/C_m)*dt;
    m += (am*(1-m)-bm*m)*dt;
    h += (ah*(1-h)-bh*h)*dt;
    n += (an*(1-n)-bn*n)*dt;
    t += dt;
  }
  return { t: t_arr, y: [V_arr, m_arr, h_arr, n_arr], model: 'hodgkin_huxley', metadata: { engine: 'local' as any } };
}

// ─── Slider ──────────────────────────────────────────────────────────────────────
function Slider({ label, value, min, max, step, unit, color, onChange }: any) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[#94A3B8] text-[11px] uppercase tracking-wider font-semibold">{label}</span>
        <span className="font-mono text-sm font-bold" style={{ color }}>{value} <span className="text-[#94A3B8] text-[10px] font-normal">{unit}</span></span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full cursor-pointer appearance-none"
        style={{ background: `linear-gradient(90deg, ${color} ${((value-min)/(max-min))*100}%, rgba(255,255,255,0.1) 0%)` }} />
    </div>
  );
}

// ─── Componente Principal ────────────────────────────────────────────────────────
export function NeuralModule() {
  // Parámetros
  const [I_ext, setIext]  = useState(10.0);
  const [g_Na,  setGna]   = useState(120.0);
  const [g_K,   setGk]    = useState(36.0);
  const [tEnd,  setTend]  = useState(100.0);
  const [showAdv, setAdv] = useState(false);

  const loadPreset = useCallback((key: keyof typeof PRESETS) => {
    const p = PRESETS[key];
    setIext(p.I_ext); setGna(p.g_Na); setGk(p.g_K);
  }, []);

  // Request biomédico
  const req = useMemo<ODESimulationRequest>(() => ({
    model: 'hodgkin_huxley',
    t_start: 0, t_end: tEnd, dt: 0.025,
    y0: [-65.0, 0.05, 0.6, 0.32],
    params: { g_Na, g_K, g_L: 0.3, E_Na: 50, E_K: -77, E_L: -54.4, I_ext, C_m: 1.0 },
    method: 'RungeKutta4',
  }), [I_ext, g_Na, g_K, tEnd]);

  const { data, loading, engineSource } = useODE(req, 500);

  // Preparar datos para gráfica (submuestreo)
  const chartData = useMemo(() => {
    if (!data || !data.y[0]) return [];
    const step = Math.max(1, Math.floor(data.t.length / 400));
    return data.t.filter((_, i) => i % step === 0).map((t, i) => ({
      t: parseFloat(t.toFixed(2)),
      V: parseFloat((data.y[0][i*step] ?? -65).toFixed(2)),
      m: parseFloat((data.y[1][i*step] ?? 0).toFixed(3)),
      h: parseFloat((data.y[2][i*step] ?? 0).toFixed(3)),
      n: parseFloat((data.y[3][i*step] ?? 0).toFixed(3)),
    }));
  }, [data]);

  // Detectar picos (potenciales de acción)
  const actionPotentials = useMemo(() => {
    if (!chartData.length) return 0;
    let count = 0, prev = false;
    for (const d of chartData) {
      const above = d.V > 0;
      if (above && !prev) count++;
      prev = above;
    }
    return count;
  }, [chartData]);

  const peakV = data ? Math.max(...(data.y[0] ?? [-65])).toFixed(1) : '—';
  const restV  = '-65.0';

  const engineColor = engineSource === 'cpp' ? '#00EAD3' : engineSource === 'python_mock' ? '#7c6ef8' : '#94A3B8';
  const engineLabel = loading ? 'Calculando...'
    : engineSource === 'cpp' ? 'Binary C++'
    : engineSource === 'python_mock' ? 'Binary Python'
    : 'Modo local';

  return (
    <div className="flex flex-col h-full p-5 gap-4" style={{ minHeight: 'calc(100vh - 48px)' }}>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F9FAFB] mb-0.5" style={{ letterSpacing: '-0.4px' }}>
            Módulo Neuronal
          </h1>
          <p className="text-[#94A3B8] text-sm">Modelo Hodgkin-Huxley · Potencial de Acción 1952</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold"
          style={{ background: `${engineColor}15`, border: `1px solid ${engineColor}30`, color: engineColor }}>
          <Cpu size={11} />{engineLabel}
        </div>
        {!loading && data && (
          <ExportButton
            accentColor="#e879f9"
            onExportCSV={buildExportHandlers(data, ['V (mV)','m','h','n'],{ model:'hodgkin_huxley', engine: engineSource ?? 'local', params:{ I_ext, g_Na, g_K } },'neural-chart').onExportCSV}
            onExportPNG={buildExportHandlers(data, ['V (mV)','m','h','n'],{ model:'hodgkin_huxley', engine: engineSource ?? 'local', params:{ I_ext, g_Na, g_K } },'neural-chart').onExportPNG}
          />
        )}
      </div>

      <div className="flex gap-4 flex-1 overflow-hidden">

        {/* Panel izquierdo */}
        <div className="w-[260px] flex flex-col gap-3 flex-shrink-0 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>

          {/* Presets */}
          <div style={PANEL}>
            <div className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wider mb-3">Escenarios</div>
            <div className="space-y-2">
              {Object.entries(PRESETS).map(([key, p]) => (
                <button key={key} onClick={() => loadPreset(key as keyof typeof PRESETS)}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs transition-all hover:opacity-80"
                  style={{ background: `${p.color}0d`, border: `1px solid ${p.color}25`, color: '#F9FAFB' }}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2 h-2 rounded-full inline-block flex-shrink-0" style={{ background: p.color }} />
                    <span className="font-semibold">{p.label}</span>
                  </div>
                  <p className="text-[#94A3B8] text-[10px] leading-snug ml-4">{p.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Estímulo */}
          <div style={PANEL}>
            <div className="text-[#F9FAFB] text-xs font-semibold mb-3">Parámetros de Estímulo</div>
            <Slider label="Corriente externa (I)" value={I_ext} min={0} max={30} step={0.5} unit="µA/cm²" color="#FF2E63" onChange={setIext} />
            <Slider label="Duración simulación" value={tEnd} min={20} max={200} step={10} unit="ms" color="#94A3B8" onChange={setTend} />
          </div>

          {/* Avanzado */}
          <div style={PANEL}>
            <button onClick={() => setAdv(v => !v)} className="w-full flex items-center justify-between text-xs font-semibold text-[#F9FAFB] mb-2">
              <span>Canales Iónicos</span>
              {showAdv ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
            </button>
            {showAdv && (
              <>
                <Slider label="g_Na — Sódio" value={g_Na} min={10} max={200} step={5} unit="mS/cm²" color="#00EAD3" onChange={setGna} />
                <Slider label="g_K — Potasio" value={g_K} min={5} max={80} step={2} unit="mS/cm²" color="#7c6ef8" onChange={setGk} />
              </>
            )}
          </div>
        </div>

        {/* Panel de gráficas */}
        <div className="flex-1 flex flex-col gap-3 overflow-hidden">

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'POTENCIAL PICO', value: `${peakV}`, unit: 'mV', color: '#FF2E63' },
              { label: 'POTENCIAL REPOSO', value: restV, unit: 'mV', color: '#00EAD3' },
              { label: 'POTENCIALES ACCIÓN', value: String(actionPotentials), unit: 'PAs', color: '#7c6ef8' },
            ].map(v => (
              <div key={v.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-[#94A3B8] text-[10px] uppercase tracking-wider font-semibold mb-0.5">{v.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold" style={{ color: v.color, fontFamily: 'JetBrains Mono' }}>{v.value}</span>
                  <span className="text-[#94A3B8] text-xs">{v.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gráfica Vm principal */}
          <div id="neural-chart" className="flex-1 rounded-2xl overflow-hidden relative" style={{ background: '#040d1e', border: '1px solid rgba(255,255,255,0.07)', minHeight: 200 }}>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-10" style={{ background: 'rgba(4,13,30,0.65)', backdropFilter: 'blur(4px)' }}>
                <div className="flex items-center gap-2 text-[#FF2E63] text-sm font-mono">
                  <RefreshCw size={14} className="animate-spin" />Simulando con Binary...
                </div>
              </div>
            )}
            <div className="absolute top-4 left-5 z-10">
              <span className="text-[#F9FAFB] font-semibold text-sm">Potencial de Membrana V(t)</span>
              <span className="text-[#94A3B8] text-xs ml-3">Axón Gigante de Calamar</span>
            </div>
            <div className="absolute inset-0 pt-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 8, right: 20, bottom: 24, left: 44 }}>
                  <defs>
                    <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF2E63" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#FF2E63" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="t" tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} label={{ value: 'Tiempo (ms)', position: 'insideBottom', offset: -12, fill: '#94A3B8', fontSize: 10 }} />
                  <YAxis domain={[-90, 60]} tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} width={40} label={{ value: 'V (mV)', angle: -90, position: 'insideLeft', fill: '#FF2E63', fontSize: 10, dx: -6 }} />
                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
                  <ReferenceLine y={-65} stroke="rgba(0,234,211,0.2)" strokeDasharray="4 4" />
                  <Tooltip formatter={(v: any) => [`${Number(v).toFixed(1)} mV`, 'V(t)']} contentStyle={{ background: 'rgba(4,13,30,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 11 }} />
                  <Area type="monotone" dataKey="V" stroke="#FF2E63" strokeWidth={2} fill="url(#vGrad)" dot={false} isAnimationActive={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfica de variables de compuerta */}
          <div className="rounded-2xl overflow-hidden relative" style={{ background: '#040d1e', border: '1px solid rgba(255,255,255,0.07)', height: 150 }}>
            <div className="absolute top-3 left-5 z-10">
              <span className="text-[#94A3B8] font-semibold text-xs">Variables de Compuerta  m · h · n</span>
            </div>
            <div className="absolute inset-0 pt-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 4, right: 20, bottom: 16, left: 44 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                  <XAxis dataKey="t" hide />
                  <YAxis domain={[0, 1]} tick={{ fill: '#94A3B8', fontSize: 9, fontFamily: 'JetBrains Mono' }} width={32} />
                  <Legend wrapperStyle={{ color: '#94A3B8', fontSize: 10, paddingBottom: 4 }} />
                  <Line type="monotone" dataKey="m" name="m (act Na⁺)" stroke="#00EAD3" strokeWidth={1.5} dot={false} isAnimationActive={false} />
                  <Line type="monotone" dataKey="h" name="h (inact Na⁺)" stroke="#f59e0b" strokeWidth={1.5} dot={false} isAnimationActive={false} />
                  <Line type="monotone" dataKey="n" name="n (act K⁺)"  stroke="#7c6ef8" strokeWidth={1.5} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Nota educativa */}
          <div className="rounded-xl p-3 flex gap-3 items-start" style={{ background: 'rgba(255,46,99,0.04)', border: '1px solid rgba(255,46,99,0.12)' }}>
            <Info size={13} style={{ color: '#FF2E63', flexShrink: 0, marginTop: 2 }} />
            <p className="text-[#94A3B8] text-[11px] leading-relaxed">
              <span className="text-[#FF2E63] font-semibold">Hodgkin &amp; Huxley (1952 · Premio Nobel):</span>{' '}
              Modelo de 4 ecuaciones que describe cómo las corrientes iónicas de Na⁺ y K⁺ generan el potencial de acción nervioso.
              <em> m</em> activa rápido el Na⁺, <em>h</em> lo inactiva, <em>n</em> activa lento el K⁺ para repolarizar.
            </p>
          </div>

          {/* Quiz Adaptativo */}
          <QuizCard
            accentColor="#e879f9"
            context={`Modelo Hodgkin-Huxley. I_ext=${I_ext} µA/cm², g_Na=${g_Na} mS/cm², g_K=${g_K} mS/cm². Potencial pico=${peakV}mV. Potenciales de acción=${actionPotentials}.`}
          />
        </div>
      </div>
    </div>
  );
}
