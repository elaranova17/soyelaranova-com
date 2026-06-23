import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gracias',
  description:
    'Gracias por contactar a Evelyn Patino desde Elara Nova. Estos son los siguientes pasos para preparar tu diagnostico digital.',
}

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[var(--studio-ink)] text-[var(--studio-paper)]">
      <section className="relative overflow-hidden px-5 pt-32 pb-20 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,162,74,0.16),transparent_32%),radial-gradient(circle_at_78%_26%,rgba(91,95,232,0.16),transparent_36%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(247,242,234,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,242,234,0.7)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-[0.7rem] font-black tracking-[0.34em] text-[var(--studio-gold)] uppercase">
            Recibido
          </p>
          <h1 className="font-display text-[3.1rem] leading-[0.98] md:text-[5.6rem]">
            Gracias. Ya dimos el primer paso.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--studio-paper)]/70">
            Voy a revisar lo que compartiste para entender tu oferta, tu momento actual y el sistema digital que mas sentido tiene construir primero.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            ['01', 'Revision', 'Leo tu contexto y detecto oportunidades, fricciones y prioridades.'],
            ['02', 'Respuesta', 'Te escribo con el siguiente paso o preguntas puntuales para afinar alcance.'],
            ['03', 'Propuesta', 'Si encaja, preparo una ruta clara con entregables, tiempos e inversion.'],
          ].map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-[12px] border border-[var(--studio-paper)]/10 bg-[var(--studio-paper)]/[0.045] p-6"
            >
              <p className="font-display text-3xl text-[var(--studio-gold)]">{number}</p>
              <h2 className="mt-5 text-lg font-black">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--studio-paper)]/64">{text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/trabaja-conmigo"
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-6 py-3 text-[0.78rem] font-black tracking-[0.22em] text-[var(--studio-ink)] uppercase"
          >
            Trabaja conmigo
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[var(--studio-paper)]/18 px-6 py-3 text-[0.78rem] font-bold tracking-[0.22em] text-[var(--studio-paper)] uppercase"
          >
            Volver al inicio
          </Link>
        </div>
      </section>

      <footer className="px-5 pb-10 text-sm text-[var(--studio-paper)]/48 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl justify-center gap-4 border-t border-[var(--studio-paper)]/10 pt-6">
          <Link href="/legal" className="hover:text-[var(--studio-gold)]">Privacidad y terminos</Link>
          <Link href="/descubrimiento" className="hover:text-[var(--studio-gold)]">Nuevo diagnostico</Link>
        </div>
      </footer>
    </main>
  )
}
