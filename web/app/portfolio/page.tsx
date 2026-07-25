import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { evelynPhotos } from '@/lib/evelyn-photos'

export const metadata: Metadata = {
  title: 'Portfolio · Evelyn Patiño',
  description:
    'Portfolio de Evelyn Patiño Laverde: automatizaciones, webs que venden, IA aplicada y Google Ads. Criterio de banca, entregas reales desde Suiza.',
  openGraph: {
    title: 'Portfolio · Evelyn Patiño',
    images: [{ url: evelynPhotos.portfolioHero }],
  },
}

const proof = [
  { value: '6+', label: 'años en fintech' },
  { value: 'Sophos', label: 'Bancolombia' },
  { value: 'ES · LATAM', label: 'desde Suiza' },
  { value: '25 CHF', label: 'sesión estratégica' },
] as const

const services = [
  {
    n: '01',
    title: 'Automatización',
    script: 'de procesos',
    text: 'Formularios, CRM, email y WhatsApp conectados. El lead no se pierde y vos recuperás horas.',
    href: '/lp/automatizaciones',
  },
  {
    n: '02',
    title: 'Webs',
    script: 'que venden',
    text: 'Landings y sitios con mensaje claro, mobile-first y medibles — no un folleto que nadie trackea.',
    href: '/lp/paginas-web',
  },
  {
    n: '03',
    title: 'Google Ads',
    script: 'con medición',
    text: 'Campañas con tracking real: sabés qué convierte y dónde se va el presupuesto.',
    href: '/lp/google-ads',
  },
  {
    n: '04',
    title: 'IA',
    script: 'aplicada',
    text: 'Clasificación, respuestas y reportes donde sí aporta. Sin humo ni demos eternas.',
    href: '/servicios',
  },
] as const

const process = [
  ['01', 'Descubrimiento', 'Pre-análisis gratis: leemos tu negocio y tu embudo.'],
  ['02', 'Propuesta', 'Qué construir, en qué orden, con plazos y precio cerrado.'],
  ['03', 'Construcción', 'Implementación con entregables claros. Yo soy quien responde.'],
  ['04', 'Lanzamiento', 'Puesta en marcha, medición y siguientes pasos.'],
] as const

