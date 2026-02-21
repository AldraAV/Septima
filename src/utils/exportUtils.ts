/**
 * exportUtils.ts — Utilidades de Exportación Científica
 * Sprint 4 — Binary × Séptima Biomédica
 *
 * Exporta datos de simulación como:
 *  - CSV científico con cabecera de metadatos
 *  - PNG de la gráfica activa mediante html2canvas
 */

// ─── Exportar CSV ────────────────────────────────────────────────────────────────

export interface ExportMeta {
  model: string;        // ej. "hodgkin_huxley"
  engine: string;       // ej. "python_mock" | "cpp" | "local"
  params?: Record<string, number | string>;
  timestamp?: string;
}

/**
 * Genera y descarga un archivo CSV con los datos de simulación.
 *
 * @param t      - Array de tiempos
 * @param series - Array de series { label, values }
 * @param meta   - Metadatos de la simulación
 */
export function exportCSV(
  t: number[],
  series: { label: string; values: number[] }[],
  meta: ExportMeta
): void {
  const ts = meta.timestamp ?? new Date().toISOString();
  const engine = meta.engine ?? 'unknown';

  // Cabecera con metadatos
  const header: string[] = [
    `# Séptima Biomédica — Exportación de Simulación`,
    `# Modelo: ${meta.model}`,
    `# Motor: ${engine}`,
    `# Fecha: ${ts}`,
  ];
  if (meta.params) {
    header.push(`# Parámetros: ${JSON.stringify(meta.params)}`);
  }
  header.push('');

  // Columnas: t + cada serie
  const colHeaders = ['t', ...series.map(s => s.label)].join(',');
  const rows = t.map((time, i) => {
    const cols = [time.toFixed(6), ...series.map(s => (s.values[i] ?? 0).toFixed(6))];
    return cols.join(',');
  });

  const csv = [...header, colHeaders, ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `septima_${meta.model}_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Exportar PNG ────────────────────────────────────────────────────────────────

/**
 * Captura un elemento DOM y lo descarga como PNG.
 * Usa html2canvas en lazy import para no bloquear el bundle.
 *
 * @param elementId - ID del div que contiene la gráfica
 * @param filename  - Nombre del archivo (sin extensión)
 */
export async function exportPNG(elementId: string, filename?: string): Promise<void> {
  const el = document.getElementById(elementId);
  if (!el) {
    console.warn(`[exportPNG] elemento #${elementId} no encontrado`);
    return;
  }

  try {
    // Lazy import — html2canvas solo se carga cuando el usuario exporta
    const { default: html2canvas } = await import('html2canvas');
    const canvas = await html2canvas(el, {
      backgroundColor: '#040d1e',
      scale: 2,          // 2× para alta resolución
      useCORS: true,
      logging: false,
    });
    const link = document.createElement('a');
    link.download = `${filename ?? `septima_chart_${Date.now()}`}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error('[exportPNG]', err);
  }
}

// ─── Hook compuesto ──────────────────────────────────────────────────────────────

import type { SimulationResult } from '../services/binaryTypes';

/**
 * Devuelve handlers de exportación listos para usar en cualquier módulo.
 */
export function buildExportHandlers(
  data: SimulationResult | null,
  seriesLabels: string[],
  meta: Omit<ExportMeta, 'timestamp'>,
  chartElementId: string
) {
  return {
    onExportCSV: () => {
      if (!data) return;
      const series = seriesLabels.map((label, i) => ({
        label,
        values: data.y[i] ?? [],
      }));
      exportCSV(data.t, series, { ...meta, timestamp: new Date().toISOString() });
    },
    onExportPNG: () => {
      exportPNG(chartElementId, `septima_${meta.model}`);
    },
  };
}
