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
        'Hola Evelyn, ya pagué / quiero agendar la sesión estratégica de 20 min. ¿Me pasás el calendario?',
      )

  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="bg-[var(--editorial-ivory)] px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/descubrimiento"
            className="text-[0.66rem] font-bold tracking-[0.24em] text-[var(--editorial-cacao)] uppercase hover:text-[var(--editorial-plum)]"
          >
            ← Primero el pre-análisis
          </Link>
          <p className="home-eyebrow mt-10">
            <span aria-hidden="true" />
            Producto de entrada · {booking.durationMin} min
          </p>
          <h1 className="mt-5 font-display text-[3rem] font-normal leading-[0.94] md:text-[5.2rem]">
            Sesión estratégica · {booking.priceChf} CHF
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            No es una call gratis. Es una sesión corta donde te comparto lo que analicé de tu
            negocio/web, 2–3 movimientos concretos y el siguiente paso (proyecto o no).
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            ['01', 'Pre-análisis', 'Cuestionario didáctico gratis. Yo preparo tu lectura.'],
            ['02', `Pago ${booking.priceChf} CHF`, 'Stripe seguro. Filtra curiosidad y reserva mi tiempo.'],
            ['03', 'Agenda 20 min', 'Elegís el hueco en Calendly y vemos la mini-estrategia en vivo.'],
          ].map(([n, t, d]) => (
            <article
              key={n}
              className="rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] p-6"
            >
              <p className="font-display text-2xl text-[var(--editorial-gold)]">{n}</p>
              <h2 className="mt-3 font-display text-2xl text-[var(--editorial-plum)]">{t}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--editorial-cacao)]">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--editorial-aubergine)] px-5 py-20 text-[var(--editorial-ivory)] md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] font-black tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
              Inversión
            </p>
            <h2 className="mt-4 font-display text-[2.6rem] leading-none md:text-[4rem]">
              {booking.priceChf} CHF
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--editorial-lavender)]">
              ~25 € si estás en ES/LATAM. Incluye revisión de tu pre-análisis + mini-ruta. No incluye
              implementación del proyecto.
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-7 text-[var(--editorial-lavender)]">
              <li>✦ Resultados de tu pre-análisis</li>
              <li>✦ Mini-estrategia (2–3 movimientos)</li>
              <li>✦ Claridad de paquete si querés proyecto</li>
            </ul>
          </div>

          <div className="rounded-[18px] border border-[var(--editorial-gold)]/35 bg-white/[0.04] p-7">
            <p className="text-[0.68rem] font-black tracking-[0.2em] text-[var(--editorial-gold)] uppercase">
              Reservar ahora
            </p>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-[var(--editorial-lavender)]">
              <li>
                <strong className="text-[var(--editorial-ivory)]">1.</strong> Completá el
                pre-análisis (si aún no).
              </li>
              <li>
                <strong className="text-[var(--editorial-ivory)]">2.</strong> Pagá la sesión (
                {booking.priceChf} CHF).
              </li>
              <li>
                <strong className="text-[var(--editorial-ivory)]">3.</strong> Elegí horario en el
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
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[var(--editorial-gold)] px-6 text-[0.72rem] font-black tracking-[0.18em] text-[var(--editorial-gold)] uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                {booking.configured.calendly
                  ? '3 · Elegir horario'
                  : '3 · Pedir agenda (WhatsApp)'}
              </TrackedLink>
            </div>

            <p className="mt-5 text-xs leading-6 text-[var(--editorial-lavender)]/70">
              {booking.configured.stripe && booking.configured.calendly
                ? 'Pago con Stripe. Después del pago, agendá en Calendly. Si el Payment Link tiene after_completion → /sesion-estrategica/gracias, ahí también está el calendario.'
                : 'Stripe/Calendly aún no están en las variables de entorno de Vercel: los botones 2 y 3 abren WhatsApp como respaldo hasta que configures los links.'}
            </p>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-xs text-[var(--editorial-cacao)]">
        <Link href="/legal" className="hover:text-[var(--editorial-plum)]">
          Privacidad y términos
        </Link>
        <span className="mx-2">·</span>
        <Link href="/descubrimiento" className="hover:text-[var(--editorial-plum)]">
          Pre-análisis
        </Link>
      </footer>
    </main>
  )
}
