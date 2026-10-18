import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { Language } from '../data/i18n';

interface PrivacyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
  currentLang: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  type,
  onClose,
  currentLang
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl z-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>
              {type === 'privacy'
                ? 'Política de Privacidade & Proteção de Dados (LGPD)'
                : 'Termos de Uso & Condições Comerciais'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <p>
              A <strong>MR Engenharia</strong> valoriza a segurança e a confidencialidade dos dados comerciais e corporativos submetidos pelos compradores e parceiros em nosso portal institucional.
            </p>
            <h4 className="font-bold text-slate-100 text-sm">1. Coleta Mínima & Finalidade</h4>
            <p>
              Os dados coletados através dos formulários de cotação (nome, empresa, e-mail corporativo, telefone e especificações de compra) destinam-se exclusivamente à análise de viabilidade técnica, emissão de propostas de fornecimento e atendimento direto por Marcus Vinicius.
            </p>
            <h4 className="font-bold text-slate-100 text-sm">2. Não Compartilhamento</h4>
            <p>
              Não comercializamos, alugamos ou compartilhamos dados cadastrais com terceiros para fins de marketing. Informações operacionais são compartilhadas unicamente com entidades envolvidas no processo aduaneiro e de inspeção marítima (como SGS e agentes de carga) estritamente após a celebração de contrato de compra e venda.
            </p>
            <h4 className="font-bold text-slate-100 text-sm">3. Direitos do Titular (LGPD)</h4>
            <p>
              Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), qualquer representante corporativo pode solicitar a atualização, confirmação ou exclusão de seus dados de contato através de nossos canais oficiais.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p>
              O presente website institucional tem como finalidade exclusiva a divulgação técnica e comercial de matérias-primas minerais exportadas pela <strong>MR Engenharia</strong> a partir do Brasil.
            </p>
            <h4 className="font-bold text-slate-100 text-sm">1. Origem das Especificações</h4>
            <p>
              As informações técnicas, ensaios químicos e volumes apresentados têm como base primária a lista oficial de exportação de minérios (documento de referência de 29/08/2026). Todos os parâmetros definitivos de cada lote (teores de corte, granulometria, umidade e bônus/penalidades) são formalizados em contrato de compra e venda internacional específico.
            </p>
            <h4 className="font-bold text-slate-100 text-sm">2. Condições de Fornecimento</h4>
            <p>
              Este website não constitui plataforma de contratação eletrônica automática ou e-commerce. Propostas comerciais, emissão de instrumentos bancários (SBLC) e reservas de janelas de atracações exigem negociação bilateral direta e assinatura de minutas de fornecimento.
            </p>
            <h4 className="font-bold text-slate-100 text-sm">3. Propriedade Intelectual</h4>
            <p>
              A marca MR Engenharia, sua composição visual, textos originais e elementos gráficos são de titularidade exclusiva.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
          >
            Compreendi
          </button>
        </div>
      </div>
    </div>
  );
};
