import Image from 'next/image'
import Link from 'next/link'
import { siteImages } from '@/lib/site-images'

type CourseBadgeVariant = 'gold' | 'purple'

type CourseCard = {
  id: string
  badge: string
  badgeVariant: CourseBadgeVariant
  title: string
  weeks: number
  lessons: number
  price: number
  imageSrc: string
}

type BenefitIcon = 'pace' | 'quality' | 'community'

type BenefitItem = {
  id: string
  icon: BenefitIcon
  label: string
  description: string
}

type MembershipBullet = {
  id: string
  label: string
}

const FEATURED_COURSES: readonly CourseCard[] = [
  {
    id: 'astrologia',
    badge: 'MÁS POPULAR',
    badgeVariant: 'gold',
    title: 'Astrología Práctica',
    weeks: 8,
    lessons: 32,
    price: 97,
    imageSrc: siteImages.cursos.astrologia,
  },
  {
    id: 'oraculo',
    badge: 'NUEVO',
    badgeVariant: 'purple',
    title: 'Oráculo Intuitivo',
    weeks: 6,
    lessons: 24,
    price: 77,
    imageSrc: siteImages.cursos.oraculo,
  },
  {
    id: 'ciclos',
    badge: 'MÁS ELEGIDO',
    badgeVariant: 'gold',
    title: 'Ciclos Lunares & Rituales',
    weeks: 4,
    lessons: 16,
    price: 57,
    imageSrc: siteImages.cursos.ciclos,
  },
  {
    id: 'sanar',
    badge: 'PARA VOS',
    badgeVariant: 'purple',
    title: 'Sanar para volver a vos',
    weeks: 7,
    lessons: 28,
    price: 87,
    imageSrc: siteImages.cursos.sanar,
  },
] as const

const BENEFITS: readonly BenefitItem[] = [
  {
    id: 'ritmo',
    icon: 'pace',
    label: 'A tu ritmo',
    description: 'Accedé cuando quieras, desde donde estés. Sin presión.',
  },
  {
    id: 'calidad',
    icon: 'quality',
    label: 'Contenido real',
    description: 'Material exclusivo con propósito. Nada de relleno.',
  },
  {
    id: 'guia',
    icon: 'community',
    label: 'Comunidad viva',
    description: 'No estudiás sola. El Círculo te acompaña en cada paso.',
  },
] as const

const MEMBERSHIP_BULLETS: readonly MembershipBullet[] = [
  { id: 'cursos', label: 'Acceso a todos los cursos' },
  { id: 'talleres', label: 'Clases en vivo cada mes' },
  { id: 'comunidad', label: 'Comunidad privada activa' },
  { id: 'recursos', label: 'Recursos descargables exclusivos' },
] as const

const BADGE_CLASSES: Record<CourseBadgeVariant, string> = {
  gold: 'bg-[#C9A84C] text-black',
  purple: 'bg-[#7c3aed] text-white',
}

function BenefitIconSvg({ kind }: { kind: BenefitIcon }) {
  const props = {
    className: 'mt-0.5 h-6 w-6 shrink-0 text-[#C9A84C]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (kind) {
    case 'pace':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'quality':
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8M8 11h6" />
        </svg>
      )
    case 'community':
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
  }
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-[#C9A84C]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function CursosHeroHeader() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p className="text-sm tracking-[0.3em] text-[#C9A84C] uppercase">
          ✦ Cursos y Talleres ✦
        </p>
        <h2 className="mt-3 font-serif text-4xl font-bold text-[#f0eafa]">
          Aprendé. Integrá. Transformate.
        </h2>
        <p className="mt-3 max-w-lg text-[#9080b0]">
          Formaciones online para que te entiendas a fondo — y lo apliques
          en tu vida real.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/#cursos"
            className="inline-flex items-center rounded-full bg-[#7c3aed] px-8 py-3.5 text-sm font-semibold tracking-wide text-white uppercase"
          >
            Explorá los cursos →
          </Link>
          <Link
            href="/#cursos"
            className="inline-flex items-center rounded-full border border-[#C9A84C]/60 px-8 py-3.5 text-sm tracking-wide text-[#C9A84C] uppercase"
          >
            ¿Cómo funciona?
          </Link>
        </div>
      </div>

      <div className="relative h-72 overflow-hidden rounded-2xl">
        <Image
          src={siteImages.cursos.header}
          alt="Elara Nova — Cursos y formaciones"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[#06040d]/30" />
      </div>
    </div>
  )
}

