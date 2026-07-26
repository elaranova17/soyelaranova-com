export type StudioService = {
  slug: string
  eyebrow: string
  title: string
  shortTitle: string
  /** Lockup CapCut: línea Bebas + script */
  lockupImpact: string
  lockupScript: string
  /** Explicación simple: qué es este servicio (para quien no conoce el término). */
  whatIs: string
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
    lockupImpact: 'Sitios web',
    lockupScript: 'profesionales',
    whatIs:
      'Un sitio web es la casa digital de tu marca: varias páginas (inicio, servicios, sobre ti, contacto) donde alguien entiende qué haces, confía en ti y te contacta a la hora que sea, aunque tú estés durmiendo o atendiendo a otro cliente. Es tuya y no depende del algoritmo: en Instagram tu mejor publicación desaparece del feed en un día; una web trabaja por ti todo el año.',
    summary:
      'Para marcas que ya no quieren verse improvisadas. Diseño, estructura, copy y desarrollo en una sola pieza que carga rápido, se ve impecable en el móvil y convierte la visita en una conversación de venta.',
    deliverable: 'Web comercial, portfolio, página de servicio o sitio institucional.',
    promise:
      'Una web clara y elegante que explica lo que haces en segundos, construye autoridad y lleva a la persona correcta hasta el botón de contacto. Rápida, segura y fácil de mantener: la construyo con criterio de ingeniera, para que crezca contigo y no se caiga justo cuando más visitas te llegan.',
    idealFor: [
      'Negocios que viven pegados a Instagram o WhatsApp y quedan a ciegas el día que el algoritmo cambia.',
      'Profesionales independientes que necesitan verse tan sólidos como el trabajo que entregan.',
      'Marcas con buena oferta pero sin una casa digital que la sostenga y cierre la venta.',
    ],
    includes: [
      'Arquitectura de secciones y una ruta clara desde que llega la persona hasta que te contacta.',
      'Copy base para explicar tu oferta, tu proceso y por qué confiar en ti.',
      'Diseño responsive mobile-first: impecable en el móvil, que es donde te ve casi todo el mundo.',
      'Desarrollo en Next.js o el stack acordado: rápido, seguro y preparado para crecer sin rehacerlo.',
      'Formularios, enlaces y analítica base conectados, para saber cuánta gente llega y cuánta te escribe.',
    ],
    process: [
      'Diagnóstico de tu oferta y de a quién le hablas.',
      'Mapa de la página y de los mensajes que hacen que se queden.',
      'Diseño visual alineado a tu marca.',
      'Implementación, revisión en el móvil y publicación.',
    ],
    faq: [
      {
        question: '¿Necesito tener todo el contenido listo?',
        answer:
          'No. Empezamos con tu oferta, tus referencias y lo que ya tengas. Yo te ayudo a ordenar el mensaje y a detectar lo que falta, para que el proyecto no se quede parado esperando textos perfectos.',
      },
      {
        question: '¿Sirve si apenas estoy empezando?',
        answer:
          'Si ya tienes una oferta clara o una idea validada, sí. Si todavía no sabes bien qué vendes, primero conviene el pre-análisis y la sesión estratégica: sale más barato ordenar la idea antes que rehacer la web después.',
      },
    ],
  },
  {
    slug: 'landing-pages',
    eyebrow: 'Conversión',
    title: 'Landing pages para campañas',
    shortTitle: 'Landing pages',
    lockupImpact: 'Landing pages',
    lockupScript: 'para campañas',
    whatIs:
      'Una landing page es una página web con un solo objetivo: que la persona haga una acción concreta (pedir presupuesto, dejar su email, reservar). No es un sitio completo, es una página enfocada para campañas de anuncios o lanzamientos, sin menús ni distracciones que hagan que la gente se vaya sin dejar sus datos.',
    summary:
      'Páginas con una sola misión: cotizar, reservar, comprar o dejar datos. Cada visita que pagas en Google o Meta Ads llega a un mensaje hecho para convertir, no a tu home donde se pierde y rebota.',
    deliverable: 'Landing + CTA + tracking base + página de gracias.',
    promise:
      'Una página con una sola intención: mensaje específico, objeciones resueltas antes de que aparezcan y una acción fácil de dar. Así el dinero que inviertes en anuncios se convierte en leads que puedes medir, y no en clics que entran, miran y no vuelven.',
    idealFor: [
      'Campañas de Google Ads o Meta Ads donde cada clic cuesta y no te puedes permitir desperdiciarlo.',
      'Lanzamientos de productos digitales que necesitan vender en una sola página.',
      'Servicios que buscan cotizaciones o reservar la sesión estratégica tras el pre-análisis.',
    ],
    includes: [
      'Headline y estructura pensada para convertir, no solo para verse bonita.',
      'Secciones de problema, solución, prueba, proceso y FAQ que resuelven las dudas antes de que frenen la compra.',
      'CTA principal y secundario para captar también a quien todavía no está listo.',
      'Página de gracias o siguiente paso, para no dejar la conversación a medias.',
      'Eventos base para medir clics y formularios y saber qué anuncio de verdad trae clientes.',
    ],
    process: [
      'Definir una sola intención de búsqueda o campaña.',
      'Escribir la promesa y las objeciones que frenan la compra.',
      'Diseñar la landing enfocada en el móvil.',
      'Conectar CTA, formulario y medición.',
    ],
    faq: [
      {
        question: '¿Puedo usar una landing para varios anuncios?',
        answer:
          'Si todos los anuncios prometen lo mismo, sí. Si cada uno habla de una necesidad distinta, conviene una variante por intención: cuando el anuncio y la página dicen lo mismo, se convierte mucho más y desperdicias menos presupuesto.',
      },
      {
        question: '¿Incluye los anuncios?',
        answer:
          'Te dejo la estructura y el copy base listos para pautar. La configuración completa de las campañas se trabaja como servicio aparte o combinado, para que la página y los anuncios hablen el mismo idioma.',
      },
    ],
  },
  {
    slug: 'automatizaciones',
    eyebrow: 'Operación',
    title: 'Automatizaciones de negocio',
    shortTitle: 'Automatizaciones',
    lockupImpact: 'Automatizaciones',
    lockupScript: 'de negocio',
    whatIs:
      'Una automatización es un flujo que hace solo lo que hoy haces a mano: cuando alguien llena un formulario, el sistema guarda el dato, te avisa, manda el email de bienvenida y agenda el seguimiento — sin que tú copies y pegues entre WhatsApp, el correo y Excel. Es mi fuerte: llevo años haciéndolo, primero con macros en banca y hoy con herramientas modernas e IA.',
    summary:
      'Conecto formularios, emails, hojas, CRMs y notificaciones para que cada lead tenga seguimiento sin que muevas un dedo. Recuperas las horas que hoy se van en copiar y pegar, y dejas de perder ventas por un mensaje que se quedó sin responder.',
    deliverable: 'Flujos de captura, seguimiento, post-compra y recordatorios.',
    promise:
      'Un sistema que se encarga de las tareas repetitivas, responde más rápido de lo que tú lo harías a mano y evita que una venta real se pierda entre mensajes sueltos. Hecho con criterio de ingeniera de banca: seguro con tus datos, preparado para escalar y fácil de mantener — no un experimento que se rompe al mes.',
    idealFor: [
      'Negocios que reciben leads y los gestionan a mano, uno por uno, hasta que se les escapa alguno.',
      'Personas que venden servicios, cursos o productos digitales y ya no dan abasto con el seguimiento.',
      'Equipos pequeños que necesitan orden y responder rápido sin tener que contratar a alguien más.',
    ],
    includes: [
      'Mapa de tu flujo actual y de dónde se te van las horas y los leads.',
      'Diseño del flujo ideal, pensado para tu forma real de trabajar.',
      'Conexión entre formulario, email, hoja, CRM o WhatsApp según lo que ya uses.',
      'Mensajes automáticos y avisos internos, para que nada dependa de que te acuerdes.',
      'Prueba de escenarios antes de publicar, para que salga a producción sin sustos.',
    ],
    process: [
      'Auditar qué pasa hoy con cada lead o compra, paso a paso.',
      'Definir los disparadores, las condiciones y a dónde va cada dato.',
      'Construir la automatización con herramientas livianas que no inflen tus costos.',
      'Probar, documentar y entregarte todo funcionando y explicado.',
    ],
    faq: [
      {
        question: '¿Necesito un CRM caro?',
        answer:
          'No necesariamente. Muchas veces una hoja bien conectada, el email y los formularios resuelven la primera fase sin subirte los costos. Primero exprimimos lo que ya pagas; solo subimos de nivel cuando el volumen lo justifica.',
      },
      {
        question: '¿Puedes trabajar con herramientas que ya uso?',
        answer:
          'Sí. Antes de proponerte nada nuevo reviso tu stack actual para aprovechar lo que ya pagas y no ponerte otra suscripción encima sin necesidad.',
      },
      {
        question: '¿No me sale más barato pagar varias apps sueltas?',
        answer:
          'A veces sí, si eres muy pequeño. Pero llega un punto en que pagas cinco suscripciones que se solapan y encima copias los datos entre ellas a mano: eso es tirar tiempo y dinero. Ahí conviene un sistema propio, hecho a tu medida. Ese punto se puede calcular, y te digo la verdad según tu caso, sin venderte de más.',
      },
    ],
  },
  {
    slug: 'google-ads',
    eyebrow: 'Crecimiento',
    title: 'Google Ads y medición',
    shortTitle: 'Google Ads',
    lockupImpact: 'Google Ads',
    lockupScript: 'y medición',
    whatIs:
      'Google Ads son los anuncios que aparecen cuando alguien busca en Google algo que tú ofreces. La medición conecta esos clics con tu página y te dice qué búsquedas traen clientes reales — y en cuáles estás gastando sin que entre nada. Sin medición, invertir en anuncios es tirar dinero a ciegas.',
    summary:
      'Antes de subir el presupuesto, ordenamos la promesa, la landing y los eventos. Menos adivinar, más sistema medible: cada euro que inviertes lo puedes seguir hasta el lead que trajo.',
    deliverable: 'Estructura de campaña, conversiones y landings por intención.',
    promise:
      'Campañas conectadas a tu página y a eventos reales, para saber qué búsquedas traen leads, qué mensaje funciona y dónde se te está yendo el presupuesto. Empezamos con una prueba controlada y medida, y escalamos solo lo que ya demostró que vende.',
    idealFor: [
      'Negocios listos para invertir en demanda activa, no solo esperar a que lleguen.',
      'Servicios con ticket suficiente para que la pauta se pague sola.',
      'Marcas que ya reciben tráfico pero no saben cuál convierte y cuál solo cuesta.',
    ],
    includes: [
      'Revisión de tu oferta, tu mercado y las primeras palabras clave.',
      'Landing o ajustes de landing antes de invertir fuerte, para no quemar presupuesto.',
      'Eventos de conversión prioritarios, bien configurados desde el principio.',
      'Estructura base de campañas organizada por intención de búsqueda.',
      'Lectura inicial de las señales y las siguientes mejoras a tomar.',
    ],
    process: [
      'Validar la oferta y qué cuenta como conversión.',
      'Preparar la landing y la medición antes de encender nada.',
      'Configurar la estructura base de campañas.',
      'Revisar los primeros datos y optimizar sobre lo que funciona.',
    ],
    faq: [
      {
        question: '¿Cuánto presupuesto necesito?',
        answer:
          'Depende del servicio y del mercado. Prefiero empezar con una prueba controlada y una landing bien medida antes de recomendarte escalar: así arriesgas poco y sabes qué esperar antes de poner más dinero.',
      },
      {
        question: '¿Puedo hacer Ads sin landing?',
        answer:
          'Se puede, pero casi siempre quema presupuesto. Para campañas en serio, la landing y los eventos son parte del sistema: sin ellos pagas los clics pero no sabes cuáles se convirtieron en clientes.',
      },
    ],
  },
]

export function getStudioService(slug: string): StudioService | undefined {
  return studioServices.find((service) => service.slug === slug)
}
