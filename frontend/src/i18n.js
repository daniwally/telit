import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      shift: 'The Shift',
      problem: 'Problem',
      opportunity: 'Opportunity',
      proposal: 'Proposal',
      phases: 'Phases',
      model: 'Model',
      talk: "Let's Talk",
    },
    hero: {
      tag: 'Telit Cinterion — Digital Transformation',
      h1_1: "One website can't win",
      h1_2: 'three markets.',
      sub: 'Time to build platforms, not pages.',
      cta1: 'Explore the Proposal',
      cta2: 'Get in Touch',
    },
    shift: {
      label: '01 — The Shift',
      title: 'The current state.',
      desc: 'Telit Cinterion operates a single website for all four business lines. Modules, Connectivity, Platform, and Solutions. Each fighting for attention.',
      s1: 'Everything lives together.',
      s2: 'Nothing competes properly.',
      s3: 'Different businesses. Same voice. Same problem.',
    },
    problem: {
      label: '02 — The Problem',
      title: 'A single site serving three different worlds.',
      cards: [
        { title: 'Mixed Audiences', desc: 'IoT engineers, factory managers, and C-level buyers all land on the same page. Nobody finds what they need.' },
        { title: 'Weak Positioning', desc: 'One generic voice trying to sell connectivity, platforms, and hardware. It sells none of them well.' },
        { title: 'Low Conversion', desc: 'Generalist funnels. No dedicated paths. Visitors bounce before they convert.' },
        { title: 'Outgunned by Specialists', desc: 'Competitors like KORE, Eseye, and Ignition own their markets with dedicated, focused digital presence. Telit competes with a corporate brochure.' },
      ],
    },
    opportunity: {
      label: '03 — The Opportunity',
      h1_1: "Don't split the company.",
      h1_2: 'Multiply its growth.',
      desc: '3 independent growth machines. Each with its own narrative, its own funnel, its own audience.',
      stats: [
        { num: '3', label: 'Platforms' },
        { num: '3x', label: 'Growth Potential' },
        { num: '1', label: 'Unified Vision' },
      ],
    },
    proposal: {
      label: '04 — The Proposal',
      title: 'Three platforms. One ecosystem.',
      desc: 'Each visually distinct, strategically independent, and built to dominate its market.',
      connected: 'Connected Ecosystem',
      pillars: [
        {
          title: 'Connectivity',
          subtitle: 'NExT IoT SIM / eSIM',
          desc: 'Global IoT connectivity with dedicated positioning against KORE, Eseye, and carrier MVNOs. Own narrative for mission-critical deployments.',
          items: ['Global SIM & eSIM', 'Connectivity Management', 'Network Security', 'Coverage Intelligence'],
          footer: 'Standalone Digital Platform',
        },
        {
          title: 'Platform',
          subtitle: 'deviceWISE IoT',
          desc: 'Industrial IoT platform competing head-to-head with Kepware, Ignition, and AVEVA. 30+ years of edge intelligence.',
          items: ['Edge Orchestration', 'AI & Visual Inspection', 'SCADA & HMI', '400+ Device Drivers'],
          footer: 'Standalone Digital Platform',
        },
        {
          title: 'Modules Hub',
          subtitle: 'Telit.com Repositioned',
          desc: 'The existing telit.com becomes a focused, powerful modules destination. Hardware-first, engineer-centric.',
          items: ['5G & LTE Modules', 'LPWA Solutions', 'Smart Modules', 'Certification Hub'],
          footer: 'Standalone Digital Platform',
        },
      ],
    },
    build: {
      label: '05 — What We Build',
      h1_1: "We don't build websites.",
      h1_2: 'We build systems.',
      desc: 'Each platform gets a full digital ecosystem. Not a redesign. A growth machine with its own engine.',
      blocks: [
        { label: 'Design & Dev', title: 'Core System', desc: 'UX research, visual design, front-end development, and CMS architecture built for scale.' },
        { label: 'Content & SEO', title: 'Growth Infrastructure', desc: 'SEO strategy, content engine, resource libraries, and organic acquisition channels.' },
        { label: 'Funnels & CTAs', title: 'Conversion Layer', desc: 'Dedicated funnels, smart CTAs, landing pages, and lead qualification systems.' },
        { label: 'Positioning', title: 'Strategic Narrative', desc: 'Positioning, messaging frameworks, competitive differentiation, and brand voice per platform.' },
      ],
    },
    strategic: {
      label: '06 — Strategic Layer',
      title: 'Advanced components that turn visitors into pipeline.',
      items: [
        { title: 'Pricing Logic', desc: 'Transparent tier comparisons. Plan selectors. Gated or open. Designed to reduce sales friction.' },
        { title: 'ROI Calculator', desc: 'Interactive tools comparing NExT global SIM vs. multiple regional contracts. TCO models that sell.' },
        { title: 'Developer Ecosystem', desc: 'API docs, AT command guides, MQTT/HTTP endpoint references. A developer hub that builds loyalty.' },
        { title: 'Competitive Comparison', desc: '"Why NExT" and "Why deviceWISE" pages with head-to-head positioning against Pelion, KORE, Ignition.' },
        { title: 'Solution-First Storytelling', desc: 'Outcome-oriented pages answering buyer questions, not listing product SKUs. "How do I deploy 50,000 devices globally?"' },
        { title: 'Driver Catalog', desc: 'Searchable directory of 400+ supported protocols and devices. A transparency differentiator for deviceWISE.' },
      ],
    },
    howwework: {
      label: '07 — How We Work',
      title: 'The Loop.',
      desc: 'One team per platform. One objective per cell.',
      center1: 'Continuous',
      center2: 'Growth Loop',
      steps: [
        { label: 'Think', desc: 'Research, strategy, positioning' },
        { label: 'Build', desc: 'Design, develop, integrate' },
        { label: 'Move', desc: 'Launch, deploy, iterate' },
        { label: 'Learn', desc: 'Measure, optimize, refine' },
        { label: 'Scale', desc: 'Grow, expand, compound' },
      ],
    },
    phases: {
      label: '08 — Phases',
      title: 'From strategy to scale.',
      items: [
        {
          title: 'Strategy', duration: 'Weeks 1-2',
          items: ['Audience research & persona mapping', 'Competitive analysis & positioning', 'Messaging frameworks per platform', 'Information architecture & sitemaps'],
        },
        {
          title: 'Design', duration: 'Weeks 3-4',
          items: ['Visual identity per platform', 'UX wireframes & prototypes', 'Component design system', 'Content strategy & copywriting'],
        },
        {
          title: 'Build', duration: 'Weeks 5-7',
          items: ['Front-end development & CMS', 'Conversion funnels & landing pages', 'SEO infrastructure & analytics', 'Integration & QA testing'],
        },
        {
          title: 'Growth', duration: 'Week 8',
          items: ['Content engine activation', 'Performance optimization', 'Launch & deployment', 'Growth roadmap handoff'],
        },
      ],
    },
    deliverables: {
      label: '09 — Deliverables',
      title: 'What you get.',
      headers: ['Deliverable', 'Detail', 'Category'],
      rows: [
        { item: '2 Full Standalone Platforms', detail: 'Connectivity + Platform (deviceWISE)', category: 'Core' },
        { item: 'Modules Hub Repositioning', detail: 'Telit.com refocused as hardware destination', category: 'Core' },
        { item: 'Conversion System', detail: 'Dedicated funnels, CTAs, landing pages per platform', category: 'Growth' },
        { item: 'Content Engine', detail: 'Blog, resources, case studies, thought leadership', category: 'Growth' },
        { item: 'Messaging System', detail: 'Positioning frameworks, brand voice, competitive copy', category: 'Strategy' },
        { item: 'Growth Roadmap', detail: 'SEO, content calendar, performance benchmarks', category: 'Strategy' },
      ],
    },
    model: {
      label: '10 — Business Model',
      title: 'Choose your model.',
      desc: 'Three engagement options. Each designed for different levels of ambition.',
      recommended: 'Recommended',
      options: [
        {
          title: 'Project',
          desc: 'Fixed-scope engagement. Strategy through launch. Clear deliverables, clear timeline.',
          features: ['Defined scope & milestones', 'One-time investment', 'Full ownership on delivery'],
        },
        {
          title: 'Platform',
          desc: 'Monthly retainer. Continuous build, optimize, and grow. Your dedicated digital team.',
          features: ['Dedicated team allocation', 'Monthly sprints & reviews', 'Ongoing optimization'],
        },
        {
          title: 'Hybrid Performance',
          desc: 'Base build + performance-linked growth. We invest in your success.',
          features: ['Reduced upfront cost', 'KPI-linked compensation', 'Aligned incentives'],
        },
      ],
    },
    why: {
      label: '12 — Why WTF',
      lines: ['Not an agency.', 'A system in motion.', 'Built to grow brands.'],
      desc: 'We combine consulting rigor with product thinking and creative execution. Strategy that converts. Design that differentiates. Systems that scale.',
    },
    pricing: {
      label: '11 — Pricing',
      title: 'Investment.',
      desc: 'Transparent pricing for each engagement model. Scoped for Telit Cinterion\'s 3-platform transformation.',
      currency: 'USD',
      plans: [
        {
          name: 'Project',
          price: '54K',
          period: 'one-time',
          desc: 'Full strategy-to-launch for 2 platforms + modules repositioning. 8 weeks.',
          includes: 'Includes:',
          features: [
            'Discovery & strategy (2 weeks)',
            'UX/UI design for 2 platforms',
            'Front-end development & CMS',
            'Content strategy & messaging',
            'SEO infrastructure',
            'QA & launch support',
          ],
          cta: 'Request Proposal',
        },
        {
          name: 'Maintenance',
          price: '8.5K',
          period: '/month',
          desc: 'Dedicated team. Continuous optimization, content, and growth post-launch.',
          includes: 'Includes:',
          features: [
            'Dedicated support team',
            'Bi-weekly sprints & reviews',
            'Content creation & publishing',
            'Conversion optimization',
            'Performance reporting',
            'Priority support & iterations',
          ],
          cta: 'Start Monthly',
          badge: 'Recommended',
        },
        {
          name: 'Full Package',
          price: '54K',
          period: '+ 8.5K/mo',
          desc: 'Development + maintenance. Complete transformation with ongoing growth.',
          includes: 'Includes:',
          features: [
            'Everything in Project',
            'Everything in Maintenance',
            'Preferred rate locked in',
            'Seamless transition to growth',
            'Quarterly business reviews',
            'Priority roadmap access',
          ],
          cta: 'Get Full Package',
        },
      ],
      note: 'All prices are indicative and subject to final scoping. Custom packages available.',
    },
    closing: {
      h1: 'Websites talk.',
      h2: 'Systems grow.',
      desc: "Ready to transform Telit Cinterion's digital ecosystem into three independent growth platforms?",
      cta1: 'Start the Conversation',
      cta2: 'Download Proposal',
      cta2_loading: 'Generating PDF...',
      footer: 'Strategy, Design & Systems for Telit Cinterion — March 2026',
    },
  },
  es: {
    nav: {
      shift: 'El Cambio',
      problem: 'Problema',
      opportunity: 'Oportunidad',
      proposal: 'Propuesta',
      phases: 'Fases',
      model: 'Modelo',
      talk: 'Hablemos',
    },
    hero: {
      tag: 'Telit Cinterion — Transformacion Digital',
      h1_1: 'Un sitio web no puede ganar',
      h1_2: 'tres mercados.',
      sub: 'Es hora de construir plataformas, no paginas.',
      cta1: 'Explorar la Propuesta',
      cta2: 'Contactar',
    },
    shift: {
      label: '01 — El Cambio',
      title: 'El estado actual.',
      desc: 'Telit Cinterion opera un unico sitio web para sus cuatro lineas de negocio. Modulos, Conectividad, Plataforma y Soluciones. Todas compitiendo por atencion.',
      s1: 'Todo vive junto.',
      s2: 'Nada compite correctamente.',
      s3: 'Negocios diferentes. Misma voz. Mismo problema.',
    },
    problem: {
      label: '02 — El Problema',
      title: 'Un solo sitio sirviendo tres mundos diferentes.',
      cards: [
        { title: 'Audiencias Mezcladas', desc: 'Ingenieros IoT, gerentes de fabrica y compradores C-level aterrizan en la misma pagina. Nadie encuentra lo que necesita.' },
        { title: 'Posicionamiento Debil', desc: 'Una voz generica intentando vender conectividad, plataformas y hardware. No vende ninguno bien.' },
        { title: 'Baja Conversion', desc: 'Embudos generalistas. Sin rutas dedicadas. Los visitantes rebotan antes de convertir.' },
        { title: 'Superados por Especialistas', desc: 'Competidores como KORE, Eseye e Ignition dominan sus mercados con presencia digital dedicada. Telit compite con un folleto corporativo.' },
      ],
    },
    opportunity: {
      label: '03 — La Oportunidad',
      h1_1: 'No dividas la empresa.',
      h1_2: 'Multiplica su crecimiento.',
      desc: '3 maquinas de crecimiento independientes. Cada una con su propia narrativa, su propio embudo, su propia audiencia.',
      stats: [
        { num: '3', label: 'Plataformas' },
        { num: '3x', label: 'Potencial de Crecimiento' },
        { num: '1', label: 'Vision Unificada' },
      ],
    },
    proposal: {
      label: '04 — La Propuesta',
      title: 'Tres plataformas. Un ecosistema.',
      desc: 'Cada una visualmente distinta, estrategicamente independiente y construida para dominar su mercado.',
      connected: 'Ecosistema Conectado',
      pillars: [
        {
          title: 'Conectividad',
          subtitle: 'NExT IoT SIM / eSIM',
          desc: 'Conectividad IoT global con posicionamiento dedicado contra KORE, Eseye y MVNOs. Narrativa propia para despliegues de mision critica.',
          items: ['SIM & eSIM Global', 'Gestion de Conectividad', 'Seguridad de Red', 'Inteligencia de Cobertura'],
          footer: 'Plataforma Digital Independiente',
        },
        {
          title: 'Plataforma',
          subtitle: 'deviceWISE IoT',
          desc: 'Plataforma IoT industrial compitiendo directamente con Kepware, Ignition y AVEVA. 30+ anos de inteligencia edge.',
          items: ['Orquestacion Edge', 'IA e Inspeccion Visual', 'SCADA & HMI', '400+ Drivers de Dispositivos'],
          footer: 'Plataforma Digital Independiente',
        },
        {
          title: 'Hub de Modulos',
          subtitle: 'Telit.com Reposicionado',
          desc: 'El telit.com existente se convierte en un destino enfocado y potente para modulos. Hardware primero, centrado en ingenieros.',
          items: ['Modulos 5G & LTE', 'Soluciones LPWA', 'Modulos Inteligentes', 'Hub de Certificacion'],
          footer: 'Plataforma Digital Independiente',
        },
      ],
    },
    build: {
      label: '05 — Lo Que Construimos',
      h1_1: 'No construimos sitios web.',
      h1_2: 'Construimos sistemas.',
      desc: 'Cada plataforma obtiene un ecosistema digital completo. No un rediseno. Una maquina de crecimiento con su propio motor.',
      blocks: [
        { label: 'Diseno & Dev', title: 'Sistema Central', desc: 'Investigacion UX, diseno visual, desarrollo front-end y arquitectura CMS construida para escalar.' },
        { label: 'Contenido & SEO', title: 'Infraestructura de Crecimiento', desc: 'Estrategia SEO, motor de contenido, bibliotecas de recursos y canales de adquisicion organica.' },
        { label: 'Embudos & CTAs', title: 'Capa de Conversion', desc: 'Embudos dedicados, CTAs inteligentes, landing pages y sistemas de calificacion de leads.' },
        { label: 'Posicionamiento', title: 'Narrativa Estrategica', desc: 'Posicionamiento, frameworks de mensajeria, diferenciacion competitiva y voz de marca por plataforma.' },
      ],
    },
    strategic: {
      label: '06 — Capa Estrategica',
      title: 'Componentes avanzados que convierten visitantes en pipeline.',
      items: [
        { title: 'Logica de Precios', desc: 'Comparaciones transparentes por nivel. Selectores de planes. Abiertos o cerrados. Disenados para reducir friccion de venta.' },
        { title: 'Calculadora ROI', desc: 'Herramientas interactivas comparando NExT SIM global vs. multiples contratos regionales. Modelos TCO que venden.' },
        { title: 'Ecosistema Developer', desc: 'Docs de API, guias de comandos AT, referencias MQTT/HTTP. Un hub de desarrolladores que genera lealtad.' },
        { title: 'Comparacion Competitiva', desc: 'Paginas "Por que NExT" y "Por que deviceWISE" con posicionamiento directo contra Pelion, KORE, Ignition.' },
        { title: 'Storytelling por Solucion', desc: 'Paginas orientadas a resultados que responden preguntas del comprador. "Como despliego 50,000 dispositivos globalmente?"' },
        { title: 'Catalogo de Drivers', desc: 'Directorio buscable de 400+ protocolos y dispositivos soportados. Un diferenciador de transparencia para deviceWISE.' },
      ],
    },
    howwework: {
      label: '07 — Como Trabajamos',
      title: 'El Loop.',
      desc: 'Un equipo por plataforma. Un objetivo por celula.',
      center1: 'Loop de',
      center2: 'Crecimiento',
      steps: [
        { label: 'Pensar', desc: 'Investigacion, estrategia' },
        { label: 'Construir', desc: 'Disenar, desarrollar' },
        { label: 'Mover', desc: 'Lanzar, desplegar, iterar' },
        { label: 'Aprender', desc: 'Medir, optimizar' },
        { label: 'Escalar', desc: 'Crecer, expandir' },
      ],
    },
    phases: {
      label: '08 — Fases',
      title: 'De la estrategia a la escala.',
      items: [
        {
          title: 'Estrategia', duration: 'Semanas 1-2',
          items: ['Investigacion de audiencia y mapeo de personas', 'Analisis competitivo y posicionamiento', 'Frameworks de mensajeria por plataforma', 'Arquitectura de informacion y sitemaps'],
        },
        {
          title: 'Diseno', duration: 'Semanas 3-4',
          items: ['Identidad visual por plataforma', 'Wireframes UX y prototipos', 'Sistema de diseno de componentes', 'Estrategia de contenido y copywriting'],
        },
        {
          title: 'Construccion', duration: 'Semanas 5-7',
          items: ['Desarrollo front-end y CMS', 'Embudos de conversion y landing pages', 'Infraestructura SEO y analitica', 'Integracion y testing QA'],
        },
        {
          title: 'Crecimiento', duration: 'Semana 8',
          items: ['Activacion del motor de contenido', 'Optimizacion de rendimiento', 'Lanzamiento y despliegue', 'Entrega del roadmap de crecimiento'],
        },
      ],
    },
    deliverables: {
      label: '09 — Entregables',
      title: 'Lo que obtienes.',
      headers: ['Entregable', 'Detalle', 'Categoria'],
      rows: [
        { item: '2 Plataformas Independientes', detail: 'Conectividad + Plataforma (deviceWISE)', category: 'Core' },
        { item: 'Reposicionamiento Hub Modulos', detail: 'Telit.com reenfocado como destino de hardware', category: 'Core' },
        { item: 'Sistema de Conversion', detail: 'Embudos, CTAs y landing pages por plataforma', category: 'Crecimiento' },
        { item: 'Motor de Contenido', detail: 'Blog, recursos, casos de exito, liderazgo de pensamiento', category: 'Crecimiento' },
        { item: 'Sistema de Mensajeria', detail: 'Frameworks de posicionamiento, voz de marca, copy competitivo', category: 'Estrategia' },
        { item: 'Roadmap de Crecimiento', detail: 'SEO, calendario de contenido, benchmarks de rendimiento', category: 'Estrategia' },
      ],
    },
    model: {
      label: '10 — Modelo de Negocio',
      title: 'Elige tu modelo.',
      desc: 'Tres opciones de compromiso. Cada una disenada para diferentes niveles de ambicion.',
      recommended: 'Recomendado',
      options: [
        {
          title: 'Proyecto',
          desc: 'Compromiso de alcance fijo. De la estrategia al lanzamiento. Entregables claros, timeline claro.',
          features: ['Alcance y milestones definidos', 'Inversion unica', 'Propiedad total en entrega'],
        },
        {
          title: 'Plataforma',
          desc: 'Retainer mensual. Construir, optimizar y crecer continuamente. Tu equipo digital dedicado.',
          features: ['Equipo dedicado asignado', 'Sprints y revisiones mensuales', 'Optimizacion continua'],
        },
        {
          title: 'Hibrido Performance',
          desc: 'Construccion base + crecimiento vinculado a rendimiento. Invertimos en tu exito.',
          features: ['Costo inicial reducido', 'Compensacion vinculada a KPIs', 'Incentivos alineados'],
        },
      ],
    },
    why: {
      label: '13 — Por Que WTF',
      lines: ['No somos una agencia.', 'Somos un sistema en movimiento.', 'Construidos para hacer crecer marcas.'],
      desc: 'Combinamos el rigor de consultoria con pensamiento de producto y ejecucion creativa. Estrategia que convierte. Diseno que diferencia. Sistemas que escalan.',
    },
    pricing: {
      label: '12 — Pricing',
      title: 'Inversion.',
      desc: 'Precios transparentes para cada modelo de compromiso. Dimensionado para la transformacion de 3 plataformas de Telit Cinterion.',
      currency: 'USD',
      plans: [
        {
          name: 'Proyecto',
          price: '54K',
          period: 'unico',
          desc: 'Estrategia completa hasta lanzamiento para 2 plataformas + reposicionamiento de modulos. 8 semanas.',
          includes: 'Incluye:',
          features: [
            'Discovery y estrategia (2 semanas)',
            'Diseno UX/UI para 2 plataformas',
            'Desarrollo front-end y CMS',
            'Estrategia de contenido y mensajeria',
            'Infraestructura SEO',
            'QA y soporte de lanzamiento',
          ],
          cta: 'Solicitar Propuesta',
        },
        {
          name: 'Mantenimiento',
          price: '8.5K',
          period: '/mes',
          desc: 'Equipo dedicado. Optimizacion continua, contenido y crecimiento post-lanzamiento.',
          includes: 'Incluye:',
          features: [
            'Equipo de soporte dedicado',
            'Sprints y revisiones quincenales',
            'Creacion y publicacion de contenido',
            'Optimizacion de conversion',
            'Reportes de rendimiento',
            'Soporte prioritario e iteraciones',
          ],
          cta: 'Iniciar Mensual',
          badge: 'Recomendado',
        },
        {
          name: 'Paquete Completo',
          price: '54K',
          period: '+ 8.5K/mes',
          desc: 'Desarrollo + mantenimiento. Transformacion completa con crecimiento continuo.',
          includes: 'Incluye:',
          features: [
            'Todo lo del Proyecto',
            'Todo lo del Mantenimiento',
            'Tarifa preferencial asegurada',
            'Transicion fluida al crecimiento',
            'Revisiones de negocio trimestrales',
            'Acceso prioritario al roadmap',
          ],
          cta: 'Obtener Paquete Completo',
        },
      ],
      note: 'Todos los precios son indicativos y sujetos a scoping final. Paquetes personalizados disponibles.',
    },
    closing: {
      h1: 'Los sitios web hablan.',
      h2: 'Los sistemas crecen.',
      desc: 'Listo para transformar el ecosistema digital de Telit Cinterion en tres plataformas de crecimiento independientes?',
      cta1: 'Iniciar la Conversacion',
      cta2: 'Descargar Propuesta',
      cta2_loading: 'Generando PDF...',
      footer: 'Estrategia, Diseno y Sistemas para Telit Cinterion — Marzo 2026',
    },
  },
};

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
