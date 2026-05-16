import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'Atelier Creativo · Elara Nova',
  description:
    'Ingeniería con alma. Mi taller B2B donde el código y la magia convergen.',
}

export default function AtelierPage() {
  return (
    <ImmersiveScene
      activeNav="/atelier"
      bg="/hero/atelier-bg.jpg"
      layerBg="/hero/atelier-libro.jpg"
      bgAlt="Atelier místico con máquina de escribir y libro de cartas astrales bajo la luna"
      eyebrow="05 · Atelier Creativo"
      titleKicker="Atelier:"
      title="Ingeniería con alma"
      description="Estrategia y desarrollo web por Evelyn Patiño Laverde. Donde el alto rendimiento de Node.js se fusiona con la sabiduría de la Nueva Era."
      ctaPrimary={{ label: 'Ver portafolio', href: '/portfolio' }}
      ctaSecondary={{ label: 'Solicitar propuesta', href: '/evelyn' }}
      tagline="Cada proyecto es un ritual. Cada línea de código, una intención."
    />
  )
}
