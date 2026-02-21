/**
 * GlucoseModule.tsx — Simulador de Glucosa-Insulina (Modelo de Bergman)
 * Sprint 1 — Binary ↔ Séptima Integración
 *
 * Conecta al endpoint /api/septima/bio/glucose de Binary EquaLab.
 * Fallback local con cálculo Python-style si Binary no está disponible.
 */

import React, { useState, useMemo, useCallback } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Tooltip, Legend, ReferenceLine
} from 'recharts';
import { Droplets, Activity, Zap, RefreshCw, Cpu, Info } from 'lucide-react';
import { useGlucoseInsulin } from '../../hooks/useBinaryEngine';
import type {
  GlucoseSimulationRequest,
  GlucoseSimulationResult
} from '../../services/binaryTypes';

// ─── Estilos ────────────────────────────────────────────────────────────────────
const PANEL = {
  background: 'rgba(10,20,40,0.7)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(16px)',
};

const GLASS = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  backdropFilter: 'blur(12px)',
};

// ─── Colores del modelo ─────────────────────────────────────────────────────────
const COLORS = {
  glucose:  '#00EAD3',  // Cian — Glucosa
  insulin:  '#FF2E63',  // Rojo — Insulina
  action:   '#7c6ef8',  // Violeta — Acción remota X
};

// ─── Presets clínicos ───────────────────────────────────────────────────────────
const PRESETS = {
  normal: {
    label: 'Normal (IVGTT)',
    color: '#00EAD3',
    g0: 300, i0: 50, x0: 0,
    p1: 0.028, p2: 0.025, p3: 0.000013,
    Gb: 80, Ib: 7, n: 0.142,
    desc: 'Test de tolerancia intravenosa a glucosa en un individuo sano.',
  },
  diabetes: {
    label: 'Diabetes Tipo 2',
    color: '#FF2E63',
    g0: 350, i0: 80, x0: 0,
    p1: 0.01, p2: 0.015, p3: 0.000005,
    Gb: 140, Ib: 15, n: 0.12,
    desc: 'Menor sensibilidad insulínica (p3 reducido) y glucosa basal elevada.',
  },
  postExercise: {
    label: 'Post-Ejercicio',
    color: '#f59e0b',
    g0: 200, i0: 20, x0: 0,
    p1: 0.04, p2: 0.035, p3: 0.00002,
    Gb: 70, Ib: 5, n: 0.16,
    desc: 'Captación de glucosa acelerada y mayor sensibilidad insulínica tras ejercicio.',
  },
};

