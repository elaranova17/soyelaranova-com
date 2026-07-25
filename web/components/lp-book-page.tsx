import Link from 'next/link'
import Image from 'next/image'
import { TrackedLink } from '@/components/tracked-link'
import { resolveBookCta, type BookOffer } from '@/lib/book-offers'

export function LpBookPage({ book }: { book: BookOffer }) {
  const tracking = `lp_libro_${book.slug}`
  const cta = resolveBookCta(book)
  const isExternal = /^https?:\/\//i.test(cta.href)

  return (
    <main className="lp-page">
      <section className="lp-hero lp-hero--book" aria-label={book.title}>
        <div className="lp-hero__media">
          <Image
            src={book.visual.heroImage}
            alt={book.visual.heroAlt}
            fill
            priority
            sizes="100vw"
            className="lp-hero__img"
            style={{ objectPosition: book.visual.heroPosition }}
          />
        </div>
        <div className="lp-hero__veil" aria-hidden="true" />
        <div className="lp-hero__grain" aria-hidden="true" />

        <div className="lp-hero__content">
          <p className="lp-hero__brand">Elara Nova</p>
          <p className="lp-hero__eyebrow">{book.eyebrow}</p>
          <h1 className="type-lockup type-lockup--glow">
            <span className="type-lockup__impact">{book.title}</span>
          </h1>
          <p className="lp-hero__sub">{book.subtitle}</p>
          <div className="lp-hero__cta">
            <TrackedLink
              href={cta.href}
              tracking={{ event: 'cta_click', category: 'lead', label: `${tracking}_hero` }}
              className="home-button home-button--gold"
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              {cta.label}
            </TrackedLink>
            <span className="lp-hero__note">{book.priceLabel}</span>
          </div>
          <div className="lp-hero__line" aria-hidden="true" />
        </div>
      </section>

      <section className="lp-book-inside">
        <div className="lp-section-inner lp-book-inside__grid">
          <div>
            <p className="home-eyebrow">
              <span aria-hidden="true" />
              Qué incluye
            </p>
            <h2>Lo esencial, sin ruido.</h2>
          </div>
          <ul className="lp-book-inside__list">
            {book.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <p className="lp-section-inner lp-book-inside__note">{cta.note}</p>
        <div className="lp-section-inner lp-book-inside__actions">
          <TrackedLink
            href={cta.href}
            tracking={{ event: 'cta_click', category: 'lead', label: `${tracking}_cta` }}
            className="home-button home-button--primary"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {cta.label}
          </TrackedLink>
          <Link href={book.secondaryHref} className="home-button home-button--quiet">
            {book.secondaryLabel}
          </Link>
        </div>
      </section>

      <section className="lp-case lp-book-bridge">
        <div className="lp-section-inner">
          <p className="home-eyebrow home-eyebrow--light">
            <span aria-hidden="true" />
            Estudio Evelyn
          </p>
          <h2>También puedo construir el sistema alrededor.</h2>
          <p>
            Si además del libro necesitás landing, automatización de entregas o Ads, el mismo
            pre-análisis sirve para cotizar el estudio.
          </p>
          <TrackedLink
            href="/sesion-estrategica"
            tracking={{ event: 'cta_click', category: 'lead', label: `${tracking}_sesion` }}
            className="home-button home-button--gold"
          >
            Sesión estratégica · 25 CHF
          </TrackedLink>
        </div>
      </section>

      <footer className="lp-footer">
        <Link href="/legal">Privacidad</Link>
        <span aria-hidden="true">·</span>
        <Link href="/cursos">Cursos</Link>
        <span aria-hidden="true">·</span>
        <Link href="/lp/libros/7-dias-de-elara">7 Días</Link>
        <span aria-hidden="true">·</span>
        <Link href="/lp/libros/ciclo-nova-del-regreso">Ciclo Nova</Link>
      </footer>
    </main>
  )
}
