import React, { useState } from 'react';
import { Language, TRANSLATIONS } from '../data/i18n';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  currentLang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="cursor-pointer w-full p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-800/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <span className="text-amber-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
