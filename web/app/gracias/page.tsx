import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gracias',
  description:
    'Gracias por contactar a Evelyn Patino desde Elara Nova. Estos son los siguientes pasos para preparar tu diagnostico digital.',
}

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="bg-[var(--editorial-ivory)] px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="home-eyebrow justify-center">
            <span aria-hidden="true" />
            Recibido
          </p>
          <h1 className="mt-6 font-display text-[3.1rem] font-normal leading-[0.94] md:text-[5.6rem]">
            Gracias. Ya dimos el primer paso.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            Voy a revisar lo que compartiste para entender tu oferta, tu momento actual y el sistema
            digital que mas sentido tiene construir primero.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            ['01', 'Revision', 'Leo tu contexto y detecto oportunidades, fricciones y prioridades.'],
            ['02', 'Respuesta', 'Te escribo con el siguiente paso o preguntas puntuales para afinar alcance.'],
            ['03', 'Propuesta', 'Si encaja, preparo una ruta clara con entregables, tiempos e inversion.'],
          ].map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] p-6"
            >
              <p className="font-display text-3xl text-[var(--editorial-gold)]">{number}</p>
              <h2 className="mt-5 font-display text-2xl font-normal text-[var(--editorial-plum)]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--editorial-cacao)]">{text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col justify-center gap-3 sm:flex-row">
          <Link href="/trabaja-conmigo" className="home-button home-button--primary">
            Trabaja conmigo
          </Link>
          <Link href="/" className="home-button home-button--quiet">
            Volver al inicio
          </Link>
        </div>
      </section>

      <footer className="px-5 py-8 text-sm text-[var(--editorial-cacao)] md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl justify-center gap-5">
          <Link href="/legal" className="hover:text-[var(--editorial-plum)]">Privacidad y terminos</Link>
          <Link href="/descubrimiento" className="hover:text-[var(--editorial-plum)]">Nuevo diagnostico</Link>
        </div>
      </footer>
    </main>
  )
}
