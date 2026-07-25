import type { Metadata } from 'next'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'

export const metadata: Metadata = {
  title: 'Sesión estratégica · 25 CHF',
  description:
    'Sesión estratégica de 20 minutos con Evelyn Patiño: resultados de tu pre-análisis y mini-ruta. 25 CHF.',
}

export default function SesionEstrategicaPage() {
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
            Producto de entrada · 20 min
          </p>
          <h1 className="mt-5 font-display text-[3rem] font-normal leading-[0.94] md:text-[5.2rem]">
            Sesión estratégica · 25 CHF
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            No es una call gratis de descubrimiento. Es una sesión corta donde te comparto lo que
            analicé de tu negocio/web, 2–3 movimientos concretos y el siguiente paso (proyecto o no).
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            ['01', 'Pre-análisis previo', 'Completaste el cuestionario didáctico. Yo ya revisé tu contexto.'],
            ['02', '20 minutos enfocados', 'Te muestro fugas, prioridades y una mini-estrategia accionable.'],
            ['03', 'Decisión clara', 'Si hay fit, cotizamos Arranque / Pro / A medida. Si no, te quedás con la ruta.'],
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[0.68rem] font-black tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
              Inversión
            </p>
            <h2 className="mt-4 font-display text-[2.6rem] leading-none md:text-[4rem]">25 CHF</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--editorial-lavender)]">
              ~25 € si estás en ES/LATAM. Paga mi tiempo y filtra curiosidad. El pre-análisis escrito
              sigue siendo gratis; esta sesión es el paso para profundizar en vivo.
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-7 text-[var(--editorial-lavender)]">
              <li>✦ Resultados de tu pre-análisis</li>
              <li>✦ Mini-estrategia (2–3 movimientos)</li>
              <li>✦ Claridad de paquete si querés proyecto</li>
            </ul>
          </div>
          <div className="rounded-[18px] border border-[var(--editorial-gold)]/35 bg-white/[0.04] p-7">
            <p className="text-[0.68rem] font-black tracking-[0.2em] text-[var(--editorial-gold)] uppercase">
              Cómo agendar
            </p>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-[var(--editorial-lavender)]">
              <li>1. Completá el pre-análisis (obligatorio).</li>
              <li>2. Te mando la lectura inicial por email.</li>
              <li>3. Si querés la sesión, te paso el link de pago 25 CHF + agenda.</li>
            </ol>
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'sesion_preanalisis' }}
              className="home-button home-button--gold mt-8 w-full"
            >
              Empezar por el pre-análisis
            </TrackedLink>
            <p className="mt-4 text-xs leading-6 text-[var(--editorial-lavender)]/70">
              Stripe/Calendly: link de pago se activa cuando confirmemos tu pre-análisis (evita
              agendas vacías).
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
