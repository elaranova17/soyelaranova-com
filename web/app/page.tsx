import Image from 'next/image'

export default function Page() {
  return (
    <main
      aria-label="Elara Nova · Próximamente"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-void)' }}
    >
      <Image
        src="/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 50%, transparent 30%, rgba(10,0,16,0.7) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-gold-soft)',
            fontSize: 11,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          — Elara Nova —
        </span>

        <h1
          className="max-w-3xl text-4xl md:text-6xl"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: 'var(--color-cream)',
            lineHeight: 1.05,
            textShadow:
              '0 0 36px rgba(242,213,120,0.45), 0 4px 18px rgba(0,0,0,0.85)',
          }}
        >
          Mira todo lo que siempre fuiste{' '}
          <em style={{ color: 'var(--color-gold-bright)' }}>capaz de ser</em>.
        </h1>

        <p
          className="max-w-md"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-gold-soft)',
            fontSize: 18,
            lineHeight: 1.55,
            opacity: 0.92,
            textShadow: '0 0 12px rgba(0,0,0,0.85)',
          }}
        >
          Un oráculo, un calendario lunar, un círculo. Pronto en el portal.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-gold-soft)',
            fontSize: 11,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            opacity: 0.7,
            marginTop: 24,
          }}
        >
          Próximamente
        </p>
      </div>
    </main>
  )
}
