import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import {
  CopyEmailButton,
  StudioReveal,
  StudioRevealItem,
  StudioStagger,
  StudioStickyCta,
} from '@/components/studio-reveal'
import {
  StudioCounter,
  StudioFunnelGraphic,
  StudioSkillBars,
} from '@/components/studio-charts'
import { evelynPhotos } from '@/lib/evelyn-photos'

export const metadata: Metadata = {
  title: 'CV · Evelyn Patiño',
  description:
    'CV comercial de Evelyn Patiño Laverde — ingeniera (Sophos · Bancolombia), automatización, webs y Ads desde Suiza.',
  openGraph: {
    title: 'CV · Evelyn Patiño',
    images: [{ url: evelynPhotos.cvHero }],
  },
}

const skills = [
  { name: 'Angular / TypeScript', level: 92 },
  { name: 'Java / .NET', level: 88 },
  { name: 'Next.js / Webs', level: 90 },
  { name: 'Automatización n8n/Make', level: 86 },
  { name: 'SQL / datos', level: 84 },
  { name: 'Google Ads + medición', level: 80 },
] as const

const experience = [
  {
    period: 'May 2019 — Oct 2025',
    role: 'Ingeniero Experto II',
    company: 'Sophos Solutions · cliente Bancolombia',
    text: 'Soluciones para banca core e integraciones. Full-stack Angular + Java/.NET, UAT, producción 24/7 y liderazgo de squads bajo Scrum.',
    bullets: [
      'Entrega en sistemas donde el error cuesta dinero real',
      'Integraciones, calidad y soporte de producción',
      'Coordinación de squads y priorización bajo presión',
    ],
    wins: ['Core bancario', 'Full-stack', 'Scrum', '24/7'],
  },
  {
    period: 'Oct 2024 — May 2025',
    role: 'Analista Software I',
    company: 'Bancolombia',
    text: 'Análisis y desarrollo en entorno bancario: requisitos, calidad y soporte de sistemas críticos.',
    bullets: [
      'Traducción de negocio → requisitos técnicos',
      'Calidad y validación antes de producción',
      'Soporte a procesos que no pueden fallar',
    ],
    wins: ['Requisitos', 'Calidad', 'Banca'],
  },
] as const

const deliverables = [
  {
    t: 'Automatizaciones',
    d: 'Flujos formulario → CRM → WhatsApp/email. Desde 450 €.',
    href: '/lp/automatizaciones',
  },
  {
    t: 'Webs / landings',
    d: 'Estructura de venta, mobile-first, CTA medible.',
    href: '/lp/paginas-web',
  },
  {
    t: 'Google Ads',
    d: 'Campañas con tracking y landings alineadas.',
    href: '/lp/google-ads',
  },
  {
    t: 'Sesión 25 CHF',
    d: '20 min para cerrar alcance y precio.',
    href: '/sesion-estrategica',
  },
] as const

