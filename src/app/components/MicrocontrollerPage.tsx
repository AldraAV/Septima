import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Download, RotateCcw, Copy, ChevronRight, Cpu } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';

const PANEL = {
  background: 'rgba(10,20,40,0.7)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(16px)',
};

const DEFAULT_CODE = `void setup() {
  // Iniciar comunicación serial para depuración
  Serial.begin(9600);
}

void loop() {
  // Leer el valor del pin analógico A0 (0-1023)
  int sensorValue = analogRead(A0);

  // Convertir la lectura analógica (0 - 1023) a voltaje (0 - 5V)
  float voltage = sensorValue * (5.0 / 1023.0);

  // Imprimir el voltaje en el Monitor Serial
  Serial.println(voltage);

  // Esperar 10 milisegundos para estabilidad
  delay(10);
}`;

const LOG_LINES = ['Compilación exitosa...', 'Subiendo al dispositivo...', 'Carga completada.', '0.00', '0.01', '3.24', '3.25', '3.22'];

// Simulated oscilloscope waveform
function generateOsciData(time: number, timeBase: number): { x: number; ch1: number }[] {
  const SAMPLES = 200;
  return Array.from({ length: SAMPLES }, (_, i) => {
    const t = (i / SAMPLES) * timeBase;
    const freq = 1 / (timeBase * 0.25);
    // ECG-like signal
    const phase = (t * freq) % 1;
    let v = 0;
    if (phase < 0.1) v = 4 * Math.sin(Math.PI * phase / 0.1);
    else if (phase < 0.15) v = 0.5;
    else if (phase < 0.25) v = 0.3 * Math.sin(Math.PI * (phase - 0.15) / 0.1);
    else if (phase < 0.5) v = 0.1;
    else if (phase < 0.7) v = 1.2 * Math.sin(Math.PI * (phase - 0.5) / 0.2);
    else v = 0.1 + 0.1 * Math.sin(2 * Math.PI * (phase - 0.7) / 0.3);
    return { x: i, ch1: parseFloat((v + Math.random() * 0.05).toFixed(2)) };
  });
}

