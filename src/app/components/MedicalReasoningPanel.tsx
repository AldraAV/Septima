import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface AIAnalysisPanelProps {
    narrative?: string;
    interpretation?: string;
}

export const AIAnalysisPanel: React.FC<AIAnalysisPanelProps> = ({ narrative, interpretation }) => {
    return (
        <div className="rounded-3xl p-6 h-full flex flex-col space-y-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
            <div className="flex items-center gap-2 text-[#00EAD3] mb-2 shrink-0">
                <Sparkles size={20} />
                <h3 className="font-bold text-lg text-[#F9FAFB]">Análisis de Séptima IA</h3>
            </div>
            
            {interpretation && (
                <div className="p-4 bg-[#00EAD3]/10 border border-[#00EAD3]/30 rounded-2xl shrink-0">
                    <p className="text-white text-sm font-medium leading-relaxed">{interpretation}</p>
                </div>
            )}

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-[#94A3B8] text-sm leading-relaxed whitespace-pre-line format-markdown">
                {narrative ? (
                    <div className="prose prose-invert prose-p:text-[#94A3B8] prose-strong:text-white max-w-none prose-sm">
                        <ReactMarkdown 
                            remarkPlugins={[remarkMath]} 
                            rehypePlugins={[rehypeKatex]}
                        >
                            {narrative}
                        </ReactMarkdown>
                    </div>
                ) : (
                    "Simulación requerida para análisis..."
                )}
            </div>
        </div>
    );
};

interface MetabolicRoutePanelProps {
    steps?: any[];
}

export const MetabolicRoutePanel: React.FC<MetabolicRoutePanelProps> = ({ steps }) => {
    return (
        <div className="rounded-3xl p-6 space-y-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
            <div className="flex items-center gap-2 text-[#f59e0b]">
                <BookOpen size={20} />
                <h3 className="font-bold text-lg text-[#F9FAFB]">Ruta Metabólica (EquaCore)</h3>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                {steps ? steps.map((step: any, idx: number) => (
                    <div key={idx} className="space-y-2">
                        <h4 className="text-white font-bold text-sm flex items-center gap-2">
                            <span className="size-5 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center text-[10px]">{idx + 1}</span>
                            {step.title}
                        </h4>
                        <div className="p-4 rounded-2xl text-[14px] text-white overflow-x-auto" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <ReactMarkdown 
                                remarkPlugins={[remarkMath]} 
                                rehypePlugins={[rehypeKatex]}
                            >
                                {`$$${step.latex}$$`}
                            </ReactMarkdown>
                        </div>
                        <p className="text-xs text-[#94A3B8] italic">{step.description}</p>
                    </div>
                )) : (
                    <p className="text-[#94A3B8] text-sm mt-4 text-center">Esperando datos simbólicos...</p>
                )}
            </div>
        </div>
    );
};
