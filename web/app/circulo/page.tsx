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
      bgAlt="Salón circular con ventanas amplias y mandala compass en el suelo"
      eyebrow="04 · El Círculo"
      titleKicker="El Círculo:"
      title="Manifestemos juntas"
      description="Un espacio íntimo en WhatsApp y Telegram. Rituales diarios, frecuencias y contenido inédito. +10K almas ascendiendo."
      ctaPrimary={{ label: 'Entrar al círculo', href: '/comunidad' }}
      ctaSecondary={{ label: 'Conocer más', href: '/manifiesto' }}
      tagline="Un universo, múltiples experiencias. Una sola tribu."
    />
  )
}
