import React, { useState, useEffect, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { simulatePTI } from '../../services/binaryApiService';
import { useBioEngineSocket, type WSStatus } from '../../hooks/useBioEngineSocket';
import { 
  Activity, Heart, Thermometer, User, 
  ChevronRight, Play, RefreshCw, BookOpen, 
  Stethoscope, Info, AlertCircle, Radio, Wifi, WifiOff, 
  Pause, Square, Zap, Skull, AlertTriangle
} from 'lucide-react';
import PlateletsGraph from './PlateletsGraph';
import PatientCard from './PatientCard';
import TreatmentSelector from './TreatmentSelector';
import { AIAnalysisPanel, MetabolicRoutePanel } from './MedicalReasoningPanel';
import MathExplainerPanel from './MathExplainerPanel';
import ClinicalCaseSelector from './ClinicalCaseSelector';

// ─── Status Badge ──────────────────────────────────────────────────────────────

const StatusBadge: React.FC<{ status: WSStatus; fps: number }> = ({ status, fps }) => {
  const config: Record<WSStatus, { color: string; label: string; icon: React.ReactNode }> = {
    idle:       { color: '#94A3B8', label: 'Inactivo',     icon: <WifiOff size={12} /> },
    connecting: { color: '#FBBF24', label: 'Conectando…',  icon: <RefreshCw size={12} className="animate-spin" /> },
    streaming:  { color: '#00EAD3', label: `EN VIVO`,      icon: <Radio size={12} className="animate-pulse" /> },
    paused:     { color: '#FBBF24', label: 'Pausado',      icon: <Pause size={12} /> },
    dead:       { color: '#FF2E63', label: 'FALLECIDO',    icon: <AlertCircle size={12} /> },
    error:      { color: '#FF2E63', label: 'Error',        icon: <AlertCircle size={12} /> },
    closed:     { color: '#94A3B8', label: 'Desconectado', icon: <WifiOff size={12} /> },
  };
  const c = config[status];
  return (
    <div className="flex items-center gap-2 text-xs font-mono" style={{ color: c.color }}>
      {c.icon}
      <span className="font-bold uppercase tracking-wider">{c.label}</span>
      {status === 'streaming' && (
        <span className="ml-1 px-1.5 py-0.5 rounded bg-white/5 text-[10px]">
          {fps} FPS
        </span>
      )}
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

export const PTISimulator: React.FC = () => {
    const [params, setParams] = useState({
        production_rate: 50000,
        destruction_rate: 0.1,
        antibody_production: 0.05,
        treatment: 0,
        treatment_efficacy: 0.8,
        mode: 'student',
        dose_mg: 60,
        ivig_doses: 2
    });

    const [isRealtimeMode, setIsRealtimeMode] = useState(false);

    // ─── WebSocket Mode (Real-Time 60 FPS) ───────────────────────────────────
    const [wsState, wsActions] = useBioEngineSocket();

    // ─── Static Mode (React Query fallback) ──────────────────────────────────
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
        if (!isRealtimeMode) {
            ptiMutation.mutate(params);
        }
    }, []);

    // ─── Handlers ────────────────────────────────────────────────────────────

    const handleRunSimulation = useCallback(() => {
        if (isRealtimeMode) {
            wsActions.connect({
                y0: [15000.0, 1.0],
                params: {
                    production_rate: params.production_rate,
                    destruction_rate: params.destruction_rate,
                    antibody_production: params.antibody_production,
                    treatment: params.treatment,
                    treatment_efficacy: params.treatment_efficacy,
                    dose_mg: params.dose_mg,
                    ivig_doses: params.ivig_doses,
                },
                dt: 0.1,
            });
        } else {
            ptiMutation.mutate(params);
        }
    }, [isRealtimeMode, params, wsActions, ptiMutation]);

    const handleStop = useCallback(() => {
        wsActions.disconnect();
    }, [wsActions]);

    // Hot-inject params into running WebSocket
    useEffect(() => {
        if (isRealtimeMode && wsState.status === 'streaming') {
            wsActions.updateParams({
                treatment: params.treatment,
                dose_mg: params.dose_mg,
                ivig_doses: params.ivig_doses,
            });
        }
    }, [params.treatment, params.dose_mg, params.ivig_doses]);

    // ─── Derived State ───────────────────────────────────────────────────────

    const loading = isRealtimeMode 
        ? wsState.status === 'connecting' 
        : ptiMutation.isPending;

    const isStreaming = wsState.status === 'streaming';

    // Build simulation data from WebSocket frames for PlateletsGraph compatibility
    const simulationData = isRealtimeMode
        ? wsState.frames.length > 0
            ? {
                t: wsState.frames.map(f => f.t),
                y: wsState.frames.map(f => [f.y[0], f.y[1]]),
                metadata: {
                    is_dead: wsState.latestFrame?.is_dead ?? false,
                    has_cushing: params.treatment === 1 && params.dose_mg > 60,
                    has_thrombocytosis: (wsState.latestFrame?.y[0] ?? 0) > 600000,
                    engine: 'cpp_websocket'
                },
                interpretation: wsState.latestFrame?.is_dead 
                    ? 'CRITICO: Paciente colapsado.' 
                    : `Plaquetas actuales: ${Math.round(wsState.latestFrame?.y[0] ?? 0).toLocaleString()}/μL`,
                symbolic_steps: [],
                ai_narrative: null,
              }
            : null
        : ptiMutation.data;

    const hasError = isRealtimeMode ? wsState.status === 'error' : ptiMutation.isError;
    const errorMsg = isRealtimeMode ? wsState.error : String(ptiMutation.error);

    return (
        <div className="flex-1 h-full overflow-y-auto p-4 md:p-8 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto space-y-6">
                
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex items-center gap-2 text-[#00EAD3]">
                                <Activity size={20} className="animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest">Bio-Simulation</span>
                            </div>
                            <StatusBadge status={isRealtimeMode ? wsState.status : 'idle'} fps={wsState.fps} />
                        </div>
                        <h1 className="text-3xl font-bold text-[#F9FAFB]">Séptima: Púrpuras Trombocitopénicas</h1>
                        <p className="text-[#94A3B8]">Caso José (12 años) - Simulación Dinámica</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        {/* Mode Toggle */}
                        <button
                            onClick={() => {
                                const next = !isRealtimeMode;
                                setIsRealtimeMode(next);
                                if (!next) wsActions.disconnect();
                            }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all"
                            style={{
                                background: isRealtimeMode ? 'rgba(0, 234, 211, 0.15)' : 'rgba(255,255,255,0.05)',
                                border: `1px solid ${isRealtimeMode ? 'rgba(0, 234, 211, 0.4)' : 'rgba(255,255,255,0.1)'}`,
                                color: isRealtimeMode ? '#00EAD3' : '#94A3B8'
                            }}
                        >
                            {isRealtimeMode ? <Zap size={16} /> : <Wifi size={16} />}
                            {isRealtimeMode ? 'Tiempo Real' : 'Estático'}
                        </button>

                        {/* Action Button */}
                        {isRealtimeMode && isStreaming ? (
                            <button 
                                onClick={handleStop}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:opacity-90"
                                style={{ background: '#FF2E63', color: '#fff', boxShadow: '0 4px 20px rgba(255, 46, 99, 0.3)' }}
                            >
                                <Square size={20} />
                                Detener
                            </button>
                        ) : (
                            <button 
                                onClick={handleRunSimulation}
                                disabled={loading}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg disabled:opacity-50 hover:opacity-90"
                                style={{ background: '#00EAD3', color: '#060d1a', boxShadow: '0 4px 20px rgba(0, 234, 211, 0.3)' }}
                            >
                                {loading ? <RefreshCw className="animate-spin" size={20} /> : <Play size={20} />}
                                {isRealtimeMode ? 'Iniciar Streaming' : 'Simular Evolución'}
                            </button>
                        )}
                    </div>
                </header>

                {/* Real-time Telemetry Bar */}
                {isRealtimeMode && wsState.latestFrame && (
                    <div 
                        className="flex items-center justify-between px-6 py-3 rounded-2xl text-sm font-mono"
                        style={{ 
                            background: 'rgba(0, 234, 211, 0.05)', 
                            border: '1px solid rgba(0, 234, 211, 0.15)' 
                        }}
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-[#94A3B8]">t = <span className="text-[#F9FAFB] font-bold">{wsState.latestFrame.t.toFixed(1)}d</span></span>
                            <span className="text-[#94A3B8]">
                                PLT = <span className={`font-bold ${wsState.latestFrame.y[0] < 30000 ? 'text-[#FF2E63]' : wsState.latestFrame.y[0] < 100000 ? 'text-[#FBBF24]' : 'text-[#00EAD3]'}`}>
                                    {Math.round(wsState.latestFrame.y[0]).toLocaleString()}/μL
                                </span>
                            </span>
                            <span className="text-[#94A3B8]">Ab = <span className="text-[#F9FAFB]">{wsState.latestFrame.y[1].toFixed(3)}</span></span>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Cushing alert */}
                            {(wsState.latestFrame as any)?.has_cushing && (
                                <span className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-[#FBBF24]/10 text-[#FBBF24] font-bold">
                                    <AlertTriangle size={10} /> Síndrome de Cushing
                                </span>
                            )}
                            {/* Death cause */}
                            {(wsState.latestFrame as any)?.death_cause && (
                                <span className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-[#FF2E63]/15 text-[#FF2E63] font-bold animate-pulse">
                                    <Skull size={10} /> {(wsState.latestFrame as any).death_cause}
                                </span>
                            )}
                            {/* Prednisone days */}
                            {(wsState.latestFrame as any)?.prednisone_days > 0 && (
                                <span className="text-[10px] text-[#94A3B8] font-mono">
                                    Pred: {(wsState.latestFrame as any).prednisone_days}d
                                </span>
                            )}
                            <span className="text-[#94A3B8]">{wsState.frames.length} frames</span>
                        </div>
                    </div>
                )}

                {hasError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3">
                        <AlertCircle size={20} />
                        <div>
                            <p className="font-bold text-sm">Error de Conexión con Motor C++</p>
                            <p className="text-xs">{errorMsg}</p>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                    {/* Panel Izquierdo: Estado del Paciente y Controles */}
                    <div className="xl:col-span-3 space-y-6">
                        <PatientCard 
                            isDead={simulationData?.metadata?.is_dead || false}
                            hasCushing={simulationData?.metadata?.has_cushing || false}
                            hasThrombocytosis={simulationData?.metadata?.has_thrombocytosis || false}
                        />
                        <TreatmentSelector 
                            activeTreatment={params.treatment} 
                            setTreatment={(t) => setParams({...params, treatment: t})} 
                            doseMg={params.dose_mg}
                            setDoseMg={(d) => setParams({...params, dose_mg: d})}
                            ivigDoses={params.ivig_doses}
                            setIvigDoses={(d) => setParams({...params, ivig_doses: d})}
                        />
                        <ClinicalCaseSelector onLoadCase={({ y0, params: caseParams, patientName }) => {
                            setParams(p => ({ ...p, ...caseParams }));
                        }} />
                    </div>

                    {/* Centro: Gráficos de Simulación y Matemáticas C++ */}
                    <div className="xl:col-span-6 space-y-6">
                        <div className="rounded-3xl p-6 min-h-[400px]" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
                            <h3 className="text-lg font-bold text-[#F9FAFB] mb-6 flex items-center gap-2">
                                <Heart className="text-[#FF2E63]" size={20} />
                                Dinámica de Plaquetas {isRealtimeMode ? '(Streaming C++)' : '(30 días)'}
                            </h3>
                            <PlateletsGraph data={simulationData} loading={loading} />
                        </div>
                        {!isRealtimeMode && <MetabolicRoutePanel steps={simulationData?.symbolic_steps} />}
                        <MathExplainerPanel treatment={params.treatment} doseMg={params.dose_mg} />
                    </div>

                    {/* Panel Derecho: Razonamiento Clínico IA */}
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
