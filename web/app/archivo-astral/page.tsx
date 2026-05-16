import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'Archivo Astral · Elara Nova',
  description:
    'Tu mapa natal guardado, tus tránsitos del mes, tu historia astral.',
}

export default function ArchivoAstralPage() {
  return (
    <ImmersiveScene
      activeNav="/archivo-astral"
      bg="/hero/archivo-astral-bg.jpg"
      bgAlt="Observatorio místico con telescopio, mapas astrales y mandala compass"
      eyebrow="02 · Archivo Astral"
      titleKicker="Archivo Astral:"
      title="Tu historia en el cielo"
      description="Tu carta natal queda guardada en tu cuenta. Tránsitos del mes, retornos solares y mapas comparativos."
      ctaPrimary={{ label: 'Calcular mi carta', href: '/lecturas' }}
      ctaSecondary={{ label: 'Ver tránsitos', href: '/herramientas' }}
      tagline="El mapa no es el territorio. Pero a veces, es el camino."
    />
  )
}
