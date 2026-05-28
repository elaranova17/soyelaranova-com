import type { Metadata } from 'next'
import Image from 'next/image'
import { ElaraButton } from '@/components/elara-button'

export const metadata: Metadata = {
  title: 'Oráculo',
  description:
    'Mensajes de Elara Nova para tu ritual de autoconocimiento.',
}

export default function OraculoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 text-[var(--color-cream)]">
      <Image
        src="/images/oraculo-maestra.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-45"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-void)] via-[var(--color-purple-night)]/88 to-[var(--color-purple-night)]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-void)]/35 via-transparent to-[var(--color-void)]" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-5xl items-center">
        <div className="max-w-xl">
          <p className="font-sans text-[10px] tracking-[0.35em] text-[var(--color-gold-soft)] uppercase">
            Oráculo · Elara Nova
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] text-[var(--color-cream)] md:text-7xl">
            Una señal para volver a vos.
          </h1>
          <p className="mt-6 max-w-lg font-serif text-xl italic leading-relaxed text-[var(--color-pale-lav)]/78">
            Este espacio será el ritual central de Elara Nova: mensajes íntimos, guía suave y una
            experiencia diseñada para que quieras regresar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ElaraButton href="/#contacto" className="w-full sm:w-auto">
              Recibir novedades
            </ElaraButton>
            <ElaraButton href="/" variant="secondary" className="w-full sm:w-auto">
              Volver al portal
            </ElaraButton>
          </div>
        </div>
      </section>
    </main>
  )
}
