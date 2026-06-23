import type { Metadata } from 'next'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { studioServices } from '@/lib/studio-services'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios profesionales de Evelyn Patino dentro de Elara Nova: sitios web, landing pages, automatizaciones y Google Ads con medicion.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--studio-ink)] text-[var(--studio-paper)]">
      <section className="relative overflow-hidden px-5 pt-32 pb-20 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(200,162,74,0.15),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(91,95,232,0.16),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(247,242,234,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,242,234,0.7)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-[0.68rem] font-black tracking-[0.26em] text-[var(--studio-gold)] uppercase hover:text-[var(--studio-paper)]"
          >
            ← Volver a Elara
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="mb-4 text-[0.7rem] font-black tracking-[0.34em] text-[var(--studio-gold)] uppercase">
              Servicios
            </p>
            <h1 className="font-display text-[3rem] leading-[0.98] md:text-[5.5rem]">
              Sistemas digitales para vender con mas orden.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--studio-paper)]/70">
              Cada servicio puede funcionar solo, pero el valor real aparece cuando la web, la landing, la automatizacion y la medicion se conectan como una misma maquinaria.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {studioServices.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="group rounded-[12px] border border-[var(--studio-paper)]/10 bg-[var(--studio-paper)]/[0.045] p-6 transition-colors hover:border-[var(--studio-gold)]/45 hover:bg-[var(--studio-paper)]/[0.07]"
            >
              <p className="text-[0.66rem] font-black tracking-[0.28em] text-[var(--studio-gold)] uppercase">
                {service.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight">{service.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[var(--studio-paper)]/65">{service.summary}</p>
              <div className="mt-7 border-t border-[var(--studio-paper)]/10 pt-5">
                <p className="text-xs font-bold leading-6 text-[var(--studio-paper)]/80">{service.deliverable}</p>
                <p className="mt-4 text-[0.66rem] font-black tracking-[0.24em] text-[var(--studio-gold)] uppercase">
                  Ver detalle →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--studio-paper)] px-5 py-20 text-[var(--studio-text)] md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[0.68rem] font-black tracking-[0.34em] text-[var(--studio-indigo)] uppercase">
              Como elegir
            </p>
            <h2 className="font-display text-[2.45rem] leading-[1.02] md:text-[3.7rem]">
              Si no sabes por donde empezar, empezamos por diagnostico.
            </h2>
          </div>
          <div className="rounded-[12px] border border-[var(--studio-text)]/10 bg-white/60 p-6 shadow-[0_18px_45px_rgba(11,16,32,0.08)]">
            <p className="text-base leading-8 text-[var(--studio-text)]/70">
              Revisamos tu oferta, presencia actual, procesos manuales y objetivo comercial. De ahi sale una hoja de ruta concreta: que construir primero, que puede esperar y que no vale la pena pagar todavia.
            </p>
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'services_index_diagnostico' }}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[var(--studio-ink)] px-6 py-3 text-[0.76rem] font-black tracking-[0.22em] text-[var(--studio-paper)] uppercase"
            >
              Pedir diagnostico
            </TrackedLink>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--studio-paper)] px-5 pb-10 text-sm text-[var(--studio-text)]/55 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-4 border-t border-[var(--studio-text)]/10 pt-6">
          <Link href="/legal" className="hover:text-[var(--studio-indigo)]">Privacidad y terminos</Link>
          <Link href="/descubrimiento" className="hover:text-[var(--studio-indigo)]">Diagnostico</Link>
        </div>
      </footer>
    </main>
  )
}
