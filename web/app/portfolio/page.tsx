import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import {
  StudioReveal,
  StudioRevealItem,
  StudioStagger,
  StudioStickyCta,
} from '@/components/studio-reveal'
import {
  StudioCounter,
  StudioDashGraphic,
  StudioFunnelGraphic,
  StudioPipeline,
} from '@/components/studio-charts'
import { AutomationScene, WebScene, AdsScene } from '@/components/service-scenes'
import { evelynPhotos } from '@/lib/evelyn-photos'

export const metadata: Metadata = {
  title: 'Portfolio · Evelyn Patiño',
  description:
    'Portfolio comercial de Evelyn Patiño: automatizaciones, webs que venden y Google Ads con medición. Pre-análisis gratis · sesión 25 CHF.',
  openGraph: {
    title: 'Portfolio · Evelyn Patiño',
    images: [{ url: evelynPhotos.portfolioHero }],
  },
}

const pains = [
  {
    t: 'Leads que se pierden',
    d: 'Formularios que van a una bandeja, nadie responde a tiempo, el cliente se enfría.',
  },
  {
    t: 'Web que no vende',
    d: 'Se ve “bien”, pero no hay mensaje, CTA ni medición. Es un folleto caro.',
  },
  {
    t: 'Ads sin sistema',
    d: 'Gastas en clics y no sabes qué convirtió. El presupuesto se va sin feedback.',
  },
] as const

const offers = [
  {
    n: '01',
    title: 'Automatizaciones',
    script: 'que trabajan',
    price: 'Desde 450 €',
    result: 'Cero leads perdidos · horas recuperadas cada semana',
    includes: ['1–4 flujos', 'CRM / email / WhatsApp', 'Documentación + handoff'],
    href: '/lp/automatizaciones',
    Scene: AutomationScene,
  },
  {
    n: '02',
    title: 'Webs & landings',
    script: 'que convierten',
    price: 'Packs claros',
    result: 'Mensaje + mobile + tracking listos para campaña',
    includes: ['Estructura de venta', 'CTA medible', 'Página de gracias'],
    href: '/lp/paginas-web',
    Scene: WebScene,
  },
  {
    n: '03',
    title: 'Google Ads',
    script: 'con consecuencia',
    price: 'Con medición',
    result: 'Sabes qué anuncio paga y cuál se come el presupuesto',
    includes: ['Tracking', 'Landings alineadas', 'Optimización base'],
    href: '/lp/google-ads',
    Scene: AdsScene,
  },
] as const

const packs = [
  { name: 'Arranque', price: '450 €', note: 'Tu primera automatización' },
  { name: 'Pro', price: '1.400 €', note: 'Sistema de varios flujos' },
  { name: 'Sitio + Ads', price: '3.400 €', note: 'Web + captación' },
  { name: 'Sesión', price: '25 CHF', note: '20 min estratégicos' },
] as const

