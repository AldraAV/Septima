import React, { createContext, useContext, useState, useCallback } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router';
import {
  LayoutDashboard, Heart, Activity, Zap, Cpu,
  Shield, RefreshCw, BookOpen, Settings, Bell,
  ChevronRight, ChevronDown, GraduationCap,
  ArrowRight, Microscope, User, LogOut,
} from 'lucide-react';
import imgUserAvatar from 'figma:asset/6bb5781d0d27465a5bf991f24eabc42fdb5e20d6.png';

// ─── Safe Mode Context ────────────────────────────────────────────────────────
interface SafeModeCtx { safeMode: boolean; setSafeMode: (v: boolean) => void }
export const SafeModeContext = createContext<SafeModeCtx>({ safeMode: false, setSafeMode: () => {} });
export function useSafeMode() { return useContext(SafeModeContext); }

// ─── Tour Context ─────────────────────────────────────────────────────────────
const TOUR_STEPS = [
  { id: 0, icon: '🫀', title: 'Corazón 3D Interactivo', description: 'Ve al Módulo Cardiovascular → Anatomía 3D. Haz hover sobre las etiquetas para ver estructuras. Arrastra para rotar el modelo y usa los botones de capa.' },
  { id: 1, icon: '📊', title: 'Ajusta Parámetros', description: 'En la pestaña Fisiología, mueve los sliders de Frecuencia Cardíaca, Resistencia y Compliancia. La gráfica de presión aórtica se actualiza en tiempo real.' },
  { id: 2, icon: '📡', title: 'Monitor ECG en Vivo', description: 'En Monitor ECG observa el trazado eléctrico cardíaco. Cambia la frecuencia en Fisiología y el ECG responde instantáneamente.' },
  { id: 3, icon: '🛡️', title: 'Modo Laboratorio Seguro', description: 'Activa el Modo Lab Seguro en la barra lateral. El borde verde brillante indica que puedes tocar cualquier parámetro sin consecuencias permanentes.' },
  { id: 4, icon: '🎉', title: '¡Recorrido Completado!', description: '¡Conoces todas las funciones principales de Séptima! Explora libremente, experimenta con los parámetros y descubre cómo interactúan los sistemas cardíacos.' },
];
interface TourCtx {
  tourActive: boolean; tourStep: number; totalSteps: number;
  currentStep: typeof TOUR_STEPS[0] | null;
  startTour: () => void; nextStep: () => void; prevStep: () => void; endTour: () => void;
}
export const TourContext = createContext<TourCtx>({
  tourActive: false, tourStep: 0, totalSteps: TOUR_STEPS.length, currentStep: null,
  startTour: () => {}, nextStep: () => {}, prevStep: () => {}, endTour: () => {},
});
export function useTour() { return useContext(TourContext); }

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ safeMode, setSafeMode, onStartTour }: {
  safeMode: boolean; setSafeMode: (v: boolean) => void; onStartTour: () => void;
}) {
  const [cvOpen, setCvOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const isCv = location.pathname === '/cardiovascular';
  const qs = new URLSearchParams(location.search);
  const activeTab = qs.get('tab') || 'anatomia';

  const linkCls = (active: boolean) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
      active
        ? 'bg-[rgba(0,234,211,0.12)] text-[#00EAD3] border border-[rgba(0,234,211,0.25)]'
        : 'text-[#94A3B8] hover:bg-white/5 hover:text-[#F9FAFB] border border-transparent'
    }`;

  const subLinkCls = (tab: string) => linkCls(isCv && activeTab === tab);

  return (
    <div className="w-[248px] flex-shrink-0 flex flex-col h-full" style={{
      background: 'rgba(8,16,32,0.85)',
      backdropFilter: 'blur(20px)',
      borderRight: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Logo */}
      <div className="px-4 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{
            background: 'linear-gradient(135deg, #FF2E63, #ff6b8a)',
            boxShadow: '0 0 24px rgba(255,46,99,0.45)',
          }}>
            <Heart size={18} className="text-white fill-white" />
          </div>
          <div>
            <div className="text-[#F9FAFB] font-bold text-base" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.3px' }}>Séptima</div>
            <div className="text-[#94A3B8] text-xs">Plataforma Biomédica</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <NavLink to="/" end className={({ isActive }) => linkCls(isActive)}>
          <LayoutDashboard size={15} /><span>Dashboard</span>
        </NavLink>

        {/* Cardiovascular group */}
        <div>
          <button
            onClick={() => { setCvOpen(v => !v); navigate('/cardiovascular?tab=anatomia'); }}
            className={`w-full ${linkCls(isCv)}`}
          >
            <Heart size={15} />
            <span className="flex-1 text-left">Cardiovascular</span>
            <ChevronDown size={13} className={`transition-transform duration-200 ${cvOpen ? 'rotate-180' : ''}`} />
          </button>
          {cvOpen && (
            <div className="ml-3 mt-1 space-y-0.5 pl-3" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              <div className={subLinkCls('anatomia')} onClick={() => navigate('/cardiovascular?tab=anatomia')}>
                <Microscope size={13} /><span>Anatomía 3D</span>
              </div>
              <div className={subLinkCls('fisiologia')} onClick={() => navigate('/cardiovascular?tab=fisiologia')}>
                <Activity size={13} /><span>Fisiología</span>
              </div>
              <div className={subLinkCls('ecg')} onClick={() => navigate('/cardiovascular?tab=ecg')}>
                <Zap size={13} /><span>Monitor ECG</span>
              </div>
            </div>
          )}
        </div>

        <NavLink to="/microcontrolador" className={({ isActive }) => linkCls(isActive)}>
          <Cpu size={15} /><span>Microcontrolador</span>
        </NavLink>
        <NavLink to="/progreso" className={({ isActive }) => linkCls(isActive)}>
          <GraduationCap size={15} /><span>Mi Progreso</span>
        </NavLink>

        <div className="pt-3 pb-1" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 8 }} />

        {/* Safe Mode */}
        <div className="rounded-xl p-3 transition-all duration-400" style={{
          background: safeMode ? 'rgba(0,234,211,0.06)' : 'rgba(255,255,255,0.02)',
          border: safeMode ? '1px solid rgba(0,234,211,0.25)' : '1px solid rgba(255,255,255,0.06)',
        }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Shield size={13} style={{ color: safeMode ? '#00EAD3' : '#94A3B8' }} />
              <span className="text-xs font-medium" style={{ color: safeMode ? '#00EAD3' : '#94A3B8' }}>
                Modo Lab Seguro
              </span>
            </div>
            <button
              onClick={() => setSafeMode(!safeMode)}
              className="relative w-9 h-5 rounded-full transition-colors duration-300 flex-shrink-0"
              style={{ background: safeMode ? '#00EAD3' : 'rgba(255,255,255,0.1)' }}
            >
              <div className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300"
                style={{ transform: safeMode ? 'translateX(16px)' : 'translateX(2px)' }} />
            </button>
          </div>
          {safeMode && (
            <button
              onClick={() => setSafeMode(false)}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:opacity-80"
              style={{ background: 'rgba(255,46,99,0.1)', border: '1px solid rgba(255,46,99,0.3)', color: '#FF2E63' }}
            >
              <RefreshCw size={11} />Restaurar Todo
            </button>
          )}
        </div>

        {/* Tour Button */}
        <button
          onClick={onStartTour}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-[#F9FAFB] hover:bg-white/5 border border-transparent transition-all"
        >
          <BookOpen size={15} />
          <span>Recorrido Guiado</span>
          <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full font-mono"
            style={{ background: 'rgba(0,234,211,0.1)', color: '#00EAD3' }}>TOUR</span>
        </button>
      </nav>

      {/* User */}
      <div className="px-3 pb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 12 }}>
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <img src={imgUserAvatar} alt="User" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="text-[#F9FAFB] text-sm font-medium truncate">José Martínez</div>
            <div className="text-[#94A3B8] text-xs truncate">Ing. Biomédica · Sem 6</div>
          </div>
          <Settings size={13} className="text-[#94A3B8] flex-shrink-0 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
}

// ─── Tour Floating Card ───────────────────────────────────────────────────────
function TourCard() {
  const { tourActive, tourStep, totalSteps, currentStep, nextStep, prevStep, endTour } = useTour();
  if (!tourActive || !currentStep) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 w-[360px] rounded-2xl p-5 shadow-2xl animate-fadeIn" style={{
      background: 'rgba(8, 18, 38, 0.96)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(0,234,211,0.3)',
      boxShadow: '0 0 60px rgba(0,234,211,0.18), 0 24px 64px rgba(0,0,0,0.6)',
    }}>
      <div className="flex items-center gap-1.5 mb-4">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="h-1 rounded-full transition-all duration-300"
            style={{
              width: i === tourStep ? 28 : 8,
              background: i <= tourStep ? '#00EAD3' : 'rgba(255,255,255,0.12)',
            }} />
        ))}
        <span className="ml-auto text-[#94A3B8] text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          {tourStep + 1}/{totalSteps}
        </span>
      </div>
      <div className="text-2xl mb-2">{currentStep.icon}</div>
      <h3 className="text-[#F9FAFB] font-semibold text-[15px] mb-1.5">{currentStep.title}</h3>
      <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{currentStep.description}</p>
      <div className="flex items-center justify-between">
        <button onClick={endTour} className="text-[#94A3B8] text-xs hover:text-[#F9FAFB] transition-colors">Salir</button>
        <div className="flex gap-2">
          {tourStep > 0 && (
            <button onClick={prevStep} className="px-3 py-1.5 rounded-lg text-xs text-[#94A3B8] hover:text-white border border-white/10 hover:border-white/20 transition-all">
              Anterior
            </button>
          )}
          <button onClick={nextStep}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all hover:opacity-90"
            style={{ background: '#00EAD3', color: '#060d1a' }}>
            {tourStep === totalSteps - 1 ? '¡Finalizar!' : 'Siguiente'}
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Layout Root ─────────────────────────────────────────────────────────────
export function Layout() {
  const [safeMode, setSafeMode] = useState(false);
  const [tourActive, setTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  const startTour = useCallback(() => { setTourStep(0); setTourActive(true); }, []);
  const nextStep = useCallback(() => {
    if (tourStep < TOUR_STEPS.length - 1) setTourStep(s => s + 1);
    else setTourActive(false);
  }, [tourStep]);
  const prevStep = useCallback(() => { if (tourStep > 0) setTourStep(s => s - 1); }, [tourStep]);
  const endTour = useCallback(() => { setTourActive(false); setTourStep(0); }, []);
  const currentStep = tourActive ? TOUR_STEPS[tourStep] : null;

  return (
    <SafeModeContext.Provider value={{ safeMode, setSafeMode }}>
      <TourContext.Provider value={{ tourActive, tourStep, totalSteps: TOUR_STEPS.length, currentStep, startTour, nextStep, prevStep, endTour }}>
        <div className="flex h-screen overflow-hidden" style={{
          fontFamily: "'Inter', sans-serif",
          background: 'linear-gradient(135deg, #050c18 0%, #091525 50%, #050c18 100%)',
        }}>
          {/* Safe Mode Glow Border */}
          {safeMode && (
            <div className="fixed inset-0 pointer-events-none z-40" style={{
              border: '3px solid #00EAD3',
              boxShadow: 'inset 0 0 50px rgba(0,234,211,0.06), 0 0 50px rgba(0,234,211,0.2)',
            }} />
          )}

          <TourCard />
          <Sidebar safeMode={safeMode} setSafeMode={setSafeMode} onStartTour={startTour} />

          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Header Bar */}
            <header className="h-12 flex items-center justify-between px-6 flex-shrink-0" style={{
              background: 'rgba(6, 12, 24, 0.7)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <span>Módulo Cardiovascular</span>
                <ChevronRight size={12} />
                <span style={{ color: '#00EAD3' }}>Simulación Activa</span>
              </div>
              <div className="flex items-center gap-4">
                {safeMode && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                    style={{ background: 'rgba(0,234,211,0.08)', border: '1px solid rgba(0,234,211,0.22)', color: '#00EAD3', fontFamily: 'JetBrains Mono, monospace' }}>
                    <Shield size={10} />MODO SEGURO
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00EAD3' }} />
                  <span className="text-[#94A3B8] text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>EN VIVO</span>
                </div>
                <button className="p-1.5 text-[#94A3B8] hover:text-[#F9FAFB] transition-colors"><Bell size={14} /></button>
                <button className="p-1.5 text-[#94A3B8] hover:text-[#F9FAFB] transition-colors"><Settings size={14} /></button>
              </div>
            </header>
            <main className="flex-1 overflow-y-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </TourContext.Provider>
    </SafeModeContext.Provider>
  );
}