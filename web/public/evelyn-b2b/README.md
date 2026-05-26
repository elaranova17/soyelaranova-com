# Páginas B2B · Evelyn Patiño

HTML estático servido vía `next.config.ts` rewrites. **Usar siempre rutas absolutas** en `href` e `img src`:

| URL pública | Archivo |
|-------------|---------|
| `/portfolio` | `portfolio.html` |
| `/cv` | `cv.html` |
| `/linktree` | App Next `web/app/linktree` |
| `/propuesta` | `propuesta-template.html` |
| `/casos-exito` | `propuesta.html` (referencias Sama, Ofelia) |
| `/descubrimiento` | `descubrimiento.html` |
| `/portfolio-print` | `portfolio-print.html` |
| `/factura` | `factura-template.html` |

## Nav B2B (igual en todas las páginas HTML)

`← Enlaces` · Portfolio · CV · Propuesta · **Conoce a Elara** (→ `/`)

En Next.js (`/linktree`) el mismo patrón vía `SiteNav`.

Fotos: `/_assets/photos/` (en `web/public/_assets/photos/`).

No usar paths relativos — se rompen con las URLs limpias.
