import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { simulatePTI } from '../../services/binaryApiService';
import { 
  Activity, Heart, Thermometer, User, 
  ChevronRight, Play, RefreshCw, BookOpen, 
  Stethoscope, Info, AlertCircle
} from 'lucide-react';
import PlateletsGraph from './PlateletsGraph';
import PatientCard from './PatientCard';
import TreatmentSelector from './TreatmentSelector';
import { AIAnalysisPanel, MetabolicRoutePanel } from './MedicalReasoningPanel';

export const PTISimulator: React.FC = () => {
    const [params, setParams] = useState({
        production_rate: 50000,
        destruction_rate: 0.1,
        antibody_production: 0.05,
        treatment: 0,
        treatment_efficacy: 0.8,
        mode: 'student'
    });

    // Delegamos el ciclo de vida de red al QueryClient de React Query
    const ptiMutation = useMutation({
        mutationFn: (requestParams: any) => simulatePTI({
            t_start: 0,
            t_end: 30,
            dt: 0.1,
            y0: [15000.0, 1.0], 
            params: requestParams,
            mode: requestParams.mode
        }),
    });

    useEffect(() => {
        ptiMutation.mutate(params);
    }, []);

    const handleRunSimulation = () => ptiMutation.mutate(params);

    const loading = ptiMutation.isPending;
    const simulationData = ptiMutation.data;

    return (
        <div className="flex-1 h-full overflow-y-auto p-4 md:p-8 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto space-y-6">
                
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
                    <div>
                        <div className="flex items-center gap-2 text-[#00EAD3] mb-1">
                            <Activity size={20} className="animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest">Bio-Simulation Mode</span>
                        </div>
                        <h1 className="text-3xl font-bold text-[#F9FAFB]">Séptima: Púrpuras Trombocitopénicas</h1>
                        <p className="text-[#94A3B8]">Caso José (12 años) - Simulación Dinámica</p>
                    </div>
                    
                    <button 
                        onClick={handleRunSimulation}
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg disabled:opacity-50 hover:opacity-90"
                        style={{ background: '#00EAD3', color: '#060d1a', boxShadow: '0 4px 20px rgba(0, 234, 211, 0.3)' }}
                    >
                        {loading ? <RefreshCw className="animate-spin" size={20} /> : <Play size={20} />}
                        Simular Evolución
                    </button>
                </header>

                {ptiMutation.isError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3">
                        <AlertCircle size={20} />
                        <div>
                            <p className="font-bold text-sm">Error de Conexión con Motor C++</p>
                            <p className="text-xs">{String(ptiMutation.error)}</p>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                    {/* Panel Izquierdo: Estado del Paciente y Controles */}
                    <div className="xl:col-span-3 space-y-6">
                        <PatientCard />
                        <TreatmentSelector 
                            activeTreatment={params.treatment} 
                            setTreatment={(t) => setParams({...params, treatment: t})} 
                        />
                    </div>

                    {/* Centro: Gráficos de Simulación y Matemáticas C++ */}
                    <div className="xl:col-span-6 space-y-6">
                        <div className="rounded-3xl p-6 min-h-[400px]" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
                            <h3 className="text-lg font-bold text-[#F9FAFB] mb-6 flex items-center gap-2">
                                <Heart className="text-[#FF2E63]" size={20} />
                                Dinámica de Plaquetas (30 días)
                            </h3>
                            <PlateletsGraph data={simulationData} loading={loading} />
                        </div>
                        <MetabolicRoutePanel steps={simulationData?.symbolic_steps} />
                    </div>

                    {/* Panel Derecho: Razonamiento Clínico IA (Groq) - Ocupa toda la altura permitiendo NO-SCROLL del contenedor padre */}
                    <div className="xl:col-span-3 h-[calc(100vh-6rem)] sticky top-6">
                        <AIAnalysisPanel 
                            narrative={simulationData?.ai_narrative}
                            interpretation={simulationData?.interpretation}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
