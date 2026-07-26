import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { DiscoveryForm } from '@/components/discovery-form'
import { StudioReveal } from '@/components/studio-reveal'

export const metadata: Metadata = {
  title: 'Pre-análisis de proyecto',
  description:
    'Cuestionario didáctico gratis: Evelyn prepara una lectura de tu negocio/web. Después, si hay fit, sesión estratégica 20 min · 25 CHF.',
}

export default function DiscoveryPage() {
  return (
    <main className="studio-index">
      <section className="studio-index__hero">
        <StudioReveal>
          <Link
            href="/"
            className="text-[0.66rem] font-bold tracking-[0.24em] text-[var(--editorial-cacao)] uppercase hover:text-[var(--editorial-plum)]"
          >
            ← Volver al inicio
          </Link>
          <p className="home-eyebrow studio-accent mt-10">
            <span aria-hidden="true" />
            Paso 1 del embudo · gratis
          </p>
          <h1 className="type-lockup type-lockup--glow-soft page-lockup">
            <span className="type-lockup__impact">Cuéntame</span>
            <em className="type-lockup__script">cómo trabajas</em>
          </h1>
        </StudioReveal>
        <StudioReveal delay={0.08}>
          <p className="studio-index__hero-lead">
            No es una call larga gratis. Es un cuestionario guiado (2–4 min) para que yo prepare una
            lectura de tu negocio/web. Si después quieres profundizar: sesión estratégica 20 min · 25
            CHF.
          </p>
        </StudioReveal>
      </section>

      <section className="page-band-dark px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit rounded-[18px] border border-[var(--editorial-gold)]/30 bg-[var(--editorial-ivory)]/[0.05] p-6">
            <p className="text-[0.62rem] font-bold tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
              Embudo · qué pasa después
            </p>
            <div className="mt-6 space-y-5">
              {[
                ['01', 'Completas 5 pasos (2–4 min)'],
                ['02', 'Te mando el pre-análisis por email'],
                ['03', 'Si hay fit: sesión estratégica 25 CHF'],
                ['04', 'Proyecto con pack y precio cerrado'],
              ].map(([number, text]) => (
                <div key={number} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--editorial-gold)]/60 font-display text-sm text-[var(--editorial-gold)]">
                    {number}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-[var(--editorial-lavender)]">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-[var(--editorial-ivory)]/12 pt-5 text-xs leading-6 text-[var(--editorial-lavender)]/80">
              Cuanto más concreto seas (URL, cómo llegan clientes, qué haces a mano), mejor sale el
              pre-análisis. Si el envío automático falla, te dejo opción email/WhatsApp.
            </p>
            <Link
              href="/sesion-estrategica"
              className="mt-5 inline-block text-[0.66rem] font-bold tracking-[0.18em] text-[var(--editorial-gold)] uppercase hover:underline"
            >
              Ver sesión 25 CHF →
            </Link>
          </aside>

          <Suspense fallback={<p className="text-sm text-[var(--editorial-lavender)]">Cargando formulario…</p>}>
            <DiscoveryForm />
          </Suspense>
        </div>
      </section>

      <footer className="px-5 py-8 text-sm text-[var(--editorial-cacao)] md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-5">
          <Link href="/legal" className="hover:text-[var(--editorial-plum)]">
            Privacidad y términos
          </Link>
          <Link href="/servicios" className="hover:text-[var(--editorial-plum)]">
            Ver modelos de webs
          </Link>
          <Link href="/sesion-estrategica" className="hover:text-[var(--editorial-plum)]">
            Sesión 25 CHF
          </Link>
        </div>
      </footer>
    </main>
  )
}
