import React from 'react';

interface MRLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const MRLogo: React.FC<MRLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14'
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-xl',
    lg: 'text-2xl sm:text-3xl'
  };

  const subSizes = {
    sm: 'text-[8px] sm:text-[9px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-[11px] sm:text-xs'
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Precision Geometric Monogram Symbol with M, V, R */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mvrGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="mvrSilverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="mvrFacetGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Outer Hexagonal Geological Mineral Crystal Shield */}
          <polygon
            points="50,4 90,26 90,74 50,96 10,74 10,26"
            stroke="url(#mvrGoldGrad)"
            strokeWidth="3.5"
            fill="url(#mvrFacetGrad)"
            strokeLinejoin="round"
          />

          {/* Precision Engineering Compass / Crystal Cleavage Guidelines */}
          <line x1="50" y1="4" x2="50" y2="96" stroke="url(#mvrSilverGrad)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="url(#mvrSilverGrad)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />

          {/* Interlocking Monogram: M, V and R */}
          {/* M Left and Center Structure */}
          <path
            d="M22 68 L22 32 L38 52 L50 36"
            stroke="url(#mvrSilverGrad)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Central V Wedge Accent */}
          <path
            d="M38 52 L50 72 L62 52"
            stroke="url(#mvrGoldGrad)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* R Structure on Right */}
          <path
            d="M50 36 L62 52 L78 32 L78 68"
            stroke="url(#mvrSilverGrad)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* R Bow and Leg */}
          <path
            d="M52 36 H68 C74 36 78 40 78 46 C78 52 74 56 68 56 H54 M64 56 L76 68"
            stroke="url(#mvrGoldGrad)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Core Crystal Spark */}
          <polygon
            points="50,48 53,52 50,56 47,52"
            fill="url(#mvrGoldGrad)"
          />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col justify-center min-w-0">
        <span
          className={`${textSizes[size]} font-black tracking-wide text-white font-display uppercase leading-tight whitespace-nowrap`}
        >
          MVR <span className="text-amber-400">ENGENHARIA</span>
        </span>
        {showSubtitle && (
          <span
            className={`${subSizes[size]} tracking-[0.2em] text-slate-400 uppercase font-medium mt-0.5 whitespace-nowrap hidden sm:block`}
          >
            Exportação de Minérios do Brasil
          </span>
        )}
      </div>
    </div>
  );
};
