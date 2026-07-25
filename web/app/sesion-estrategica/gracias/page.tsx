import type { Metadata } from 'next'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { getSessionBookingConfig, sessionWhatsappHref } from '@/lib/session-booking'

export const metadata: Metadata = {
  title: 'Pago recibido · Agendá tu sesión',
  description: 'Gracias por pagar la sesión estratégica. Elegí tu horario en el calendario.',
  robots: { index: false, follow: false },
}

export default function SesionGraciasPage() {
  const booking = getSessionBookingConfig()
  const agendaHref = booking.configured.calendly
    ? booking.calendlyUrl
    : sessionWhatsappHref(
        'Hola Evelyn, ya pagué la sesión estratégica de 25 CHF. ¿Me confirmás el horario / me pasás el calendario?',
      )

  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="bg-[var(--editorial-ivory)] px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="home-eyebrow justify-center">
            <span aria-hidden="true" />
            Pago recibido
          </p>
          <h1 className="mt-6 font-display text-[3rem] leading-[0.94] md:text-[5rem]">
            Ahora elegí tu horario.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[var(--editorial-cacao)]">
            Gracias. El siguiente paso es agendar los {booking.durationMin} minutos. Llegá con tu
            web/redes a mano; yo llego con tu pre-análisis.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TrackedLink
              href={agendaHref}
              tracking={{ event: 'cta_click', category: 'lead', label: 'sesion_gracias_calendly' }}
              className="home-button home-button--primary"
              target={booking.configured.calendly ? '_blank' : undefined}
              rel={booking.configured.calendly ? 'noopener noreferrer' : undefined}
            >
              {booking.configured.calendly ? 'Abrir calendario' : 'Confirmar por WhatsApp'}
            </TrackedLink>
            <Link href="/" className="home-button home-button--quiet">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
