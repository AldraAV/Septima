/**
 * QuizCard.tsx — Quiz Adaptativo Post-Simulación
 * Sprint 4 — Binary × Séptima Biomédica
 *
 * Tras una simulación, genera 1 pregunta de comprensión usando la IA de Binary
 * (endpoint /api/chat/explain). El estudiante responde y recibe feedback inmediato.
 */

import React, { useState, useCallback } from 'react';
import { Brain, Send, CheckCircle, XCircle, RefreshCw, Sparkles } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — import.meta.env es inyectado por Vite en tiempo de build
const API_URL: string = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_BINARY_API_URL) || 'http://localhost:8000';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;        // índice de la opción correcta
  explanation: string;
}

interface QuizCardProps {
  /** Contexto de la simulación para pasarle a la IA */
  context: string;
  /** Color de acento del módulo */
  accentColor?: string;
}

// ─── Preguntas de fallback por modelo ────────────────────────────────────────────
const FALLBACK_QUESTIONS: Record<string, QuizQuestion> = {
  default: {
    question: '¿Qué describe el método Runge-Kutta de 4º orden (RK4)?',
    options: [
      'Un algoritmo de aproximación numérica para EDOs con error O(h⁴)',
      'Un método de regresión lineal para datos biomédicos',
      'Una técnica de filtrado de señal ECG',
      'Un modelo de difusión iónica en membranas',
    ],
    correct: 0,
    explanation: 'RK4 usa 4 evaluaciones de la derivada por paso para lograr precisión de orden 4, siendo el más usado en biofísica computacional.',
  },
  hodgkin_huxley: {
    question: '¿Qué variables de estado describe el modelo de Hodgkin-Huxley?',
    options: [
      'Voltaje V, y compuertas m (activación Na⁺), h (inactivación Na⁺), n (activación K⁺)',
      'Glucosa G, Insulina I, y sensibilidad X',
      'Presión sistólica, diastólica y resistencia R',
      'Concentración plasmática C y cantidad en GI A',
    ],
    correct: 0,
    explanation: 'El modelo HH de 1952 (Premio Nobel) describe el potencial de acción con 4 EDOs: la corriente iónica emerge de las compuertas m³h para Na⁺ y n⁴ para K⁺.',
  },
  bergman: {
    question: '¿Qué representa el parámetro p₁ en el Modelo Mínimo de Bergman?',
    options: [
      'La tasa de eliminación dependiente de insulina de la glucosa plasmática',
      'La sensibilidad insulínica periférica',
      'La secreción basal de glucagón',
      'La velocidad de absorción intestinal de glucosa',
    ],
    correct: 0,
    explanation: 'p₁ (también llamado Sg) es la eficacia glucémica: la capacidad de la glucosa de estimular su propia captación y suprimir su producción hepática, independiente de la insulina.',
  },
  windkessel: {
    question: '¿Qué modela el parámetro C en el modelo Windkessel de 2 elementos?',
    options: [
      'La compliancia arterial — capacidad de las arterias para almacenar volumen con cada sístole',
      'La conductancia cardíaca máxima',
      'La resistencia vascular periférica total',
      'El volumen sistólico por latido',
    ],
    correct: 0,
    explanation: 'La compliancia C describe la elasticidad arterial. Un C bajo (arterias rígidas) genera hipertensión sistólica y pulso diferencial amplio, como en arteriosclerosis.',
  },
  compartment_pk: {
    question: '¿Qué determina la vida media (t½) en un modelo farmacocinético de 1 compartimento?',
    options: [
      't½ = ln(2)/ke — depende únicamente de la tasa de eliminación ke',
      't½ = Vd × ka — depende del volumen de distribución y absorción',
      't½ = Cmax/dose — depende de la concentración pico y la dosis',
      't½ = F × ke — depende de la biodisponibilidad y eliminación',
    ],
    correct: 0,
    explanation: 'En el modelo monocompartimental, la concentración decrece exponencialmente C(t) = C₀·e^(-ke·t), por lo que la vida media es independiente de la dosis: t½ = 0.693/ke.',
  },
};

// ─── Generador de preguntas vía IA ────────────────────────────────────────────────
async function fetchQuestion(context: string): Promise<QuizQuestion | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`${API_URL}/api/chat/explain`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: `Genera 1 pregunta de comprensión de opción múltiple (4 opciones) sobre el siguiente contexto biomédico. Responde SOLO con JSON válido con esta estructura exacta: {"question":"...","options":["A","B","C","D"],"correct":0,"explanation":"..."}. Contexto: ${context}`,
        format: 'json',
      }),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const raw = await res.json();
    // Intentar parsear la respuesta de la IA (puede venir en .content, .response, etc.)
    const text: string = raw.content ?? raw.response ?? raw.message ?? JSON.stringify(raw);
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return null;
    return JSON.parse(match[0]) as QuizQuestion;
  } catch {
    return null;
  }
}

