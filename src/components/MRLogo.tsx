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
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Monogram Symbol */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mrGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="mrSilverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
            <linearGradient id="mrFacetGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Outer Hexagonal Geological Mineral Crystal Shield */}
          <polygon
            points="50,4 90,26 90,74 50,96 10,74 10,26"
            stroke="url(#mrGoldGrad)"
            strokeWidth="3.5"
            fill="url(#mrFacetGrad)"
            strokeLinejoin="round"
          />

          {/* Precision Engineering Compass / Crystal Cleavage Diagonal Lines */}
          <line x1="50" y1="4" x2="50" y2="96" stroke="url(#mrSilverGrad)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="url(#mrSilverGrad)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />

          {/* Stylized Interlocking Monogram: M and R */}
          {/* M Shape */}
          <path
            d="M26 68 L26 32 L40 54 L50 38 L60 54 L74 32 L74 68"
            stroke="url(#mrSilverGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Interlocking Golden R Accents */}
          <path
            d="M48 40 H64 C70 40 73 44 73 49 C73 54 70 58 64 58 H50 M60 58 L72 68"
            stroke="url(#mrGoldGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Central Precious Core Crystal */}
          <polygon
            points="50,45 54,51 50,57 46,51"
            fill="url(#mrGoldGrad)"
          />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className={`${textSizes[size]} font-extrabold tracking-wider text-white font-display uppercase leading-tight`}
        >
          MR <span className="text-amber-400">ENGENHARIA</span>
        </span>
        {showSubtitle && (
          <span
            className={`${subSizes[size]} tracking-[0.22em] text-slate-400 uppercase font-medium mt-0.5`}
          >
            Exportação de Minérios do Brasil
          </span>
        )}
      </div>
    </div>
  );
};
