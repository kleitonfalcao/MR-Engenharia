import React from 'react';
import { Language, TRANSLATIONS } from '../data/i18n';
import { COMMERCIAL_CONTACT, MINERALS_DATA, MineralProduct } from '../data/minerals';
import { PhoneCall, Mail, Send, ArrowUp } from 'lucide-react';
import { MRLogo } from './MRLogo';

interface FooterProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenMineral: (mineral: MineralProduct) => void;
  onOpenPrivacy: (type: 'privacy' | 'terms') => void;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' }
];

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectLang,
  onOpenMineral,
  onOpenPrivacy
}) => {
  const t = TRANSLATIONS[currentLang];

  const whatsappUrl = `https://wa.me/${COMMERCIAL_CONTACT.phoneDial.replace('+', '')}?text=${encodeURIComponent(
    'Olá Marcus Vinicius / MR Engenharia, gostaria de informações sobre fornecimento e exportação de minérios.'
  )}`;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Flags & Direct Contact Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Explicit Language Flags Strip in Footer */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">
              Idioma / Language:
            </span>
            <div className="flex items-center gap-1.5">
              {LANGUAGES.map((lang) => {
                const isSelected = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => onSelectLang(lang.code)}
                    className={`cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-750'
                    }`}
                  >
                    <span className="text-sm leading-none" aria-hidden="true">{lang.flag}</span>
                    <span className="text-[11px]">{lang.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Direct WhatsApp & Mail button */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800 hover:bg-emerald-900 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Direto</span>
            </a>
            <a
              href={`mailto:${COMMERCIAL_CONTACT.emailDisplay}`}
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-sky-400 border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>E-mail Comercial</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="cursor-pointer inline-block" aria-label="MR Engenharia Home">
              <MRLogo size="md" showSubtitle={true} />
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm pt-1">
              {t.footer.tagline}
            </p>
            <div className="text-[11px] text-slate-500 space-y-0.5">
              <div>Sede Operacional: {COMMERCIAL_CONTACT.location}</div>
              <div>Origem das Cargas: Jazidas e Concessões Minerais do Brasil</div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-slate-200 font-semibold text-xs uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#minerals" className="hover:text-amber-400 transition-colors">
                  {t.nav.minerals}
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-amber-400 transition-colors">
                  {t.nav.quality}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Minerals Portfolio (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-slate-200 font-semibold text-xs uppercase tracking-wider">
              {t.footer.mineralsTitle}
            </h4>
            <ul className="space-y-2">
              {MINERALS_DATA.map((mineral) => (
                <li key={mineral.id}>
                  <button
                    onClick={() => onOpenMineral(mineral)}
                    className="cursor-pointer text-left hover:text-amber-400 transition-colors flex items-center justify-between w-full group"
                  >
                    <span>{mineral.name[currentLang]}</span>
                    <span className="font-mono text-[11px] text-slate-500 group-hover:text-amber-400">
                      {mineral.chemicalSymbol}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Commercial Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-slate-200 font-semibold text-xs uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <div className="text-slate-200 font-bold">{COMMERCIAL_CONTACT.name}</div>
              <div className="text-[11px] text-slate-400">{COMMERCIAL_CONTACT.title[currentLang]}</div>
              <a
                href={`tel:${COMMERCIAL_CONTACT.phoneDial}`}
                className="flex items-center gap-2 text-amber-400 font-mono font-bold hover:text-amber-300 transition-colors pt-1"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span className="tabular-nums">{COMMERCIAL_CONTACT.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="truncate">{COMMERCIAL_CONTACT.emailDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Clean Disclaimer strictly as requested */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="text-slate-400 font-medium">
            {t.footer.disclaimer}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenPrivacy('privacy')}
              className="cursor-pointer hover:text-slate-300 transition-colors"
            >
              {t.footer.privacyPolicy}
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPrivacy('terms')}
              className="cursor-pointer hover:text-slate-300 transition-colors"
            >
              {t.footer.termsOfUse}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} MR Engenharia. {t.footer.rightsReserved}
          </div>
          <div className="text-slate-500">
            Salvador · Bahia · Brasil
          </div>
        </div>
      </div>
    </footer>
  );
};
