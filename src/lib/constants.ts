// ================================================
// MAGNETIA 2026 — Constants & Content Data
// ================================================

// Spring physics config
export const SPRING_CONFIG = {
  stiffness: 150,
  damping: 15,
  mass: 1,
} as const

// ================================================
// Qué Hacemos — 4 value proposition blocks
// ================================================
export interface QueHacemosBlock {
  title: string
  paragraphs: string[]
}

export const QUE_HACEMOS_BLOCKS: QueHacemosBlock[] = [
  {
    title: 'Identificamos las empresas exactas',
    paragraphs: [
      'No "cualquier cliente". THE cliente. El que tiene el problema que resuelves. El que está en el momento adecuado. El que tiene el presupuesto.',
      'No lanzamos red a ver qué pica. Pescamos con arpón.',
    ],
  },
  {
    title: 'Encontramos quién toma las decisiones',
    paragraphs: [
      'No contactamos "al que pille". Encontramos al CEO, al Director Comercial, al CMO. A la persona que firma.',
      'Dentro de cada empresa, identificamos quién decide, quién tiene el problema, quién busca la solución.',
    ],
  },
  {
    title: 'Contactamos uno a uno',
    paragraphs: [
      'Cero plantillas genéricas. Cero "Hola, soy [nombre] de [empresa]".',
      'Cada mensaje escrito para cada persona. Mencionando su empresa, su sector, su situación específica. En el canal que mejor funciona: email, LinkedIn, teléfono.',
      'No parece una campaña de marketing. Parece una conversación entre dos profesionales.',
    ],
  },
  {
    title: 'Tu agenda llena de reuniones cualificadas',
    paragraphs: [
      'No leads fríos que hay que "calentar". Conversaciones con gente que ya sabe quién eres, qué haces y por qué eres relevante para ellos.',
      'La reunión de ventas más fácil de tu vida.',
    ],
  },
]

// ================================================
// Método — 5 funnel steps (scrollytelling)
// ================================================
export const METODO_STEPS = [
  {
    num: '01',
    title: 'ENTENDER TU NEGOCIO',
    desc: 'Nos sentamos contigo. ¿Quién es tu cliente ideal? ¿Cómo vendes ahora? ¿Qué has probado?\n\nDiseñamos el plan: anuncios, web, búsqueda de contactos, emails, llamadas. Solo lo que realmente necesites. Ni más ni menos.',
  },
  {
    num: '02',
    title: 'PONER TODO EN MARCHA',
    desc: 'Somos rápidos. Montamos campañas, webs, automatizaciones. Salimos al mercado en días, no meses.\n\nPersonalizamos los mensajes según tu cliente ideal. Y cuando funciona, escalamos. Llevamos años en esto, dominamos las herramientas, sabemos qué funciona.',
  },
  {
    num: '03',
    title: 'GENERAR Y CUALIFICAR',
    desc: 'Aquí está la diferencia: no somos una agencia de marketing al uso. Vivimos para que vendas.\n\nGeneramos contactos. Los llamamos. Conversamos. Cualificamos. Te ayudamos con la carta de venta, la llamada, el cierre.\n\nTenemos experiencia comercial. Solo llegan a ti personas listas para comprar.',
  },
  {
    num: '04',
    title: 'MEDIR Y MEJORAR',
    desc: 'Contactos, reuniones, clientes cerrados, ROI. Ajustamos constantemente.\n\nSomos flexibles. Dominamos muchas herramientas. Por eso somos competitivos y rápidos. Si algo no funciona, pivotamos. Si funciona, aceleramos.',
  },
] as const

// ================================================
// Team — Carousel data
// ================================================
export const TEAM_PHOTOS = [
  '/imagenes/fotos/equipo-fundadores-sofa-mirando-camara.jpeg',
  '/imagenes/fotos/equipo-fundadores-escalera-conversando.jpeg',
  '/imagenes/fotos/equipo-podcast-conversacion-riendo.jpeg',
  '/imagenes/fotos/equipo-reunion-oficina-sonriendo.jpeg',
  '/imagenes/fotos/equipo-conversacion-informal-lounge-cafe.jpeg',
  '/imagenes/fotos/equipo-fundadores-oficina-sonriendo.jpeg',
  '/imagenes/fotos/equipo-tres-personas-conversando-oficina.jpeg',
  '/imagenes/fotos/equipo-fundadores-escalera-riendo.jpeg',
] as const

// ================================================
// Servicios — 5 service rows (list layout)
// ================================================
export interface ServiceRowData {
  clientType: string
  serviceName: string
  price: string
  description: string
  image?: string
  imagePlaceholder: string
}

