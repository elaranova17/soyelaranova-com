# Archivo · legacy assets

Copias de respaldo no referenciadas directamente por imports de código. **No borrar** sin revisar.

## Contenido

| Subcarpeta | Qué es |
|------------|--------|
| `web-public-hero-unused/hero/` | Backup de `web/public/hero/` (20 JPG Midjourney). |

## Importante para deploy

El sitio en producción **sí usa** `web/public/hero/` y varios JPG en `/images/`.  
Si movés assets aquí, antes:

1. Copiar archivos reales a `web/public/images/` (no symlinks).
2. Correr `cd web && npm run verify:assets`.

Ver `web/public/README.md` y `docs/DEPLOY.md`.
