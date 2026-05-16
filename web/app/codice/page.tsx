import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'Códice Sagrado · Elara Nova',
  description:
    'Tu grimorio de prácticas, rituales y lecturas escritas para vos.',
}

export default function CodicePage() {
  return (
    <ImmersiveScene
      activeNav="/codice"
      bg="/hero/codice-bg.jpg"
      layerBg="/hero/codice-grimorio.jpg"
      bgAlt="Apotecaria mística con cristales y libros antiguos"
      eyebrow="03 · Códice Sagrado"
      titleKicker="Códice:"
      title="El libro que se escribe contigo"
      description="Un grimorio digital de rituales, prácticas guiadas y lecturas íntimas. 28 días de retorno a vos."
      ctaPrimary={{ label: 'Explorar el códice', href: '/oraculo' }}
      ctaSecondary={{ label: 'Mi primer ebook', href: '/lecturas' }}
      tagline="Cartas, oráculos y ebooks que destilan sabiduría ancestral."
    />
  )
}
