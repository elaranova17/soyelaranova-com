'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

type ClientCard = {
  href: string
  name: string
  category: string
  desc: string
  badge: string
  badgeClass: 'badge-active' | 'badge-happy'
  previewClass: 'client-preview--ofelia' | 'client-preview--sama'
  barStyle?: CSSProperties
}

const CLIENTS: readonly ClientCard[] = [
  {
    href: 'https://ofeliavallejo.com',
    name: 'Ofelia Vallejo',
    category: 'Leather House · Medellín',
    desc: 'Hub de enlaces y ecosistema B2B con identidad editorial. Tipografía limpia, navegación clara y experiencia premium sin ruido visual.',
    badge: 'Cliente Activo',
    badgeClass: 'badge-active',
    previewClass: 'client-preview--ofelia',
  },
  {
    href: 'https://southamericanmetalaliance.com',
    name: 'Sama',
    category: 'South American Metal Alliance',
    desc: 'Sitio y flujo digital alineados con la voz de la marca. Estructura pensada para convertir, componentes reutilizables y base técnica lista para crecer.',
    badge: 'Cliente Feliz',
    badgeClass: 'badge-happy',
    previewClass: 'client-preview--sama',
    barStyle: { background: 'rgba(46, 139, 87, 0.45)' },
  },
] as const

function ClientPreviewMock({ barStyle }: { barStyle?: CSSProperties }) {
  return (
    <div className="client-preview__mock" aria-hidden>
      <div className="client-preview__bar" style={barStyle} />
      <div className="client-preview__line client-preview__line--mid" />
      <div className="client-preview__line client-preview__line--short" />
      <div className="client-preview__line" />
    </div>
  )
}

function ClientCardItem({ client, index }: { client: ClientCard; index: number }) {
  const { setRef, style } = useScrollReveal<HTMLElement>({ index, translateY: 32 })

  return (
    <article ref={setRef} className="client-card" style={style}>
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        className="client-link"
      >
        <div className={`client-preview ${client.previewClass}`}>
          <span className={`client-badge ${client.badgeClass}`}>{client.badge}</span>
          <ClientPreviewMock barStyle={client.barStyle} />
          <div className="client-overlay">
            <span className="client-overlay-text">Ver sitio en vivo</span>
            <span className="client-overlay-arrow" aria-hidden>
              →
            </span>
          </div>
        </div>

        <div className="client-info">
          <h3 className="client-name">{client.name}</h3>
          <p className="client-category">{client.category}</p>
          <p className="client-desc">{client.desc}</p>
          <span className="client-view">Ver sitio en vivo</span>
        </div>
      </a>
    </article>
  )
}

/** Sección 6 · Casos de éxito B2B — rediseño elara-clients */
export function ElaraClientsSection() {
  const { setRef: setTitleRef, style: titleStyle } = useScrollReveal<HTMLHeadingElement>({
    translateY: 24,
  })
  const { setRef: setCtaRef, style: ctaStyle } = useScrollReveal<HTMLDivElement>({
    index: 2,
    translateY: 20,
  })

  return (
    <section className="elara-clients scroll-mt-[5.5rem]" id="casos-exito" aria-labelledby="clients-heading">
      <h2 ref={setTitleRef} id="clients-heading" className="elara-clients-title" style={titleStyle}>
        Quién ya confió en este ritual
      </h2>

      <div className="elara-clients-grid">
        {CLIENTS.map((client, i) => (
          <ClientCardItem key={client.name} client={client} index={i} />
        ))}
      </div>

      <div ref={setCtaRef} className="client-cta" style={ctaStyle}>
        <p>
          Para un <em>nuevo cliente</em> preparo una propuesta personalizada (alcance, cronograma,
          inversión) — enlace privado por proyecto, no plantilla pública. Si querés empezar,{' '}
          <Link href="/descubrimiento">completá el descubrimiento</Link> y te armo la propuesta a
          medida.
        </p>
      </div>
    </section>
  )
}
