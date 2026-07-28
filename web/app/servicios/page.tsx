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
      <section className="studio-index__hero studio-index__hero--split">
        <div className="studio-index__hero-copy">
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
              No vendo “páginas bonitas” sueltas. Conecto web, automatización y Ads en un solo sistema:
              el lead entra, se registra solo y tú sabes qué anuncio lo trajo. Recuperas horas, dejas
              de perder oportunidades por un mensaje sin responder y sabes en qué vale la pena invertir.
              Abajo tienes qué es cada cosa, explicado claro y con modelos visuales.
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
        </div>

        <StudioReveal delay={0.2} className="studio-index__hero-visual">
          <aside className="system-flow" aria-label="Cómo funciona el sistema que vende solo">
            <p className="system-flow__eyebrow">El sistema, por dentro</p>
            <ol className="system-flow__steps">
              <li className="system-flow__step">
                <span className="system-flow__node">01</span>
                <div className="system-flow__body">
                  <strong>Anuncio con intención</strong>
                  <small>Google Ads trae a la persona correcta.</small>
                </div>
              </li>
              <li className="system-flow__step">
                <span className="system-flow__node">02</span>
                <div className="system-flow__body">
                  <strong>La web convierte</strong>
                  <small>Captura el lead, sin fricción.</small>
                </div>
              </li>
              <li className="system-flow__step">
                <span className="system-flow__node">03</span>
                <div className="system-flow__body">
                  <strong>Se registra solo</strong>
                  <small>La automatización responde al instante.</small>
                </div>
              </li>
              <li className="system-flow__step">
                <span className="system-flow__node">04</span>
                <div className="system-flow__body">
                  <strong>Y lo mides</strong>
                  <small>Sabes qué anuncio lo trajo.</small>
                </div>
              </li>
            </ol>
            <p className="system-flow__loop">
              <span aria-hidden="true">↻</span> Corre solo, 24/7
            </p>
          </aside>
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
        note="Toca un modelo: ves la estructura por dentro (como un tutorial) y el pack que le corresponde. Así sabes exactamente qué pides y qué recibes antes de pagar, sin sorpresas."
      />

      <StudioFunnelStrip trackingLabel="services_index_funnel" dark />

    </main>
  )
}