function BenefitsStrip() {
  return (
    <div className="mt-12 flex flex-col gap-8 border-y border-[#2d1f4e] py-8 md:flex-row md:gap-8">
      {BENEFITS.map((benefit) => (
        <div key={benefit.id} className="flex flex-1 items-start gap-3">
          <BenefitIconSvg kind={benefit.icon} />
          <div>
            <p className="text-sm font-medium text-[#e8e0f0]">{benefit.label}</p>
            <p className="mt-1 text-sm text-[#9080b0]">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturedCourseCard({ course }: { course: CourseCard }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#2d1f4e] bg-[#110d24] hover:border-[#C9A84C]/40">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.imageSrc}
          alt={course.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-[#06040d]/20" />
        <span
          className={`absolute top-3 left-3 rounded-full px-2 py-0.5 text-xs font-semibold ${BADGE_CLASSES[course.badgeVariant]}`}
        >
          {course.badge}
        </span>
      </div>
      <div className="p-5">
        <h3 className="mb-3 text-sm font-semibold text-[#e8e0f0]">{course.title}</h3>
        <p className="mb-3 text-xs text-[#9080b0]">
          {course.weeks} sem · {course.lessons} lec
        </p>
        <p className="text-lg font-bold text-[#C9A84C]">${course.price} USD</p>
      </div>
    </article>
  )
}

function MembershipBanner() {
  return (
    <div className="mt-12 rounded-2xl border border-[#2d1f4e] bg-[#13092a] p-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs tracking-widest text-[#C9A84C] uppercase">
            Membresía Elara Nova
          </p>
          <h3 className="mt-2 font-serif text-3xl text-[#f0eafa]">
            Aprendé sin límites
          </h3>
          <p className="mt-2 max-w-sm text-[#9080b0]">
            Formación, comunidad y recursos para las que eligieron ir más
            adentro.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {MEMBERSHIP_BULLETS.map((bullet) => (
              <li key={bullet.id} className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-sm text-[#9080b0]">{bullet.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start lg:items-end">
          <p className="text-xs text-[#9080b0] uppercase">Desde</p>
          <p className="text-4xl font-bold text-[#f0eafa]">$17</p>
          <p className="text-sm text-[#9080b0]">USD / mes</p>
          <Link
            href="/#circulo"
            className="mt-4 inline-flex items-center rounded-full bg-[#C9A84C] px-8 py-3 text-sm font-bold tracking-wide text-black uppercase"
          >
            Unite ahora ✦
          </Link>
        </div>
      </div>
    </div>
  )
}

export function CursosSection() {
  return (
    <section
      id="cursos-talleres"
      className="bg-[#0a0812] px-6 py-20 md:px-16"
      aria-labelledby="cursos-heading"
    >
      <div className="mx-auto max-w-7xl">
        <CursosHeroHeader />
        <BenefitsStrip />

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3
            id="cursos-heading"
            className="text-sm tracking-widest text-[#e8e0f0] uppercase"
          >
            Cursos destacados
          </h3>
          <Link
            href="/#cursos"
            className="text-sm text-[#C9A84C]"
          >
            Ver todos los cursos →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_COURSES.map((course) => (
            <FeaturedCourseCard key={course.id} course={course} />
          ))}
        </div>

        <MembershipBanner />
      </div>
    </section>
  )
}
