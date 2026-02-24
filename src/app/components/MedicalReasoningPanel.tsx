import React from 'react';
import { Sparkles, BookOpen, Stethoscope } from 'lucide-react';

interface MedicalReasoningPanelProps {
    narrative?: string;
    steps?: any[];
    interpretation?: string;
}

const MedicalReasoningPanel: React.FC<MedicalReasoningPanelProps> = ({ narrative, steps, interpretation }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:col-span-3">
            <div className="bg-background-dark/50 border border-aurora-border rounded-3xl p-8 space-y-4">
                <div className="flex items-center gap-2 text-primary mb-4">
                    <Sparkles size={20} />
                    <h3 className="font-bold text-lg">Análisis de la Séptima IA</h3>
                </div>
                
                {interpretation && (
                    <div className="p-4 bg-primary/10 border border-primary/30 rounded-2xl mb-4">
                        <p className="text-white text-sm font-medium leading-relaxed">{interpretation}</p>
                    </div>
                )}

                <div className="text-aurora-secondary text-sm leading-relaxed whitespace-pre-line">
                    {narrative || "Simulación requerida para análisis..."}
                </div>
            </div>

            <div className="bg-background-dark/50 border border-aurora-border rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-2 text-orange-400 mb-4">
                    <BookOpen size={20} />
                    <h3 className="font-bold text-lg">Ruta Metabólica (EquaCore)</h3>
                </div>

                <div className="space-y-6 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                    {steps ? steps.map((step: any, idx: number) => (
                        <div key={idx} className="space-y-3">
                            <h4 className="text-white font-bold text-sm flex items-center gap-2">
                                <span className="size-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px]">{idx + 1}</span>
                                {step.title}
                            </h4>
                            <div className="p-4 bg-white/5 rounded-2xl text-xs font-mono text-aurora-muted">
                                {step.latex}
                            </div>
                            <p className="text-xs text-aurora-secondary italic">{step.description}</p>
                        </div>
                    )) : (
                        <p className="text-aurora-muted text-sm mt-4 text-center">Esperando datos simbólicos...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MedicalReasoningPanel;
