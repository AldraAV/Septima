/**
 * binaryApiService.ts — Capa de comunicación Séptima ↔ Binary EquaLab API
 *
 * Características:
 * - Timeout de 5s con aborte automático
 * - Fallback transparente si Binary no está disponible
 * - Indicadores de qué motor produjo el resultado
 */

import type {
  ODESimulationRequest,
  SimulationResult,
  GlucoseSimulationRequest,
  GlucoseSimulationResult,
  WindkesselSimulationRequest,
  EngineStatus,
  ODEModel,
} from './binaryTypes';
import { BinaryApiError } from './binaryTypes';

// ─── Configuración ──────────────────────────────────────────────────────────────

const BINARY_BASE_URL =
  import.meta.env.VITE_BINARY_API_URL ?? 'http://localhost:8000';

const DEFAULT_TIMEOUT_MS = 5000;

// ─── Fetch con timeout ──────────────────────────────────────────────────────────

async function fetchWithTimeout<T>(
  url: string,
  options: RequestInit,
  timeoutMs = DEFAULT_TIMEOUT_MS
): Promise<T> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    if (!res.ok) {
      const detail = await res.json().catch(() => ({ detail: res.statusText }));
      throw new BinaryApiError(
        detail.detail ?? `HTTP ${res.status}`,
        res.status
      );
    }
    return (await res.json()) as T;
  } finally {
    clearTimeout(id);
  }
}

// ─── Estado del motor ───────────────────────────────────────────────────────────

let _engineStatus: EngineStatus | null = null;
let _engineStatusExpiry = 0;

export async function checkEngineStatus(): Promise<EngineStatus> {
  if (_engineStatus && Date.now() < _engineStatusExpiry) return _engineStatus;

  try {
    const status = await fetchWithTimeout<EngineStatus>(
      `${BINARY_BASE_URL}/api/septima/status`,
      { method: 'GET' },
      2000
    );
    _engineStatus = status;
    _engineStatusExpiry = Date.now() + 30_000; // Cache 30s
    return status;
  } catch {
    return { engine_active: false, engine_version: 'unavailable', supported_solvers: [] };
  }
}

// ─── Simulación ODE genérica ────────────────────────────────────────────────────

export async function simulateODE(
  req: ODESimulationRequest
): Promise<SimulationResult> {
  return fetchWithTimeout<SimulationResult>(
    `${BINARY_BASE_URL}/api/septima/simulate`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req),
    }
  );
}

// ─── Glucosa-Insulina (Bergman Minimal Model) ───────────────────────────────────

export async function simulateGlucose(
  req: GlucoseSimulationRequest
): Promise<GlucoseSimulationResult> {
  return fetchWithTimeout<GlucoseSimulationResult>(
    `${BINARY_BASE_URL}/api/septima/bio/glucose`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req),
    }
  );
}

// ─── Windkessel (Cardiovascular) ────────────────────────────────────────────────

export async function simulateWindkessel(
  req: WindkesselSimulationRequest
): Promise<SimulationResult> {
  return fetchWithTimeout<SimulationResult>(
    `${BINARY_BASE_URL}/api/septima/simulate`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'windkessel' as ODEModel,
        t_start: req.t_start,
        t_end: req.t_end,
        dt: req.dt,
        y0: req.y0,
        params: { ...req.params, heart_rate: req.heart_rate },
        method: 'RungeKutta4',
      } satisfies ODESimulationRequest),
    }
  );
}

export default {
  checkEngineStatus,
  simulateODE,
  simulateGlucose,
  simulateWindkessel,
};
