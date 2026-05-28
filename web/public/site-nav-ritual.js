/**
 * Nav ritual · HTML estático B2B (portfolio, cv, …)
 * Misma estructura que web/components/site-nav.tsx
 */
;(function () {
  const B2B_LINKS = [
    { href: '/linktree', label: '← Enlaces', match: ['/linktree'] },
    { href: '/portfolio', label: 'Portfolio', match: ['/portfolio', '/work'] },
    { href: '/cv', label: 'CV', match: ['/cv'] },
    { href: '/casos-exito', label: 'Clientes felices', match: ['/casos-exito'] },
    { href: '/', label: 'Elara Nova', match: ['/'] },
  ]

  const mount = document.getElementById('site-nav-root')
  if (!mount) return

  const activePath = mount.getAttribute('data-active-path') || window.location.pathname

  function isActive(href, match) {
    if (match && match.length) {
      return match.some((p) => activePath === p || activePath.startsWith(p + '/'))
    }
    return activePath === href
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
  }

  const panelItems = B2B_LINKS.map((item, i) => {
    const active = isActive(item.href, item.match)
    const cls = ['site-nav-ritual__panel-item', active ? 'is-active' : ''].filter(Boolean).join(' ')
    const num = String(i + 1).padStart(2, '0')
  return `<a href="${escapeHtml(item.href)}" class="${cls}"${active ? ' aria-current="page"' : ''}>
      <span>${escapeHtml(item.label)}</span>
      <span class="site-nav-ritual__panel-num">${num}</span>
    </a>`
  }).join('')

  mount.outerHTML = `
<header class="site-nav-ritual" id="site-nav-ritual">
  <a href="/linktree" class="site-nav-ritual__logo">Evelyn Patiño</a>
  <div class="site-nav-ritual__actions">
    <a href="/descubrimiento" class="nav-cta-ritual nav-cta-ritual--gold"><span aria-hidden="true">✦</span> Cotizar proyecto</a>
    <button type="button" class="site-nav-ritual__menu-btn" id="site-nav-menu-btn" aria-label="Abrir menú" aria-expanded="false" aria-controls="site-nav-panel">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<button type="button" class="site-nav-ritual__overlay" id="site-nav-overlay" aria-label="Cerrar menú" hidden></button>
<aside class="site-nav-ritual__panel" id="site-nav-panel" role="dialog" aria-modal="true" aria-label="Menú de navegación" hidden>
  <div class="site-nav-ritual__panel-bg" aria-hidden="true"></div>
  <div class="site-nav-ritual__panel-veil" aria-hidden="true"></div>
  <nav class="site-nav-ritual__panel-nav" aria-label="Menú">${panelItems}</nav>
  <a href="/descubrimiento" class="nav-cta-ritual nav-cta-ritual--gold site-nav-ritual__panel-cta"><span aria-hidden="true">✦</span> Cotizar proyecto</a>
  <p class="site-nav-ritual__panel-tagline" aria-hidden="true">Ingeniera de software · Suiza</p>
</aside>`

  document.body.classList.add('has-site-nav', 'has-b2b-nav')

  const header = document.getElementById('site-nav-ritual')
  const btn = document.getElementById('site-nav-menu-btn')
  const overlay = document.getElementById('site-nav-overlay')
  const panel = document.getElementById('site-nav-panel')

  if (!header || !btn || !overlay || !panel) return

  let open = false

  function setScrolled() {
    header.classList.toggle('is-scrolled', window.scrollY > 48)
  }

  function setOpen(next) {
    open = next
    btn.setAttribute('aria-expanded', open ? 'true' : 'false')
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú')
    overlay.classList.toggle('is-open', open)
    panel.classList.toggle('is-open', open)
    overlay.hidden = !open
    panel.hidden = !open
    document.body.style.overflow = open ? 'hidden' : ''
  }

  function close() {
    setOpen(false)
  }

  btn.addEventListener('click', () => setOpen(!open))
  overlay.addEventListener('click', close)
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', close))

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) close()
  })

  window.addEventListener('scroll', setScrolled, { passive: true })
  setScrolled()
})()
