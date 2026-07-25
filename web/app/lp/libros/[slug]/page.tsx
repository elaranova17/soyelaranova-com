import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TrackedLink } from '@/components/tracked-link'
import { getBookOffer, listBookSlugs } from '@/lib/book-offers'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return listBookSlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const book = getBookOffer(slug)
  if (!book) return { title: 'Libro no encontrado' }
  return {
    title: book.title,
    description: book.description,
    robots: { index: false, follow: false },
  }
}

export default async function LpLibroPage({ params }: Props) {
  const { slug } = await params
  const book = getBookOffer(slug)
  if (!book) notFound()

  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <header className="flex items-center justify-between px-5 pt-6 md:px-10">
        <Link href="/" className="font-display text-xl italic">
          Elara Nova
        </Link>
        <TrackedLink
          href={book.ctaHref}
          tracking={{ event: 'cta_click', category: 'lead', label: `lp_libro_${slug}_header` }}
          className="rounded-full bg-[var(--editorial-plum)] px-5 py-2.5 text-[0.7rem] font-black tracking-[0.18em] text-[var(--editorial-ivory)] uppercase"
        >
          {book.priceLabel === 'Gratis' ? 'Pedir gratis' : 'Waitlist'}
        </TrackedLink>
      </header>

      <section className="px-5 pt-14 pb-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--editorial-gold)] uppercase">
            {book.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-[2.9rem] leading-[1.0] md:text-[4.8rem]">{book.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">{book.subtitle}</p>
          <p className="mt-4 font-display text-2xl text-[var(--editorial-plum)]">{book.priceLabel}</p>
          <ul className="mt-6 space-y-2 text-sm leading-7 text-[var(--editorial-cacao)]">
            {book.bullets.map((b) => (
              <li key={b}>✦ {b}</li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <TrackedLink
              href={book.ctaHref}
              tracking={{ event: 'cta_click', category: 'lead', label: `lp_libro_${slug}_cta` }}
              className="home-button home-button--primary"
            >
              {book.ctaLabel}
            </TrackedLink>
            <Link href={book.secondaryHref} className="home-button home-button--quiet">
              {book.secondaryLabel}
            </Link>
          </div>
          <p className="mt-6 text-xs leading-6 text-[var(--editorial-cacao)]/80">{book.statusNote}</p>
        </div>
      </section>

      <section className="bg-[var(--editorial-aubergine)] px-5 py-16 text-[var(--editorial-ivory)] md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl">También puedo construir el sistema alrededor.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--editorial-lavender)]">
            Si además del libro necesitás landing, automatización de entregas o Ads, el mismo
            pre-análisis sirve para cotizar el estudio (voz Evelyn).
          </p>
          <TrackedLink
            href="/sesion-estrategica"
            tracking={{ event: 'cta_click', category: 'lead', label: `lp_libro_${slug}_sesion` }}
            className="home-button home-button--gold mt-8"
          >
            Sesión estratégica · 25 CHF
          </TrackedLink>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-xs text-[var(--editorial-cacao)]">
        <Link href="/legal" className="hover:text-[var(--editorial-plum)]">
          Privacidad
        </Link>
        <span className="mx-2">·</span>
        <Link href="/cursos" className="hover:text-[var(--editorial-plum)]">
          Cursos
        </Link>
      </footer>
    </main>
  )
}
