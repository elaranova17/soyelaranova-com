import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { evelynPhotos } from '@/lib/evelyn-photos'

export const metadata: Metadata = {
  title: 'CV · Evelyn Patiño',
  description:
    'Curriculum de Evelyn Patiño Laverde — ingeniera de software, automatización y datos. Sophos · Bancolombia · freelance desde Suiza.',
  openGraph: {
    title: 'CV · Evelyn Patiño',
    images: [{ url: evelynPhotos.cvHero }],
  },
}

const proof = [
  { value: '6+', label: 'años software' },
  { value: 'Banca', label: 'core & UAT' },
  { value: 'Full-stack', label: 'Angular · Java · .NET' },
  { value: 'Lausana', label: 'ES · EN · FR' },
] as const

const experience = [
  {
    period: 'May 2019 — Oct 2025',
    role: 'Ingeniero Experto II',
    company: 'Sophos Solutions · cliente Bancolombia',
    text: 'Soluciones para banca core e integraciones. Full-stack Angular + Java/.NET, UAT, producción 24/7 y liderazgo de squads bajo Scrum. Donde el error no es una opción.',
    wins: ['Sistemas críticos', 'Scrum / entrega', 'Producción 24/7'],
  },
  {
    period: 'Oct 2024 — May 2025',
    role: 'Analista Software I',
    company: 'Bancolombia',
    text: 'Análisis y desarrollo en entorno bancario: requisitos, calidad y soporte de sistemas que mueven dinero real.',
    wins: ['Requisitos', 'Calidad', 'Sistemas críticos'],
  },
] as const

const stack = [
  'Angular',
  'TypeScript',
  'Next.js',
  'Java',
  '.NET',
  'SQL',
  'n8n / Make',
  'Google Ads',
] as const

export default function CvPage() {
  return (
    <main className="studio-b2b">
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
          <p className="home-eyebrow home-eyebrow--light">
            <span aria-hidden="true" />
            Curriculum · Evelyn Patiño · 2026
          </p>
          <h1 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
            <span className="type-lockup__impact">Ingeniera</span>
            <em className="type-lockup__script">con criterio</em>
          </h1>
          <p className="studio-b2b__lead studio-b2b__lead--light">
            6 años en software financiero. Hoy freelance desde Lausana: automatización, webs que
            venden y Ads con medición — la misma disciplina de banca, aplicada a tu negocio.
          </p>
          <div className="studio-b2b__actions">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'cv_hero_preanalisis' }}
              className="home-button home-button--gold"
            >
              Hacer mi pre-análisis
            </TrackedLink>
            <Link href="/portfolio" className="home-button home-button--light">
              Ver portfolio
            </Link>
            <a href="mailto:evelynpatildr@gmail.com" className="home-button home-button--light">
              Escribirme
            </a>
          </div>
        </div>
      </section>

      <section className="studio-b2b__proof" aria-label="Resumen">
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
              src={evelynPhotos.cvAbout}
              alt="Evelyn Patiño — perfil"
              fill
              sizes="(max-width: 900px) 92vw, 28rem"
              className="object-cover object-[50%_12%]"
            />
          </figure>
          <div>
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Perfil
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">De la banca</span>
              <em className="type-lockup__script">a tu embudo</em>
            </h2>
            <p className="studio-b2b__body">
              Estudié ingeniería mientras trabajaba. Sophos y Bancolombia me enseñaron que el error
              no es una opción cuando el proceso mueve dinero. Esa misma disciplina la aplico a
              webs, automatizaciones y Ads de negocios reales.
            </p>
            <p className="studio-b2b__pitch">Si te respondo, soy yo. No un equipo detrás de una marca.</p>
            <ul className="studio-b2b__chips">
              <li>Ingeniería de Sistemas</li>
              <li>Scrum / entrega</li>
              <li>ES · EN · FR (en curso)</li>
            </ul>
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
                  <a href="https://wa.me/41783480550">+41 78 348 0550</a>
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
            </dl>
          </div>
        </div>
      </section>

      <section className="page-band-dark studio-b2b__band">
        <p className="home-eyebrow home-eyebrow--light">
          <span aria-hidden="true" />
          Trayectoria
        </p>
        <h2 className="type-lockup type-lockup--glow page-lockup page-lockup--wide">
          <span className="type-lockup__impact">Seis años</span>
          <em className="type-lockup__script">donde importa</em>
        </h2>
        <div className="studio-b2b__timeline">
          {experience.map((job) => (
            <article key={job.role + job.period} className="studio-b2b__timeline-card">
              <p className="studio-b2b__period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="studio-b2b__company">{job.company}</p>
              <p>{job.text}</p>
              <ul className="studio-b2b__chips studio-b2b__chips--on-dark">
                {job.wins.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-b2b__section studio-b2b__section--smoke">
        <div className="studio-b2b__section-head">
          <div>
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Stack
            </p>
            <h2 className="type-lockup type-lockup--glow-soft page-lockup">
              <span className="type-lockup__impact">Herramientas</span>
              <em className="type-lockup__script">con las que entrego</em>
            </h2>
          </div>
          <p className="studio-b2b__section-note">
            Del core bancario al embudo comercial: elijo el stack que sostiene el proceso, no la moda.
          </p>
        </div>
        <ul className="studio-b2b__stack">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="studio-b2b__offer">
        <div className="studio-b2b__offer-glow" aria-hidden />
        <p className="home-eyebrow home-eyebrow--light">
          <span aria-hidden="true" />
          Siguiente paso
        </p>
        <h2 className="type-lockup type-lockup--center type-lockup--glow page-lockup page-lockup--center">
          <span className="type-lockup__impact">Trabajemos</span>
          <em className="type-lockup__script">juntos</em>
        </h2>
        <p className="studio-b2b__offer-copy">
          Pre-análisis gratis para ver si tiene sentido. Si sí: sesión 20 min · 25 CHF y propuesta
          concreta.
        </p>
        <div className="studio-b2b__actions studio-b2b__actions--center">
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'cv_close' }}
            className="home-button home-button--gold"
          >
            Hacer mi pre-análisis
          </TrackedLink>
          <Link href="/portfolio" className="home-button home-button--light">
            Ver portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}