export default function PortfolioPage() {
  return (
    <main className="studio-b2b">
      <section className="studio-b2b__hero studio-b2b__hero--bleed">
        <div className="studio-b2b__hero-bg" aria-hidden>
          <Image
            src={evelynPhotos.portfolioHero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_22%]"
          />
          <span className="studio-b2b__hero-veil" />
          <span className="studio-b2b__hero-glow" />
        </div>
        <div className="studio-b2b__hero-copy studio-b2b__hero-copy--on-dark">
          <p className="home-eyebrow home-eyebrow--light">
            <span aria-hidden="true" />
            Portfolio · trabajo real · 2026
          </p>
          <h1 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
            <span className="type-lockup__impact">Construyo</span>
            <em className="type-lockup__script">lo que vende</em>
          </h1>
          <p className="studio-b2b__lead studio-b2b__lead--light">
            Soy Evelyn — ingeniera con criterio de banca. Automatizo procesos, armo webs que
            convierten y mido Ads. Sin equipo fantasma: si te respondo, soy yo.
          </p>
          <div className="studio-b2b__actions">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'portfolio_hero_preanalisis' }}
              className="home-button home-button--gold"
            >
              Hacer mi pre-análisis
            </TrackedLink>
            <Link href="/cv" className="home-button home-button--light">
              Ver CV
            </Link>
          </div>
        </div>
      </section>

      <section className="studio-b2b__proof" aria-label="Pruebas rápidas">
        {proof.map((item) => (
          <div key={item.label} className="studio-b2b__proof-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="studio-b2b__section">
        <div className="studio-b2b__split">
          <figure className="studio-b2b__photo asset-photo">
            <Image
              src={evelynPhotos.portfolioAbout}
              alt="Evelyn Patiño — bio editorial"
              fill
              sizes="(max-width: 900px) 92vw, 28rem"
              className="object-cover object-[50%_15%]"
            />
          </figure>
          <div>
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Por qué yo
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Criterio</span>
              <em className="type-lockup__script">de banca</em>
            </h2>
            <p className="studio-b2b__body">
              Seis años en software financiero (Sophos · Bancolombia): donde un detalle mal hecho
              cuesta dinero real. Hoy aplico esa misma disciplina a negocios que quieren vender con
              más orden — menos trabajo a mano, más sistema.
            </p>
            <p className="studio-b2b__pitch">
              Pienso como diseñadora. Construyo como ingeniera.
            </p>
            <ul className="studio-b2b__chips">
              <li>6 años fintech</li>
              <li>Medellín · Lausana</li>
              <li>Automatización + web + Ads</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="studio-b2b__section studio-b2b__section--smoke">
        <div className="studio-b2b__section-head">
          <div>
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Qué ofrezco
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Servicios</span>
              <em className="type-lockup__script">con resultado</em>
            </h2>
          </div>
          <p className="studio-b2b__section-note">
            Packs claros · precios cerrados · entrega con plazos. Empezamos por el pre-análisis
            gratis.
          </p>
        </div>
        <div className="studio-b2b__grid">
          {services.map((item) => (
            <Link key={item.n} href={item.href} className="studio-b2b__card studio-b2b__card--lift">
              <p className="studio-b2b__num">{item.n}</p>
              <h3 className="type-lockup type-lockup--glow-soft">
                <span className="type-lockup__impact">{item.title}</span>
                <em className="type-lockup__script">{item.script}</em>
              </h3>
              <p>{item.text}</p>
              <span className="studio-b2b__card-cta">Ver oferta →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-band-dark studio-b2b__band studio-b2b__case">
        <div className="studio-b2b__case-inner">
          <p className="home-eyebrow home-eyebrow--light">
            <span aria-hidden="true" />
            Caso real
          </p>
          <h2 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
            <span className="type-lockup__impact">Val-Débarras</span>
            <em className="type-lockup__script">en producción</em>
          </h2>
          <p className="studio-b2b__lead studio-b2b__lead--light">
            Empresa suiza de vaciado de viviendas. Landings por cantón + formularios conectados +
            Google Ads capturando solicitudes de presupuesto. Sitio vivo, campañas corriendo —
            eso es lo que entrego.
          </p>
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'portfolio_case_preanalisis' }}
            className="home-button home-button--gold"
          >
            Quiero algo así para mi negocio
          </TrackedLink>
        </div>
      </section>

      <section className="studio-b2b__section">
        <p className="home-eyebrow">
          <span aria-hidden="true" />
          Método
        </p>
        <h2 className="type-lockup type-lockup--glow-soft page-lockup">
          <span className="type-lockup__impact">Cómo</span>
          <em className="type-lockup__script">trabajamos</em>
        </h2>
        <ol className="studio-b2b__process studio-b2b__process--light">
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

      <section className="studio-b2b__offer">
        <div className="studio-b2b__offer-glow" aria-hidden />
        <p className="home-eyebrow home-eyebrow--light">
          <span aria-hidden="true" />
          Empezá hoy
        </p>
        <h2 className="type-lockup type-lockup--center type-lockup--glow page-lockup page-lockup--center">
          <span className="type-lockup__impact">Tu negocio</span>
          <em className="type-lockup__script">todavía a mano?</em>
        </h2>
        <p className="studio-b2b__offer-copy">
          Pre-análisis didáctico gratis → lectura por email. Si querés profundizar: sesión 20 min ·
          25 CHF.
        </p>
        <div className="studio-b2b__actions studio-b2b__actions--center">
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'portfolio_close' }}
            className="home-button home-button--gold"
          >
            Hacer mi pre-análisis
          </TrackedLink>
          <Link href="/sesion-estrategica" className="home-button home-button--light">
            Sesión 25 CHF
          </Link>
        </div>
      </section>
    </main>
  )
}
