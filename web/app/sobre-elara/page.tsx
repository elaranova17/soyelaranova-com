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
      <div className="flex flex-col items-center text-center max-w-xl">
        <p className="font-sans text-[10px] tracking-[0.35em] text-[var(--color-gold-soft)] uppercase">
          Sobre Elara
        </p>
        <h1 className="mt-4 font-display text-4xl italic text-[var(--color-gold-bright)] md:text-5xl">
          Mira todo lo que siempre fuiste capaz de ser.
        </h1>
        <p className="mt-6 font-serif text-lg italic leading-relaxed text-[var(--color-cream)]/80">
          Empecé estudiando astrología para entenderme a mí misma. No porque
          todo estuviera mal — sino porque sentía que había algo más profundo
          esperando adentro. Y lo había.
        </p>
        <p className="mt-4 font-serif text-base italic leading-relaxed text-[var(--color-cream)]/60">
          Todo lo que creé nació de esa pregunta: ¿qué hubiera necesitado yo
          al principio? Eso es lo que encontrás acá. Sin vueltas.
        </p>
        <Link
          href="/#sobre"
          className="mt-10 inline-flex rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-purple-deep)]/40 px-8 py-3 font-sans text-[10px] font-semibold tracking-[0.3em] text-[var(--color-cream)] uppercase transition-colors hover:border-[var(--color-gold)]"
        >
          Volver al inicio
        </Link>
      </div>

      {/* ── Separador ── */}
      <div className="my-20 flex w-full max-w-xs items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
        <span className="text-[var(--color-gold)] text-xs">◆</span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
      </div>

      {/* ── Sección Evelyn ── */}
      <div className="flex flex-col items-start max-w-lg w-full gap-5">
        <p className="font-sans text-[9px] tracking-[0.45em] text-[var(--color-gold-soft)]/60 uppercase">
          La mujer detrás de Elara
        </p>
        <h2 className="font-display text-3xl italic text-[var(--color-cream)] md:text-4xl">
          Soy Evelyn Patiño.
        </h2>

        <p className="font-serif text-base leading-relaxed text-[var(--color-cream)]/70">
          Ingeniera de software con 6 años en banca — Sophos y Bancolombia.
          Vivo en Suiza, trabajo para España y LATAM. Construyo sitios, apps
          y soluciones con IA para emprendedoras y negocios que quieren una
          presencia digital que convierta.
        </p>
        <p className="font-serif text-sm leading-relaxed text-[var(--color-cream)]/50">
          Stack: Next.js · React · TypeScript · Tailwind · Supabase · WordPress.
          Este sitio es mi portafolio en vivo — lo que ves acá es lo que construyo para clientes.
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mt-1">
          {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase', 'WordPress', 'Angular'].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/[0.05] px-3 py-1 font-sans text-[9px] tracking-[0.2em] text-[var(--color-gold-soft)]/60 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA linktree */}
        <Link
          href="/linktree"
          className="mt-4 inline-flex items-center gap-3 rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/10 px-8 py-3.5 font-sans text-[10px] font-bold tracking-[0.3em] text-[var(--color-gold-soft)] uppercase transition-all hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold-bright)]"
        >
          Ver portafolio · CV · Propuesta
          <span className="text-sm">↗</span>
        </Link>
      </div>

    </main>
  )
}
