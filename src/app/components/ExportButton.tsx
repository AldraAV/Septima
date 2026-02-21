/**
 * ExportButton.tsx — Botón de Exportación Científica
 * Sprint 4 — Binary × Séptima Biomédica
 *
 * Reutilizable en todos los módulos: exporta CSV y PNG con un clic.
 */

import React, { useState } from 'react';
import { Download, FileText, Image, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';

interface ExportButtonProps {
  onExportCSV: () => void;
  onExportPNG: () => Promise<void> | void;
  disabled?: boolean;
  /** Color de acento del módulo (ej. "#FF2E63") */
  accentColor?: string;
}

export function ExportButton({
  onExportCSV,
  onExportPNG,
  disabled = false,
  accentColor = '#00EAD3',
}: ExportButtonProps) {
  const [open, setOpen] = useState(false);
  const [loadingPng, setLoadingPng] = useState(false);

  const handlePNG = async () => {
    setLoadingPng(true);
    setOpen(false);
    try {
      await onExportPNG();
    } finally {
      setLoadingPng(false);
    }
  };

  const handleCSV = () => {
    onExportCSV();
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(v => !v)}
        disabled={disabled || loadingPng}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-40"
        style={{
          background: `${accentColor}12`,
          border: `1px solid ${accentColor}30`,
          color: accentColor,
        }}
        title="Exportar datos"
      >
        {loadingPng
          ? <Loader2 size={13} className="animate-spin" />
          : <Download size={13} />}
        Exportar
        {open ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
      </button>

      {/* Dropdown */}
      {open && !loadingPng && (
        <div
          className="absolute right-0 top-full mt-1.5 z-50 rounded-xl overflow-hidden min-w-[140px]"
          style={{
            background: 'rgba(4,13,30,0.97)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          <button
            onClick={handleCSV}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-[#F9FAFB] hover:bg-white/5 transition-colors text-left"
          >
            <FileText size={12} style={{ color: accentColor }} />
            Descargar CSV
          </button>
          <div className="h-px mx-3 bg-white/5" />
          <button
            onClick={handlePNG}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-[#F9FAFB] hover:bg-white/5 transition-colors text-left"
          >
            <Image size={12} style={{ color: accentColor }} />
            Capturar PNG
          </button>
        </div>
      )}

      {/* Cerrar al hacer click fuera */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
