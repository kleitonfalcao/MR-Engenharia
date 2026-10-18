import React from 'react';
import { ArrowRight, Anchor, Globe, ShieldCheck, Ship, Layers } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/i18n';
import { PORTS_INFO } from '../data/minerals';

interface HeroProps {
  currentLang: Language;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onExplore }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-slate-950 border-b border-slate-800">
      {/* Background High-Impact Industrial Imagery with Cinematic Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <img
          src="/images/hero_ship.jpg"
          alt="Navio graneleiro em navegação internacional"
          className="w-full h-full object-cover object-center filter saturate-150 contrast-125 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/90" />
      </div>

      {/* Mineral Gold Ambient Lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Proposition & Single Primary Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="text-amber-400 tracking-wider uppercase">MVR ENGENHARIA</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Comércio & Exportação Internacional de Minérios</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Brasil</span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              {t.hero.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                {t.hero.highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Single Primary Action Button */}
            <div className="pt-2">
              <button
                onClick={onExplore}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-xl hover:shadow-amber-500/25 transition-all whitespace-nowrap"
              >
                <span>{t.hero.ctaExplore}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card with Real Port Loading Photo (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Photo Banner Inside Card */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-slate-800">
                <img
                  src="/images/hero_port.jpg"
                  alt="Carregamento contínuo de minério em navio graneleiro"
                  className="w-full h-full object-cover object-center filter contrast-115"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold bg-slate-950/80 px-2 py-1 rounded backdrop-blur-xs">
                    Carregamento Contínuo
                  </span>
                  <span className="font-mono text-[11px] text-amber-300">
                    Capacidade Panamax & Capesize
                  </span>
                </div>
              </div>

              {/* 3 Export Port Gateways */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Terminais Portuários Estratégicos
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <div>
                        <div className="font-bold text-white">Porto de Barcarena (PA)</div>
                        <div className="text-[11px] text-slate-400">Minério de Ferro 62% · Manganês 42,28% · W 70%</div>
                      </div>
                    </div>
                    <span className="font-mono text-amber-300 text-[11px]">Calado 17,5m</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <div>
                        <div className="font-bold text-white">Porto de Salvador (BA)</div>
                        <div className="text-[11px] text-slate-400">Sílica Ultrafina (Big Bags & Sacos)</div>
                      </div>
                    </div>
                    <span className="font-mono text-sky-300 text-[11px]">Hub Atlântico</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div>
                        <div className="font-bold text-white">Porto de Pecém (CE)</div>
                        <div className="text-[11px] text-slate-400">Lítio & Carbonato de Lítio · Cobre</div>
                      </div>
                    </div>
                    <span className="font-mono text-emerald-300 text-[11px]">Parceria Roterdã</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Structured Metric Strip Below Hero Split */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800/80">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              {t.hero.metric1Label}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tabular-nums">
              {t.hero.metric1Value}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {t.hero.metric1Sub}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              {t.hero.metric2Label}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 tabular-nums">
              {t.hero.metric2Value}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {t.hero.metric2Sub}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              {t.hero.metric3Label}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tabular-nums">
              {t.hero.metric3Value}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {t.hero.metric3Sub}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              {t.hero.metric4Label}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 tabular-nums">
              {t.hero.metric4Value}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {t.hero.metric4Sub}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Section Transition Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-slate-950/40 pointer-events-none" />
    </section>
  );
};
