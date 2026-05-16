import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'Portal Lunar · Elara Nova',
  description:
    'La puerta abierta hacia adentro. Calendario lunar, carta astral y oráculo íntimo.',
}

export default function PortalPage() {
  return (
    <ImmersiveScene
      activeNav="/"
      bg="/hero/portal-lunar-bg.jpg"
      bgAlt="Portal espiral toroidal con mariposas doradas"
      eyebrow="01 · Portal Lunar"
      titleKicker="Portal Lunar:"
      title="Tu viaje ancestral"
      description="Aquí confluyen tu calendario lunar, tu carta astral y tu oráculo íntimo. El primer paso del viaje de regreso a vos."
      ctaPrimary={{ label: 'Iniciar viaje', href: '/oraculo' }}
      ctaSecondary={{ label: 'Mi calendario', href: '/herramientas' }}
      tagline="Una experiencia inmersiva de bienestar emocional y sabiduría mística."
    />
  )
}
