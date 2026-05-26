# Assets de producción (`web/public/`)

**Reglas (no romper deploy):**

1. **No symlinks** salvo que el destino exista dentro de `public/` (el build en Vercel falla si apuntan a carpetas archivadas).
2. **No `public/hero/`** — fondos Midjourney / fantasy están prohibidos en el sitio activo. Copias en `06_ARCHIVO/web-public-hero-fantasy-deprecated/`.
3. **Rutas del sitio** — solo `/images/` (archivos reales), `/_assets/` (B2B Evelyn) y lo que importe el código.
4. **Fuente de diseño** — nuevos assets primero en `03_VISUAL_KIT/`, luego copiar aquí solo lo que use el sitio.
5. Antes de push: `cd web && npm run verify:assets`
