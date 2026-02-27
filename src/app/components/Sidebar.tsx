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
        <div className="relative group shrink-0">
          <div className="absolute inset-0 bg-[#00EAD3]/20 rounded-xl blur-md group-hover:bg-[#00EAD3]/40 transition-colors"></div>
          <img 
            src="/assets/septima-logo.png" 
            alt="Séptima Logo" 
            className="w-10 h-10 object-contain relative z-10"
          />
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
            Soporte Académico
          </p>

          <button
            onClick={onStartTour}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-[#00EAD3] hover:bg-white/5 transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <BookOpen size={16} />
            <span>Documentación Engine</span>
          </button>
        </div>
      </nav>

      {/* Footer minimalista */}
      <div className="p-4 border-t border-white/8 space-y-2">
        <label className="text-xs text-[#94A3B8] flex items-center gap-2">
          <Activity size={12} className="text-[#00EAD3]"/>
          Engine C++ Activo
        </label>
      </div>
    </aside>
  );
}
