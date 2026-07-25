/**
 * Modelos didácticos de webs / landings.
 * Sirven para enseñar (no solo vender): qué estructura tiene cada tipo
 * y para qué negocio sirve. Usado en servicios + LPs de páginas.
 */

export type WebModelSection = {
  label: string
  hint: string
}

export type WebModel = {
  id: string
  /** Sitio completo | Landing de campaña | Sistema web+ads */
  kind: 'sitio' | 'landing' | 'sistema'
  eyebrow: string
  title: string
  script: string
  /** Explicación para quien no sabe del tema */
  explain: string
  /** Resultado de negocio en una frase */
  result: string
  /** Para quién es */
  forWho: string
  /** Secciones del wireframe (orden = embudo de la página) */
  sections: readonly WebModelSection[]
  /** Pack / ancla de precio */
  priceAnchor: string
  href: string
}

export const webModels: readonly WebModel[] = [
  {
    id: 'sitio-local',
    kind: 'sitio',
    eyebrow: 'Modelo 01 · Sitio negocio',
    title: 'Negocio local',
    script: 'que genera citas',
    explain:
      'Pensá en una clínica, un taller, un estudio o un servicio a domicilio. La web no es un folleto: es un embudo corto. Alguien busca → entiende qué hacés → ve prueba → pide cita o presupuesto.',
    result: 'Menos “escribime por Instagram” y más formularios que llegan ordenados.',
    forWho: 'PYMEs y negocios locales (ES / LATAM / CH) que quieren verse serios y medibles.',
    sections: [
      { label: 'Hero', hint: 'Promesa + ciudad + CTA' },
      { label: 'Servicios', hint: '3–5 ofertas claras' },
      { label: 'Prueba', hint: 'Fotos / reseñas / zonas' },
      { label: 'Proceso', hint: 'Cómo se trabaja con vos' },
      { label: 'Contacto', hint: 'Formulario + WhatsApp' },
    ],
    priceAnchor: 'Desde 1.900 €',
    href: '/lp/paginas-web/sitio-negocio',
  },
  {
    id: 'sitio-profesional',
    kind: 'sitio',
    eyebrow: 'Modelo 02 · Presencia',
    title: 'Profesional',
    script: 'con autoridad',
    explain:
      'Para coaches, consultoras, freelancers o estudios pequeños. La web cuenta quién sos, qué problema resolvés y por qué confiar — sin parecer un CV aburrido ni un feed de Instagram.',
    result: 'Autoridad + un solo camino: pre-análisis, sesión o agenda.',
    forWho: 'Independientes que venden servicio (no producto físico).',
    sections: [
      { label: 'Posicionamiento', hint: 'Quién / para quién' },
      { label: 'Método', hint: 'Cómo trabajás' },
      { label: 'Oferta', hint: 'Packs o servicios' },
      { label: 'Sobre vos', hint: 'Credibilidad humana' },
      { label: 'CTA', hint: 'Formulario o sesión' },
    ],
    priceAnchor: 'Sitio Negocio · 1.900 €',
    href: '/lp/paginas-web/sitio-negocio',
  },
  {
    id: 'landing-ads',
    kind: 'landing',
    eyebrow: 'Modelo 03 · Landing',
    title: 'Landing de Ads',
    script: 'una sola acción',
    explain:
      'Una landing no es “una web chiquita”. Es UNA página con UN objetivo: que dejen el dato o pidan presupuesto. Ideal cuando pagás clics en Google o Meta: el anuncio promete X y la página entrega exactamente X.',
    result: 'Sabés qué anuncio convirtió porque hay un solo CTA medible.',
    forWho: 'Campañas de captación, lanzamientos o servicios con ticket claro.',
    sections: [
      { label: 'Headline', hint: 'Misma promesa del anuncio' },
      { label: 'Dolor', hint: 'El problema en su idioma' },
      { label: 'Solución', hint: 'Qué incluye / cómo' },
      { label: 'Objeciones', hint: 'FAQ corta' },
      { label: 'Formulario', hint: 'CTA único + gracias' },
    ],
    priceAnchor: 'Landing Única · 650 €',
    href: '/lp/paginas-web/landing-unica',
  },
  {
    id: 'sitio-ads',
    kind: 'sistema',
    eyebrow: 'Modelo 04 · Sistema',
    title: 'Sitio + Ads',
    script: 'máquina de captar',
    explain:
      'Cuando ya no alcanza “tener web”: necesitás páginas por intención (ciudad, servicio, campaña) + Google Ads + medición. El tráfico paga; la web convierte; vos ves números.',
    result: 'Captación con feedback: qué búsqueda trae clientes y cuál quema plata.',
    forWho: 'Negocios listos a invertir en demanda activa con tracking.',
    sections: [
      { label: 'Sitio base', hint: 'Confianza + SEO' },
      { label: 'Landings', hint: '1 intención = 1 página' },
      { label: 'Ads', hint: 'Campañas por búsqueda' },
      { label: 'Tracking', hint: 'Conversiones reales' },
      { label: 'Optimizar', hint: 'Bajar CPL con datos' },
    ],
    priceAnchor: 'Sitio + Ads · 3.400 €',
    href: '/lp/paginas-web/sitio-ads',
  },
] as const

export function webModelsForKind(kind: WebModel['kind'] | 'all'): readonly WebModel[] {
  if (kind === 'all') return webModels
  return webModels.filter((m) => m.kind === kind)
}

/** Qué modelos mostrar según servicio / LP */
export function webModelsForContext(
  context: 'sitios-web' | 'landing-pages' | 'paginas-web' | 'all',
): readonly WebModel[] {
  if (context === 'landing-pages') return webModels.filter((m) => m.kind === 'landing')
  if (context === 'sitios-web') return webModels.filter((m) => m.kind === 'sitio' || m.kind === 'sistema')
  if (context === 'paginas-web') return webModels
  return webModels
}
