import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'Herramientas Astrales · Elara Nova',
  description: 'Carta astral, tránsitos y mapas natales. Tu cielo en mis manos.',
}

export default function HerramientasPage() {
  return (
    <ImmersiveScene
      activeNav="/herramientas"
      bg="/hero/astrologo-escritorio.jpg"
      bgAlt="Escritorio de astrólogo con telescopio, esfera de cristal y mapas astrales"
      eyebrow="Herramientas Astrales"
      titleKicker="Herramientas:"
      title="Tu cielo en el momento exacto"
      description="Carta natal completa, tránsitos planetarios y mapas relacionales. PDF artesanal + lectura en audio."
      ctaPrimary={{ label: 'Calcular mi carta', href: '/archivo-astral' }}
      ctaSecondary={{ label: 'Ver mis tránsitos', href: '/lecturas' }}
      tagline="La astrología no predice — describe el clima de tu alma."
    />
  )
}
