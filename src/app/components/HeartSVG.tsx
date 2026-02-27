/**
 * HeartSVG.tsx — Ilustración SVG anatómica del corazón humano
 * Reemplaza el import `figma:asset` (placeholder transparente) con un SVG
 * que mantiene la estética oscura de Séptima Biomédica.
 *
 * Estructuras visibles:
 *  - Músculo cardíaco (crimson)
 *  - Aorta ascendente (teal/cyan)
 *  - Tronco pulmonar (purple)
 *  - Vena cava superior (teal oscuro)
 *  - Ventrículos y aurículas (crimson oscuro)
 */

import React from 'react';

interface HeartSVGProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  activeLayers?: string[];
}

export function HeartSVG({ width = 380, height = 380, className, style, activeLayers = ['musculo', 'arterias', 'conduccion'] }: HeartSVGProps) {
  const showConduction = activeLayers.includes('conduccion');
  const showMuscle = activeLayers.includes('musculo');
  const showVessels = activeLayers.includes('arterias');
  
  return (
    <svg
      viewBox="0 0 400 420"
      width={width}
      height={height}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        #conduccion_electrica path, #conduccion_electrica polyline {
          stroke: #FFD700;
          stroke-width: 3.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 5px #FFD700) drop-shadow(0 0 12px rgba(255, 215, 0, 0.4));
        }

        #ramas_his, #fibras_purkinje_izq, #fibras_purkinje_der {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: flujoElectrico 0.8s linear infinite; 
          cursor: pointer;
          transition: filter 0.2s ease;
        }

        #nodo_sa, #nodo_av {
          cursor: pointer;
          transition: filter 0.2s ease, transform 0.2s ease;
          transform-origin: center;
          fill: #FFD700;
          stroke: none !important;
          filter: drop-shadow(0 0 8px #FFD700);
        }

        #nodo_sa:hover, #nodo_av:hover {
          filter: drop-shadow(0 0 15px #FFFF00);
          transform: scale(1.15) !important;
        }

        @keyframes flujoElectrico {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      <defs>
        {/* Gradientes del músculo cardíaco */}
        <radialGradient id="hg-muscle" cx="45%" cy="55%" r="55%">
          <stop offset="0%"  stopColor="#c0183d" />
          <stop offset="60%" stopColor="#8a0c25" />
          <stop offset="100%" stopColor="#4a0512" />
        </radialGradient>
        <radialGradient id="hg-vi" cx="40%" cy="60%" r="50%">
          <stop offset="0%"  stopColor="#de1a45" />
          <stop offset="100%" stopColor="#6b0819" />
        </radialGradient>
        <radialGradient id="hg-vd" cx="60%" cy="55%" r="50%">
          <stop offset="0%"  stopColor="#a81232" />
          <stop offset="100%" stopColor="#580410" />
        </radialGradient>
        {/* Gradiente aorta */}
        <linearGradient id="hg-aorta" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%"  stopColor="#00EAD3" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#00b8a6" stopOpacity="0.95" />
        </linearGradient>
        {/* Gradiente pulmonar */}
        <linearGradient id="hg-pulm" x1="0" y1="1" x2="0.5" y2="0">
          <stop offset="0%"  stopColor="#7c6ef8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#9b8fff" stopOpacity="0.95" />
        </linearGradient>
        {/* Vena cava */}
        <linearGradient id="hg-vcs" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#00EAD3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#006e65" stopOpacity="0.8" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="heart-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="vessel-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        {/* Sombra base */}
        <filter id="heart-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#FF2E63" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* ── Textura base compartida ── */}
      <ellipse cx="200" cy="390" rx="110" ry="18" fill="#FF2E63" opacity="0.12" filter="url(#heart-glow)" />

      {/* ── CUERPO MUSCULAR (Translúcido en modo Híbrido) ── */}
      <g style={{ 
        display: showMuscle ? 'block' : 'none', 
        opacity: 0.15, // Muy translúcido para que el PNG 3D reine
        transition: 'opacity 0.4s ease' 
      }}>
        {/* Forma general del corazón */}
        <path
          d="
            M 200 360
            C 160 330, 80 290, 58 240
            C 30 180, 38 105, 80 85
            C 110 68, 148 78, 170 100
            C 178 85, 188 75, 200 72
            C 212 75, 222 85, 230 100
            C 252 78, 290 68, 320 85
            C 362 105, 370 180, 342 240
            C 320 290, 240 330, 200 360 Z
          "
          fill="url(#hg-muscle)"
          filter="url(#heart-shadow)"
          stroke="rgba(255,46,99,0.5)"
          strokeWidth="2"
        />

        {/* Ventrículo Izquierdo (VI) */}
        <path d="M 192 320 C 170 310, 105 270, 90 220 C 72 165, 88 115, 118 100 C 140 90, 165 100, 180 120 C 188 135, 193 180, 192 240 Z" fill="url(#hg-vi)" opacity="0.75" />
        
        {/* Ventrículo Derecho (VD) */}
        <path d="M 208 310 C 230 300, 290 265, 308 215 C 328 160, 312 115, 282 100 C 260 90, 235 100, 220 120 C 212 135, 207 180, 208 240 Z" fill="url(#hg-vd)" opacity="0.65" />

        {/* Aurículas */}
        <ellipse cx="155" cy="95" rx="38" ry="28" fill="#9c1534" transform="rotate(-15,155,95)" />
        <ellipse cx="244" cy="95" rx="36" ry="26" fill="#801029" transform="rotate(15,244,95)" />

        {/* Arterias coronarias */}
        <path d="M 276 115 C 310 130, 330 165, 320 210" stroke="rgba(0,234,211,0.7)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 187 118 C 168 140, 152 170, 148 220 C 148 265, 158 295, 172 315" stroke="rgba(0,234,211,0.7)" strokeWidth="3" fill="none" strokeLinecap="round" />
        
        {/* Pericardio (contorno) */}
        <path d="M 200 368 C 155 336, 68 292, 45 237 C 16 172, 26 93, 72 70 C 104 52, 145 62, 168 88 C 178 74, 190 64, 200 62 C 210 64, 222 74, 232 88 C 255 62, 296 52, 328 70 C 374 93, 384 172, 355 237 C 332 292, 245 336, 200 368 Z" fill="none" stroke="rgba(255,46,99,0.3)" strokeWidth="2" strokeDasharray="8 5" />
      </g>

      {/* ── VASOS GRANDES (Translúcidos) ── */}
      <g style={{ 
        display: showVessels ? 'block' : 'none', 
        opacity: 0.3, // Muy translúcido 
        transition: 'opacity 0.4s ease' 
      }}>
        {/* Vena Cava Superior */}
        <rect x="260" y="20" width="22" height="68" rx="11" fill="url(#hg-vcs)" filter="url(#vessel-glow)" stroke="rgba(0,234,211,0.35)" strokeWidth="1.5" />
        
        {/* Tronco Pulmonar */}
        <path d="M 173 78 C 168 50, 155 28, 145 12" stroke="url(#hg-pulm)" strokeWidth="18" fill="none" strokeLinecap="round" filter="url(#vessel-glow)" />
        
        {/* Aorta Ascendente */}
        <path d="M 207 72 C 208 45, 210 25, 216 12" stroke="url(#hg-aorta)" strokeWidth="22" fill="none" strokeLinecap="round" filter="url(#vessel-glow)" />
        <path d="M 216 12 C 228 4, 255 4, 270 20" stroke="url(#hg-aorta)" strokeWidth="18" fill="none" strokeLinecap="round" />
      </g>

      {/* ── Textura / highlights de luz ── */}
      <ellipse cx="155" cy="175" rx="28" ry="55" fill="rgba(255,100,120,0.08)"
        transform="rotate(-20,155,175)" />
      <ellipse cx="152" cy="165" rx="16" ry="30" fill="rgba(255,130,150,0.1)"
        transform="rotate(-20,152,165)" />

      {/* ── SISTEMA DE CONDUCCIÓN ELÉCTRICA SÉMANTICA (Vectores Inline Interactivos) ── */}
      <g id="conduccion_electrica" style={{ 
        display: showConduction ? 'block' : 'none',
        opacity: showConduction ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}>
        {/* Nodo Sinusal (SA) - Aurícula Derecha Superior */}
        <circle id="nodo_sa" cx="240" cy="85" r="5" transform-origin="240 85" />
        
        {/* Vías Internodales (SA a AV) */}
        <path id="vias_internodales" d="M 240 85 Q 225 105 210 125" opacity="0.6" strokeDasharray="4 4"/>
        
        {/* Nodo Auriculoventricular (AV) - Tabique Interauricular bajo */}
        <circle id="nodo_av" cx="210" cy="130" r="6" transform-origin="210 130" />

        {/* Haz de His y Ramas Derecha/Izquierda (Descenso por el tabique) */}
        <path id="ramas_his" d="M 210 130 C 200 180, 195 240, 192 315" />

        {/* Fibras de Purkinje (Abrazando Ventrículo Izquierdo) */}
        <path id="fibras_purkinje_izq" d="M 192 315 C 160 300, 105 250, 95 210" /> 
        
        {/* Fibras de Purkinje (Abrazando Ventrículo Derecho) */}
        <path id="fibras_purkinje_der" d="M 192 315 C 220 300, 280 250, 290 210" />
      </g>
    </svg>
  );
}
