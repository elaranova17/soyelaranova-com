'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { evelynPhotos } from '@/lib/evelyn-photos'

type HubLink = {
  href: string
  label: string
  hint: string
  featured?: boolean
  /** Full page load — obligatorio para rewrites HTML (/portfolio, /cv) */
  hard?: boolean
  external?: boolean
}

const LINKS: readonly HubLink[] = [
  {
    href: '/descubrimiento',
    label: 'Hacer mi pre-análisis',
    hint: 'Gratis → lectura → sesión 25 CHF',
    featured: true,
  },
  {
    href: '/portfolio',
    label: 'Portfolio',
    hint: 'Sitios · automatizaciones · Ads',
    featured: true,
  },
  {
    href: '/servicios',
    label: 'Servicios + modelos de webs',
    hint: 'Tutorial visual · packs claros',
  },
  {
    href: '/lp/paginas-web',
    label: 'Páginas web que venden',
    hint: 'Sitio · landing · Sitio+Ads',
  },
  {
    href: '/cv',
    label: 'Currículum',
    hint: 'Experiencia · stack · idiomas',
  },
  {
    href: '/sesion-estrategica',
    label: 'Sesión estratégica',
    hint: '20 min · 25 CHF',
  },
  {
    href: 'https://www.linkedin.com/in/evelyn-patino-laverde/',
    label: 'LinkedIn',
    hint: 'Conectar profesionalmente',
    external: true,
  },
  {
    href: 'https://wa.me/34613308585?text=Hola%20Evelyn%2C%20te%20escribo%20desde%20tu%20linktree.',
    label: 'WhatsApp',
    hint: '+34 613 30 85 85',
    external: true,
  },
  {
    href: 'mailto:evelynpatildr@gmail.com?subject=Proyecto%20con%20Evelyn',
    label: 'Email',
    hint: 'evelynpatildr@gmail.com',
    external: true,
  },
  {
    href: '/',
    label: 'Elara Nova',
    hint: 'Estudio · home · recursos',
  },
] as const

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.05 * i, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

function HubLinkCard({
  href,
  label,
  hint,
  featured,
  hard,
  external,
  index,
}: HubLink & { index: number }) {
  const isExternal = external ?? /^https?:|^mailto:/.test(href)
  const className = [
    'linktree-hub-link',
    featured ? 'linktree-hub-link--featured' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      {featured ? <span className="linktree-hub-link__badge">Principal</span> : null}
      <span className="linktree-hub-link__body">
        <span className="linktree-hub-link__label">{label}</span>
        <span className="linktree-hub-link__hint">{hint}</span>
      </span>
      <span className="linktree-hub-link__arrow" aria-hidden>
        →
      </span>
    </>
  )

  return (
    <motion.div custom={index} initial="hidden" animate="show" variants={fadeUp}>
      {isExternal || hard ? (
        <a
          href={href}
          className={className}
          target={isExternal && !href.startsWith('mailto:') ? '_blank' : undefined}
          rel={isExternal && !href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
        >
          {inner}
        </a>
      ) : (
        <Link href={href} className={className}>
          {inner}
        </Link>
      )}
    </motion.div>
  )
}

export default function LinktreePage() {
  return (
    <main className="linktree-page">
      <div className="linktree-page__glow" aria-hidden />

      <div className="linktree-page__inner">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="linktree-page__hero"
        >
          <div className="linktree-avatar">
            <Image
              src={evelynPhotos.linktreeAvatar}
              alt="Evelyn Patiño Laverde"
              fill
              sizes="140px"
              className="object-cover object-[50%_18%]"
              priority
            />
          </div>

          <p className="home-eyebrow home-eyebrow--light">
            <span aria-hidden="true" />
            Freelance · Suiza · ES · LATAM
          </p>

          <h1 className="type-lockup type-lockup--center type-lockup--glow linktree-lockup">
            <span className="type-lockup__impact">Evelyn</span>
            <em className="type-lockup__script">Patiño Laverde</em>
          </h1>

          <p className="linktree-role">
            Ingeniera de software · automatización, webs que venden y Google Ads.
          </p>
          <p className="linktree-tagline">
            Pienso como diseñadora, construyo como ingeniera.
          </p>

          <span className="linktree-status">
            <span className="linktree-status__dot" />
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        <nav className="linktree-nav" aria-label="Enlaces de Evelyn">
          {LINKS.map((link, index) => (
            <HubLinkCard key={link.href + link.label} {...link} index={index} />
          ))}
        </nav>

        <p className="linktree-foot">
          <Link href="/">← Volver al inicio</Link>
          <span aria-hidden>·</span>
          <Link href="/sesion-estrategica">Sesión 25 CHF</Link>
          <span aria-hidden>·</span>
          <Link href="/servicios">Servicios</Link>
        </p>
      </div>
    </main>
  )
}
