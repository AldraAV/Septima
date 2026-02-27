import React from 'react';
import { Pill, Activity, Scissors, AlertCircle } from 'lucide-react';

interface TreatmentSelectorProps {
    activeTreatment: number;
    setTreatment: (t: number) => void;
}

const TreatmentSelector: React.FC<TreatmentSelectorProps> = ({ activeTreatment, setTreatment }) => {
    const treatments = [
        { id: 0, label: 'Sin Tratamiento', icon: AlertCircle, color: 'gray' },
        { id: 1, label: 'Prednisona', icon: Pill, color: 'primary' },
        { id: 2, label: 'Inmunoglobulina (IVIG)', icon: Activity, color: 'blue' },
        { id: 3, label: 'Esplenectomía', icon: Scissors, color: 'red' },
    ];

    return (
        <div className="rounded-3xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
            <h3 className="text-sm font-bold text-[#94A3B8] uppercase tracking-widest mb-4">ProtocoloMédico</h3>
            <div className="grid grid-cols-1 gap-3">
                {treatments.map((t) => {
                    const Icon = t.icon;
                    const isActive = activeTreatment === t.id;
                    
                    return (
                        <button
                            key={t.id}
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
                    );
                })}
            </div>
        </div>
    );
};

export default TreatmentSelector;
