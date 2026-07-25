import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pre-análisis recibido',
  description:
    'Gracias por completar el pre-análisis con Evelyn Patiño. Próximo paso: lectura por email y sesión estratégica opcional de 25 CHF.',
}

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="bg-[var(--editorial-ivory)] px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="home-eyebrow justify-center">
            <span aria-hidden="true" />
            Pre-análisis recibido
          </p>
          <h1 className="mt-6 font-display text-[3.1rem] font-normal leading-[0.94] md:text-[5.6rem]">
            Gracias. Ya puedo preparar tu lectura.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            Voy a revisar lo que compartiste (negocio, presencia y fugas). Te escribo con un
            pre-análisis concreto. Si querés profundizar en vivo, el siguiente paso es la sesión
            estratégica de 20 min · 25 CHF.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            ['01', 'Lectura', 'Analizo tu contexto y te mando lo que veo + 2–3 movimientos.'],
            ['02', 'Sesión 25 CHF', 'Si querés, agendamos 20 min para verlo en vivo y afinar la ruta.'],
            ['03', 'Proyecto', 'Si hay fit, cotizamos Arranque / Pro / A medida con precio cerrado.'],
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
          <Link href="/sesion-estrategica" className="home-button home-button--primary">
            Pagar / agendar sesión 25 CHF
          </Link>
          <Link href="/" className="home-button home-button--quiet">
            Volver al inicio
          </Link>
        </div>
      </section>

      <footer className="px-5 py-8 text-sm text-[var(--editorial-cacao)] md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl justify-center gap-5">
          <Link href="/legal" className="hover:text-[var(--editorial-plum)]">
            Privacidad y terminos
          </Link>
          <Link href="/descubrimiento" className="hover:text-[var(--editorial-plum)]">
            Nuevo pre-análisis
          </Link>
        </div>
      </footer>
    </main>
  )
}
