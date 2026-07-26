# Assets de producción (`web/public/`)

**Reglas (no romper deploy · ver `docs/brand.md` marca estudio 2026):**

1. **No symlinks** salvo que el destino exista dentro de `public/`.
2. **No `public/hero/`** — fondos Midjourney fantasy prohibidos.
3. **No `.jpg` en `public/images/`** — solo las ilustraciones `.png` que usan las rutas espirituales (`/cursos`, `/oraculo`, `/universo`).
4. **No reintroducir legacy eliminado en julio 2026:** `elara/` (avatar+stickers), `site-nav-ritual.css/js`, `elara-nova-rediseno.css`, `elara-nova-animations.js`, `elara-cursos-productos.css`. El verify falla si reaparecen.
5. **No CSS/JS suelto que estile el app** — los estilos viven en `web/app/globals.css`. Excepción: `elara-ritual.css` y `evelyn-b2b/b2b-nav.css`, que cargan los HTML estáticos de `evelyn-b2b/`.
6. **Fotos Evelyn** (lote editado 26 jul 2026): `evelyn-hero-ciruela.jpg` (hero/trabaja-conmigo), `evelyn-about-escritorio.jpg` (sobre mí), `evelyn-sobre-editorial.jpg` (sobre-elara/perfil), `evelyn-headshot.jpg` (CV/linktree). Cableadas en `web/lib/evelyn-photos.ts`. Prohibido: selfies privadas + serie desk vieja / face-ref / higgs. Producto: `media/servicios/` + `media/recursos/` + slide.
7. Antes de push: `cd web && npm run verify:assets`

**Qué hay:**

| Carpeta / archivo | Uso |
|---|---|
| `_assets/photos/kit-web-real/` | Fotos Evelyn permitidas (editorial, de-pie; + home-hero/about cuando existan) |
| `_assets/photos/slide-proceso-fondo.webp` | Slide immersive |
| `media/servicios/` | Escenas de servicios (chroma) |
| `media/recursos/` | Home Recursos 01/02/03 (producto, sin caras) |
| `brand/firma-elara*.png` | Firma |
| `lead-magnet/7-cartas.pdf` | Lead magnet |
| `evelyn-b2b/` | HTML estático B2B (portfolio, cv, propuestas) |
| `elara-ritual.css` | Solo para los HTML de `evelyn-b2b/` |
| `images/` | 5 ilustraciones en uso por rutas espirituales |