export default function PortfolioPage() {
  return (
    <main className="studio-b2b studio-b2b--live studio-b2b--commercial">
      <section className="studio-b2b__hero studio-b2b__hero--bleed">
        <div className="studio-b2b__hero-bg" aria-hidden>
          <Image
            src={evelynPhotos.portfolioHero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_34%]"
          />
          <span className="studio-b2b__hero-veil" />
          <span className="studio-b2b__hero-glow" />
        </div>
        <div className="studio-b2b__hero-copy studio-b2b__hero-copy--on-dark">
          <StudioReveal>
            <p className="home-eyebrow home-eyebrow--light studio-accent">
              <span aria-hidden="true" />
              Portfolio comercial · Elara Nova · 2026
            </p>
          </StudioReveal>
          <StudioReveal delay={0.08}>
            <h1 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
              <span className="type-lockup__impact">Menos a mano</span>
              <em className="type-lockup__script">más sistema</em>
            </h1>
          </StudioReveal>
          <StudioReveal delay={0.16}>
            <p className="studio-b2b__lead studio-b2b__lead--light">
              Automatizo el trabajo repetitivo y construyo la web que convierte visitas en clientes.
              Criterio de ingeniera de banca. Si te respondo, soy yo.
            </p>
          </StudioReveal>
          <StudioReveal delay={0.24}>
            <div className="studio-b2b__actions">
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'portfolio_hero' }}
                className="home-button home-button--gold"
              >
                Hacer mi pre-análisis gratis
              </TrackedLink>
              <Link href="/sesion-estrategica" className="home-button home-button--light">
                Sesión 25 CHF
              </Link>
              <Link href="/cv" className="home-button home-button--light">
                Ver CV
              </Link>
            </div>
          </StudioReveal>
        </div>
      </section>

      <section className="studio-metrics" aria-label="Números">
        <StudioCounter value={6} suffix="+" label="años en fintech / banca" />
        <StudioCounter value={24} suffix="/7" label="procesos que no duermen" />
        <StudioCounter value={25} suffix=" CHF" label="sesión estratégica" />
        <StudioCounter value={450} suffix=" €" label="arranque automatización" />
      </section>

      <section className="studio-b2b__section">
        <div className="studio-commercial-split">
          <StudioReveal>
            <p className="home-eyebrow studio-accent">
              <span aria-hidden="true" />
              El problema
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide">
              <span className="type-lockup__impact">Tu negocio</span>
              <em className="type-lockup__script">todavía a mano?</em>
            </h2>
            <div className="studio-pain-list">
              {pains.map((p) => (
                <article key={p.t}>
                  <h3 className="font-display">{p.t}</h3>
                  <p>{p.d}</p>
                </article>
              ))}
            </div>
          </StudioReveal>
          <StudioReveal delay={0.1}>
            <StudioDashGraphic />
            <p className="studio-graphic-caption">
              Así se ve un sistema medible: leads que entran, horas que vuelven, Ads con feedback.
            </p>
          </StudioReveal>
        </div>
      </section>

      <section className="page-band-dark studio-b2b__band">
        <StudioReveal>
          <p className="home-eyebrow home-eyebrow--light studio-accent">
            <span aria-hidden="true" />
            Cómo entra el dinero
          </p>
          <h2 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
            <span className="type-lockup__impact">Embudo</span>
            <em className="type-lockup__script">claro</em>
          </h2>
        </StudioReveal>
        <div className="studio-commercial-split studio-commercial-split--dark">
          <StudioReveal delay={0.08}>
            <StudioFunnelGraphic />
          </StudioReveal>
          <StudioReveal delay={0.12}>
            <p className="studio-b2b__lead studio-b2b__lead--light">
              No vendo “una call gratis larga”. El orden es didáctico y comercial:
            </p>
            <ol className="studio-funnel-copy">
              <li>
                <strong className="font-display">01 · Pre-análisis</strong>
                <span>Gratis · wizard · ves si tiene sentido</span>
              </li>
              <li>
                <strong className="font-display">02 · Lectura</strong>
                <span>Te llega por email con diagnóstico</span>
              </li>
              <li>
                <strong className="font-display">03 · Sesión</strong>
                <span>20 min · 25 CHF · propuesta concreta</span>
              </li>
              <li>
                <strong className="font-display">04 · Proyecto</strong>
                <span>Packs Arranque / Pro / Sitio+Ads</span>
              </li>
            </ol>
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'portfolio_funnel' }}
              className="home-button home-button--gold"
            >
              Empezar pre-análisis
            </TrackedLink>
          </StudioReveal>
        </div>
      </section>

      <section className="studio-b2b__section studio-b2b__section--smoke">
        <StudioReveal className="studio-b2b__section-head">
          <div>
            <p className="home-eyebrow studio-accent">
              <span aria-hidden="true" />
              Oferta
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Qué</span>
              <em className="type-lockup__script">construyo</em>
            </h2>
          </div>
          <p className="studio-b2b__section-note">
            Cada oferta tiene escena viva + resultado + precio ancla. Toca para ver el pack.
          </p>
        </StudioReveal>

        <div className="studio-offer-rows">
          {offers.map(({ Scene, ...item }) => (
            <StudioReveal key={item.n} className="studio-offer-row">
              <div className="studio-offer-row__visual">
                <Scene />
              </div>
              <div className="studio-offer-row__copy">
                <p className="studio-b2b__num font-display">{item.n}</p>
                <h3 className="type-lockup type-lockup--glow-soft">
                  <span className="type-lockup__impact">{item.title}</span>
                  <em className="type-lockup__script">{item.script}</em>
                </h3>
                <p className="studio-offer-row__price font-display">{item.price}</p>
                <p className="studio-offer-row__result">{item.result}</p>
                <ul className="studio-b2b__chips">
                  {item.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <Link href={item.href} className="studio-b2b__card-cta">
                  Ver oferta completa →
                </Link>
              </div>
            </StudioReveal>
          ))}
        </div>
      </section>

      <section className="studio-b2b__section">
        <StudioReveal>
          <p className="home-eyebrow studio-accent">
            <span aria-hidden="true" />
            Flujo típico
          </p>
          <h2 className="type-lockup type-lockup--glow-soft page-lockup">
            <span className="type-lockup__impact">Lead</span>
            <em className="type-lockup__script">→ cita</em>
          </h2>
        </StudioReveal>
        <StudioReveal delay={0.08}>
          <StudioPipeline />
          <p className="studio-graphic-caption">
            Formulario → CRM/hoja → WhatsApp/email → aviso a ti. Sin copiar datos a mano.
          </p>
        </StudioReveal>
      </section>

      <section className="page-band-dark studio-b2b__band">
        <StudioReveal>
          <p className="home-eyebrow home-eyebrow--light studio-accent">
            <span aria-hidden="true" />
            Precios ancla
          </p>
          <h2 className="type-lockup type-lockup--glow page-lockup">
            <span className="type-lockup__impact">Packs</span>
            <em className="type-lockup__script">cerrados</em>
          </h2>
        </StudioReveal>
        <StudioStagger className="studio-pack-grid">
          {packs.map((p) => (
            <StudioRevealItem key={p.name} className="studio-pack">
              <p className="studio-pack__name font-display">{p.name}</p>
              <p className="studio-pack__price font-display">{p.price}</p>
              <p className="studio-pack__note">{p.note}</p>
            </StudioRevealItem>
          ))}
        </StudioStagger>
        <StudioReveal delay={0.1}>
          <p className="studio-graphic-caption studio-graphic-caption--light">
            Precio único cerrado. No tarifa por hora: comprás resultado y tranquilidad.
          </p>
        </StudioReveal>
      </section>

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
            Pre-análisis gratis (2–4 min) → lectura por email. Si encaja: sesión 20 min · 25 CHF.
          </p>
          <div className="studio-b2b__actions studio-b2b__actions--center">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'portfolio_close' }}
              className="home-button home-button--gold"
            >
              Hacer mi pre-análisis
            </TrackedLink>
            <a href="https://wa.me/34613308585" className="home-button home-button--light">
              WhatsApp
            </a>
          </div>
        </StudioReveal>
      </section>

      <StudioStickyCta label="portfolio_sticky" />
    </main>
  )
}
