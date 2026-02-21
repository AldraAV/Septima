import React, { useState } from 'react';
import {
  LayoutDashboard, Heart, Activity, Sliders, Layers, ChevronRight,
  FlaskConical, BookOpen, RotateCcw, User, Shield
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  activeTab: string;
  safeLabMode: boolean;
  onNavigate: (page: string, tab?: string) => void;
  onToggleSafeLab: () => void;
  onRestoreAll: () => void;
  onStartTour: () => void;
}

export function Sidebar({
  currentPage, activeTab, safeLabMode,
  onNavigate, onToggleSafeLab, onRestoreAll, onStartTour
}: SidebarProps) {
  const [cvExpanded, setCvExpanded] = useState(true);

  const navItem = (
    label: string,
    icon: React.ReactNode,
    page: string,
    tab?: string
  ) => {
    const isActive = tab ? currentPage === page && activeTab === tab : currentPage === page && !tab;
    return (
      <button
        onClick={() => onNavigate(page, tab)}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
          isActive
            ? 'bg-[#00EAD3]/15 text-[#00EAD3] border border-[#00EAD3]/30'
            : 'text-[#94A3B8] hover:text-[#F9FAFB] hover:bg-white/5'
        }`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <span className={`shrink-0 ${isActive ? 'text-[#00EAD3]' : ''}`}>{icon}</span>
        <span>{label}</span>
        {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00EAD3]" />}
      </button>
    );
  };

  return (
    <aside
      className="w-60 shrink-0 flex flex-col h-full border-r border-white/8"
      style={{ background: 'linear-gradient(180deg, #0A0F1E 0%, #060B16 100%)' }}
    >
      {/* Logo */}
      <div className="p-5 border-b border-white/8 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, #FF2E63, #c0194f)' }}
        >
          <Heart size={18} fill="white" className="text-white" />
        </div>
        <div>
          <span
            className="text-[#F9FAFB] text-base"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, letterSpacing: '-0.3px' }}
          >
            Séptima
          </span>
          <p
            className="text-[10px] text-[#94A3B8]"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Simulación Biomédica
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <p
          className="text-[10px] uppercase tracking-widest text-[#94A3B8]/60 px-3 py-2"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Principal
        </p>
        {navItem('Dashboard', <LayoutDashboard size={16} />, 'dashboard')}

        {/* Cardiovascular Module - expandable */}
        <div>
          <button
            onClick={() => { setCvExpanded(v => !v); onNavigate('cardiovascular', activeTab || 'anatomy'); }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
              currentPage === 'cardiovascular'
                ? 'text-[#F9FAFB]'
                : 'text-[#94A3B8] hover:text-[#F9FAFB] hover:bg-white/5'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Heart size={16} className={currentPage === 'cardiovascular' ? 'text-[#FF2E63]' : ''} />
            <span>Cardiovascular</span>
            <ChevronRight
              size={14}
              className={`ml-auto transition-transform ${cvExpanded ? 'rotate-90' : ''}`}
            />
          </button>

          {cvExpanded && (
            <div className="ml-4 mt-1 space-y-0.5 border-l border-white/8 pl-3">
              {navItem('Anatomía 3D', <Layers size={14} />, 'cardiovascular', 'anatomy')}
              {navItem('Fisiología', <Sliders size={14} />, 'cardiovascular', 'physiology')}
              {navItem('Monitor ECG', <Activity size={14} />, 'cardiovascular', 'ecg')}
            </div>
          )}
        </div>

        <div className="pt-2">
          <p
            className="text-[10px] uppercase tracking-widest text-[#94A3B8]/60 px-3 py-2"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Herramientas
          </p>

          <button
            onClick={onStartTour}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-[#F9FAFB] hover:bg-white/5 transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <BookOpen size={16} />
            <span>Recorrido Guiado</span>
          </button>
        </div>
      </nav>

      {/* Safe Lab Mode */}
      <div className="p-3 border-t border-white/8 space-y-2">
        {/* Safe Lab Toggle */}
        <div
          className={`rounded-xl p-3 transition-all duration-300 ${
            safeLabMode
              ? 'bg-[#00EAD3]/10 border border-[#00EAD3]/40'
              : 'bg-white/5 border border-white/10'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Shield
                size={14}
                className={safeLabMode ? 'text-[#00EAD3]' : 'text-[#94A3B8]'}
              />
              <span
                className={`text-xs ${safeLabMode ? 'text-[#00EAD3]' : 'text-[#94A3B8]'}`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Modo Lab Seguro
              </span>
            </div>
            <button
              onClick={onToggleSafeLab}
              className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
                safeLabMode ? 'bg-[#00EAD3]' : 'bg-white/20'
              }`}
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${
                  safeLabMode ? 'left-5' : 'left-0.5'
                }`}
              />
            </button>
          </div>
          {safeLabMode && (
            <p
              className="text-[10px] text-[#00EAD3]/80"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Experimenta libremente ✓
            </p>
          )}
        </div>

        {/* Restore all button */}
        <button
          onClick={onRestoreAll}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs text-[#FF2E63] border border-[#FF2E63]/30 hover:bg-[#FF2E63]/10 transition-all"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <RotateCcw size={12} />
          Restaurar Todo
        </button>

        {/* User */}
        <div className="flex items-center gap-2 px-2 pt-1">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0"
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #6366F1)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: 'white'
            }}
          >
            JM
          </div>
          <div className="min-w-0">
            <p
              className="text-xs text-[#F9FAFB] truncate"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              José M.
            </p>
            <p
              className="text-[10px] text-[#94A3B8] truncate"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Estudiante
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
