import type { Metadata } from 'next'
import { LpOfferPage } from '@/components/lp-offer-page'
import { getLpMother } from '@/lib/lp-offers'

const offer = getLpMother('paginas-web')!

export const metadata: Metadata = {
  title: offer.titlePlain,
  description: offer.description,
  robots: { index: false, follow: false },
}

export default function LpPaginasWeb() {
  return <LpOfferPage offer={offer} trackingPrefix="lp_web" />
}
