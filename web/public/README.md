# Assets de producción (`web/public/`)

**Reglas (no romper deploy):**

1. **No symlinks** salvo que el destino exista dentro de `public/`.
2. **No `public/hero/`** — fondos Midjourney prohibidos (`06_ARCHIVO/web-public-hero-fantasy-deprecated/`).
3. **No `.jpg` en `public/images/`** — solo ilustraciones Pixar/Encanto (`.png`). JPG viejos en `06_ARCHIVO/web-images-fantasy-jpg-deprecated/`.
4. **B2B Evelyn** — `/_assets/photos/` y HTML en `evelyn-b2b/` (fotos reales, no Elara).
5. Antes de push: `cd web && npm run verify:assets`