export const SERVICIOS_LIST: ServiceRowData[] = [
  {
    clientType: 'VENDES A EMPRESAS',
    serviceName: 'Generación de Contactos + Acompañamiento Comercial',
    price: '397€/mes',
    description: 'Creamos listas optimizadas de tus clientes ideales. Diseñamos campañas con correos personalizados. Llamamos, cualificamos, agendamos reuniones. Te ayudamos a cerrar con mejores argumentos de venta.',
    image: '/imagenes/fotos-servicios/servicio-01-empresas.jpg',
    imagePlaceholder: 'Sobre + Sello',
  },
  {
    clientType: 'VENDES A PARTICULARES',
    serviceName: 'Tráfico Cualificado + Conversión Web',
    price: '297€/mes',
    description: 'Generamos tráfico de gente que realmente puede comprarte. Optimizamos tu web para que conviertan más. Te ayudamos a mejorar la oferta y cerrar la venta.',
    image: '/imagenes/fotos-servicios/servicio-02-particulares.jpg',
    imagePlaceholder: 'Megáfono',
  },
  {
    clientType: 'QUIERES VENDER TUS SERVICIOS POR INTERNET',
    serviceName: 'Llevamos tus Servicios a Digital',
    price: '997€ proyecto',
    description: 'Te ayudamos a llevar tus servicios profesionales a internet (no ecommerce). Definimos qué tecnología es la más adecuada. Montamos todo el sistema y te acompañamos para que empieces a vender online.',
    image: '/imagenes/fotos-servicios/servicio-03-digital.jpg',
    imagePlaceholder: 'Brújula',
  },
  {
    clientType: 'NECESITAS OPTIMIZAR PROCESOS EN TU EMPRESA',
    serviceName: 'Organización Interna + Automatizaciones con IA',
    price: 'A medida',
    description: 'Traemos orden a tu empresa. Optimizamos procesos comerciales y de marketing con inteligencia artificial. Montamos automatizaciones que ahorran tiempo y dinero. Formamos a tu equipo.',
    image: '/imagenes/fotos-servicios/servicio-04-procesos.png',
    imagePlaceholder: 'Puzzle',
  },
  {
    clientType: 'QUIERO APRENDER Y HACERLO YO MISMO',
    serviceName: 'Llave en Mano + Formación',
    price: '997€ setup',
    description: 'Te lo montamos todo: herramientas, campañas de generación de contactos, bases de datos, plantillas. Formamos a tu departamento de marketing o comercial. Luego lo ejecutáis con autonomía.',
    image: '/imagenes/fotos-servicios/servicio-05-llaveenmani-version-2.jpg',
    imagePlaceholder: 'Llave',
  },
]

export interface ToolItem {
  name: string
  logo: string
}

export const TOOLS_LIST: ToolItem[] = [
  { name: 'Clay', logo: '/imagenes/logos-herramientas/clay.svg' },
  { name: 'Smart Leads', logo: '/imagenes/logos-herramientas/smartleads.svg' },
  { name: 'Claude', logo: '/imagenes/logos-herramientas/claude.svg' },
  { name: 'Google Ads', logo: '/imagenes/logos-herramientas/googleads.svg' },
  { name: 'Analytics', logo: '/imagenes/logos-herramientas/analytics.svg' },
  { name: 'Meta Ads', logo: '/imagenes/logos-herramientas/meta.svg' },
  { name: 'Search Console', logo: '/imagenes/logos-herramientas/searchconsole.svg' },
  { name: 'Calendly', logo: '/imagenes/logos-herramientas/calendly.svg' },
  { name: 'LinkedIn Sales Navigator', logo: '/imagenes/logos-herramientas/linkedin.svg' },
  { name: 'Apollo', logo: '/imagenes/logos-herramientas/apollo.svg' },
  { name: 'Zapier', logo: '/imagenes/logos-herramientas/zapier.svg' },
  { name: 'Make', logo: '/imagenes/logos-herramientas/make.svg' },
  { name: 'n8n', logo: '/imagenes/logos-herramientas/n8n.svg' },
  { name: 'Gemini', logo: '/imagenes/logos-herramientas/gemini.svg' },
  { name: 'Typeform', logo: '/imagenes/logos-herramientas/typeform.svg' },
]

// ================================================
// Casos de Éxito
// ================================================
export interface CaseData {
  sector: string
  objective: string
  before: string[]
  after: string[]
  highlight: string
  highlightValue: string
}

