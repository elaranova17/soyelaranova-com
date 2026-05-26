# Páginas B2B · Evelyn Patiño

HTML estático servido vía `next.config.ts` rewrites. **Usar siempre rutas absolutas** en `href` e `img src`:

| URL pública | Archivo |
|-------------|---------|
| `/portfolio` | `portfolio.html` |
| `/cv` | `cv.html` |
| `/linktree` | `linktree.html` |
| `/propuesta` | `propuesta-template.html` |
| `/descubrimiento` | `descubrimiento.html` |
| `/portfolio-print` | `portfolio-print.html` |
| `/factura` | `factura-template.html` |

Fotos: `/_assets/photos/` (en `web/public/_assets/photos/`).

No usar `portfolio.html` ni `_assets/...` relativos — se rompen con las URLs limpias.
