'use client'

/**
 * Home / — entrada al universo: loader cinematográfico + portal lunar + carta del oráculo.
 */

import { useState } from 'react'
import { CinematicLoader } from '@/components/cinematic-loader'
import { PortalLunarHero } from '@/components/portal-lunar-hero'

export default function HomePage() {
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <>
      <CinematicLoader onComplete={() => setLoaderDone(true)} />
      <PortalLunarHero revealDelay={loaderDone ? 200 : 2700} />
    </>
  )
}
