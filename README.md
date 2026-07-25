# soyelaranova.com

Sitio del estudio **Evelyn Patiño / Elara Nova** — automatizaciones, webs/landings y Google Ads.

**Deploy:** Vercel · Root Directory = `web` · rama `main`.

## Arquitectura

```
soyelaranova-com/
├── web/                 ← App Next.js (única fuente de código desplegable)
│   ├── app/             ← Rutas App Router + API routes
│   ├── components/      ← UI
│   ├── lib/             ← Datos, ofertas, navegación
│   ├── public/          ← Assets de producción
│   ├── templates/       ← HTML B2B internos (no deploy)
│   └── scripts/         ← verify:assets, etc.
├── docs/                ← Marca, estado, oferta, deploy, embudo
├── ops/b2b/             ← PDFs/plantillas freelance (fuera de Vercel)
├── .claude/skills/      ← Skills de agentes Elara
├── .cursor/             ← Reglas Cursor
└── .github/workflows/   ← CI build de web/
```

## Desarrollo

```bash
cd web
npm ci
npm run dev      # http://localhost:3000
npm run build    # verify:assets + build (debe pasar)
```

## Fuentes de verdad

| Qué | Dónde |
|-----|-------|
| Marca / look CapCut | `docs/brand.md` |
| Estado del producto | `docs/ESTADO_PROYECTO.md` |
| Oferta y embudo | `docs/OFERTA_SERVICIOS.md` |
| Deploy + env | `docs/DEPLOY.md` |
| Mapa del repo | `docs/REPO_STRUCTURE.md` |

## Fotos en producción

Lote Evelyn 24 jul:

- IA estudio permitidas: `kit-web-real/evelyn-editorial-mistico.jpg` + `evelyn-de-pie.jpg` (+ nuevos renders vía `docs/prompts/evelyn-home-hero-about.json`)
- Producto: `web/public/media/servicios/` + `slide-proceso-fondo.webp`

Prohibido: selfies privadas (`00-identidad-*`, `evelyn_pro_perfil`, face-ref, buso blanco sin peluca), serie desk blusa crema (`evelyn_pro_hero`, `01-hero`, `02-bio`, `estudio-profesional`), higgs-out, `media/recursos/`, `media/cursos/`.
