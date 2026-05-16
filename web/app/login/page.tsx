import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Entrar · Elara Nova',
  description: 'Volvé al portal. Te mandamos un link mágico a tu correo.',
}

export default function LoginPage() {
  return (
    <ComingSoonSection
      bg="/hero/manifiesto-bg.jpg"
      eyebrow="Volver a Elara Nova"
      title="Te esperamos."
      description="Acceso con link mágico al correo. Estamos reconectando el flujo — pronto disponible."
    />
  )
}
