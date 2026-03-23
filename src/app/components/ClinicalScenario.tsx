/**
 * ClinicalScenario.tsx — Componente reutilizable de casos clínicos
 * Se integra en cualquier módulo (glucosa, neural, cardio, pharma).
 */
import React, { useState, useEffect } from 'react';
import { Stethoscope, ChevronRight, ChevronDown, ChevronUp, User, Lightbulb, CheckCircle, XCircle, AlertTriangle, Target } from 'lucide-react';

const API_BASE = (import.meta as any).env?.VITE_BINARY_API_URL || 'http://localhost:8000';

interface CasePreview {
  id: string;
  title: string;
  difficulty: string;
  patient_name: string;
  patient_age: number;
}

interface ClinicalScenarioProps {
  module: string;            // 'glucose' | 'neural' | 'cardiovascular' | 'pharma'
  accentColor?: string;      // Module accent color
  onLoadCase: (params: Record<string, any>) => void;  // Sets parent module params
  simulationResult?: any;    // Pass back sim data for evaluation
}

const DIFFICULTY_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  beginner:     { bg: 'rgba(0,234,211,0.08)', text: '#00EAD3', label: 'Principiante' },
  intermediate: { bg: 'rgba(251,191,36,0.08)', text: '#FBBF24', label: 'Intermedio' },
  advanced:     { bg: 'rgba(255,46,99,0.08)',  text: '#FF2E63', label: 'Avanzado' },
};

