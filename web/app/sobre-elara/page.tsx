import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Elara',
  description:
    'Manifiesto de Elara Nova y Evelyn Patiño — la mujer real detrás del universo.',
}

export default function SobreElaraPage() {
  return (
    <main className="min-h-screen bg-[var(--color-purple-night)] px-6 pt-28 pb-20 text-[var(--color-cream)]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-16">

        {/* ── Elara (marca) ── */}
        <section className="flex w-full flex-col items-center text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] text-[var(--color-gold-soft)] uppercase">
            Sobre Elara Nova
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl italic text-[var(--color-gold-bright)] md:text-5xl">
            Mira todo lo que siempre fuiste capaz de ser.
          </h1>
          <p className="mt-6 max-w-lg font-serif text-lg italic leading-relaxed text-[var(--color-cream)]/80">
            Empecé estudiando astrología para entenderme a mí misma. No porque todo estuviera mal —
            sino porque sentía que había algo más profundo esperando adentro. Y lo había.
          </p>
          <p className="mt-4 max-w-lg font-serif text-base italic leading-relaxed text-[var(--color-cream)]/60">
            Todo lo que creé nació de esa pregunta: ¿qué hubiera necesitado yo al principio? Eso es
            lo que encontrás acá. Sin vueltas.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-purple-deep)]/40 px-8 py-3 font-sans text-[10px] font-semibold tracking-[0.3em] text-[var(--color-cream)] uppercase transition-colors hover:border-[var(--color-gold)]"
          >
            Sacá tu carta del día
          </Link>
        </section>

        <div className="flex w-full max-w-xs items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
          <span className="text-[var(--color-gold)] text-xs" aria-hidden>◆</span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
        </div>

        {/* ── Evelyn (persona real) ── */}
        <section className="flex w-full max-w-lg flex-col items-start gap-6">
          <p className="font-sans text-[9px] tracking-[0.45em] text-[var(--color-gold-soft)]/60 uppercase">
            La mujer real detrás de Elara
          </p>

          <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-[var(--color-gold)]/25 shadow-[var(--shadow-glow-gold)]">
            <Image
              src="/_assets/photos/evelyn_pro_perfil.jpg"
              alt="Evelyn Patiño Laverde"
              fill
              sizes="192px"
              className="object-cover object-center"
            />
          </div>

          <h2 className="font-display text-3xl italic text-[var(--color-cream)] md:text-4xl">
            Soy Evelyn.
          </h2>

          <p className="font-serif text-base leading-relaxed text-[var(--color-cream)]/75">
            La mujer real detrás de Elara Nova. Paisa, ingeniera de software con 6 años en banca
            (Sophos, Bancolombia). Vivo en Suiza y trabajo con clientes en España y LATAM.
          </p>
          <p className="font-serif text-sm leading-relaxed text-[var(--color-cream)]/55">
            Construyo sitios, apps y experiencias con IA para emprendedoras y negocios que quieren
            una presencia digital que convierta. Este portal es mi portafolio en vivo: lo que ves acá
            es lo que puedo construir para vos.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/[0.05] px-3 py-1 font-sans text-[9px] tracking-[0.2em] text-[var(--color-gold-soft)]/60 uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href="/portfolio"
            className="mt-2 inline-flex items-center gap-3 rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/10 px-8 py-3.5 font-sans text-[10px] font-bold tracking-[0.3em] text-[var(--color-gold-soft)] uppercase transition-all hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold-bright)]"
          >
            Ver portafolio de Evelyn
            <span className="text-sm" aria-hidden>↗</span>
          </Link>

          <Link
            href="/linktree"
            className="font-sans text-[10px] tracking-[0.28em] text-[var(--color-cream)]/45 uppercase underline-offset-4 hover:text-[var(--color-gold-soft)] hover:underline"
          >
            Todos mis enlaces (CV · propuesta · contacto)
          </Link>
        </section>
      </div>
    </main>
  )
}
