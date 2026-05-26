# Archivo · legacy assets

Copias de respaldo no referenciadas directamente por imports de código. **No borrar** sin revisar.

## Contenido

| Subcarpeta | Qué es |
|------------|--------|
| `web-public-hero-unused/hero/` | Backup histórico (JPG Midjourney). |
| `web-public-hero-fantasy-deprecated/` | **Prohibidos en producción** — portal-lago, manifiesto-bg, etc. (20 JPG). |

## Importante para deploy

El sitio activo **no** debe tener `web/public/hero/`.  
Si restaurás assets desde archivo:

1. No volver a servir fondos fantasy en home ni rutas Elara.
2. Copiar solo ilustraciones aprobadas a `web/public/images/` (archivos reales, no symlinks).
3. Correr `cd web && npm run verify:assets`.

Ver `web/public/README.md` y `docs/DEPLOY.md`.
