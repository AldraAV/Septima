/**
 * useBioEngineSocket.ts — Hook React para streaming en tiempo real
 * desde el motor C++ EquaCore via WebSockets (60 FPS).
 *
 * Protocolo:
 *   1. Cliente abre WS → envía JSON de configuración inicial { y0, params, dt }
 *   2. Servidor emite frames { t, y: [P, A], is_dead } a ~60 FPS
 *   3. Cliente puede enviar { params: {...} } en cualquier momento para inyectar cambios en caliente
 */

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface PTIFrame {
  t: number;
  y: [number, number]; // [Platelets, Antibodies]
  is_dead: boolean;
}

export interface PTIStreamConfig {
  y0: [number, number];
  params: Record<string, number>;
  dt?: number;
}

export type WSStatus = 'idle' | 'connecting' | 'streaming' | 'paused' | 'dead' | 'error' | 'closed';

export interface BioEngineSocketState {
  status: WSStatus;
  frames: PTIFrame[];
  latestFrame: PTIFrame | null;
  error: string | null;
  fps: number;
}

export interface BioEngineSocketActions {
  connect: (config: PTIStreamConfig) => void;
  disconnect: () => void;
  updateParams: (params: Record<string, number>) => void;
  clearFrames: () => void;
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const WS_BASE_URL =
  (import.meta.env.VITE_BINARY_API_URL ?? 'http://localhost:8000')
    .replace('http://', 'ws://')
    .replace('https://', 'wss://');

const MAX_FRAMES = 3000; // ~50s at 60 FPS — enough for 30-day sim at dt=0.1

// ─── Hook ──────────────────────────────────────────────────────────────────────

export function useBioEngineSocket(): [BioEngineSocketState, BioEngineSocketActions] {
  const [status, setStatus] = useState<WSStatus>('idle');
  const [frames, setFrames] = useState<PTIFrame[]>([]);
  const [latestFrame, setLatestFrame] = useState<PTIFrame | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fps, setFps] = useState(0);

  const wsRef = useRef<WebSocket | null>(null);
  const frameCountRef = useRef(0);
  const fpsIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // FPS counter
  useEffect(() => {
    fpsIntervalRef.current = setInterval(() => {
      setFps(frameCountRef.current);
      frameCountRef.current = 0;
    }, 1000);
    return () => {
      if (fpsIntervalRef.current) clearInterval(fpsIntervalRef.current);
    };
  }, []);

  const disconnect = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    setStatus('closed');
  }, []);

  const connect = useCallback((config: PTIStreamConfig) => {
    // Clean previous connection
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    setStatus('connecting');
    setError(null);
    setFrames([]);
    setLatestFrame(null);
    frameCountRef.current = 0;

    const ws = new WebSocket(`${WS_BASE_URL}/api/septima/realtime/pti`);
    wsRef.current = ws;

    ws.onopen = () => {
      // Send initial configuration
      ws.send(JSON.stringify({
        y0: config.y0,
        params: config.params,
        dt: config.dt ?? 0.1,
      }));
      setStatus('streaming');
    };

    ws.onmessage = (event) => {
      try {
        const frame: PTIFrame = JSON.parse(event.data);
        frameCountRef.current++;

        setLatestFrame(frame);
        setFrames(prev => {
          const next = [...prev, frame];
          // Ring buffer: keep last MAX_FRAMES
          return next.length > MAX_FRAMES ? next.slice(-MAX_FRAMES) : next;
        });

        if (frame.is_dead) {
          setStatus('dead');
        }
      } catch {
        // Malformed frame, ignore
      }
    };

    ws.onerror = () => {
      setError('Error de conexión con el motor C++ (WebSocket).');
      setStatus('error');
    };

    ws.onclose = (ev) => {
      if (status !== 'dead' && status !== 'error') {
        setStatus('closed');
      }
      if (ev.reason) {
        setError(ev.reason);
      }
    };
  }, [status]);

  const updateParams = useCallback((params: Record<string, number>) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ params }));
    }
  }, []);

  const clearFrames = useCallback(() => {
    setFrames([]);
    setLatestFrame(null);
    frameCountRef.current = 0;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, []);

  const state: BioEngineSocketState = { status, frames, latestFrame, error, fps };
  const actions: BioEngineSocketActions = { connect, disconnect, updateParams, clearFrames };

  return [state, actions];
}

export default useBioEngineSocket;
