# Mapa del repositorio · soyelaranova.com

**Actualizado:** 26 mayo 2026

## Propósito de cada carpeta

| Carpeta | Rol | Fuente de verdad |
|---------|-----|------------------|
| `web/` | App Next.js desplegable en Vercel | ✅ Código activo |
| `docs/` | Marca, finanzas, estado técnico, deploy | ✅ Docs agentes |
| `CONTEXT_CURSOR.md` | Brief lockeado (stack, rutas v1, fases) | ✅ Raíz del repo |
| `01_LANZAMIENTO/` | Ops de lanzamiento (checklists, bios, calendario) | Marketing ops |
| `02_CONTENIDO_MAESTRO/` | Copy, PDFs ebook, Codice Tierno, landing copy | Contenido |
| `03_VISUAL_KIT/` | Logos, stickers, avatar, assets sociales | Diseño |
| `04_PRODUCCION_REEL/` | Proyectos CapCut, reels, audios | Producción |
| `05_DOCS_ESTRATEGIA/` | Briefs largos, filosofía hero, plan HTML | Estrategia |
| `06_ARCHIVO/` | Legacy no referenciado en código | Archivo |
| `assets/b2b/` | Portfolio PDF, brochure, plantilla propuesta | Evelyn B2B |
| `api/` | Hono healthcheck (opcional, no en Vercel) | Backend stub |
| `ebooks/` | Manuscritos fuente (Ciclo Nova) | Producto digital |

## Duplicados eliminados o consolidados (26 mayo 2026)

| Acción | Paths |
|--------|-------|
| **Eliminado** (copia exacta del brief) | `web/CONTEXT_CURSOR.md`, `05_DOCS_ESTRATEGIA/CONTEXT_CURSOR.md` → canónico: raíz `CONTEXT_CURSOR.md` |
| **Archivado** (no referenciado en código) | `web/public/hero/` → `06_ARCHIVO/web-public-hero-unused/hero/` |
| **Movido** (desorden en raíz) | `BRIEF_DISENO_WEB_ELARA_NOVA.md` → `05_DOCS_ESTRATEGIA/` |
| **Movido** | `STATUS_28ABR_Y_PLAN_7_REELS.md`, `PENDIENTES_TABLET_TODO.md` → `01_LANZAMIENTO/` |
| **Movido** | B2B PDFs/DOCX raíz → `assets/b2b/` |

## Duplicados intencionales (NO borrar)

Copias byte-idénticas entre `03_VISUAL_KIT/` y `web/public/` — el kit es fuente; public es deploy:

- `03_VISUAL_KIT/Imagenes/00_Elara_Avatar_Canon.jpg` ↔ `web/public/elara/avatar/elara.jpg`
- `03_VISUAL_KIT/Logo_V7_Firma/FIRMA_HD_*.png` ↔ `web/public/brand/firma-elara*.png`
- `03_VISUAL_KIT/Imagenes/Listo_para_subir/06_LEAD_MAGNET_7_Dias_de_Elara.pdf` ↔ `web/public/lead-magnet/7-cartas.pdf`
- `03_VISUAL_KIT/Imagenes/Evelyn_pro/*` ↔ `web/public/_assets/photos/*`

## PDFs lead magnet (versiones distintas)

| Archivo | Tamaño | Uso |
|---------|--------|-----|
| `02_CONTENIDO_MAESTRO/Los_7_Dias_de_Elara.pdf` | ~1.1 MB | Versión completa fuente |
| `web/public/lead-magnet/7-cartas.pdf` | ~58 KB | Versión web / descarga sitio |
| `02_CONTENIDO_MAESTRO/Lead_Magnet_Codice_Tierno_v10.pdf` | — | Codice Tierno v10 |
| `02_CONTENIDO_MAESTRO/Codice_Tierno_v11/04_Versiones_Anteriores/*.pdf` | — | Histórico v8–v9 |

## Duplicados internos web/public (referenciados)

Varias imágenes en `/images/` comparten bytes (mismo asset, distintos nombres en `site-images.ts`). No se eliminaron — el código referencia rutas distintas. Ver auditoría MD5 en commit message / notas de reorganización.

## Legacy no tocado

- `netlify.toml` — config Netlify antigua; deploy activo es **Vercel**
- `04_PRODUCCION_REEL/**/proyecto_capcut/` — duplicados internos CapCut (draft backups)
- Rutas fuera de v1 en `web/app/` (`/login`, `/amazon`, `/cuenta`, etc.) — fuera de scope de esta reorganización

## Regla para agentes

1. Editar brief solo en `CONTEXT_CURSOR.md` (raíz).
2. Assets nuevos → `03_VISUAL_KIT/` primero; copiar a `web/public/` solo lo que el sitio use.
3. No crear más copias de markdown estratégico — enlazar al doc canónico.
