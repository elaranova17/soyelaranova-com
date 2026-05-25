import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Elara',
  description: 'Manifiesto e identidad de Elara Nova. Hermana mayor paisa en tu reinvención.',
}

export default function SobreElaraPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
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
    </main>
  )
}
