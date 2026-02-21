/**
 * MicrocontrollerPage.tsx — Emulador de Microcontrolador (Arduino/ESP32)
 * Sprint 3 — Séptima Biomédica
 *
 * Funcionalidades implementadas:
 *  - Editor de código C/C++ con botones reales (Copiar, Resetear, Exportar .ino)
 *  - Monitor serial animado al ejecutar
 *  - Osciloscopio digital con señal tipo ECG animada
 *  - Estado de conexión gestionado manualmente (sin WebSocket en este prototipo)
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play, Square, Download, RotateCcw, Copy, Activity, Cpu,
  CheckCheck, Wifi, WifiOff, AlertCircle,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const PANEL = {
  background: 'rgba(10,20,40,0.7)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(16px)',
};

const DEFAULT_CODE = `void setup() {
  // Iniciar comunicación serial para depuración
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // Leer el valor del pin analógico A0 (sensor biomédico)
  int sensorValue = analogRead(A0);

  // Convertir la lectura analógica (0 - 1023) a voltaje (0 - 5V)
  float voltage = sensorValue * (5.0 / 1023.0);

  // Imprimir el voltaje en el Monitor Serial
  Serial.print("Voltaje: ");
  Serial.print(voltage);
  Serial.println(" V");

  // Parpadear LED de status
  digitalWrite(LED_BUILTIN, HIGH);
  delay(5);
  digitalWrite(LED_BUILTIN, LOW);
  delay(10);
}`;

// ─── Osciloscopio ───────────────────────────────────────────────────────────────
function generateOsciData(time: number, timeBase: number): { x: number; ch1: number }[] {
  const SAMPLES = 200;
  return Array.from({ length: SAMPLES }, (_, i) => {
    const t = (i / SAMPLES) * timeBase;
    const freq = 1 / (timeBase * 0.25);
    const phase = (t * freq + time * 0.1) % 1;
    let v = 0;
    if (phase < 0.1) v = 4 * Math.sin(Math.PI * phase / 0.1);
    else if (phase < 0.15) v = 0.5;
    else if (phase < 0.25) v = 0.3 * Math.sin(Math.PI * (phase - 0.15) / 0.1);
    else if (phase < 0.5) v = 0.1;
    else if (phase < 0.7) v = 1.2 * Math.sin(Math.PI * (phase - 0.5) / 0.2);
    else v = 0.1 + 0.1 * Math.sin(2 * Math.PI * (phase - 0.7) / 0.3);
    return { x: i, ch1: parseFloat((v + (Math.random() - 0.5) * 0.04).toFixed(3)) };
  });
}

// ─── Componente Principal ────────────────────────────────────────────────────────
export function MicrocontrollerPage() {
  const [code, setCode]             = useState(DEFAULT_CODE);
  const [running, setRunning]       = useState(false);
  const [logLines, setLogLines]     = useState<string[]>([]);
  const [timeBase, setTimeBase]     = useState(100);
  const [amplitude, setAmplitude]   = useState(1);
  const [triggerAuto, setTrigger]   = useState(true);
  const [time, setTime]             = useState(0);
  const [connected, setConnected]   = useState(false);  // estado real (gestionado por usuario)
  const [copyDone, setCopyDone]     = useState(false);
  const intervalRef                 = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── Loop de simulación ────────────────────────────────────────────────────────
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime(t => t + 0.05);
        setLogLines(prev => {
          const voltage = (Math.random() * 3.5 + 0.1).toFixed(2);
          const next = [...prev, `Voltaje: ${voltage} V`];
          return next.length > 30 ? next.slice(-30) : next;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  // ─── Log de inicio al ejecutar ─────────────────────────────────────────────────
  const handleRun = useCallback(() => {
    if (!running) {
      setLogLines([
        '> Comprobando sintaxis...',
        '> Compilación exitosa — 0 errores, 0 advertencias',
        '> Vinculando librerías de Arduino...',
        '> Carga completada · 2284 bytes (7%) del espacio de programa',
        '> Monitor serial iniciado a 9600 baud',
        '─────────────────────────────────────────',
      ]);
    }
    setRunning(r => !r);
  }, [running]);

  // ─── Copiar código ───────────────────────────────────────────────────────────
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 1800);
    } catch {
      // Fallback para entornos sin clipboard API
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 1800);
    }
  }, [code]);

  // ─── Resetear código ──────────────────────────────────────────────────────────
  const handleReset = useCallback(() => {
    setCode(DEFAULT_CODE);
    setLogLines([]);
    setRunning(false);
    setTime(0);
  }, []);

  // ─── Exportar .ino ────────────────────────────────────────────────────────────
  const handleExport = useCallback(() => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'septima_sensor.ino';
    a.click();
    URL.revokeObjectURL(url);
  }, [code]);

  // ─── Datos osciloscopio ────────────────────────────────────────────────────────
  const data = generateOsciData(time, timeBase);
  const cursorX   = 72;
  const cursorVal = data[Math.floor(cursorX / 100 * data.length)]?.ch1 ?? 0;

  return (
    <div className="flex flex-col h-full p-5 gap-4" style={{ minHeight: 'calc(100vh - 48px)', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F9FAFB] mb-0.5" style={{ letterSpacing: '-0.4px' }}>
            Emulador de Microcontrolador
          </h1>
          <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
            <span className="font-mono">septima_sensor.ino</span>
            {running && (
              <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,234,211,0.08)', color: '#00EAD3' }}>
                Ejecutando
              </span>
            )}
          </div>
        </div>

        {/* Badge de conexión — real, togglable */}
        <button
          onClick={() => setConnected(c => !c)}
          title="Click para simular conexión/desconexión"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all"
          style={{
            background: connected ? 'rgba(0,234,211,0.08)' : 'rgba(255,46,99,0.08)',
            border: `1px solid ${connected ? 'rgba(0,234,211,0.2)' : 'rgba(255,46,99,0.2)'}`,
            color: connected ? '#00EAD3' : '#FF2E63',
          }}>
          {connected
            ? <><Wifi size={11} /><div className="w-1.5 h-1.5 rounded-full bg-[#00EAD3] animate-pulse" />Dispositivo Conectado</>
            : <><WifiOff size={11} />Sin Dispositivo</>}
        </button>
      </div>

      <div className="flex gap-4 flex-1 overflow-hidden">

        {/* ─── Editor de código ────────────────────────────────────────────────── */}
        <div className="w-[420px] flex flex-col gap-3 flex-shrink-0">
          <div className="flex-1 rounded-2xl overflow-hidden flex flex-col" style={PANEL}>

            {/* Barra del editor */}
            <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FF2E63' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#00EAD3' }} />
                </div>
                <span className="text-[#94A3B8] text-xs font-mono">septima_sensor.ino</span>
              </div>
              <div className="flex gap-1">
                {/* Copiar */}
                <button onClick={handleCopy}
                  className="p-1.5 rounded-lg transition-all hover:bg-white/5"
                  title={copyDone ? '¡Copiado!' : 'Copiar código'}>
                  {copyDone
                    ? <CheckCheck size={13} style={{ color: '#00EAD3' }} />
                    : <Copy size={13} className="text-[#94A3B8] hover:text-white" />}
                </button>
                {/* Resetear */}
                <button onClick={handleReset}
                  className="p-1.5 rounded-lg transition-all hover:bg-white/5"
                  title="Resetear al código original">
                  <RotateCcw size={13} className="text-[#94A3B8] hover:text-white" />
                </button>
              </div>
            </div>

            {/* Textarea con números de línea */}
            <div className="flex-1 overflow-y-auto flex">
              {/* Números de línea */}
              <div className="py-4 px-2 text-right select-none" style={{ minWidth: 36, borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                {code.split('\n').map((_, i) => (
                  <div key={i} className="text-[10px] leading-[1.8] font-mono" style={{ color: 'rgba(148,163,184,0.35)' }}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <textarea
                value={code}
                onChange={e => setCode(e.target.value)}
                className="flex-1 p-4 bg-transparent text-[#F9FAFB] text-sm resize-none outline-none"
                style={{ fontFamily: 'JetBrains Mono, monospace', lineHeight: 1.8, caretColor: '#00EAD3', minHeight: 300 }}
                spellCheck={false}
              />
            </div>
          </div>

          {/* Monitor serial */}
          <div className="rounded-2xl overflow-hidden" style={{ background: '#010f09', border: '1px solid rgba(0,234,211,0.1)', height: 160 }}>
            <div className="px-4 py-2 text-xs font-mono font-semibold text-[#00EAD3] flex items-center justify-between"
              style={{ borderBottom: '1px solid rgba(0,234,211,0.08)' }}>
              <span>SALIDA SERIAL (9600 BAUD)</span>
              {running && <div className="w-1.5 h-1.5 rounded-full bg-[#00EAD3] animate-pulse" />}
            </div>
            <div className="p-3 overflow-y-auto" style={{ height: 'calc(100% - 32px)' }}>
              {logLines.length === 0
                ? <span className="text-[#94A3B8] text-xs font-mono">Esperando ejecución...</span>
                : logLines.map((line, i) => (
                  <div key={i} className="text-xs font-mono leading-relaxed" style={{
                    color: line.startsWith('>') ? '#f59e0b'
                      : line.startsWith('─') ? 'rgba(148,163,184,0.3)'
                      : line.includes('éxito') || line.includes('Completada') || line.includes('Monitor') ? '#00EAD3'
                      : '#94A3B8',
                  }}>
                    {line}
                  </div>
                ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-2">
            <button onClick={handleRun}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
              style={{
                background: running ? 'rgba(255,46,99,0.15)' : 'rgba(0,234,211,0.12)',
                border: `1px solid ${running ? 'rgba(255,46,99,0.3)' : 'rgba(0,234,211,0.3)'}`,
                color: running ? '#FF2E63' : '#00EAD3',
              }}>
              {running ? <><Square size={13} />Detener</> : <><Play size={13} />Ejecutar</>}
            </button>
            <button onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-[#94A3B8] hover:text-white transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
              title="Descargar septima_sensor.ino">
              <Download size={13} />Exportar .ino
            </button>
          </div>
        </div>

        {/* ─── Osciloscopio ───────────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 rounded-2xl overflow-hidden flex flex-col" style={{ background: '#030c1a', border: '1px solid rgba(255,255,255,0.07)' }}>

            <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2">
                <Activity size={14} style={{ color: '#00EAD3' }} />
                <span className="text-[#F9FAFB] font-semibold text-sm">Osciloscopio Digital</span>
                {!running && (
                  <span className="text-xs text-[#94A3B8] font-mono">(inicia la ejecución para ver señal en vivo)</span>
                )}
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#4f46e5' }} />
                  <span className="text-[#94A3B8]">CH1: 5V</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#94A3B8' }} />
                  <span className="text-[#94A3B8]">CH2: OFF</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              {/* Grid */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(79,70,229,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.07) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />

              {/* Cursor de medición */}
              <div className="absolute top-0 bottom-0 z-10 pointer-events-none" style={{ left: `${cursorX}%`, borderLeft: '1px dashed rgba(255,46,99,0.5)' }}>
                <div className="absolute top-4 px-2 py-1 rounded text-xs font-mono"
                  style={{ background: '#FF2E63', color: 'white', left: 4 }}>
                  {cursorVal.toFixed(2)} V
                </div>
              </div>

              {/* Señal pausada si no hay ejecución */}
              {!running && (
                <div className="absolute inset-0 flex items-center justify-center z-20" style={{ background: 'rgba(3,12,26,0.6)', backdropFilter: 'blur(2px)' }}>
                  <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
                    <AlertCircle size={14} />Sin señal activa
                  </div>
                </div>
              )}

              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 20, bottom: 30, left: 40 }}>
                  <CartesianGrid strokeDasharray="4 4" stroke="rgba(79,70,229,0.1)" />
                  <XAxis dataKey="x" hide />
                  <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }} tickFormatter={v => `${v}V`} />
                  <Line type="monotoneX" dataKey="ch1" stroke="#4f46e5" strokeWidth={2} dot={false} isAnimationActive={false}
                    style={{ filter: 'drop-shadow(0 0 5px rgba(79,70,229,0.7))' }} />
                </LineChart>
              </ResponsiveContainer>

              {/* Etiquetas eje X */}
              <div className="absolute bottom-2 left-10 right-4 flex justify-between text-[10px] font-mono text-[#94A3B8]">
                {['0ms', '100ms', '200ms', '300ms', '400ms', '500ms'].map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* Controles del osciloscopio */}
          <div className="rounded-2xl p-4" style={PANEL}>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-2">Base de Tiempo</div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setTimeBase(t => Math.max(10, t - 10))}
                    className="w-7 h-7 rounded-lg text-[#94A3B8] hover:text-white flex items-center justify-center transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>−</button>
                  <span className="text-[#F9FAFB] text-sm font-mono w-16 text-center">{timeBase}ms</span>
                  <button onClick={() => setTimeBase(t => Math.min(500, t + 10))}
                    className="w-7 h-7 rounded-lg text-[#94A3B8] hover:text-white flex items-center justify-center transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>+</button>
                </div>
              </div>
              <div>
                <div className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-2">Amplitud (V/DIV)</div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setAmplitude(a => Math.max(0.1, parseFloat((a - 0.1).toFixed(1))))}
                    className="w-7 h-7 rounded-lg text-[#94A3B8] hover:text-white flex items-center justify-center transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>−</button>
                  <span className="text-[#F9FAFB] text-sm font-mono w-16 text-center">{amplitude.toFixed(1)}V</span>
                  <button onClick={() => setAmplitude(a => Math.min(5, parseFloat((a + 0.1).toFixed(1))))}
                    className="w-7 h-7 rounded-lg text-[#94A3B8] hover:text-white flex items-center justify-center transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>+</button>
                </div>
              </div>
              <div>
                <div className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-2">Disparador</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setTrigger(v => !v)}
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
