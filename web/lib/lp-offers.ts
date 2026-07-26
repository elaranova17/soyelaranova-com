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
    heroImage: '/media/servicios/servicio-02-webs.webp',
    heroAlt: 'Landing page lista para campaña',
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
    heroImage: '/media/servicios/servicio-01-automatizaciones.webp',
    heroAlt: 'Automatizaciones listas para tu negocio',
    heroPosition: 'center 40%',
  },
  'automatizaciones/pro': {
    heroImage: '/media/servicios/servicio-01-automatizaciones.webp',
    heroAlt: 'Sistemas Pro de automatización',
    heroPosition: 'center 35%',
  },
  'automatizaciones/a-medida': {
    heroImage: '/media/servicios/servicio-01-automatizaciones.webp',
    heroAlt: 'Automatizaciones a medida',
    heroPosition: '62% 40%',
  },
  'paginas-web/landing-unica': {
    heroImage: '/media/servicios/servicio-02-webs.webp',
    heroAlt: 'Landing única lista para Ads',
    heroPosition: 'center 32%',
  },
  'paginas-web/sitio-negocio': {
    heroImage: '/media/servicios/servicio-02-webs.webp',
    heroAlt: 'Sitio de negocio con arquitectura de conversión',
    heroPosition: '62% 40%',
  },
  'paginas-web/sitio-ads': {
    heroImage: '/media/servicios/servicio-03-google-ads.webp',
    heroAlt: 'Sitio + Ads como sistema',
    heroPosition: 'center 40%',
  },
  'google-ads/setup': {
    heroImage: '/media/servicios/servicio-03-google-ads.webp',
    heroAlt: 'Setup de Google Ads medible',
    heroPosition: 'center 40%',
  },
  'google-ads/gestion': {
    heroImage: '/media/servicios/servicio-03-google-ads.webp',
    heroAlt: 'Gestión continua de Google Ads con lectura de datos',
    heroPosition: '70% 45%',
  },
}

const FALLBACK_VISUAL: LpVisual = {
  heroImage: '/media/servicios/servicio-02-webs.webp',
  heroAlt: 'Elara Nova — webs, automatizaciones y Ads',
  heroPosition: 'center 40%',
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
    'Completas un cuestionario guiado y yo reviso a mano tu contexto, tu web y las fugas por donde se te van clientes y horas. Llegas con un diagnóstico, no con una hoja en blanco.',
  ],
  [
    '02',
    'Sesión estratégica · 25 CHF',
    '20 minutos en los que te muestro lo que encontré y te dejo 2–3 movimientos concretos para recuperar tiempo y dejar de perder leads. Los 25 CHF filtran curiosos y respetan tu agenda y la mía.',
  ],
  [
    '03',
    'Proyecto con precio cerrado',
    'Si encajamos, cerramos el precio antes de empezar —Arranque, Pro o A medida— e implementamos. Sabes qué compras, cuánto cuesta y cuándo lo tienes funcionando.',
  ],
]

