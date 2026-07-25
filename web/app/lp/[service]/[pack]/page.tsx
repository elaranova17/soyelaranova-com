import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LpOfferPage } from '@/components/lp-offer-page'
import { getLpPack, listLpPackParams } from '@/lib/lp-offers'

type Props = {
  params: Promise<{ service: string; pack: string }>
}

export function generateStaticParams() {
  return listLpPackParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service, pack } = await params
  const offer = getLpPack(service, pack)
  if (!offer) return { title: 'Oferta no encontrada' }
  return {
    title: offer.titlePlain,
    description: offer.description,
    robots: { index: false, follow: false },
  }
}

export default async function LpPackPage({ params }: Props) {
  const { service, pack } = await params
  const offer = getLpPack(service, pack)
  if (!offer) notFound()
  return <LpOfferPage offer={offer} trackingPrefix={`lp_${service}_${pack}`} />
}
