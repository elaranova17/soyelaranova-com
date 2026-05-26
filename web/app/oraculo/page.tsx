import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Oráculo',
  description:
    'Sacá tu carta del día. Mensajes de Elara Nova para tu ritual de autoconocimiento.',
}

export default function OraculoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <p className="font-sans text-[10px] tracking-[0.35em] text-[var(--color-gold-soft)] uppercase">
        Oráculo · Elara Nova
      </p>
      <h1 className="mt-4 max-w-lg font-display text-4xl italic text-[var(--color-gold-bright)] md:text-5xl">
        Tu carta del día
      </h1>
      <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed text-[var(--color-cream)]/80">
        El ritual completo está en la entrada del portal. Volvé al inicio, sacá tu carta y dejá tu
        correo para recibir la de mañana.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-purple-deep)]/40 px-8 py-3 font-sans text-[10px] font-semibold tracking-[0.3em] text-[var(--color-cream)] uppercase transition-colors hover:border-[var(--color-gold)]"
      >
        Ir al portal
      </Link>
    </main>
  )
}
