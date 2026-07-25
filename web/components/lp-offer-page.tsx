import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DiscoveryForm } from '@/components/discovery-form'
import { TrackedLink } from '@/components/tracked-link'
import {
  discoveryHref,
  getLpVisual,
  packsForService,
  type LpOffer,
} from '@/lib/lp-offers'

export function LpOfferPage({
  offer,
  trackingPrefix,
}: {
  offer: LpOffer
  trackingPrefix: string
}) {
  const formHref = `${discoveryHref(offer)}#formulario`
  const visual = getLpVisual(offer)

  const accentTitle = (() => {
    const parts = offer.title.split(/,\s+|—\s+/)
    if (parts.length < 2) {
      return <span className="type-lockup__impact">{offer.title}</span>
    }
    const head = parts.slice(0, -1).join(offer.title.includes('—') ? ' — ' : ', ')
    const tail = parts[parts.length - 1]
    return (
      <>
        <span className="type-lockup__impact">{head}</span>
        <em className="type-lockup__script">{tail}</em>
      </>
    )
  })()

  return (
    <main className="lp-page">
      <section className="lp-hero" aria-label="Oferta">
        <div className="lp-hero__media">
          <Image
            src={visual.heroImage}
            alt={visual.heroAlt}
            fill
            priority
            sizes="100vw"
            className="lp-hero__img"
            style={{ objectPosition: visual.heroPosition }}
          />
        </div>
        <div className="lp-hero__veil" aria-hidden="true" />
        <div className="lp-hero__grain" aria-hidden="true" />

        <div className="lp-hero__content">
          <p className="lp-hero__brand">Elara Nova</p>
          <p className="lp-hero__eyebrow">{offer.eyebrow}</p>
          <h1 className="type-lockup">{accentTitle}</h1>
          <p className="lp-hero__sub">{offer.subtitle}</p>
          <div className="lp-hero__cta">
            <TrackedLink
              href={formHref}
              tracking={{ event: 'cta_click', category: 'lead', label: `${trackingPrefix}_hero` }}
              className="home-button home-button--gold"
            >
              {offer.ctaLabel}
            </TrackedLink>
            <span className="lp-hero__note">{offer.ctaNote}</span>
          </div>
          <div className="lp-hero__line" aria-hidden="true" />
        </div>
      </section>

      {offer.pack === null ? (
        <section className="lp-packs">
          <div className="lp-section-inner">
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Paquetes
            </p>
            <div className="lp-packs__row">
              {packsForService(offer.service).map((pack) => (
                <Link
                  key={pack.pack}
                  href={`/lp/${pack.service}/${pack.pack}`}
                  className="lp-packs__link"
                >
                  {pack.titlePlain.split('·')[0]?.trim() || pack.pack}
                  <span>{pack.priceAnchor}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="lp-pains">
        <div className="lp-section-inner">
          <h2>¿Te suena alguna de estas?</h2>
          <div className="lp-pains__grid">
            {offer.dolores.map(({ dolor, solucion }, index) => (
              <article key={dolor} className="lp-pain" style={{ ['--lp-i' as string]: index }}>
                <h3>{dolor}</h3>
                <p>{solucion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-steps">
        <div className="lp-section-inner">
          <h2>Así de simple.</h2>
          <ol className="lp-steps__list">
            {offer.pasos.map(([n, titulo, texto]) => (
              <li key={n}>
                <span>{n}</span>
                <div>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lp-case">
        <div className="lp-section-inner lp-case__grid">
          <div>
            <p className="home-eyebrow home-eyebrow--light">
              <span aria-hidden="true" />
              Caso real
            </p>
            <h2>{offer.caseTitle}</h2>
            <p>{offer.caseBody}</p>
          </div>
          <div className="lp-invest">
            <p className="lp-invest__label">Inversión</p>
            <p className="lp-invest__price">{offer.priceAnchor}</p>
            <ul>
              {offer.priceBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <TrackedLink
              href="/sesion-estrategica"
              tracking={{
                event: 'cta_click',
                category: 'lead',
                label: `${trackingPrefix}_sesion`,
              }}
              className="home-button home-button--gold"
            >
              Sesión estratégica · 25 CHF
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="lp-faq">
        <div className="lp-section-inner lp-faq__inner">
          <h2>Preguntas de siempre</h2>
          <div className="lp-faq__list">
            {offer.faq.map(([q, a]) => (
              <details key={q}>
                <summary>
                  <span aria-hidden="true">✦</span>
                  {q}
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="preanalisis" className="lp-form">
        <div className="lp-section-inner" id="formulario">
          <p className="home-eyebrow home-eyebrow--light">
            <span aria-hidden="true" />
            Pre-análisis didáctico · gratis
          </p>
          <h2>Contame cómo trabajás hoy. Yo te preparo una lectura antes de cualquier reunión.</h2>
          <p className="lp-form__lead">
            Después, si querés profundizar, la sesión estratégica dura 20 min y cuesta 25 CHF.
          </p>
          <div className="lp-form__wrap">
            <Suspense
              fallback={<p className="lp-form__loading">Cargando formulario…</p>}
            >
              <DiscoveryForm
                initialService={offer.discoveryDefaults?.service}
                initialPack={offer.discoveryDefaults?.pack}
              />
            </Suspense>
          </div>
        </div>
      </section>

      <footer className="lp-footer">
        <Link href="/legal">Privacidad y términos</Link>
        <span aria-hidden="true">·</span>
        <Link href="/sesion-estrategica">Sesión 25 CHF</Link>
        <span aria-hidden="true">·</span>
        <span>Elara Nova · Evelyn Patiño</span>
      </footer>
    </main>
  )
}
