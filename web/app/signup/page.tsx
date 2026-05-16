import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Crear cuenta · Elara Nova',
  description: 'Sumate al portal. Sin contraseña, solo tu correo.',
}

export default function SignupPage() {
  return (
    <ComingSoonSection
      bg="/hero/manifiesto-bg.jpg"
      eyebrow="Crear cuenta"
      title="Bienvenida al portal."
      description="Te mandamos un link mágico a tu correo. Sin contraseñas, sin lista de spam. Estamos reconectando el flujo."
    />
  )
}
