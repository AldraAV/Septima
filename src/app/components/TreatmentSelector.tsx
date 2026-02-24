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
        <div className="bg-background-dark/50 border border-aurora-border rounded-3xl p-6">
            <h3 className="text-sm font-bold text-aurora-muted uppercase tracking-widest mb-4">ProtocoloMédico</h3>
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
                                    ? `bg-primary/10 border-primary/40 text-primary` 
                                    : 'bg-white/5 border-aurora-border/20 text-aurora-secondary hover:bg-white/10'
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