export const CASES: CaseData[] = [
  {
    sector: 'Salud',
    objective: 'Llenar agenda nueva ubicación',
    before: ['0 pacientes', 'Nueva apertura'],
    after: ['127 pacientes nuevos', '23 recurrentes'],
    highlight: 'ROI',
    highlightValue: '8.2x',
  },
  {
    sector: 'Software',
    objective: 'Demos cualificadas',
    before: ['5 demos/mes (frías)', 'Cierre: 10%'],
    after: ['43 demos/mes', 'Cierre: 28%'],
    highlight: 'Pipeline',
    highlightValue: '+€180K',
  },
  {
    sector: 'Servicios profesionales',
    objective: 'Proyectos >€20K',
    before: ['Dependencia de referidos', 'Irregular'],
    after: ['8 proyectos cerrados', 'Ticket medio: €28K'],
    highlight: 'Resultado',
    highlightValue: 'Predecible',
  },
]

// ================================================
// Testimonios
// ================================================
export interface TestimonialData {
  text: string
  name: string
  role: string
  company: string
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    text: 'Pasamos de buscar clientes a que nos busquen. El cambio fue brutal.',
    name: 'Ana Martínez',
    role: 'Directora Marketing',
    company: 'Clínica San Blas',
  },
  {
    text: 'No son una agencia más. Son parte de nuestro equipo comercial.',
    name: 'Carlos López',
    role: 'CEO',
    company: 'TechSolutions',
  },
  {
    text: 'ROI del 9x en el primer trimestre. Nunca había visto algo así.',
    name: 'Laura Sánchez',
    role: 'CFO',
    company: 'ConsultingPro',
  },
  {
    text: 'En 3 meses conseguimos más clientes que en todo el año anterior con nuestro comercial.',
    name: 'Juan García',
    role: 'CEO',
    company: 'IndustriaPlus',
  },
  {
    text: 'Lo mejor es que no tengo que preocuparme por la captación. Ellos se encargan y yo me centro en lo que mejor sé hacer.',
    name: 'Patricia Sánchez',
    role: 'Head of Sales',
    company: 'DataVision',
  },
  {
    text: 'Profesionales, directos y efectivos. Exactamente lo que prometían. En 3 meses recuperamos la inversión.',
    name: 'David López',
    role: 'COO',
    company: 'LogisTech',
  },
]

// ================================================
// Logo bar (placeholder)
// ================================================
export const CLIENT_LOGOS = [
  'TechSolutions',
  'IndustriaPlus',
  'ConsultingPro',
  'GreenEnergy',
  'LogisTech',
  'DataVision',
] as const

// ================================================
// Story — 2 alternating blocks (problem / solution)
// ================================================
export interface StoryBlock {
  eyebrow: string
  title: string
  paragraphs: string[]
}

export const STORY_BLOCKS: StoryBlock[] = [
  {
    eyebrow: 'El problema',
    title: 'Buscas clientes, pero no te encuentran',
    paragraphs: [
      'Campañas que no convierten. Leads fríos que nunca responden. Comerciales quemados llamando a puertas equivocadas.',
      'El 80% de las empresas B2B dependen de referidos o del boca a boca. Cuando eso se seca, no hay plan B.',
    ],
  },
  {
    eyebrow: 'La solución',
    title: 'Nosotros los buscamos por ti',
    paragraphs: [
      'Identificamos las empresas exactas que necesitan lo que vendes. Encontramos a la persona que decide. Contactamos uno a uno, con mensajes que parecen conversaciones, no campañas.',
      'Tu agenda se llena de reuniones con gente que ya sabe quién eres, qué haces y por qué eres relevante para ellos.',
    ],
  },
]

// ================================================
// Features — 6 service/feature cards (grid 3x2)
// ================================================
export interface FeatureData {
  icon: 'funnel' | 'calendar' | 'automation' | 'megaphone' | 'envelope' | 'strategy'
  title: string
  description: string
}

export const FEATURES: FeatureData[] = [
  {
    icon: 'funnel',
    title: 'Embudos de Conversión',
    description: 'Diseñamos el camino más corto entre "me interesa" y "quiero una reunión". Sin fricción, sin formularios eternos.',
  },
  {
    icon: 'calendar',
    title: 'Generación de Citas',
    description: 'Tu agenda llena de reuniones con personas que ya saben quién eres y por qué deberían escucharte.',
  },
  {
    icon: 'automation',
    title: 'Automatización',
    description: 'Tu equipo invisible que contacta, sigue y cualifica 24/7 mientras tú cierras ventas.',
  },
  {
    icon: 'megaphone',
    title: 'Paid Media',
    description: 'Aparecer exactamente donde están tus clientes, en el momento en que buscan lo que vendes.',
  },
  {
    icon: 'envelope',
    title: 'Email Marketing',
    description: 'Emails que la gente quiere leer. Secuencias que generan respuestas, no borrados.',
  },
  {
    icon: 'strategy',
    title: 'Estrategia Digital',
    description: 'Analizamos tu mercado, tu competencia y tus clientes ideales para diseñar un plan que funcione.',
  },
]
