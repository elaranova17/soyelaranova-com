import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TrackedLink } from '@/components/tracked-link'
import { studioToLp } from '@/lib/lp-offers'
import { getStudioService, studioServices } from '@/lib/studio-services'

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return studioServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getStudioService(slug)

  if (!service) {
    return {
      title: 'Servicio no encontrado',
    }
  }

  return {
    title: service.shortTitle,
    description: service.summary,
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params
  const service = getStudioService(slug)

  if (!service) notFound()

  const lpMap = studioToLp[service.slug]
  const motherHref = lpMap?.mother ?? '/lp/automatizaciones'

  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="bg-[var(--editorial-ivory)] px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_24rem] lg:items-end">
          <div>
            <Link
              href="/servicios"
              className="text-[0.66rem] font-bold tracking-[0.24em] text-[var(--editorial-cacao)] uppercase hover:text-[var(--editorial-plum)]"
            >
              ← Servicios
            </Link>
            <p className="home-eyebrow mt-10">
              <span aria-hidden="true" />
              {service.eyebrow}
            </p>
            <h1 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide">
              <span className="type-lockup__impact">{service.lockupImpact}</span>
              <em className="type-lockup__script">{service.lockupScript}</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
              {service.promise}
            </p>
          </div>

          <aside className="rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-smoke)] p-6">
            <p className="text-[0.62rem] font-bold tracking-[0.24em] text-[var(--editorial-cacao)] uppercase">
              Entregable base
            </p>
            <p className="mt-4 text-base font-bold leading-7 text-[var(--editorial-ink)]/85">
              {service.deliverable}
            </p>
            <TrackedLink
              href={`/descubrimiento?servicio=${encodeURIComponent(service.shortTitle)}`}
              tracking={{
                event: 'cta_click',
                category: 'lead',
                label: 'service_detail_top',
                service: service.slug,
              }}
              className="home-button home-button--primary mt-6 w-full"
            >
              Hacer mi pre-análisis
            </TrackedLink>
            <Link
              href={motherHref}
              className="mt-3 block text-center text-[0.66rem] font-bold tracking-[0.16em] text-[var(--editorial-cacao)] uppercase hover:text-[var(--editorial-plum)]"
            >
              Ver landing de campaña →
            </Link>
          </aside>
        </div>
      </section>

      {lpMap ? (
        <section className="border-b border-[var(--editorial-stone)] bg-[var(--editorial-smoke)] px-5 py-10 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.62rem] font-bold tracking-[0.22em] text-[var(--editorial-cacao)] uppercase">
              Paquetes
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {lpMap.packs.map((pack) => (
                <Link
                  key={pack.href}
                  href={pack.href}
                  className="rounded-[14px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] px-5 py-4 transition-colors hover:border-[var(--editorial-gold)]"
                >
                  <p className="type-title type-title--plum text-[1.25rem]">{pack.label}</p>
                  <p className="mt-1 text-sm text-[var(--editorial-cacao)]">{pack.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <InfoBlock title="Ideal para" items={service.idealFor} />
          <InfoBlock title="Incluye" items={service.includes} />
          <InfoBlock title="Proceso" items={service.process} ordered />
        </div>
      </section>

      <section className="bg-[var(--editorial-ivory)] px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Preguntas
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Antes</span>
              <em className="type-lockup__script">de invertir</em>
            </h2>
          </div>
          <div className="grid gap-4">
            {service.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-smoke)] p-5"
              >
                <h3 className="type-title type-title--plum text-[clamp(1.15rem,1.8vw,1.45rem)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--editorial-cacao)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band-dark px-5 py-20 text-center md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="home-eyebrow home-eyebrow--light justify-center">
            <span aria-hidden="true" />
            Siguiente paso
          </p>
          <h2 className="type-lockup type-lockup--center type-lockup--glow page-lockup page-lockup--center">
            <span className="type-lockup__impact">Empezá</span>
            <em className="type-lockup__script">por el pre-análisis</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-lavender)]">
            Cuestionario didáctico gratis → te mando una lectura. Si querés profundizar: sesión
            estratégica 20 min · 25 CHF.
          </p>
          <TrackedLink
            href={`/descubrimiento?servicio=${encodeURIComponent(service.shortTitle)}`}
            tracking={{
              event: 'cta_click',
              category: 'lead',
              label: 'service_detail_bottom',
              service: service.slug,
            }}
            className="home-button home-button--gold mt-8"
          >
            Hacer mi pre-análisis
          </TrackedLink>
        </div>
      </section>

      <footer className="px-5 py-8 text-sm text-[var(--editorial-cacao)] md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-5">
          <Link href="/legal" className="hover:text-[var(--editorial-plum)]">Privacidad y terminos</Link>
          <Link href="/servicios" className="hover:text-[var(--editorial-plum)]">Todos los servicios</Link>
        </div>
      </footer>
    </main>
  )
}

function InfoBlock({
  title,
  items,
  ordered = false,
}: {
  title: string
  items: readonly string[]
  ordered?: boolean
}) {
  const List = ordered ? 'ol' : 'ul'

  return (
    <article className="rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] p-6">
      <h2 className="type-title type-title--plum type-title--lg">{title}</h2>
      <List className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--editorial-cacao)]">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--editorial-gold)]/60 text-[0.68rem] font-bold text-[var(--editorial-gold)]">
              {ordered ? index + 1 : '•'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </List>
    </article>
  )
}
