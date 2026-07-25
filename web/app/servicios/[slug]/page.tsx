import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TrackedLink } from '@/components/tracked-link'
import { StudioReveal, StudioRevealItem, StudioStagger } from '@/components/studio-reveal'
import { StudioFunnelStrip } from '@/components/studio-funnel-strip'
import { WebModelsGallery, WebVsLandingExplain } from '@/components/web-models-gallery'
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
    description: service.whatIs,
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params
  const service = getStudioService(slug)

  if (!service) notFound()

  const lpMap = studioToLp[service.slug]
  const motherHref = lpMap?.mother ?? '/lp/automatizaciones'
  const showWebModels = slug === 'sitios-web' || slug === 'landing-pages'
  const modelsContext = slug === 'landing-pages' ? 'landing-pages' : 'sitios-web'

  return (
    <main className="studio-index">
      <section className="studio-index__hero">
        <StudioReveal>
          <Link
            href="/servicios"
            className="text-[0.66rem] font-bold tracking-[0.24em] text-[var(--editorial-cacao)] uppercase hover:text-[var(--editorial-plum)]"
          >
            ← Servicios
          </Link>
          <p className="home-eyebrow studio-accent mt-10">
            <span aria-hidden="true" />
            {service.eyebrow}
          </p>
          <h1 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide">
            <span className="type-lockup__impact">{service.lockupImpact}</span>
            <em className="type-lockup__script">{service.lockupScript}</em>
          </h1>
        </StudioReveal>
        <StudioReveal delay={0.08}>
          <p className="studio-index__hero-lead">{service.promise}</p>
          <div className="studio-index__actions">
            <TrackedLink
              href={`/descubrimiento?servicio=${encodeURIComponent(service.shortTitle)}`}
              tracking={{
                event: 'cta_click',
                category: 'lead',
                label: 'service_detail_hero',
                service: service.slug,
              }}
              className="home-button home-button--gold"
            >
              Hacer mi pre-análisis
            </TrackedLink>
            <Link href={motherHref} className="home-button home-button--quiet">
              Ver landing de campaña
            </Link>
          </div>
        </StudioReveal>
      </section>

      <section className="studio-whatis">
        <StudioReveal>
          <div className="studio-whatis__panel">
            <h2>¿Qué es esto, en simple?</h2>
            <p>{service.whatIs}</p>
          </div>
        </StudioReveal>
      </section>

      {lpMap ? (
        <section className="border-b border-[var(--editorial-stone)] px-5 py-10 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <StudioReveal>
              <p className="home-eyebrow studio-accent">
                <span aria-hidden="true" />
                Packs con precio ancla
              </p>
              <h2 className="type-lockup type-lockup--glow-soft page-lockup mt-3">
                <span className="type-lockup__impact">Elegí</span>
                <em className="type-lockup__script">nivel</em>
              </h2>
            </StudioReveal>
            <StudioStagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {lpMap.packs.map((pack) => (
                <StudioRevealItem key={pack.href}>
                  <Link
                    href={pack.href}
                    className="studio-service-tile"
                  >
                    <p className="type-title type-title--plum text-[1.35rem]">{pack.label}</p>
                    <p className="text-sm text-[var(--editorial-cacao)]">{pack.price}</p>
                    <p className="studio-service-tile__cta">Ver pack →</p>
                  </Link>
                </StudioRevealItem>
              ))}
            </StudioStagger>
          </div>
        </section>
      ) : null}

      {showWebModels ? (
        <>
          {slug === 'sitios-web' ? <WebVsLandingExplain /> : null}
          <WebModelsGallery
            context={modelsContext}
            titleImpact={slug === 'landing-pages' ? 'Landings' : 'Sitios'}
            titleScript="modelo a modelo"
            note="Cada bloque es un tutorial visual: secciones del embudo de la página + para quién sirve + pack."
          />
        </>
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
          <StudioReveal>
            <p className="home-eyebrow studio-accent">
              <span aria-hidden="true" />
              Preguntas
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Antes</span>
              <em className="type-lockup__script">de invertir</em>
            </h2>
          </StudioReveal>
          <StudioStagger className="grid gap-4">
            {service.faq.map((item) => (
              <StudioRevealItem key={item.question}>
                <article className="studio-whatis__panel">
                  <h3 className="type-title type-title--plum text-[clamp(1.15rem,1.8vw,1.45rem)]">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--editorial-cacao)]">{item.answer}</p>
                </article>
              </StudioRevealItem>
            ))}
          </StudioStagger>
        </div>
      </section>

      <StudioFunnelStrip trackingLabel={`service_${service.slug}_funnel`} dark />

      <footer className="px-5 py-8 text-sm text-[var(--editorial-cacao)] md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-5">
          <Link href="/legal" className="hover:text-[var(--editorial-plum)]">
            Privacidad y términos
          </Link>
          <Link href="/servicios" className="hover:text-[var(--editorial-plum)]">
            Todos los servicios
          </Link>
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
    <article className="studio-whatis__panel">
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
