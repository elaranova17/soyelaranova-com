import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Elara',
  description:
    'Manifiesto de Elara Nova y Evelyn Patiño — la mujer real detrás del universo.',
}

const STACK = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase'] as const

export default function SobreElaraPage() {
  return (
    <main className="min-h-screen bg-[var(--color-purple-night)] px-6 pt-28 pb-20 text-[var(--color-cream)]">
      <section
        className="mx-auto flex max-w-2xl flex-col items-center gap-10 text-center"
        aria-labelledby="sobre-elara-heading"
      >
        <header className="flex flex-col items-center">
          <p className="font-sans text-[10px] tracking-[0.35em] text-[var(--color-gold-soft)] uppercase">
            Sobre Elara Nova
          </p>
          <h1
            id="sobre-elara-heading"
            className="mt-4 max-w-xl font-display text-4xl italic text-[var(--color-gold-bright)] md:text-5xl"
          >
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
        </header>

        {/* Evelyn dentro de la misma sección — protagonista B2B */}
        <div className="sobre-evelyn-panel relative w-full overflow-hidden rounded-3xl border border-[var(--color-gold)]/35 bg-gradient-to-br from-[var(--color-purple-deep)]/80 via-[var(--color-purple-night)] to-[var(--color-void)] px-6 py-10 shadow-[var(--shadow-glow-gold)] md:px-10">
          <p className="font-sans text-[9px] tracking-[0.42em] text-[var(--color-gold-bright)] uppercase">
            La mujer detrás del universo
          </p>

          <div className="linktree-avatar-ring relative mx-auto mt-6 h-40 w-40 md:h-44 md:w-44">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--color-gold-bright)] shadow-[0_0_32px_rgba(242,213,120,0.4)]">
              <Image
                src="/_assets/photos/evelyn_pro_perfil.jpg"
                alt="Evelyn Patiño Laverde"
                fill
                sizes="(max-width: 768px) 160px, 176px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <h2 className="mt-6 font-display text-3xl italic text-[var(--color-cream)] md:text-4xl">
            Soy{' '}
            <span className="bg-gradient-to-r from-[var(--color-cream)] via-[var(--color-gold-bright)] to-[var(--color-gold-soft)] bg-clip-text text-transparent">
              Evelyn Patiño Laverde
            </span>
          </h2>
          <p className="mt-1 font-sans text-[10px] tracking-[0.28em] text-[var(--color-gold-soft)]/80 uppercase">
            Pienso como diseñadora, construyo como ingeniera
          </p>

          <p className="mx-auto mt-5 max-w-md font-serif text-base leading-relaxed text-[var(--color-cream)]/80">
            Elara Nova es mi voz mística; yo soy quien diseña y programa este portal. Paisa,
            ingeniera con 6 años en banca (Sophos, Bancolombia). Vivo en Suiza y trabajo con clientes
            en España y LATAM.
          </p>
          <p className="mx-auto mt-3 max-w-md font-serif text-sm leading-relaxed text-[var(--color-cream)]/55">
            Si buscás una presencia digital que convierta — sitios, apps y experiencias con IA — lo
            que ves acá es lo que puedo construir para vos.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Stack técnico">
            {STACK.map((tech) => (
              <li key={tech}>
                <span className="inline-block rounded-full border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/[0.07] px-3 py-1 font-sans text-[9px] tracking-[0.2em] text-[var(--color-gold-soft)] uppercase">
                  {tech}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)]/15 px-8 py-3.5 font-sans text-[10px] font-bold tracking-[0.3em] text-[var(--color-gold-bright)] uppercase transition-all hover:border-[var(--color-gold-bright)] hover:bg-[var(--color-gold)]/25"
            >
              Ver portafolio de Evelyn
              <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/linktree"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-purple-deep)]/50 px-8 py-3.5 font-sans text-[10px] font-semibold tracking-[0.28em] text-[var(--color-cream)] uppercase transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)]"
            >
              CV · contacto · propuesta
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-purple-deep)]/40 px-8 py-3 font-sans text-[10px] font-semibold tracking-[0.3em] text-[var(--color-cream)] uppercase transition-colors hover:border-[var(--color-gold)]"
        >
          Sacá tu carta del día
        </Link>
      </section>
    </main>
  )
}
