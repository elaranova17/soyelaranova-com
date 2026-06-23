export type StudioService = {
  slug: string
  eyebrow: string
  title: string
  shortTitle: string
  summary: string
  deliverable: string
  promise: string
  idealFor: readonly string[]
  includes: readonly string[]
  process: readonly string[]
  faq: readonly {
    question: string
    answer: string
  }[]
}

export const studioServices: readonly StudioService[] = [
  {
    slug: 'sitios-web',
    eyebrow: 'Presencia',
    title: 'Sitios web profesionales',
    shortTitle: 'Sitios web',
    summary:
      'Para marcas que ya no quieren verse improvisadas. Diseño, estructura, copy y desarrollo en una experiencia lista para vender confianza.',
    deliverable: 'Web comercial, portfolio, pagina de servicio o sitio institucional.',
    promise:
      'Una web clara, elegante y facil de navegar que explique lo que haces, construya autoridad y lleve a la persona correcta al siguiente paso.',
    idealFor: [
      'Negocios que dependen demasiado de Instagram o WhatsApp.',
      'Profesionales independientes que necesitan verse mas solidos.',
      'Marcas que tienen oferta, pero no una casa digital que la sostenga.',
    ],
    includes: [
      'Arquitectura de secciones y ruta de conversion.',
      'Copy base para explicar oferta, proceso y autoridad.',
      'Diseño responsive mobile-first.',
      'Desarrollo en Next.js o stack acordado.',
      'Integracion de formularios, links y analitica base.',
    ],
    process: [
      'Diagnostico de oferta y publico.',
      'Mapa de pagina y mensajes clave.',
      'Diseño visual alineado a la marca.',
      'Implementacion, revision mobile y publicacion.',
    ],
    faq: [
      {
        question: 'Necesito tener todo el contenido listo?',
        answer:
          'No. Podemos empezar con tu oferta, referencias y materiales existentes. Yo te ayudo a ordenar el mensaje y detectar lo que falte.',
      },
      {
        question: 'Sirve si apenas estoy empezando?',
        answer:
          'Si ya tienes una oferta clara o una idea validada, si. Si todavia no sabes que vendes, primero conviene hacer diagnostico y estrategia.',
      },
    ],
  },
  {
    slug: 'landing-pages',
    eyebrow: 'Conversion',
    title: 'Landing pages para campañas',
    shortTitle: 'Landing pages',
    summary:
      'Paginas enfocadas en una accion: cotizar, reservar, comprar o dejar datos. Ideales para Google Ads, Meta Ads y lanzamientos.',
    deliverable: 'Landing + CTA + tracking base + pagina de gracias.',
    promise:
      'Una pagina diseñada para una sola intencion, con mensaje especifico, objeciones resueltas y una accion facil de medir.',
    idealFor: [
      'Campañas de Google Ads o Meta Ads.',
      'Lanzamientos de productos digitales.',
      'Servicios que necesitan cotizaciones o llamadas de diagnostico.',
    ],
    includes: [
      'Headline y estructura de conversion.',
      'Secciones de problema, solucion, prueba, proceso y FAQ.',
      'CTA principal y secundario.',
      'Pagina de gracias o siguiente paso.',
      'Eventos base para medir clics y formularios.',
    ],
    process: [
      'Definir una intencion de busqueda o campaña.',
      'Escribir promesa y objeciones principales.',
      'Diseñar landing enfocada en mobile.',
      'Conectar CTA, formulario y medicion.',
    ],
    faq: [
      {
        question: 'Puedo usar una landing para varios anuncios?',
        answer:
          'Si los anuncios prometen lo mismo, si. Si cada anuncio habla de una necesidad distinta, conviene crear variantes por intencion.',
      },
      {
        question: 'Incluye los anuncios?',
        answer:
          'Puedo ayudarte con estructura y copy base. La configuracion completa de campañas se trabaja como servicio separado o combinado.',
      },
    ],
  },
  {
    slug: 'automatizaciones',
    eyebrow: 'Operacion',
    title: 'Automatizaciones de negocio',
    shortTitle: 'Automatizaciones',
    summary:
      'Conecto formularios, emails, hojas, CRMs y notificaciones para que cada lead tenga seguimiento sin hacerlo todo a mano.',
    deliverable: 'Flujos de captura, seguimiento, post-compra y recordatorios.',
    promise:
      'Un sistema que reduce tareas repetitivas, responde mas rapido y evita que oportunidades reales se pierdan en mensajes sueltos.',
    idealFor: [
      'Negocios que reciben leads y los gestionan manualmente.',
      'Personas que venden servicios, cursos o productos digitales.',
      'Equipos pequeños que necesitan orden sin contratar mas gente.',
    ],
    includes: [
      'Mapa del flujo actual y cuellos de botella.',
      'Diseño del flujo ideal.',
      'Conexion entre formulario, email, hoja, CRM o WhatsApp segun aplique.',
      'Mensajes automaticos y notificaciones internas.',
      'Prueba de escenarios antes de publicar.',
    ],
    process: [
      'Auditar que pasa hoy con cada lead o compra.',
      'Definir disparadores, condiciones y destinos.',
      'Construir automatizacion con herramientas livianas.',
      'Probar, documentar y entregar.',
    ],
    faq: [
      {
        question: 'Necesito un CRM caro?',
        answer:
          'No necesariamente. Muchas veces una hoja bien conectada, email y formularios resuelven la primera fase sin subir costos.',
      },
      {
        question: 'Puedes trabajar con herramientas que ya uso?',
        answer:
          'Si. Primero reviso tu stack actual para aprovechar lo que ya pagas antes de proponer algo nuevo.',
      },
    ],
  },
  {
    slug: 'google-ads',
    eyebrow: 'Crecimiento',
    title: 'Google Ads y medicion',
    shortTitle: 'Google Ads',
    summary:
      'Antes de subir presupuesto, ordenamos la promesa, la landing y los eventos. Menos adivinanza, mas sistema medible.',
    deliverable: 'Estructura de campaña, conversiones y landings por intencion.',
    promise:
      'Campañas conectadas a paginas y eventos que permiten saber que busquedas traen leads, que mensajes funcionan y donde se esta perdiendo presupuesto.',
    idealFor: [
      'Negocios listos para invertir en demanda activa.',
      'Servicios con ticket suficiente para justificar pauta.',
      'Marcas que ya reciben trafico, pero no saben que convierte.',
    ],
    includes: [
      'Revision de oferta, mercado y palabras clave iniciales.',
      'Landing o ajustes de landing antes de invertir fuerte.',
      'Eventos de conversion prioritarios.',
      'Estructura base de campañas por intencion.',
      'Lectura inicial de señales y siguientes mejoras.',
    ],
    process: [
      'Validar oferta y objetivo de conversion.',
      'Preparar landing y medicion.',
      'Configurar estructura base.',
      'Revisar datos iniciales y optimizar.',
    ],
    faq: [
      {
        question: 'Cuanto presupuesto necesito?',
        answer:
          'Depende del servicio y mercado. Prefiero empezar con una prueba controlada y landing bien medida antes de recomendar escalar.',
      },
      {
        question: 'Puedo hacer Ads sin landing?',
        answer:
          'Se puede, pero suele quemar presupuesto. Para campañas serias, la landing y los eventos son parte del sistema.',
      },
    ],
  },
]

export function getStudioService(slug: string): StudioService | undefined {
  return studioServices.find((service) => service.slug === slug)
}
