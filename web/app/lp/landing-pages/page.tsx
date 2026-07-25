import type { Metadata } from 'next'
import { LpOfferPage } from '@/components/lp-offer-page'
import { getLpMother, lpOfferMetadata } from '@/lib/lp-offers'

const offer = getLpMother('landing-pages')!

export const metadata: Metadata = lpOfferMetadata(offer)

export default function LpLandingPages() {
  return <LpOfferPage offer={offer} trackingPrefix="lp_landing" />
}
