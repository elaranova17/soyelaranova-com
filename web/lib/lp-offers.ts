/**
 * Ofertas para landings `/lp/*` (Ads + FL).
 * Precios alineados a docs/OFERTA_SERVICIOS.md.
 * Embudo: LP → pre-análisis → sesión 25 CHF → proyecto.
 */

import type { Metadata } from 'next'

export type LpPain = { dolor: string; solucion: string }

export type LpVisual = {
  heroImage: string
  heroAlt: string
  /** CSS object-position */
  heroPosition: string
}

export type LpOffer = {
  /** slug de servicio madre: automatizaciones | paginas-web | landing-pages | google-ads */
  service: string
  /** slug del paquete hija; null = landing madre */
  pack: string | null
  eyebrow: string
  title: string
  /** plain title for metadata */
  titlePlain: string
  description: string
  subtitle: string
  ctaLabel: string
  ctaNote: string
  priceAnchor: string
  priceBullets: readonly string[]
  caseTitle: string
  caseBody: string
  dolores: readonly LpPain[]
  pasos: readonly [string, string, string][]
  faq: readonly [string, string][]
  discoveryDefaults?: {
    service: string
    pack?: string
  }
}

/** Hero full-bleed por servicio madre (producto real / foto Evelyn). */
const SERVICE_VISUALS: Record<string, LpVisual> = {
  automatizaciones: {
    heroImage: '/media/servicios/servicio-01-automatizaciones.webp',
    heroAlt: 'Sistema de automatizaciones conectando formularios, CRM y mensajes',
    heroPosition: 'center 42%',
  },
  'paginas-web': {
    heroImage: '/media/servicios/servicio-02-webs.webp',
    heroAlt: 'Sitio web profesional pensado para convertir',
    heroPosition: 'center 38%',
  },
  'landing-pages': {
    heroImage: '/media/recursos/recurso-pantallas.webp',
    heroAlt: 'Pantallas de landing page lista para campaña',
    heroPosition: 'center 35%',
  },
  'google-ads': {
    heroImage: '/media/servicios/servicio-03-google-ads.webp',
    heroAlt: 'Campañas de Google Ads con medición clara',
    heroPosition: 'center 40%',
  },
}

/** Overrides por paquete hija — evita la misma foto en todas las LPs. */
const PACK_VISUALS: Record<string, LpVisual> = {
  'automatizaciones/arranque': {
    heroImage: '/_assets/photos/kit-web-real/evelyn-estudio-profesional.jpg',
    heroAlt: 'Evelyn Patiño en estudio, lista para armar tu primera automatización',
    heroPosition: '58% 22%',
  },
  'automatizaciones/pro': {
    heroImage: '/_assets/photos/kit-web-real/01-hero-evelyn.webp',
    heroAlt: 'Evelyn Patiño, ingeniera de software — sistemas Pro',
    heroPosition: '55% 20%',
  },
  'automatizaciones/a-medida': {
    heroImage: '/_assets/photos/kit-web-real/evelyn-de-pie.jpg',
    heroAlt: 'Evelyn Patiño — automatizaciones a medida',
    heroPosition: '50% 18%',
  },
  'paginas-web/landing-unica': {
    heroImage: '/media/recursos/recurso-pantallas.webp',
    heroAlt: 'Landing única lista para Ads',
    heroPosition: 'center 32%',
  },
  'paginas-web/sitio-negocio': {
    heroImage: '/media/servicios/servicio-02-webs.webp',
    heroAlt: 'Sitio de negocio con arquitectura de conversión',
    heroPosition: '62% 40%',
  },
  'paginas-web/sitio-ads': {
    heroImage: '/_assets/photos/kit-web-real/evelyn-estudio-profesional.jpg',
    heroAlt: 'Evelyn Patiño — sitio + Ads como sistema',
    heroPosition: '48% 24%',
  },
  'google-ads/setup': {
    heroImage: '/_assets/photos/kit-web-real/00-identidad-frontal.webp',
    heroAlt: 'Evelyn Patiño — setup de Google Ads medible',
    heroPosition: '50% 18%',
  },
  'google-ads/gestion': {
    heroImage: '/media/servicios/servicio-03-google-ads.webp',
    heroAlt: 'Gestión continua de Google Ads con lectura de datos',
    heroPosition: '70% 45%',
  },
}

