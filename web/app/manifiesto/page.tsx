import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'Manifiesto · Elara Nova',
  description: 'Cierre emocional e invitación final. Lo que crees, lo creas.',
}

export default function ManifiestoPage() {
  return (
    <ImmersiveScene
      activeNav="/universo"
      bg="/hero/manifiesto-bg.jpg"
      bgAlt="Terraza con luna llena al amanecer, lago y montañas violetas en el horizonte"
      eyebrow="06 · Manifiesto"
      title={
        <>
          Lo que crees,{' '}
          <em style={{ color: 'var(--color-gold-bright)' }}>lo creas</em>.
        </>
      }
      description={
        <>
          Un universo, múltiples experiencias. Si llegaste hasta aquí, ya
          empezaste el camino de regreso a vos.
        </>
      }
      ctaPrimary={{ label: 'Comenzar el viaje', href: '/oraculo' }}
      ctaSecondary={{ label: 'Volver al universo', href: '/universo' }}
    />
  )
}
