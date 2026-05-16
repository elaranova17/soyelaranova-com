import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Lecturas · Elara Nova',
  description: 'Lecturas personales y artesanales. Yo misma te tiro las cartas.',
}

export default function LecturasPage() {
  return (
    <ComingSoonSection
      bg="/hero/codice-bg.jpg"
      eyebrow="Lecturas Personales"
      title="Te tiro las cartas a mano."
      description="Una lectura íntima, sin algoritmos. Mando tu tirada en PDF + audio con la voz de Elara contando lo que vi."
    />
  )
}
