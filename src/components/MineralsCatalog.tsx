import React, { useState } from 'react';
import { MineralProduct, MINERALS_DATA } from '../data/minerals';
import { Language, TRANSLATIONS } from '../data/i18n';
import { ProductCard } from './ProductCard';
import { FileText, Filter } from 'lucide-react';

interface MineralsCatalogProps {
  currentLang: Language;
  onOpenDetails: (mineral: MineralProduct) => void;
  onRequestQuote: (mineral: MineralProduct) => void;
}

export const MineralsCatalog: React.FC<MineralsCatalogProps> = ({
  currentLang,
  onOpenDetails,
  onRequestQuote
}) => {
  const [filter, setFilter] = useState<'all' | 'ferrous' | 'strategic' | 'industrial'>('all');
  const t = TRANSLATIONS[currentLang];

  const filteredMinerals = MINERALS_DATA.filter((m) => {
    if (filter === 'all') return true;
    if (filter === 'ferrous') return m.id === 'iron' || m.id === 'manganese';
    if (filter === 'strategic') return m.id === 'lithium' || m.id === 'copper' || m.id === 'tungsten';
    if (filter === 'industrial') return m.id === 'silica' || m.id === 'cassiterite';
    return true;
  });

  return (
    <section id="minerals" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>Portfólio de Exportação</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>7 Grupos Minerais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.minerals.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {t.minerals.subtitle}
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented controls per frontend-design) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`cursor-pointer px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {t.minerals.allFilter}
            </button>
            <button
              onClick={() => setFilter('ferrous')}
              className={`cursor-pointer px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                filter === 'ferrous'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {t.minerals.filterFerrous}
            </button>
            <button
              onClick={() => setFilter('strategic')}
              className={`cursor-pointer px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                filter === 'strategic'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {t.minerals.filterStrategic}
            </button>
            <button
              onClick={() => setFilter('industrial')}
              className={`cursor-pointer px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                filter === 'industrial'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {t.minerals.filterIndustrial}
            </button>
          </div>
        </div>

        {/* Informational Banner on Data Integrity */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400">
          <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-200">Integridade dos Dados: </strong>
            {t.minerals.pendingNote}
          </p>
        </div>

        {/* 7 Mineral Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMinerals.map((mineral) => (
            <ProductCard
              key={mineral.id}
              mineral={mineral}
              currentLang={currentLang}
              onOpenDetails={onOpenDetails}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
