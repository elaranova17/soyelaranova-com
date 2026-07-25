# Assets de producción (`web/public/`)

**Reglas (no romper deploy · ver `docs/brand.md` marca estudio 2026):**

1. **No symlinks** salvo que el destino exista dentro de `public/`.
2. **No `public/hero/`** — fondos Midjourney fantasy prohibidos.
3. **No `.jpg` en `public/images/`** — solo las ilustraciones `.png` que usan las rutas espirituales (`/cursos`, `/oraculo`, `/universo`).
4. **No reintroducir legacy eliminado en julio 2026:** `elara/` (avatar+stickers), `site-nav-ritual.css/js`, `elara-nova-rediseno.css`, `elara-nova-animations.js`, `elara-cursos-productos.css`. El verify falla si reaparecen.
5. **No CSS/JS suelto que estile el app** — los estilos viven en `web/app/globals.css`. Excepción: `elara-ritual.css` y `evelyn-b2b/b2b-nav.css`, que cargan los HTML estáticos de `evelyn-b2b/`.
6. **Fotos Evelyn** — lote IA 24 jul en `_assets/photos/kit-web-real/` + `evelyn_pro_*`. Prohibido face-ref/higgs. Producto: `media/servicios/` + slide.
7. Antes de push: `cd web && npm run verify:assets`

**Qué hay:**

| Carpeta / archivo | Uso |
|---|---|
| `_assets/photos/kit-web-real/` | Fotos IA Evelyn (identidad, hero, bio, estudio) |
| `_assets/photos/evelyn_pro_*.jpg` | Hero / perfil home |
| `_assets/photos/slide-proceso-fondo.webp` | Slide immersive |
| `media/servicios/` | Escenas de servicios (chroma) |
| `brand/firma-elara*.png` | Firma |
| `lead-magnet/7-cartas.pdf` | Lead magnet |
| `evelyn-b2b/` | HTML estático B2B (portfolio, cv, propuestas) |
| `elara-ritual.css` | Solo para los HTML de `evelyn-b2b/` |
| `images/` | 5 ilustraciones en uso por rutas espirituales |
