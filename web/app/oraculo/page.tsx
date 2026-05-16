import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Oráculo · Elara Nova',
  description: 'Tu oráculo místico. Cartas que conversan contigo.',
}

export default function OraculoPage() {
  return (
    <ComingSoonSection
      bg="/hero/codice-bg.jpg"
      eyebrow="Oráculo Íntimo"
      title="Las cartas que conversan contigo."
      description="40 cartas escritas para mujeres en reinvención. Tirada del día gratis, tirada profunda con cuenta."
    />
  )
}
