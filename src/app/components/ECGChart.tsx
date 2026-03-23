import React, { useMemo, useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const API_BASE = (import.meta as any).env?.VITE_BINARY_API_URL || 'http://localhost:8000';

// Fallback: synthetic ECG waveform if backend unavailable
export function ecgSample(phase: number, noise = 0): number {
  const p = ((phase % 1) + 1) % 1;
  let v = 0;
  if (p < 0.09) v = 0.13 * Math.sin(Math.PI * p / 0.09);
  else if (p < 0.19) v = 0.005;
  else if (p < 0.22) v = -0.08 * Math.sin(Math.PI * (p - 0.19) / 0.03);
  else if (p < 0.28) v = 1.15 * Math.sin(Math.PI * (p - 0.22) / 0.06);
  else if (p < 0.33) v = -0.1 * Math.sin(Math.PI * (p - 0.28) / 0.05);
  else if (p < 0.43) v = 0.01;
  else if (p < 0.67) v = 0.27 * Math.sin(Math.PI * (p - 0.43) / 0.24);
  else v = 0;
  return v + (Math.random() - 0.5) * noise;
}

interface ECGChartProps {
  bpm: number;
  time: number;
  noiseLevel?: number;
  height?: number;
}

export function ECGChart({ bpm, time, noiseLevel = 0, height = 200 }: ECGChartProps) {
  const [backendSignal, setBackendSignal] = useState<number[] | null>(null);
  const [intervals, setIntervals] = useState<Record<string, number> | null>(null);
  const fetchedBpm = useRef<number>(0);

  // Fetch ECG from backend when bpm changes
  useEffect(() => {
    if (Math.abs(bpm - fetchedBpm.current) < 1) return; // Avoid re-fetching for tiny changes
    fetchedBpm.current = bpm;

    const fetchECG = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/septima/bio/ecg`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bpm, duration_s: 4, sample_rate: 500, noise_level: noiseLevel }),
        });
        const data = await res.json();
        if (data.ecg) {
          setBackendSignal(data.ecg);
          setIntervals(data.intervals);
        }
      } catch {
        // Backend unreachable — use local fallback
        setBackendSignal(null);
      }
    };
    fetchECG();
  }, [bpm]);

  const data = useMemo(() => {
    const SAMPLES = 500;
    const WINDOW = 4; // seconds shown

    if (backendSignal && backendSignal.length > 0) {
      // Use backend signal with time-based offset for animation
      const offset = Math.floor((time * 125) % backendSignal.length);
      return Array.from({ length: SAMPLES }, (_, i) => {
        const idx = (offset + i) % backendSignal.length;
        return { x: i, v: backendSignal[idx] };
      });
    }

    // Fallback: local synthetic ECG
    const period = 60 / bpm;
    return Array.from({ length: SAMPLES }, (_, i) => {
      const t = time - WINDOW + (i / SAMPLES) * WINDOW;
      if (t < 0) return { x: i, v: 0 };
      const phase = (t % period) / period;
      return { x: i, v: ecgSample(phase, noiseLevel) };
    });
  }, [bpm, time, noiseLevel, backendSignal]);

  return (
    <div style={{ width: '100%', height, position: 'relative' }}>
      {/* Medical grid background */}
      <div className="absolute inset-0 rounded-lg" style={{
        background: '#010f09',
        backgroundImage: `
          linear-gradient(rgba(0,234,211,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,234,211,0.08) 1px, transparent 1px),
          linear-gradient(rgba(0,234,211,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,234,211,0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
      }} />

      {/* Intervals overlay */}
      {intervals && (
        <div className="absolute top-2 right-3 z-10 flex gap-3 text-[9px] font-mono" style={{ color: 'rgba(0,234,211,0.5)' }}>
          <span>PR:{intervals.PR_ms}ms</span>
          <span>QRS:{intervals.QRS_ms}ms</span>
          <span>QT:{intervals.QT_ms}ms</span>
        </div>
      )}

      {/* Source indicator */}
      <div className="absolute top-2 left-3 z-10">
        <span className="text-[8px] font-mono px-1.5 py-0.5 rounded" style={{
          background: backendSignal ? 'rgba(0,234,211,0.1)' : 'rgba(251,191,36,0.1)',
          color: backendSignal ? '#00EAD3' : '#FBBF24',
        }}>
          {backendSignal ? 'HH-DERIVED' : 'SYNTHETIC'}
        </span>
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 16, right: 16, bottom: 10, left: 0 }}>
          <XAxis dataKey="x" hide />
          <YAxis domain={[-0.4, 1.5]} hide />
          <Line
            type="monotoneX"
            dataKey="v"
            stroke="#00EAD3"
            strokeWidth={1.8}
            dot={false}
            isAnimationActive={false}
            style={{ filter: 'drop-shadow(0 0 4px rgba(0,234,211,0.7))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

