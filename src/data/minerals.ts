export interface ChemicalSpec {
  element: string;
  formula: string;
  value: string;
  unit: string;
  status: 'confirmed' | 'pending';
}

export interface MineralProduct {
  id: string;
  slug: string;
  name: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  subtitle: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  chemicalSymbol: string;
  primaryGrade: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  mineralFamily: string;
  physicalForm: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  portOfLoading: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  portDetails: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  packaging: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  volumesMentioned: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  minContract: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  paymentTerms: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  incoterm: string;
  realPhotoUrl: string;
  galleryUrls: string[];
  photoCaption: {
    pt: string;
    en: string;
    es: string;
    zh: string;
  };
  applications: {
    pt: string[];
    en: string[];
    es: string[];
    zh: string[];
  };
  chemicalSpecs: ChemicalSpec[];
  pendingValidation: {
    pt: string[];
    en: string[];
    es: string[];
    zh: string[];
  };
  themeColor: {
    primary: string;
    accent: string;
    glow: string;
  };
}

export const MINERALS_DATA: MineralProduct[] = [
  {
    id: 'silica',
    slug: 'silica',
    name: {
      pt: 'Sílica Ultrafina',
      en: 'Ultrafine Silica',
      es: 'Sílice Ultrafina',
      zh: '超细高纯二氧化硅 (硅石)'
    },
    subtitle: {
      pt: 'Matéria-prima mineral de alta pureza para vidros, cerâmicas e tecnologias solares',
      en: 'High-purity raw mineral for glass, advanced ceramics and solar applications',
      es: 'Materia prima mineral de alta pureza para vidrio, cerámica y tecnología solar',
      zh: '用于高品质玻璃、先进陶瓷和光伏新能源的高纯矿物原料'
    },
    description: {
      pt: 'Sílica ultrafina de origem brasileira, indicada para aplicações industriais exigentes como vidros especiais, cerâmicas, tintas, compósitos e materiais para energia solar.',
      en: 'Ultrafine Brazilian silica, suitable for demanding industrial applications including specialty glass, ceramics, coatings, composites, and solar photovoltaic materials.',
      es: 'Sílice ultrafina de origen brasileño, indicada para aplicaciones industriales de alta exigencia como vidrios especiales, cerámica, pinturas, compuestos y energía solar.',
      zh: '巴西产高品质超细硅石，专为特种玻璃、高级陶瓷、涂料填料、高性能混凝土和太阳能光伏基材等高标准工业应用设计。'
    },
    chemicalSymbol: 'SiO₂',
    primaryGrade: {
      pt: 'Alta Pureza (Especificação sob consulta)',
      en: 'High Purity (Assay on request)',
      es: 'Alta Pureza (Bajo consulta)',
      zh: '高纯度等级（规格详询）'
    },
    mineralFamily: 'Silicates / Quartz',
    physicalForm: {
      pt: 'Pó ultrafino / granulado selecionado',
      en: 'Ultrafine powder / selected granular',
      es: 'Polvo ultrafino / granular seleccionado',
      zh: '超细粉末 / 精选颗粒'
    },
    portOfLoading: {
      pt: 'Porto de Salvador, Bahia, Brasil',
      en: 'Port of Salvador, Bahia, Brazil',
      es: 'Puerto de Salvador, Bahía, Brasil',
      zh: '巴西巴伊亚州萨尔瓦多港 (Port of Salvador)'
    },
    portDetails: {
      pt: 'Terminal portuário atlântico estruturado para estufagem de contêineres e cargas paletizadas.',
      en: 'Strategic Atlantic maritime terminal specialized in containerized freight and palleted big bags.',
      es: 'Terminal portuaria atlántica estructurada para contenedores y big bags paletizados.',
      zh: '大西洋深水港区，具备集装箱装载及大包装集装运输能力。'
    },
    packaging: {
      pt: 'Sacos de 50 kg e Big bags de 1.000 kg',
      en: '50 kg bags & 1,000 kg big bags',
      es: 'Sacos de 50 kg y Big bags de 1.000 kg',
      zh: '50公斤标准袋 及 1,000公斤集装袋 (Big Bags)'
    },
    volumesMentioned: {
      pt: '540 MT · 30.000 MT · 50.000 MT (conforme contrato)',
      en: '540 MT · 30,000 MT · 50,000 MT (per contract tier)',
      es: '540 MT · 30.000 MT · 50.000 MT (según contrato)',
      zh: '540 公吨 · 30,000 公吨 · 50,000 公吨（按协议批次）'
    },
    minContract: {
      pt: '12 meses (fornecimento contínuo)',
      en: '12 months (continuous supply contract)',
      es: '12 meses (suministro continuo)',
      zh: '12个月长期供应合同'
    },
    paymentTerms: {
      pt: 'SBLC rotativa, irrevogável, transferível e divisível. Pagamento pós-inspeção SGS ou equivalente pré-embarque.',
      en: 'Revolving, irrevocable, transferable and divisible SBLC. Payment upon SGS inspection or equivalent prior to vessel loading.',
      es: 'SBLC rotativa, irrevocable, transferible y divisible. Pago tras inspección SGS o equivalente antes del embarque.',
      zh: '可循环、不可撤销、可转让、可分割的备用信用证 (SBLC)。装船前凭SGS或同等第三方质检报告结算。'
    },
    incoterm: 'FOB / CIF under consultation',
    realPhotoUrl: '/images/silica.jpg',
    galleryUrls: ['/images/silica.jpg'],
    photoCaption: {
      pt: 'Amostra de quartzo natural e sílica de alta pureza com micro-cristais translúcidos.',
      en: 'High-purity natural quartz and silica specimen with translucent micro-facets.',
      es: 'Muestra de cuarzo natural y sílice de alta pureza con microcristales translúcidos.',
      zh: '天然高纯度微晶石英与二氧化硅原矿标本。'
    },
    applications: {
      pt: [
        'Fabricação de vidros planos, recipientes e vidros especiais',
        'Cerâmicas técnicas, refratários e porcelanatos',
        'Cargas funcionais para tintas, polímeros e borrachas',
        'Concreto de alto desempenho (HPC) e argamassas especiais',
        'Eletrônica e componentes de vidro fotovoltaico solar'
      ],
      en: [
        'Float glass, container glass, and specialty optical glass',
        'Technical ceramics, refractories, and porcelain tiles',
        'Functional fillers for industrial paints, polymers, and rubbers',
        'High-performance concrete (HPC) and structural grouts',
        'Electronics and solar photovoltaic glass substrate manufacturing'
      ],
      es: [
        'Vidrio plano, recipientes y vidrios ópticos especiales',
        'Cerámica técnica, refractarios y gres porcelánico',
        'Cargas funcionales para pinturas, plásticos y cauchos',
        'Hormigón de alto rendimiento (HPC) y morteros especiales',
        'Electrónica y sustratos de vidrio solar fotovoltaico'
      ],
      zh: [
        '浮法玻璃、容器玻璃及特种光学玻璃制造',
        '特种精密陶瓷、耐火材料及高档瓷砖',
        '工业涂料、工程塑料及合成橡胶的功能性高填料',
        '超高性能混凝土 (HPC) 与特种砂浆',
        '电子工业与太阳能光伏玻璃基底'
      ]
    },
    chemicalSpecs: [
      { element: 'Silicon Dioxide', formula: 'SiO₂', value: 'High Purity', unit: '% (TBD)', status: 'pending' },
      { element: 'Iron Oxide', formula: 'Fe₂O₃', value: 'Low Iron content', unit: '% max', status: 'pending' },
      { element: 'Aluminum Oxide', formula: 'Al₂O₃', value: 'Controlled assay', unit: '%', status: 'pending' }
    ],
    pendingValidation: {
      pt: [
        'Confirmação do laudo laboratorial detalhado (pureza e curva granulométrica)',
        'Validação dos teores de contaminantes férricos e umidade residual',
        'Definição da janela de disponibilidade para o lote desejado'
      ],
      en: [
        'Confirmation of comprehensive analytical laboratory assay (purity % and particle size mesh distribution)',
        'Validation of residual iron oxide trace limits and moisture content',
        'Scheduled delivery slot availability for the target inquiry volume'
      ],
      es: [
        'Confirmación del informe de laboratorio detallado (pureza y curva granulométrica)',
        'Validación de los límites de contaminantes de hierro y humedad residual',
        'Definición del cronograma de disponibilidad para el volumen consultado'
      ],
      zh: [
        '具体实验室化验报告（二氧化硅纯度百分比及粒度目数分布）待双方协议确认',
        '微量杂质氧化铁含量和含水率最终核定',
        '目标采购量发货排期及船期确认'
      ]
    },
    themeColor: {
      primary: '#E2E8F0',
      accent: '#38BDF8',
      glow: 'rgba(56, 189, 248, 0.15)'
    }
  },
  {
    id: 'lithium',
    slug: 'lithium-carbonate',
    name: {
      pt: 'Lítio & Carbonato de Lítio',
      en: 'Lithium & Lithium Carbonate',
      es: 'Litio y Carbonato de Litio',
      zh: '锂矿石及碳酸锂 / 锂辉石'
    },
    subtitle: {
      pt: 'Matérias-primas estratégicas para eletrificação, baterias e química avançada',
      en: 'Strategic raw materials for batteries, electrification and advanced chemical syntheses',
      es: 'Materias primas estratégicas para baterías, electrificación y síntesis químicas',
      zh: '动力电池、新能源储能及精细化学领域的战略级矿物原料'
    },
    description: {
      pt: 'Lítio e derivados (espodumênio e carbonato de lítio) originados de jazidas brasileiras com teores informados de 44–50% e 15–18%, destinados à cadeia global de armazenamento energético.',
      en: 'Lithium resources and derivatives (spodumene concentrates and lithium carbonate) sourced from Brazilian deposits, with indicated reference grades of 44–50% and 15–18% for international energy storage supply chains.',
      es: 'Recursos de litio y derivados (espodumena y carbonato de litio) de origen brasileño, con grados de referencia de 44–50% y 15–18% para la cadena global de baterías.',
      zh: '源自巴西优质矿带的锂矿及衍生品（锂辉石精矿与工业级碳酸锂），参考品位区间为 44–50% 与 15–18%，服务全球新能源与电池产业链。'
    },
    chemicalSymbol: 'Li₂CO₃ / Li',
    primaryGrade: {
      pt: 'Teores informados: 44–50% / 15–18% (sob validação)',
      en: 'Indicated grades: 44–50% / 15–18% (under validation)',
      es: 'Grados indicados: 44–50% / 15–18% (bajo validación)',
      zh: '参考标示品位：44–50% / 15–18%（商洽验证）'
    },
    mineralFamily: 'Pegmatites / Spodumene',
    physicalForm: {
      pt: 'Concentrado mineral / sal refinado em pó',
      en: 'Mineral concentrate / refined powder compound',
      es: 'Concentrado mineral / polvo fino compuesto',
      zh: '精矿细砂 / 精炼结晶粉末'
    },
    portOfLoading: {
      pt: 'Porto de Pecém, Ceará, Brasil',
      en: 'Port of Pecém, Ceará, Brazil',
      es: 'Puerto de Pecém, Ceará, Brasil',
      zh: '巴西塞阿拉州佩森深水港 (Port of Pecém)'
    },
    portDetails: {
      pt: 'Porto offshore de águas profundas moderno com infraestrutura alfandegada classe mundial.',
      en: 'Modern deepwater offshore industrial terminal with world-class international customs clearance.',
      es: 'Puerto offshore de aguas profundas con infraestructura aduanera moderna de clase mundial.',
      zh: '现代离岸深水重工枢纽港，具备全球一流的矿物清关与集装转运体系。'
    },
    packaging: {
      pt: 'Big bags impermeabilizados de 1.000 kg com liner protetor',
      en: '1,000 kg moisture-proof big bags with protective polymer liner',
      es: 'Big bags impermeables de 1.000 kg con revestimiento interior protector',
      zh: '1,000公斤带防水防潮内膜的重型吨袋 (Big Bags)'
    },
    volumesMentioned: {
      pt: '540 MT · 30.000 MT · 50.000 MT (conforme modalidade)',
      en: '540 MT · 30,000 MT · 50,000 MT (per commercial framework)',
      es: '540 MT · 30.000 MT · 50.000 MT (según contrato)',
      zh: '540 公吨 · 30,000 公吨 · 50,000 公吨（依供货周期商定）'
    },
    minContract: {
      pt: '12 meses (fornecimento contínuo)',
      en: '12 months (continuous supply contract)',
      es: '12 meses (suministro continuo)',
      zh: '12个月长期供应合同'
    },
    paymentTerms: {
      pt: 'SBLC irrevogável / confirmada. Pagamento contra certificado SGS pré-carregamento.',
      en: 'Irrevocable confirmed SBLC. Payment against pre-loading SGS assay certificate.',
      es: 'SBLC irrevocable confirmada. Pago contra certificado SGS antes del embarque.',
      zh: '不可撤销保兑信用证/备用信用证 (SBLC)。凭发运前SGS质检报告结算。'
    },
    incoterm: 'FOB Pecém / CIF Worldwide',
    realPhotoUrl: '/images/lithium.jpg',
    galleryUrls: ['/images/lithium.jpg'],
    photoCaption: {
      pt: 'Cristal natural de espodumênio e concentrado mineral para refino de lítio.',
      en: 'Natural spodumene pegmatite crystal and mineral concentrate for battery refining.',
      es: 'Cristal natural de espodumena y concentrado mineral para refinado de litio.',
      zh: '天然锂辉石晶体及供电池级提炼用的精矿原石。'
    },
    applications: {
      pt: [
        'Células de bateria de íons de lítio para veículos elétricos (EVs)',
        'Sistemas estacionários de armazenamento de energia (BESS)',
        'Graxas lubrificantes industriais para condições extremas',
        'Vidros cerâmicos técnicos de baixo coeficiente de dilatação térmica',
        'Aplicações metalúrgicas e sínteses de ligas leves'
      ],
      en: [
        'Lithium-ion battery cathode precursors for Electric Vehicles (EV)',
        'Battery Energy Storage Systems (BESS) for grid infrastructure',
        'High-temperature heavy industrial lubricating greases',
        'Low-thermal-expansion technical glass ceramics',
        'Metallurgical fluxing and lightweight alloy syntheses'
      ],
      es: [
        'Precursores de cátodos para baterías de vehículos eléctricos (VE)',
        'Sistemas de almacenamiento estacionario de energía (BESS)',
        'Grasas lubricantes industriales para altas temperaturas',
        'Vidrios cerámicos con bajo coeficiente de dilatación térmica',
        'Fundentes metalúrgicos y aleaciones ultraligeras'
      ],
      zh: [
        '新能源汽车 (EV) 锂离子动力电池正极前驱体',
        '电网级大型储能系统 (BESS)',
        '特种耐高温工业锂基润滑脂',
        '超低热膨胀系数微晶玻璃及耐高温陶瓷',
        '航空轻质合金冶金助熔剂与合成原料'
      ]
    },
    chemicalSpecs: [
      { element: 'Lithium Grade Range', formula: 'Li / Li₂CO₃', value: '44–50% / 15–18%', unit: '% Reference', status: 'confirmed' },
      { element: 'Impurities Assay', formula: 'Fe, Na, K, Ca', value: 'Controlled Limits', unit: 'ppm / %', status: 'pending' },
      { element: 'Moisture', formula: 'H₂O', value: '< 0.5%', unit: '%', status: 'pending' }
    ],
    pendingValidation: {
      pt: [
        'Validação formal da correspondência de cada teor (44-50% vs 15-18%) a cada produto específico',
        'Emissão de laudo analítico atualizado com método ICP-OES / XRF',
        'Confirmação de janela de exportação e disponibilidade volumétrica do lote'
      ],
      en: [
        'Formal validation matching each grade (44–50% vs 15–18%) to its specific product format',
        'Issuance of official analytical certificate via certified ICP-OES / XRF methodology',
        'Confirmation of scheduled export slots and verified batch volumes'
      ],
      es: [
        'Validación formal de la correspondencia de cada tenor con su respectivo producto',
        'Emisión del certificado de laboratorio actualizado mediante metodología ICP-OES / XRF',
        'Confirmación del calendario de embarque y volumen de lote disponible'
      ],
      zh: [
        '需双方正式商洽明确 44–50% 与 15–18% 品位与具体产品形态的对应关系',
        '由第三方出具最新 ICP-OES / XRF 实验室理化分析证书',
        '确认发货船期档期与每批次可分配出口配额'
      ]
    },
    themeColor: {
      primary: '#93C5FD',
      accent: '#60A5FA',
      glow: 'rgba(96, 165, 250, 0.2)'
    }
  },
  {
    id: 'manganese',
    slug: 'manganese-ore',
    name: {
      pt: 'Minério de Manganês',
      en: 'Manganese Ore',
      es: 'Mineral de Manganeso',
      zh: '高品位锰矿石 (散装货)'
    },
    subtitle: {
      pt: 'Carga a granel de alto teor de Mn (42,28%) para siderurgia e ferroligas',
      en: 'High-grade bulk cargo (42.28% Mn) for steelmaking and ferroalloys',
      es: 'Carga a granel de alto grado (42,28% Mn) para siderurgia y ferroaleaciones',
      zh: '高品位锰矿散货（Mn 42.28%），专供大型钢铁冶炼及铁合金工业'
    },
    description: {
      pt: 'Minério de manganês brasileiro em modalidade de carga a granel, com teor de Mn de 42,28% comprovado em laudos para suprimento da indústria siderúrgica e de ligas especiais.',
      en: 'Brazilian manganese ore in bulk cargo export format, exhibiting an assay of 42.28% Mn verified in source records, engineered for steelworks and silicon-manganese ferroalloy production.',
      es: 'Mineral de manganeso brasileño en carga a granel, con tenor de Mn del 42,28% registrado para la industria siderúrgica y ferroaleaciones.',
      zh: '巴西产高品位大宗散装锰矿石，化验成分标定为 Mn 42.28%，是高炉炼钢脱氧剂、硅锰合金及特殊合金钢生产的核心原料。'
    },
    chemicalSymbol: 'Mn 42.28%',
    primaryGrade: {
      pt: 'Mn: 42,28% (Composição informada)',
      en: 'Mn: 42.28% (Documented elemental assay)',
      es: 'Mn: 42,28% (Composición documentada)',
      zh: 'Mn：42.28%（源实测成分）'
    },
    mineralFamily: 'Oxide / Pyrolusite - Cryptomelane',
    physicalForm: {
      pt: 'Carga a granel (lump / fines selecionados)',
      en: 'Bulk cargo (selected lumps and fines)',
      es: 'Carga a granel (trozos y finos seleccionados)',
      zh: '散装货（块矿 / 精选细矿）'
    },
    portOfLoading: {
      pt: 'Porto de Barcarena, Pará, Brasil',
      en: 'Port of Barcarena, Pará, Brazil',
      es: 'Puerto de Barcarena, Pará, Brasil',
      zh: '巴西北部帕拉州巴卡雷纳深水港 (Port of Barcarena)'
    },
    portDetails: {
      pt: 'Porto estratégico da bacia amazônica com capacidade para navios graneleiros de grande porte (Handymax / Supramax / Panamax).',
      en: 'Strategic deepwater Amazon basin terminal engineered for Panamax and Supramax bulk ore carriers.',
      es: 'Puerto estratégico de gran calado en la cuenca amazónica con capacidad para graneleros Panamax y Supramax.',
      zh: '亚马逊流域核心深水矿石码头，具备巴拿马型 (Panamax) 及超灵便型大型散货船全天候装载能力。'
    },
    packaging: {
      pt: 'Carga a granel direta nos porões de navio graneleiro',
      en: 'Direct bulk loading into ocean vessel holds',
      es: 'Carga a granel directa en bodegas de buques graneleros',
      zh: '大型散货船船舱直装 (Bulk Vessel Loading)'
    },
    volumesMentioned: {
      pt: '50.000 MT (lote padrão de embarque)',
      en: '50,000 MT (standard shipment parcel)',
      es: '50.000 MT (lote estándar de embarque)',
      zh: '50,000 公吨（单批标准货量）'
    },
    minContract: {
      pt: '12 meses (fornecimento contínuo)',
      en: '12 months (continuous supply contract)',
      es: '12 meses (suministro continuo)',
      zh: '12个月长期供应合同'
    },
    paymentTerms: {
      pt: 'SBLC bancária irrevogável / confirmada com pagamento após emissão de certificado SGS no porto de Barcarena.',
      en: 'Irrevocable confirmed banking SBLC with payment against SGS quantity & quality certificate at Barcarena.',
      es: 'SBLC irrevocable confirmada con pago contra certificado de peso y calidad SGS en Barcarena.',
      zh: '不可撤销保兑备用信用证 (SBLC)，装货港巴卡雷纳凭SGS出具的重量及品质商检证书即期结算。'
    },
    incoterm: 'FOB Barcarena / CFR / CIF Destination',
    realPhotoUrl: '/images/manganese.jpg',
    galleryUrls: ['/images/manganese.jpg'],
    photoCaption: {
      pt: 'Amostra maciça de pirolusita/óxido de manganês com brilho metálico escuro.',
      en: 'Dense pyrolusite manganese oxide mineral rock with dark metallic luster.',
      es: 'Muestra densa de pirolusita/óxido de manganeso con brillo metálico oscuro.',
      zh: '致密块状软锰矿/氧化锰矿石标本，具有纯正金属光泽。'
    },
    applications: {
      pt: [
        'Desoxidação e dessulfurização no processo siderúrgico primário',
        'Fabricação de ligas FeMn (ferromanganês) e SiMn (silicomanganês)',
        'Produção de aços estruturais de alta resistência ao desgaste e impacto',
        'Química industrial para baterias e eletrólitos de dióxido de manganês',
        'Indústria de alumínio para aumento de ductilidade e resistência'
      ],
      en: [
        'Deoxidation and desulfurization in primary steelmaking furnaces',
        'Production of Ferro-Manganese (FeMn) and Silico-Manganese (SiMn) masteralloys',
        'High-strength structural and impact-resistant wear steel grades',
        'Electrolytic Manganese Dioxide (EMD) for high-performance batteries',
        'Aluminum alloys synthesis to increase strength and corrosion resistance'
      ],
      es: [
        'Desoxidación y desulfuración en la fabricación primaria de acero',
        'Fabricación de ferroaleaciones FeMn y SiMn',
        'Producción de aceros estructurales de alta resistencia al desgaste',
        'Dióxido de manganeso electrolítico (EMD) para baterías',
        'Aleaciones de aluminio para mayor tenacidad y durabilidad'
      ],
      zh: [
        '钢铁冶炼全过程中的关键脱氧剂与脱硫剂',
        '高品质锰铁合金 (FeMn) 及硅锰合金 (SiMn) 的核心母料',
        '重工机械、耐磨高锰钢及超强结构钢生产',
        '电池级电解二氧化锰 (EMD) 及锂锰电池正极材料',
        '航空工业特种铝锰合金添加剂'
      ]
    },
    chemicalSpecs: [
      { element: 'Manganese', formula: 'Mn', value: '42.28%', unit: '%', status: 'confirmed' },
      { element: 'Silicon Dioxide', formula: 'SiO₂', value: '13.33%', unit: '%', status: 'confirmed' },
      { element: 'Iron', formula: 'Fe', value: '3.53%', unit: '%', status: 'confirmed' },
      { element: 'Barium', formula: 'Ba', value: '2.70%', unit: '%', status: 'confirmed' },
      { element: 'Potassium', formula: 'K', value: '1.45%', unit: '%', status: 'confirmed' },
      { element: 'Titanium', formula: 'Ti', value: '0.163%', unit: '%', status: 'confirmed' },
      { element: 'Calcium', formula: 'Ca', value: '0.076%', unit: '%', status: 'confirmed' },
      { element: 'Phosphorus', formula: 'P', value: '0.023%', unit: '%', status: 'confirmed' },
      { element: 'Copper', formula: 'Cu', value: '0.030%', unit: '%', status: 'confirmed' },
      { element: 'Zinc', formula: 'Zn', value: '0.024%', unit: '%', status: 'confirmed' },
      { element: 'Nickel', formula: 'Ni', value: '0.012%', unit: '%', status: 'confirmed' },
      { element: 'Niobium', formula: 'Nb', value: '0.010%', unit: '%', status: 'confirmed' },
      { element: 'Strontium', formula: 'Sr', value: '0.010%', unit: '%', status: 'confirmed' },
      { element: 'Rubidium', formula: 'Rb', value: '0.001%', unit: '%', status: 'confirmed' }
    ],
    pendingValidation: {
      pt: [
        'Validação da distribuição granulométrica (faixas de lump vs fines)',
        'Confirmação do teor de umidade médio na época do carregamento',
        'Validação dos laudos analíticos laboratoriais atualizados para a safra do contrato'
      ],
      en: [
        'Validation of grain size distribution curves (lump vs fines fraction %)',
        'Determination of average cargo moisture content during loading window',
        'Official analytical assay verification under contract execution protocols'
      ],
      es: [
        'Validación de la distribución granulométrica (porcentajes de trozos y finos)',
        'Determinación de la humedad promedio en el período de carga',
        'Verificación del certificado de laboratorio oficial para el contrato específico'
      ],
      zh: [
        '双方需核定具体粒度级配曲线（块矿与粉矿百分比划分）',
        '装运季平均货物自然含水率核定',
        '供货批次执行合同中第三方SGS即期化验数据复核'
      ]
    },
    themeColor: {
      primary: '#CBD5E1',
      accent: '#94A3B8',
      glow: 'rgba(148, 163, 184, 0.2)'
    }
  },
  {
    id: 'iron',
    slug: 'iron-ore',
    name: {
      pt: 'Minério de Ferro 62%',
      en: 'Iron Ore Fe 62%',
      es: 'Mineral de Hierro Fe 62%',
      zh: '巴西铁矿石 (Fe 约62% 散装)'
    },
    subtitle: {
      pt: 'Carga a granel de alto teor férrico (Fe ~62%) para altos-fornos globais',
      en: 'High-grade bulk cargo (~62% Fe) engineered for modern blast furnaces',
      es: 'Carga a granel de alta ley (~62% Fe) para altos hornos globales',
      zh: '高品位散装优质铁矿石（Fe 约62%），专供全球现代化高炉炼铁及烧结球团'
    },
    description: {
      pt: 'Minério de ferro de padrão internacional proveniente de depósitos brasileiros, com teor de ferro de aproximadamente 62% e matriz hematítica com 89,95% de Fe₂O₃, garantindo alta produtividade no alto-forno.',
      en: 'World-class Brazilian iron ore with approximately 62% elemental Fe and 89.95% Fe₂O₃ hematite matrix, characterized by low impurities and exceptional blast furnace sintering efficiency.',
      es: 'Mineral de hierro brasileño de clase mundial, con aproximadamente 62% de Fe elemental y matriz hematítica de 89,95% de Fe₂O₃, con bajos niveles de impurezas para altos hornos.',
      zh: '世界闻名的巴西优质铁矿石，全铁含量 (Fe) 约为 62%，赤铁矿相 (Fe₂O₃) 达 89.95%，杂质含量低，具有极佳的冶炼透气性与高炉利用系数。'
    },
    chemicalSymbol: 'Fe ~62%',
    primaryGrade: {
      pt: 'Fe: ~62% | Fe₂O₃: 89,9553%',
      en: 'Fe: ~62% | Fe₂O₃: 89.9553%',
      es: 'Fe: ~62% | Fe₂O₃: 89.9553%',
      zh: '全铁 Fe：约62% | 三氧化二铁 Fe₂O₃：89.9553%'
    },
    mineralFamily: 'Hematite / Itabirite',
    physicalForm: {
      pt: 'Carga a granel (Sinter feed / Granulado)',
      en: 'Bulk cargo (Sinter feed / Lump)',
      es: 'Carga a granel (Sinter feed / Granulado)',
      zh: '大宗散装（烧结粉矿 Sinter Feed / 块矿 Lump）'
    },
    portOfLoading: {
      pt: 'Porto de Barcarena, Pará, Brasil',
      en: 'Port of Barcarena, Pará, Brazil',
      es: 'Puerto de Barcarena, Pará, Brasil',
      zh: '巴西北部帕拉州巴卡雷纳深水港 (Port of Barcarena)'
    },
    portDetails: {
      pt: 'Terminal mineraleiro de calado profundo preparado para carregamento contínuo de navios Panamax e Capesize.',
      en: 'Dedicated deepwater mineral export hub equipped for continuous conveyor loading of Panamax bulkers.',
      es: 'Terminal mineral de gran calado preparada para carga continua de buques graneleros Panamax.',
      zh: '巴西北部主要深水矿物输出枢纽，具备输送带连续作业与大吨位散货轮快速装船能力。'
    },
    packaging: {
      pt: 'Carga a granel nos porões de navio',
      en: 'Bulk cargo in vessel holds',
      es: 'Carga a granel en bodegas de barco',
      zh: '远洋散装货船船舱直装 (Bulk Carrier Loading)'
    },
    volumesMentioned: {
      pt: '50.000 MT (lote padrão de embarque)',
      en: '50,000 MT (documented standard shipment parcel)',
      es: '50.000 MT (lote estándar de embarque)',
      zh: '50,000 公吨（单船基准发运量）'
    },
    minContract: {
      pt: '12 meses (fornecimento contínuo)',
      en: '12 months (continuous supply contract)',
      es: '12 meses (suministro continuo)',
      zh: '12个月长期供应合同'
    },
    paymentTerms: {
      pt: 'SBLC irrevogável / confirmada com pagamento pós-inspeção independente SGS de peso e composição.',
      en: 'Irrevocable confirmed SBLC payable against independent SGS Quality & Weight certificate at loading port.',
      es: 'SBLC irrevocable confirmada pagadera contra certificado SGS de calidad y peso en puerto de embarque.',
      zh: '不可撤销保兑备用信用证 (SBLC)，装货港以SGS独立商检出具的重量与化验单据作为交单付款依据。'
    },
    incoterm: 'FOB Barcarena / CFR / CIF Ports Worldwide',
    realPhotoUrl: '/images/iron.jpg',
    galleryUrls: ['/images/iron.jpg'],
    photoCaption: {
      pt: 'Amostra de hematita pura de origem brasileira com brilho metálico especular e alto teor de ferro.',
      en: 'Authentic Brazilian specular hematite iron ore rock with exceptional metallic purity.',
      es: 'Muestra de hematita pura brasileña con brillo metálico y alta ley férrica.',
      zh: '巴西产高纯度镜铁矿/赤铁矿标本，高金属品位质感。'
    },
    applications: {
      pt: [
        'Carga primária em altos-fornos siderúrgicos integrados',
        'Sinterização e pelotização para produção de aço bruto',
        'Produção de ferro-gusa e aço para construção e indústria pesada',
        'Fabricação de chapas navais, perfis automotivos e aços especiais'
      ],
      en: [
        'Primary furnace charge for integrated blast furnace steelworks',
        'Sinter feed and pelletizing for crude steel manufacturing',
        'Pig iron and hot metal production for heavy industry and infrastructure',
        'Shipbuilding plates, automotive steel, and structural alloy manufacturing'
      ],
      es: [
        'Carga primaria en altos hornos siderúrgicos integrados',
        'Sinterización y peletización para la producción de acero crudo',
        'Producción de arrabio y metales pesados para infraestructuras',
        'Chapas navales, aceros automotrices y perfiles estructurales'
      ],
      zh: [
        '大型现代化联合钢铁厂高炉基础炉料',
        '烧结矿与球团矿精炼工艺核心配料',
        '重工基建、船舶制造及汽车板材优质粗钢冶炼',
        '低磷低硫特种合金钢坯高效制备'
      ]
    },
    chemicalSpecs: [
      { element: 'Total Iron', formula: 'Fe', value: '~62.00%', unit: '%', status: 'confirmed' },
      { element: 'Hematite Matrix', formula: 'Fe₂O₃', value: '89.9553%', unit: '%', status: 'confirmed' },
      { element: 'Silicon Dioxide', formula: 'SiO₂', value: '1.89%', unit: '%', status: 'confirmed' },
      { element: 'Aluminum Oxide', formula: 'Al₂O₃', value: '3.78%', unit: '%', status: 'confirmed' },
      { element: 'Titanium Dioxide', formula: 'TiO₂', value: '0.147%', unit: '%', status: 'confirmed' },
      { element: 'Phosphorus', formula: 'P', value: '0.066%', unit: '%', status: 'confirmed' },
      { element: 'Manganese', formula: 'Mn', value: '0.036%', unit: '%', status: 'confirmed' },
      { element: 'Magnesium Oxide', formula: 'MgO', value: '0.021%', unit: '%', status: 'confirmed' },
      { element: 'Chromium Oxide', formula: 'Cr₂O₃', value: '0.0193%', unit: '%', status: 'confirmed' },
      { element: 'Sulfur', formula: 'S', value: '0.011%', unit: '%', status: 'confirmed' },
      { element: 'Potassium Oxide', formula: 'K₂O', value: '0.006%', unit: '%', status: 'confirmed' },
      { element: 'Sodium Oxide', formula: 'Na₂O', value: '0.0002%', unit: '%', status: 'confirmed' }
    ],
    pendingValidation: {
      pt: [
        'Validação dos laudos analíticos completos e índices de perda ao fogo (LOI)',
        'Especificação granulométrica contratual para o lote solicitado',
        'Confirmação do cronograma de atracações e capacidade de carregamento diário'
      ],
      en: [
        'Validation of comprehensive assay report including Loss on Ignition (LOI)',
        'Contractual particle sizing cut-offs (lump vs sinter feed %)',
        'Vessel laycan schedule confirmation and daily loading rate parameters'
      ],
      es: [
        'Validación de los informes analíticos completos y pérdida por calcinación (LOI)',
        'Especificación granulométrica contractual para el lote solicitado',
        'Confirmación del cronograma de escalas de buque y velocidad de embarque diaria'
      ],
      zh: [
        '化验全分析包含烧损 (LOI) 需在最终采购协议中由双方技术签字确认',
        '供货合同中块矿与粉矿的精准粒径筛分规格书',
        '受载期窗口 (Laycan) 与每日装货速率（MT/天）的最终确认'
      ]
    },
    themeColor: {
      primary: '#F87171',
      accent: '#DC2626',
      glow: 'rgba(220, 38, 38, 0.2)'
    }
  },
  {
    id: 'copper',
    slug: 'copper-ore',
    name: {
      pt: 'Minério de Cobre 19–20%',
      en: 'Copper Ore 19–20%',
      es: 'Mineral de Cobre 19–20%',
      zh: '高品位铜矿石 (Cu 19–20%)'
    },
    subtitle: {
      pt: 'Minério de cobre com teor de 19–20% com alternativas de fornecimento até 5.000 MT/mês',
      en: 'High-grade copper ore (19–20% Cu) with supply capacity up to 5,000 MT/month',
      es: 'Mineral de cobre con tenor de 19–20% con opciones de hasta 5.000 MT/mes',
      zh: '高品位铜矿石（Cu 19–20%），每月供应能力最高可达 5,000 公吨'
    },
    description: {
      pt: 'Minério de cobre com teor de 19–20%, acondicionado em big bags de 1.000 kg em contêineres marítimos de 20 pés, ofertado em modalidade CIF internacional.',
      en: 'Copper ore featuring 19–20% Cu assay, packaged in 1,000 kg big bags in 20-foot ocean containers, quoted on international CIF terms to destination ports.',
      es: 'Mineral de cobre con tenor de 19–20%, embalado en big bags de 1.000 kg en contenedores de 20 pies, ofrecido en modalidad CIF internacional.',
      zh: '铜含量达 19–20% 的优质铜矿石，采用 1,000 公斤重型吨袋封装于 20 尺国际标准集装箱，支持 CIF 国际海运交付。'
    },
    chemicalSymbol: 'Cu 19–20%',
    primaryGrade: {
      pt: 'Cu: 19–20% (Teor de referência)',
      en: 'Cu: 19–20% (Documented assay grade)',
      es: 'Cu: 19–20% (Tenor de referencia)',
      zh: '铜 Cu：19–20%（标定品位）'
    },
    mineralFamily: 'Chalcopyrite / Malachite',
    physicalForm: {
      pt: 'Minério britado / fragmentado selecionado',
      en: 'Crushed raw ore / selected fragmented rock',
      es: 'Mineral triturado / fragmentado seleccionado',
      zh: '破碎精选矿石 / 块状矿石'
    },
    portOfLoading: {
      pt: 'Porto brasileiro a confirmar (opções Salvador / Pecém)',
      en: 'Brazilian international container port (Salvador / Pecém)',
      es: 'Puerto brasileño a confirmar (opciones Salvador / Pecém)',
      zh: '巴西集装箱枢纽港（巴伊亚萨尔瓦多 / 塞阿拉佩森港）'
    },
    portDetails: {
      pt: 'Operação conteinerizada em terminais com balança certificada e estufagem fiscalizada.',
      en: 'Containerized port logistics with certified weighbridges and supervised stuffing.',
      es: 'Logística de contenedores en terminales con pesaje certificado y supervisión aduanera.',
      zh: '标准海运集装箱码头作业，全程经第三方地磅计量与海关监装。'
    },
    packaging: {
      pt: 'Big bags de 1.000 kg em contêineres de 20 pés (FCL)',
      en: '1,000 kg big bags in 20-foot standard sea containers (FCL)',
      es: 'Big bags de 1.000 kg en contenedores de 20 pies (FCL)',
      zh: '1,000 公斤重型吨袋，装入 20 尺整箱海运集装箱 (FCL)'
    },
    volumesMentioned: {
      pt: 'Lotes: 5.000 MTU · 1.000 MTU · 300 MTU (capacidade até 5.000 MT/mês)',
      en: 'Lots: 5,000 MTU · 1,000 MTU · 300 MTU (up to 5,000 MT/month)',
      es: 'Lotes: 5.000 MTU · 1.000 MTU · 300 MTU (hasta 5.000 MT/mes)',
      zh: '标示批次：5,000 MTU · 1,000 MTU · 300 MTU（每月最高可供 5,000 公吨）'
    },
    minContract: {
      pt: '12 meses (fornecimento contínuo)',
      en: '12 months (continuous supply contract)',
      es: '12 meses (suministro continuo)',
      zh: '12个月长期供应合同'
    },
    paymentTerms: {
      pt: 'SBLC confirmada / Irrevogável. Pagamento contra inspeção SGS pré-embarque.',
      en: 'Irrevocable confirmed SBLC. Payable against SGS inspection prior to loading.',
      es: 'SBLC confirmada / Irrevocable. Pago contra inspección SGS antes del embarque.',
      zh: '不可撤销保兑备用信用证 (SBLC)。装运前凭SGS检验证书即期结算。'
    },
    incoterm: 'CIF (Conforme indicado) / FOB',
    realPhotoUrl: '/images/copper.jpg',
    galleryUrls: ['/images/copper.jpg'],
    photoCaption: {
      pt: 'Rocha mineralizada com veios de calcopirita dourada e malaquita esmeralda.',
      en: 'Mineralized copper ore showing golden chalcopyrite and green malachite veins.',
      es: 'Roca mineralizada con vetas de calcopirita dorada y malaquita esmeralda.',
      zh: '呈现金黄色黄铜矿与翠绿孔雀石伴生脉络的优质铜矿石标本。'
    },
    applications: {
      pt: [
        'Alimentação de plantas de fundição e refino de cobre eletrolítico',
        'Fabricação de catodos de cobre de alta condutividade elétrica',
        'Produção de cabos condutores de energia, transformadores e motores elétricos',
        'Componentes para geração de energia solar fotovoltaica e eólica',
        'Tubulações industriais, trocadores de calor e ligas de latão/bronze'
      ],
      en: [
        'Smelting and electro-refining for cathode manufacturing',
        'Production of electrolytic high-conductivity copper cathodes (Grade A)',
        'Electrical wiring, grid transformers, and electric vehicle traction motors',
        'Renewable energy systems (wind turbines and solar arrays)',
        'Industrial piping, heat exchangers, and brass/bronze alloy foundry'
      ],
      es: [
        'Fundición y electro-refinación para cátodos de cobre electrolítico',
        'Producción de cátodos de cobre de alta conductividad eléctrica',
        'Cables de energía, transformadores y motores eléctricos',
        'Sistemas de energía renovable solar y eólica',
        'Tuberías industriales, intercambiadores de calor y aleaciones de bronce'
      ],
      zh: [
        '铜冶炼厂熔炼与火法/湿法电解铜精炼原料',
        '制造国际 A 级高纯电解铜阴极板',
        '超高导电率电缆母线、变压器与新能源汽车驱动电机',
        '风力发电机组与光伏电站大电流汇流系统',
        '工业热交换管道、高精度黄铜与青铜合金铸造'
      ]
    },
    chemicalSpecs: [
      { element: 'Copper', formula: 'Cu', value: '19.00% – 20.00%', unit: '% (Reference)', status: 'confirmed' },
      { element: 'Sulfur Content', formula: 'S', value: 'Sulfide matrix', unit: '%', status: 'pending' },
      { element: 'Precious Metals / Byproducts', formula: 'Au / Ag', value: 'Assay on request', unit: 'g/t', status: 'pending' },
      { element: 'Deleterious Elements', formula: 'As, Sb, Bi, Pb', value: 'Within international thresholds', unit: '% max', status: 'pending' }
    ],
    pendingValidation: {
      pt: [
        'Esclarecimento e alinhamento exato da aplicação da unidade MTU vs Toneladas Métricas (MT)',
        'Composição mineralógica completa (fração sulfurada vs oxidada) por laudo laboratorial',
        'Confirmação de capacidade mensal firme e cronograma de expedição'
      ],
      en: [
        'Clarification and contractual definition of MTU (Metric Ton Unit) pricing vs Metric Tons (MT)',
        'Complete mineralogical assay (sulfide vs oxide ratio) verified by certified lab',
        'Confirmation of scheduled monthly export allocation and packing cadence'
      ],
      es: [
        'Aclaración formal sobre la aplicación de la unidad MTU vs Toneladas Métricas (MT)',
        'Composición mineralógica completa (fracción sulfurada vs oxidada) en informe de laboratorio',
        'Confirmación de la capacidad mensual firme y cronograma de expedición'
      ],
      zh: [
        '需双方技术与商务团队明确 MTU（公吨度）计价与公吨 (MT) 的精准商务核算规则',
        '经权威认证实验室出具全元素理化报告（硫化矿与氧化矿比例、伴生金银指标）',
        '最终确认月度最大稳定供货量及集装箱装运班期'
      ]
    },
    themeColor: {
      primary: '#34D399',
      accent: '#059669',
      glow: 'rgba(5, 150, 105, 0.2)'
    }
  },
  {
    id: 'tungsten',
    slug: 'tungsten-ore',
    name: {
      pt: 'Minério de Tungstênio 70%',
      en: 'Tungsten Ore 70%',
      es: 'Mineral de Tungsteno 70%',
      zh: '高纯钨矿石 / 精矿 (WO₃ 70%)'
    },
    subtitle: {
      pt: 'Concentrado de alto teor (70%) para metalurgia refratária e ligas de ultra-dureza',
      en: 'High-grade 70% concentrate for refractory metallurgy and ultra-hard alloys',
      es: 'Concentrado de alto tenor (70%) para metalurgia refractaria y carburos de tungsteno',
      zh: '70% 超高品位精矿，专供超硬合金、耐火冶金及国防尖端科技'
    },
    description: {
      pt: 'Minério/concentrado de tungstênio com teor de 70%, acondicionado em big bags de 1.000 kg com granulometria a ser definida conforme especificação do comprador.',
      en: 'Tungsten ore and concentrate exhibiting a 70% grade, packed in 1,000 kg big bags with particle sizing tailored to buyer metallurgical specifications.',
      es: 'Mineral y concentrado de tungsteno con tenor del 70%, envasado en big bags de 1.000 kg con granulometría según requerimiento del comprador.',
      zh: '标示品位高达 70% 的高品质钨精矿，采用 1,000 公斤吨袋封装，粒度规格可根据买方冶炼炉型定制。'
    },
    chemicalSymbol: 'WO₃ 70%',
    primaryGrade: {
      pt: 'Teor: 70% (Concentrado)',
      en: 'Grade: 70% (Concentrate)',
      es: 'Tenor: 70% (Concentrado)',
      zh: '标示品位：70%（高纯精矿）'
    },
    mineralFamily: 'Scheelite / Wolframite',
    physicalForm: {
      pt: 'Concentrado mineral em pó/areia fina com granulometria a definir pelo comprador',
      en: 'Mineral concentrate sand/fines with mesh sizing specified by buyer',
      es: 'Concentrado mineral con granulometría a convenir por el comprador',
      zh: '精矿重选细砂/粉末，筛分目数依买方要求指定'
    },
    portOfLoading: {
      pt: 'Porto de Barcarena, Pará, Brasil',
      en: 'Port of Barcarena, Pará, Brazil',
      es: 'Puerto de Barcarena, Pará, Brasil',
      zh: '巴西北部帕拉州巴卡雷纳深水港 (Port of Barcarena)'
    },
    portDetails: {
      pt: 'Terminal alfandegado estruturado para movimentação e pesagem de cargas nobres de alta densidade.',
      en: 'Specialized customs terminal engineered for secure handling of high-density strategic mineral cargo.',
      es: 'Terminal aduanera especializada en el manejo seguro de minerales estratégicos de alta densidad.',
      zh: '专为高密度贵重战略矿产配置的高规格海关监管仓库与精密称重装运泊位。'
    },
    packaging: {
      pt: 'Big bags reforçados de 1.000 kg com proteção interna',
      en: 'Reinforced 1,000 kg heavy-duty big bags with internal liner',
      es: 'Big bags reforzados de 1.000 kg con protección interna',
      zh: '1,000 公斤高强度防撕裂吨袋，带防潮内胆'
    },
    volumesMentioned: {
      pt: 'Quantidade indicada: 108 MTU',
      en: 'Documented lot: 108 MTU',
      es: 'Cantidad indicada: 108 MTU',
      zh: '标定批量：108 MTU'
    },
    minContract: {
      pt: '12 meses (fornecimento contínuo)',
      en: '12 months (continuous supply contract)',
      es: '12 meses (suministro continuo)',
      zh: '12个月长期供应合同'
    },
    paymentTerms: {
      pt: 'SBLC confirmada / Irrevogável. Pagamento após laudo de inspeção SGS no porto.',
      en: 'Irrevocable confirmed banking SBLC payable upon SGS port inspection.',
      es: 'SBLC confirmada / Irrevocable. Pago tras inspección SGS en puerto.',
      zh: '不可撤销保兑备用信用证 (SBLC)。装货港凭SGS出具的成分及重量证书付款。'
    },
    incoterm: 'FOB Barcarena / CIF under consultation',
    realPhotoUrl: '/images/tungsten.jpg',
    galleryUrls: ['/images/tungsten.jpg'],
    photoCaption: {
      pt: 'Cristal natural de scheelita e wolframita de alta densidade mineral.',
      en: 'Dense natural scheelite and wolframite crystal specimen of high mineral density.',
      es: 'Cristal natural de scheelita y wolframita de alta densidad mineral.',
      zh: '天然高密度白钨矿与黑钨矿重选结晶标本。'
    },
    applications: {
      pt: [
        'Fabricação de metal duro (carbeto de tungstênio - WC) para usinagem pesada',
        'Ferramentas de perfuração de petróleo, gás e mineração de subsolo',
        'Ligas de alta densidade e aplicações aeroespaciais e militares',
        'Eletrodos para soldagem TIG e filamentos especiais de alta temperatura',
        'Componentes resistentes à corrosão química e desgaste mecânico extremo'
      ],
      en: [
        'Manufacturing of cemented tungsten carbide (WC) for high-speed cutting tools',
        'Deep drill bits for oil, gas and underground geological mining operations',
        'High-density superalloys for aerospace defense and turbine components',
        'TIG welding non-consumable electrodes and high-temperature furnace hardware',
        'Extreme mechanical wear-resistant and anti-friction assemblies'
      ],
      es: [
        'Fabricación de carburo de tungsteno (WC) para herramientas de corte',
        'Brocas de perforación profunda para pozos de petróleo y minería subterránea',
        'Superaleaciones de alta densidad para la industria aeroespacial y de defensa',
        'Electrodos de soldadura TIG y componentes para hornos de alta temperatura',
        'Piezas de extrema resistencia al desgaste y a la abrasión'
      ],
      zh: [
        '制造高硬度碳化钨 (WC) 硬质合金及高速数控切削刀具',
        '石油与天然气深海钻井、地质勘探及地下采矿重型钻头',
        '航空航天耐高温发动机叶片、超高密度配重及国防特种合金',
        '高品质非熔化极 TIG 氩弧焊电极与高温真空炉发热体',
        '耐受极端机械冲刷、磨蚀工况的军工级耐磨零部件'
      ]
    },
    chemicalSpecs: [
      { element: 'Tungsten Trioxide', formula: 'WO₃', value: '70.00%', unit: '% (Reference)', status: 'confirmed' },
      { element: 'Mineral Phase', formula: 'Scheelite / Wolframite', value: 'Confirmed by XRF/XRD', unit: 'Phase', status: 'pending' },
      { element: 'Impurities (Mo, As, P, S)', formula: 'Mo, As, P, S', value: 'Low metallurgical limits', unit: '% max', status: 'pending' }
    ],
    pendingValidation: {
      pt: [
        'Validação técnica da forma mineralógica preponderante (Scheelita vs Wolframita)',
        'Definição precisa da granulometria e da malha desejada pelo comprador',
        'Confirmação da unidade MTU e disponibilidade de lotes futuros'
      ],
      en: [
        'Technical mineralogical confirmation (Scheelite vs Wolframite crystal phase)',
        'Precise sieve mesh sizing alignment agreed upon buyer refinery protocol',
        'Validation of MTU contractual metric and future delivery schedules'
      ],
      es: [
        'Confirmación mineralógica técnica de la fase cristalina (Scheelita vs Wolframita)',
        'Definición precisa de la granulometria y la malla según la refinería compradora',
        'Validación contractual de la unidad MTU y cronograma de lotes futuros'
      ],
      zh: [
        '需由第三方矿物晶体 XRD 确认主要物相（白钨矿 Scheelite 或黑钨矿 Wolframite）',
        '按买方冶炼厂入炉工艺要求确定精矿筛分目数与粒度曲线',
        '确认 108 MTU 基准批次后的后续长期配额与交付排期'
      ]
    },
    themeColor: {
      primary: '#FBBF24',
      accent: '#D97706',
      glow: 'rgba(217, 119, 6, 0.2)'
    }
  },
  {
    id: 'cassiterite',
    slug: 'cassiterite-ore',
    name: {
      pt: 'Minério de Cassiterita (Estanho)',
      en: 'Cassiterite Ore (Tin Ore)',
      es: 'Mineral de Casiterita (Estaño)',
      zh: '锡石矿石 / 精矿 (天然锡矿 Sn)'
    },
    subtitle: {
      pt: 'Minério primário de estanho (Sn) de origem brasileira — especificações sob consulta',
      en: 'Primary Brazilian tin ore (Sn) — Technical specifications available upon inquiry',
      es: 'Mineral primario de estaño (Sn) brasileño — Especificaciones bajo consulta',
      zh: '巴西产天然优质原生锡石矿 (Sn) —— 具体化验与规格详询商务团队'
    },
    description: {
      pt: 'Produto identificado no portfólio oficial de exportação de minérios do Brasil. As especificações químicas completas, teores de Sn, granulometria e alocações de volume são fornecidas diretamente mediante solicitação comercial qualificada.',
      en: 'Identified product listed in official Brazilian export records. Detailed chemical assay, Sn content, particle size distribution, and commercial volume allocations are furnished upon direct inquiry.',
      es: 'Producto identificado en el catálogo oficial de exportación de minerales de Brasil. Las especificaciones químicas completas, tenores de Sn y disponibilidad se brindan bajo consulta comercial.',
      zh: '正式列入出口目录的重要锡矿石品种。具体的全元素化学化验单、Sn 品位、粒度级配及每批次供货配额均在接收买方正式询盘后提供。'
    },
    chemicalSymbol: 'SnO₂ / Sn',
    primaryGrade: {
      pt: 'Sob consulta comercial direta',
      en: 'Available upon qualified commercial inquiry',
      es: 'Disponible bajo consulta comercial directa',
      zh: '商务咨询确认（按批次提供）'
    },
    mineralFamily: 'Oxide / Tetragonal Prism',
    physicalForm: {
      pt: 'Granulado denso / concentrado (a confirmar)',
      en: 'Heavy concentrated sand / dense gravel (to be confirmed)',
      es: 'Granulado denso / concentrado (a confirmar)',
      zh: '重选精矿细砂 / 块矿（详询）'
    },
    portOfLoading: {
      pt: 'Porto brasileiro a confirmar conforme alocação',
      en: 'Brazilian international loading port to be confirmed per allotment',
      es: 'Puerto brasileño a confirmar según lote',
      zh: '巴西发运主港（按供货批次确认）'
    },
    portDetails: {
      pt: 'Terminal portuário internacional equipado para transporte seguro e rastreado de minerais estratégicos.',
      en: 'International container and bulk maritime hub operating under full chain-of-custody tracking.',
      es: 'Terminal portuaria internacional equipada para el transporte rastreado de minerales estratégicos.',
      zh: '具备完整矿产来源链追溯体系的巴西深水国际港口装运码头。'
    },
    packaging: {
      pt: 'Big bags de 1.000 kg / tambores de aço reforçados (conforme consulta)',
      en: '1,000 kg heavy big bags / reinforced steel drums (per inquiry)',
      es: 'Big bags de 1.000 kg / tambores de acero reforzados',
      zh: '1,000 公斤加厚集装吨袋 / 重型密封钢桶'
    },
    volumesMentioned: {
      pt: 'Sob consulta (disponibilidade informada sob demanda)',
      en: 'Under inquiry (available upon volume confirmation)',
      es: 'Bajo consulta (disponibilidad según demanda)',
      zh: '依买方采购需求与当前矿区配额商议'
    },
    minContract: {
      pt: 'Sob negociação comercial',
      en: 'Subject to commercial negotiation',
      es: 'Sujeto a negociación comercial',
      zh: '依商务谈判及交付周期确定'
    },
    paymentTerms: {
      pt: 'SBLC irrevogável / confirmada com pagamento pós-inspeção SGS ou equivalente.',
      en: 'Irrevocable confirmed SBLC payable upon SGS independent assay and weight certificate.',
      es: 'SBLC irrevocable confirmada con pago tras inspección SGS.',
      zh: '不可撤销保兑备用信用证 (SBLC)，装船前凭第三方SGS权威商检付款。'
    },
    incoterm: 'FOB / CIF under consultation',
    realPhotoUrl: '/images/cassiterite.jpg',
    galleryUrls: ['/images/cassiterite.jpg'],
    photoCaption: {
      pt: 'Cristal tetragonal denso de cassiterita (minério de estanho) com reflexos metálicos.',
      en: 'Heavy tetragonal cassiterite tin ore crystal cluster with metallic sub-adamantine luster.',
      es: 'Cristal tetragonal denso de casiterita (mineral de estaño) con reflejos metálicos.',
      zh: '高比重四方晶系锡石原矿标本，具强金刚金属光泽。'
    },
    applications: {
      pt: [
        'Matéria-prima fundamental para fundição de estanho metálico (Sn)',
        'Fabricação de soldas eletrônicas para montagem de placas de circuito impresso (PCB)',
        'Indústria química para produção de óxido de estanho e compostos organoestânicos',
        'Revestimento de folhas-de-flandres para latas alimentícias e embalagens metálicas',
        'Composição de ligas nobres como bronze e metal antifricção'
      ],
      en: [
        'Primary feedstock for metallic tin (Sn) smelting and refining',
        'Electronic solders for printed circuit board (PCB) and semiconductor assembly',
        'Chemical synthesis of tin oxides, catalysts, and organotin stabilizers',
        'Tinplate coating for food cans and protective metallurgical packaging',
        'High-specification bronze alloys, bearing metals, and pewter synthesis'
      ],
      es: [
        'Materia prima fundamental para fundición y refinado de estaño metálico',
        'Soldaduras electrónicas para placas de circuito impreso (PCB)',
        'Síntesis química de óxidos de estaño y estabilizadores organoestánnicos',
        'Recubrimiento de hojalata para envases de alimentos y embalajes',
        'Bronce fosforoso y aleaciones antifricción'
      ],
      zh: [
        '原生金属锡 (Sn) 冶炼与高纯精炼的核心基石原料',
        '微电子半导体焊接、印刷电路板 (PCB) 专用无铅焊料',
        '化工合成氧化锡 (SnO₂)、催化剂与环保有机锡热稳定剂',
        '食品级马口铁（镀锡薄钢板）防腐涂镀',
        '特种锡青铜、耐磨滑动轴承合金及高端防腐蚀特种材料'
      ]
    },
    chemicalSpecs: [
      { element: 'Tin Content', formula: 'Sn', value: 'Assay on request', unit: '% (Inquiry required)', status: 'pending' },
      { element: 'Cassiterite Matrix', formula: 'SnO₂', value: 'High density tetragonal', unit: 'Phase', status: 'pending' },
      { element: 'Iron & Silica Contaminants', formula: 'Fe, SiO₂', value: 'Detailed in laboratory sheet', unit: '% max', status: 'pending' }
    ],
    pendingValidation: {
      pt: [
        'Confirmação formal do teor de estanho (Sn) e relatório de impurezas',
        'Definição da granulometria e forma de apresentação para embarque',
        'Validação do porto de carregamento e volume mínimo disponível para contrato'
      ],
      en: [
        'Formal validation of elemental Tin (Sn %) grade and detailed impurity assay',
        'Specification of grain sizing and delivery format prior to contract signing',
        'Loading port assignment and confirmation of batch allocation'
      ],
      es: [
        'Confirmación formal del tenor de estaño (Sn) e informe de impurezas',
        'Definición de la granulometría y formato de entrega para embarque',
        'Asignación del puerto de embarque y volumen mínimo disponible para contrato'
      ],
      zh: [
        '正式出具全元素理化检验报告（明确标定锡 Sn 含量及有害伴生元素限量）',
        '明确发货批次筛分目数与粒径结构',
        '确定发运装货港口及年度/单批最低可签约出口量'
      ]
    },
    themeColor: {
      primary: '#A78BFA',
      accent: '#7C3AED',
      glow: 'rgba(124, 58, 237, 0.2)'
    }
  }
];

