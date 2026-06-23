import { NextResponse } from 'next/server'

type DiscoveryBody = {
  name?: string
  email?: string
  business?: string
  website?: string
  service?: string
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
  goal: 1600,
  problem: 1600,
  timeline: 80,
  budget: 80,
  notes: 1600,
} satisfies Record<keyof DiscoveryPayload, number>

function normalize(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
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
    goal: normalize(body.goal, MAX_LENGTHS.goal),
    problem: normalize(body.problem, MAX_LENGTHS.problem),
    timeline: normalize(body.timeline, MAX_LENGTHS.timeline),
    budget: normalize(body.budget, MAX_LENGTHS.budget),
    notes: normalize(body.notes, MAX_LENGTHS.notes),
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
    'Nuevo diagnostico de proyecto · La Aranoa Studio',
    '',
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Negocio / marca: ${payload.business}`,
    `Web o redes: ${payload.website || 'No aplica'}`,
    `Servicio: ${payload.service}`,
    `Tiempo ideal: ${payload.timeline}`,
    `Presupuesto aproximado: ${payload.budget || 'Por definir'}`,
    '',
    'Objetivo principal:',
    payload.goal,
    '',
    'Problema actual:',
    payload.problem,
    '',
    'Notas extra:',
    payload.notes || 'Sin notas extra',
  ].join('\n')
}

export async function POST(request: Request) {
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

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? 'La Aranoa Studio <onboarding@resend.dev>',
        to: process.env.DISCOVERY_NOTIFY_TO ?? process.env.RESEND_NOTIFY_TO ?? 'evelynpatildr@gmail.com',
        reply_to: payload.email,
        subject: `Nuevo lead · ${payload.service} · ${payload.name}`,
        text: discoveryText(payload),
      }),
    })

    if (!res.ok) {
      console.error('[discovery] Resend error', await res.text())
      return NextResponse.json(
        { ok: true, emailSent: false, warning: 'Lead recibido, pero el email interno no pudo enviarse.' },
        { status: 202 },
      )
    }
  } catch (err) {
    console.error('[discovery] Resend fetch failed', err)
    return NextResponse.json(
      { ok: true, emailSent: false, warning: 'Lead recibido, pero el email interno no pudo enviarse.' },
      { status: 202 },
    )
  }

  return NextResponse.json({ ok: true, emailSent: true })
}