// ─── Componente ──────────────────────────────────────────────────────────────────
export function QuizCard({ context, accentColor = '#7c6ef8' }: QuizCardProps) {
  const [phase, setPhase]       = useState<'idle' | 'loading' | 'question' | 'result'>('idle');
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct,  setCorrect]  = useState<boolean | null>(null);

  const generateQuestion = useCallback(async () => {
    setPhase('loading');
    setSelected(null);
    setCorrect(null);

    // Intentar IA — si falla, usar fallback local
    let q = await fetchQuestion(context);
    if (!q) {
      // Detectar modelo desde el contexto
      const modelKey = Object.keys(FALLBACK_QUESTIONS).find(k => context.toLowerCase().includes(k));
      q = FALLBACK_QUESTIONS[modelKey ?? 'default'];
    }
    setQuestion(q);
    setPhase('question');
  }, [context]);

  const handleAnswer = (idx: number) => {
    if (selected !== null || !question) return;
    setSelected(idx);
    setCorrect(idx === question.correct);
    setPhase('result');
  };

  const reset = () => {
    setPhase('idle');
    setQuestion(null);
    setSelected(null);
    setCorrect(null);
  };

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: `${accentColor}06`, border: `1px solid ${accentColor}15` }}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Sparkles size={13} style={{ color: accentColor }} />
          <span className="text-[#F9FAFB] text-xs font-semibold">Quiz Adaptativo</span>
          <span className="text-[#94A3B8] text-[10px]">Powered by Binary IA</span>
        </div>
        {phase === 'result' && (
          <button onClick={reset} className="flex items-center gap-1 text-[10px] text-[#94A3B8] hover:text-[#F9FAFB] transition-colors">
            <RefreshCw size={10} />Nueva pregunta
          </button>
        )}
      </div>

      {/* Contenido */}
      <div className="px-4 pb-4">

        {/* Estado idle */}
        {phase === 'idle' && (
          <button onClick={generateQuestion}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
            style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}25`, color: accentColor }}>
            <Brain size={13} />
            Generar pregunta sobre esta simulación
          </button>
        )}

        {/* Cargando */}
        {phase === 'loading' && (
          <div className="flex items-center justify-center gap-2 py-3 text-xs" style={{ color: accentColor }}>
            <RefreshCw size={12} className="animate-spin" />
            <span className="font-mono">Consultando a Binary IA...</span>
          </div>
        )}

        {/* Pregunta */}
        {(phase === 'question' || phase === 'result') && question && (
          <div>
            <p className="text-[#F9FAFB] text-xs font-medium mb-3 leading-relaxed">{question.question}</p>
            <div className="space-y-2">
              {question.options.map((opt, i) => {
                let bg = 'rgba(255,255,255,0.03)';
                let border = 'rgba(255,255,255,0.08)';
                let color = '#F9FAFB';
                if (phase === 'result') {
                  if (i === question.correct) { bg = 'rgba(52,211,153,0.1)'; border = '#34d399'; color = '#34d399'; }
                  else if (i === selected && i !== question.correct) { bg = 'rgba(255,46,99,0.1)'; border = '#FF2E63'; color = '#FF2E63'; }
                  else { color = '#64748B'; }
                }
                return (
                  <button key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={phase === 'result'}
                    className="w-full text-left px-3 py-2 rounded-lg text-[11px] transition-all flex items-center gap-2"
                    style={{ background: bg, border: `1px solid ${border}`, color }}>
                    {phase === 'result' && i === question.correct && <CheckCircle size={11} style={{ color: '#34d399', flexShrink: 0 }} />}
                    {phase === 'result' && i === selected && i !== question.correct && <XCircle size={11} style={{ color: '#FF2E63', flexShrink: 0 }} />}
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {phase === 'result' && (
              <div className="mt-3 p-3 rounded-lg text-[10px] leading-relaxed"
                style={{ background: correct ? 'rgba(52,211,153,0.06)' : 'rgba(255,46,99,0.06)', border: `1px solid ${correct ? 'rgba(52,211,153,0.2)' : 'rgba(255,46,99,0.2)'}` }}>
                <p className="font-semibold mb-1" style={{ color: correct ? '#34d399' : '#FF2E63' }}>
                  {correct ? '✓ Correcto — ' : '✗ Incorrecto — '} {question.explanation}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
