import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { DiscoveryForm } from '@/components/discovery-form'

export const metadata: Metadata = {
  title: 'Pre-análisis de proyecto',
  description:
    'Cuestionario didáctico para que Evelyn Patiño prepare un pre-análisis de tu negocio, web y procesos antes de una sesión estratégica de 25 CHF.',
}

export default function DiscoveryPage() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="bg-[var(--editorial-ivory)] px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-[0.66rem] font-bold tracking-[0.24em] text-[var(--editorial-cacao)] uppercase hover:text-[var(--editorial-plum)]"
          >
            ← Volver al inicio
          </Link>
          <p className="home-eyebrow mt-10">
            <span aria-hidden="true" />
            Pre-análisis didáctico · gratis
          </p>
          <h1 className="mt-5 font-display text-[3.05rem] font-normal leading-[0.94] md:text-[5.4rem]">
            Contame cómo trabajás hoy.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            No es una call larga gratis. Es un cuestionario guiado para que yo prepare una lectura
            de tu negocio/web. Si después querés profundizar, la sesión estratégica dura 20 min y
            cuesta 25 CHF.
          </p>
        </div>
      </section>

      <section className="bg-[var(--editorial-aubergine)] px-5 py-16 text-[var(--editorial-ivory)] md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit rounded-[18px] border border-[var(--editorial-gold)]/30 bg-[var(--editorial-ivory)]/[0.05] p-6">
            <p className="text-[0.62rem] font-bold tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
              Qué pasa después
            </p>
            <div className="mt-6 space-y-5">
              {[
                ['01', 'Reviso tu contexto y tu web/redes'],
                ['02', 'Te mando el pre-análisis por email'],
                ['03', 'Si querés, sesión estratégica 25 CHF'],
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
              Cuanto más concreto seas (URL, cómo llegan clientes, qué hacés a mano), mejor sale el
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
            Privacidad y terminos
          </Link>
          <Link href="/sesion-estrategica" className="hover:text-[var(--editorial-plum)]">
            Sesión 25 CHF
          </Link>
        </div>
      </footer>
    </main>
  )
}
