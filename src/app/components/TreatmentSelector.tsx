import React from 'react';
import { Pill, Activity, Scissors, AlertCircle } from 'lucide-react';

interface TreatmentSelectorProps {
    activeTreatment: number;
    setTreatment: (t: number) => void;
    doseMg: number;
    setDoseMg: (d: number) => void;
    ivigDoses: number;
    setIvigDoses: (d: number) => void;
}

const TreatmentSelector: React.FC<TreatmentSelectorProps> = ({ 
    activeTreatment, setTreatment, doseMg, setDoseMg, ivigDoses, setIvigDoses 
}) => {
    const treatments = [
        { id: 0, label: 'Sin Tratamiento', icon: AlertCircle, color: 'gray' },
        { id: 1, label: 'Prednisona', icon: Pill, color: 'primary' },
        { id: 2, label: 'Inmunoglobulina (IVIG)', icon: Activity, color: 'blue' },
        { id: 3, label: 'Esplenectomía', icon: Scissors, color: 'red' },
    ];

    return (
        <div className="rounded-3xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
            <h3 className="text-sm font-bold text-[#94A3B8] uppercase tracking-widest mb-4">Protocolo Médico</h3>
            <div className="grid grid-cols-1 gap-3">
                {treatments.map((t) => {
                    const Icon = t.icon;
                    const isActive = activeTreatment === t.id;
                    
                    return (
                        <div key={t.id} className="flex flex-col gap-2">
                            <button
                                onClick={() => setTreatment(t.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all border text-left
                                    ${isActive 
                                        ? `bg-[#00EAD3]/10 border-[#00EAD3]/40 text-[#00EAD3]` 
                                        : 'bg-white/5 border-white/10 text-[#94A3B8] hover:bg-white/10'
                                    }
                                `}
                            >
                                <Icon size={18} />
                                <span className="text-sm font-medium">{t.label}</span>
                            </button>
                            
                            {/* Prednisone Dose Slider */}
                            {isActive && t.id === 1 && (
                                <div className="pl-4 pr-2 py-2 animate-in slide-in-from-top-2">
                                    <div className="flex justify-between text-xs text-[#94A3B8] mb-2 font-mono">
                                        <span>Dosis (Corticoides)</span>
                                        <span className={doseMg > 60 ? "text-[#FF2E63] font-bold" : "text-[#00EAD3]"}>{doseMg} mg</span>
                                    </div>
                                    <input 
                                        type="range" min="0" max="100" step="10" 
                                        value={doseMg} 
                                        onChange={(e) => setDoseMg(Number(e.target.value))}
                                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00EAD3]"
                                    />
                                    {doseMg > 60 && <p className="text-[#FF2E63] text-xs mt-2 italic">⚠️ Riesgo de Inmunosupresión letal y Cushing</p>}
                                </div>
                            )}

                            {/* IVIG Dose Slider */}
                            {isActive && t.id === 2 && (
                                <div className="pl-4 pr-2 py-2 animate-in slide-in-from-top-2">
                                    <div className="flex justify-between text-xs text-[#94A3B8] mb-2 font-mono">
                                        <span>Dosis (Ampollas 1g/kg)</span>
                                        <span className="text-[#00EAD3]">{ivigDoses} dosis</span>
                                    </div>
                                    <input 
                                        type="range" min="1" max="5" step="1" 
                                        value={ivigDoses} 
                                        onChange={(e) => setIvigDoses(Number(e.target.value))}
                                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00EAD3]"
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TreatmentSelector;
