import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'El Círculo · Elara Nova',
  description:
    'Mujeres en reinvención manifestando juntas. WhatsApp + Telegram.',
}

export default function CirculoPage() {
  return (
    <ImmersiveScene
      activeNav="/circulo"
      bg="/hero/circulo-bg.jpg"
      bgAlt="Salon circular con ventanas amplias y mandala compass en el suelo"
      eyebrow="04 · El Círculo"
      title={
        <>
          Únete al círculo.{' '}
          <em style={{ color: 'var(--color-gold-bright)' }}>
            Manifestemos juntas
          </em>
          .
        </>
      }
      description={
        <>
          Un espacio íntimo en WhatsApp y Telegram. Rituales diarios,
          frecuencias y contenido inédito. +10K almas ascendiendo.
        </>
      }
      ctaPrimary={{ label: 'Entrar al círculo', href: '/comunidad' }}
      ctaSecondary={{ label: 'Conocer más', href: '/manifiesto' }}
    />
  )
}
