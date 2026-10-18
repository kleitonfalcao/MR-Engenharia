import React from 'react';
import { Language, TRANSLATIONS } from '../data/i18n';
import { Layers, UserCheck, Anchor, Scale, CheckCircle2 } from 'lucide-react';
import { COMMERCIAL_CONTACT } from '../data/minerals';
import { MRLogo } from './MRLogo';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header with Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>Posicionamento Institucional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-sm text-amber-400/90 font-medium">
              {t.about.subtitle}
            </p>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed pt-2">
              <p>{t.about.p1}</p>
              <p className="text-slate-400">{t.about.p2}</p>
            </div>
          </div>

          {/* Real Mining Geological Formation Panorama */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl group">
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="/images/about_mining.webp"
                  alt="Mineração e Jazidas Minerais no Brasil"
                  className="w-full h-full object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-2 bg-slate-950/85 px-3 py-1.5 rounded-lg border border-slate-700 backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="font-medium">Jazidas Minerais do Brasil</span>
                </div>
                <span className="font-mono text-[11px] text-amber-300 bg-slate-950/85 px-2 py-1 rounded">
                  Minas Gerais · Pará · Bahia · Ceará
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of MR Engenharia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">{t.about.pillar1Title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{t.about.pillar1Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">{t.about.pillar2Title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{t.about.pillar2Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Anchor className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">{t.about.pillar3Title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{t.about.pillar3Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">{t.about.pillar4Title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{t.about.pillar4Desc}</p>
          </div>
        </div>

        {/* Corporate Trust Credentials Box with MRLogo */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <MRLogo size="sm" showSubtitle={false} />
            <div className="text-xs text-slate-400 pt-1">
              Origem & Registro Comercial: <strong className="text-slate-200">Salvador, Bahia, Brasil</strong>
            </div>
            <div className="text-xs text-slate-500">
              Operações de exportação sob contratos internacionais regidos pela ICC (International Chamber of Commerce)
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <div className="text-xs text-slate-400">Contato Comercial Direto</div>
              <div className="text-sm font-bold text-amber-400">{COMMERCIAL_CONTACT.name}</div>
            </div>
            <a
              href={`tel:${COMMERCIAL_CONTACT.phoneDial}`}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold text-slate-200 border border-slate-700 transition-colors"
            >
              {COMMERCIAL_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
