/**
 * Modelos didácticos para automatizaciones y Google Ads.
 * Misma idea que web-models: enseñar el sistema antes de venderlo.
 */

export type FlowStep = {
  n: string
  label: string
  hint: string
}

export type SystemModel = {
  id: string
  kind: 'auto' | 'ads'
  eyebrow: string
  title: string
  script: string
  explain: string
  result: string
  steps: readonly FlowStep[]
  priceAnchor: string
  href: string
}

export const automationModels: readonly SystemModel[] = [
  {
    id: 'lead-capture',
    kind: 'auto',
    eyebrow: 'Flujo 01 · Arranque',
    title: 'Lead',
    script: 'que no se pierde',
    explain:
      'Alguien llena el formulario de tu web. El sistema guarda el dato, te avisa a ti y manda un mensaje al cliente. Cero copiar-pegar a WhatsApp a las 11 de la noche.',
    result: 'Cada lead tiene dueño y seguimiento en segundos.',
    steps: [
      { n: '1', label: 'Formulario', hint: 'Entra el lead' },
      { n: '2', label: 'CRM / hoja', hint: 'Se guarda solo' },
      { n: '3', label: 'WhatsApp / email', hint: 'Respuesta al cliente' },
      { n: '4', label: 'Aviso a ti', hint: 'Sabes al instante' },
    ],
    priceAnchor: 'Arranque · 450 €',
    href: '/lp/automatizaciones/arranque',
  },
  {
    id: 'funnel-auto',
    kind: 'auto',
    eyebrow: 'Flujo 02 · Pro',
    title: 'Embudo',
    script: 'completo',
    explain:
      'Varios flujos conectados: captación, clasificación (incluso con IA), recordatorios y postventa. El negocio sigue trabajando cuando tú no estás.',
    result: 'Un proceso entero sin tareas manuales repetidas.',
    steps: [
      { n: '1', label: 'Entrada', hint: 'Web / Ads / IG' },
      { n: '2', label: 'Clasificar', hint: 'Tipo de lead' },
      { n: '3', label: 'Nutrir', hint: 'Emails / WA' },
      { n: '4', label: 'Cita / venta', hint: 'Agenda o pack' },
    ],
    priceAnchor: 'Pro · 1.400 €',
    href: '/lp/automatizaciones/pro',
  },
]

export const adsModels: readonly SystemModel[] = [
  {
    id: 'ads-measured',
    kind: 'ads',
    eyebrow: 'Sistema Ads · medible',
    title: 'Clic',
    script: 'con consecuencia',
    explain:
      'Google Ads sin medición es gastar a ciegas. El sistema correcto: búsqueda → anuncio → landing con la misma promesa → conversión → dato que te dice qué palabra clave paga.',
    result: 'Sabes qué búsqueda trae clientes y cuál quema presupuesto.',
    steps: [
      { n: '1', label: 'Búsqueda', hint: 'Intención real' },
      { n: '2', label: 'Anuncio', hint: 'Misma promesa' },
      { n: '3', label: 'Landing', hint: '1 CTA claro' },
      { n: '4', label: 'Tracking', hint: 'Conversión real' },
    ],
    priceAnchor: 'Setup / gestión',
    href: '/lp/google-ads/setup',
  },
]
