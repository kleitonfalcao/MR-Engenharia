import React from 'react';
import { Language, TRANSLATIONS } from '../data/i18n';
import { ShieldCheck, CheckCircle2, FileCheck2, Cpu, Scale } from 'lucide-react';

interface QualitySectionProps {
  currentLang: Language;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Padrões de Certificação & Integridade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.quality.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.quality.commitment}
          </p>
        </div>

        {/* 4 Quality Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{t.quality.point1Title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{t.quality.point1Desc}</p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{t.quality.point2Title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{t.quality.point2Desc}</p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{t.quality.point3Title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{t.quality.point3Desc}</p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{t.quality.point4Title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{t.quality.point4Desc}</p>
          </div>
        </div>

        {/* Independent Inspection Entities */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-3">
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Inspeção e Certificação Portuária
          </div>
          <p className="leading-relaxed">
            As amostragens e determinações de umidade, teores metálicos e granulometria nos portos de Barcarena, Salvador e Pecém são realizadas por organismos inspetivos de prestígio global como <strong className="text-slate-200">SGS</strong>, <strong className="text-slate-200">Alex Stewart International</strong> ou <strong className="text-slate-200">Bureau Veritas</strong>, com certificados vinculados à liquidação dos instrumentos de pagamento.
          </p>
        </div>
      </div>
    </section>
  );
};