export const PORTS_INFO = [
  {
    id: 'barcarena',
    name: 'Port of Barcarena (Vila do Conde)',
    state: 'Pará, Brazil',
    region: 'Amazon Basin / North Atlantic',
    depth: '17.5m draft (Deepwater Terminal)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bulk_carrier_loading_iron_ore_in_Dampier%2C_Western_Australia.jpg/1280px-Bulk_carrier_loading_iron_ore_in_Dampier%2C_Western_Australia.jpg',
    mineralsHandled: ['Iron Ore Fe 62%', 'Manganese Ore 42.28%', 'Tungsten Ore 70%'],
    coordinates: '01° 30′ S, 48° 45′ W',
    description: {
      pt: 'Terminal mineraleiro de alta capacidade na foz do rio Amazonas, permitindo carregamento veloz de navios graneleiros de grande calado (Panamax/Capesize) com rotas diretas para a Europa, Ásia (via canal do Panamá ou Cabo) e América do Norte.',
      en: 'High-throughput deepwater mineral terminal situated at the mouth of the Amazon river, enabling rapid conveyor loading of Panamax and Capesize bulk carriers with direct sailing routes to Asia, Europe, and North America.',
      es: 'Terminal mineral de gran calado en la desembocadura del río Amazonas, permitiendo carga rápida de buques graneleros Panamax con rutas marítimas hacia Asia, Europa y Norteamérica.',
      zh: '坐落于亚马逊河口的超大型深水矿石出口枢纽，配备高速输送带与深水泊位，可接卸巴拿马型及海岬型巨型散装轮，直航亚洲、欧洲及北美各大口岸。'
    }
  },
  {
    id: 'salvador',
    name: 'Port of Salvador',
    state: 'Bahia, Brazil',
    region: 'South Atlantic',
    depth: '15.0m draft',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Porto_de_Salvador_-_Bahia.jpg/1280px-Porto_de_Salvador_-_Bahia.jpg',
    mineralsHandled: ['Ultrafine Silica', 'Industrial Minerals', 'Containerized Cargo'],
    coordinates: '12° 58′ S, 38° 31′ W',
    description: {
      pt: 'Principal polo portuário da costa leste brasileira na Baía de Todos os Santos, especializado na movimentação de cargas embaladas em big bags, contêineres marítimos e cargas fracionadas.',
      en: 'Major maritime gateway on Brazil’s eastern Atlantic seaboard, specialized in containerized freight, big-bag palletized minerals, and breakbulk general cargo with extensive liner services.',
      es: 'Principal puerto de la costa oriental de Brasil en la Bahía de Todos los Santos, especializado en contenedores, big bags y carga fraccionada con amplia red naviera.',
      zh: '巴西东部大西洋沿岸重要国际商港，专注于集装箱班轮、吨袋集装运输及特种散装工业矿产，航线网络覆盖全球主要工业港口。'
    }
  },
  {
    id: 'pecem',
    name: 'Port of Pecém Industrial Hub',
    state: 'Ceará, Brazil',
    region: 'Northeast Atlantic Gateway',
    depth: '17.0m draft',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Porto_do_Pec%C3%A9m.jpg/1280px-Porto_do_Pec%C3%A9m.jpg',
    mineralsHandled: ['Lithium & Lithium Carbonate', 'Copper Ore (Containers)', 'Energy Minerals'],
    coordinates: '03° 32′ S, 38° 48′ W',
    description: {
      pt: 'Complexo portuário industrial offshore de última geração, em parceria com o Porto de Roterdã, estrategicamente posicionado para exportações rápidas rumo aos Estados Unidos e Europa.',
      en: 'State-of-the-art offshore deepwater port and export processing zone, operated in strategic partnership with the Port of Rotterdam, offering the shortest transit times to North America and Europe.',
      es: 'Complejo portuario offshore de última generación, en asociación con el Puerto de Róterdam, con los menores tiempos de tránsito marítimo hacia EE. UU. y Europa.',
      zh: '国际公认的新一代现代化离岸深水重工枢纽港（与鹿特丹港战略合作共建），是南美洲直达北美与欧洲海运航程最短、通关效率最高的现代化出口口岸。'
    }
  }
];

export const COMMERCIAL_CONTACT = {
  name: 'Marcus Ribeiro',
  title: {
    pt: 'Responsável Comercial & Exportação',
    en: 'Head of International Commercial & Export',
    es: 'Responsable Comercial y Exportación',
    zh: '国际商务与出口贸易总监'
  },
  phoneDisplay: '+55 71 99198-8787',
  phoneDial: '+5571991988787',
  emailDisplay: 'marcus.ribeiro@mvrengenharia.com',
  company: 'MVR Engenharia',
  location: 'Salvador, Bahia, Brasil'
};
