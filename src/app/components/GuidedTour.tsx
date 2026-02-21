import React from 'react';
import { X, ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';

const STEPS = [
  {
    title: 'Bienvenido a Séptima',
    description: 'Esta es tu plataforma de simulación biomédica. Aprenderás anatomía, fisiología y análisis de señales de forma interactiva y segura.',
    tab: 'dashboard',
    highlight: null,
    emoji: '🏥'
  },
  {
    title: 'Explora el Corazón 3D',
    description: 'En la vista Anatomía 3D, puedes rotar el modelo del corazón, activar capas anatómicas y hacer hover sobre los puntos para ver los nombres de las estructuras.',
    tab: 'anatomy',
    highlight: 'anatomy-view',
    emoji: '🫀'
  },
  {
    title: 'Ajusta la Resistencia Vascular',
    description: 'En la pestaña Fisiología, mueve el slider de Resistencia Vascular. Observa cómo la presión sistólica y diastólica cambian en tiempo real.',
    tab: 'physiology',
    highlight: 'physiology-panel',
    emoji: '🩺'
  },
  {
    title: 'Observa el Cambio en Presión',
    description: 'Presiona "Iniciar Simulación" y carga un escenario clínico (Hipertensión o Insuficiencia Cardíaca) para ver cómo la presión aórtica varía con la patología.',
    tab: 'physiology',
    highlight: 'pressure-chart',
    emoji: '📈'
  },
  {
    title: 'Analiza las Señales ECG',
    description: 'En el Monitor ECG verás el trazado en tiempo real estilo osciloscopio. Activa los filtros de señal y ajusta la frecuencia cardíaca con el slider.',
    tab: 'ecg',
    highlight: 'ecg-canvas',
    emoji: '💓'
  },
];

interface GuidedTourProps {
  step: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  onNavigate: (page: string, tab?: string) => void;
}

export function GuidedTour({ step, onNext, onPrev, onClose, onNavigate }: GuidedTourProps) {
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const isFirst = step === 0;

  const handleNext = () => {
    if (isLast) {
      onClose();
      return;
    }
    const nextStep = STEPS[step + 1];
    if (nextStep.tab === 'dashboard') {
      onNavigate('dashboard');
    } else {
      onNavigate('cardiovascular', nextStep.tab);
    }
    onNext();
  };

  const handlePrev = () => {
    const prevStep = STEPS[step - 1];
    if (prevStep.tab === 'dashboard') {
      onNavigate('dashboard');
    } else {
      onNavigate('cardiovascular', prevStep.tab);
    }
    onPrev();
  };

  return (
    <>
      {/* Backdrop overlay - very subtle */}
      <div className="fixed inset-0 pointer-events-none z-40" style={{ background: 'rgba(0,0,0,0.3)' }} />

      {/* Tour card */}
      <div
        className="fixed bottom-6 right-6 z-50 w-80 rounded-2xl border p-5 shadow-2xl"
        style={{
          background: 'rgba(10,15,30,0.97)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(0,234,211,0.3)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,234,211,0.1)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(0,234,211,0.15)', border: '1px solid rgba(0,234,211,0.3)' }}
            >
              <BookOpen size={14} className="text-[#00EAD3]" />
            </div>
            <div>
              <p className="text-[10px] text-[#00EAD3] uppercase tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Recorrido Guiado
              </p>
              <p className="text-[10px] text-[#94A3B8]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Paso {step + 1} de {STEPS.length}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#94A3B8] hover:text-[#F9FAFB] transition-colors p-1 rounded-lg hover:bg-white/10"
          >
            <X size={14} />
          </button>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-4">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="h-1 flex-1 rounded-full transition-all duration-300"
              style={{
                background: i <= step ? '#00EAD3' : 'rgba(255,255,255,0.1)',
                boxShadow: i === step ? '0 0 8px #00EAD3' : 'none'
              }}
            />
          ))}
        </div>

        {/* Step content */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{current.emoji}</span>
            <h3 className="text-[#F9FAFB] text-sm" style={{ fontWeight: 700 }}>
              {current.title}
            </h3>
          </div>
          <p className="text-[#94A3B8] text-xs" style={{ lineHeight: '1.6' }}>
            {current.description}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs transition-all ${
              isFirst
                ? 'text-[#94A3B8]/30 cursor-not-allowed'
                : 'text-[#94A3B8] hover:text-[#F9FAFB] hover:bg-white/8'
            }`}
          >
            <ChevronLeft size={12} />
            Anterior
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm text-white transition-all"
            style={{
              background: isLast
                ? 'linear-gradient(135deg, #00EAD3, #3B82F6)'
                : 'linear-gradient(135deg, #3B82F6, #6366F1)',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(59,130,246,0.4)'
            }}
          >
            {isLast ? '¡Completado! 🎉' : 'Siguiente'}
            {!isLast && <ChevronRight size={14} />}
          </button>
        </div>
      </div>
    </>
  );
}