// ─── Tooltip personalizado ──────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ ...PANEL, padding: '10px 14px', borderRadius: 10, minWidth: 160 }}>
      <p className="text-[#94A3B8] text-xs mb-2 font-mono">{`t = ${Number(label).toFixed(1)} min`}</p>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center justify-between gap-4 text-xs mb-1">
          <span style={{ color: p.color }}>{p.name}</span>
          <span className="font-mono font-bold" style={{ color: p.color }}>
            {Number(p.value).toFixed(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

// ─── Fallback local (Bergman simplificado en JS) ────────────────────────────────
function localBergman(req: GlucoseSimulationRequest): GlucoseSimulationResult {
  const { p1, p2, p3, Gb, Ib, n } = req.params;
  const dt = req.dt;
  const steps = Math.ceil((req.t_end - req.t_start) / dt);
  let [G, X, I] = req.y0;
  const t_arr: number[] = [], G_arr: number[] = [], X_arr: number[] = [], I_arr: number[] = [];
  let t = req.t_start;
  for (let i = 0; i <= steps; i++) {
    t_arr.push(t); G_arr.push(G); X_arr.push(X); I_arr.push(I);
    const dG = -(p1 + X) * G + p1 * Gb;
    const dX = -p2 * X + p3 * (I - Ib);
    const dI = -n * (I - Ib);
    G = Math.max(0, G + dG * dt);
    X = Math.max(0, X + dX * dt);
    I = Math.max(0, I + dI * dt);
    t += dt;
  }
  return { t: t_arr, G: G_arr, X: X_arr, I: I_arr, engine: 'local' as any };
}

// ─── Slider Row ─────────────────────────────────────────────────────────────────
function SliderRow({ label, value, min, max, step, unit, color, onChange, desc }: any) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[#94A3B8] text-[11px] font-semibold uppercase tracking-wider">{label}</span>
        <span className="font-mono text-sm font-bold" style={{ color, fontFamily: 'JetBrains Mono, monospace' }}>
          {typeof value === 'number' && value < 0.001
            ? value.toExponential(1)
            : Number(value).toFixed(step < 1 ? (step < 0.001 ? 6 : 2) : 0)}{' '}
          <span className="text-[#94A3B8] text-[10px] font-normal">{unit}</span>
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
      {desc && <p className="text-[#94A3B8] text-[10px] mt-1 leading-snug">{desc}</p>}
    </div>
  );
}

// ─── Componente Principal ────────────────────────────────────────────────────────
export function GlucoseModule() {
  // Parámetros del modelo Bergman
  const [g0,  setG0]  = useState(300);   // Glucosa inicial mg/dL
  const [i0,  setI0]  = useState(50);    // Insulina inicial µU/mL
  const [p1,  setP1]  = useState(0.028);
  const [p2,  setP2]  = useState(0.025);
  const [p3,  setP3]  = useState(0.000013);
  const [Gb,  setGb]  = useState(80);
  const [Ib,  setIb]  = useState(7);
  const [n,   setN]   = useState(0.142);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Parámetros de simulación
  const req = useMemo<GlucoseSimulationRequest>(() => ({
    t_start: 0,
    t_end: 240,  // 4 horas en minutos
    dt: 0.5,
    y0: [g0, 0, i0],
    params: { p1, p2, p3, Gb, Ib, n },
  }), [g0, i0, p1, p2, p3, Gb, Ib, n]);

  // Hook — Binary primero, local como fallback
  const { data, loading, engineSource } = useGlucoseInsulin(req, localBergman, 600);

  // Preparar datos para el gráfico (submuestreo para rendimiento)
  const chartData = useMemo(() => {
    if (!data) return [];
    const step = Math.max(1, Math.floor(data.t.length / 200));
    return data.t
      .filter((_, i) => i % step === 0)
      .map((t, i) => ({
        t: parseFloat(t.toFixed(1)),
        G: parseFloat((data.G[i * step] ?? 80).toFixed(1)),
        I: parseFloat((data.I[i * step] ?? 7).toFixed(2)),
      }));
  }, [data]);

  const loadPreset = useCallback((key: keyof typeof PRESETS) => {
    const p = PRESETS[key];
    setG0(p.g0); setI0(p.i0);
    setP1(p.p1); setP2(p.p2); setP3(p.p3);
    setGb(p.Gb); setIb(p.Ib); setN(p.n);
  }, []);

  // Valores actuales del final de la simulación
  const finalG = data?.G.at(-1)?.toFixed(1) ?? '—';
  const finalI = data?.I.at(-1)?.toFixed(1) ?? '—';
  const peakG  = data ? Math.max(...data.G).toFixed(1) : '—';

  return (
    <div className="flex flex-col h-full p-5 gap-5" style={{ minHeight: 'calc(100vh - 48px)' }}>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F9FAFB] mb-1" style={{ letterSpacing: '-0.4px' }}>
            Módulo Glucosa-Insulina
          </h1>
          <p className="text-[#94A3B8] text-sm">
            Minimal Model de Bergman · Simulación fisiológica computacional
          </p>
        </div>
        {/* Badge de motor */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold"
          style={{
            background: engineSource === 'cpp' ? 'rgba(0,234,211,0.10)' : engineSource === 'python_mock' ? 'rgba(124,110,248,0.10)' : 'rgba(255,255,255,0.05)',
            border: engineSource === 'cpp' ? '1px solid rgba(0,234,211,0.3)' : engineSource === 'python_mock' ? '1px solid rgba(124,110,248,0.3)' : '1px solid rgba(255,255,255,0.1)',
            color: engineSource === 'cpp' ? '#00EAD3' : engineSource === 'python_mock' ? '#7c6ef8' : '#94A3B8',
          }}>
          <Cpu size={11} />
          {loading ? 'Calculando...' : engineSource === 'cpp' ? 'Binary C++' : engineSource === 'python_mock' ? 'Binary Python' : 'Modo local'}
        </div>
      </div>

      <div className="flex gap-5 flex-1 overflow-hidden">

        {/* Panel izquierdo — Controles */}
        <div className="w-[280px] flex flex-col gap-4 flex-shrink-0 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>

          {/* Presets clínicos */}
          <div className="rounded-2xl p-4" style={PANEL}>
            <div className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wider mb-3">
              Escenarios Clínicos
            </div>
            <div className="space-y-2">
              {Object.entries(PRESETS).map(([key, p]) => (
                <button key={key} onClick={() => loadPreset(key as keyof typeof PRESETS)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all hover:opacity-80 active:scale-[0.98]"
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

          {/* Condiciones iniciales */}
          <div className="rounded-2xl p-4" style={PANEL}>
            <div className="text-[#F9FAFB] text-xs font-semibold mb-4">Condiciones Iniciales</div>
            <SliderRow label="Glucosa inicial (G₀)" value={g0} min={80} max={500} step={5} unit="mg/dL"
              color={COLORS.glucose} onChange={setG0} desc="Nivel de glucosa al inicio del test (ej: tras infusión IV)" />
            <SliderRow label="Insulina inicial (I₀)" value={i0} min={5} max={200} step={1} unit="µU/mL"
              color={COLORS.insulin} onChange={setI0} desc="Bolus insulínico inicial" />
          </div>

          {/* Parámetros del modelo */}
          <div className="rounded-2xl p-4" style={PANEL}>
            <button
              onClick={() => setShowAdvanced(v => !v)}
              className="w-full flex items-center justify-between text-xs font-semibold text-[#F9FAFB] mb-3"
            >
              <span>Parámetros de Bergman</span>
              <span className="text-[#94A3B8] text-[10px]">{showAdvanced ? '▲ ocultar' : '▼ ver'}</span>
            </button>
            {showAdvanced && (
              <>
                <SliderRow label="p1 — Captación glucosa" value={p1} min={0.001} max={0.1} step={0.001} unit=""
                  color="#f59e0b" onChange={setP1} desc="Tasa de captación insulin-independiente" />
                <SliderRow label="p2 — Acción remota" value={p2} min={0.001} max={0.1} step={0.001} unit=""
                  color="#f59e0b" onChange={setP2} desc="Tasa de desaparición de X" />
                <SliderRow label="p3 — Ganancia insulínica" value={p3} min={0.000001} max={0.00005} step={0.000001} unit=""
                  color="#f59e0b" onChange={setP3} desc="Conversión insulina → acción remota" />
                <SliderRow label="Gb — Glucosa basal" value={Gb} min={60} max={200} step={1} unit="mg/dL"
                  color={COLORS.glucose} onChange={setGb} />
                <SliderRow label="Ib — Insulina basal" value={Ib} min={2} max={30} step={0.5} unit="µU/mL"
                  color={COLORS.insulin} onChange={setIb} />
                <SliderRow label="n — Degradación insulina" value={n} min={0.05} max={0.3} step={0.005} unit=""
                  color={COLORS.action} onChange={setN} />
              </>
            )}
            {!showAdvanced && (
              <p className="text-[#94A3B8] text-[10px] leading-relaxed">
                Ajusta la sensibilidad insulínica y la dinámica del sistema. Visible en modo avanzado.
              </p>
            )}
          </div>
        </div>

        {/* Panel derecho — Gráficas y resultados */}
        <div className="flex-1 flex flex-col gap-4 overflow-hidden">

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'GLUCOSA PICO', value: peakG, unit: 'mg/dL', color: COLORS.glucose, desc: 'Máxima alcanzada' },
              { label: 'GLUCOSA FINAL', value: finalG, unit: 'mg/dL', color: COLORS.glucose, desc: 'A los 240 min' },
              { label: 'INSULINA FINAL', value: finalI, unit: 'µU/mL', color: COLORS.insulin, desc: 'A los 240 min' },
            ].map(v => (
              <div key={v.label} className="rounded-xl p-4" style={GLASS}>
                <div className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wider mb-0.5">{v.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold" style={{ color: v.color, fontFamily: 'JetBrains Mono' }}>{v.value}</span>
                  <span className="text-[#94A3B8] text-xs">{v.unit}</span>
                </div>
                <div className="text-[#94A3B8] text-[10px] mt-0.5">{v.desc}</div>
              </div>
            ))}
          </div>

          {/* Gráfica de Glucosa (principal) */}
          <div className="flex-1 rounded-2xl overflow-hidden relative" style={{ background: '#040d1e', border: '1px solid rgba(255,255,255,0.07)', minHeight: 230 }}>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-10" style={{ background: 'rgba(4,13,30,0.6)', backdropFilter: 'blur(4px)' }}>
                <div className="flex items-center gap-2 text-[#00EAD3] text-sm font-mono">
                  <RefreshCw size={14} className="animate-spin" />
                  Calculando con Binary...
                </div>
              </div>
            )}
            <div className="absolute top-4 left-5 z-10">
              <span className="text-[#F9FAFB] font-semibold text-sm">Dinámica Glucosa-Insulina</span>
              <span className="text-[#94A3B8] text-xs ml-3">240 min · Modelo Bergman</span>
            </div>
            <div className="absolute inset-0 pt-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 20, bottom: 28, left: 52 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="t" tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} label={{ value: 'Tiempo (min)', position: 'insideBottom', offset: -12, fill: '#94A3B8', fontSize: 10 }} />
                  <YAxis yAxisId="G" domain={[0, Math.max(400, g0 + 50)]} tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} width={44} label={{ value: 'Glucosa (mg/dL)', angle: -90, position: 'insideLeft', fill: COLORS.glucose, fontSize: 10, dx: -8 }} />
                  <YAxis yAxisId="I" orientation="right" domain={[0, Math.max(100, i0 + 20)]} tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} width={44} label={{ value: 'Insulina (µU/mL)', angle: 90, position: 'insideRight', fill: COLORS.insulin, fontSize: 10, dx: 8 }} />
                  <ReferenceLine yAxisId="G" y={Gb} stroke={`${COLORS.glucose}40`} strokeDasharray="4 4" />
                  <ReferenceLine yAxisId="I" y={Ib} stroke={`${COLORS.insulin}40`} strokeDasharray="4 4" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ color: '#94A3B8', fontSize: 11, paddingTop: 4 }} />
                  <Line yAxisId="G" type="monotone" dataKey="G" name="Glucosa (mg/dL)" stroke={COLORS.glucose} strokeWidth={2.5} dot={false} isAnimationActive={false} style={{ filter: `drop-shadow(0 0 6px ${COLORS.glucose}80)` }} />
                  <Line yAxisId="I" type="monotone" dataKey="I" name="Insulina (µU/mL)" stroke={COLORS.insulin} strokeWidth={2} dot={false} isAnimationActive={false} style={{ filter: `drop-shadow(0 0 6px ${COLORS.insulin}60)` }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Nota educativa */}
          <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: 'rgba(0,234,211,0.04)', border: '1px solid rgba(0,234,211,0.12)' }}>
            <Info size={14} style={{ color: '#00EAD3', flexShrink: 0, marginTop: 2 }} />
            <p className="text-[#94A3B8] text-xs leading-relaxed">
              <span className="text-[#00EAD3] font-semibold">Minimal Model de Bergman (1979):</span>{' '}
              Describe la dinámica glucosa-insulina con tres ecuaciones diferenciales. La variable <em>X</em> (acción remota)
              representa el efecto retardado de la insulina sobre la captación de glucosa por los tejidos periféricos.
              La sensibilidad insulínica <em>S<sub>I</sub> = p3/p2</em>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
