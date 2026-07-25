import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LpBookPage } from '@/components/lp-book-page'
import { bookOfferMetadata, getBookOffer, listBookSlugs } from '@/lib/book-offers'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return listBookSlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const book = getBookOffer(slug)
  if (!book) return { title: 'Libro no encontrado' }
  return bookOfferMetadata(book)
}

export default async function LpLibroPage({ params }: Props) {
  const { slug } = await params
  const book = getBookOffer(slug)
  if (!book) notFound()
  return <LpBookPage book={book} />
}
