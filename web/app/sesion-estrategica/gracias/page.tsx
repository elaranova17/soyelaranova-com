import type { Metadata } from 'next'
import Link from 'next/link'
import { ConversionBeacon } from '@/components/conversion-beacon'
import { TrackedLink } from '@/components/tracked-link'
import { getSessionBookingConfig, sessionWhatsappHref } from '@/lib/session-booking'

export const metadata: Metadata = {
  title: 'Pago recibido · Agenda tu sesión',
  description: 'Gracias por pagar la sesión estratégica. Elige tu horario en el calendario.',
  robots: { index: false, follow: false },
}

export default function SesionGraciasPage() {
  const booking = getSessionBookingConfig()
  const agendaHref = booking.configured.calendly
    ? booking.calendlyUrl
    : sessionWhatsappHref(
        'Hola Evelyn, ya pagué la sesión estratégica de 25 CHF. ¿Me confirmas el horario / me pasas el calendario?',
      )

  return (
    <main className="lp-page">
      <ConversionBeacon
        event="purchase"
        label="sesion_estrategica_25chf"
        value={booking.priceChf}
        currency="CHF"
      />
      <section className="lp-book-inside" style={{ paddingTop: '8.5rem', textAlign: 'center' }}>
        <div className="lp-section-inner" style={{ maxWidth: '40rem' }}>
          <p className="home-eyebrow" style={{ justifyContent: 'center' }}>
            <span aria-hidden="true" />
            Pago recibido
          </p>
          <h1 className="type-lockup type-lockup--center type-lockup--glow-soft page-lockup page-lockup--center">
            <span className="type-lockup__impact">Ahora</span>
            <em className="type-lockup__script">elige tu horario</em>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[var(--editorial-cacao)]">
            Gracias. El siguiente paso es agendar los {booking.durationMin} minutos. Llega con tu
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