export function ClinicalScenario({ module, accentColor = '#FF2E63', onLoadCase, simulationResult }: ClinicalScenarioProps) {
  const [cases, setCases] = useState<CasePreview[]>([]);
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [caseDetail, setCaseDetail] = useState<any>(null);
  const [showHints, setShowHints] = useState(false);
  const [evaluation, setEvaluation] = useState<any>(null);

  // Fetch case list
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/septima/cases/${module}`);
        if (res.ok) {
          const data = await res.json();
          setCases(data.cases || []);
        }
      } catch { /* offline */ }
      setLoading(false);
    })();
  }, [module]);

  // Load a specific case
  const loadCase = async (caseId: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/septima/cases/${module}/${caseId}`);
      const detail = await res.json();
      setCaseDetail(detail);
      setSelectedId(caseId);
      setEvaluation(null);
      setShowHints(false);
      if (detail.initial_params) onLoadCase(detail.initial_params);
    } catch { /* offline */ }
  };

  // Evaluate after simulation
  const evaluateResult = async () => {
    if (!selectedId || !simulationResult) return;
    try {
      const res = await fetch(`${API_BASE}/api/septima/cases/${module}/${selectedId}/evaluate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(simulationResult),
      });
      const result = await res.json();
      setEvaluation(result);
    } catch { /* offline */ }
  };

  if (cases.length === 0 && !loading) return null;

  return (
    <div className="rounded-2xl overflow-hidden" style={{
      background: 'rgba(10,20,40,0.6)',
      border: `1px solid ${collapsed ? 'rgba(255,255,255,0.06)' : `${accentColor}20`}`,
      backdropFilter: 'blur(12px)',
    }}>
      {/* Header */}
      <button onClick={() => setCollapsed(c => !c)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/3 transition-colors"
        style={{ borderBottom: collapsed ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-2">
          <Stethoscope size={14} style={{ color: accentColor }} />
          <span className="text-sm font-bold text-[#F9FAFB]">Casos Clínicos</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded font-mono"
            style={{ background: `${accentColor}12`, color: accentColor }}>
            {cases.length}
          </span>
        </div>
        {collapsed ? <ChevronDown size={12} className="text-[#94A3B8]" /> : <ChevronUp size={12} className="text-[#94A3B8]" />}
      </button>

      {!collapsed && (
        <div className="p-3 space-y-2">
          {loading ? (
            <div className="flex items-center gap-2 text-[#94A3B8] text-sm py-2 px-2">
              <div className="w-3 h-3 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: `${accentColor} transparent transparent transparent` }} />
              Cargando...
            </div>
          ) : (
            <>
              {/* Case list */}
              {cases.map(c => {
                const diff = DIFFICULTY_STYLES[c.difficulty] || DIFFICULTY_STYLES.beginner;
                const active = selectedId === c.id;
                return (
                  <button key={c.id} onClick={() => loadCase(c.id)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all hover:bg-white/5"
                    style={{
                      background: active ? `${accentColor}08` : 'transparent',
                      border: `1px solid ${active ? `${accentColor}25` : 'rgba(255,255,255,0.04)'}`,
                    }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <User size={14} className="text-[#94A3B8]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-[#F9FAFB] truncate">{c.patient_name}, {c.patient_age}a</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] px-1 py-0.5 rounded" style={{ background: diff.bg, color: diff.text }}>{diff.label}</span>
                        <span className="text-[10px] text-[#94A3B8] truncate">{c.title}</span>
                      </div>
                    </div>
                    <ChevronRight size={12} className="text-[#94A3B8]" />
                  </button>
                );
              })}

              {/* Active case detail */}
              {caseDetail && selectedId && (
                <div className="mt-2 space-y-2">
                  {/* Objective */}
                  <div className="p-3 rounded-xl" style={{ background: `${accentColor}06`, border: `1px solid ${accentColor}15` }}>
                    <div className="flex items-start gap-2">
                      <Target size={12} style={{ color: accentColor }} className="mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Objetivo</div>
                        <p className="text-[11px] text-[#CBD5E1] leading-relaxed">{caseDetail.objective}</p>
                      </div>
                    </div>
                  </div>

                  {/* Patient history */}
                  <p className="text-[10px] text-[#94A3B8] leading-relaxed px-1">{caseDetail.patient?.history}</p>

                  {/* Hints toggle */}
                  <button onClick={() => setShowHints(h => !h)}
                    className="flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
                    style={{ color: '#FBBF24' }}>
                    <Lightbulb size={10} />
                    {showHints ? 'Ocultar pistas' : `Ver pistas (${caseDetail.hints?.length || 0})`}
                  </button>
                  {showHints && caseDetail.hints && (
                    <ul className="space-y-1 px-2">
                      {caseDetail.hints.map((h: string, i: number) => (
                        <li key={i} className="text-[10px] text-[#94A3B8] flex gap-1.5">
                          <span className="text-[#FBBF24]">•</span>{h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Evaluate button */}
                  {simulationResult && (
                    <button onClick={evaluateResult}
                      className="w-full py-2 rounded-xl text-xs font-bold transition-all hover:opacity-90"
                      style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30`, color: accentColor }}>
                      Evaluar Resultado
                    </button>
                  )}

                  {/* Evaluation result */}
                  {evaluation && (
                    <div className="p-3 rounded-xl" style={{
                      background: evaluation.success ? 'rgba(0,234,211,0.06)' : evaluation.is_danger ? 'rgba(255,46,99,0.08)' : 'rgba(251,191,36,0.06)',
                      border: `1px solid ${evaluation.success ? 'rgba(0,234,211,0.2)' : evaluation.is_danger ? 'rgba(255,46,99,0.2)' : 'rgba(251,191,36,0.2)'}`,
                    }}>
                      <div className="flex items-start gap-2">
                        {evaluation.success
                          ? <CheckCircle size={14} className="text-[#00EAD3] mt-0.5" />
                          : evaluation.is_danger
                            ? <AlertTriangle size={14} className="text-[#FF2E63] mt-0.5" />
                            : <XCircle size={14} className="text-[#FBBF24] mt-0.5" />}
                        <p className="text-[11px] leading-relaxed" style={{
                          color: evaluation.success ? '#00EAD3' : evaluation.is_danger ? '#FF2E63' : '#FBBF24'
                        }}>{evaluation.feedback}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ClinicalScenario;
