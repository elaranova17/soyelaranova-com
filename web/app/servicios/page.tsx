import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { StudioReveal, StudioRevealItem, StudioStagger } from '@/components/studio-reveal'
import { StudioFunnelStrip } from '@/components/studio-funnel-strip'
import { WebModelsGallery, WebVsLandingExplain } from '@/components/web-models-gallery'
import { studioServices } from '@/lib/studio-services'
import { evelynPhotos } from '@/lib/evelyn-photos'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Automatizaciones, sitios web, landing pages y Google Ads con medición. Pre-análisis gratis · sesión 25 CHF · packs cerrados.',
}

const PROCESS = [
  {
    n: '01',
    title: 'Entender',
    copy: 'Mapeo tu negocio, cuellos de botella y lo que sí vale automatizar.',
  },
  {
    n: '02',
    title: 'Diseñar',
    copy: 'Arquitectura clara: flujos, pantallas y mensajes que convierten.',
  },
  {
    n: '03',
    title: 'Automatizar',
    copy: 'Conecto tools, agentes y triggers para que el sistema corra solo.',
  },
  {
    n: '04',
    title: 'Entregar',
    copy: 'Lanzamos, medimos y te dejo documentado qué hace cada pieza.',
  },
  {
    n: '05',
    title: 'Evolucionar',
    copy: 'Iteramos con datos reales: menos fricción, más libertad.',
  },
] as const

export default function ServicesPage() {
  return (
    <main className="studio-index">
      <section className="scrap-hero">
        <div className="scrap-hero__copy">
          <StudioReveal>
            <p className="scrap-tag">Ingeniería · estrategia · diseño</p>
            <h1 className="scrap-hero__title">
              <span className="scrap-hero__impact">Servicios</span>
              <em className="scrap-hero__script">sistemas que trabajan por ti.</em>
            </h1>
          </StudioReveal>
          <StudioReveal delay={0.08}>
            <p className="scrap-hero__lead">
              No vendo páginas sueltas. Conecto web, automatización y Ads en un solo sistema: el lead
              entra, se registra solo y sabes qué anuncio lo trajo. Menos a mano, más libertad.
            </p>
            <div className="scrap-hero__actions">
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'services_index_hero' }}
                className="home-button home-button--primary"
              >
                Hablemos →
              </TrackedLink>
              <Link href="/portfolio" className="scrap-link-quiet">
                Ver portfolio
              </Link>
            </div>
          </StudioReveal>
        </div>

        <StudioReveal delay={0.14} className="scrap-hero__stage">
          <div className="scrap-collage" aria-hidden="true">
            <figure className="scrap-polaroid scrap-polaroid--hero">
              <span className="scrap-tape scrap-tape--tl" />
              <span className="scrap-tape scrap-tape--br" />
              <Image
                src={evelynPhotos.homeAbout}
                alt=""
                fill
                priority
                quality={88}
                sizes="(max-width: 900px) 90vw, 420px"
                className="scrap-polaroid__img"
              />
            </figure>

            <aside className="scrap-window scrap-window--workflow">
              <header className="scrap-window__bar">
                <span className="scrap-window__dots" />
                <span className="scrap-window__title">workflow.exe</span>
              </header>
              <ol className="scrap-window__list">
                <li>Mapear proceso</li>
                <li>Conectar tools</li>
                <li>Probar flujo</li>
                <li className="is-done">Deploy · 100%</li>
              </ol>
              <div className="scrap-window__bar-fill" />
            </aside>

            <aside className="scrap-sticky">
              <p className="font-hand scrap-sticky__note">menos a mano = más para ti</p>
            </aside>

            <aside className="scrap-notepad">
              <p className="scrap-notepad__label">checklist</p>
              <ul>
                <li>Lead capturado</li>
                <li>Respuesta automática</li>
                <li>Tracking on</li>
              </ul>
            </aside>
          </div>
        </StudioReveal>
      </section>

      <StudioStagger className="scrap-service-grid">
        {studioServices.map((service, i) => (
          <StudioRevealItem key={service.slug}>
            <Link href={`/servicios/${service.slug}`} className="scrap-service">
              <span className="scrap-service__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="scrap-service__title">{service.shortTitle}</h2>
              <p className="scrap-service__copy">{service.summary}</p>
              <ul className="scrap-service__bullets">
                {service.includes.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="scrap-service__cta">Saber más →</span>
            </Link>
          </StudioRevealItem>
        ))}
      </StudioStagger>

      <section className="scrap-process" aria-labelledby="scrap-process-title">
        <div className="scrap-process__intro">
          <p className="home-eyebrow">
            <span aria-hidden="true" />
            Método
          </p>
          <h2 id="scrap-process-title" className="scrap-process__title">
            Mi proceso
          </h2>
          <p className="scrap-process__lead">Cinco pasos. Sin teatro. Con entrega.</p>
        </div>
        <ol className="scrap-process__steps">
          {PROCESS.map((step) => (
            <li key={step.n} className="scrap-process__step">
              <span className="scrap-process__n">{step.n}</span>
              <strong>{step.title}</strong>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <WebVsLandingExplain />

      <WebModelsGallery
        context="all"
        titleImpact="Modelos"
        titleScript="de webs reales"
        note="Toca un modelo: ves la estructura por dentro y el pack que le corresponde. Así sabes qué pides antes de pagar."
      />

      <StudioFunnelStrip trackingLabel="services_index_funnel" dark />
    </main>
  )
}
