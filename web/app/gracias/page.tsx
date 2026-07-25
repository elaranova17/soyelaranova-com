import type { Metadata } from 'next'
import Link from 'next/link'
import { ConversionBeacon } from '@/components/conversion-beacon'

export const metadata: Metadata = {
  title: 'Pre-análisis recibido',
  description:
    'Gracias por completar el pre-análisis con Evelyn Patiño. Próximo paso: lectura por email y sesión estratégica opcional de 25 CHF.',
}

export default function GraciasPage() {
  return (
    <main className="lp-page">
      <ConversionBeacon event="generate_lead" label="preanalisis_enviado" />
      <section className="lp-book-inside" style={{ paddingTop: '8.5rem', textAlign: 'center' }}>
        <div className="lp-section-inner" style={{ maxWidth: '48rem' }}>
          <p className="home-eyebrow" style={{ justifyContent: 'center' }}>
            <span aria-hidden="true" />
            Pre-análisis recibido
          </p>
          <h1 className="type-lockup type-lockup--center type-lockup--glow-soft page-lockup page-lockup--center">
            <span className="type-lockup__impact">Gracias</span>
            <em className="type-lockup__script">ya preparo tu lectura</em>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            Voy a revisar lo que compartiste (negocio, presencia y fugas). Te escribo con un
            pre-análisis concreto. Si querés profundizar en vivo, el siguiente paso es la sesión
            estratégica de 20 min · 25 CHF.
          </p>
        </div>
      </section>

      <section className="lp-steps">
        <div className="lp-section-inner">
          <ol className="lp-steps__list">
            {[
              ['01', 'Lectura', 'Analizo tu contexto y te mando lo que veo + 2–3 movimientos.'],
              [
                '02',
                'Sesión 25 CHF',
                'Si querés, agendamos 20 min para verlo en vivo y afinar la ruta.',
              ],
              [
                '03',
                'Proyecto',
                'Si hay fit, cotizamos Arranque / Pro / A medida con precio cerrado.',
              ],
            ].map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/sesion-estrategica" className="home-button home-button--primary">
              Pagar / agendar sesión 25 CHF
            </Link>
            <Link href="/" className="home-button home-button--quiet">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <footer className="lp-footer">
        <Link href="/legal">Privacidad y términos</Link>
        <span aria-hidden="true">·</span>
        <Link href="/descubrimiento">Nuevo pre-análisis</Link>
      </footer>
    </main>
  )
}
