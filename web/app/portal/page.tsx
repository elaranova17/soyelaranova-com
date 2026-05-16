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
      activeNav="/universo"
      bg="/hero/portal-lunar-bg.jpg"
      bgAlt="Portal espiral con mariposas doradas en escena mistica"
      eyebrow="01 · Portal Lunar"
      title={
        <>
          La puerta abierta{' '}
          <em style={{ color: 'var(--color-gold-bright)' }}>hacia adentro</em>.
        </>
      }
      description={
        <>
          Aquí confluyen tu calendario lunar, tu carta astral y tu oráculo
          íntimo. El primer paso del viaje de regreso a vos.
        </>
      }
      ctaPrimary={{ label: 'Entrar al portal', href: '/oraculo' }}
      ctaSecondary={{ label: 'Ver mi calendario', href: '/calendario' }}
    />
  )
}
