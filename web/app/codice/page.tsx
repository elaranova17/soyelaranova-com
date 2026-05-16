import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Códice Sagrado · Elara Nova',
  description: 'Tu grimorio de prácticas, rituales y lecturas escritas para vos.',
}

export default function CodicePage() {
  return (
    <ComingSoonSection
      bg="/hero/codice-bg.jpg"
      eyebrow="Códice Sagrado"
      title="El libro que se escribe contigo."
      description="Un grimorio digital de rituales, prácticas guiadas y lecturas íntimas. 28 días de retorno a vos."
    />
  )
}
