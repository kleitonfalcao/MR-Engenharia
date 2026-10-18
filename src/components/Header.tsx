import React, { useState } from 'react';
import { Menu, X, PhoneCall, Mail, Send, FileSpreadsheet, ChevronRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/i18n';
import { COMMERCIAL_CONTACT } from '../data/minerals';
import { MRLogo } from './MRLogo';
import { CountryFlag } from './CountryFlag';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onRequestQuote: () => void;
  activeSection: string;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'zh', label: '中文' }
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
    'Olá Marcus Ribeiro / MVR Engenharia, gostaria de informações sobre fornecimento e exportação de minérios.'
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl transition-colors">
      {/* TIER 1: Main Top Bar (Clean Logo, Nav Links, Desktop Quote CTA, High-Visibility Mobile 3-Bars Menu) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8 h-18 sm:h-20">
          {/* Brand Monogram & Logo - shrink-0 ensures it is never squashed or overlapped */}
          <a href="#" className="cursor-pointer group shrink-0" aria-label="MVR Engenharia Home">
            <MRLogo size="md" showSubtitle={true} />
          </a>

          {/* Central Navigation Links with ample breathing room for Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1.5 relative ${
                    isActive ? 'text-amber-400 font-bold' : 'hover:text-white'
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

          {/* Right Header Action: Quote on Desktop, High-Visibility 3-Bars on Mobile */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary Action Button (Quote) - Visible ONLY on Desktop/Tablet per user request */}
            <button
              onClick={onRequestQuote}
              className="hidden lg:inline-flex cursor-pointer px-5 py-2.5 text-sm font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:from-amber-500 rounded-lg shadow-md hover:shadow-amber-500/25 transition-all whitespace-nowrap shrink-0 items-center gap-2 border border-amber-300/40"
              title="Solicitar Cotação Comercial"
            >
              <FileSpreadsheet className="w-4 h-4 text-slate-950 shrink-0" />
              <span>{t.nav.requestQuote}</span>
            </button>

            {/* High-Visibility 3-Bars Hamburger Menu Button for Mobile ("3 traços") */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden cursor-pointer p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 active:bg-slate-800 text-amber-400 border-2 border-amber-500/50 hover:border-amber-400 shadow-md shadow-amber-500/10 transition-all flex items-center justify-center shrink-0 min-w-[44px] min-h-[44px]"
              aria-label="Abrir Menu de Navegação (3 traços)"
              title="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-400 stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 text-amber-400 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* TIER 2: Single Clean Language Sub-bar (Country Flags & Direct Channels) */}
      <div className="border-t border-slate-800/80 bg-slate-900/70 text-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-3">
          {/* Left: Language Flags Strip - On mobile, ONLY the flags appear so icons fit! */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
              Idioma / Country:
            </span>
            {LANGUAGES.map((lang) => {
              const isSelected = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => onSelectLang(lang.code)}
                  className={`cursor-pointer flex items-center gap-1.5 p-1 sm:px-2.5 sm:py-1 rounded-md text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-amber-500/25 text-amber-300 border border-amber-500/50 font-semibold shadow-xs ring-1 ring-amber-400/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                  title={lang.label}
                  aria-label={lang.label}
                >
                  <CountryFlag country={lang.code} size="sm" />
                  <span className="text-[11px] whitespace-nowrap hidden sm:inline">{lang.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Direct 1-Click WhatsApp, E-mail & Phone Channels - Prominent and clearly visible on mobile! */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 text-xs">
            {/* Direct WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center gap-1.5 p-1.5 sm:px-3 sm:py-1 rounded-md bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-800/80 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors shadow-xs"
              title="WhatsApp Marcus Ribeiro"
              aria-label="WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Direct Email Button */}
            <a
              href={`mailto:${COMMERCIAL_CONTACT.emailDisplay}?subject=Consulta Comercial — MVR Engenharia`}
              className="cursor-pointer inline-flex items-center justify-center gap-1.5 p-1.5 sm:px-3 sm:py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 text-sky-400 hover:text-sky-300 font-medium transition-colors shadow-xs"
              title="Enviar e-mail para Marcus Ribeiro"
              aria-label="E-mail"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">E-mail</span>
            </a>

            {/* Direct Phone Dial (Ligação) */}
            <a
              href={`tel:${COMMERCIAL_CONTACT.phoneDial}`}
              className="cursor-pointer inline-flex items-center justify-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 sm:border-transparent text-slate-300 hover:text-amber-400 font-mono font-medium transition-colors shadow-xs"
              title="Ligar para Marcus Ribeiro (+55 71 99198-8787)"
              aria-label="Ligar para Marcus Ribeiro"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="tabular-nums hidden md:inline">{COMMERCIAL_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Accessible via the 3-Bars "3 traços" Button) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          {/* Primary Action Button: Solicitar Cotação placed INSIDE the 3 traços menu as requested */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestQuote();
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 border border-amber-300/40"
          >
            <FileSpreadsheet className="w-4 h-4 text-slate-950 shrink-0" />
            <span>{t.nav.requestQuote}</span>
          </button>

          {/* Mobile Country Flags Language Picker */}
          <div className="pt-2 pb-3 border-t border-b border-slate-800/80">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Selecione o Idioma / Country:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map((lang) => {
                const isSelected = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onSelectLang(lang.code);
                    }}
                    className={`cursor-pointer flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <CountryFlag country={lang.code} size="md" />
                    <span>{lang.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

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
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 text-sm font-medium font-mono"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Ligar: {COMMERCIAL_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
