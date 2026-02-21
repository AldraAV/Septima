/**
 * binaryTypes.ts — Contratos de API compartidos entre Séptima y Binary EquaLab
 * Deben mantenerse sincronizados con los Pydantic models en backend/routers/septima.py
 */

// ─── Modelos disponibles ───────────────────────────────────────────────────────

export type ODEModel =
  | 'user_defined'
  | 'glucose_insulin'
  | 'compartment_pk'
  | 'windkessel'
  | 'hodgkin_huxley';

export type ODEMethod = 'Euler' | 'RungeKutta4';

// ─── Request DTOs ───────────────────────────────────────────────────────────────

export interface ODESimulationRequest {
  model: ODEModel;
  t_start: number;
  t_end: number;
  dt: number;
  y0: number[];
  params?: Record<string, number | boolean | string>;
  method?: ODEMethod;
}

export interface GlucoseSimulationRequest {
  t_start: number;
  t_end: number;
  dt: number;
  /** y0 = [G0 (mg/dL), X0, I0 (µU/mL)] */
  y0: [number, number, number];
  /** Parámetros del Minimal Model de Bergman */
  params: {
    p1: number;  // Tasa de captación de glucosa dependiente de insulina
    p2: number;  // Tasa de desaparición de la acción remota
    p3: number;  // Ganancia insulínica
    Gb: number;  // Glucosa basal
    Ib: number;  // Insulina basal
    n: number;   // Tasa de degradación de insulina
  };
}

export interface WindkesselSimulationRequest {
  t_start: number;
  t_end: number;
  dt: number;
  y0: [number];  // [P0 (mmHg)]
  params: {
    R: number;        // Resistencia periférica (PRU)
    C: number;        // Compliance arterial (mL/mmHg)
    P_venous: number; // Presión venosa central
  };
  heart_rate: number; // bpm
}

// ─── Response DTOs ──────────────────────────────────────────────────────────────

export interface SimulationResult {
  t: number[];
  y: number[][];  // y[state_index][time_index]
  model: ODEModel;
  metadata: {
    engine: 'cpp' | 'python_mock';
    execution_time_ms?: number;
  };
}

export interface GlucoseSimulationResult {
  t: number[];
  G: number[];  // Glucosa (mg/dL)
  X: number[];  // Acción remota de insulina (1/min)
  I: number[];  // Insulina (µU/mL)
  engine: 'cpp' | 'python_mock';
}

export interface EngineStatus {
  engine_active: boolean;
  engine_version: string;
  supported_solvers: ODEMethod[];
}

// ─── Error ─────────────────────────────────────────────────────────────────────

export class BinaryApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public fallbackUsed = false
  ) {
    super(message);
    this.name = 'BinaryApiError';
  }
}
