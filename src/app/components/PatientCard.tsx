import React from 'react';
import { User, Calendar, ShieldAlert, HeartPulse, Skull, AlertOctagon } from 'lucide-react';

interface PatientCardProps {
    isDead?: boolean;
    hasCushing?: boolean;
    hasThrombocytosis?: boolean;
}

const PatientCard: React.FC<PatientCardProps> = ({ isDead, hasCushing, hasThrombocytosis }) => {
    const isFatal = isDead || hasThrombocytosis;
    return (
        <div className="rounded-3xl p-6 space-y-4 transition-all duration-1000" style={{ 
            background: isFatal ? 'rgba(220, 38, 38, 0.1)' : 'rgba(255,255,255,0.03)', 
            border: isFatal ? '1px solid rgba(220, 38, 38, 0.3)' : '1px solid rgba(255,255,255,0.07)', 
            backdropFilter: 'blur(12px)' 
        }}>
            <div className="flex items-center gap-4 mb-2">
                <div className={`size-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${isFatal ? 'bg-red-900 shadow-red-500/20' : 'bg-gradient-to-br from-[#3B82F6] to-[#6366F1] shadow-blue-500/20'}`}>
                    {isDead ? <Skull size={24} /> : hasThrombocytosis ? <AlertOctagon size={24} /> : <User size={24} />}
                </div>
                <div>
                    <h3 className={`font-bold text-lg ${isFatal ? 'text-red-400' : 'text-[#F9FAFB]'}`}>José M.</h3>
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
                    <span className="text-[#94A3B8]">Estado Inmune:</span>
                    <span className={`flex items-center gap-1 font-bold ${isDead ? 'text-red-500' : hasThrombocytosis ? 'text-red-500' : hasCushing ? 'text-[#F59E0B]' : 'text-[#00EAD3]'}`}>
                        <ShieldAlert size={14} /> 
                        {isDead ? 'Fallo Multiorgánico (Hemorragia)' : hasThrombocytosis ? 'Trombocitosis Crítica (Coágulos)' : hasCushing ? 'Inmunosuprimido Crítico (Cushing)' : 'Reactivo'}
                    </span>
                </div>
            </div>

            {hasCushing && !isFatal && (
                <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 p-2 rounded-lg flex items-start gap-2 animate-pulse mt-2">
                    <AlertOctagon size={16} className="text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F59E0B] font-medium leading-tight">Mala Praxis: Dosis de Corticoides Extrema (&gt;60mg)</span>
                </div>
            )}
            
            {hasThrombocytosis && (
                <div className="bg-red-500/10 border border-red-500/30 p-2 rounded-lg flex items-start gap-2 animate-pulse mt-2">
                    <AlertOctagon size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-red-500 font-bold uppercase leading-tight">Paciente Fallecido: Trombosis Masiva (Sangre Coagulada)</span>
                </div>
            )}
            
            {isDead && (
                <div className="bg-red-500/10 border border-red-500/30 p-2 rounded-lg flex items-start gap-2 animate-pulse mt-2">
                    <Skull size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-red-500 font-bold uppercase leading-tight">Paciente Fallecido: Hemorragia Intracraneal</span>
                </div>
            )}

            <div className="pt-4 border-t border-white/10">
                <div className={`flex items-center gap-2 text-xs font-bold uppercase mb-2 ${isFatal ? 'text-red-400' : 'text-[#00EAD3]'}`}>
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
