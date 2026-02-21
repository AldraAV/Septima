/**
 * useBinaryEngine.ts — Hook React para consumir el Bio-Engine de Binary EquaLab
 *
 * Uso:
 *   const { data, loading, engineSource } = useBinaryEngine('windkessel', params, fallbackFn);
 *
 * - Llama al backend automáticamente cuando `params` cambia (con debounce 400ms)
 * - Si Binary no responde, ejecuta `fallbackFn` localmente y marca `engineSource='local'`
 * - `engineSource` puede ser: 'cpp' | 'python_mock' | 'local' | 'idle'
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  simulateODE,
  simulateGlucose,
  simulateWindkessel,
  checkEngineStatus,
} from '../services/binaryApiService';
import type {
  ODESimulationRequest,
  GlucoseSimulationRequest,
  WindkesselSimulationRequest,
  SimulationResult,
  GlucoseSimulationResult,
} from '../services/binaryTypes';

// ─── Tipos del hook ─────────────────────────────────────────────────────────────

export type EngineSource = 'cpp' | 'python_mock' | 'local' | 'idle';

export interface UseBinaryEngineReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  engineSource: EngineSource;
  /** Forzar re-ejecución manual */
  refresh: () => void;
}

// ─── Hook Windkessel ────────────────────────────────────────────────────────────

export function useWindkessel(
  req: WindkesselSimulationRequest | null,
  fallback?: (req: WindkesselSimulationRequest) => SimulationResult,
  debounceMs = 400
): UseBinaryEngineReturn<SimulationResult> {
  const [data, setData] = useState<SimulationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [engineSource, setEngineSource] = useState<EngineSource>('idle');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runRef = useRef(0);

  const run = useCallback(async (currentReq: WindkesselSimulationRequest) => {
    const runId = ++runRef.current;
    setLoading(true);
    setError(null);

    try {
      const result = await simulateWindkessel(currentReq);
      if (runId !== runRef.current) return; // Evitar race conditions
      setData(result);
      setEngineSource(result.metadata.engine === 'cpp' ? 'cpp' : 'python_mock');
    } catch (err) {
      if (runId !== runRef.current) return;
      // Fallback local
      if (fallback) {
        setData(fallback(currentReq));
        setEngineSource('local');
        setError(null);
      } else {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        setEngineSource('local');
      }
    } finally {
      if (runId === runRef.current) setLoading(false);
    }
  }, [fallback]);

  useEffect(() => {
    if (!req) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => run(req), debounceMs);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [req, debounceMs, run]);

  return { data, loading, error, engineSource, refresh: () => req && run(req) };
}

// ─── Hook Glucosa-Insulina ──────────────────────────────────────────────────────

export function useGlucoseInsulin(
  req: GlucoseSimulationRequest | null,
  fallback?: (req: GlucoseSimulationRequest) => GlucoseSimulationResult,
  debounceMs = 400
): UseBinaryEngineReturn<GlucoseSimulationResult> {
  const [data, setData] = useState<GlucoseSimulationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [engineSource, setEngineSource] = useState<EngineSource>('idle');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runRef = useRef(0);

  const run = useCallback(async (currentReq: GlucoseSimulationRequest) => {
    const runId = ++runRef.current;
    setLoading(true);
    setError(null);

    try {
      const result = await simulateGlucose(currentReq);
      if (runId !== runRef.current) return;
      setData(result);
      setEngineSource(result.engine === 'cpp' ? 'cpp' : 'python_mock');
    } catch (err) {
      if (runId !== runRef.current) return;
      if (fallback) {
        setData(fallback(currentReq));
        setEngineSource('local');
      } else {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      }
    } finally {
      if (runId === runRef.current) setLoading(false);
    }
  }, [fallback]);

  useEffect(() => {
    if (!req) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => run(req), debounceMs);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [req, debounceMs, run]);

  return { data, loading, error, engineSource, refresh: () => req && run(req) };
}

// ─── Hook genérico ODE ──────────────────────────────────────────────────────────

export function useODE(
  req: ODESimulationRequest | null,
  debounceMs = 400
): UseBinaryEngineReturn<SimulationResult> {
  const [data, setData] = useState<SimulationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [engineSource, setEngineSource] = useState<EngineSource>('idle');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runRef = useRef(0);

  const run = useCallback(async (currentReq: ODESimulationRequest) => {
    const runId = ++runRef.current;
    setLoading(true);
    setError(null);
    
    try {
      const result = await simulateODE(currentReq);
      if (runId !== runRef.current) return;
      setData(result);
      setEngineSource(result.metadata.engine === 'cpp' ? 'cpp' : 'python_mock');
    } catch (err) {
      if (runId !== runRef.current) return;
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setEngineSource('local');
    } finally {
      if (runId === runRef.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!req) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => run(req), debounceMs);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [req, debounceMs, run]);

  return { data, loading, error, engineSource, refresh: () => req && run(req) };
}

// ─── Hook Estado del Motor ──────────────────────────────────────────────────────

export function useBinaryEngineStatus() {
  const [active, setActive] = useState<boolean | null>(null);
  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    checkEngineStatus().then(s => {
      setActive(s.engine_active);
      setVersion(s.engine_version);
    });
  }, []);

  return { active, version };
}
