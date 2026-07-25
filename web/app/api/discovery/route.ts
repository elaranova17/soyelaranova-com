import { NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

type DiscoveryBody = {
  name?: string
  email?: string
  business?: string
  website?: string
  service?: string
  pack?: string
  goal?: string
  problem?: string
  timeline?: string
  budget?: string
  notes?: string
}

type DiscoveryPayload = Required<DiscoveryBody>

const MAX_LENGTHS = {
  name: 120,
  email: 180,
  business: 160,
  website: 240,
  service: 120,
  pack: 160,
  goal: 1600,
  problem: 2400,
  timeline: 80,
  budget: 80,
  notes: 2400,
} satisfies Record<keyof DiscoveryPayload, number>

function normalize(value: unknown, maxLength: number, singleLine = true): string {
  if (typeof value !== 'string') return ''
  const stripped = singleLine
    ? value.replace(/[\u0000-\u001F\u007F]/g, ' ')
    : value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
  return stripped.trim().slice(0, maxLength)
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function buildPayload(body: DiscoveryBody): DiscoveryPayload {
  return {
    name: normalize(body.name, MAX_LENGTHS.name),
    email: normalize(body.email, MAX_LENGTHS.email).toLowerCase(),
    business: normalize(body.business, MAX_LENGTHS.business),
    website: normalize(body.website, MAX_LENGTHS.website),
    service: normalize(body.service, MAX_LENGTHS.service),
    pack: normalize(body.pack, MAX_LENGTHS.pack),
    goal: normalize(body.goal, MAX_LENGTHS.goal, false),
    problem: normalize(body.problem, MAX_LENGTHS.problem, false),
    timeline: normalize(body.timeline, MAX_LENGTHS.timeline),
    budget: normalize(body.budget, MAX_LENGTHS.budget),
    notes: normalize(body.notes, MAX_LENGTHS.notes, false),
  }
}

function validate(payload: DiscoveryPayload): string | null {
  if (!payload.name) return 'Decime tu nombre.'
  if (!payload.email || !isValidEmail(payload.email)) return 'Correo inválido.'
  if (!payload.business) return 'Contame el nombre de tu negocio o marca.'
  if (!payload.service) return 'Elegí el servicio que creés necesitar.'
  if (!payload.goal) return 'Contame qué querés lograr.'
  if (!payload.problem) return 'Contame qué está fallando o consumiendo demasiado tiempo.'
  if (!payload.timeline) return 'Elegí un tiempo ideal.'
  return null
}

function discoveryText(payload: DiscoveryPayload) {
  return [
    'Nuevo pre-análisis de proyecto · Elara Nova',
    '',
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Negocio / marca: ${payload.business}`,
    `Web o redes: ${payload.website || 'No aplica'}`,
    `Servicio: ${payload.service}`,
    `Paquete: ${payload.pack || 'Sin paquete elegido'}`,
    `Tiempo ideal: ${payload.timeline}`,
    `Presupuesto aproximado: ${payload.budget || 'Por definir'}`,
    '',
    'Objetivo (90 días):',
    payload.goal,
    '',
    'Operación / fugas (wizard):',
    payload.problem,
    '',
    'Notas / qué vende / paquete:',
    payload.notes || 'Sin notas extra',
    '',
    '→ Responder con plantilla: docs/EMAIL_PREANALISIS.md',
    '→ Sesión: https://soyelaranova.com/sesion-estrategica',
  ].join('\n')
}

function leadAutoReplyText(payload: DiscoveryPayload) {
  const firstName = payload.name.split(/\s+/)[0] || payload.name
  return [
    `Hola ${firstName},`,
    '',
    `Recibí tu pre-análisis de ${payload.business}. Gracias.`,
    '',
    'Voy a revisar lo que compartiste (negocio, presencia y fugas) y te escribo con una lectura concreta: lo que veo + 2–3 movimientos.',
    '',
    'Si querés profundizar en vivo mientras tanto, la sesión estratégica dura 20 min y cuesta 25 CHF:',
    'https://soyelaranova.com/sesion-estrategica',
    '',
    'Un abrazo,',
    'Evelyn Patiño · Elara Nova',
    'https://soyelaranova.com',
  ].join('\n')
}

async function sendResendEmail(
  resendKey: string,
  body: Record<string, unknown>,
): Promise<{ ok: boolean; detail?: string }> {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      return { ok: false, detail: await res.text() }
    }
    return { ok: true }
  } catch (err) {
    return { ok: false, detail: err instanceof Error ? err.message : 'fetch failed' }
  }
}

export async function POST(request: Request) {
  const limit = rateLimit(`discovery:${getClientIp(request)}`, { limit: 5, windowMs: 10 * 60_000 })
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: 'Demasiados intentos. Probá de nuevo en un rato.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } },
    )
  }

  let body: DiscoveryBody
  try {
    body = (await request.json()) as DiscoveryBody
  } catch {
    return NextResponse.json({ ok: false, error: 'Cuerpo inválido.' }, { status: 400 })
  }

  const payload = buildPayload(body)
  const error = validate(payload)
  if (error) {
    return NextResponse.json({ ok: false, error }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    console.info('[discovery] lead capturado sin RESEND_API_KEY', payload)
    return NextResponse.json({ ok: true, emailSent: false })
  }

  const from = process.env.RESEND_FROM ?? 'Elara Nova <onboarding@resend.dev>'
  const notifyTo =
    process.env.DISCOVERY_NOTIFY_TO ?? process.env.RESEND_NOTIFY_TO ?? 'elaranova.17@gmail.com'

  const internal = await sendResendEmail(resendKey, {
    from,
    to: notifyTo,
    reply_to: payload.email,
    subject: `Nuevo lead · ${payload.service} · ${payload.name}`,
    text: discoveryText(payload),
  })

  if (!internal.ok) {
    console.error('[discovery] Resend internal error', internal.detail)
  }

  const autoReply = await sendResendEmail(resendKey, {
    from,
    to: payload.email,
    reply_to: notifyTo,
    subject: `Recibí tu pre-análisis · ${payload.business}`,
    text: leadAutoReplyText(payload),
  })

  if (!autoReply.ok) {
    console.error('[discovery] Resend auto-reply error', autoReply.detail)
  }

  if (!internal.ok && !autoReply.ok) {
    return NextResponse.json(
      { ok: true, emailSent: false, warning: 'Lead recibido, pero los emails no pudieron enviarse.' },
      { status: 202 },
    )
  }

  return NextResponse.json({
    ok: true,
    emailSent: internal.ok,
    autoReplySent: autoReply.ok,
  })
}
