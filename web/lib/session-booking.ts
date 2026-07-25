/**
 * Config pública de la sesión estratégica (25 CHF).
 * En Vercel:
 * - NEXT_PUBLIC_STRIPE_PAYMENT_LINK_SESION = https://buy.stripe.com/...
 * - NEXT_PUBLIC_CALENDLY_URL_SESION = https://calendly.com/...
 *
 * Flujo: pre-análisis → pago Stripe → Calendly.
 */

export type SessionBookingConfig = {
  stripePaymentUrl: string
  calendlyUrl: string
  priceChf: number
  durationMin: number
  configured: {
    stripe: boolean
    calendly: boolean
  }
}

export function getSessionBookingConfig(): SessionBookingConfig {
  const stripePaymentUrl = (process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_SESION ?? '').trim()
  const calendlyUrl = (process.env.NEXT_PUBLIC_CALENDLY_URL_SESION ?? '').trim()

  return {
    stripePaymentUrl,
    calendlyUrl,
    priceChf: 25,
    durationMin: 20,
    configured: {
      stripe: /^https?:\/\//i.test(stripePaymentUrl),
      calendly: /^https?:\/\//i.test(calendlyUrl),
    },
  }
}

/** WhatsApp fallback si aún no hay Stripe configurado */
export function sessionWhatsappHref(message?: string) {
  const text =
    message ??
    'Hola Evelyn, completé el pre-análisis y quiero pagar/agendar la sesión estratégica de 25 CHF.'
  return `https://wa.me/41783480550?text=${encodeURIComponent(text)}`
}
