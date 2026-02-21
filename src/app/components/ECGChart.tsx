import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Generate realistic ECG waveform value for a given phase [0,1]
export function ecgSample(phase: number, noise = 0): number {
  const p = ((phase % 1) + 1) % 1;
  let v = 0;
  // P wave
  if (p < 0.09) v = 0.13 * Math.sin(Math.PI * p / 0.09);
  // PQ segment
  else if (p < 0.19) v = 0.005;
  // Q
  else if (p < 0.22) v = -0.08 * Math.sin(Math.PI * (p - 0.19) / 0.03);
  // R peak
  else if (p < 0.28) v = 1.15 * Math.sin(Math.PI * (p - 0.22) / 0.06);
  // S
  else if (p < 0.33) v = -0.1 * Math.sin(Math.PI * (p - 0.28) / 0.05);
  // ST segment
  else if (p < 0.43) v = 0.01;
  // T wave
  else if (p < 0.67) v = 0.27 * Math.sin(Math.PI * (p - 0.43) / 0.24);
  // TP
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
  const data = useMemo(() => {
    const SAMPLES = 500;
    const WINDOW = 4; // seconds shown
    const period = 60 / bpm;
    return Array.from({ length: SAMPLES }, (_, i) => {
      const t = time - WINDOW + (i / SAMPLES) * WINDOW;
      if (t < 0) return { x: i, v: 0 };
      const phase = (t % period) / period;
      return { x: i, v: ecgSample(phase, noiseLevel) };
    });
  }, [bpm, time, noiseLevel]);

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
