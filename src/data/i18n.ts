export type Language = 'pt' | 'en' | 'es' | 'zh';

export interface I18nContent {
  nav: {
    home: string;
    minerals: string;
    about: string;
    logistics: string;
    quality: string;
    video: string;
    faq: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    ctaExplore: string;
    metric1Label: string;
    metric1Value: string;
    metric1Sub: string;
    metric2Label: string;
    metric2Value: string;
    metric2Sub: string;
    metric3Label: string;
    metric3Value: string;
    metric3Sub: string;
    metric4Label: string;
    metric4Value: string;
    metric4Sub: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  minerals: {
    title: string;
    subtitle: string;
    allFilter: string;
    filterFerrous: string;
    filterStrategic: string;
    filterIndustrial: string;
    viewDetails: string;
    requestSample: string;
    primaryGradeLabel: string;
    portLabel: string;
    packagingLabel: string;
    volumeLabel: string;
    statusConfirmed: string;
    statusPending: string;
    pendingNote: string;
    tabRealPhoto: string;
    tabCrystalScheme: string;
  };
  modal: {
    overviewTab: string;
    galleryTab: string;
    specsTab: string;
    logisticsTab: string;
    inquiryTab: string;
    chemicalComposition: string;
    compExplanation: string;
    elementCol: string;
    formulaCol: string;
    valueCol: string;
    statusCol: string;
    applicationsTitle: string;
    verificationStatusTitle: string;
    contractDuration: string;
    paymentMechanism: string;
    modalClose: string;
    directContactWith: string;
    phoneLink: string;
    whatsappLink: string;
    emailLink: string;
    quoteButton: string;
  };
  logistics: {
    title: string;
    subtitle: string;
    intro: string;
    portBarcarenaTitle: string;
    portSalvadorTitle: string;
    portPecemTitle: string;
    inspectionTitle: string;
    inspectionDesc: string;
    paymentTitle: string;
    paymentDesc: string;
    incotermsTitle: string;
    incotermsDesc: string;
    workflowStep1: string;
    workflowStep1Desc: string;
    workflowStep2: string;
    workflowStep2Desc: string;
    workflowStep3: string;
    workflowStep3Desc: string;
    workflowStep4: string;
    workflowStep4Desc: string;
  };
  quality: {
    title: string;
    subtitle: string;
    commitment: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    point4Title: string;
    point4Desc: string;
  };
  video: {
    tag: string;
    title: string;
    subtitle: string;
    caption: string;
    play: string;
    pause: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  faq: {
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
  };
  contact: {
    title: string;
    subtitle: string;
    directLead: string;
    directLeadSub: string;
    formTitle: string;
    formSubtitle: string;
    namePlaceholder: string;
    companyPlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    countryPlaceholder: string;
    productSelectLabel: string;
    volumePlaceholder: string;
    incotermLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    copyInquiry: string;
    inquiryCopied: string;
    successMessage: string;
    directPhoneAction: string;
    directWhatsappAction: string;
    directEmailAction: string;
    privacyConsent: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    mineralsTitle: string;
    contactTitle: string;
    legalTitle: string;
    privacyPolicy: string;
    termsOfUse: string;
    rightsReserved: string;
    disclaimer: string;
  };
}

export const TRANSLATIONS: Record<Language, I18nContent> = {
  pt: {
    nav: {
      home: 'Início',
      minerals: 'Catálogo de Minérios',
      about: 'A Empresa',
      logistics: 'Logística & Portos',
      quality: 'Qualidade & Laudos',
      video: 'Operações & Vídeo',
      faq: 'FAQ',
      contact: 'Contato Comercial',
      requestQuote: 'Solicitar Cotação'
    },
    hero: {
      title: 'Minérios Brasileiros.',
      highlight: 'Oportunidades Globais.',
      subtitle: 'Comercialização e exportação internacional direta de matérias-primas minerais do Brasil. Consulte teores, volumes disponíveis e condições de fornecimento para atendimento à indústria global.',
      ctaExplore: 'Explorar Catálogo de Minérios',
      metric1Label: 'Grupos de Minérios',
      metric1Value: '07 Produtos',
      metric1Sub: 'Ferro, Mn, Sílica, Li, Cu, W, Sn',
      metric2Label: 'Portos de Embarque',
      metric2Value: '03 Terminais',
      metric2Sub: 'Barcarena, Salvador e Pecém',
      metric3Label: 'Inspeção Independente',
      metric3Value: 'SGS / Certificado',
      metric3Sub: 'Peso e ensaio analítico pré-embarque',
      metric4Label: 'Atendimento Comercial',
      metric4Value: 'Direto B2B',
      metric4Sub: 'Consultas técnicas e comerciais sob demanda'
    },
    about: {
      title: 'Sobre a MVR Engenharia',
      subtitle: 'Estrutura brasileira de comercialização e exportação de matérias-primas minerais',
      p1: 'A MVR Engenharia atua como elo confiável no fornecimento de minerais e commodities industriais de origem brasileira para os mercados mais exigentes do mundo. Operamos com transparência comercial, foco em especificações técnicas e interlocução direta com compradores internacionais, tradings e siderúrgicas.',
      p2: 'Nossa abordagem prioriza a fidelidade estrita às características comprovadas de cada jazida e lote, garantindo que cada negociação internacional conte com parâmetros claros de inspeção (SGS ou equivalente) e segurança documental em todas as etapas de embarque.',
      pillar1Title: 'Portfólio Diversificado',
      pillar1Desc: 'Sete grupos de minérios estratégicos: Ferro, Manganês, Sílica ultrafina, Lítio, Cobre, Tungstênio e Cassiterita.',
      pillar2Title: 'Atendimento Comercial Direto',
      pillar2Desc: 'Interlocução imediata com a equipe comercial responsável, sem intermediários desnecessários.',
      pillar3Title: 'Portos Estratégicos',
      pillar3Desc: 'Operações coordenadas a partir de Barcarena (PA), Salvador (BA) e Pecém (CE) para otimização de fretes marítimos.',
      pillar4Title: 'Rigor & Transparência',
      pillar4Desc: 'Clara diferenciação entre teores informados no documento original e parâmetros sujeitos a laudos específicos por contrato.'
    },
    minerals: {
      title: 'Catálogo de Minérios Disponíveis',
      subtitle: 'Acesse especificações químicas, fotos reais das jazidas, portos de saída e embalagens',
      allFilter: 'Todos os Minérios (7)',
      filterFerrous: 'Ferro & Manganês',
      filterStrategic: 'Lítio, Cobre & Tungstênio',
      filterIndustrial: 'Sílica & Cassiterita',
      viewDetails: 'Dossiê Técnico & Fotos Reais',
      requestSample: 'Solicitar Cotação',
      primaryGradeLabel: 'Teor / Pureza',
      portLabel: 'Porto de Embarque',
      packagingLabel: 'Acondicionamento',
      volumeLabel: 'Volume Referência',
      statusConfirmed: 'Dado Confirmado',
      statusPending: 'Pendente de Confirmação Contratual',
      pendingNote: 'Parâmetros específicos de cada lote são formalizados sob contrato de fornecimento bilateral.',
      tabRealPhoto: 'Foto Real do Minério',
      tabCrystalScheme: 'Esquema Estrutural'
    },
    modal: {
      overviewTab: 'Visão Geral & Aplicações',
      galleryTab: 'Galeria Fotográfica Real',
      specsTab: 'Composição Química',
      logisticsTab: 'Embarque & Logística',
      inquiryTab: 'Solicitar Cotação Direta',
      chemicalComposition: 'Especificação Química do Minério',
      compExplanation: 'Composição química informada na documentação de exportação. Os percentuais confirmados foram conferidos na fonte.',
      elementCol: 'Elemento / Composto',
      formulaCol: 'Fórmula',
      valueCol: 'Teor Informado',
      statusCol: 'Status Verificação',
      applicationsTitle: 'Aplicações Industriais Confirmadas',
      verificationStatusTitle: 'Pontos sob Validação Técnica para este Lote',
      contractDuration: 'Contrato Mínimo Sugerido',
      paymentMechanism: 'Condição de Pagamento Indicada',
      modalClose: 'Fechar Janela',
      directContactWith: 'Falar diretamente com a Mesa Comercial',
      phoneLink: 'Ligar para +55 71 99198-8787',
      whatsappLink: 'Mensagem via WhatsApp',
      emailLink: 'Enviar E-mail Comercial',
      quoteButton: 'Solicitar Condições Comerciais para este Minério'
    },
    logistics: {
      title: 'Exportação, Portos & Logística Internacional',
      subtitle: 'Infraestrutura marítima brasileira conectada aos principais hubs industriais globais',
      intro: 'O fornecimento internacional de minérios exige sincronia entre mina, transporte rodoviário/ferroviário e os terminais portuários brasileiros de águas profundas. Conheça as principais rotas de embarque da MVR Engenharia:',
      portBarcarenaTitle: 'Porto de Barcarena (Pará)',
      portSalvadorTitle: 'Porto de Salvador (Bahia)',
      portPecemTitle: 'Porto de Pecém (Ceará)',
      inspectionTitle: 'Inspeção Independente de Carga (SGS)',
      inspectionDesc: 'Todas as operações preveem inspeção independente de peso (draft survey / balança) e análise química por amostragem certificada antes da emissão do conhecimento de embarque (Bill of Lading).',
      paymentTitle: 'Instrumentos Financeiros Seguros',
      paymentDesc: 'Condição documentada: SBLC (Standby Letter of Credit) rotativa, irrevogável, transferível e divisível, garantindo previsibilidade para comprador e vendedor.',
      incotermsTitle: 'Incoterms & Destinos Globais',
      incotermsDesc: 'Atendimento nas modalidades FOB (Porto Brasileiro) ou CIF/CFR conforme negociação específica para portos na Ásia, Europa e Américas.',
      workflowStep1: '01. Consulta Comercial',
      workflowStep1Desc: 'Envio da solicitação com volume, especificação e porto de destino desejado.',
      workflowStep2: '02. Ficha Técnica & Alocação',
      workflowStep2Desc: 'Confirmação de janela de carregamento, especificação analítica e minuta de fornecimento.',
      workflowStep3: '03. Abertura do Instrumento',
      workflowStep3Desc: 'Emissão e aceite da garantia bancária (SBLC) entre bancos de primeira linha.',
      workflowStep4: '04. Carregamento & Liberação',
      workflowStep4Desc: 'Inspeção SGS no porto, estufagem/carregamento no navio e liberação de documentos originais.'
    },
    quality: {
      title: 'Qualidade & Transparência Técnica',
      subtitle: 'Compromisso com dados verificáveis e integridade em cada especificação mineral',
      commitment: 'A MVR Engenharia pauta sua atuação no fornecimento de dados transparentes. Não realizamos promessas de especificações sem laudo laboratorial correspondente.',
      point1Title: 'Laudos Analíticos Certificados',
      point1Desc: 'Ensaios realizados por laboratórios mineralógicos independentes por fluorescência de raios-X (XRF) e espectrometria ICP.',
      point2Title: 'Controle de Umidade & Granulometria',
      point2Desc: 'Monitoramento rigoroso de índices de umidade e curvas granulométricas conforme a necessidade do processo siderúrgico ou industrial.',
      point3Title: 'Cadeia de Custódia Rastreável',
      point3Desc: 'Acompanhamento do lote desde a lavra/jazida autorizada até o pátio portuário de estocagem.',
      point4Title: 'Prevenção de Ambiguidade Contratual',
      point4Desc: 'Cada aditivo contratual define tolerâncias de bônus e penalidade para teores químicos, garantindo equidade negocial.'
    },
    video: {
      tag: 'Operações em Foco',
      title: 'Cadeia de Fornecimento & Infraestrutura Marítima',
      subtitle: 'Acompanhe a escala da mineração brasileira e a dinâmica dos terminais de águas profundas',
      caption: 'Movimentação e carregamento de navios graneleiros Panamax e Capesize nos portos brasileiros.',
      play: 'Reproduzir Vídeo',
      pause: 'Pausar',
      feature1Title: 'Terminais de Calado Profundo',
      feature1Desc: 'Operações contínuas em Barcarena e Pecém com calados de até 17,5 metros para navios oceânicos.',
      feature2Title: 'Rastreabilidade de Jazida',
      feature2Desc: 'Controle físico-químico rigoroso desde a frente de lavra até a pesagem portuária certificada.',
      feature3Title: 'Inspeção Independente',
      feature3Desc: 'Amostragem em tempo real e verificação SGS durante todo o fluxo de esteira e estufagem.'
    },
    faq: {
      title: 'Perguntas Frequentes (FAQ)',
      subtitle: 'Esclarecimentos sobre procedimentos de fornecimento, pagamento e contratação internacional',
      q1: 'Quais são os instrumentos de pagamento aceitos para exportação?',
      a1: 'A modalidade padrão documentada é SBLC (Standby Letter of Credit) rotativa, irrevogável, transferível e divisível. O pagamento é liquidado contra a apresentação do certificado de peso e qualidade emitido por certificadora independente (SGS ou equivalente) antes do embarque.',
      q2: 'Existe contrato com prazo mínimo de fornecimento?',
      a2: 'Sim. Os contratos de fornecimento contínuo preveem vigência padrão de 12 meses para os principais lotes (Ferro, Manganês, Sílica e Lítio), permitindo estabilidade de suprimento para as plantas industriais compradoras.',
      q3: 'Como é feita a inspeção da carga antes do navio zarpar?',
      a3: 'A carga é inspecionada diretamente no porto de embarque brasileiro (Barcarena, Salvador ou Pecém) por inspetores independentes credenciados (SGS, Alex Stewart ou equivalente), que realizam a amostragem contínua durante o carregamento dos porões ou estufagem dos contêineres.',
      q4: 'Como solicitar amostras ou laudo laboratorial completo de um produto?',
      a4: 'Basta entrar em contato diretamente com a equipe comercial informando a razão social da empresa compradora, produto de interesse e porto de destino pretendido. Os laudos laboratoriais vigentes são compartilhados após alinhamento do escopo de compra.',
      q5: 'Qual a diferença entre carga a granel e big bags no catálogo?',
      a5: 'Minérios de alto volume volumétrico como Minério de Ferro (Fe 62%) e Minério de Manganês (42,28%) são expedidos a granel diretamente nos porões de navios graneleiros em Barcarena. Minérios de alta pureza ou especiais (como Sílica, Lítio, Cobre e Tungstênio) são acondicionados em big bags de 1.000 kg ou sacos de 50 kg para máxima proteção.',
      q6: 'Quais documentos de exportação acompanham a carga?',
      a6: 'O embarque acompanha o Conhecimento de Embarque Marítimo (Bill of Lading - B/L), Fatura Comercial (Commercial Invoice), Packing List, Certificado de Peso e Qualidade SGS, Certificado de Origem brasileiro e laudos alfandegários pertinentes.'
    },
    contact: {
      title: 'Contato Comercial Direto',
      subtitle: 'Inicie sua consulta de fornecimento diretamente com a liderança comercial da MVR Engenharia',
      directLead: 'Marcus Ribeiro',
      directLeadSub: 'Responsável Comercial & Exportações Internacionais',
      formTitle: 'Solicitação Formal de Cotação',
      formSubtitle: 'Preencha os dados da sua empresa para receber especificações, disponibilidade e condições de fornecimento.',
      namePlaceholder: 'Nome completo do solicitante',
      companyPlaceholder: 'Razão social da empresa compradora',
      emailPlaceholder: 'E-mail corporativo',
      phonePlaceholder: 'Telefone / WhatsApp com código do país',
      countryPlaceholder: 'País de destino da mercadoria',
      productSelectLabel: 'Minério de Interesse',
      volumePlaceholder: 'Volume pretendido (MT ou MTU)',
      incotermLabel: 'Incoterm Preferencial (FOB / CIF / CFR)',
      messagePlaceholder: 'Descreva os requisitos técnicos, aplicação industrial ou especificações desejadas...',
      submitButton: 'Enviar Solicitação Comercial',
      copyInquiry: 'Copiar Mensagem Formatada',
      inquiryCopied: 'Mensagem copiada para a área de transferência!',
      successMessage: 'Solicitação registrada com sucesso! Nossa equipe entrará em contato prontamente.',
      directPhoneAction: 'Ligar para Marcus Ribeiro',
      directWhatsappAction: 'Iniciar Conversa no WhatsApp',
      directEmailAction: 'Enviar E-mail Direto',
      privacyConsent: 'Concordo com o tratamento dos dados comerciais fornecidos exclusivamente para a finalidade desta cotação (em conformidade com a LGPD).'
    },
    footer: {
      tagline: 'Comercialização e exportação internacional de minérios brasileiros com transparência técnica e excelência operacional.',
      quickLinks: 'Navegação Institucional',
      mineralsTitle: 'Minérios Disponíveis',
      contactTitle: 'Contato Comercial',
      legalTitle: 'Informações Legais',
      privacyPolicy: 'Política de Privacidade',
      termsOfUse: 'Termos de Uso',
      rightsReserved: 'Todos os direitos reservados.',
      disclaimer: 'Disponibilidades, teores exatos e condições comerciais são formalizados sob contrato específico.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      minerals: 'Minerals Catalog',
      about: 'About Us',
      logistics: 'Logistics & Ports',
      quality: 'Quality & Assays',
      video: 'Operations & Video',
      faq: 'FAQ',
      contact: 'Commercial Contact',
      requestQuote: 'Request a Quote'
    },
    hero: {
      title: 'Brazilian Minerals.',
      highlight: 'Global Opportunities.',
      subtitle: 'Direct commercial supply and international export of premium Brazilian raw minerals. Inquire on grades, available tonnages and export conditions for global industrial buyers.',
      ctaExplore: 'Explore Minerals Portfolio',
      metric1Label: 'Mineral Product Groups',
      metric1Value: '07 Products',
      metric1Sub: 'Iron, Mn, Silica, Li, Cu, W, Sn',
      metric2Label: 'Deepwater Ports',
      metric2Value: '03 Gateways',
      metric2Sub: 'Barcarena, Salvador and Pecém',
      metric3Label: 'Independent Inspection',
      metric3Value: 'SGS / Certified',
      metric3Sub: 'Pre-shipment draft and assay verification',
      metric4Label: 'Commercial Access',
      metric4Value: 'Direct B2B',
      metric4Sub: 'Technical & commercial inquiries on demand'
    },
    about: {
      title: 'About MVR Engenharia',
      subtitle: 'Brazilian mineral supply and international commodities trading framework',
      p1: 'MVR Engenharia serves as a trusted conduit delivering industrial raw minerals from premier Brazilian geological formations to world-class industrial buyers, metallurgical smelters, and international trading houses.',
      p2: 'Our approach is rooted in rigorous technical truthfulness: we present confirmed source assays transparently, mandate independent third-party inspection (SGS or equivalent) at loading ports, and structure bankable commercial agreements for long-term supply stability.',
      pillar1Title: 'Comprehensive Portfolio',
      pillar1Desc: 'Seven strategic mineral groups: Iron Ore, Manganese Ore, Ultrafine Silica, Lithium, Copper, Tungsten, and Cassiterite.',
      pillar2Title: 'Direct Commercial Leadership',
      pillar2Desc: 'Direct access to authorized commercial managers, eliminating unnecessary broker layers.',
      pillar3Title: 'Strategic Coastal Gateways',
      pillar3Desc: 'Shipments orchestrated via Barcarena (PA), Salvador (BA), and Pecém (CE) for optimized global freight rates.',
      pillar4Title: 'Analytical Rigor',
      pillar4Desc: 'Transparent distinction between baseline grades and parcel contract assays.'
    },
    minerals: {
      title: 'Export Mineral Catalog',
      subtitle: 'Explore chemical assays, authentic deposit photography, loading ports and packing options',
      allFilter: 'All Minerals (7)',
      filterFerrous: 'Iron & Manganese',
      filterStrategic: 'Lithium, Copper & Tungsten',
      filterIndustrial: 'Silica & Cassiterite',
      viewDetails: 'Technical Dossier & Real Photos',
      requestSample: 'Request a Quote',
      primaryGradeLabel: 'Grade / Purity',
      portLabel: 'Port of Loading',
      packagingLabel: 'Packaging',
      volumeLabel: 'Reference Volume',
      statusConfirmed: 'Confirmed Parameter',
      statusPending: 'Subject to Contractual Validation',
      pendingNote: 'Specific parcel cut-offs are formalized under individual bilateral supply contracts.',
      tabRealPhoto: 'Authentic Mineral Photo',
      tabCrystalScheme: 'Crystal Diagram'
    },
    modal: {
      overviewTab: 'Overview & Applications',
      galleryTab: 'Real Photo Gallery',
      specsTab: 'Chemical Composition',
      logisticsTab: 'Shipping & Logistics',
      inquiryTab: 'Direct Quotation Request',
      chemicalComposition: 'Mineral Chemical Specification',
      compExplanation: 'Chemical assay documented in export records. Verified percentages have been authenticated directly from source logs.',
      elementCol: 'Element / Oxide',
      formulaCol: 'Formula',
      valueCol: 'Documented Assay',
      statusCol: 'Verification Status',
      applicationsTitle: 'Confirmed Industrial Applications',
      verificationStatusTitle: 'Points Under Contractual Validation for this Lot',
      contractDuration: 'Recommended Minimum Contract',
      paymentMechanism: 'Documented Payment Instrument',
      modalClose: 'Close Window',
      directContactWith: 'Direct Contact with Commercial Desk',
      phoneLink: 'Call +55 71 99198-8787',
      whatsappLink: 'WhatsApp Chat',
      emailLink: 'Send Commercial Email',
      quoteButton: 'Request Commercial Terms for this Mineral'
    },
    logistics: {
      title: 'Export Operations, Ports & International Logistics',
      subtitle: 'Brazilian deepwater infrastructure interconnected with leading global manufacturing hubs',
      intro: 'International mineral trading demands seamless synchronization between mining sites, freight rail corridors, and Brazil’s deepwater ocean terminals. Key export gateways operated by MVR Engenharia include:',
      portBarcarenaTitle: 'Port of Barcarena (Pará)',
      portSalvadorTitle: 'Port of Salvador (Bahia)',
      portPecemTitle: 'Port of Pecém Industrial Hub (Ceará)',
      inspectionTitle: 'Independent Cargo Inspection (SGS)',
      inspectionDesc: 'All maritime shipments incorporate certified independent draft surveys and chemical sampling by internationally recognized surveyors prior to the issuance of negotiable Bills of Lading.',
      paymentTitle: 'Bankable Financial Instruments',
      paymentDesc: 'Documented framework: Revolving, irrevocable, transferable, and divisible Standby Letter of Credit (SBLC), guaranteeing mutual security for international buyers and sellers.',
      incotermsTitle: 'Incoterms & Global Reach',
      incotermsDesc: 'Quotations provided on FOB (Brazilian Port), CFR, or CIF basis to designated discharge terminals in Asia, Europe, and the Americas.',
      workflowStep1: '01. Commercial Inquiry',
      workflowStep1Desc: 'Buyer submits target grade, intended tonnage, and destination discharge port.',
      workflowStep2: '02. Technical Dossier & Allocation',
      workflowStep2Desc: 'MVR Engenharia confirms laycan availability, current assay sheet, and supply draft.',
      workflowStep3: '03. Banking Instrument Issuance',
      workflowStep3Desc: 'Issuance and acceptance of confirmed SBLC through premier international banking institutions.',
      workflowStep4: '04. Loading & Document Release',
      workflowStep4Desc: 'Independent port inspection, vessel hold loading, and release of negotiable shipping documents.'
    },
    quality: {
      title: 'Quality Standards & Technical Transparency',
      subtitle: 'Uncompromising commitment to verifiable data and contract integrity in mineral trading',
      commitment: 'MVR Engenharia operates with strict adherence to authentic metallurgical data. We never promise speculative specifications without substantiated laboratory assays.',
      point1Title: 'Certified Analytical Assays',
      point1Desc: 'Independent laboratory testing via X-ray fluorescence (XRF) and inductively coupled plasma (ICP) spectrometry.',
      point2Title: 'Moisture & Particle Size Control',
      point2Desc: 'Rigorous determination of free moisture contents and sieve sizing cut-offs aligned with furnace operational limits.',
      point3Title: 'Traceable Chain of Custody',
      point3Desc: 'Full traceability from licensed Brazilian concession extraction through dedicated port stockpile storage.',
      point4Title: 'Equitable Contractual Tolerances',
      point4Desc: 'Clear, standardized commercial penalty and bonus schedules for minor elemental variations.'
    },
    video: {
      tag: 'Operations in Focus',
      title: 'Supply Chain & Deepwater Maritime Infrastructure',
      subtitle: 'Observe the magnitude of Brazilian mining operations and international bulk carrier berthing',
      caption: 'Continuous conveyor loading and handling of Panamax and Capesize bulk carriers at Brazilian ports.',
      play: 'Play Video',
      pause: 'Pause',
      feature1Title: 'Deepwater Terminal Drafts',
      feature1Desc: 'Year-round operations in Barcarena and Pecém with drafts up to 17.5 meters accommodating Capesize vessels.',
      feature2Title: 'Concession Traceability',
      feature2Desc: 'Strict physical and chemical monitoring from open-pit mining faces to certified port stockpiles.',
      feature3Title: 'Independent Verification',
      feature3Desc: 'Real-time representative sampling and SGS inspection throughout ship hold and container loading.'
    },
    faq: {
      title: 'Frequently Asked Questions (FAQ)',
      subtitle: 'Clear guidance on international procurement, payment structures, and export logistics',
      q1: 'What payment instruments are accepted for international export orders?',
      a1: 'The standard payment mechanism is a revolving, irrevocable, transferable, and divisible Standby Letter of Credit (SBLC). Settlement is executed against independent pre-shipment Quality and Weight inspection certificates issued by SGS or equivalent.',
      q2: 'What is the standard contract term for mineral supply?',
      a2: 'Standard continuous supply contracts stipulate a 12-month framework for key bulk parcels (Iron Ore, Manganese Ore, Silica, and Lithium), assuring buyers consistent supply predictability.',
      q3: 'How is product quality verified before the vessel departs Brazil?',
      a3: 'Cargo is inspected directly at the designated loading berth (Barcarena, Salvador, or Pecém) by independent accredited surveyors (SGS, Alex Stewart, or Bureau Veritas), taking representative samples throughout continuous loading.',
      q4: 'How can qualified buyers request full laboratory assays or test samples?',
      a4: 'Buyers are invited to contact the commercial desk specifying company credentials, product requirement, and destination port. Current assay sheets and parcel allocations are shared following qualified commercial review.',
      q5: 'What is the difference between bulk cargo and big-bag packaging in the catalog?',
      a5: 'Heavy bulk commodities such as Iron Ore (Fe ~62%) and Manganese Ore (42.28% Mn) are loaded in bulk directly into the holds of vessels in Barcarena. Specialty minerals (Ultrafine Silica, Lithium, Copper, Tungsten) are packaged in 1,000 kg heavy big bags or containerized.',
      q6: 'Which export documents accompany every shipment?',
      a6: 'Every consignment is accompanied by a full set of clean-on-board Ocean Bills of Lading, Commercial Invoice, Detailed Packing List, SGS Certificate of Weight and Quality, Brazilian Certificate of Origin, and export customs manifests.'
    },
    contact: {
      title: 'Direct Commercial Contact',
      subtitle: 'Initiate your mineral procurement inquiries directly with MVR Engenharia commercial leadership',
      directLead: 'Marcus Ribeiro',
      directLeadSub: 'Commercial Director & Head of International Export',
      formTitle: 'Formal Quotation Request',
      formSubtitle: 'Submit your industrial requirements to receive current specifications, availability, and export conditions.',
      namePlaceholder: 'Full Name of representative',
      companyPlaceholder: 'Purchasing entity / Company name',
      emailPlaceholder: 'Corporate email address',
      phonePlaceholder: 'Phone / WhatsApp with country code',
      countryPlaceholder: 'Destination country / Port',
      productSelectLabel: 'Mineral of Interest',
      volumePlaceholder: 'Target Volume (MT or MTU)',
      incotermLabel: 'Preferred Incoterm (FOB / CIF / CFR)',
      messagePlaceholder: 'Please specify target grade requirements, annual demand, or furnace application...',
      submitButton: 'Submit Formal Inquiry',
      copyInquiry: 'Copy Formatted Inquiry',
      inquiryCopied: 'Inquiry copied to clipboard!',
      successMessage: 'Inquiry successfully registered! Our commercial executive will reach out promptly.',
      directPhoneAction: 'Call Marcus Ribeiro',
      directWhatsappAction: 'Open WhatsApp Chat',
      directEmailAction: 'Send Commercial Email',
      privacyConsent: 'I consent to the processing of submitted commercial data exclusively for the purpose of this procurement inquiry.'
    },
    footer: {
      tagline: 'International supply and export of premier Brazilian raw minerals with absolute technical transparency.',
      quickLinks: 'Navigation',
      mineralsTitle: 'Minerals Portfolio',
      contactTitle: 'Commercial Contact',
      legalTitle: 'Legal Information',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      rightsReserved: 'All rights reserved.',
      disclaimer: 'Disponibilidades, teores exatos e condições comerciais são formalizados sob contrato específico.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      minerals: 'Catálogo de Minerales',
      about: 'La Empresa',
      logistics: 'Logística y Puertos',
      quality: 'Calidad y Ensayos',
      video: 'Operaciones y Video',
      faq: 'Preguntas Frecuentes',
      contact: 'Contacto Comercial',
      requestQuote: 'Solicitar Cotización'
    },
    hero: {
      title: 'Minerales Brasileños.',
      highlight: 'Oportunidades Globales.',
      subtitle: 'Comercialización y exportación internacional directa de materias primas minerales de Brasil. Consulte leyes, volúmenes disponibles y condiciones de exportación para la industria global.',
      ctaExplore: 'Explorar Catálogo',
      metric1Label: 'Familias de Minerales',
      metric1Value: '07 Productos',
      metric1Sub: 'Hierro, Mn, Sílice, Li, Cu, W, Sn',
      metric2Label: 'Puertos de Embarque',
      metric2Value: '03 Terminales',
      metric2Sub: 'Barcarena, Salvador y Pecém',
      metric3Label: 'Inspección Independiente',
      metric3Value: 'SGS / Certificado',
      metric3Sub: 'Verificación de calado y análisis previo',
      metric4Label: 'Atención Comercial',
      metric4Value: 'Directa B2B',
      metric4Sub: 'Consultas técnicas y comerciales bajo demanda'
    },
    about: {
      title: 'Sobre MVR Engenharia',
      subtitle: 'Estructura brasileña de exportación y comercialización de minerales industriales',
      p1: 'MVR Engenharia opera como un socio comercial confiable en el suministro de minerales y materias primas de origen brasileño para industrias siderúrgicas, metalúrgicas y empresas de trading internacionales.',
      p2: 'Nuestra política comercial se fundamenta en la veracidad técnica: presentamos datos analíticos comprobados, respaldados por inspección independiente (SGS o equivalente) en los puertos de embarque y garantías bancarias seguras.',
      pillar1Title: 'Portafolio Diversificado',
      pillar1Desc: 'Siete grupos de minerales estratégicos: Hierro, Manganeso, Sílice ultrafina, Litio, Cobre, Tungsteno y Casiterita.',
      pillar2Title: 'Contacto Comercial Directo',
      pillar2Desc: 'Atención personalizada con el equipo comercial responsable, sin intermediarios innecesarios.',
      pillar3Title: 'Puertos Estratégicos',
      pillar3Desc: 'Operaciones centralizadas en Barcarena (PA), Salvador (BA) y Pecém (CE) para optimizar costos de flete marítimo.',
      pillar4Title: 'Transparencia Técnica',
      pillar4Desc: 'Clara separación entre datos informados y parámetros específicos de cada lote.'
    },
    minerals: {
      title: 'Catálogo de Minerales de Exportación',
      subtitle: 'Consulte análisis químicos, fotos reales de los yacimientos, puertos de carga y embalaje',
      allFilter: 'Todos los Minerales (7)',
      filterFerrous: 'Hierro y Manganeso',
      filterStrategic: 'Litio, Cobre y Tungsteno',
      filterIndustrial: 'Sílice y Casiterita',
      viewDetails: 'Dossier Técnico y Fotos Reales',
      requestSample: 'Solicitar Cotización',
      primaryGradeLabel: 'Ley / Pureza',
      portLabel: 'Puerto de Embarque',
      packagingLabel: 'Acondicionamiento',
      volumeLabel: 'Volumen Referencia',
      statusConfirmed: 'Dato Confirmado',
      statusPending: 'Sujeto a Validación Contractual',
      pendingNote: 'Las especificaciones exactas se formalizan mediante contrato de suministro bilateral.',
      tabRealPhoto: 'Fotografía Real del Mineral',
      tabCrystalScheme: 'Esquema Estructural'
    },
    modal: {
      overviewTab: 'Visión General y Usos',
      galleryTab: 'Galería Fotográfica Real',
      specsTab: 'Composición Química',
      logisticsTab: 'Embarque y Logística',
      inquiryTab: 'Solicitar Cotización',
      chemicalComposition: 'Especificación Química del Mineral',
      compExplanation: 'Composición informada en la documentación oficial de exportación. Los porcentajes han sido cotejados en la fuente.',
      elementCol: 'Elemento / Óxido',
      formulaCol: 'Fórmula',
      valueCol: 'Ley Informada',
      statusCol: 'Estado de Verificación',
      applicationsTitle: 'Aplicaciones Industriales Confirmadas',
      verificationStatusTitle: 'Aspectos en Validación Técnica para este Lote',
      contractDuration: 'Duración Mínima de Contrato',
      paymentMechanism: 'Instrumento de Pago Indicado',
      modalClose: 'Cerrar Ventana',
      directContactWith: 'Contacto Directo con Mesa Comercial',
      phoneLink: 'Llamar a +55 71 99198-8787',
      whatsappLink: 'Chat por WhatsApp',
      emailLink: 'Enviar Correo Comercial',
      quoteButton: 'Solicitar Condiciones para este Mineral'
    },
    logistics: {
      title: 'Exportación, Puertos y Logística Internacional',
      subtitle: 'Infraestructura marítima de gran calado conectada a los mayores centros industriales mundiales',
      intro: 'El suministro internacional de minerales requiere coordinación entre extracción, transporte y terminales portuarias brasileñas de aguas profundas. Conozca nuestros puertos:',
      portBarcarenaTitle: 'Puerto de Barcarena (Pará)',
      portSalvadorTitle: 'Puerto de Salvador (Bahía)',
      portPecemTitle: 'Puerto Industrial de Pecém (Ceará)',
      inspectionTitle: 'Inspección Independiente de Carga (SGS)',
      inspectionDesc: 'Todos los embarques incluyen inspección independiente de calado, peso y análisis químico por muestreo antes de emitir el conocimiento de embarque (B/L).',
      paymentTitle: 'Instrumentos Financieros Bancarios',
      paymentDesc: 'Condición base: SBLC (Standby Letter of Credit) rotativa, irrevocable, transferible y divisible, que otorga plena seguridad jurídica.',
      incotermsTitle: 'Incoterms y Destinos Globales',
      incotermsDesc: 'Cotizaciones en condiciones FOB (puertos brasileños), CFR o CIF hacia puertos en Asia, Europa y América.',
      workflowStep1: '01. Consulta Comercial',
      workflowStep1Desc: 'Envío de requerimiento con volumen, ley deseada y puerto de descarga.',
      workflowStep2: '02. Dossier y Asignación',
      workflowStep2Desc: 'Confirmación de ventana de carga, ficha de análisis y borrador de contrato.',
      workflowStep3: '03. Apertura Bancaria',
      workflowStep3Desc: 'Emisión y confirmación de la SBLC a través de bancos internacionales de primer nivel.',
      workflowStep4: '04. Carga y Documentación',
      workflowStep4Desc: 'Inspección SGS en muelle, estiba y entrega de documentación marítima negociable.'
    },
    quality: {
      title: 'Calidad y Transparencia Técnica',
      subtitle: 'Compromiso con datos reales y confiabilidad en cada especificación mineral',
      commitment: 'MVR Engenharia fundamenta sus negocios en especificaciones rigurosas. No emitimos promesas comerciales sin respaldo de análisis laboratoriales.',
      point1Title: 'Ensayos Analíticos Certificados',
      point1Desc: 'Pruebas analíticas mediante fluorescencia de rayos X (FRX) y espectrometría ICP en laboratorios independientes.',
      point2Title: 'Control de Humedad y Granulometría',
      point2Desc: 'Monitoreo de contenido de humedad libre y mallas granulométricas conforme a las exigencias de fundición.',
      point3Title: 'Cadena de Custodia Rastreable',
      point3Desc: 'Seguimiento desde yacimientos mineros formalizados hasta el acopio portuario.',
      point4Title: 'Tolerancias Contractuales Claras',
      point4Desc: 'Esquemas transparentes de bonificación y penalización para ajustes de ley en contrato.'
    },
    video: {
      tag: 'Operaciones en Foco',
      title: 'Cadena de Suministro e Infraestructura Marítima',
      subtitle: 'Vea la magnitud de las operaciones mineras y el atraque de buques graneleros en Brasil',
      caption: 'Carga continua por cinta transportadora de buques Panamax y Capesize en puertos brasileños.',
      play: 'Reproducir Video',
      pause: 'Pausar',
      feature1Title: 'Calado Profundo Oceánico',
      feature1Desc: 'Operaciones todo el año en Barcarena y Pecém con calados de hasta 17,5 metros para grandes navíos.',
      feature2Title: 'Trazabilidad de Yacimiento',
      feature2Desc: 'Control físico-químico riguroso desde el frente de cantera hasta el pesaje oficial certificado.',
      feature3Title: 'Inspección Independiente',
      feature3Desc: 'Muestreo representativo continuo e inspección SGS durante toda la carga de bodegas.'
    },
    faq: {
      title: 'Preguntas Frecuentes (FAQ)',
      subtitle: 'Respuestas a consultas habituales de compradores internacionales sobre contratos y logística',
      q1: '¿Cuáles son las modalidades de pago aceptadas para exportación?',
      a1: 'La condición documentada es mediante carta de crédito contingente (SBLC) rotativa, irrevocable, transferible y divisible. El pago se liquida contra presentación del certificado de peso y calidad emitido por certificadora independiente (SGS o equivalente) en el puerto de carga.',
      q2: '¿Cuál es el plazo contractual mínimo para el suministro?',
      a2: 'Los contratos de suministro continuo contemplan vigencia estándar de 12 meses de duración para los minerales principales (Hierro, Manganeso, Sílice y Litio), garantizando previsibilidad de abastecimiento.',
      q3: '¿Cómo se inspecciona la carga antes de la salida del buque?',
      a3: 'La carga es inspeccionada en el muelle de embarque (Barcarena, Salvador o Pecém) por inspectores acreditados (SGS, Alex Stewart o equivalente) mediante muestreo continuo durante la carga de bodegas o contenedores.',
      q4: '¿Cómo solicitar muestras o la ficha de laboratorio completa?',
      a4: 'Comuníquese directamente con la mesa comercial indicando razón social, producto y puerto de destino. Los informes actualizados se suministran tras el análisis de la consulta comercial.',
      q5: '¿Qué diferencia hay entre carga a granel y big bags?',
      a5: 'Minerales de gran volumen como el Mineral de Hierro (Fe 62%) y el Mineral de Manganeso (42,28%) se cargan a granel directamente en bodegas de barcos graneleros en Barcarena. Minerales especiales (Sílice, Litio, Cobre, Tungsteno) se despachan en big bags de 1.000 kg para preservar su calidad.',
      q6: '¿Qué documentos de exportación acompañan cada despacho?',
      a6: 'Cada embarque cuenta con juego completo de Conocimientos de Embarque (B/L), Factura Comercial, Lista de Empaque, Certificado de Peso y Calidad SGS, Certificado de Origen brasileño y despachos aduaneros correspondientes.'
    },
    contact: {
      title: 'Contacto Comercial Directo',
      subtitle: 'Consulte condiciones de suministro con la dirección comercial de MVR Engenharia',
      directLead: 'Marcus Ribeiro',
      directLeadSub: 'Responsable Comercial y Exportaciones Internacionales',
      formTitle: 'Solicitud Formal de Cotización',
      formSubtitle: 'Indique los requerimientos de su empresa para recibir especificaciones, disponibilidad y términos comerciales.',
      namePlaceholder: 'Nombre completo del solicitante',
      companyPlaceholder: 'Razón social de la empresa compradora',
      emailPlaceholder: 'Correo electrónico corporativo',
      phonePlaceholder: 'Teléfono / WhatsApp con código de país',
      countryPlaceholder: 'País de destino / Puerto de descarga',
      productSelectLabel: 'Mineral de Interés',
      volumePlaceholder: 'Volumen pretendido (MT o MTU)',
      incotermLabel: 'Incoterm Preferencial (FOB / CIF / CFR)',
      messagePlaceholder: 'Especifique la ley deseada, aplicación industrial o requerimientos particulares...',
      submitButton: 'Enviar Solicitud Comercial',
      copyInquiry: 'Copiar Mensaje Formateado',
      inquiryCopied: '¡Mensaje copiado al portapapeles!',
      successMessage: '¡Solicitud registrada con éxito! Nuestro responsable comercial se comunicará a la brevedad.',
      directPhoneAction: 'Llamar a Marcus Ribeiro',
      directWhatsappAction: 'Iniciar Chat en WhatsApp',
      directEmailAction: 'Enviar Correo Electrónico',
      privacyConsent: 'Acepto el tratamiento de los datos comerciales suministrados exclusivamente para los fines de esta cotización.'
    },
    footer: {
      tagline: 'Suministro y exportación internacional de minerales brasileños con rigor técnico y seriedad operativa.',
      quickLinks: 'Navegación',
      mineralsTitle: 'Minerales Disponibles',
      contactTitle: 'Contacto Comercial',
      legalTitle: 'Información Legal',
      privacyPolicy: 'Política de Privacidad',
      termsOfUse: 'Términos de Uso',
      rightsReserved: 'Todos los derechos reservados.',
      disclaimer: 'Disponibilidades, teores exatos e condições comerciais são formalizados sob contrato específico.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      minerals: '矿石产品目录',
      about: '企业概况',
      logistics: '物流与港口',
      quality: '质量与化验',
      video: '矿业与海运视频',
      faq: '常见问题',
      contact: '商务联系',
      requestQuote: '索取正式报价'
    },
    hero: {
      title: '巴西优质矿产。',
      highlight: '连通全球工业。',
      subtitle: 'MVR Engenharia 专注于巴西优质工业大宗矿产及战略稀有矿石的国际海运出口。如需获取当前批次化验单、可供配额及贸易交货条件，欢迎直接咨询商务团队。',
      ctaExplore: '浏览矿石产品全览',
      metric1Label: '主要矿石品类',
      metric1Value: '07 大产品',
      metric1Sub: '铁矿、锰矿、高纯硅、锂、铜、钨、锡',
      metric2Label: '深水输出港口',
      metric2Value: '03 处主港',
      metric2Sub: '巴卡雷纳、萨尔瓦多与佩森港',
      metric3Label: '独立国际商检',
      metric3Value: 'SGS / 权威质检',
      metric3Sub: '装船前水尺计重与成分化验',
      metric4Label: '商务对接通道',
      metric4Value: 'B2B 直接洽谈',
      metric4Sub: '响应式技术与商务询盘对接'
    },
    about: {
      title: '关于 MVR Engenharia',
      subtitle: '立足巴西矿业资源，面向全球钢铁、新能源及高端制造业的直供平台',
      p1: 'MVR Engenharia 是巴西具有国际视野的矿产品贸易与出口服务商，专注于向全球钢铁集团、有色冶炼厂、新能源材料企业及国际贸易商提供稳定、合规的巴西优质矿石资源。',
      p2: '我们严格奉行实事求是的商业与技术准则：标示指标透明公开，所有发运均严格执行装运港第三方国际权威商检（SGS或同等资质），采用国际通行金融工具，保障买卖双方权益。',
      pillar1Title: '多元化战略矿产',
      pillar1Desc: '涵盖铁矿石 (Fe 62%)、锰矿石 (Mn 42.28%)、超细高纯二氧化硅、锂矿及碳酸锂、铜矿石、钨精矿及锡石等核心品类。',
      pillar2Title: '直通商务决策层',
      pillar2Desc: '直接对接负责团队，沟通高效明确，杜绝无授权中介环节。',
      pillar3Title: '深水港口物流枢纽',
      pillar3Desc: '整合巴卡雷纳港 (Barcarena)、萨尔瓦多港 (Salvador) 与佩森港 (Pecém)，实现最优国际海运运价与快速装船。',
      pillar4Title: '严谨可信的技术标准',
      pillar4Desc: '清楚界定官方检测指标与特定供货合同化验参数，绝不虚构技术参数。'
    },
    minerals: {
      title: '巴西出口矿石现货与长约目录',
      subtitle: '查阅全元素分析、实景矿石照片、发运装货港口及包装方案',
      allFilter: '全部矿石 (7)',
      filterFerrous: '铁矿石与锰矿石',
      filterStrategic: '锂、铜及钨精矿',
      filterIndustrial: '高纯硅石与锡石',
      viewDetails: '技术卷宗与实物实拍',
      requestSample: '索取报价与化验单',
      primaryGradeLabel: '核心品位 / 纯度',
      portLabel: '发运装运港口',
      packagingLabel: '包装方式',
      volumeLabel: '参考供货批量',
      statusConfirmed: '已核定参数',
      statusPending: '待双方协议核定项',
      pendingNote: '各批次具体物理筛分与全元素化验，均在双方签署的双边正式采购合同中明确。',
      tabRealPhoto: '矿石原物实拍照',
      tabCrystalScheme: '晶体结构示意'
    },
    modal: {
      overviewTab: '产品概述与工业应用',
      galleryTab: '矿石实景原貌图集',
      specsTab: '化学成分化验',
      logisticsTab: '航运与物流方案',
      inquiryTab: '直接提交询价',
      chemicalComposition: '矿石化学成分化验明细',
      compExplanation: '本表数据源自官方出口价格表与实验室化验记录。标示为“确认”的项目已与源文件逐一核验。',
      elementCol: '元素 / 化合物',
      formulaCol: '分子式',
      valueCol: '标示分析值',
      statusCol: '核验状态',
      applicationsTitle: '已验证核心工业应用',
      verificationStatusTitle: '针对该批次待买卖双方核定的技术要点',
      contractDuration: '建议最低供货协议周期',
      paymentMechanism: '标定结算方式',
      modalClose: '关闭窗口',
      directContactWith: '直接连线商业台总监',
      phoneLink: '国际直拨：+55 71 99198-8787',
      whatsappLink: '通过 WhatsApp 沟通',
      emailLink: '发送商务邮件',
      quoteButton: '索取本品当前报价与船期'
    },
    logistics: {
      title: '矿产出口、装运深水港与国际物流',
      subtitle: '巴西大西洋深水港区与全球各大工业枢纽的高效海运通道',
      intro: '跨国大宗矿石贸易对矿山出库、陆运接卸及深水港装船能力有着严苛要求。MVR Engenharia 依托巴西三大国际枢纽港口保障交付：',
      portBarcarenaTitle: '巴卡雷纳深水港 (Barcarena, Pará)',
      portSalvadorTitle: '萨尔瓦多港 (Salvador, Bahia)',
      portPecemTitle: '佩森现代化离岸港 (Pecém, Ceará)',
      inspectionTitle: 'SGS 独立第三方商检监装',
      inspectionDesc: '所有海运发运均在巴西装货港由国际认可的第三方权威机构（SGS 或同级）进行水尺计重 (Draft Survey) 与代表性连续采样化验，并在签发正本海运提单 (B/L) 前出具证书。',
      paymentTitle: '国际银行安全信用结算',
      paymentDesc: '载明结算方案：可循环、不可撤销、可转让、可分割的备用信用证 (SBLC)，为国际买家与供应商建立最牢固的履约屏障。',
      incotermsTitle: '贸易术语与全球海运港口',
      incotermsDesc: '支持 FOB（巴西港口离岸价）、CFR 或 CIF（目的港到岸价）交付，覆盖中国各大主港（青岛、日照、曹妃甸、舟山等）及欧洲、美洲各大枢纽。',
      workflowStep1: '01. 商务询盘',
      workflowStep1Desc: '买方提出目标产品、意向采购量、品位指标要求及目的口岸。',
      workflowStep2: '02. 卷宗与配额锁定',
      workflowStep2Desc: 'MVR Engenharia 核算船期档期 (Laycan)，提供现行化验单与供货合同草案。',
      workflowStep3: '03. 银行金融工具开立',
      workflowStep3Desc: '买方通过国际知名银行开立经双方认可的 SBLC 信用证担保。',
      workflowStep4: '04. 港口监装与单证交付',
      workflowStep4Desc: 'SGS在装货港完成质检验船，货物直装上船，银行交付全套正本议付单据。'
    },
    quality: {
      title: '质量保证与技术真实性',
      subtitle: '坚守真实化验数据，对每一个矿石品级信守承诺',
      commitment: 'MVR Engenharia 严格执行合规自律：我们绝不对未经验证的品位指标做出虚假承诺，一切以权威检测报告与合同条款为准。',
      point1Title: '权威仪器精密化验',
      point1Desc: '由独立认证矿产实验室通过 X 射线荧光光谱仪 (XRF) 及电感耦合等离子体光谱仪 (ICP) 测定全元素含量。',
      point2Title: '严格的水分与粒度控制',
      point2Desc: '全程监控货物自由水分与物理筛分曲线，完全匹配冶炼高炉或深加工生产线工况。',
      point3Title: '源头矿区全流程追溯',
      point3Desc: '从巴西国家矿业总署 (ANM) 授权合规采矿区到港口保税堆场，全链路合法合规监管。',
      point4Title: '清晰明确的合同浮动公差',
      point4Desc: '在供货协议中明确约定品位微调的奖罚结算规则 (Penalty/Bonus)，确保商业公平透明。'
    },
    video: {
      tag: '矿区与海运实景',
      title: '全流程大宗供应链与深水码头作业',
      subtitle: '了解巴西大型露天矿开采与万吨级远洋散货轮装船实景',
      caption: '巴西深水矿石码头输送系统对巴拿马型 (Panamax) 货轮进行全天候连续装载。',
      play: '播放视频',
      pause: '暂停',
      feature1Title: '17.5米超深水泊位',
      feature1Desc: '巴卡雷纳与佩森港具备超深吃水，可接卸好望角型及大型好运轮。',
      feature2Title: '采掘全程可追溯',
      feature2Desc: '自露天矿采掘面起至港口保税堆场，全程具备物理化学连续质检跟踪。',
      feature3Title: 'SGS全时独立监装',
      feature3Desc: '装船过程中由国际商检专家实施连续水尺计量与代表性实物取样。'
    },
    faq: {
      title: '常见问题解答 (FAQ)',
      subtitle: '关于巴西矿石采购流程、国际结算、质量检验与海运条款的权威说明',
      q1: '巴西矿石出口的标准结算方式是什么？',
      a1: '标准结算方式为由国际一流银行开立的可循环、不可撤销、可转让、可分割备用信用证 (SBLC)。货物装船前，以独立检验机构（SGS 或同级）在巴西港口出具的重量与品质商检报告作为付款兑付凭证。',
      q2: '采购合同是否有最低签约供货期限？',
      a2: '核心大宗产品（铁矿石、锰矿石、硅石和锂辉石）建议执行期限为 12 个月长期供货协议，以保障买方工厂原料供应的连续性与船期稳定性。',
      q3: '货物开航前如何确保品质与数量准确？',
      a3: '货物在巴西装运港（巴卡雷纳、萨尔瓦多或佩森港）由 SGS、Alex Stewart 等独立商检专家实施全程监装，包括水尺计重测量及代表性连续采样，确保货物品质与报告完全一致。',
      q4: '国际买家如何获取完整化验单或申请测试样品？',
      a4: '买家可直接与商务团队取得联系 (+55 71 99198-8787)，提供贵司企业资质、意向采购量及目的港口。经审核后，我们将第一时间发送最新的详细实验室化验单及供货卷宗。',
      q5: '散装货 (Bulk) 与吨袋 (Big Bags) 包装如何区分？',
      a5: '超大宗货品如铁矿石 (Fe 约62%) 与锰矿石 (Mn 42.28%) 均在巴卡雷纳深水码头通过输送带直接装入巴拿马型或灵便型大散货船船舱；特种高纯矿产（如超细硅石、锂产品、铜矿石、钨精矿）采用 1,000 公斤加厚内膜防潮吨袋或标准海运集装箱装运。',
      q6: '每批出口货物附带哪些完整的清关贸易单证？',
      a6: '每批船货均配备全套正本已装船海运提单 (Ocean B/L)、商业发票 (Commercial Invoice)、装箱单 (Packing List)、SGS 重量与品质检验证书、巴西官方原产地证书 (Certificate of Origin) 及完税报关清关单据。'
    },
    contact: {
      title: '直接对接商务总监',
      subtitle: '直接与 MVR Engenharia 核心商业团队沟通，快速开启采购评估',
      directLead: 'Marcus Ribeiro',
      directLeadSub: '国际商业贸易与出口业务负责人',
      formTitle: '提交正式采购询价表',
      formSubtitle: '请填写贵司采购需求，我们将迅速提供当期化学分析单、可供批次与国际海运条款。',
      namePlaceholder: '您的姓名 / 职务',
      companyPlaceholder: '采购企业名称 (Company Name)',
      emailPlaceholder: '企业工作电子邮箱',
      phonePlaceholder: '国际联系电话 / 微信 / WhatsApp (含国家代码)',
      countryPlaceholder: '目的国家 / 卸货目的港口',
      productSelectLabel: '目标采购矿石品类',
      volumePlaceholder: '计划采购量 (公吨 MT 或 MTU)',
      incotermLabel: '意向贸易条款 (FOB / CIF / CFR)',
      messagePlaceholder: '请注明您所需的技术指标、炉型要求或目标到港期...',
      submitButton: '提交正式询盘',
      copyInquiry: '复制询盘内容文本',
      inquiryCopied: '询盘文本已复制到剪贴板！',
      successMessage: '询盘已成功登记！我们的商务总监将尽快与您取得联系。',
      directPhoneAction: '拨打总监电话',
      directWhatsappAction: '打开 WhatsApp',
      directEmailAction: '发送商务邮件',
      privacyConsent: '本人同意仅为本次商业报价之目的使用所提交的企业信息（符合巴西数据保护法 LGPD 及国际商业准则）。'
    },
    footer: {
      tagline: '巴西优质矿产资源直供国际工业界，坚守数据真实，致力于长远稳健合作。',
      quickLinks: '站内快速导航',
      mineralsTitle: '出口矿产品种',
      contactTitle: '商务总监直联',
      legalTitle: '法律合规与准则',
      privacyPolicy: '数据隐私政策',
      termsOfUse: '服务与使用条款',
      rightsReserved: '保留所有权利。',
      disclaimer: 'Disponibilidades, teores exatos e condições comerciais são formalizados sob contrato específico.'
    }
  }
};
