import React, { useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from '../data/i18n';
import { COMMERCIAL_CONTACT, MINERALS_DATA, MineralProduct } from '../data/minerals';
import { PhoneCall, Mail, Send, Check, Copy, AlertCircle, Building2, Globe, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  selectedMineral: MineralProduct | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  selectedMineral
}) => {
  const t = TRANSLATIONS[currentLang];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: selectedMineral ? selectedMineral.id : 'iron',
    volume: '',
    incoterm: 'CIF',
    message: '',
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync selected mineral when changed from outside
  useEffect(() => {
    if (selectedMineral) {
      setFormData((prev) => ({ ...prev, product: selectedMineral.id }));
    }
  }, [selectedMineral]);

  const currentMineralObj = MINERALS_DATA.find((m) => m.id === formData.product) || MINERALS_DATA[0];

  const formatInquiryText = () => {
    return `[SOLICITAÇÃO DE COTAÇÃO — MVR ENGENHARIA]
Empresa: ${formData.company || 'Não informada'}
Solicitante: ${formData.name || 'Não informado'}
E-mail: ${formData.email || 'Não informado'}
Telefone / WhatsApp: ${formData.phone || 'Não informado'}
País de Destino: ${formData.country || 'A confirmar'}
Produto de Interesse: ${currentMineralObj.name[currentLang]} (${currentMineralObj.chemicalSymbol})
Volume Pretendido: ${formData.volume || 'A confirmar'}
Incoterm Desejado: ${formData.incoterm}
Observações / Requisitos Técnicos:
${formData.message || 'Solicito especificações vigentes, disponibilidade de lote e proposta comercial.'}`;
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(formatInquiryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setErrorMsg('Por favor, preencha os campos obrigatórios (Nome, Empresa e E-mail corporativo).');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${COMMERCIAL_CONTACT.phoneDial.replace('+', '')}?text=${encodeURIComponent(
    formatInquiryText()
  )}`;

  const mailtoInquiryUrl = `mailto:${COMMERCIAL_CONTACT.emailDisplay}?subject=${encodeURIComponent(
    `Cotação de Minérios — ${currentMineralObj.name[currentLang]} — ${formData.company || 'Empresa Compradora'}`
  )}&body=${encodeURIComponent(formatInquiryText())}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <Building2 className="w-4 h-4" />
            <span>Mesa de Operações Comerciais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Commercial Executive Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  {t.contact.directLeadSub}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {COMMERCIAL_CONTACT.name}
                </h3>
                <div className="text-xs text-slate-400 mt-1">
                  MVR Engenharia · Exportação Internacional de Minérios
                </div>
              </div>

              {/* Verified Contact Channels */}
              <div className="space-y-3.5 pt-2 border-t border-slate-800/80">
                <a
                  href={`tel:${COMMERCIAL_CONTACT.phoneDial}`}
                  className="cursor-pointer flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Telefone Comercial Direto</div>
                      <div className="font-mono text-sm font-bold text-white tabular-nums">
                        {COMMERCIAL_CONTACT.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Ligar →
                  </span>
                </a>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Atendimento WhatsApp</div>
                      <div className="text-xs font-semibold text-white">
                        {COMMERCIAL_CONTACT.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Mensagem →
                  </span>
                </a>

                <a
                  href={`mailto:${COMMERCIAL_CONTACT.emailDisplay}`}
                  className="cursor-pointer flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">E-mail Comercial</div>
                      <div className="font-mono text-xs font-medium text-slate-200 truncate max-w-[200px]">
                        {COMMERCIAL_CONTACT.emailDisplay}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-sky-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Escrever →
                  </span>
                </a>
              </div>

              {/* Procedural Assurance */}
              <div className="pt-2 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Segurança nas Operações B2B</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Tratamos diretamente com importadores credenciados, tradings com mandato comprovado e indústrias finais. Condições contratuais garantidas por instrumentos bancários de primeira linha.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Quotation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white">{t.contact.formTitle}</h3>
                <p className="text-xs text-slate-400 mt-1">{t.contact.formSubtitle}</p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/80 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Solicitação Recebida com Sucesso!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                    {t.contact.successMessage}
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Agilizar via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="cursor-pointer px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                    >
                      Enviar Nova Cotação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/50 border border-red-800 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        Nome do Solicitante *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        Empresa / Trading *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        Telefone / WhatsApp (com DDI)
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+55 ... / +1 ..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Mineral Selection */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        {t.contact.productSelectLabel}
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      >
                        {MINERALS_DATA.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.name[currentLang]} ({m.chemicalSymbol})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Target Volume */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        Volume Pretendido
                      </label>
                      <input
                        type="text"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        placeholder="Ex: 50.000 MT / 5.000 MTU"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    {/* Incoterm */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        Incoterm Desejado
                      </label>
                      <select
                        value={formData.incoterm}
                        onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      >
                        <option value="FOB">FOB (Porto Brasileiro)</option>
                        <option value="CIF">CIF (Porto de Destino)</option>
                        <option value="CFR">CFR (Porto de Destino)</option>
                      </select>
                    </div>
                  </div>

                  {/* Destination Country / Port */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      País & Porto de Destino
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Ex: China (Qingdao), Europa (Roterdã), EUA (Houston)..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Especificações & Aplicação Industrial
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                    <input
                      type="checkbox"
                      id="consentCheck"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="rounded border-slate-800 text-amber-500 focus:ring-amber-500 mt-0.5"
                    />
                    <label htmlFor="consentCheck" className="cursor-pointer leading-normal">
                      {t.contact.privacyConsent}
                    </label>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="cursor-pointer text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? t.contact.inquiryCopied : t.contact.copyInquiry}</span>
                    </button>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <a
                        href={mailtoInquiryUrl}
                        className="cursor-pointer px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors flex-1 sm:flex-initial"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>E-mail</span>
                      </a>
                      <button
                        type="submit"
                        className="cursor-pointer px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md hover:shadow-amber-500/20 whitespace-nowrap flex-1 sm:flex-initial"
                      >
                        {t.contact.submitButton}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