const FALLBACK_VISUAL: LpVisual = {
  heroImage: '/_assets/photos/evelyn_pro_hero.jpg',
  heroAlt: 'Evelyn Patiño, ingeniera de software',
  heroPosition: '58% 22%',
}

export function getLpVisual(offer: LpOffer): LpVisual {
  if (offer.pack) {
    const packKey = `${offer.service}/${offer.pack}`
    const packVisual = PACK_VISUALS[packKey]
    if (packVisual) return packVisual
  }
  return SERVICE_VISUALS[offer.service] ?? FALLBACK_VISUAL
}

export function lpOfferMetadata(offer: LpOffer): Metadata {
  const visual = getLpVisual(offer)
  return {
    title: offer.titlePlain,
    description: offer.description,
    robots: { index: false, follow: false },
    openGraph: {
      title: offer.titlePlain,
      description: offer.description,
      images: [
        {
          url: visual.heroImage,
          width: 1200,
          height: 630,
          alt: visual.heroAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: offer.titlePlain,
      description: offer.description,
      images: [visual.heroImage],
    },
  }
}

const FUNNEL_STEPS: readonly [string, string, string][] = [
  [
    '01',
    'Pre-análisis didáctico',
    'Completás un cuestionario guiado. Yo reviso tu contexto, web y fugas — sin call larga gratis.',
  ],
  [
    '02',
    'Sesión estratégica · 25 CHF',
    '20 min donde te comparto lo que vi + una mini-ruta. Filtra curiosos y paga mi tiempo.',
  ],
  [
    '03',
    'Proyecto con precio cerrado',
    'Si hay fit, cotizamos Arranque / Pro / A medida e implementamos.',
  ],
]

export const lpMotherOffers: readonly LpOffer[] = [
  {
    service: 'automatizaciones',
    pack: null,
    eyebrow: 'Automatización para negocios pequeños',
    titlePlain: 'Automatizá tu negocio: menos trabajo manual, cero clientes perdidos',
    title: 'Automatizá tu negocio: menos trabajo manual, cero clientes perdidos.',
    description:
      'Automatizaciones para negocios pequeños: formularios, emails, WhatsApp y CRM conectados. Pre-análisis didáctico + sesión estratégica.',
    subtitle:
      'Si todavía respondés cada mensaje, copiás datos a mano y perseguís clientes uno por uno, tu negocio depende de que vos no te enfermes nunca. Eso se arregla.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Gratis · después sesión 25 CHF si querés profundizar',
    priceAnchor: 'Desde 450 €',
    priceBullets: [
      'Precio cerrado antes de empezar — sin sorpresas',
      'Funciona con las herramientas que ya usás',
      'Te lo dejo andando y te enseño a manejarlo',
    ],
    caseTitle: 'val-débarras: pedidos que llegan solos, cada día.',
    caseBody:
      'Para esta empresa suiza construí el sistema completo: formularios que capturan cada solicitud, seguimiento automático y campañas conectadas. No una página bonita — un sistema que genera pedidos reales sin trabajo manual.',
    dolores: [
      {
        dolor: 'Respondés lo mismo mil veces',
        solucion:
          'Emails y WhatsApp automáticos que contestan al instante con tu voz — cada lead recibe respuesta aunque estés dormida.',
      },
      {
        dolor: 'Los datos viven regados por todos lados',
        solucion:
          'Formularios, hojas y CRM conectados: cada cliente entra una sola vez y aparece donde lo necesitás.',
      },
      {
        dolor: 'Se te escapan clientes por no hacer seguimiento',
        solucion:
          'Recordatorios y seguimientos automáticos — nadie se queda sin respuesta, nada se pierde en el camino.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      [
        '¿Qué se puede automatizar exactamente?',
        'Formularios que llegan a tu CRM, respuestas de email y WhatsApp, recordatorios de cita, facturas, reportes… si lo hacés a mano cada semana, casi seguro se puede automatizar.',
      ],
      [
        '¿Cuánto tarda?',
        'La mayoría de automatizaciones quedan andando entre 1 y 3 semanas, según la cantidad de procesos.',
      ],
      [
        '¿El pre-análisis es una call gratis?',
        'No. Completás un cuestionario didáctico. Yo te mando una lectura inicial. Si querés profundizar, agendamos sesión estratégica de 20 min (25 CHF).',
      ],
      [
        '¿Necesito tener página web?',
        'No. Muchas automatizaciones funcionan con lo que ya usás: WhatsApp, Gmail, hojas de cálculo, tu CRM actual.',
      ],
    ],
    discoveryDefaults: { service: 'Automatizaciones' },
  },
  {
    service: 'paginas-web',
    pack: null,
    eyebrow: 'Sitios web que venden',
    titlePlain: 'Tu página web lista para vender, no solo para verse bonita',
    title: 'Tu página web lista para vender, no solo para verse bonita.',
    description:
      'Sitios web profesionales para negocios que necesitan presencia sólida, mensaje claro y conversión. Pre-análisis + sesión estratégica.',
    subtitle:
      'Si tu web es un folleto digital que nadie mide — o ni tenés casa digital y vivís en Instagram — construimos la base que sostiene tus ventas.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Gratis · después sesión 25 CHF si querés profundizar',
    priceAnchor: 'Desde 1.900 €',
    priceBullets: [
      'Arquitectura y copy orientados a conversión',
      'Mobile-first, rápido, medible',
      'Formularios y analítica conectados',
    ],
    caseTitle: 'Presencia que genera confianza (y pedidos).',
    caseBody:
      'En val-débarras la web no es decoración: estructura clara por servicio/zona, formularios que capturan y un sistema medible. Eso es el estándar que aplico a sitios de negocio.',
    dolores: [
      {
        dolor: 'Dependés solo de Instagram o WhatsApp',
        solucion:
          'Una casa digital propia donde la persona entiende qué hacés, confía y te contacta — sin perderse en el feed.',
      },
      {
        dolor: 'Tu web actual no explica ni vende',
        solucion:
          'Mensaje, secciones y CTAs pensados para el siguiente paso: cotizar, reservar o escribirte.',
      },
      {
        dolor: 'No sabés si la web sirve',
        solucion:
          'Analítica y eventos base: sabés qué páginas miran y dónde se caen antes de invertir en Ads.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      [
        '¿Incluye textos?',
        'Sí, copy base para explicar oferta, proceso y autoridad. Vos aportás datos y referencias; yo lo ordeno.',
      ],
      [
        '¿Cuánto tarda un sitio?',
        'Un Sitio Negocio suele estar en 2–3 semanas según contenido y revisiones.',
      ],
      [
        '¿Y si solo necesito una landing?',
        'Tenemos Landing Única (650 €). Esta página es para sitios completos; también hay LP dedicada a landings.',
      ],
      [
        '¿Cómo empiezo?',
        'Hacé el pre-análisis. Con eso preparo tu lectura y, si hay fit, la sesión estratégica de 25 CHF.',
      ],
    ],
    discoveryDefaults: { service: 'Sitio web profesional' },
  },
  {
    service: 'landing-pages',
    pack: null,
    eyebrow: 'Landings para campañas',
    titlePlain: 'Landing pages hechas para convertir, no para decorar',
    title: 'Landing pages hechas para convertir, no para decorar.',
    description:
      'Landing pages para Google Ads, Meta y lanzamientos: un solo objetivo, mensaje claro, medición. Pre-análisis + sesión estratégica.',
    subtitle:
      'Una página, una promesa, una acción. Ideal si vas a pagar por clics o lanzar algo y no querés quemar presupuesto en una home genérica.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Gratis · después sesión 25 CHF si querés profundizar',
    priceAnchor: 'Desde 650 €',
    priceBullets: [
      'Estructura de conversión + FAQ de objeciones',
      'CTA y página de gracias',
      'Eventos base para medir leads',
    ],
    caseTitle: 'Landings por intención = Ads que no se desperdician.',
    caseBody:
      'En proyectos con Ads, cada intención tiene su página. El anuncio y el H1 dicen lo mismo: sube Quality Score y baja el coste por lead.',
    dolores: [
      {
        dolor: 'Mandás Ads a la home y no convierte',
        solucion:
          'Landing con una sola intención: cotizar, reservar o dejar datos — alineada al anuncio.',
      },
      {
        dolor: 'El mensaje es confuso',
        solucion:
          'Headline, beneficios, prueba y CTA en un hilo claro. Mobile primero.',
      },
      {
        dolor: 'No medís nada',
        solucion:
          'Eventos de clic y envío de formulario para saber qué anuncio trae clientes reales.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      [
        '¿Una landing sirve para varios anuncios?',
        'Si prometen lo mismo, sí. Si cada anuncio habla de una necesidad distinta, conviene una variante por intención.',
      ],
      [
        '¿Incluye los anuncios?',
        'Puedo ayudar con estructura y copy base. La gestión completa de campañas es un servicio aparte o el paquete Sitio + Ads.',
      ],
      [
        '¿Cuánto tarda?',
        'Landing Única: 5–7 días hábiles en la mayoría de casos.',
      ],
      [
        '¿Cómo empiezo?',
        'Pre-análisis didáctico → lectura tuya → sesión 25 CHF si querés la mini-ruta en vivo.',
      ],
    ],
    discoveryDefaults: { service: 'Landing page para campaña' },
  },
  {
    service: 'google-ads',
    pack: null,
    eyebrow: 'Google Ads con medición',
    titlePlain: 'Campañas de Google Ads que se pueden medir (y mejorar)',
    title: 'Campañas de Google Ads que se pueden medir (y mejorar).',
    description:
      'Google Ads + medición para pymes: estructura por intención, conversiones y landings listas. Pre-análisis + sesión estratégica.',
    subtitle:
      'Antes de subir presupuesto, ordenamos promesa, landing y eventos. Menos adivinanza, más sistema.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Gratis · después sesión 25 CHF si querés profundizar',
    priceAnchor: 'Setup 450 € · gestión 350 €/mes',
    priceBullets: [
      'Estructura por intención de búsqueda',
      'Conversiones instaladas de verdad',
      'Landing alineada al anuncio (o te digo qué falta)',
    ],
    caseTitle: 'Ads conectados a captura real.',
    caseBody:
      'En val-débarras las campañas no terminan en un “gracias” vacío: el lead entra al sistema y hay seguimiento. Eso es medición con consecuencias.',
    dolores: [
      {
        dolor: 'Gastás y no sabés qué funciona',
        solucion:
          'Eventos de conversión y lecturas claras: qué búsquedas traen leads y cuáles queman plata.',
      },
      {
        dolor: 'El anuncio promete una cosa y la página otra',
        solucion:
          'Alineamos mensaje anuncio ↔ landing. Mejor Quality Score, CPC más sano.',
      },
      {
        dolor: 'Querés Ads sin base',
        solucion:
          'Primero validamos oferta y página. Si hace falta, construimos la landing antes de escalar pauta.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      [
        '¿Cuánto presupuesto de Ads necesito?',
        'Depende del mercado. Prefiero una prueba controlada con landing medida antes de recomendar escalar. Suele tener sentido desde ~300–500 €/mes de inversión.',
      ],
      [
        '¿Puedo hacer Ads sin landing?',
        'Se puede, pero suele quemar presupuesto. Para campañas serias, landing y eventos son parte del sistema.',
      ],
      [
        '¿Qué incluye el setup?',
        'Estrategia inicial, estructura, anuncios base, keywords, conversiones y panel de lectura.',
      ],
      [
        '¿Cómo empiezo?',
        'Pre-análisis → te digo si estás listo para Ads o qué arreglar antes → sesión 25 CHF si querés la ruta en vivo.',
      ],
    ],
    discoveryDefaults: { service: 'Google Ads y medicion' },
  },
]

export const lpPackOffers: readonly LpOffer[] = [
  {
    service: 'automatizaciones',
    pack: 'arranque',
    eyebrow: 'Automatizaciones · Arranque',
    titlePlain: 'Tu primera automatización · 450 €',
    title: 'Tu primera automatización — una tarea menos cada día.',
    description: 'Paquete Arranque: 1 flujo completo, hasta 3 herramientas. 450 €.',
    subtitle:
      'Para el negocio que quiere quitarse UNA tarea que le come tiempo: formulario → CRM/hoja → email o WhatsApp.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Validamos si Arranque es tu punto de partida',
    priceAnchor: '450 €',
    priceBullets: [
      '1 flujo de principio a fin',
      'Hasta 3 herramientas conectadas',
      'Documentación simple · entrega 5–7 días',
    ],
    caseTitle: 'Empezar por un flujo que duele.',
    caseBody:
      'El Arranque no pretende automatizar todo el negocio: elimina la fuga más cara primero. Después escalamos a Pro si hace falta.',
    dolores: [
      {
        dolor: 'Copiás leads a mano',
        solucion: 'Cada formulario cae solo donde tiene que caer y te avisa.',
      },
      {
        dolor: 'Olvidás responder',
        solucion: 'Mensaje automático de confirmación + aviso interno.',
      },
      {
        dolor: 'No sabés por dónde empezar',
        solucion: 'El pre-análisis te dice cuál es el flujo #1 con más impacto.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Puedo sumar más flujos después?', 'Sí. Arranque es la puerta; Pro o retainer continúan.'],
      ['¿Qué herramientas usás?', 'n8n / Make / Zapier según tu stack y presupuesto.'],
      ['¿Hay retainer?', 'Sí: Cuidado 250 €/mes o Evolución 450 €/mes.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF si querés la mini-ruta → Arranque.'],
    ],
    discoveryDefaults: { service: 'Automatizaciones', pack: 'Arranque 450€' },
  },
  {
    service: 'automatizaciones',
    pack: 'pro',
    eyebrow: 'Automatizaciones · Pro',
    titlePlain: 'Sistema de varios flujos + IA · 1.400 €',
    title: 'Un proceso completo del negocio, automatizado.',
    description: 'Paquete Pro: hasta 4 flujos, un paso con IA, tablero. 1.400 €.',
    subtitle:
      'Para quien quiere automatizar un proceso entero (captación o postventa), no solo un zap suelto.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Chequeamos alcance Pro vs Arranque',
    priceAnchor: '1.400 €',
    priceBullets: [
      'Hasta 4 flujos conectados',
      'Un paso con IA (clasificar, resumir, redactar)',
      'Formación 1:1 · entrega 2–3 semanas',
    ],
    caseTitle: 'De tareas sueltas a sistema.',
    caseBody:
      'Pro conecta el embudo: captura, clasificación, seguimiento y avisos. Menos fricción, más leads atendidos.',
    dolores: [
      {
        dolor: 'Tenés 3–4 tareas manuales en cadena',
        solucion: 'Un solo sistema las encadena sin que copies datos.',
      },
      {
        dolor: 'Los leads no se priorizan',
        solucion: 'IA o reglas para clasificar y atender primero lo que vende.',
      },
      {
        dolor: 'Nadie ve el estado del flujo',
        solucion: 'Tablero simple para saber qué pasó con cada lead.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Incluye chatbot?', 'Un paso con IA sí; chatbot completo suele ir a A medida.'],
      ['¿Puedo partir de Arranque?', 'Sí. Muchos clientes empiezan en 450 € y suben a Pro.'],
      ['¿Mantenimiento?', 'Retainer opcional después de la entrega.'],
      ['¿Cómo empiezo?', 'Pre-análisis + sesión 25 CHF para cerrar alcance.'],
    ],
    discoveryDefaults: { service: 'Automatizaciones', pack: 'Pro 1400€' },
  },
  {
    service: 'automatizaciones',
    pack: 'a-medida',
    eyebrow: 'Automatizaciones · A medida',
    titlePlain: 'Automatización a medida · desde 3.200 €',
    title: 'Un sistema hecho a la medida de tu operación.',
    description: 'Automatización a medida con arquitectura, IA/chatbot e integraciones. Desde 3.200 €.',
    subtitle:
      'Para procesos propios, APIs, agentes o complejidad que no cabe en un paquete cerrado.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Diagnóstico de alcance antes de presupuesto cerrado',
    priceAnchor: 'Desde 3.200 €',
    priceBullets: [
      'Arquitectura a medida + flujos del alcance acordado',
      'Chatbot / agente IA si aplica',
      'Documentación técnica y traspaso',
    ],
    caseTitle: 'Cuando el negocio ya no cabe en un zap.',
    caseBody:
      'A medida es para operación real: reglas propias, integraciones y un sistema que escala sin sumar personal.',
    dolores: [
      {
        dolor: 'Tus procesos son únicos',
        solucion: 'Diseñamos arquitectura, no plantillas genéricas.',
      },
      {
        dolor: 'Necesitás IA o chatbot serio',
        solucion: 'Lo integramos donde aporta, con pruebas y traspaso.',
      },
      {
        dolor: 'Querés presupuesto cerrado',
        solucion: 'El precio se cierra tras el pre-análisis y la sesión de alcance.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Por qué “desde”?', 'El alcance define horas e integraciones. Cerramos número tras diagnóstico.'],
      ['¿Cuánto tarda?', '4–6 semanas típico según complejidad.'],
      ['¿Hay alternativas más chicas?', 'Arranque y Pro existen para no sobre-ingenierizar.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → propuesta A medida.'],
    ],
    discoveryDefaults: { service: 'Automatizaciones', pack: 'A medida' },
  },
  {
    service: 'paginas-web',
    pack: 'landing-unica',
    eyebrow: 'Webs · Landing Única',
    titlePlain: 'Landing Única · 650 €',
    title: 'Una página con un solo objetivo: que te contacten.',
    description: 'Landing de conversión: copy, diseño mobile-first, formulario y analítica. 650 €.',
    subtitle: 'Para lanzar un servicio, campaña o captar leads con foco — sin armar un sitio completo todavía.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Confirmamos mensaje y CTA antes de diseñar',
    priceAnchor: '650 €',
    priceBullets: [
      '1 landing de conversión completa',
      'Formulario conectado + analítica básica',
      'Entrega 5–7 días hábiles',
    ],
    caseTitle: 'Foco = conversión.',
    caseBody:
      'Una sola promesa, una sola acción. Ideal antes de Ads o para un lanzamiento puntual.',
    dolores: [
      { dolor: 'Home genérica para Ads', solucion: 'Landing alineada al anuncio.' },
      { dolor: 'No hay un CTA claro', solucion: 'Un objetivo, medible.' },
      { dolor: 'Necesitás rapidez', solucion: 'Paquete cerrado en días, no meses.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Incluye Ads?', 'No. Ads es setup aparte o paquete Sitio + Ads.'],
      ['¿Puedo pasar a sitio completo después?', 'Sí, reutilizamos mensaje y marca.'],
      ['¿Idioma?', 'ES (y variantes LATAM/ES-ES según tu mercado).'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF opcional → producción.'],
    ],
    discoveryDefaults: { service: 'Landing page para campaña', pack: 'Landing Única 650€' },
  },
  {
    service: 'paginas-web',
    pack: 'sitio-negocio',
    eyebrow: 'Webs · Sitio Negocio',
    titlePlain: 'Sitio Negocio · 1.900 €',
    title: 'Tu web profesional completa — clara, creíble, medible.',
    description: 'Sitio de 5–6 páginas, copy, SEO base, formularios y analítica. 1.900 €.',
    subtitle: 'Para el negocio o profesional que necesita presencia sólida, no un parche en Linktree.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Mapeamos páginas y mensaje antes de diseñar',
    priceAnchor: '1.900 €',
    priceBullets: [
      'Hasta 5–6 páginas a medida',
      'SEO base + velocidad',
      'Entrega 2–3 semanas',
    ],
    caseTitle: 'Casa digital que sostiene la marca.',
    caseBody:
      'Estructura, copy y formularios listos para que Google y tus clientes te encuentren con claridad.',
    dolores: [
      { dolor: 'Parecés improvisada online', solucion: 'Diseño y mensaje de estudio serio.' },
      { dolor: 'Nadie encuentra tus servicios', solucion: 'SEO base y arquitectura clara.' },
      { dolor: 'No hay siguiente paso', solucion: 'CTAs y formularios en cada página clave.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Incluye logo?', 'No por defecto; trabajamos con tu marca o referencias.'],
      ['¿Hosting?', 'Te oriento (Vercel u otro). Costos de dominio/hosting aparte.'],
      ['¿Multiidioma?', 'Se cotiza aparte según alcance.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → Sitio Negocio.'],
    ],
    discoveryDefaults: { service: 'Sitio web profesional', pack: 'Sitio Negocio 1900€' },
  },
  {
    service: 'paginas-web',
    pack: 'sitio-ads',
    eyebrow: 'Webs · Sitio + Ads',
    titlePlain: 'Sitio + Ads · 3.400 €',
    title: 'Web + máquina de captar clientes (como val-débarras).',
    description:
      'Sitio Negocio + landings por servicio/zona + Google Ads + automatización de captura. 3.400 €.',
    subtitle:
      'El paquete estrella: anuncio → landing → lead automático → aviso. Primer mes de gestión Ads incluido.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Validamos oferta y zona/servicios antes de construir',
    priceAnchor: '3.400 €',
    priceBullets: [
      'Sitio + landing(s) por intención/zona',
      'Setup Google Ads + mes 1 de gestión',
      'Automatización de captura de leads',
    ],
    caseTitle: 'El sistema val-débarras.',
    caseBody:
      'Pedidos que entran solos, medidos y con seguimiento. La inversión publicitaria la pone el cliente; yo armo la máquina.',
    dolores: [
      { dolor: 'Querés clientes ya', solucion: 'Ads + landing + captura en un solo sistema.' },
      { dolor: 'Web y Ads desconectados', solucion: 'Todo mide la misma conversión.' },
      { dolor: 'Leads fríos sin seguimiento', solucion: 'Automatización desde el primer envío.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿La pauta está incluida?', 'No. La inversión en Google la pagás vos (recomiendo 300–500 €/mes al inicio).'],
      ['¿Sirve fuera de Suiza?', 'Sí: misma lógica por ciudad/servicio en ES o LATAM.'],
      ['¿Puedo empezar más chico?', 'Sí: Landing + setup Ads, o Sitio Negocio solo.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → propuesta Sitio + Ads.'],
    ],
    discoveryDefaults: { service: 'Sitio web profesional', pack: 'Sitio + Ads 3400€' },
  },
  {
    service: 'google-ads',
    pack: 'setup',
    eyebrow: 'Google Ads · Setup',
    titlePlain: 'Setup Google Ads · 450 €',
    title: 'Dejá tus campañas bien nacidas — con medición de verdad.',
    description: 'Setup inicial Google Ads: estructura, anuncios, keywords, conversiones. 450 €.',
    subtitle: 'Una vez bien hecho: sin tirar plata en campañas sin eventos ni estructura.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Reviso si tu landing está lista antes del setup',
    priceAnchor: '450 €',
    priceBullets: [
      'Estructura + anuncios + keywords',
      'Conversiones y seguimiento',
      'Panel de lectura inicial',
    ],
    caseTitle: 'Setup antes de escalar.',
    caseBody: 'Sin eventos claros, optimizar es adivinar. El setup deja la base medible.',
    dolores: [
      { dolor: 'Campañas caóticas', solucion: 'Estructura por intención.' },
      { dolor: 'Sin conversiones', solucion: 'Eventos instalados y probados.' },
      { dolor: 'Landing floja', solucion: 'Te digo qué arreglar antes de gastar.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Incluye gestión mensual?', 'No. Gestión es 350 €/mes o % de inversión.'],
      ['¿Cuánto presupuesto necesito?', 'Ideal 300–500 €/mes al empezar para tener datos.'],
      ['¿Cuánto tarda el setup?', 'Según acceso a cuentas y landing; suele cerrarse en días.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → setup.'],
    ],
    discoveryDefaults: { service: 'Google Ads y medicion', pack: 'Setup 450€' },
  },
  {
    service: 'google-ads',
    pack: 'gestion',
    eyebrow: 'Google Ads · Gestión',
    titlePlain: 'Gestión mensual Google Ads · 350 €/mes',
    title: 'Optimización continua: menos desperdicio, más señales claras.',
    description: 'Gestión mensual de Google Ads para cuentas pequeñas/medias. 350 €/mes.',
    subtitle: 'Ajustes, informes y decisiones con datos — no “dejar la campaña tirada”.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Vemos si tu cuenta está lista para gestión continua',
    priceAnchor: '350 €/mes',
    priceBullets: [
      'Optimización e informes',
      'Ajustes de keywords y anuncios',
      'O 12–15 % de inversión si escala',
    ],
    caseTitle: 'La pauta se cuida.',
    caseBody: 'Las cuentas vivas se revisan: búsquedas negativas, anuncios y landings que acompañan.',
    dolores: [
      { dolor: 'Campañas en piloto automático malo', solucion: 'Revisión y recorte de desperdicio.' },
      { dolor: 'No entendés los informes', solucion: 'Lectura clara de qué trae leads.' },
      { dolor: 'Escalás sin control', solucion: 'Reglas y % según inversión.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Necesito setup antes?', 'Sí, o una auditoría si ya tenés cuenta.'],
      ['¿Contrato mínimo?', 'Mes a mes; lo ideal es 2–3 meses para ver curva.'],
      ['¿Incluye creatividades infinitas?', 'Iteraciones de anuncios texto; creatividades grandes se cotizan aparte.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → gestión.'],
    ],
    discoveryDefaults: { service: 'Google Ads y medicion', pack: 'Gestión 350€/mes' },
  },
]

export function getLpMother(service: string): LpOffer | undefined {
  return lpMotherOffers.find((o) => o.service === service && o.pack === null)
}

export function getLpPack(service: string, pack: string): LpOffer | undefined {
  return lpPackOffers.find((o) => o.service === service && o.pack === pack)
}

export function listLpPackParams() {
  return lpPackOffers.map((o) => ({ service: o.service, pack: o.pack as string }))
}

export function discoveryHref(offer: LpOffer) {
  const params = new URLSearchParams()
  if (offer.discoveryDefaults?.service) params.set('servicio', offer.discoveryDefaults.service)
  if (offer.discoveryDefaults?.pack) params.set('paquete', offer.discoveryDefaults.pack)
  const qs = params.toString()
  return qs ? `/descubrimiento?${qs}` : '/descubrimiento'
}

/** Mapa SEO `/servicios/[slug]` → landings Ads/FL */
export const studioToLp: Record<
  string,
  { mother: string; packs: readonly { href: string; label: string; price: string }[] }
> = {
  automatizaciones: {
    mother: '/lp/automatizaciones',
    packs: [
      { href: '/lp/automatizaciones/arranque', label: 'Arranque', price: '450 €' },
      { href: '/lp/automatizaciones/pro', label: 'Pro', price: '1.400 €' },
      { href: '/lp/automatizaciones/a-medida', label: 'A medida', price: 'desde 3.200 €' },
    ],
  },
  'sitios-web': {
    mother: '/lp/paginas-web',
    packs: [
      { href: '/lp/paginas-web/sitio-negocio', label: 'Sitio Negocio', price: '1.900 €' },
      { href: '/lp/paginas-web/sitio-ads', label: 'Sitio + Ads', price: '3.400 €' },
    ],
  },
  'landing-pages': {
    mother: '/lp/landing-pages',
    packs: [{ href: '/lp/paginas-web/landing-unica', label: 'Landing Única', price: '650 €' }],
  },
  'google-ads': {
    mother: '/lp/google-ads',
    packs: [
      { href: '/lp/google-ads/setup', label: 'Setup', price: '450 €' },
      { href: '/lp/google-ads/gestion', label: 'Gestión', price: '350 €/mes' },
    ],
  },
}

export function packsForService(service: string) {
  return lpPackOffers.filter((o) => o.service === service)
}
