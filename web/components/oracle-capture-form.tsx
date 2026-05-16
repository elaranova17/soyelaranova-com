'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ElaraButton } from './elara-button'

type OracleCaptureFormProps = {
  onSuccess?: () => void
}

export function OracleCaptureForm({ onSuccess }: OracleCaptureFormProps) {
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg('')
    setStatus('loading')

    try {
      const res = await fetch('/api/oracle/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, birthDate }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) {
        setErrorMsg(data.error ?? 'No pudimos guardar tu datos. Intentá de nuevo.')
        setStatus('error')
        return
      }
      setStatus('success')
      onSuccess?.()
    } catch {
      setErrorMsg('Algo falló en la conexión. Revisá tu red e intentá otra vez.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-[var(--color-gold)]/40 px-4 py-3 text-center"
        style={{
          background: 'rgba(26,15,61,0.65)',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          color: 'var(--color-cream)',
          fontSize: 15,
        }}
      >
        Listo, hermana. Mañana tu carta te espera en el correo.
      </motion.p>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 rounded-lg border border-[var(--color-gold)]/35 p-4"
      style={{
        background: 'rgba(26,15,61,0.6)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--color-gold-soft)',
        }}
      >
        Recibe tu carta cada mañana
      </p>

      <label className="sr-only" htmlFor="oracle-email">
        Correo electrónico
      </label>
      <input
        id="oracle-email"
        type="email"
        required
        autoComplete="email"
        placeholder="tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-[44px] w-full rounded-md border border-[var(--color-gold)]/40 bg-[var(--color-void)]/80 px-4 py-2.5 outline-none focus-visible:border-[var(--color-gold-bright)]"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-cream)',
          fontSize: 14,
        }}
      />

      <label className="sr-only" htmlFor="oracle-birth">
        Fecha de nacimiento
      </label>
      <input
        id="oracle-birth"
        type="date"
        required
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="min-h-[44px] w-full rounded-md border border-[var(--color-gold)]/40 bg-[var(--color-void)]/80 px-4 py-2.5 outline-none focus-visible:border-[var(--color-gold-bright)]"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-cream)',
          fontSize: 14,
        }}
      />

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 12,
          lineHeight: 1.4,
          color: 'var(--color-pale-lav)',
          opacity: 0.85,
        }}
      >
        Tu fecha nos ayuda a acompañarte mejor cuando llegue tu carta natal.
      </p>

      <ElaraButton type="submit" variant="primary" className="w-full justify-center">
        {status === 'loading' ? 'Guardando…' : 'Quiero mi carta mañana'}
      </ElaraButton>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          color: 'var(--color-pale-lav)',
          opacity: 0.75,
        }}
      >
        Sin spam. Sin venta agresiva. Solo tu ritual.
      </p>

      {status === 'error' && errorMsg ? (
        <p role="alert" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--color-coral)' }}>
          {errorMsg}
        </p>
      ) : null}
    </motion.form>
  )
}
