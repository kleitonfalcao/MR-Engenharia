import React, { useState } from 'react';
import { MineralProduct } from '../data/minerals';
import { Language, TRANSLATIONS } from '../data/i18n';
import { MineralVisual } from './MineralVisual';
import { ArrowUpRight, Anchor, Box, Scale, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  mineral: MineralProduct;
  currentLang: Language;
  onOpenDetails: (mineral: MineralProduct) => void;
  onRequestQuote: (mineral: MineralProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  mineral,
  currentLang,
  onOpenDetails,
  onRequestQuote
}) => {
  const t = TRANSLATIONS[currentLang];
  // Start with the drawing of the mineral per user request: "Pode iniciar com a imagem desenho do minerio e a real quando clicarmos."
  const [viewMode, setViewMode] = useState<'diagram' | 'specimen'>('diagram');

  const toggleViewMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewMode((prev) => (prev === 'diagram' ? 'specimen' : 'diagram'));
  };

  return (
    <div className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl">
      <div>
        {/* Visual Header starting with the diagram, and toggleable to realistic specimen */}
        <div className="relative p-4 sm:p-5 pb-0">
          <div
            onClick={toggleViewMode}
            className="cursor-pointer relative"
            title="Clique para alternar entre o desenho técnico e a amostra real"
          >
            <MineralVisual
              id={mineral.id}
              name={mineral.name[currentLang]}
              symbol={mineral.chemicalSymbol}
              themeColor={mineral.themeColor}
              compact={true}
              viewMode={viewMode}
              photoUrl={mineral.realPhotoUrl}
            />

            {/* Prominent Quick-Toggle Pill Button on the Card */}
            <button
              onClick={toggleViewMode}
              className="cursor-pointer absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-700 hover:border-amber-500/60 text-[11px] font-semibold text-slate-200 hover:text-amber-400 backdrop-blur-md shadow-md transition-colors"
            >
              {viewMode === 'diagram' ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ver Amostra</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ver Desenho</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Mineral Family & Chemical Tag */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{mineral.mineralFamily}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-amber-400 font-semibold">{mineral.chemicalSymbol}</span>
          </div>

          {/* Product Title & Subtitle */}
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {mineral.name[currentLang]}
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              {mineral.subtitle[currentLang]}
            </p>
          </div>

          {/* Key Documented Specs */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
            {/* Grade */}
            <div className="flex items-center justify-between">
              <span className="text-slate-400">{t.minerals.primaryGradeLabel}</span>
              <span className="font-semibold text-slate-200 tabular-nums text-right">
                {mineral.primaryGrade[currentLang]}
              </span>
            </div>

            {/* Port */}
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <Anchor className="w-3 h-3 text-slate-500" />
                <span>{t.minerals.portLabel}</span>
              </span>
              <span className="text-slate-300 text-right truncate max-w-[170px]" title={mineral.portOfLoading[currentLang]}>
                {mineral.portOfLoading[currentLang].split(',')[0]}
              </span>
            </div>

            {/* Packaging */}
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <Box className="w-3 h-3 text-slate-500" />
                <span>{t.minerals.packagingLabel}</span>
              </span>
              <span className="text-slate-300 text-right truncate max-w-[170px]" title={mineral.packaging[currentLang]}>
                {mineral.packaging[currentLang]}
              </span>
            </div>

            {/* Reference Volume */}
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <Scale className="w-3 h-3 text-slate-500" />
                <span>{t.minerals.volumeLabel}</span>
              </span>
              <span className="text-slate-300 text-right truncate max-w-[170px] font-mono tabular-nums" title={mineral.volumesMentioned[currentLang]}>
                {mineral.volumesMentioned[currentLang]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center gap-2.5">
        <button
          onClick={() => onOpenDetails(mineral)}
          className="cursor-pointer flex-1 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
        >
          <span>{t.minerals.viewDetails}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => onRequestQuote(mineral)}
          className="cursor-pointer py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all whitespace-nowrap"
        >
          {t.minerals.requestSample}
        </button>
      </div>
    </div>
  );
};
