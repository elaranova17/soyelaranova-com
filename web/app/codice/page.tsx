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
      bgAlt="Apotecaria mistica con cristales y libros antiguos"
      eyebrow="03 · Códice Sagrado"
      title={
        <>
          El libro que se{' '}
          <em style={{ color: 'var(--color-gold-bright)' }}>escribe contigo</em>.
        </>
      }
      description={
        <>
          Un grimorio digital de rituales, prácticas guiadas y lecturas
          íntimas. 28 días de retorno a vos.
        </>
      }
      ctaPrimary={{ label: 'Explorar el códice', href: '/oraculo' }}
      ctaSecondary={{ label: 'Ver mi primer ebook', href: '/lecturas' }}
    />
  )
}
