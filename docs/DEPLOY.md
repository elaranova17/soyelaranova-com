# Deploy · soyelaranova.com

**Plataforma:** Vercel (free tier)  
**Dominio:** soyelaranova.com (Namecheap)  
**Rama de deploy:** `main` only

---

## Configuración Vercel

| Setting | Valor |
|---------|-------|
| Root Directory | **`web`** (obligatorio) |
| Framework | Next.js |
| Build Command | `npm run build` |
| Install Command | `npm ci` o `pnpm install` |
| Output | `.next` (default Next.js) |

**No usar** `builds` legacy en `vercel.json` si Root Directory = `web` (provoca deploy vacío → 404).

Config actual: Root Directory `web` en dashboard + `web/vercel.json` solo con reglas git.

**Assets:** en `web/public/images/` no dejar symlinks a `../hero/` — Vercel falla el build. La carpeta `web/public/hero/` no debe existir; esos fondos viejos están archivados fuera del deploy.

### Dashboard Vercel (verificar manualmente)

1. **Project Settings → General → Root Directory:** `web`
2. **Environment Variables:** ver tabla abajo
3. **Domains:** `soyelaranova.com` + `www` → CNAME a Vercel
4. **Git:** repo `elaranova17/soyelaranova-com`, branch `main`

---

## Variables de entorno

Configurar en Vercel → Settings → Environment Variables (Production + Preview).

| Variable | Requerida | Uso |
|----------|-----------|-----|
| `NEXT_PUBLIC_SUPABASE_URL` | Sí (auth) | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Sí (auth) | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Opcional | Server-side admin (no exponer al client) |
| `RESEND_API_KEY` | Sí (emails) | API Resend para oráculo y diagnósticos |
| `RESEND_FROM` | Recomendado | Ej: `La Aranoa Studio <hola@soyelaranova.com>` |
| `RESEND_NOTIFY_TO` | Opcional | Email interno al recibir suscripción |
| `DISCOVERY_NOTIFY_TO` | Recomendado | Email interno para leads de `/descubrimiento`; fallback: `RESEND_NOTIFY_TO` y luego `elaranova.17@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | Recomendado | `https://soyelaranova.com` |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_SESION` | Sesión 25 CHF | Payment Link Stripe (after_completion → `/sesion-estrategica/gracias`) |
| `NEXT_PUBLIC_CALENDLY_URL_SESION` | Sesión 25 CHF | URL pública Calendly 20 min |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Analytics | GA4 Measurement ID `G-XXXXXXXX` |
| `NEXT_PUBLIC_HOTMART_CICLO_NOVA_URL` | Ebook | Checkout Hotmart Ciclo Nova (opcional) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Si hay captcha | Cloudflare Turnstile |
| `TURNSTILE_SECRET_KEY` | Si hay captcha | Server-side Turnstile |

**Checklist go-live completo:** `docs/GO_LIVE.md`

**Sesión estratégica (setup 5 min):**
1. Stripe → Payment Link → producto “Sesión estratégica” **25 CHF** → redirect a `https://soyelaranova.com/sesion-estrategica/gracias`
2. Calendly → evento 20 min → copiar link
3. Pegar ambos en Vercel env (Production + Preview) y redeploy
4. Hasta que existan, la página usa WhatsApp como fallback
5. GA4: `NEXT_PUBLIC_GA_MEASUREMENT_ID` + conversiones `generate_lead` / `purchase` / `sesion_pago`

**Local dev:** crear `web/.env.local` (gitignored). No commitear secrets.

El build de Next.js pasa sin env vars; runtime de auth/email fallará hasta configurar valores reales.

Nota Resend: mientras la cuenta esté en modo testing, solo puede enviar a `elaranova.17@gmail.com`. Para enviar a otro correo, verificar `soyelaranova.com` en Resend Domains y cambiar `RESEND_FROM` a un remitente del dominio.

---

## Comandos pre-deploy

```bash
cd web
npm ci
npm run verify:assets   # symlinks / hero/ — falla si algo está roto
npm run lint            # debe pasar (0 errors)
npm run build           # prebuild ejecuta verify:assets automáticamente
```

**CI:** push a `main` con cambios en `web/` dispara `.github/workflows/web.yml`.

**CLI:** si desplegás con `vercel`, hacerlo desde `cd web` (proyecto `soyelaranova-com`). No desde la raíz del monorepo.

---

## Push a main

```bash
git status
git add -A
git commit -m "chore: reorganize monorepo structure and deploy docs"
git push origin main
```

Vercel despliega automáticamente al push en `main`. No force-push a `main`.

---

## Portfolio Evelyn (B2B)

Rutas: `/portfolio`, `/cv`, `/linktree`, `/casos-exito`, `/descubrimiento`, `/propuesta-{cliente}` (ej. `/propuesta-val-debarras`). La plantilla genérica **no** es pública (`/propuesta` → `/descubrimiento`).  
Archivos en `web/public/evelyn-b2b/` — enlaces e imágenes deben ser **absolutos** (`/portfolio`, `/_assets/photos/...`). Ver `web/public/evelyn-b2b/README.md`.

`/descubrimiento` ya es una ruta Next activa con `POST /api/discovery`; el HTML viejo redirige a la nueva ruta.

---

## Checklist post-deploy

- [ ] `https://soyelaranova.com` carga home
- [ ] `/oraculo`, `/universo`, `/sobre-elara` responden 200
- [ ] Form email oráculo (`POST /api/oracle/subscribe`) con Resend configurado
- [ ] Form pre-análisis (`POST /api/discovery`) envía email interno + auto-reply al lead y redirige a `/gracias`
- [ ] `/sesion-estrategica` con Stripe/Calendly live (no WhatsApp fallback)
- [ ] GA4 Realtime recibe `page_view`
- [ ] Lighthouse mobile > 85 perf (objetivo CONTEXT)

---

## Rollback

Vercel Dashboard → Deployments → deployment anterior → **Promote to Production**.
