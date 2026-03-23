/**
 * ClinicalCaseSelector.tsx — Selector de Casos Clínicos PTI
 * Consume GET /api/septima/cases/pti y permite cargar escenarios pre-configurados.
 */

import React, { useState, useEffect } from 'react';
import { Stethoscope, ChevronRight, AlertTriangle, CheckCircle, XCircle, User } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BINARY_API_URL || 'http://localhost:8000';

interface CaseSummary {
  id: string;
  title: string;
  difficulty: string;
  patient_name: string;
  patient_age: number;
  initial_platelets: number;
}

interface ClinicalCaseSelectorProps {
  onLoadCase: (params: {
    y0: number[];
    params: Record<string, number>;
    patientName: string;
    patientAge: number;
  }) => void;
}

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  beginner:     { bg: 'rgba(0,234,211,0.08)', text: '#00EAD3', label: 'Principiante' },
  intermediate: { bg: 'rgba(251,191,36,0.08)', text: '#FBBF24', label: 'Intermedio' },
  advanced:     { bg: 'rgba(255,46,99,0.08)',  text: '#FF2E63', label: 'Avanzado' },
};

export function ClinicalCaseSelector({ onLoadCase }: ClinicalCaseSelectorProps) {
  const [cases, setCases] = useState<CaseSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<any>(null);

  useEffect(() => {
    const fetchCases = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/septima/cases/pti`);
        const data = await res.json();
        setCases(data.cases || []);
      } catch (err) {
        console.error('Error fetching cases:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCases();
  }, []);

  const handleLoadCase = async (caseId: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/septima/cases/pti/${caseId}`);
      const fullCase = await res.json();
      setSelectedCase(caseId);
      setEvaluation(null);

      if (fullCase.simulation_params) {
        onLoadCase({
          y0: fullCase.simulation_params.y0,
          params: fullCase.simulation_params.params,
          patientName: fullCase.patient.name,
          patientAge: fullCase.patient.age,
        });
      }
    } catch (err) {
      console.error('Error loading case:', err);
    }
  };

  const handleEvaluate = async (caseId: string, treatmentId: number) => {
    try {
      const res = await fetch(
        `${API_BASE}/api/septima/cases/pti/${caseId}/evaluate?treatment_id=${treatmentId}`,
        { method: 'POST' }
      );
      const result = await res.json();
      setEvaluation(result);
    } catch (err) {
      console.error('Error evaluating:', err);
    }
  };

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(10, 20, 40, 0.6)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="px-5 py-3.5 flex items-center gap-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Stethoscope size={16} style={{ color: '#FF2E63' }} />
        <span className="text-sm font-bold text-[#F9FAFB]">Casos Clínicos Interactivos</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FF2E63]/10 text-[#FF2E63] font-mono">
          {cases.length} casos
        </span>
      </div>

      <div className="p-3 space-y-2">
        {loading ? (
          <div className="flex items-center gap-2 text-[#94A3B8] text-sm py-3 px-2">
            <div className="w-4 h-4 border-2 border-[#FF2E63] border-t-transparent rounded-full animate-spin" />
            Cargando casos...
          </div>
        ) : (
          cases.map(c => {
            const diff = DIFFICULTY_COLORS[c.difficulty] || DIFFICULTY_COLORS.beginner;
            const isSelected = selectedCase === c.id;

            return (
              <button
                key={c.id}
                onClick={() => handleLoadCase(c.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all hover:bg-white/5"
                style={{
                  background: isSelected ? 'rgba(255,46,99,0.06)' : 'transparent',
                  border: `1px solid ${isSelected ? 'rgba(255,46,99,0.2)' : 'rgba(255,255,255,0.04)'}`,
                }}
              >
                {/* Patient avatar */}
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <User size={16} className="text-[#94A3B8]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#F9FAFB] truncate">{c.patient_name}</span>
                    <span className="text-[10px] text-[#94A3B8]">{c.patient_age} años</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: diff.bg, color: diff.text }}>
                      {diff.label}
                    </span>
                    <span className="text-[10px] text-[#94A3B8] font-mono">
                      PLT: {c.initial_platelets.toLocaleString()}/μL
                    </span>
                  </div>
                </div>

                <ChevronRight size={14} className="text-[#94A3B8] flex-shrink-0" />
              </button>
            );
          })
        )}

        {/* Evaluation feedback */}
        {evaluation && (
          <div className="mt-3 p-3 rounded-xl" style={{
            background: evaluation.is_correct ? 'rgba(0,234,211,0.06)' : 'rgba(255,46,99,0.06)',
            border: `1px solid ${evaluation.is_correct ? 'rgba(0,234,211,0.15)' : 'rgba(255,46,99,0.15)'}`,
          }}>
            <div className="flex items-start gap-2">
              {evaluation.is_correct
                ? <CheckCircle size={14} className="text-[#00EAD3] mt-0.5" />
                : <XCircle size={14} className="text-[#FF2E63] mt-0.5" />}
              <p className="text-xs text-[#CBD5E1] leading-relaxed">{evaluation.feedback}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClinicalCaseSelector;
