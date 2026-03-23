import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Brain, Beaker } from 'lucide-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const API_BASE = (import.meta as any).env?.VITE_BINARY_API_URL || 'http://localhost:8000';

interface MathStep {
  title: string;
  latex: string;
  description: string;
  medical_context?: string;
}

interface MathExplainerPanelProps {
  treatment: number;
  doseMg: number;
  isCollapsed?: boolean;
}

export function MathExplainerPanel({ treatment, doseMg, isCollapsed = false }: MathExplainerPanelProps) {
  const [steps, setSteps] = useState<MathStep[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [collapsed, setCollapsed] = useState(isCollapsed);

  useEffect(() => {
    const fetchExplanation = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/septima/explain/pti?treatment=${treatment}&dose_mg=${doseMg}`);
        const data = await res.json();
        setSteps(data.steps || []);
      } catch (err) {
        console.error('Error fetching explanation:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchExplanation();
  }, [treatment, doseMg]);

  // Render LaTeX using KaTeX module
  const renderLatex = (latex: string) => {
    try {
      const html = katex.renderToString(latex, {
        throwOnError: false,
        displayMode: true,
        trust: true,
      });
      return (
        <div
          className="overflow-x-auto py-2"
          style={{ color: '#E2E8F0' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      // Fallback: render as code
      return (
        <pre className="text-xs font-mono text-[#00EAD3] bg-black/30 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap">
          {latex}
        </pre>
      );
    }
  };

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{
        background: 'rgba(0, 30, 60, 0.5)',
        border: '1px solid rgba(0, 234, 211, 0.12)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setCollapsed(c => !c)}
        className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <Brain size={16} style={{ color: '#00EAD3' }} />
          <span className="text-sm font-bold text-[#F9FAFB] tracking-tight">
            Explicación Matemática del Modelo
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00EAD3]/10 text-[#00EAD3] font-mono">
            {steps.length} pasos
          </span>
        </div>
        {collapsed ? <ChevronDown size={14} className="text-[#94A3B8]" /> : <ChevronUp size={14} className="text-[#94A3B8]" />}
      </button>

      {!collapsed && (
        <div className="px-5 pb-5 space-y-2">
          {loading ? (
            <div className="flex items-center gap-2 text-[#94A3B8] text-sm py-4">
              <div className="w-4 h-4 border-2 border-[#00EAD3] border-t-transparent rounded-full animate-spin" />
              Cargando explicación...
            </div>
          ) : (
            steps.map((step, i) => (
              <div
                key={i}
                className="rounded-xl transition-all"
                style={{
                  background: expandedStep === i ? 'rgba(0, 234, 211, 0.04)' : 'transparent',
                  border: `1px solid ${expandedStep === i ? 'rgba(0, 234, 211, 0.15)' : 'rgba(255,255,255,0.04)'}`,
                }}
              >
                <button
                  onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/3 transition-colors rounded-xl"
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{
                      background: expandedStep === i ? '#00EAD3' : 'rgba(255,255,255,0.06)',
                      color: expandedStep === i ? '#060d1a' : '#94A3B8',
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm font-medium text-[#F9FAFB] flex-1">{step.title}</span>
                  {expandedStep === i
                    ? <ChevronUp size={12} className="text-[#94A3B8]" />
                    : <ChevronDown size={12} className="text-[#94A3B8]" />}
                </button>

                {expandedStep === i && (
                  <div className="px-4 pb-4 space-y-3">
                    {/* LaTeX */}
                    <div className="bg-black/20 rounded-lg px-4 py-3">
                      {renderLatex(step.latex)}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#CBD5E1] leading-relaxed">
                      {step.description}
                    </p>

                    {/* Medical context */}
                    {step.medical_context && (
                      <div className="flex gap-2 p-3 rounded-lg" style={{ background: 'rgba(251, 191, 36, 0.05)', border: '1px solid rgba(251, 191, 36, 0.1)' }}>
                        <Beaker size={12} className="text-[#FBBF24] flex-shrink-0 mt-0.5" />
                        <p className="text-[11px] text-[#FBBF24]/80 leading-relaxed">
                          {step.medical_context}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default MathExplainerPanel;
