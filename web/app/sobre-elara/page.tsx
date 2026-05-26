import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Elara',
  description: 'Manifiesto e identidad de Elara Nova. Hermana mayor paisa en tu reinvención.',
}

export default function SobreElaraPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-24 pb-16">

      {/* ── Sección Elara ── */}
      <div className="flex flex-col items-center text-center">
        <p className="font-sans text-[10px] tracking-[0.35em] text-[var(--color-gold-soft)] uppercase">
          Sobre Elara
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl italic text-[var(--color-gold-bright)] md:text-5xl">
          Mira todo lo que siempre fuiste capaz de ser.
        </h1>
        <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed text-[var(--color-cream)]/80">
          El manifiesto completo en scroll storytelling llega en el próximo sprint. Por ahora, conocé a
          Elara en la landing.
        </p>
        <Link
          href="/#sobre"
          className="mt-10 inline-flex rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-purple-deep)]/40 px-8 py-3 font-sans text-[10px] font-semibold tracking-[0.3em] text-[var(--color-cream)] uppercase transition-colors hover:border-[var(--color-gold)]"
        >
          Leer en el inicio
        </Link>
      </div>

      {/* ── Separador ── */}
      <div className="my-20 flex w-full max-w-xs items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
        <span className="text-[var(--color-gold)] text-xs">◆</span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
      </div>

      {/* ── Sección Evelyn ── */}
      <div className="flex flex-col items-center text-center max-w-lg">
        <p className="font-sans text-[10px] tracking-[0.45em] text-[var(--color-gold-soft)]/70 uppercase">
          La mujer detrás de Elara
        </p>
        <h2 className="mt-4 font-display text-3xl italic text-[var(--color-cream)] md:text-4xl">
          Soy Evelyn Patiño.
        </h2>
        <p className="mt-5 font-serif text-base italic leading-relaxed text-[var(--color-cream)]/65">
          Ingeniera de software. Seis años en banca — Sophos y Bancolombia.
          Vivo en Suiza, trabajo para España y LATAM.
          Construyo sitios, apps y soluciones con IA, sola y con mucho café.
        </p>
        <Link
          href="/portfolio"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/8 px-8 py-3 font-sans text-[10px] font-bold tracking-[0.3em] text-[var(--color-gold-soft)] uppercase transition-all hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/15 hover:text-[var(--color-gold-bright)]"
        >
          Mira mi portafolio
          <span className="text-sm">→</span>
        </Link>
      </div>

    </main>
  )
}
