import type { Metadata } from 'next'
import { ImmersiveScene } from '@/components/immersive-scene'

export const metadata: Metadata = {
  title: 'Oráculo · Elara Nova',
  description: 'Tu oráculo místico. Cartas que conversan contigo.',
}

export default function OraculoPage() {
  return (
    <ImmersiveScene
      activeNav="/oraculo"
      bg="/hero/codice-grimorio.jpg"
      bgAlt="Grimorio antiguo con cristales amatista y faroles encendidos"
      eyebrow="Oráculo Íntimo"
      titleKicker="Oráculo:"
      title="Las cartas que conversan contigo"
      description="40 cartas escritas para mujeres en reinvención. Tirada del día gratis, tirada profunda con cuenta."
      ctaPrimary={{ label: 'Tirar carta del día', href: '/lecturas' }}
      ctaSecondary={{ label: 'Ver el mazo completo', href: '/codice' }}
      tagline="Una pregunta, una carta. La respuesta ya estaba en vos."
    />
  )
}
