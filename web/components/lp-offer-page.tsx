import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DiscoveryForm } from '@/components/discovery-form'
import { TrackedLink } from '@/components/tracked-link'
import { discoveryHref, packsForService, type LpOffer } from '@/lib/lp-offers'

export function LpOfferPage({
  offer,
  trackingPrefix,
}: {
  offer: LpOffer
  trackingPrefix: string
}) {
  const formHref = `${discoveryHref(offer)}#formulario`
  const accentTitle = (() => {
    // Resalta la última frase después de coma o em-dash si existe
    const parts = offer.title.split(/,\s+|—\s+/)
    if (parts.length < 2) return offer.title
    const head = parts.slice(0, -1).join(', ')
    const tail = parts[parts.length - 1]
    return (
      <>
        {head}
        {offer.title.includes('—') ? ' — ' : ', '}
        <em className="text-[var(--editorial-plum)]">{tail}</em>
      </>
    )
  })()

  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <header className="flex items-center justify-between px-5 pt-6 md:px-10">
        <Link href="/" className="font-display text-xl italic">
          Elara Nova
        </Link>
        <TrackedLink
          href={formHref}
          tracking={{ event: 'cta_click', category: 'lead', label: `${trackingPrefix}_header` }}
          className="rounded-full bg-[var(--editorial-plum)] px-5 py-2.5 text-[0.7rem] font-black tracking-[0.18em] text-[var(--editorial-ivory)] uppercase"
        >
          Pre-análisis
        </TrackedLink>
      </header>

      <section className="px-5 pt-14 pb-16 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--editorial-gold)] uppercase">
              {offer.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-[2.9rem] leading-[1.0] md:text-[4.6rem]">
              {accentTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--editorial-cacao)]">
              {offer.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <TrackedLink
                href={formHref}
                tracking={{ event: 'cta_click', category: 'lead', label: `${trackingPrefix}_hero` }}
                className="inline-flex min-h-12 items-center rounded-full bg-[var(--editorial-plum)] px-7 text-[0.78rem] font-black tracking-[0.18em] text-[var(--editorial-ivory)] uppercase"
              >
                {offer.ctaLabel}
              </TrackedLink>
              <span className="text-sm text-[var(--editorial-cacao)]">{offer.ctaNote}</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[var(--editorial-stone)]">
            <Image
              src="/_assets/photos/evelyn_pro_hero.jpg"
              alt="Evelyn Patiño, ingeniera de software"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 40rem"
              className="object-cover object-[58%_22%]"
            />
          </div>
        </div>
      </section>

      {offer.pack === null ? (
        <section className="border-y border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] px-5 py-10 md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.68rem] font-black tracking-[0.22em] text-[var(--editorial-cacao)] uppercase">
              Paquetes
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {packsForService(offer.service).map((pack) => (
                <Link
                  key={pack.pack}
                  href={`/lp/${pack.service}/${pack.pack}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-[var(--editorial-stone)] bg-[var(--editorial-smoke)] px-5 text-[0.68rem] font-bold tracking-[0.14em] text-[var(--editorial-plum)] uppercase transition-colors hover:border-[var(--editorial-gold)]"
                >
                  {pack.titlePlain.split('·')[0]?.trim() || pack.pack} · {pack.priceAnchor}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[var(--editorial-ivory)] px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl md:text-5xl">¿Te suena alguna de estas?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {offer.dolores.map(({ dolor, solucion }) => (
              <article
                key={dolor}
                className="rounded-[14px] border border-[var(--editorial-stone)] bg-[var(--editorial-smoke)] p-6"
              >
                <h3 className="font-display text-xl text-[var(--editorial-plum)]">{dolor}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--editorial-cacao)]">{solucion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl md:text-5xl">Así de simple.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {offer.pasos.map(([n, titulo, texto]) => (
              <div key={n} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--editorial-gold)] font-display text-[var(--editorial-gold)]">
                  {n}
                </span>
                <div>
                  <h3 className="font-display text-lg">{titulo}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-[var(--editorial-cacao)]">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--editorial-aubergine)] px-5 py-16 text-[var(--editorial-ivory)] md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--editorial-gold)] uppercase">
              Caso real
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">{offer.caseTitle}</h2>
            <p className="mt-5 max-w-xl leading-8 text-[var(--editorial-lavender)]">{offer.caseBody}</p>
          </div>
          <div className="h-fit rounded-[14px] border border-[var(--editorial-gold)]/30 bg-white/[0.04] p-7">
            <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--editorial-gold)] uppercase">
              Inversión
            </p>
            <p className="mt-3 font-display text-4xl">{offer.priceAnchor}</p>
            <ul className="mt-5 space-y-2.5 text-sm leading-7 text-[var(--editorial-lavender)]">
              {offer.priceBullets.map((b) => (
                <li key={b}>✦ {b}</li>
              ))}
            </ul>
            <TrackedLink
              href="/sesion-estrategica"
              tracking={{
                event: 'cta_click',
                category: 'lead',
                label: `${trackingPrefix}_sesion`,
              }}
              className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[var(--editorial-gold)] px-5 text-[0.68rem] font-black tracking-[0.16em] text-[var(--editorial-gold)] uppercase"
            >
              Sesión estratégica · 25 CHF
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl">Preguntas de siempre</h2>
          <div className="mt-8 divide-y divide-[var(--editorial-stone)]">
            {offer.faq.map(([q, a]) => (
              <details key={q} className="group py-4">
                <summary className="cursor-pointer list-none font-display text-lg marker:content-none">
                  <span className="mr-2 text-[var(--editorial-gold)]">✦</span>
                  {q}
                </summary>
                <p className="mt-3 pl-6 text-sm leading-7 text-[var(--editorial-cacao)]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="diagnostico"
        className="bg-[var(--editorial-aubergine)] px-5 py-20 text-[var(--editorial-ivory)] md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-7xl" id="formulario">
          <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--editorial-gold)] uppercase">
            Pre-análisis didáctico · gratis
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl md:text-5xl">
            Contame cómo trabajás hoy. Yo te preparo una lectura antes de cualquier reunión.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--editorial-lavender)]">
            Después, si querés profundizar, la sesión estratégica dura 20 min y cuesta 25 CHF.
          </p>
          <div className="mt-10">
            <Suspense fallback={<p className="text-sm text-[var(--editorial-lavender)]">Cargando formulario…</p>}>
              <DiscoveryForm
                initialService={offer.discoveryDefaults?.service}
                initialPack={offer.discoveryDefaults?.pack}
              />
            </Suspense>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-xs text-[var(--editorial-cacao)]">
        <Link href="/legal" className="hover:text-[var(--editorial-plum)]">
          Privacidad y términos
        </Link>
        <span className="mx-2">·</span>
        <Link href="/sesion-estrategica" className="hover:text-[var(--editorial-plum)]">
          Sesión 25 CHF
        </Link>
        <span className="mx-2">·</span>
        <span>Elara Nova · Evelyn Patiño</span>
      </footer>
    </main>
  )
}
