# Go-live · checklist Evelyn (embudo comercial)

Todo lo de código ya está en `main`. Esto es lo que **solo vos** podés activar con cuentas.

## 1 · Stripe (sesión 25 CHF) — 5 min
1. Stripe Dashboard → **Payment Links** → producto “Sesión estratégica” **25 CHF**
2. After payment → redirect: `https://soyelaranova.com/sesion-estrategica/gracias`
3. Copiá el link `https://buy.stripe.com/...`
4. Vercel → Project `soyelaranova-com` → Settings → Environment Variables  
   `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_SESION` = ese link (Production + Preview)
5. Redeploy

## 2 · Calendly (20 min) — 5 min
1. Evento “Sesión estratégica” · 20 min
2. Copiá URL pública
3. Vercel: `NEXT_PUBLIC_CALENDLY_URL_SESION` = esa URL
4. Redeploy

## 3 · GA4 — 5 min
1. Creá propiedad GA4 → Measurement ID `G-XXXXXXXX`
2. Vercel: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXX`
3. En Ads, marcá conversiones: `generate_lead` (gracias pre-análisis), `sesion_pago`, `purchase`/`sesion_booked` (gracias sesión)
4. Redeploy

## 4 · Resend (emails del wizard)
1. `RESEND_API_KEY` + `RESEND_FROM` con dominio verificado
2. `DISCOVERY_NOTIFY_TO=elaranova.17@gmail.com`
3. El lead recibe auto-reply; vos recibís el lead interno

## 5 · Hotmart (cuando el ebook esté)
1. Producto Ciclo Nova → copiá checkout
2. Vercel: `NEXT_PUBLIC_HOTMART_CICLO_NOVA_URL`
3. La LP `/lp/libros/ciclo-nova-del-regreso` usa ese link automáticamente

## 6 · Freelancing (hoy)
1. Malt + Upwork: pegá bios de `docs/KIT_OUTREACH.md` §3.4
2. Link fijo UTM a `/lp/automatizaciones` o `/descubrimiento`
3. Meta: 15 mensajes/día (kit §6)

## 7 · Operación diaria
1. Responder pre-análisis &lt;24 h con `docs/EMAIL_PREANALISIS.md`
2. Sesión → propuesta 1 página el mismo día
3. Follow-up 3 toques (kit §5)

## Verificación rápida
- [ ] `/sesion-estrategica` muestra “Pagar 25 CHF” (no WhatsApp)
- [ ] Tras pagar → `/sesion-estrategica/gracias` → Calendly
- [ ] Wizard → email interno + auto-reply al lead
- [ ] GA4 Realtime ve `page_view` y un CTA
- [ ] Compartir LP en WhatsApp muestra OG con imagen correcta
