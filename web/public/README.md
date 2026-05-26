# Assets de producción (`web/public/`)

**Reglas (no romper deploy):**

1. **No symlinks** salvo que el destino exista dentro de `public/` (el build en Vercel falla si apuntan a carpetas archivadas).
2. **`hero/`** — copia de respaldo en producción; varias rutas en `/images/` dependen de estos JPG. No mover a `06_ARCHIVO/` sin reemplazar los archivos en `/images/` por copias reales.
3. **Fuente de diseño** — nuevos assets primero en `03_VISUAL_KIT/`, luego copiar aquí solo lo que use el sitio.
4. Antes de push: `cd web && npm run verify:assets`
