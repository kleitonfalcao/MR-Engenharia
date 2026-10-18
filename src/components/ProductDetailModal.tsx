import React, { useState } from 'react';
import { MineralProduct, COMMERCIAL_CONTACT } from '../data/minerals';
import { Language, TRANSLATIONS } from '../data/i18n';
import { MineralVisual } from './MineralVisual';
import {
  X,
  PhoneCall,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Anchor,
  Box,
  Scale,
  Calendar,
  CreditCard,
  Copy,
  Check,
  Eye,
  Sparkles,
  FlaskConical,
  Ship,
  MessageSquare,
  Layers,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface ProductDetailModalProps {
  mineral: MineralProduct | null;
  currentLang: Language;
  onClose: () => void;
  onRequestQuote: (mineral: MineralProduct) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  mineral,
  currentLang,
  onClose,
  onRequestQuote
}) => {
  if (!mineral) return null;

  const t = TRANSLATIONS[currentLang];
  // Active topic tab with 4 spacious topics
  const [activeTab, setActiveTab] = useState<'specs' | 'applications' | 'logistics' | 'inquiry'>('specs');
  const [copied, setCopied] = useState(false);
  // Initial mode starts with the drawing ("desenho do minério") per user specification:
  // "Pode iniciar com a imagem desenho do minerio e a real quando clicarmos."
  const [viewMode, setViewMode] = useState<'diagram' | 'specimen'>('diagram');
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

  // Contextual prefilled inquiry text
  const prefilledInquiry: Record<Language, string> = {
    pt: `Olá Marcus Ribeiro, gostaria de solicitar informações técnicas, disponibilidade e condições comerciais vigentes para exportação de ${mineral.name.pt} (${mineral.chemicalSymbol}). Nossa empresa busca fornecimento para aplicação industrial.`,
    en: `Hello Marcus Ribeiro, I would like to receive further technical information, availability, and export commercial terms for ${mineral.name.en} (${mineral.chemicalSymbol}). Our company seeks regular industrial supply.`,
    es: `Hola Marcus Ribeiro, desearía solicitar información técnica, disponibilidad y condiciones comerciales vigentes para la exportación de ${mineral.name.es} (${mineral.chemicalSymbol}).`,
    zh: `您好 Marcus Ribeiro 商务总监，我们希望获取关于巴西产 ${mineral.name.zh} (${mineral.chemicalSymbol}) 的最新全分析化验单、当前批次配额及国际海运出口商务条款。`
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(prefilledInquiry[currentLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${COMMERCIAL_CONTACT.phoneDial.replace('+', '')}?text=${encodeURIComponent(
    prefilledInquiry[currentLang]
  )}`;

  const mailtoUrl = `mailto:${COMMERCIAL_CONTACT.emailDisplay}?subject=${encodeURIComponent(
    `Export Inquiry — ${mineral.name[currentLang]} (${mineral.chemicalSymbol}) — MVR Engenharia`
  )}&body=${encodeURIComponent(prefilledInquiry[currentLang])}`;

  // Prominent topic definitions with numbers, clear icons, and descriptive titles
  const topicTabs = [
    {
      id: 'specs' as const,
      number: '01',
      title: 'Composição Química',
      subtitle: 'Laudos analíticos & teores',
      icon: FlaskConical
    },
    {
      id: 'applications' as const,
      number: '02',
      title: 'Aplicações Industriais',
      subtitle: 'Mercados & setores de uso',
      icon: Layers
    },
    {
      id: 'logistics' as const,
      number: '03',
      title: 'Embarque & Comercial',
      subtitle: 'Portos, volumes & SBLC',
      icon: Ship
    },
    {
      id: 'inquiry' as const,
      number: '04',
      title: 'Solicitar Cotação',
      subtitle: 'WhatsApp & canais diretos',
      icon: MessageSquare
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Modal Dialog: Spacious, elegant, high-contrast */}
      <div className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl z-10 flex flex-col text-slate-100">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 bg-slate-900/98 backdrop-blur-md px-6 py-5 sm:px-8 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="font-mono text-sm sm:text-base font-extrabold px-3.5 py-1.5 rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/30">
              {mineral.chemicalSymbol}
            </span>
            <div>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Ficha Técnica Oficial · {mineral.mineralFamily}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                {mineral.name[currentLang]}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60 transition-colors"
            aria-label="Fechar ficha técnica"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* VISUAL STAGE: Starts with Drawing ("Desenho do Minério"), Clickable to Real Photo */}
        <div className="p-6 sm:p-8 bg-slate-950/70 border-b border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Box with Interactive Toggle */}
            <div className="lg:col-span-5 space-y-3">
              {/* Switcher Buttons: High visibility */}
              <div className="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setViewMode('diagram')}
                  className={`cursor-pointer flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'diagram'
                      ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>1. Desenho do Minério</span>
                </button>

                <button
                  onClick={() => setViewMode('specimen')}
                  className={`cursor-pointer flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'specimen'
                      ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>2. Foto Real da Amostra</span>
                </button>
              </div>

              {/* Clickable Image Container */}
              <div
                onClick={() => setViewMode((prev) => (prev === 'diagram' ? 'specimen' : 'diagram'))}
                className="cursor-pointer relative group rounded-2xl overflow-hidden border-2 border-slate-800 hover:border-amber-500/60 transition-all shadow-xl"
                title="Clique na imagem para alternar entre o Desenho e a Foto Real"
              >
                <MineralVisual
                  id={mineral.id}
                  name={mineral.name[currentLang]}
                  symbol={mineral.chemicalSymbol}
                  themeColor={mineral.themeColor}
                  viewMode={viewMode}
                  photoUrl={mineral.realPhotoUrl}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-amber-300 text-xs font-semibold border border-amber-500/40 shadow-xl backdrop-blur-xs">
                    {viewMode === 'diagram' ? 'Clique para ver Foto Real 📸' : 'Clique para ver Desenho 📐'}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="text-[11px] text-slate-400 text-center leading-relaxed">
                {viewMode === 'specimen' ? (
                  <span>
                    📸 <strong>Fotografia Real:</strong> {mineral.photoCaption[currentLang]}
                  </span>
                ) : (
                  <span>
                    📐 <strong>Esquema Técnico:</strong> Representação geométrica e cristalina da matriz mineralógica.
                  </span>
                )}
              </div>
            </div>

            {/* Product Quick-Fact Strip */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Origem: Concessões e Jazidas Minerais do Brasil</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {mineral.name[currentLang]}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {mineral.description[currentLang]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Teor Principal
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-amber-400 mt-1 block">
                    {mineral.primaryGrade[currentLang]}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Porto de Embarque
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white mt-1 block truncate">
                    {mineral.portOfLoading[currentLang].split(',')[0]}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Condição Comercial
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-200 mt-1 block">
                    {mineral.incoterm}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROMINENT TOPICS BAR: Large, clearly visible, generous spacing */}
        <div className="bg-slate-950 px-6 sm:px-8 py-4 border-b border-slate-800">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            Selecione o Tópico da Ficha Técnica:
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {topicTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer p-4 rounded-2xl text-left transition-all border flex flex-col justify-between min-h-[82px] ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-xl shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-slate-950/70' : 'text-slate-500'}`}>
                      {tab.number}
                    </span>
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                  </div>

                  <div className="mt-2">
                    <div className={`text-xs sm:text-sm font-extrabold truncate ${isActive ? 'text-slate-950' : 'text-white'}`}>
                      {tab.title}
                    </div>
                    <div className={`text-[11px] truncate ${isActive ? 'text-slate-900/80 font-medium' : 'text-slate-400'}`}>
                      {tab.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* TOPIC CONTENT AREA: Spacious, clean, clear hierarchy */}
        <div className="p-6 sm:p-10 flex-1 space-y-8">
          {/* TOPIC 1: CHEMICAL COMPOSITION */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <FlaskConical className="w-4 h-4" />
                  <span>Ensaio Laboratorial & Composição</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Tabela de Composição Química e Laudo Analítico
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Os valores abaixo correspondem aos registros do catálogo oficial de exportação de minérios do Brasil e ensaios independentes.
                </p>
              </div>

              {/* Specification Table with Large, Comfortable Spacing */}
              <div className="overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-950 shadow-inner">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300 uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-6 font-bold">Elemento / Composto</th>
                      <th className="py-4 px-6 font-bold">Fórmula</th>
                      <th className="py-4 px-6 font-bold text-right">Teor / Concentração</th>
                      <th className="py-4 px-6 font-bold text-center">Status Contratual</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {mineral.chemicalSpecs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                        <td className="py-4 px-6 font-semibold text-slate-200">{spec.element}</td>
                        <td className="py-4 px-6 font-mono text-amber-300 font-bold">{spec.formula}</td>
                        <td className="py-4 px-6 font-mono font-extrabold text-right text-white tabular-nums text-sm">
                          {spec.value}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {spec.status === 'confirmed' ? (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                              Confirmado
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-300 border border-amber-800">
                              Sob Consulta
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Testing Methodology Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">
                    Granulometria & Malha
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A distribuição granulométrica (lump, fines, mesh) é formalizada em contrato e ajustada ao processo de refino e tipo de forno do comprador.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">
                    Método de Ensaio Analítico
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Fluorescência de Raios-X (XRF) e Espectrometria ICP conduzidas por laboratório internacional independente acreditado (SGS, Alex Stewart ou equivalente).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TOPIC 2: INDUSTRIAL APPLICATIONS */}
          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Destinação Industrial & Mercado</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Aplicações Industriais e Setores de Utilização
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Principais segmentos globais que utilizam esta matéria-prima mineral para refino e fabricação.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mineral.applications[currentLang].map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-sm" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed block">
                        {app}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Items under Technical Validation */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Parâmetros Técnicos sob Validação Contratual</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-400 pl-6 list-disc">
                  {mineral.pendingValidation[currentLang].map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TOPIC 3: LOGISTICS & COMMERCIAL TERMS */}
          {activeTab === 'logistics' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Ship className="w-4 h-4" />
                  <span>Condições Comerciais & Infraestrutura</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Porto de Embarque, Volumes e Pagamento
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Diretrizes operacionais e mecanismos financeiros formalizados para exportação internacional.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Port */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Anchor className="w-4 h-4" />
                    <span>Porto de Embarque</span>
                  </div>
                  <div className="text-lg font-bold text-white">{mineral.portOfLoading[currentLang]}</div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mineral.portDetails[currentLang]}</p>
                </div>

                {/* Packaging */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Box className="w-4 h-4" />
                    <span>Acondicionamento</span>
                  </div>
                  <div className="text-lg font-bold text-white">{mineral.packaging[currentLang]}</div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Proteção adequada contra umidade e intempéries durante o transporte marítimo internacional.
                  </p>
                </div>

                {/* Volumes */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Scale className="w-4 h-4" />
                    <span>Volumes de Referência</span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono tabular-nums">
                    {mineral.volumesMentioned[currentLang]}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Lotes escalonados conforme capacidade do berço portuário e programação da navio graneleiro.
                  </p>
                </div>

                {/* Minimum Contract */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Calendar className="w-4 h-4" />
                    <span>Duração Contratual</span>
                  </div>
                  <div className="text-lg font-bold text-white">{mineral.minContract[currentLang]}</div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Previsibilidade de fornecimento regular para abastecimento contínuo de plantas fabris.
                  </p>
                </div>
              </div>

              {/* Payment Mechanism */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <CreditCard className="w-4 h-4" />
                  <span>Instrumento Financeiro & Inspeção</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {mineral.paymentTerms[currentLang]}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
                  <span>Incoterm Padrão: <strong className="text-amber-400 font-bold">{mineral.incoterm}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>Inspeção Independente: <strong className="text-slate-200 font-semibold">SGS ou equivalente no porto</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* TOPIC 4: INQUIRY & DIRECT CONTACT */}
          {activeTab === 'inquiry' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Canal Comercial B2B Imediato</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Solicitação de Cotação e Informações Técnicas
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Atendimento direto aos compradores internacionais qualificados.
                </p>
              </div>

              {/* Commercial Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Representante Comercial
                    </span>
                    <div className="text-2xl font-extrabold text-white mt-0.5">{COMMERCIAL_CONTACT.name}</div>
                    <div className="text-xs text-slate-400">{COMMERCIAL_CONTACT.title[currentLang]} · {COMMERCIAL_CONTACT.location}</div>
                  </div>

                  <a
                    href={`tel:${COMMERCIAL_CONTACT.phoneDial}`}
                    className="cursor-pointer inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-colors shadow-md shrink-0"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{COMMERCIAL_CONTACT.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Prefilled message display */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Mensagem Pronta para Iniciar Consulta:</span>
                  <button
                    onClick={handleCopyInquiry}
                    className="cursor-pointer text-amber-400 hover:text-amber-300 flex items-center gap-1.5 text-xs font-bold"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado para Área de Transferência!' : 'Copiar Texto da Consulta'}</span>
                  </button>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {prefilledInquiry[currentLang]}
                </div>
              </div>

              {/* Communication Action Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={`tel:${COMMERCIAL_CONTACT.phoneDial}`}
                  className="cursor-pointer flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 text-xs sm:text-sm font-bold transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Ligar Direto</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-center gap-2 p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Conversar no WhatsApp</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="cursor-pointer flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 text-xs sm:text-sm font-bold transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Enviar E-mail Comercial</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 sm:px-8 py-4 border-t border-slate-800 bg-slate-900/98 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Disponibilidades, teores exatos e condições comerciais são formalizados sob contrato específico.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="cursor-pointer px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors flex-1 sm:flex-initial"
            >
              Fechar Dossiê
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(mineral);
              }}
              className="cursor-pointer px-7 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow-md hover:shadow-amber-500/20 whitespace-nowrap flex-1 sm:flex-initial"
            >
              Solicitar Proposta Formal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
