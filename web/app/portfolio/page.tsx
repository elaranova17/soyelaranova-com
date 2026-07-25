import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { evelynPhotos } from '@/lib/evelyn-photos'

export const metadata: Metadata = {
  title: 'Portfolio · Evelyn Patiño',
  description:
    'Portfolio de Evelyn Patiño Laverde: automatizaciones, webs que venden, IA aplicada y consultoría técnica desde Suiza.',
  openGraph: {
    title: 'Portfolio · Evelyn Patiño',
    images: [{ url: evelynPhotos.portfolioHero }],
  },
}

const services = [
  {
    n: '01',
    title: 'Automatización',
    script: 'de procesos',
    text: 'Flujos, APIs y datos conectados. Menos trabajo manual, cero leads perdidos.',
  },
  {
    n: '02',
    title: 'Webs',
    script: 'que venden',
    text: 'Landings y sitios con mensaje claro, mobile-first y medibles.',
  },
  {
    n: '03',
    title: 'IA',
    script: 'aplicada',
    text: 'Clasificación, respuestas y reportes donde sí aporta — sin humo.',
  },
  {
    n: '04',
    title: 'Consultoría',
    script: 'técnica',
    text: 'Claridad de arquitectura y prioridades antes de invertir.',
  },
] as const

const process = [
  ['01', 'Descubrimiento', 'Pre-análisis + lectura de tu negocio/web.'],
  ['02', 'Diseño', 'Propuesta concreta: qué construir y en qué orden.'],
  ['03', 'Desarrollo', 'Implementación con plazos y entregables claros.'],
  ['04', 'Entrega', 'Puesta en marcha, medición y siguientes pasos.'],
] as const

export default function PortfolioPage() {
  return (
    <main className="studio-b2b">
      <section className="studio-b2b__hero">
        <div className="studio-b2b__hero-media">
          <Image
            src={evelynPhotos.portfolioHero}
            alt="Evelyn Patiño en estudio profesional"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className="object-cover object-[50%_20%]"
          />
          <div className="studio-b2b__hero-veil" aria-hidden />
        </div>
        <div className="studio-b2b__hero-copy">
          <p className="home-eyebrow">
            <span aria-hidden="true" />
            Portfolio · 2026
          </p>
          <h1 className="type-lockup type-lockup--glow-soft page-lockup">
            <span className="type-lockup__impact">Evelyn</span>
            <em className="type-lockup__script">Patiño Laverde</em>
          </h1>
          <p className="studio-b2b__lead">
            Ingeniera de software. Automatizo procesos, construyo webs que venden y mido lo que
            convierte — desde Suiza para ES y LATAM.
          </p>
          <div className="studio-b2b__actions">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'portfolio_preanalisis' }}
              className="home-button home-button--primary"
            >
              Hacer mi pre-análisis
            </TrackedLink>
            <a href="/cv" className="home-button home-button--quiet">
              Ver CV
            </a>
          </div>
        </div>
      </section>

      <section className="studio-b2b__section">
        <div className="studio-b2b__split">
          <figure className="studio-b2b__photo asset-photo">
            <Image
              src={evelynPhotos.portfolioAbout}
              alt="Evelyn Patiño — retrato editorial"
              fill
              sizes="(max-width: 900px) 92vw, 28rem"
              className="object-cover object-[50%_15%]"
            />
          </figure>
          <div>
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Sobre mí
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Paisa</span>
              <em className="type-lockup__script">en Suiza</em>
            </h2>
            <p className="studio-b2b__body">
              Seis años en software financiero (Sophos · Bancolombia): donde un detalle mal hecho
              cuesta dinero real. Hoy ayudo a negocios a vender con más orden — sin equipo fantasma
              detrás de la marca. Si te respondo, soy yo.
            </p>
            <ul className="studio-b2b__chips">
              <li>6 años banca / fintech</li>
              <li>Medellín · Lausana</li>
              <li>Automatización + web + Ads</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="studio-b2b__section studio-b2b__section--smoke">
        <p className="home-eyebrow">
          <span aria-hidden="true" />
          Servicios
        </p>
        <h2 className="type-lockup type-lockup--glow-soft page-lockup">
          <span className="type-lockup__impact">Lo que</span>
          <em className="type-lockup__script">construyo</em>
        </h2>
        <div className="studio-b2b__grid">
          {services.map((item) => (
            <article key={item.n} className="studio-b2b__card">
              <p className="studio-b2b__num">{item.n}</p>
              <h3 className="type-lockup type-lockup--glow-soft">
                <span className="type-lockup__impact">{item.title}</span>
                <em className="type-lockup__script">{item.script}</em>
              </h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <Link href="/servicios" className="studio-b2b__text-link">
          Ver paquetes y precios →
        </Link>
      </section>

      <section className="page-band-dark studio-b2b__band">
        <p className="home-eyebrow home-eyebrow--light">
          <span aria-hidden="true" />
          Proceso
        </p>
        <h2 className="type-lockup type-lockup--center type-lockup--glow page-lockup page-lockup--center">
          <span className="type-lockup__impact">Cómo</span>
          <em className="type-lockup__script">trabajo</em>
        </h2>
        <ol className="studio-b2b__process">
          {process.map(([n, t, d]) => (
            <li key={n}>
              <span>{n}</span>
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="studio-b2b__close">
        <p className="home-eyebrow">
          <span aria-hidden="true" />
          Siguiente paso
        </p>
        <h2 className="type-lockup type-lockup--glow-soft page-lockup">
          <span className="type-lockup__impact">¿Hablamos</span>
          <em className="type-lockup__script">de tu negocio?</em>
        </h2>
        <p className="studio-b2b__body">
          Pre-análisis gratis → lectura por email. Si querés profundizar: sesión 20 min · 25 CHF.
        </p>
        <div className="studio-b2b__actions">
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'portfolio_close' }}
            className="home-button home-button--gold"
          >
            Hacer mi pre-análisis
          </TrackedLink>
          <Link href="/linktree" className="home-button home-button--quiet">
            Todos los enlaces
          </Link>
        </div>
      </section>
    </main>
  )
}
