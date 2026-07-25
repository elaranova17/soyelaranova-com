import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'

const STEPS = [
  {
    n: '01',
    t: 'Pre-análisis',
    d: 'Gratis · 2–4 min · te mando lectura',
    href: '/descubrimiento',
  },
  {
    n: '02',
    t: 'Sesión 25 CHF',
    d: '20 min · alcance y precio',
    href: '/sesion-estrategica',
  },
  {
    n: '03',
    t: 'Proyecto',
    d: 'Pack cerrado · entrega con plazos',
    href: '/servicios',
  },
] as const

/** Banda de embudo reutilizable — misma narrativa en todo el estudio */
export function StudioFunnelStrip({
  trackingLabel = 'funnel_strip',
  dark = false,
}: {
  trackingLabel?: string
  dark?: boolean
}) {
  return (
    <section
      className={`studio-funnel-strip${dark ? ' studio-funnel-strip--dark' : ''}`}
      aria-label="Embudo comercial"
    >
      <div className="studio-funnel-strip__inner">
        <div className="studio-funnel-strip__intro">
          <p className={`home-eyebrow${dark ? ' home-eyebrow--light' : ''} studio-accent`}>
            <span aria-hidden="true" />
            Cómo trabajamos
          </p>
          <h2
            className={`type-lockup page-lockup ${dark ? 'type-lockup--glow' : 'type-lockup--glow-soft'}`}
          >
            <span className="type-lockup__impact">Embudo</span>
            <em className="type-lockup__script">sin misterio</em>
          </h2>
          <p className="studio-funnel-strip__lead">
            No hay call gratis larga. Primero entendemos tu negocio; después, si hay fit, sesión
            corta de pago; luego proyecto con precio cerrado.
          </p>
        </div>
        <ol className="studio-funnel-strip__steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <Link href={s.href}>
                <span className="studio-funnel-strip__n font-display">{s.n}</span>
                <strong className="font-display">{s.t}</strong>
                <span>{s.d}</span>
              </Link>
            </li>
          ))}
        </ol>
        <TrackedLink
          href="/descubrimiento"
          tracking={{ event: 'cta_click', category: 'lead', label: trackingLabel }}
          className="home-button home-button--gold"
        >
          Hacer mi pre-análisis
        </TrackedLink>
      </div>
    </section>
  )
}
