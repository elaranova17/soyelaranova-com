import type { Metadata } from 'next'
import Link from 'next/link'
import { DiscoveryForm } from '@/components/discovery-form'

export const metadata: Metadata = {
  title: 'Descubrimiento',
  description:
    'Cuestionario de descubrimiento para proyectos digitales con La Aranoa Studio: web, automatizaciones, landing pages y Google Ads.',
}

export default function DiscoveryPage() {
  return (
    <main className="min-h-screen bg-[var(--studio-ink)] text-[var(--studio-paper)]">
      <section className="relative overflow-hidden px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,162,74,0.16),transparent_32%),radial-gradient(circle_at_78%_26%,rgba(91,95,232,0.16),transparent_36%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(247,242,234,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,242,234,0.7)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-[0.68rem] font-black tracking-[0.26em] text-[var(--studio-gold)] uppercase hover:text-[var(--studio-paper)]"
          >
            ← Volver al estudio
          </Link>
          <p className="mt-12 mb-4 text-[0.7rem] font-black tracking-[0.34em] text-[var(--studio-gold)] uppercase">
            Diagnostico inicial
          </p>
          <h1 className="font-display text-[3.05rem] leading-[0.98] md:text-[5.4rem]">
            Cuéntame que quieres construir.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--studio-paper)]/70">
            No necesitas llegar con un brief perfecto. Con estas respuestas puedo entender tu negocio, tu prioridad y el sistema digital que tiene mas sentido construir primero.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit rounded-[12px] border border-[var(--studio-gold)]/24 bg-[var(--studio-paper)]/[0.06] p-6 backdrop-blur-xl">
            <p className="text-[0.64rem] font-black tracking-[0.28em] text-[var(--studio-gold)] uppercase">
              Que pasa despues
            </p>
            <div className="mt-6 space-y-5">
              {[
                ['01', 'Reviso tu contexto'],
                ['02', 'Detecto prioridades'],
                ['03', 'Te respondo con siguiente paso'],
              ].map(([number, text]) => (
                <div key={number} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--studio-gold)]/45 font-display text-sm text-[var(--studio-gold)]">
                    {number}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-[var(--studio-paper)]/70">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-[var(--studio-paper)]/10 pt-5 text-xs leading-6 text-[var(--studio-paper)]/52">
              El formulario intenta enviar tu diagnostico directamente. Si el servidor no puede confirmarlo, te muestro una opcion manual por email o WhatsApp para no perder tus respuestas.
            </p>
          </aside>

          <DiscoveryForm />
        </div>
      </section>

      <footer className="px-5 pb-10 text-sm text-[var(--studio-paper)]/48 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-4 border-t border-[var(--studio-paper)]/10 pt-6">
          <Link href="/legal" className="hover:text-[var(--studio-gold)]">Privacidad y terminos</Link>
          <Link href="/servicios" className="hover:text-[var(--studio-gold)]">Servicios</Link>
        </div>
      </footer>
    </main>
  )
}
