import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'Lecturas · Elara Nova',
  description: 'Lecturas personales y artesanales. Yo misma te tiro las cartas.',
}

export default function LecturasPage() {
  return (
    <ImmersiveScene
      activeNav="/lecturas"
      bg="/hero/atelier-libro.jpg"
      bgAlt="Libro abierto con esfera de cristal bajo arco con luna llena"
      eyebrow="Lecturas Personales"
      titleKicker="Lecturas:"
      title="Te tiro las cartas a mano"
      description="Una lectura íntima, sin algoritmos. Mando tu tirada en PDF + audio con la voz de Elara contando lo que vi."
      ctaPrimary={{ label: 'Pedir mi lectura', href: '/codice' }}
      ctaSecondary={{ label: 'Ver oráculo gratis', href: '/oraculo' }}
      tagline="Cada tirada es única. Cada palabra, escrita para tu momento."
    />
  )
}
