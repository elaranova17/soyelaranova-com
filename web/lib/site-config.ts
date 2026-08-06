import siteConfigJson from '@/content/site-config.json'

export type ServicePreviewCard = {
  number: string
  title: string
  description: string
  icon: 'workflow' | 'agent' | 'browser' | 'chart' | string
  href: string
}

export type ServicePreviewSection = {
  id: string
  component: string
  theme: string
  heading: {
    eyebrow: string
    title: string
    accentWords: string[]
  }
  cards: ServicePreviewCard[]
  cta: { label: string; href: string }
}

export const siteConfig = siteConfigJson

export function getHomeSection<T = unknown>(id: string): T | null {
  const home = siteConfig.pages.home
  const section = home.sections.find((item) => item.id === id)
  return (section as T | undefined) ?? null
}
