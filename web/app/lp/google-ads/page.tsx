import type { Metadata } from 'next'
import { LpOfferPage } from '@/components/lp-offer-page'
import { getLpMother } from '@/lib/lp-offers'

const offer = getLpMother('google-ads')!

export const metadata: Metadata = {
  title: offer.titlePlain,
  description: offer.description,
  robots: { index: false, follow: false },
}

export default function LpGoogleAds() {
  return <LpOfferPage offer={offer} trackingPrefix="lp_ads" />
}
