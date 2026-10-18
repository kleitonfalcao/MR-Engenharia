import React, { useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from './data/i18n';
import { MINERALS_DATA, MineralProduct, COMMERCIAL_CONTACT } from './data/minerals';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MineralsCatalog } from './components/MineralsCatalog';
import { QualitySection } from './components/QualitySection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [selectedMineral, setSelectedMineral] = useState<MineralProduct | null>(null);
  const [quoteTargetMineral, setQuoteTargetMineral] = useState<MineralProduct | null>(null);
  const [privacyModal, setPrivacyModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });
  const [activeSection, setActiveSection] = useState<string>('minerals');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync document title and HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
    const titles: Record<Language, string> = {
      pt: 'MR Engenharia — Exportação Internacional de Minérios do Brasil',
      en: 'MR Engenharia — Brazilian Minerals Supply & International Export',
      es: 'MR Engenharia — Exportación Internacional de Minerales de Brasil',
      zh: 'MR Engenharia — 巴西大宗矿石国际海运出口与直供'
    };
    document.title = titles[currentLang];
  }, [currentLang]);

  // Track active section and scroll button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['minerals', 'quality', 'about', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle URL hash routing on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const match = MINERALS_DATA.find((m) => m.slug === hash || m.id === hash);
      if (match) {
        setSelectedMineral(match);
      } else {
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 200);
        }
      }
    }
  }, []);

  const handleOpenDetails = (mineral: MineralProduct) => {
    setSelectedMineral(mineral);
  };

  const handleRequestQuote = (mineral?: MineralProduct) => {
    if (mineral) {
      setQuoteTargetMineral(mineral);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Bar Header */}
      <Header
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
        onRequestQuote={() => handleRequestQuote()}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onExplore={() => {
            const el = document.getElementById('minerals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7 Products Catalog Section */}
        <MineralsCatalog
          currentLang={currentLang}
          onOpenDetails={handleOpenDetails}
          onRequestQuote={handleRequestQuote}
        />

        {/* Quality & Specifications Section */}
        <QualitySection currentLang={currentLang} />

        {/* Institutional About Section */}
        <AboutSection currentLang={currentLang} />

        {/* Frequently Asked Questions */}
        <FAQSection currentLang={currentLang} />

        {/* Direct Commercial Contact & Quotation Form */}
        <ContactSection
          currentLang={currentLang}
          selectedMineral={quoteTargetMineral}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
        onOpenMineral={handleOpenDetails}
        onOpenPrivacy={(type) => setPrivacyModal({ isOpen: true, type })}
      />

      {/* Individual Product Detail Dossier Modal */}
      <ProductDetailModal
        mineral={selectedMineral}
        currentLang={currentLang}
        onClose={() => setSelectedMineral(null)}
        onRequestQuote={handleRequestQuote}
      />

      {/* Legal & Privacy Policy Modal */}
      <PrivacyModal
        isOpen={privacyModal.isOpen}
        type={privacyModal.type}
        onClose={() => setPrivacyModal({ isOpen: false, type: 'privacy' })}
        currentLang={currentLang}
      />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-amber-400 hover:text-white hover:bg-slate-800 shadow-xl transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
