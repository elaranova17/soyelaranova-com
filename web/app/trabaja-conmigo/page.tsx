import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { studioServices } from '@/lib/studio-services'

export const metadata: Metadata = {
  title: 'Trabaja conmigo',
  description: 'Servicios profesionales de Evelyn Patino: sitios web, automatizaciones, Google Ads e impulsamiento de redes.',
}

export default function TrabajaConmigoPage() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="px-5 pt-28 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-[0.68rem] font-black tracking-[0.26em] text-[var(--editorial-gold)] uppercase">
              Trabaja conmigo
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[3.2rem] leading-[0.94] md:text-[5.8rem]">
              Sistemas digitales para marcas que necesitan orden y presencia.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
              Sitios web, automatizaciones, Google Ads e impulsamiento de redes con una mezcla rara pero util: criterio visual, pensamiento tecnico y cuidado por el negocio real.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'trabaja_hero_diagnostico' }}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--editorial-cacao)] px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase"
              >
                Solicitar diagnostico
              </TrackedLink>
              <Link
                href="/#productos"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--editorial-plum)]/25 px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-plum)] uppercase"
              >
                Ver Elara
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)]">
            <Image
              src="/_assets/photos/evelyn_pro_hero.jpg"
              alt="Evelyn Patino"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 36rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(24,19,26,0.62)_100%)]" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--editorial-ivory)] px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.68rem] font-black tracking-[0.26em] text-[var(--editorial-gold)] uppercase">
            Servicios
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {studioServices.map((service) => (
              <article key={service.slug} className="rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-smoke)] p-6">
                <p className="text-[0.62rem] font-black tracking-[0.22em] text-[var(--editorial-gold)] uppercase">
                  {service.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl leading-none text-[var(--editorial-plum)]">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--editorial-cacao)]">{service.summary}</p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[var(--editorial-plum)]/25 px-4 text-[0.68rem] font-black tracking-[0.18em] text-[var(--editorial-plum)] uppercase"
                >
                  Ver detalle
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
