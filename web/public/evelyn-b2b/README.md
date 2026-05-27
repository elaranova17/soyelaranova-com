# Páginas B2B · Evelyn Patiño

HTML estático servido vía `next.config.ts` rewrites. **Usar siempre rutas absolutas** en `href` e `img src`:

| URL pública | Archivo |
|-------------|---------|
| `/portfolio` | `portfolio.html` |
| `/cv` | `cv.html` |
| `/linktree` | App Next `web/app/linktree` |
| `/casos-exito` | `propuesta.html` (referencias Sama, Ofelia) |
| `/descubrimiento` | `descubrimiento.html` |
| `/portfolio-print` | `portfolio-print.html` |
| `/factura` | `factura-template.html` |
| `/propuesta-val-debarras` | `propuesta-val-debarras.html` (Val-Débarras · ES/FR) |

**Val-Débarras:** idioma por defecto **FR** (cliente suizo). Cambiar con botones FR/ES o `?lang=es` / `?lang=fr`.

## Nav B2B (igual en todas las páginas HTML)

`← Enlaces` · Portfolio · CV · **Conoce a Elara** (→ `/`)

**Plantilla cotización (solo interno, no deploy):** `web/templates/evelyn-b2b/propuesta-template.html` · copia en `assets/biblioteca-b2b/`. Duplicar para cada cliente → publicar solo bajo `/propuesta-{cliente}` (ej. `/propuesta-val-debarras`).

En Next.js (`/linktree`) el mismo patrón vía `SiteNav`.

Fotos: `/_assets/photos/` (en `web/public/_assets/photos/`).

No usar paths relativos — se rompen con las URLs limpias.
