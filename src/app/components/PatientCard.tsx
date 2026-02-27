import React from 'react';
import { User, Calendar, ShieldAlert, HeartPulse } from 'lucide-react';

const PatientCard: React.FC = () => {
    return (
        <div className="rounded-3xl p-6 space-y-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
            <div className="flex items-center gap-4 mb-2">
                <div className="size-12 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#6366F1] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <User size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-[#F9FAFB] text-lg">José M.</h3>
                    <div className="flex items-center gap-2 text-[#94A3B8] text-xs">
                        <Calendar size={12} />
                        <span>12 años, Masculino</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#94A3B8]">Diagnóstico:</span>
                    <span className="text-[#FF2E63] font-bold px-2 py-0.5 bg-[#FF2E63]/10 rounded">PTI Severa</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#94A3B8]">Peso:</span>
                    <span className="text-[#F9FAFB]">42 kg</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#94A3B8]">Estado Inmune:</span>
                    <span className="text-[#f59e0b] flex items-center gap-1">
                        <ShieldAlert size={14} /> Reactivo
                    </span>
                </div>
            </div>

            <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#00EAD3] text-xs font-bold uppercase mb-2">
                    <HeartPulse size={14} />
                    Simbología Médica
                </div>
                <p className="text-[10px] text-[#94A3B8] leading-relaxed">
                    $P(t)$: Recuento de plaquetas.<br/>
                    $A(t)$: Auto-anticuerpos activos.
                </p>
            </div>
        </div>
    );
};

export default PatientCard;
