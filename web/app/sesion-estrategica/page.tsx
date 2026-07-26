import type { Metadata } from 'next'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { getSessionBookingConfig, sessionWhatsappHref } from '@/lib/session-booking'

export const metadata: Metadata = {
  title: 'Sesión estratégica · 25 CHF',
  description:
    'Sesión estratégica de 20 minutos con Evelyn Patiño: resultados de tu pre-análisis y mini-ruta. Pago 25 CHF + agenda.',
}

export default function SesionEstrategicaPage() {
  const booking = getSessionBookingConfig()
  const payHref = booking.configured.stripe
    ? booking.stripePaymentUrl
    : sessionWhatsappHref(
        'Hola Evelyn, quiero pagar la sesión estratégica de 25 CHF. Ya completé / voy a completar el pre-análisis.',
      )
  const agendaHref = booking.configured.calendly
    ? booking.calendlyUrl
    : sessionWhatsappHref(
        'Hola Evelyn, ya pagué / quiero agendar la sesión estratégica de 20 min. ¿Me pasas el calendario?',
      )
  const live = booking.configured.stripe && booking.configured.calendly

  return (
    <main className="lp-page">
      <section className="lp-book-inside" style={{ paddingTop: '8.5rem' }}>
        <div className="lp-section-inner" style={{ maxWidth: '48rem' }}>
          <Link
            href="/descubrimiento"
            className="text-[0.66rem] font-bold tracking-[0.24em] text-[var(--editorial-cacao)] uppercase hover:text-[var(--editorial-plum)]"
          >
            ← Primero el pre-análisis
          </Link>
          <p className="home-eyebrow mt-10">
            <span aria-hidden="true" />
            Producto de entrada · {booking.durationMin} min · {booking.priceChf} CHF
          </p>
          <h1 className="type-lockup type-lockup--glow-soft page-lockup">
            <span className="type-lockup__impact">Sesión</span>
            <em className="type-lockup__script">estratégica</em>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            No es una call gratis. Es una sesión corta donde te comparto lo que analicé de tu
            negocio/web, 2–3 movimientos concretos y el siguiente paso (proyecto o no).
          </p>
        </div>
      </section>

      <section className="lp-steps">
        <div className="lp-section-inner">
          <h2 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Así</span>
            <em className="type-lockup__script">funciona</em>
          </h2>
          <ol className="lp-steps__list">
            {[
              ['01', 'Pre-análisis', 'Cuestionario didáctico gratis. Yo preparo tu lectura.'],
              [
                '02',
                `Pago ${booking.priceChf} CHF`,
                'Stripe seguro. Filtra curiosidad y reserva mi tiempo.',
              ],
              ['03', 'Agenda 20 min', 'Eliges el hueco en Calendly y vemos la mini-estrategia.'],
            ].map(([n, t, d]) => (
              <li key={n}>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lp-case">
        <div className="lp-section-inner lp-case__grid">
          <div>
            <p className="home-eyebrow home-eyebrow--light">
              <span aria-hidden="true" />
              Inversión
            </p>
            <h2 className="type-lockup type-lockup--glow">
              <span className="type-lockup__impact">{booking.priceChf} CHF</span>
              <em className="type-lockup__script">que abren camino</em>
            </h2>
            <p>
              ~25 € si estás en ES/LATAM. Incluye revisión de tu pre-análisis + mini-ruta. No incluye
              implementación del proyecto.
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-7 text-[var(--editorial-lavender)]">
              <li>✦ Resultados de tu pre-análisis</li>
              <li>✦ Mini-estrategia (2–3 movimientos)</li>
              <li>✦ Claridad de paquete si quieres proyecto</li>
            </ul>
          </div>

          <div className="lp-invest">
            <p className="lp-invest__label">Reservar ahora</p>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-[var(--editorial-lavender)]">
              <li>
                <strong className="text-[var(--editorial-ivory)]">1.</strong> Completa el
                pre-análisis (si aún no).
              </li>
              <li>
                <strong className="text-[var(--editorial-ivory)]">2.</strong> Paga la sesión (
                {booking.priceChf} CHF).
              </li>
              <li>
                <strong className="text-[var(--editorial-ivory)]">3.</strong> Elige horario en el
                calendario.
              </li>
            </ol>

            <div className="mt-8 grid gap-3">
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'sesion_preanalisis' }}
                className="home-button home-button--light w-full"
              >
                1 · Hacer pre-análisis
              </TrackedLink>

              <TrackedLink
                href={payHref}
                tracking={{ event: 'cta_click', category: 'lead', label: 'sesion_pago' }}
                className="home-button home-button--gold w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {booking.configured.stripe
                  ? `2 · Pagar ${booking.priceChf} CHF`
                  : '2 · Pedir link de pago (WhatsApp)'}
              </TrackedLink>

              <TrackedLink
                href={agendaHref}
                tracking={{ event: 'cta_click', category: 'lead', label: 'sesion_calendly' }}
                className="home-button home-button--light w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {booking.configured.calendly
                  ? '3 · Elegir horario'
                  : '3 · Pedir agenda (WhatsApp)'}
              </TrackedLink>
            </div>

            <p className="mt-5 text-xs leading-6 text-[var(--editorial-lavender)]/70">
              {live
                ? 'Pago con Stripe. Después del pago, agenda en Calendly (también en /sesion-estrategica/gracias).'
                : 'Falta configurar Stripe/Calendly en Vercel (docs/GO_LIVE.md). Mientras, los botones 2 y 3 abren WhatsApp.'}
            </p>
          </div>
        </div>
      </section>

      <footer className="lp-footer">
        <Link href="/legal">Privacidad y términos</Link>
        <span aria-hidden="true">·</span>
        <Link href="/descubrimiento">Pre-análisis</Link>
      </footer>
    </main>
  )
}
