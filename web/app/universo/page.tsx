import type { Metadata } from 'next'
import Image from 'next/image'
import { ElaraButton } from '@/components/elara-button'

export const metadata: Metadata = {
  title: 'Universo',
  description: 'Recursos digitales y ebooks de Elara Nova para tu camino de autoconocimiento.',
}

export default function UniversoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 text-[var(--color-cream)]">
      <Image
        src="/images/ciclos-lunares-rituales.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-44"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-void)] via-[var(--color-purple-night)]/90 to-[var(--color-purple-night)]/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-void)]/30 via-transparent to-[var(--color-void)]" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-5xl items-center">
        <div className="max-w-xl">
          <p className="font-sans text-[10px] tracking-[0.35em] text-[var(--color-gold-soft)] uppercase">
            Universo · Elara Nova
          </p>
          <h1 className="type-lockup type-lockup--glow mt-4 text-[clamp(3rem,7vw,5.5rem)]">
            <span className="type-lockup__impact">Recursos</span>
            <em className="type-lockup__script">para volver a ti</em>
          </h1>
          <p className="mt-6 max-w-lg font-serif text-xl italic leading-relaxed text-[var(--color-pale-lav)]/78">
            Ebooks, rituales y materiales digitales para acompañarte sin ruido. La tienda se está
            abriendo con calma, cuidado y dirección.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ElaraButton href="/#recursos" className="w-full sm:w-auto">
              Ver recursos
            </ElaraButton>
            <ElaraButton href="/descubrimiento" variant="secondary" className="w-full sm:w-auto">
              Recibir novedades
            </ElaraButton>
          </div>
        </div>
      </section>
    </main>
  )
}