export default function CvPage() {
  return (
    <main className="studio-b2b studio-b2b--live studio-b2b--commercial">
      <section className="studio-b2b__hero studio-b2b__hero--bleed">
        <div className="studio-b2b__hero-bg" aria-hidden>
          <Image
            src={evelynPhotos.cvHero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_18%]"
          />
          <span className="studio-b2b__hero-veil" />
          <span className="studio-b2b__hero-glow" />
        </div>
        <div className="studio-b2b__hero-copy studio-b2b__hero-copy--on-dark">
          <StudioReveal>
            <p className="home-eyebrow home-eyebrow--light studio-accent">
              <span aria-hidden="true" />
              CV · Evelyn Patiño Laverde · Lausana
            </p>
          </StudioReveal>
          <StudioReveal delay={0.08}>
            <h1 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
              <span className="type-lockup__impact">Ingeniera</span>
              <em className="type-lockup__script">que vende sistemas</em>
            </h1>
          </StudioReveal>
          <StudioReveal delay={0.16}>
            <p className="studio-b2b__lead studio-b2b__lead--light">
              6 años en software financiero (Sophos · Bancolombia). Hoy aplico esa disciplina a
              automatizaciones, webs que convierten y Ads medibles para negocios reales.
            </p>
          </StudioReveal>
          <StudioReveal delay={0.24}>
            <div className="studio-b2b__actions">
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'cv_hero' }}
                className="home-button home-button--gold"
              >
                Pre-análisis gratis
              </TrackedLink>
              <Link href="/portfolio" className="home-button home-button--light">
                Portfolio
              </Link>
              <a href="mailto:evelynpatildr@gmail.com" className="home-button home-button--light">
                Email
              </a>
            </div>
          </StudioReveal>
        </div>
      </section>

      <section className="studio-metrics" aria-label="Resumen CV">
        <StudioCounter value={6} suffix="+" label="años software / banca" />
        <StudioCounter value={3} label="idiomas ES · EN · FR" />
        <StudioCounter value={8} label="stack core en producción" />
        <StudioCounter value={25} suffix=" CHF" label="sesión de entrada" />
      </section>

      <section className="studio-b2b__section">
        <div className="studio-commercial-split">
          <StudioReveal>
            <figure className="studio-b2b__photo asset-photo">
              <Image
                src={evelynPhotos.cvAbout}
                alt="Evelyn Patiño"
                fill
                sizes="(max-width: 900px) 92vw, 28rem"
                className="object-cover object-[50%_12%]"
              />
            </figure>
          </StudioReveal>
          <div>
            <StudioReveal>
              <p className="home-eyebrow studio-accent">
                <span aria-hidden="true" />
                Perfil comercial
              </p>
              <h2 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide">
                <span className="type-lockup__impact">De la banca</span>
                <em className="type-lockup__script">a tu embudo</em>
              </h2>
            </StudioReveal>
            <StudioReveal delay={0.08}>
              <p className="studio-b2b__body">
                Estudié ingeniería mientras trabajaba. En banca aprendí que el proceso tiene que
                cuadrar: datos, calidad, producción. Eso es lo que vendo hoy — no “una web bonita”,
                sino un sistema que captura y mide.
              </p>
              <p className="studio-b2b__pitch font-serif">
                Pienso como diseñadora. Construyo como ingeniera.
              </p>
              <dl className="studio-b2b__contact studio-b2b__contact--compact">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:evelynpatildr@gmail.com">evelynpatildr@gmail.com</a>
                  </dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a href="https://wa.me/34613308585">+34 613 30 85 85</a>
                  </dd>
                </div>
                <div>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a
                      href="https://www.linkedin.com/in/evelyn-patino-laverde/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /in/evelyn-patino-laverde
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Base</dt>
                  <dd>Lausana · Suiza · ES / LATAM</dd>
                </div>
              </dl>
              <div className="studio-b2b__contact-tools">
                <CopyEmailButton />
                <a href="https://wa.me/34613308585" className="studio-copy-btn studio-copy-btn--ghost">
                  WhatsApp
                </a>
              </div>
            </StudioReveal>
          </div>
        </div>
      </section>

      <section className="studio-b2b__section studio-b2b__section--smoke">
        <StudioReveal className="studio-b2b__section-head">
          <div>
            <p className="home-eyebrow studio-accent">
              <span aria-hidden="true" />
              Dominio
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Skills</span>
              <em className="type-lockup__script">en gráfico</em>
            </h2>
          </div>
          <p className="studio-b2b__section-note">
            Niveles relativos a mi trabajo real en producción (banca + freelancing).
          </p>
        </StudioReveal>
        <StudioReveal delay={0.08}>
          <StudioSkillBars items={skills} />
        </StudioReveal>
      </section>

      <section className="page-band-dark studio-b2b__band">
        <StudioReveal>
          <p className="home-eyebrow home-eyebrow--light studio-accent">
            <span aria-hidden="true" />
            Trayectoria
          </p>
          <h2 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
            <span className="type-lockup__impact">Experiencia</span>
            <em className="type-lockup__script">con detalle</em>
          </h2>
        </StudioReveal>
        <StudioStagger className="studio-b2b__timeline">
          {experience.map((job) => (
            <StudioRevealItem key={job.role + job.period} as="article" className="studio-b2b__timeline-card">
              <p className="studio-b2b__period">{job.period}</p>
              <h3 className="font-display">{job.role}</h3>
              <p className="studio-b2b__company font-serif">{job.company}</p>
              <p>{job.text}</p>
              <ul className="studio-exp-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="studio-b2b__chips studio-b2b__chips--on-dark">
                {job.wins.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </StudioRevealItem>
          ))}
        </StudioStagger>
      </section>

      <section className="studio-b2b__section">
        <div className="studio-commercial-split">
          <StudioReveal>
            <p className="home-eyebrow studio-accent">
              <span aria-hidden="true" />
              Cómo trabajo con clientes
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Embudo</span>
              <em className="type-lockup__script">de entrada</em>
            </h2>
            <p className="studio-b2b__body">
              El CV no es solo historial: es la puerta al mismo embudo comercial del estudio.
            </p>
            <ol className="studio-funnel-copy studio-funnel-copy--light">
              <li>
                <strong className="font-display">Pre-análisis gratis</strong>
                <span>Vemos si hay fit</span>
              </li>
              <li>
                <strong className="font-display">Sesión 25 CHF</strong>
                <span>Alcance y precio cerrado</span>
              </li>
              <li>
                <strong className="font-display">Proyecto</strong>
                <span>Entrega con plazos</span>
              </li>
            </ol>
          </StudioReveal>
          <StudioReveal delay={0.1}>
            <div className="studio-funnel-panel">
              <StudioFunnelGraphic />
            </div>
          </StudioReveal>
        </div>
      </section>

      <section className="studio-b2b__section studio-b2b__section--smoke">
        <StudioReveal>
          <p className="home-eyebrow studio-accent">
            <span aria-hidden="true" />
            Qué podés contratar
          </p>
          <h2 className="type-lockup type-lockup--glow-soft page-lockup">
            <span className="type-lockup__impact">Entregables</span>
            <em className="type-lockup__script">hoy</em>
          </h2>
        </StudioReveal>
        <StudioStagger className="studio-deliver-grid">
          {deliverables.map((d) => (
            <StudioRevealItem key={d.t}>
              <Link href={d.href} className="studio-deliver">
                <h3 className="font-display">{d.t}</h3>
                <p>{d.d}</p>
                <span className="studio-b2b__card-cta">Ver →</span>
              </Link>
            </StudioRevealItem>
          ))}
        </StudioStagger>
      </section>

      <section className="studio-b2b__offer">
        <div className="studio-b2b__offer-glow" aria-hidden />
        <StudioReveal>
          <p className="home-eyebrow home-eyebrow--light studio-accent">
            <span aria-hidden="true" />
            Siguiente paso
          </p>
          <h2 className="type-lockup type-lockup--center type-lockup--glow page-lockup page-lockup--center">
            <span className="type-lockup__impact">Hablemos</span>
            <em className="type-lockup__script">de tu sistema</em>
          </h2>
        </StudioReveal>
        <StudioReveal delay={0.08}>
          <p className="studio-b2b__offer-copy">
            Si el CV te cierra: empezá por el pre-análisis gratis. Si ya sabés lo que necesitás,
            agendá la sesión de 25 CHF.
          </p>
          <div className="studio-b2b__actions studio-b2b__actions--center">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'cv_close' }}
              className="home-button home-button--gold"
            >
              Pre-análisis gratis
            </TrackedLink>
            <Link href="/portfolio" className="home-button home-button--light">
              Ver portfolio
            </Link>
          </div>
        </StudioReveal>
      </section>

      <StudioStickyCta label="cv_sticky" />
    </main>
  )
}
