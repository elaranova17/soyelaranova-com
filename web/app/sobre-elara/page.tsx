import type { Metadata } from 'next'
import Image from 'next/image'
import { ElaraButton } from '@/components/elara-button'
import { evelynPhotos } from '@/lib/evelyn-photos'

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
            className="type-lockup type-lockup--glow type-lockup--center mt-4 text-[clamp(2.6rem,5vw,4.2rem)]"
          >
            <span className="type-lockup__impact">Mira todo</span>
            <em className="type-lockup__script">lo que siempre fuiste</em>
          </h1>
          <p className="mt-6 max-w-lg font-serif text-lg italic leading-relaxed text-[var(--color-cream)]/80">
            Empecé estudiando astrología para entenderme a mí misma. No porque todo estuviera mal —
            sino porque sentía que había algo más profundo esperando adentro. Y lo había.
          </p>
          <p className="mt-4 max-w-lg font-serif text-base italic leading-relaxed text-[var(--color-cream)]/60">
            Todo lo que creé nació de esa pregunta: ¿qué hubiera necesitado yo al principio? Eso es
            lo que encuentras aquí. Sin vueltas.
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
                src={evelynPhotos.sobreElara}
                alt="Evelyn Patiño Laverde"
                fill
                sizes="(max-width: 768px) 160px, 176px"
                className="object-cover object-[50%_18%]"
              />
            </div>
          </div>

          <h2 className="type-lockup type-lockup--glow type-lockup--center mt-6 text-[clamp(2.2rem,4vw,3.4rem)]">
            <span className="type-lockup__impact">Evelyn</span>
            <em className="type-lockup__script">Patiño Laverde</em>
          </h2>
          <p className="mt-1 font-sans text-[10px] tracking-[0.28em] text-[var(--color-gold-soft)]/80 uppercase">
            Pienso en el detalle, construyo como ingeniera
          </p>

          <p className="mx-auto mt-5 max-w-md font-serif text-base leading-relaxed text-[var(--color-cream)]/80">
            Elara Nova es mi voz mística; yo soy quien diseña y programa este portal. Paisa,
            ingeniera con 6 años en banca (Sophos, Bancolombia). Vivo en Europa y trabajo con clientes
            en España y LATAM.
          </p>
          <p className="mx-auto mt-3 max-w-md font-serif text-sm leading-relaxed text-[var(--color-cream)]/55">
            Si buscas una presencia digital que convierta — sitios, apps y experiencias con IA — lo
            que ves aquí es lo que puedo construir para ti.
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
            <ElaraButton href="/portfolio" className="w-full sm:w-auto">
              Ver portafolio de Evelyn
            </ElaraButton>
            <ElaraButton href="/cv" variant="secondary" className="w-full sm:w-auto">
              Ver CV
            </ElaraButton>
          </div>
          <p className="mt-4">
            <a
              href="/linktree"
              className="font-sans text-[10px] tracking-[0.22em] text-[var(--color-gold-soft)]/70 uppercase underline-offset-4 hover:text-[var(--color-gold-bright)] hover:underline"
            >
              Más enlaces · linktree
            </a>
          </p>
        </div>

        <ElaraButton href="/" variant="secondary">
          Volver al portal
        </ElaraButton>
      </section>
    </main>
  )
}
