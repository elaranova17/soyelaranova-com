import type { Metadata } from 'next'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { StudioReveal, StudioRevealItem, StudioStagger } from '@/components/studio-reveal'
import { StudioFunnelStrip } from '@/components/studio-funnel-strip'
import { WebModelsGallery, WebVsLandingExplain } from '@/components/web-models-gallery'
import { studioServices } from '@/lib/studio-services'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Automatizaciones, sitios web, landing pages y Google Ads con medición. Pre-análisis gratis · sesión 25 CHF · packs cerrados.',
}

export default function ServicesPage() {
  return (
    <main className="studio-index">
      <section className="studio-index__hero">
        <StudioReveal>
          <p className="home-eyebrow studio-accent">
            <span aria-hidden="true" />
            Servicios · Elara Nova · desde 450 €
          </p>
          <h1 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide">
            <span className="type-lockup__impact">Sistemas</span>
            <em className="type-lockup__script">que venden solos</em>
          </h1>
        </StudioReveal>
        <StudioReveal delay={0.1}>
          <p className="studio-index__hero-lead">
            No vendo “páginas bonitas” sueltas. Conecto web, automatización y Ads para que un lead
            entre, se registre y vos sepas qué funcionó. Abajo: qué es cada cosa, en castellano
            claro, con modelos visuales.
          </p>
          <div className="studio-index__actions">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'services_index_hero' }}
              className="home-button home-button--gold"
            >
              Hacer mi pre-análisis
            </TrackedLink>
            <Link href="/portfolio" className="home-button home-button--quiet">
              Ver portfolio
            </Link>
          </div>
        </StudioReveal>
      </section>

      <StudioStagger className="studio-service-grid">
        {studioServices.map((service) => (
          <StudioRevealItem key={service.slug}>
            <Link href={`/servicios/${service.slug}`} className="studio-service-tile">
              <p className="home-eyebrow studio-accent">
                <span aria-hidden="true" />
                {service.eyebrow}
              </p>
              <h2 className="type-lockup type-lockup--glow-soft">
                <span className="type-lockup__impact">{service.lockupImpact}</span>
                <em className="type-lockup__script">{service.lockupScript}</em>
              </h2>
              <p className="text-sm leading-7 text-[var(--editorial-cacao)]">{service.whatIs}</p>
              <p className="studio-service-tile__meta">{service.deliverable}</p>
              <p className="studio-service-tile__cta">Ver detalle y packs →</p>
            </Link>
          </StudioRevealItem>
        ))}
      </StudioStagger>

      <WebVsLandingExplain />

      <WebModelsGallery
        context="all"
        titleImpact="Modelos"
        titleScript="de webs reales"
        note="Tocá un modelo: ves la estructura (como un tutorial) y el pack que le corresponde. Así sabés qué pedís antes de pagar."
      />

      <StudioFunnelStrip trackingLabel="services_index_funnel" dark />

      <footer className="px-5 py-8 text-sm text-[var(--editorial-cacao)] md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-5">
          <Link href="/legal" className="hover:text-[var(--editorial-plum)]">
            Privacidad y términos
          </Link>
          <Link href="/descubrimiento" className="hover:text-[var(--editorial-plum)]">
            Pre-análisis
          </Link>
        </div>
      </footer>
    </main>
  )
}
