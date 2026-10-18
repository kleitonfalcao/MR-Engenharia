import React, { useState } from 'react';
import { Menu, X, PhoneCall, Mail, Send, ChevronRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/i18n';
import { COMMERCIAL_CONTACT } from '../data/minerals';
import { MRLogo } from './MRLogo';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onRequestQuote: () => void;
  activeSection: string;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' }
];

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  onRequestQuote,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const navItems = [
    { id: 'minerals', label: t.nav.minerals, href: '#minerals' },
    { id: 'quality', label: t.nav.quality, href: '#quality' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'faq', label: t.nav.faq, href: '#faq' },
    { id: 'contact', label: t.nav.contact, href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${COMMERCIAL_CONTACT.phoneDial.replace('+', '')}?text=${encodeURIComponent(
    'Olá Marcus Vinicius / MR Engenharia, gostaria de informações sobre fornecimento e exportação de minérios.'
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl transition-colors">
      {/* TIER 1: Main Top Bar (Logo, Nav Links, Primary CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18 sm:h-20">
          {/* Brand Monogram & Logo */}
          <a href="#" className="cursor-pointer group shrink-0" aria-label="MR Engenharia Home">
            <MRLogo size="md" showSubtitle={true} />
          </a>

          {/* Central Navigation Links with ample spacing */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive ? 'text-amber-400 font-semibold' : 'hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button (Quote) & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="cursor-pointer px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:from-amber-500 active:to-amber-600 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all whitespace-nowrap shrink-0"
            >
              {t.nav.requestQuote}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Abrir Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* TIER 2: Utility Sub-bar (Inspired by South Partners) */}
      {/* Left: Language Flags Strip | Right: Direct WhatsApp, Email & Phone */}
      <div className="border-t border-slate-800/80 bg-slate-900/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4 overflow-x-auto">
          {/* Left: Explicit Language Flags Strip */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 hidden md:inline">
              Idioma:
            </span>
            {LANGUAGES.map((lang) => {
              const isSelected = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => onSelectLang(lang.code)}
                  className={`cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                  title={lang.label}
                >
                  <span className="text-sm leading-none" aria-hidden="true">{lang.flag}</span>
                  <span className="text-[11px] whitespace-nowrap">{lang.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Direct 1-Click WhatsApp, E-mail & Phone Channels */}
          <div className="flex items-center gap-3 shrink-0 text-xs">
            {/* Direct WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-800/70 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              title="Iniciar conversa direta via WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Direct Email Button */}
            <a
              href={`mailto:${COMMERCIAL_CONTACT.emailDisplay}?subject=Consulta Comercial — MR Engenharia`}
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 text-sky-400 hover:text-sky-300 font-medium transition-colors"
              title="Enviar e-mail para Marcus Vinicius"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">E-mail</span>
            </a>

            {/* Direct Phone Dial */}
            <a
              href={`tel:${COMMERCIAL_CONTACT.phoneDial}`}
              className="cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-300 hover:text-amber-400 font-mono font-medium transition-colors"
              title="Ligar para Marcus Vinicius"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="tabular-nums hidden lg:inline">{COMMERCIAL_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-950 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            ))}
          </div>

          {/* Mobile Direct Action Buttons */}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800 text-sm font-semibold"
            >
              <Send className="w-4 h-4" />
              <span>WhatsApp Comercial</span>
            </a>

            <a
              href={`tel:${COMMERCIAL_CONTACT.phoneDial}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 text-sm font-medium"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Ligar: {COMMERCIAL_CONTACT.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
            >
              {t.nav.requestQuote}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
