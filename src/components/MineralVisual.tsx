import React, { useState, useEffect } from 'react';

interface MineralVisualProps {
  id: string;
  name: string;
  symbol: string;
  themeColor: {
    primary: string;
    accent: string;
    glow: string;
  };
  className?: string;
  compact?: boolean;
  viewMode?: 'diagram' | 'specimen';
  photoUrl?: string;
}

export const MineralVisual: React.FC<MineralVisualProps> = ({
  id,
  name,
  symbol,
  themeColor,
  className = '',
  compact = false,
  viewMode = 'diagram',
  photoUrl
}) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [photoUrl]);
  // 1. SPECIMEN MODE: Realistic raw geological rock specimen with natural mineral textures
  const renderSpecimen = () => {
    switch (id) {
      case 'iron':
        // High-grade Hematite Rock Specimen (dense metallic specular steel-gray with natural hematite rust veins)
        return (
          <g>
            <defs>
              <radialGradient id="hematiteCore" cx="45%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="25%" stopColor="#475569" />
                <stop offset="55%" stopColor="#1E293B" />
                <stop offset="80%" stopColor="#450A0A" />
                <stop offset="100%" stopColor="#0F172A" />
              </radialGradient>
              <linearGradient id="ironLuster" x1="15%" y1="15%" x2="85%" y2="85%">
                <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#CBD5E1" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#DC2626" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Rough Natural Rock Silhouette */}
            <path
              d="M50 110 C45 75, 75 45, 110 38 C145 32, 185 50, 195 85 C205 120, 190 165, 165 190 C140 215, 95 210, 68 190 C45 170, 55 140, 50 110 Z"
              fill="url(#hematiteCore)"
              stroke="#DC2626"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
            {/* Specular Hematite Metallic Plates */}
            <path
              d="M75 70 L125 55 L160 85 L135 120 L85 105 Z"
              fill="url(#ironLuster)"
              stroke="#CBD5E1"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
            <path
              d="M135 120 L180 100 L185 155 L145 175 L115 150 Z"
              fill="#1E293B"
              stroke="#F87171"
              strokeWidth="0.8"
              strokeOpacity="0.3"
            />
            <path
              d="M68 120 L115 150 L95 195 L60 170 Z"
              fill="#334155"
              fillOpacity="0.9"
            />
            {/* Natural Reddish-brown Hematite Veins */}
            <path d="M60 85 Q 110 95, 150 75 T 190 115" stroke="#EF4444" strokeWidth="2.5" fill="none" strokeOpacity="0.75" />
            <path d="M85 140 Q 130 135, 175 165" stroke="#B91C1C" strokeWidth="2" fill="none" strokeOpacity="0.6" />
            <circle cx="105" cy="72" r="3.5" fill="#FFFFFF" opacity="0.7" />
          </g>
        );

      case 'manganese':
        // Pyrolusite / Cryptomelane (Charcoal black metallic botryoidal cluster with dendritic patterns)
        return (
          <g>
            <defs>
              <radialGradient id="mnRock" cx="50%" cy="35%" r="70%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="35%" stopColor="#334155" />
                <stop offset="70%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>
            </defs>
            {/* Dense Heavy Ore Mass */}
            <path
              d="M55 100 C40 65, 80 40, 120 35 C160 30, 195 60, 195 105 C195 150, 170 195, 125 205 C80 215, 50 175, 45 140 C42 120, 58 115, 55 100 Z"
              fill="url(#mnRock)"
              stroke="#94A3B8"
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
            {/* Botryoidal Ore Nodules */}
            <ellipse cx="100" cy="80" rx="35" ry="25" fill="#475569" fillOpacity="0.7" stroke="#CBD5E1" strokeWidth="0.8" strokeOpacity="0.4" />
            <ellipse cx="145" cy="95" rx="30" ry="28" fill="#1E293B" stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.5" />
            <ellipse cx="120" cy="145" rx="42" ry="32" fill="#0F172A" stroke="#64748B" strokeWidth="0.8" strokeOpacity="0.6" />
            <ellipse cx="75" cy="140" rx="25" ry="22" fill="#334155" />
            {/* Specular Silvery Highlights */}
            <path d="M85 75 Q 110 70, 125 85" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.65" />
            <path d="M130 135 Q 155 130, 165 148" stroke="#E2E8F0" strokeWidth="1.2" fill="none" opacity="0.5" />
          </g>
        );

      case 'silica':
        // High-Purity Translucent White Quartz Sand & Crystal Specimen
        return (
          <g>
            <defs>
              <linearGradient id="quartzRock" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="30%" stopColor="#E0F2FE" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#BAE6FD" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M70 70 L120 30 L170 55 L185 130 L155 195 L95 205 L55 145 Z"
              fill="url(#quartzRock)"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
            {/* Inner Prismatic Refraction Lines */}
            <polygon points="120,30 170,55 135,115 85,85" fill="#FFFFFF" fillOpacity="0.85" />
            <polygon points="170,55 185,130 145,155 135,115" fill="#E0F2FE" fillOpacity="0.7" />
            <polygon points="85,85 135,115 110,185 55,145" fill="#BAE6FD" fillOpacity="0.5" />
            <polygon points="135,115 145,155 155,195 110,185" fill="#38BDF8" fillOpacity="0.3" />
            {/* Luminous Shimmer Highlights */}
            <line x1="120" y1="30" x2="110" y2="185" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <circle cx="120" cy="55" r="4" fill="#FFFFFF" />
            <circle cx="150" cy="115" r="3" fill="#FFFFFF" opacity="0.8" />
          </g>
        );

      case 'lithium':
        // Spodumene Pegmatite Rock with Pale Violet/Greenish Luster
        return (
          <g>
            <defs>
              <linearGradient id="spodumeneRock" x1="20%" y1="10%" x2="80%" y2="90%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#DBEAFE" />
                <stop offset="65%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
            </defs>
            <path
              d="M60 85 L120 40 L180 65 L190 150 L140 205 L70 185 L50 130 Z"
              fill="url(#spodumeneRock)"
              stroke="#60A5FA"
              strokeWidth="1.5"
            />
            {/* Prismatic Blade Striations */}
            <polygon points="120,40 165,55 135,135 90,110" fill="#EFF6FF" fillOpacity="0.9" />
            <polygon points="165,55 190,150 150,175 135,135" fill="#60A5FA" fillOpacity="0.7" />
            <polygon points="90,110 135,135 115,195 70,185" fill="#2563EB" fillOpacity="0.6" />
            <line x1="120" y1="40" x2="140" y2="205" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.75" />
            <line x1="105" y1="75" x2="125" y2="170" stroke="#DBEAFE" strokeWidth="1" strokeOpacity="0.8" />
          </g>
        );

      case 'copper':
        // Chalcopyrite & Malachite (Vibrant emerald malachite bands & metallic golden chalcopyrite rock)
        return (
          <g>
            <defs>
              <radialGradient id="copperOre" cx="45%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="30%" stopColor="#059669" />
                <stop offset="60%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#064E3B" />
              </radialGradient>
            </defs>
            <path
              d="M55 105 C45 65, 85 45, 125 35 C165 30, 195 65, 190 115 C185 165, 155 205, 115 205 C75 205, 50 170, 48 135 Z"
              fill="url(#copperOre)"
              stroke="#10B981"
              strokeWidth="1.5"
            />
            {/* Native Metallic Golden Vein (Chalcopyrite CuFeS2) */}
            <path
              d="M70 65 Q 115 105, 165 95 T 180 155"
              stroke="#F59E0B"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeOpacity="0.95"
            />
            {/* Emerald Malachite Banding */}
            <path d="M60 125 Q 110 140, 160 135" stroke="#10B981" strokeWidth="4" fill="none" strokeOpacity="0.85" />
            <path d="M80 170 Q 120 175, 150 180" stroke="#6EE7B7" strokeWidth="2.5" fill="none" strokeOpacity="0.7" />
            <circle cx="115" cy="100" r="4" fill="#FEF3C7" />
          </g>
        );

      case 'tungsten':
        // Scheelite / Wolframite (Dense dark heavy ore rock with bright amber crystal pockets)
        return (
          <g>
            <defs>
              <radialGradient id="wOre" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="35%" stopColor="#D97706" />
                <stop offset="70%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#1E1B4B" />
              </radialGradient>
            </defs>
            <path
              d="M50 100 L95 40 L165 45 L195 110 L170 190 L90 205 L55 155 Z"
              fill="url(#wOre)"
              stroke="#F59E0B"
              strokeWidth="1.5"
            />
            <polygon points="95,40 165,45 140,115 80,95" fill="#FEF3C7" fillOpacity="0.9" />
            <polygon points="165,45 195,110 155,160 140,115" fill="#B45309" fillOpacity="0.8" />
            <polygon points="80,95 140,115 125,185 55,155" fill="#78350F" fillOpacity="0.9" />
            <line x1="95" y1="40" x2="125" y2="185" stroke="#FDE68A" strokeWidth="1.5" />
            <circle cx="130" cy="90" r="4" fill="#FFFFFF" opacity="0.85" />
          </g>
        );

      case 'cassiterite':
      default:
        // Cassiterite Tin Ore (Deep sub-adamantine lustrous tetragonal twin crystal mass)
        return (
          <g>
            <defs>
              <radialGradient id="snOre" cx="45%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#DDD6FE" />
                <stop offset="30%" stopColor="#8B5CF6" />
                <stop offset="65%" stopColor="#4C1D95" />
                <stop offset="100%" stopColor="#0F172A" />
              </radialGradient>
            </defs>
            <path
              d="M60 90 L115 35 L175 60 L190 140 L155 200 L85 205 L50 145 Z"
              fill="url(#snOre)"
              stroke="#A78BFA"
              strokeWidth="1.5"
            />
            <polygon points="115,35 175,60 140,120 80,90" fill="#EDE9FE" fillOpacity="0.9" />
            <polygon points="175,60 190,140 145,170 140,120" fill="#7C3AED" fillOpacity="0.75" />
            <polygon points="80,90 140,120 120,185 50,145" fill="#5B21B6" fillOpacity="0.85" />
            {/* Twin Knee Cleavage Reflection */}
            <line x1="60" y1="115" x2="185" y2="115" stroke="#FFFFFF" strokeWidth="1.8" strokeOpacity="0.8" />
            <circle cx="130" cy="75" r="3.5" fill="#FFFFFF" />
          </g>
        );
    }
  };

  // 2. DIAGRAM MODE: Sleek geometrical crystal structure blueprint (Default)
  const renderDiagram = () => {
    switch (id) {
      case 'iron':
        return (
          <g>
            <defs>
              <linearGradient id="dIron" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>
            </defs>
            <polygon points="120,40 190,85 160,180 80,165 50,90" fill="url(#dIron)" stroke="#DC2626" strokeWidth="1.2" strokeOpacity="0.6" />
            <polygon points="120,40 160,95 80,95" fill="#94A3B8" fillOpacity="0.4" stroke="#CBD5E1" strokeWidth="0.8" />
            <polygon points="160,95 190,85 160,180 120,135" fill="#334155" fillOpacity="0.8" />
            <polygon points="80,95 120,135 80,165 50,90" fill="#1E293B" />
            <polygon points="120,135 160,180 120,210 80,165" fill="#7F1D1D" fillOpacity="0.8" />
            <line x1="120" y1="40" x2="120" y2="210" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="90" x2="190" y2="85" stroke="#FCA5A5" strokeWidth="0.8" strokeOpacity="0.4" />
          </g>
        );

      case 'manganese':
        return (
          <g>
            <defs>
              <linearGradient id="dMn" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>
            <polygon points="120,35 180,70 200,140 160,205 90,200 45,135 60,65" fill="url(#dMn)" stroke="#94A3B8" strokeWidth="1.2" strokeOpacity="0.6" />
            <polygon points="120,35 145,85 100,105 60,65" fill="#475569" fillOpacity="0.7" />
            <polygon points="145,85 180,70 200,140 150,140" fill="#1E293B" />
            <polygon points="100,105 150,140 125,200 90,200 45,135" fill="#0F172A" />
            <polygon points="150,140 200,140 160,205 125,200" fill="#334155" fillOpacity="0.9" />
            <line x1="120" y1="35" x2="150" y2="140" stroke="#CBD5E1" strokeWidth="0.8" strokeOpacity="0.6" />
          </g>
        );

      case 'silica':
        return (
          <g>
            <polygon points="120,25 165,70 165,175 120,215 75,175 75,70" fill="#0369A1" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="1.5" />
            <polygon points="120,25 165,70 120,95 75,70" fill="#E0F2FE" fillOpacity="0.85" />
            <polygon points="120,95 165,70 165,175 120,185" fill="#7DD3FC" fillOpacity="0.5" />
            <polygon points="120,95 75,70 75,175 120,185" fill="#38BDF8" fillOpacity="0.35" />
            <polygon points="120,185 165,175 120,215 75,175" fill="#0284C7" fillOpacity="0.6" />
            <line x1="120" y1="25" x2="120" y2="215" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
          </g>
        );

      case 'lithium':
        return (
          <g>
            <polygon points="120,30 185,60 170,190 120,215 65,175 75,70" fill="#1E3A8A" fillOpacity="0.3" stroke="#60A5FA" strokeWidth="1.5" />
            <polygon points="120,30 185,60 145,100 75,70" fill="#DBEAFE" fillOpacity="0.9" />
            <polygon points="145,100 185,60 170,190 125,160" fill="#3B82F6" fillOpacity="0.7" />
            <polygon points="75,70 145,100 125,160 65,175" fill="#1D4ED8" fillOpacity="0.6" />
            <polygon points="125,160 170,190 120,215 65,175" fill="#172554" fillOpacity="0.8" />
            <line x1="120" y1="30" x2="125" y2="160" stroke="#EFF6FF" strokeWidth="1.2" />
          </g>
        );

      case 'copper':
        return (
          <g>
            <polygon points="120,35 185,80 160,195 85,205 50,125 75,55" fill="#064E3B" fillOpacity="0.4" stroke="#10B981" strokeWidth="1.5" />
            <polygon points="120,35 185,80 135,115 75,55" fill="#6EE7B7" fillOpacity="0.85" />
            <polygon points="135,115 185,80 160,195 115,150" fill="#D97706" fillOpacity="0.75" />
            <polygon points="75,55 135,115 115,150 50,125" fill="#047857" fillOpacity="0.9" />
            <polygon points="115,150 160,195 85,205 50,125" fill="#065F46" />
            <path d="M 65 65 Q 120 110 170 180" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
          </g>
        );

      case 'tungsten':
        return (
          <g>
            <polygon points="120,30 180,65 195,155 150,210 85,205 45,145 65,70" fill="#78350F" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="1.5" />
            <polygon points="120,30 180,65 140,110 65,70" fill="#FEF3C7" fillOpacity="0.85" />
            <polygon points="140,110 180,65 195,155 145,160" fill="#B45309" fillOpacity="0.8" />
            <polygon points="65,70 140,110 145,160 45,145" fill="#92400E" fillOpacity="0.9" />
            <polygon points="145,160 195,155 150,210 85,205 45,145" fill="#451A03" />
            <line x1="120" y1="30" x2="145" y2="160" stroke="#FDE68A" strokeWidth="1.2" />
          </g>
        );

      case 'cassiterite':
      default:
        return (
          <g>
            <polygon points="120,30 175,70 175,175 120,215 65,175 65,70" fill="#4C1D95" fillOpacity="0.3" stroke="#A78BFA" strokeWidth="1.5" />
            <polygon points="120,30 175,70 120,105 65,70" fill="#EDE9FE" fillOpacity="0.9" />
            <polygon points="120,105 175,70 175,175 120,175" fill="#7C3AED" fillOpacity="0.75" />
            <polygon points="120,105 65,70 65,175 120,175" fill="#5B21B6" fillOpacity="0.85" />
            <polygon points="120,175 175,175 120,215 65,175" fill="#2E1065" />
            <line x1="65" y1="120" x2="175" y2="120" stroke="#C4B5FD" strokeWidth="1.5" />
          </g>
        );
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center transition-all ${className}`}
      style={{
        boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.05)`
      }}
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${themeColor.accent}33 0%, transparent 70%)`
        }}
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-mineral-pattern opacity-60 pointer-events-none" />

      {/* Visual Content: Real Photo vs Vector Diagram */}
      {viewMode === 'specimen' && photoUrl && !imageError ? (
        <div className={`relative z-10 w-full ${compact ? 'h-36 sm:h-40' : 'h-52 sm:h-60'} overflow-hidden rounded-lg group`}>
          <img
            src={photoUrl}
            alt={name}
            className="w-full h-full object-cover object-center filter contrast-105 saturate-110 transition-transform duration-700 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
        </div>
      ) : (
        <svg
          viewBox="0 0 240 240"
          className={`relative z-10 w-full ${compact ? 'h-36 sm:h-40' : 'h-52 sm:h-60'} drop-shadow-2xl transition-transform duration-500 ease-out hover:scale-105`}
          aria-hidden="true"
        >
          {viewMode === 'specimen' ? renderSpecimen() : renderDiagram()}
        </svg>
      )}

      {/* Overlay Chemical Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/85 border border-slate-700/80 backdrop-blur-md">
        <span className="font-mono text-xs font-bold text-amber-400 tracking-wider">
          {symbol}
        </span>
      </div>

      {/* Mode Tag */}
      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/90 border border-slate-800 text-[11px] font-semibold text-slate-300 backdrop-blur-xs">
        <span className={`w-1.5 h-1.5 rounded-full ${viewMode === 'specimen' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
        <span>{viewMode === 'specimen' ? 'Fotografia Real' : 'Esquema Técnico'}</span>
      </div>

      {/* Provenance Tag */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800/80 backdrop-blur-sm text-[10px] text-slate-400">
        <span>Origem Brasil</span>
      </div>
    </div>
  );
};
