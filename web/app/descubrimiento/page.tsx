import type { Metadata } from 'next'
import Link from 'next/link'
import { DiscoveryForm } from '@/components/discovery-form'

export const metadata: Metadata = {
  title: 'Descubrimiento',
  description:
    'Cuestionario de descubrimiento para trabajar con Evelyn Patino en web, automatizaciones, landing pages y Google Ads.',
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
            Diagnostico inicial · gratis
          </p>
          <h1 className="mt-5 font-display text-[3.05rem] font-normal leading-[0.94] md:text-[5.4rem]">
            Cuéntame que quieres construir.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            No necesitas llegar con un brief perfecto. Con estas respuestas puedo entender tu
            negocio, tu prioridad y el sistema digital que tiene mas sentido construir primero.
          </p>
        </div>
      </section>

      <section className="bg-[var(--editorial-aubergine)] px-5 py-16 text-[var(--editorial-ivory)] md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit rounded-[18px] border border-[var(--editorial-gold)]/30 bg-[var(--editorial-ivory)]/[0.05] p-6">
            <p className="text-[0.62rem] font-bold tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
              Que pasa despues
            </p>
            <div className="mt-6 space-y-5">
              {[
                ['01', 'Reviso tu contexto'],
                ['02', 'Detecto prioridades'],
                ['03', 'Te respondo con siguiente paso'],
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
              El formulario intenta enviar tu diagnostico directamente. Si el servidor no puede
              confirmarlo, te muestro una opcion manual por email o WhatsApp para no perder tus
              respuestas.
            </p>
          </aside>

          <DiscoveryForm />
        </div>
      </section>

      <footer className="px-5 py-8 text-sm text-[var(--editorial-cacao)] md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-5">
          <Link href="/legal" className="hover:text-[var(--editorial-plum)]">Privacidad y terminos</Link>
          <Link href="/trabaja-conmigo" className="hover:text-[var(--editorial-plum)]">Trabaja conmigo</Link>
        </div>
      </footer>
    </main>
  )
}
