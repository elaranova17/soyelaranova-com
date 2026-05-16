'use client'

import { useEffect, useState } from 'react'
import { pickOracleMessage, type OracleMessage } from '@/lib/oracle-messages'
import { OracleCard } from './oracle-card'
import { OracleCaptureForm } from './oracle-capture-form'

export type OracleRitualPanelProps = {
  /** Incrementar desde el CTA del hero para voltear la carta */
  drawSignal?: number
}

export function OracleRitualPanel({ drawSignal = 0 }: OracleRitualPanelProps) {
  const [phase, setPhase] = useState<'idle' | 'drawing' | 'revealed'>('idle')
  const [message, setMessage] = useState<OracleMessage | null>(null)

  useEffect(() => {
    if (drawSignal < 1) return
    setMessage(pickOracleMessage())
    setPhase('drawing')
  }, [drawSignal])

  function handleFlipComplete() {
    setPhase('revealed')
  }

  return (
    <div className="flex w-full max-w-[320px] flex-col items-center gap-5">
      <OracleCard
        flipped={phase !== 'idle'}
        message={message}
        onFlipComplete={phase === 'drawing' ? handleFlipComplete : undefined}
      />
      {phase === 'revealed' ? <OracleCaptureForm /> : null}
    </div>
  )
}