export function MicrocontrollerPage() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [running, setRunning] = useState(false);
  const [logLines, setLogLines] = useState<string[]>(LOG_LINES.slice(0, 3));
  const [timeBase, setTimeBase] = useState(100);
  const [amplitude, setAmplitude] = useState(1);
  const [triggerAuto, setTriggerAuto] = useState(true);
  const [time, setTime] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cursorX = 72; // % position of cursor

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime(t => t + 0.05);
        setLogLines(prev => {
          const next = [...prev];
          const val = (Math.random() * 3.5 + 0.1).toFixed(2);
          if (next.length > 20) next.shift();
          next.push(val);
          return next;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const data = generateOsciData(time, timeBase);
  const cursorVal = data[Math.floor(cursorX / 100 * data.length)]?.ch1 ?? 0;

  return (
    <div className="flex flex-col h-full p-5 gap-4" style={{ minHeight: 'calc(100vh - 48px)', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F9FAFB] mb-0.5" style={{ letterSpacing: '-0.4px' }}>Emulador de Microcontrolador</h1>
          <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
            <span>main.cpp</span>
            <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,234,211,0.08)', color: '#00EAD3' }}>Guardado</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs" style={{ background: 'rgba(0,234,211,0.08)', border: '1px solid rgba(0,234,211,0.2)', color: '#00EAD3' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00EAD3] animate-pulse" />
            Dispositivo Conectado
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-1 overflow-hidden">
        {/* Code Editor */}
        <div className="w-[420px] flex flex-col gap-3 flex-shrink-0">
          <div className="flex-1 rounded-2xl overflow-hidden flex flex-col" style={PANEL}>
            <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FF2E63' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#00EAD3' }} />
                </div>
                <span className="text-[#94A3B8] text-xs font-mono">main.cpp</span>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 text-[#94A3B8] hover:text-white transition-colors"><Copy size={12} /></button>
                <button className="p-1.5 text-[#94A3B8] hover:text-white transition-colors"><RotateCcw size={12} /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <textarea
                value={code}
                onChange={e => setCode(e.target.value)}
                className="w-full h-full p-4 bg-transparent text-[#F9FAFB] text-sm resize-none outline-none"
                style={{ fontFamily: 'JetBrains Mono, monospace', lineHeight: 1.8, caretColor: '#00EAD3', minHeight: 300 }}
                spellCheck={false}
              />
            </div>
          </div>

          {/* Serial Monitor */}
          <div className="rounded-2xl overflow-hidden" style={{ background: '#010f09', border: '1px solid rgba(0,234,211,0.1)', height: 160 }}>
            <div className="px-4 py-2 text-xs font-mono font-semibold text-[#00EAD3]" style={{ borderBottom: '1px solid rgba(0,234,211,0.08)' }}>
              SALIDA SERIAL (9600 BAUD)
            </div>
            <div className="p-3 overflow-y-auto" style={{ height: 'calc(100% - 32px)' }}>
              {logLines.map((line, i) => (
                <div key={i} className="text-xs font-mono" style={{
                  color: line === 'Compilación exitosa...' || line === 'Carga completada.' ? '#00EAD3' : line === 'Subiendo al dispositivo...' ? '#f59e0b' : '#94A3B8',
                  fontFamily: 'JetBrains Mono',
                }}>
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button onClick={() => setRunning(!running)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
              style={{ background: running ? 'rgba(255,46,99,0.15)' : 'rgba(0,234,211,0.12)', border: `1px solid ${running ? 'rgba(255,46,99,0.3)' : 'rgba(0,234,211,0.3)'}`, color: running ? '#FF2E63' : '#00EAD3' }}>
              {running ? <><Square size={14} />Detener</> : <><Play size={14} />Ejecutar</>}
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-[#94A3B8] hover:text-white transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
              <Download size={14} />Exportar .ino
            </button>
          </div>
        </div>

        {/* Oscilloscope */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 rounded-2xl overflow-hidden flex flex-col" style={{ background: '#030c1a', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2">
                <Activity size={14} style={{ color: '#00EAD3' }} />
                <span className="text-[#F9FAFB] font-semibold text-sm">Osciloscopio Digital</span>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{ background: '#4f46e5' }} /><span className="text-[#94A3B8]">CH1: 5V</span></div>
                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{ background: '#94A3B8' }} /><span className="text-[#94A3B8]">CH2: OFF</span></div>
              </div>
            </div>
            <div className="flex-1 relative">
              {/* Grid */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(79,70,229,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.07) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
              {/* Cursor */}
              <div className="absolute top-0 bottom-0 z-10 pointer-events-none" style={{ left: `${cursorX}%`, borderLeft: '1px dashed rgba(255,46,99,0.5)' }}>
                <div className="absolute top-4 -translate-x-full mr-2 px-2 py-1 rounded text-xs font-mono"
                  style={{ background: '#FF2E63', color: 'white', right: -50, left: 'auto' }}>
                  {cursorVal.toFixed(2)} V
                </div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 20, bottom: 30, left: 40 }}>
                  <CartesianGrid strokeDasharray="4 4" stroke="rgba(79,70,229,0.1)" />
                  <XAxis dataKey="x" hide />
                  <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} tickFormatter={v => `${v}V`} />
                  <Line type="monotoneX" dataKey="ch1" stroke="#4f46e5" strokeWidth={2} dot={false} isAnimationActive={false}
                    style={{ filter: 'drop-shadow(0 0 5px rgba(79,70,229,0.7))' }} />
                </LineChart>
              </ResponsiveContainer>
              {/* X axis labels */}
              <div className="absolute bottom-2 left-10 right-4 flex justify-between text-[10px] font-mono text-[#94A3B8]">
                {['0ms', '100ms', '200ms', '300ms', '400ms', '500ms'].map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* Oscilloscope Controls */}
          <div className="rounded-2xl p-4" style={PANEL}>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-2">Base de Tiempo</div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setTimeBase(t => Math.max(10, t - 10))}
                    className="w-7 h-7 rounded-lg border text-[#94A3B8] hover:text-white transition-all flex items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>−</button>
                  <span className="text-[#F9FAFB] text-sm font-mono w-16 text-center">{timeBase}ms</span>
                  <button onClick={() => setTimeBase(t => Math.min(500, t + 10))}
                    className="w-7 h-7 rounded-lg border text-[#94A3B8] hover:text-white transition-all flex items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>+</button>
                </div>
              </div>
              <div>
                <div className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-2">Amplitud (V/DIV)</div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setAmplitude(a => Math.max(0.1, parseFloat((a - 0.1).toFixed(1))))}
                    className="w-7 h-7 rounded-lg border text-[#94A3B8] hover:text-white transition-all flex items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>−</button>
                  <span className="text-[#F9FAFB] text-sm font-mono w-16 text-center">{amplitude.toFixed(1)}V</span>
                  <button onClick={() => setAmplitude(a => Math.min(5, parseFloat((a + 0.1).toFixed(1))))}
                    className="w-7 h-7 rounded-lg border text-[#94A3B8] hover:text-white transition-all flex items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>+</button>
                </div>
              </div>
              <div>
                <div className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-2">Disparador</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setTriggerAuto(v => !v)}
                    className="relative w-9 h-5 rounded-full transition-colors duration-300"
                    style={{ background: triggerAuto ? '#4f46e5' : 'rgba(255,255,255,0.1)' }}>
                    <div className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300"
                      style={{ transform: triggerAuto ? 'translateX(16px)' : 'translateX(2px)' }} />
                  </button>
                  <span className="text-[#F9FAFB] text-sm">{triggerAuto ? 'Auto' : 'Manual'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
