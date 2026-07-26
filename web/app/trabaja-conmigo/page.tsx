import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { StudioReveal, StudioRevealItem, StudioStagger } from '@/components/studio-reveal'
import { StudioFunnelStrip } from '@/components/studio-funnel-strip'
import { evelynPhotos } from '@/lib/evelyn-photos'
import { studioServices } from '@/lib/studio-services'

export const metadata: Metadata = {
  title: 'Trabaja conmigo',
  description:
    'Evelyn Patiño — ingeniera (Sophos · Bancolombia). Automatizaciones, webs que venden y Google Ads. Pre-análisis gratis · sesión 25 CHF.',
}

export default function TrabajaConmigoPage() {
  return (
    <main className="studio-b2b studio-b2b--live studio-b2b--commercial">
      <section className="studio-b2b__hero studio-b2b__hero--bleed">
        <div className="studio-b2b__hero-bg" aria-hidden>
          <Image
            src={evelynPhotos.trabajaConmigo}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[55%_18%]"
          />
          <span className="studio-b2b__hero-veil" />
          <span className="studio-b2b__hero-glow" />
        </div>
        <div className="studio-b2b__hero-copy studio-b2b__hero-copy--on-dark">
          <StudioReveal>
            <p className="home-eyebrow home-eyebrow--light studio-accent">
              <span aria-hidden="true" />
              Evelyn Patiño · Elara Nova · Europa
            </p>
          </StudioReveal>
          <StudioReveal delay={0.08}>
            <h1 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
              <span className="type-lockup__impact">Ingeniera</span>
              <em className="type-lockup__script">con mirada comercial</em>
            </h1>
          </StudioReveal>
          <StudioReveal delay={0.16}>
            <p className="studio-b2b__lead studio-b2b__lead--light">
              6 años en software financiero. Hoy diseño sistemas que capturan clientes: web,
              automatización y Ads medibles. Si te respondo, soy yo.
            </p>
          </StudioReveal>
          <StudioReveal delay={0.24}>
            <div className="studio-b2b__actions">
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'trabaja_hero' }}
                className="home-button home-button--gold"
              >
                Hacer mi pre-análisis
              </TrackedLink>
              <Link href="/portfolio" className="home-button home-button--light">
                Portfolio
              </Link>
              <Link href="/cv" className="home-button home-button--light">
                CV
              </Link>
            </div>
          </StudioReveal>
        </div>
      </section>

      <section className="studio-b2b__section">
        <div className="studio-commercial-split">
          <StudioReveal>
            <p className="home-eyebrow studio-accent">
              <span aria-hidden="true" />
              Por qué conmigo
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide">
              <span className="type-lockup__impact">Criterio</span>
              <em className="type-lockup__script">de banca</em>
            </h2>
            <p className="studio-b2b__body">
              En Sophos / Bancolombia el error costaba dinero real. Traigo esa disciplina a tu
              embudo: datos que cuadran, procesos que no se caen, páginas con un solo trabajo —
              convertir.
            </p>
            <p className="studio-b2b__pitch font-serif">
              Pienso como diseñadora. Construyo como ingeniera.
            </p>
          </StudioReveal>
          <StudioReveal delay={0.1}>
            <ul className="studio-pain-list">
              <li>
                <article>
                  <h3 className="font-display">Llego con tu diagnóstico</h3>
                  <p>Reviso tu pre-análisis yo misma y llego a la charla con un diagnóstico previo. No pierdes el rato descubriendo tu negocio.</p>
                </article>
              </li>
              <li>
                <article>
                  <h3 className="font-display">Precio cerrado</h3>
                  <p>Packs Arranque / Pro / Sitio+Ads. Sabes qué compras.</p>
                </article>
              </li>
              <li>
                <article>
                  <h3 className="font-display">Explico en simple</h3>
                  <p>Si no entiendes “landing” o “tracking”, te lo dibujo con modelos.</p>
                </article>
              </li>
            </ul>
          </StudioReveal>
        </div>
      </section>

      <section className="studio-b2b__section studio-b2b__section--smoke">
        <StudioReveal className="studio-b2b__section-head">
          <div>
            <p className="home-eyebrow studio-accent">
              <span aria-hidden="true" />
              Servicios
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Qué</span>
              <em className="type-lockup__script">puedo construir</em>
            </h2>
          </div>
          <p className="studio-b2b__section-note">
            Cada servicio se explica en castellano claro. Empieza por el que más te duele hoy.
          </p>
        </StudioReveal>
        <StudioStagger className="studio-service-grid studio-service-grid--flush">
          {studioServices.map((service) => (
            <StudioRevealItem key={service.slug}>
              <Link href={`/servicios/${service.slug}`} className="studio-service-tile">
                <p className="home-eyebrow studio-accent">
                  <span aria-hidden="true" />
                  {service.eyebrow}
                </p>
                <h3 className="type-lockup type-lockup--glow-soft">
                  <span className="type-lockup__impact">{service.lockupImpact}</span>
                  <em className="type-lockup__script">{service.lockupScript}</em>
                </h3>
                <p className="text-sm leading-7 text-[var(--editorial-cacao)]">{service.whatIs}</p>
                <p className="studio-service-tile__cta">Ver detalle →</p>
              </Link>
            </StudioRevealItem>
          ))}
        </StudioStagger>
      </section>

      <StudioFunnelStrip trackingLabel="trabaja_funnel" dark />

      <section className="studio-b2b__offer">
        <div className="studio-b2b__offer-glow" aria-hidden />
        <StudioReveal>
          <p className="home-eyebrow home-eyebrow--light studio-accent">
            <span aria-hidden="true" />
            Siguiente paso
          </p>
          <h2 className="type-lockup type-lockup--center type-lockup--glow page-lockup page-lockup--center">
            <span className="type-lockup__impact">Empieza</span>
            <em className="type-lockup__script">sin compromiso</em>
          </h2>
        </StudioReveal>
        <StudioReveal delay={0.08}>
          <p className="studio-b2b__offer-copy">
            Pre-análisis gratis (2–4 min). Si encaja: sesión 20 min · 25 CHF con mini-ruta.
          </p>
          <div className="studio-b2b__actions studio-b2b__actions--center">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'trabaja_close' }}
              className="home-button home-button--gold"
            >
              Hacer mi pre-análisis
            </TrackedLink>
            <Link href="/servicios" className="home-button home-button--light">
              Ver servicios
            </Link>
          </div>
        </StudioReveal>
      </section>
    </main>
  )
}
