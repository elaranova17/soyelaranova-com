/** Custom editorial SVG icons — no AI brains / robots / circuits */

type IconProps = { className?: string }

export function IconWorkflow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="3" y="5" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="19" y="5" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="19" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 9h6M24 13v4a2 2 0 0 1-2 2h-5M8 13v4a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function IconAgent({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 14h10M11 18h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="5" r="1.5" fill="currentColor" />
      <path d="M16 6.5V8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function IconBrowser({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12h24" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
      <circle cx="12" cy="9" r="1" fill="currentColor" />
      <circle cx="16" cy="9" r="1" fill="currentColor" />
    </svg>
  )
}

export function IconChart({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M5 26V6M5 26h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 20v-5M16 20V10M22 20v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'workflow':
      return <IconWorkflow className={className} />
    case 'agent':
      return <IconAgent className={className} />
    case 'browser':
      return <IconBrowser className={className} />
    case 'chart':
      return <IconChart className={className} />
    default:
      return <IconWorkflow className={className} />
  }
}
