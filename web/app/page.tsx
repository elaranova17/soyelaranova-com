'use client'

/**
 * Home / — la entrada al universo.
 * Orquesta el CinematicLoader y, cuando termina, revela el PortalLunarHero.
 */

import { useState } from 'react'
import { CinematicLoader } from '@/components/cinematic-loader'
import { PortalLunarHero } from '@/components/portal-lunar-hero'

export default function Page() {
  const [loaderDone, setLoaderDone] = useState(false)
  return (
    <>
      <CinematicLoader onComplete={() => setLoaderDone(true)} />
      <PortalLunarHero revealDelay={loaderDone ? 200 : 2700} />
    </>
  )
}
