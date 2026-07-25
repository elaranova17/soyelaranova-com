import type { Metadata } from 'next'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { studioServices } from '@/lib/studio-services'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios del estudio Elara Nova por Evelyn Patino: automatizaciones, landing pages y sitios web que venden, y Google Ads con medicion.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="bg-[var(--editorial-ivory)] px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Servicios · desde 450 €
            </p>
            <h1 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide">
              <span className="type-lockup__impact">Sistemas</span>
              <em className="type-lockup__script">con más orden</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
              Cada servicio puede funcionar solo, pero el valor real aparece cuando la web, la
              landing, la automatizacion y la medicion se conectan como una misma maquinaria.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {studioServices.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="group rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] p-6 transition-colors hover:border-[var(--editorial-gold)]"
            >
              <p className="text-[0.62rem] font-bold tracking-[0.22em] text-[var(--editorial-cacao)] uppercase">
                {service.eyebrow}
              </p>
              <h2 className="type-lockup type-lockup--glow-soft mt-4 text-[clamp(2rem,3.4vw,2.85rem)]">
                <span className="type-lockup__impact">{service.lockupImpact}</span>
                <em className="type-lockup__script">{service.lockupScript}</em>
              </h2>
              <p className="mt-5 text-sm leading-7 text-[var(--editorial-cacao)]">{service.summary}</p>
              <div className="mt-7 border-t border-[var(--editorial-stone)] pt-5">
                <p className="text-xs font-bold leading-6 text-[var(--editorial-ink)]/80">
                  {service.deliverable}
                </p>
                <p className="mt-4 text-[0.66rem] font-bold tracking-[0.2em] text-[var(--editorial-gold)] uppercase group-hover:text-[var(--editorial-plum)]">
                  Ver detalle →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-band-dark px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="home-eyebrow home-eyebrow--light">
              <span aria-hidden="true" />
              Como elegir
            </p>
            <h2 className="type-lockup type-lockup--glow page-lockup">
              <span className="type-lockup__impact">Empezá</span>
              <em className="type-lockup__script">por el pre-análisis</em>
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-8 text-[var(--editorial-lavender)]">
              Revisamos tu oferta, presencia actual, procesos manuales y objetivo comercial. De ahi
              sale una hoja de ruta concreta: que construir primero, que puede esperar y que no vale
              la pena pagar todavia.
            </p>
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'services_index_preanalisis' }}
              className="home-button home-button--gold mt-8"
            >
              Hacer mi pre-análisis
            </TrackedLink>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8 text-sm text-[var(--editorial-cacao)] md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-5">
          <Link href="/legal" className="hover:text-[var(--editorial-plum)]">Privacidad y terminos</Link>
          <Link href="/descubrimiento" className="hover:text-[var(--editorial-plum)]">Pre-análisis</Link>
        </div>
      </footer>
    </main>
  )
}
