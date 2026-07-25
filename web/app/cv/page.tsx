import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { evelynPhotos } from '@/lib/evelyn-photos'

export const metadata: Metadata = {
  title: 'CV · Evelyn Patiño',
  description:
    'Curriculum de Evelyn Patiño Laverde — ingeniera de software, automatización de procesos y datos. Sophos · Bancolombia · freelance desde Suiza.',
  openGraph: {
    title: 'CV · Evelyn Patiño',
    images: [{ url: evelynPhotos.cvHero }],
  },
}

const experience = [
  {
    period: 'May 2019 — Oct 2025',
    role: 'Ingeniero Experto II',
    company: 'Sophos Solutions · Medellín · cliente Bancolombia',
    text: 'Soluciones para banca core e integraciones. Full-stack Angular + Java/.NET, UAT, producción 24/7 y liderazgo de squads bajo Scrum.',
  },
  {
    period: 'Oct 2024 — May 2025',
    role: 'Analista Software I',
    company: 'Bancolombia',
    text: 'Análisis y desarrollo en entorno bancario: requisitos, calidad y soporte de sistemas críticos.',
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
      <section className="studio-b2b__hero studio-b2b__hero--cv">
        <div className="studio-b2b__hero-media">
          <Image
            src={evelynPhotos.cvHero}
            alt="Evelyn Patiño de pie, retrato profesional"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
            className="object-cover object-[50%_18%]"
          />
          <div className="studio-b2b__hero-veil" aria-hidden />
        </div>
        <div className="studio-b2b__hero-copy">
          <p className="home-eyebrow">
            <span aria-hidden="true" />
            Curriculum · 2026
          </p>
          <h1 className="type-lockup type-lockup--glow-soft page-lockup">
            <span className="type-lockup__impact">Evelyn</span>
            <em className="type-lockup__script">Patiño Laverde</em>
          </h1>
          <p className="studio-b2b__lead">
            Ingeniera de software · automatización de procesos · datos. 6 años en software
            financiero; hoy freelance desde Lausana.
          </p>
          <dl className="studio-b2b__contact">
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
            <div>
              <dt>Base</dt>
              <dd>Lausana · Suiza</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="studio-b2b__section">
        <div className="studio-b2b__split">
          <figure className="studio-b2b__photo asset-photo">
            <Image
              src={evelynPhotos.cvAbout}
              alt="Evelyn Patiño — identidad frontal"
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
              <span className="type-lockup__impact">Criterio</span>
              <em className="type-lockup__script">de banca</em>
            </h2>
            <p className="studio-b2b__body">
              Estudié ingeniería mientras trabajaba. Sophos y Bancolombia me enseñaron que el error
              no es una opción cuando el proceso mueve dinero. Esa misma disciplina la aplico a
              webs, automatizaciones y Ads de negocios reales.
            </p>
            <ul className="studio-b2b__chips">
              <li>Ingeniería de Sistemas</li>
              <li>Scrum / entrega</li>
              <li>ES · EN · FR (en curso)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-band-dark studio-b2b__band">
        <p className="home-eyebrow home-eyebrow--light">
          <span aria-hidden="true" />
          Trayectoria
        </p>
        <h2 className="type-lockup type-lockup--glow page-lockup">
          <span className="type-lockup__impact">Seis años</span>
          <em className="type-lockup__script">en fintech</em>
        </h2>
        <div className="studio-b2b__timeline">
          {experience.map((job) => (
            <article key={job.role + job.period}>
              <p className="studio-b2b__period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="studio-b2b__company">{job.company}</p>
              <p>{job.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-b2b__section studio-b2b__section--smoke">
        <p className="home-eyebrow">
          <span aria-hidden="true" />
          Stack
        </p>
        <h2 className="type-lockup type-lockup--glow-soft page-lockup">
          <span className="type-lockup__impact">Herramientas</span>
          <em className="type-lockup__script">que uso</em>
        </h2>
        <ul className="studio-b2b__stack">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="studio-b2b__close">
        <p className="home-eyebrow">
          <span aria-hidden="true" />
          Siguiente paso
        </p>
        <h2 className="type-lockup type-lockup--glow-soft page-lockup">
          <span className="type-lockup__impact">Trabajemos</span>
          <em className="type-lockup__script">juntos</em>
        </h2>
        <div className="studio-b2b__actions">
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'cv_preanalisis' }}
            className="home-button home-button--gold"
          >
            Hacer mi pre-análisis
          </TrackedLink>
          <Link href="/portfolio" className="home-button home-button--quiet">
            Ver portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}