export const lpMotherOffers: readonly LpOffer[] = [
  {
    service: 'automatizaciones',
    pack: null,
    eyebrow: 'Automatización para negocios pequeños',
    titlePlain: 'Automatiza tu negocio: menos trabajo manual, cero clientes perdidos',
    title: 'Automatiza tu negocio: menos trabajo manual, cero clientes perdidos.',
    description:
      'Automatizaciones para negocios pequeños: formularios, emails, WhatsApp y CRM conectados. Pre-análisis didáctico + sesión estratégica.',
    subtitle:
      'Si todavía respondes cada mensaje, copias datos de una app a otra y persigues clientes uno por uno, tu negocio depende de que tú no falles nunca. Cada tarea repetitiva son horas que no facturas y leads que se enfrían mientras estás ocupada. Eso se arregla, y se arregla bien.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Gratis · después sesión 25 CHF si quieres profundizar',
    priceAnchor: 'Desde 450 €',
    priceBullets: [
      'Precio cerrado antes de empezar — sin sorpresas ni horas fantasma',
      'Funciona con las herramientas que ya pagas, sin migrar todo',
      'Hecho con criterio de banca: seguro, escalable y fácil de mantener',
    ],
    caseTitle: 'val-débarras: pedidos que llegan solos, cada día.',
    caseBody:
      'Para esta empresa suiza construí el sistema completo: formularios que capturan cada solicitud, seguimiento automático que no deja enfriar ningún lead y campañas conectadas al mismo flujo. No una página bonita — un sistema que genera pedidos reales todos los días sin que nadie mueva un dedo. Ese es el estándar que aplico a tu negocio.',
    dolores: [
      {
        dolor: 'Respondes lo mismo mil veces',
        solucion:
          'Emails y WhatsApp automáticos que contestan al instante con tu tono. Cada lead recibe respuesta en segundos —aunque sea domingo— y tú recuperas las horas que hoy se van en teclear lo de siempre.',
      },
      {
        dolor: 'Los datos viven dispersos por todos lados',
        solucion:
          'Formularios, hojas y CRM conectados con la disciplina de un sistema bancario: cada cliente entra una sola vez, sin errores de copiado, y aparece exacto donde lo necesitas.',
      },
      {
        dolor: 'Se te escapan clientes por no hacer seguimiento',
        solucion:
          'Recordatorios y seguimientos que se disparan solos. Nadie se queda sin respuesta, nada se cae entre correos — y cada lead que hoy pierdes por olvido se convierte en una venta que sí cierras.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      [
        '¿Qué se puede automatizar exactamente?',
        'Formularios que caen directo en tu CRM, respuestas de email y WhatsApp, recordatorios de cita, facturas, reportes… La regla es simple: si lo haces a mano cada semana y te roba tiempo, casi seguro se puede automatizar y recuperar esas horas.',
      ],
      [
        '¿Cuánto tarda?',
        'La mayoría queda andando entre 1 y 3 semanas, según cuántos procesos toquemos. Desde el primer día empiezas a ahorrar horas: no esperas meses para ver el retorno.',
      ],
      [
        '¿El pre-análisis es una call gratis?',
        'No. Completas un cuestionario didáctico y yo te mando una lectura inicial hecha a mano. Si quieres profundizar, agendamos la sesión estratégica de 20 min (25 CHF). Así llegamos a hablar cuando ya sé de tu negocio, sin quemar tu tiempo en presentaciones.',
      ],
      [
        '¿Necesito tener página web?',
        'No. Muchas automatizaciones funcionan con lo que ya usas: WhatsApp, Gmail, hojas de cálculo, tu CRM actual. Empezamos por donde más te duele, sin obligarte a comprar herramientas nuevas.',
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
      'Si tu web es un folleto digital que nadie mide —o ni tienes casa propia y vives dependiendo del feed de Instagram— cada visitante que no entiende qué haces es una venta que se va a la competencia. Construimos la base que sostiene tus ventas y trabaja por ti las 24 horas.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Gratis · después sesión 25 CHF si quieres profundizar',
    priceAnchor: 'Desde 1.900 €',
    priceBullets: [
      'Arquitectura y copy pensados para convertir visitas en clientes',
      'Mobile-first, rápida y medible: sabes qué funciona',
      'Formularios y analítica conectados, listos para escalar con Ads',
    ],
    caseTitle: 'Presencia que genera confianza (y pedidos).',
    caseBody:
      'En val-débarras la web no es decoración: estructura clara por servicio y zona, formularios que capturan cada pedido y un sistema que mide cada paso. La persona entra, entiende, confía y contacta —sin fricción. Ese es el estándar que aplico a cualquier sitio de negocio.',
    dolores: [
      {
        dolor: 'Dependes solo de Instagram o WhatsApp',
        solucion:
          'Una casa digital propia, tuya, donde la persona entiende qué haces, confía y te contacta sin perderse en el feed. Dejas de alquilar audiencia en una app que puede cambiar las reglas mañana.',
      },
      {
        dolor: 'Tu web actual no explica ni vende',
        solucion:
          'Mensaje, secciones y CTAs ordenados en un solo hilo hacia el siguiente paso: cotizar, reservar o escribirte. Menos visitantes perdidos, más contactos que sí llegan a tu bandeja.',
      },
      {
        dolor: 'No sabes si la web sirve',
        solucion:
          'Analítica y eventos base desde el día uno: ves qué páginas miran y dónde se caen. Así decides con datos —no con corazonadas— antes de gastar un euro en Ads.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      [
        '¿Incluye textos?',
        'Sí, copy base para explicar tu oferta, tu proceso y por qué confiar en ti. Tú aportas datos y referencias; yo los ordeno en un mensaje que vende. No te dejo la web con "lorem ipsum" ni con textos genéricos que no dicen nada.',
      ],
      [
        '¿Cuánto tarda un sitio?',
        'Un Sitio Negocio suele estar listo en 2–3 semanas, según contenido y revisiones. Entrego a tiempo: la fecha que acordamos es la fecha real.',
      ],
      [
        '¿Y si solo necesito una landing?',
        'Tenemos Landing Única (650 €). Esta página es para sitios completos; si solo quieres una página con un objetivo, esa es la opción más rápida y económica para empezar.',
      ],
      [
        '¿Cómo empiezo?',
        'Haz el pre-análisis. Con eso preparo tu lectura y, si encajamos, la sesión estratégica de 25 CHF. Llegamos a diseñar cuando ya tengo claro qué necesita tu negocio —no perdemos semanas descubriéndolo sobre la marcha.',
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
      'Una página, una promesa, una acción. Cuando pagas por cada clic, mandar el tráfico a una home genérica es tirar presupuesto: la gente se distrae y se va. Una landing enfocada convierte más con el mismo gasto en Ads.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Gratis · después sesión 25 CHF si quieres profundizar',
    priceAnchor: 'Desde 650 €',
    priceBullets: [
      'Estructura de conversión + FAQ que resuelve objeciones',
      'CTA único y página de gracias que no desperdicia el lead',
      'Eventos base para medir cada lead y bajar tu coste por cliente',
    ],
    caseTitle: 'Landings por intención = Ads que no se desperdician.',
    caseBody:
      'En proyectos con Ads, cada intención tiene su propia página: el anuncio y el titular prometen exactamente lo mismo. Eso sube tu Quality Score, baja el coste por lead y hace que cada euro de pauta rinda más. Menos presupuesto quemado, más clientes por el mismo dinero.',
    dolores: [
      {
        dolor: 'Mandas Ads a la home y no convierte',
        solucion:
          'Landing con una sola intención —cotizar, reservar o dejar datos— alineada palabra por palabra con el anuncio. El visitante llega, encuentra justo lo que buscaba y actúa, en vez de perderse en un menú.',
      },
      {
        dolor: 'El mensaje es confuso',
        solucion:
          'Titular, beneficios, prueba y CTA en un hilo claro que lleva de la mano hasta el clic. Mobile primero, porque ahí es donde la mayoría decide.',
      },
      {
        dolor: 'No mides nada',
        solucion:
          'Eventos de clic y de envío de formulario configurados de verdad. Sabes qué anuncio trae clientes reales y cuál te está costando dinero sin devolverte nada.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      [
        '¿Una landing sirve para varios anuncios?',
        'Si todos prometen lo mismo, sí. Si cada anuncio habla de una necesidad distinta, conviene una variante por intención: cuanto más pegado esté el mensaje al anuncio, más barato te sale cada cliente.',
      ],
      [
        '¿Incluye los anuncios?',
        'Puedo ayudarte con la estructura y el copy base. La gestión completa de campañas es un servicio aparte, o va dentro del paquete Sitio + Ads si quieres todo el sistema conectado.',
      ],
      [
        '¿Cuánto tarda?',
        'Landing Única: 5–7 días hábiles en la mayoría de casos. Rápida de tener en línea para no frenar tu lanzamiento ni tu campaña.',
      ],
      [
        '¿Cómo empiezo?',
        'Pre-análisis didáctico → tu lectura personalizada → sesión 25 CHF si quieres la mini-ruta en vivo. Sin llamadas eternas ni compromiso.',
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
      'Antes de subir presupuesto, ordenamos promesa, landing y eventos. Sin esa base, Google gasta tu dinero a ciegas. Con ella, cada franco o euro que inviertes se puede leer y mejorar: menos adivinanza, más sistema.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Gratis · después sesión 25 CHF si quieres profundizar',
    priceAnchor: 'Setup 450 € · gestión 350 €/mes',
    priceBullets: [
      'Estructura por intención de búsqueda, sin gasto disperso',
      'Conversiones instaladas de verdad y probadas, no a medias',
      'Landing alineada al anuncio (o te digo exactamente qué falta)',
    ],
    caseTitle: 'Ads conectados a captura real.',
    caseBody:
      'En val-débarras las campañas no terminan en un "gracias" vacío: el lead entra al sistema, queda registrado y recibe seguimiento automático. Cada clic que pagas se convierte en un contacto medible que no se pierde. Eso es medición con consecuencias, no un panel bonito que nadie usa.',
    dolores: [
      {
        dolor: 'Gastas y no sabes qué funciona',
        solucion:
          'Eventos de conversión y lecturas claras: ves qué búsquedas traen clientes y cuáles te queman el presupuesto. Cortas el desperdicio y reinviertes donde de verdad hay retorno.',
      },
      {
        dolor: 'El anuncio promete una cosa y la página otra',
        solucion:
          'Alineamos el mensaje del anuncio con el de la landing. Sube el Quality Score, baja el coste por clic y pagas menos por el mismo cliente.',
      },
      {
        dolor: 'Quieres Ads sin base',
        solucion:
          'Primero validamos oferta y página. Si hace falta, construimos la landing antes de escalar pauta —para no encender un grifo de gasto sobre algo que no convierte.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      [
        '¿Cuánto presupuesto de Ads necesito?',
        'Depende del mercado. Prefiero una prueba controlada con landing medida antes de recomendar escalar: así no arriesgas de más. Suele tener sentido desde ~300–500 €/mes de inversión para empezar a leer datos fiables.',
      ],
      [
        '¿Puedo hacer Ads sin landing?',
        'Se puede, pero suele quemar presupuesto: el clic llega a una página que no convierte y el dinero se va. Para campañas serias, la landing y los eventos son parte del sistema, no un extra.',
      ],
      [
        '¿Qué incluye el setup?',
        'Estrategia inicial, estructura por intención, anuncios base, keywords, conversiones instaladas y un panel de lectura claro. Sales con la cuenta lista para medir desde el primer clic, no para adivinar.',
      ],
      [
        '¿Cómo empiezo?',
        'Pre-análisis → te digo con franqueza si ya estás listo para Ads o qué conviene arreglar antes de gastar → sesión 25 CHF si quieres la ruta en vivo.',
      ],
    ],
    discoveryDefaults: { service: 'Google Ads y medición' },
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
      'Para el negocio que quiere quitarse de encima UNA tarea que le come el día: formulario → CRM/hoja → email o WhatsApp. Un solo flujo bien hecho ya te devuelve horas cada semana y evita que se te escape el primer lead.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Validamos si Arranque es tu punto de partida',
    priceAnchor: '450 €',
    priceBullets: [
      '1 flujo completo de principio a fin, andando y probado',
      'Hasta 3 herramientas conectadas, de las que ya usas',
      'Documentación simple para que lo manejes tú · entrega 5–7 días',
    ],
    caseTitle: 'Empezar por un flujo que duele.',
    caseBody:
      'El Arranque no pretende automatizar todo el negocio de golpe: elimina primero la fuga más cara, esa tarea que te roba tiempo o clientes cada semana. Es la inversión más pequeña con el retorno más rápido —y desde ahí escalamos a Pro solo si hace falta.',
    dolores: [
      {
        dolor: 'Copias leads a mano',
        solucion: 'Cada formulario cae solo donde tiene que caer, sin errores de copiado, y te avisa al instante. Recuperas ese rato y ningún dato se pierde.',
      },
      {
        dolor: 'Olvidas responder',
        solucion: 'Mensaje automático de confirmación al cliente más aviso interno para ti. El lead se siente atendido en segundos y tú no dependes de acordarte.',
      },
      {
        dolor: 'No sabes por dónde empezar',
        solucion: 'El pre-análisis te dice cuál es el flujo #1 con más impacto, para que tu primer euro invertido rinda al máximo.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Puedo sumar más flujos después?', 'Sí. Arranque es la puerta de entrada; cuando veas el tiempo que ganas, subes a Pro o a un retainer y sigues automatizando lo siguiente.'],
      ['¿Qué herramientas usas?', 'n8n / Make / Zapier según tu stack y tu presupuesto. Elijo la que te salga más rentable a largo plazo, no la que a mí me convenga.'],
      ['¿Hay retainer?', 'Sí: Cuidado 250 €/mes o Evolución 450 €/mes, para que el sistema se mantenga sano y crezca contigo sin sobresaltos.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF si quieres la mini-ruta → Arranque. Sencillo y sin compromiso hasta que veas que encajamos.'],
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
      'Para quien quiere automatizar un proceso entero —captación o postventa—, no solo un zap suelto. Cuando varias tareas van en cadena, un sistema completo te libera días enteros al mes y hace que ningún lead se caiga entre paso y paso.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Chequeamos alcance Pro vs Arranque',
    priceAnchor: '1.400 €',
    priceBullets: [
      'Hasta 4 flujos conectados que trabajan como un solo sistema',
      'Un paso con IA (clasificar, resumir, redactar) para ganar tiempo real',
      'Formación 1:1 para que lo domines · entrega 2–3 semanas',
    ],
    caseTitle: 'De tareas sueltas a sistema.',
    caseBody:
      'Pro conecta todo el embudo: captura, clasificación, seguimiento y avisos en una sola pieza. Menos fricción, menos horas perdidas y más leads atendidos a tiempo —que es lo mismo que decir más ventas cerradas. Y todo construido con criterio de banca: seguro, escalable y fácil de mantener.',
    dolores: [
      {
        dolor: 'Tienes 3–4 tareas manuales en cadena',
        solucion: 'Un solo sistema las encadena sin que copies un dato: lo que hoy te ocupa media mañana pasa a hacerse solo y sin errores.',
      },
      {
        dolor: 'Los leads no se priorizan',
        solucion: 'IA o reglas que clasifican y ponen delante lo que más vende, para que dediques tu tiempo a los clientes con más valor y no al primero que escribió.',
      },
      {
        dolor: 'Nadie ve el estado del flujo',
        solucion: 'Un tablero simple para saber de un vistazo qué pasó con cada lead. Cero clientes olvidados, cero "¿en qué quedó esto?".',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Incluye chatbot?', 'Un paso con IA sí (clasificar, resumir o redactar). Un chatbot o agente completo suele ir en A medida, donde le damos el cuidado que merece.'],
      ['¿Puedo partir de Arranque?', 'Sí. Muchos clientes empiezan en 450 €, comprueban el ahorro de tiempo y suben a Pro con confianza.'],
      ['¿Mantenimiento?', 'Retainer opcional después de la entrega, para que el sistema siga afinado y crezca contigo sin romperse.'],
      ['¿Cómo empiezo?', 'Pre-análisis + sesión 25 CHF para cerrar el alcance exacto antes de tocar nada.'],
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
      'Para procesos propios, APIs, agentes o una complejidad que no cabe en un paquete cerrado. Aquí un software hecho a tu medida te sale más rentable que pagar y sostener diez apps sueltas —y escala contigo sin que tengas que sumar personal.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Pre-análisis de alcance antes de presupuesto cerrado',
    priceAnchor: 'Desde 3.200 €',
    priceBullets: [
      'Arquitectura a medida + los flujos del alcance acordado',
      'Chatbot / agente IA donde de verdad aporta, si aplica',
      'Documentación técnica y traspaso: seguro, escalable y mantenible',
    ],
    caseTitle: 'Cuando el negocio ya no cabe en un zap.',
    caseBody:
      'A medida es para operación real: reglas propias, integraciones con tus sistemas y una arquitectura pensada para escalar sin contratar más gente. Con seis años de disciplina de banca detrás, se construye para que no se caiga y para que dure —no un experimento que hay que rehacer en un año.',
    dolores: [
      {
        dolor: 'Tus procesos son únicos',
        solucion: 'Diseñamos una arquitectura pensada para tu operación, no una plantilla genérica que te obliga a trabajar como el software quiere.',
      },
      {
        dolor: 'Necesitas IA o chatbot serio',
        solucion: 'Lo integramos donde de verdad aporta, con pruebas reales y traspaso. IA sí, pero con un ingeniero con experiencia respondiendo por ella.',
      },
      {
        dolor: 'Quieres presupuesto cerrado',
        solucion: 'El precio se cierra tras el pre-análisis y la sesión de alcance. Sin cifras infladas ni sorpresas a mitad de proyecto.',
      },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Por qué "desde"?', 'El alcance define las horas y las integraciones. Cerramos el número exacto tras el pre-análisis, para que pagues por lo que realmente necesitas y ni un euro de más.'],
      ['¿Cuánto tarda?', '4–6 semanas es lo típico según la complejidad. Con hitos claros para que veas avances, no una caja negra.'],
      ['¿Hay alternativas más chicas?', 'Sí: Arranque y Pro existen precisamente para no sobre-ingenierizar. Si tu caso cabe en un paquete menor, te lo digo de frente.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → propuesta A medida con alcance y precio cerrados.'],
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
    subtitle: 'Para lanzar un servicio, una campaña o captar leads con foco —sin armar todavía un sitio completo. Una página que va al grano convierte más y te sale en días, no en meses.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Confirmamos mensaje y CTA antes de diseñar',
    priceAnchor: '650 €',
    priceBullets: [
      '1 landing de conversión completa, lista para recibir tráfico',
      'Formulario conectado + analítica básica para medir cada lead',
      'Entrega en 5–7 días hábiles, sin frenar tu lanzamiento',
    ],
    caseTitle: 'Foco = conversión.',
    caseBody:
      'Una sola promesa, una sola acción, cero distracciones. Es la pieza ideal antes de encender Ads o para un lanzamiento puntual: barata de arrancar, rápida de tener en línea y hecha para que el visitante haga exactamente lo que quieres.',
    dolores: [
      { dolor: 'Home genérica para Ads', solucion: 'Una landing alineada al anuncio: el visitante encuentra justo lo que buscaba y convierte, en vez de perderse y costarte el clic.' },
      { dolor: 'No hay un CTA claro', solucion: 'Un solo objetivo, visible y medible, que guía a la persona hasta la acción sin dudas.' },
      { dolor: 'Necesitas rapidez', solucion: 'Paquete cerrado que entrego en días, no en meses: empiezas a captar cuanto antes.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Incluye Ads?', 'No. Los Ads van en el setup aparte o en el paquete Sitio + Ads. Esta landing es la base sobre la que esas campañas convierten.'],
      ['¿Puedo pasar a sitio completo después?', 'Sí, y sin empezar de cero: reutilizamos el mensaje y la marca, así que tu inversión no se pierde.'],
      ['¿Idioma?', 'ES (con variantes LATAM o ES-ES según tu mercado), escrito para sonar nativo, no como una traducción.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF opcional → producción. Directo al grano.'],
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
    subtitle: 'Para el negocio o profesional que necesita presencia sólida, no un parche en Linktree. Una web que da confianza, te encuentra Google y convierte visitas en clientes mientras tú atiendes lo tuyo.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Mapeamos páginas y mensaje antes de diseñar',
    priceAnchor: '1.900 €',
    priceBullets: [
      'Hasta 5–6 páginas a medida, con mensaje que vende',
      'SEO base + velocidad: te encuentran y no se van por lentitud',
      'Entrega en 2–3 semanas, a tiempo',
    ],
    caseTitle: 'Casa digital que sostiene la marca.',
    caseBody:
      'Estructura, copy y formularios listos para que Google te posicione y tus clientes te entiendan a la primera. Cada página tiene un trabajo y un siguiente paso claro —construida rápida, medible y fácil de mantener, con el estándar de quien viene de sistemas donde un fallo cuesta dinero.',
    dolores: [
      { dolor: 'Pareces improvisada online', solucion: 'Diseño y mensaje de estudio serio que generan la confianza que cierra la venta antes incluso de que hablen contigo.' },
      { dolor: 'Nadie encuentra tus servicios', solucion: 'SEO base y arquitectura clara para que Google te muestre y llegues a clientes que hoy se van con la competencia.' },
      { dolor: 'No hay siguiente paso', solucion: 'CTAs y formularios en cada página clave: la visita nunca queda en el aire, siempre hay un camino a contactarte.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Incluye logo?', 'No por defecto; trabajamos con tu marca actual o con referencias. Si necesitas identidad, lo vemos aparte sin inflar el paquete.'],
      ['¿Hosting?', 'Te oriento (Vercel u otro) para que quede rápido y económico. Los costos de dominio y hosting van aparte y suelen ser bajos.'],
      ['¿Multiidioma?', 'Se cotiza aparte según el alcance, con textos nativos en cada idioma —no traducciones literales que suenan raras.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → Sitio Negocio, con el mapa de páginas cerrado antes de diseñar.'],
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
      'El paquete estrella: anuncio → landing → lead automático → aviso, todo conectado como una sola máquina de captar clientes. Incluye el primer mes de gestión de Ads para arrancar con la campaña ya afinada.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Validamos oferta y zona/servicios antes de construir',
    priceAnchor: '3.400 €',
    priceBullets: [
      'Sitio + landing(s) por intención y zona, cada una enfocada a convertir',
      'Setup de Google Ads + mes 1 de gestión incluido',
      'Automatización de captura: ningún lead se pierde ni se enfría',
    ],
    caseTitle: 'El sistema val-débarras.',
    caseBody:
      'Pedidos que entran solos, medidos y con seguimiento automático —el mismo sistema que corre para una empresa suiza real. La inversión publicitaria la pones tú; yo armo la máquina completa que convierte esa inversión en clientes que llegan cada día, sin trabajo manual.',
    dolores: [
      { dolor: 'Quieres clientes ya', solucion: 'Ads + landing + captura en un solo sistema que empieza a traer contactos desde que se enciende la campaña.' },
      { dolor: 'Web y Ads desconectados', solucion: 'Todo mide la misma conversión, así que sabes exactamente qué anuncio genera clientes y cuál solo gasta.' },
      { dolor: 'Leads fríos sin seguimiento', solucion: 'Automatización desde el primer envío: cada lead recibe respuesta al instante y ninguno se enfría por olvido.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿La pauta está incluida?', 'No. La inversión en Google la pones tú (recomiendo 300–500 €/mes al inicio para tener datos fiables). Yo construyo y gestiono la máquina que hace rendir ese presupuesto.'],
      ['¿Trabajas con clientes de otros países?', 'Sí: la misma lógica por ciudad y servicio funciona en Europa o LATAM. El sistema se replica, cambia el mercado.'],
      ['¿Puedo empezar más chico?', 'Sí: puedes arrancar con Landing + setup de Ads, o solo con el Sitio Negocio, y escalar cuando veas resultados.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → propuesta Sitio + Ads con todo el sistema definido.'],
    ],
    discoveryDefaults: { service: 'Sitio web profesional', pack: 'Sitio + Ads 3400€' },
  },
  {
    service: 'google-ads',
    pack: 'setup',
    eyebrow: 'Google Ads · Setup',
    titlePlain: 'Setup Google Ads · 450 €',
    title: 'Deja tus campañas bien nacidas — con medición de verdad.',
    description: 'Setup inicial Google Ads: estructura, anuncios, keywords, conversiones. 450 €.',
    subtitle: 'Hecho bien una sola vez: dejas de tirar dinero en campañas sin eventos ni estructura. Una cuenta bien nacida mide cada clic desde el minuto uno y te ahorra meses de gasto a ciegas.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Reviso si tu landing está lista antes del setup',
    priceAnchor: '450 €',
    priceBullets: [
      'Estructura por intención + anuncios + keywords que atraen a quien compra',
      'Conversiones y seguimiento instalados y probados',
      'Panel de lectura inicial para decidir con datos, no a ciegas',
    ],
    caseTitle: 'Setup antes de escalar.',
    caseBody: 'Sin eventos claros, optimizar es adivinar —y adivinar con dinero real sale caro. El setup deja la base medible para que cada euro que inviertas después se pueda leer, ajustar y hacer rendir.',
    dolores: [
      { dolor: 'Campañas caóticas', solucion: 'Estructura por intención de búsqueda, para que cada anuncio hable con quien de verdad quiere comprar y no desperdicies clics.' },
      { dolor: 'Sin conversiones', solucion: 'Eventos instalados y probados de verdad: sabrás qué genera clientes en lugar de mirar métricas de vanidad.' },
      { dolor: 'Landing floja', solucion: 'Te digo con franqueza qué arreglar antes de gastar, para no encender pauta sobre una página que no convierte.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Incluye gestión mensual?', 'No. La gestión continua es 350 €/mes o un % de la inversión. El setup deja la cuenta lista; la gestión la mantiene rindiendo mes a mes.'],
      ['¿Cuánto presupuesto necesito?', 'Lo ideal son 300–500 €/mes al empezar para tener datos fiables sobre los que decidir sin arriesgar de más.'],
      ['¿Cuánto tarda el setup?', 'Según el acceso a las cuentas y el estado de la landing; suele cerrarse en días, así que empiezas a captar pronto.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → setup con la cuenta lista para medir.'],
    ],
    discoveryDefaults: { service: 'Google Ads y medición', pack: 'Setup 450€' },
  },
  {
    service: 'google-ads',
    pack: 'gestion',
    eyebrow: 'Google Ads · Gestión',
    titlePlain: 'Gestión mensual Google Ads · 350 €/mes',
    title: 'Optimización continua: menos desperdicio, más señales claras.',
    description: 'Gestión mensual de Google Ads para cuentas pequeñas/medias. 350 €/mes.',
    subtitle: 'Ajustes, informes y decisiones basadas en datos —no "dejar la campaña tirada" a que Google gaste solo. Una cuenta cuidada baja el coste por cliente mes a mes en vez de escaparse.',
    ctaLabel: 'Hacer mi pre-análisis',
    ctaNote: 'Vemos si tu cuenta está lista para gestión continua',
    priceAnchor: '350 €/mes',
    priceBullets: [
      'Optimización continua e informes que entiendes',
      'Ajustes de keywords y anuncios para no malgastar clics',
      'O un 12–15 % de la inversión si la cuenta escala',
    ],
    caseTitle: 'La pauta se cuida.',
    caseBody: 'Las cuentas vivas se revisan de cerca: búsquedas negativas para cortar el gasto inútil, anuncios que se afinan y landings que acompañan la promesa. Cuidar la cuenta cada mes es lo que convierte el presupuesto en clientes y no en humo.',
    dolores: [
      { dolor: 'Campañas en piloto automático malo', solucion: 'Revisión periódica y recorte del desperdicio: dejas de pagar por búsquedas que no te traen a nadie.' },
      { dolor: 'No entiendes los informes', solucion: 'Lectura clara y en tu idioma de qué trae leads y qué no, para que decidas con criterio en lugar de confiar a ciegas.' },
      { dolor: 'Escalas sin control', solucion: 'Reglas y un % ligado a la inversión, para crecer sin que el gasto se te dispare.' },
    ],
    pasos: FUNNEL_STEPS,
    faq: [
      ['¿Necesito setup antes?', 'Sí, o una auditoría si ya tienes cuenta. Sobre una base bien montada la gestión rinde; sobre un caos, primero hay que ordenar.'],
      ['¿Contrato mínimo?', 'Mes a mes, sin ataduras. Lo ideal son 2–3 meses para ver la curva de mejora y que los datos hablen.'],
      ['¿Incluye creatividades infinitas?', 'Incluye iteraciones de anuncios de texto; las creatividades grandes (vídeo, diseño) se cotizan aparte según lo que necesites.'],
      ['¿Cómo empiezo?', 'Pre-análisis → sesión 25 CHF → gestión continua de tu cuenta.'],
    ],
    discoveryDefaults: { service: 'Google Ads y medición', pack: 'Gestión 350€/mes' },
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
