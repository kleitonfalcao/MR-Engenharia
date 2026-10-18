import React from 'react';
import { Language } from '../data/i18n';

interface CountryFlagProps {
  country: Language;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  country,
  className = '',
  size = 'md'
}) => {
  const dimensions = {
    sm: 'w-4 h-3',
    md: 'w-5 h-3.5',
    lg: 'w-6 h-4.5'
  };

  const dimClass = dimensions[size] || dimensions.md;

  switch (country) {
    case 'pt': // Brazil
      return (
        <svg
          viewBox="0 0 720 504"
          className={`${dimClass} rounded-xs overflow-hidden shrink-0 shadow-xs ring-1 ring-black/10 inline-block align-middle ${className}`}
          aria-label="Bandeira do Brasil"
        >
          {/* Green Background */}
          <rect width="720" height="504" fill="#009B3A" />
          {/* Yellow Rhombus */}
          <polygon points="360,54 666,252 360,450 54,252" fill="#FEDF00" />
          {/* Blue Circle */}
          <circle cx="360" cy="252" r="126" fill="#002776" />
          {/* White Celestial Band */}
          <path
            d="M 235 255 A 136 136 0 0 0 484 252 A 126 126 0 0 1 235 255 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'en': // United States
      return (
        <svg
          viewBox="0 0 741 390"
          className={`${dimClass} rounded-xs overflow-hidden shrink-0 shadow-xs ring-1 ring-black/10 inline-block align-middle ${className}`}
          aria-label="United States Flag"
        >
          {/* Red and White Stripes */}
          <rect width="741" height="390" fill="#B22234" />
          <rect y="30" width="741" height="30" fill="#FFFFFF" />
          <rect y="90" width="741" height="30" fill="#FFFFFF" />
          <rect y="150" width="741" height="30" fill="#FFFFFF" />
          <rect y="210" width="741" height="30" fill="#FFFFFF" />
          <rect y="270" width="741" height="30" fill="#FFFFFF" />
          <rect y="330" width="741" height="30" fill="#FFFFFF" />
          {/* Blue Canton */}
          <rect width="296" height="210" fill="#3C3B6E" />
          {/* Stylized White Stars Pattern */}
          <g fill="#FFFFFF">
            <circle cx="40" cy="30" r="8" />
            <circle cx="90" cy="30" r="8" />
            <circle cx="140" cy="30" r="8" />
            <circle cx="190" cy="30" r="8" />
            <circle cx="240" cy="30" r="8" />

            <circle cx="65" cy="65" r="8" />
            <circle cx="115" cy="65" r="8" />
            <circle cx="165" cy="65" r="8" />
            <circle cx="215" cy="65" r="8" />

            <circle cx="40" cy="100" r="8" />
            <circle cx="90" cy="100" r="8" />
            <circle cx="140" cy="100" r="8" />
            <circle cx="190" cy="100" r="8" />
            <circle cx="240" cy="100" r="8" />

            <circle cx="65" cy="135" r="8" />
            <circle cx="115" cy="135" r="8" />
            <circle cx="165" cy="135" r="8" />
            <circle cx="215" cy="135" r="8" />

            <circle cx="40" cy="170" r="8" />
            <circle cx="90" cy="170" r="8" />
            <circle cx="140" cy="170" r="8" />
            <circle cx="190" cy="170" r="8" />
            <circle cx="240" cy="170" r="8" />
          </g>
        </svg>
      );

    case 'es': // Spain
      return (
        <svg
          viewBox="0 0 750 500"
          className={`${dimClass} rounded-xs overflow-hidden shrink-0 shadow-xs ring-1 ring-black/10 inline-block align-middle ${className}`}
          aria-label="Bandera de España"
        >
          {/* Red Top Stripe */}
          <rect width="750" height="125" fill="#AA151B" />
          {/* Yellow Middle Stripe (2x height) */}
          <rect y="125" width="750" height="250" fill="#F1BF00" />
          {/* Red Bottom Stripe */}
          <rect y="375" width="750" height="125" fill="#AA151B" />
          {/* Stylized Coat of Arms Shield on Yellow */}
          <g transform="translate(160, 200)">
            <path d="M 0 0 L 70 0 C 70 60 50 90 35 100 C 20 90 0 60 0 0 Z" fill="#AA151B" />
            <path d="M 8 8 L 62 8 C 62 55 45 80 35 90 C 25 80 8 55 8 8 Z" fill="#F1BF00" />
            <circle cx="35" cy="45" r="14" fill="#002776" />
            {/* Crown Top */}
            <path d="M 10 -15 L 20 -5 L 35 -20 L 50 -5 L 60 -15 L 55 0 L 15 0 Z" fill="#AA151B" />
          </g>
        </svg>
      );

    case 'zh': // China
      return (
        <svg
          viewBox="0 0 900 600"
          className={`${dimClass} rounded-xs overflow-hidden shrink-0 shadow-xs ring-1 ring-black/10 inline-block align-middle ${className}`}
          aria-label="中国国旗"
        >
          {/* Red Background */}
          <rect width="900" height="600" fill="#DE2910" />
          {/* Large Five-pointed Star */}
          <polygon
            points="150,55 180,147 277,147 199,204 228,296 150,239 72,296 101,204 23,147 120,147"
            fill="#FFDE00"
            transform="scale(0.8) translate(30, 20)"
          />
          {/* 4 Small Arc Stars */}
          <polygon
            points="300,50 310,80 340,80 315,98 325,128 300,110 275,128 285,98 260,80 290,80"
            fill="#FFDE00"
            transform="scale(0.5) translate(300, 20) rotate(-15 300 80)"
          />
          <polygon
            points="360,110 370,140 400,140 375,158 385,188 360,170 335,188 345,158 320,140 350,140"
            fill="#FFDE00"
            transform="scale(0.5) translate(360, 70) rotate(10 360 140)"
          />
          <polygon
            points="360,200 370,230 400,230 375,248 385,278 360,260 335,278 345,248 320,230 350,230"
            fill="#FFDE00"
            transform="scale(0.5) translate(360, 160) rotate(35 360 230)"
          />
          <polygon
            points="300,270 310,300 340,300 315,318 325,348 300,330 275,348 285,318 260,300 290,300"
            fill="#FFDE00"
            transform="scale(0.5) translate(300, 240) rotate(60 300 300)"
          />
        </svg>
      );

    default:
      return null;
  }
};
