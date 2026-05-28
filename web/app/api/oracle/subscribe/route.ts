import { NextResponse } from 'next/server'

type Body = {
  email?: string
  birthDate?: string
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidBirthDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const d = new Date(value)
  return !Number.isNaN(d.getTime())
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ ok: false, error: 'Cuerpo inválido.' }, { status: 400 })
  }

  const email = body.email?.trim().toLowerCase() ?? ''
  const birthDate = body.birthDate?.trim() ?? ''

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Correo inválido.' }, { status: 400 })
  }
  if (!birthDate || !isValidBirthDate(birthDate)) {
    return NextResponse.json({ ok: false, error: 'Fecha de nacimiento inválida.' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? 'Elara Nova <onboarding@resend.dev>',
          to: process.env.RESEND_NOTIFY_TO ?? email,
          subject: 'Nueva suscripción · El Círculo',
          text: `Email: ${email}\nFecha nacimiento: ${birthDate}`,
        }),
      })
      if (!res.ok) {
        console.error('[oracle/subscribe] Resend error', await res.text())
      }
    } catch (err) {
      console.error('[oracle/subscribe] Resend fetch failed', err)
    }
  } else {
    console.info('[oracle/subscribe] captura (sin RESEND_API_KEY en Vercel)', { email, birthDate })
  }

  return NextResponse.json({ ok: true })
}
