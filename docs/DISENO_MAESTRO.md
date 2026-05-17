# Diseño maestro · Mejor versión soyelaranova.com

**Actualizado:** 16 mayo 2026  
**Skills:** `.claude/skills/elara-designer` · `elara-copywriter` · `elara-ui-master`

---

## Diagnóstico honesto

Tenemos **atmósfera** (fondos Midjourney, inmersión, motion) pero falta **diseño de producto**:

| Lo que se siente hoy | Lo que debe sentirse (CONTEXT) |
|----------------------|--------------------------------|
| "Portal de astrología / viaje ancestral" | "Umbral místico paisa + carta del día" |
| CTAs genéricos ("Iniciar viaje") | **"Saca tu carta del día"** |
| Copy sin frase ancla | *Mira todo lo que siempre fuiste capaz de ser* |
| `/login` visible en header | Entrar secundario o oculto en v1 |
| 6 portales hermosos, oráculo vacío | Home = carta + email + fecha nacimiento |
| Repetición del mismo layout | Jerarquía: home única, resto apoya conversión |

**Veredicto:** el 70% del esfuerzo visual fue **mapa del universo**. El 30% faltante es **ritual de entrada** (carta + captura).

---

## Norte de diseño (3 pilares)

```
┌─────────────────────────────────────────────────────────┐
│  1. UMBRAL     Entrar = cruzar · polvo dorado · luna    │
│  2. RITUAL     Carta del día = gesto sagrado único      │
│  3. CONFÍANZA  Ornamental Pixar · cero template vibes   │
└─────────────────────────────────────────────────────────┘
```

---

## Sprint diseño · orden recomendado

### Sprint A — Home rediseñada (prioridad máxima) · ✅ 16 mayo 2026

| # | Entrega | Estado |
|---|---------|--------|
| A1 | Hero copy | ✅ Frase ancla + subtítulo LANDING |
| A2 | CTA único primario | ✅ "Saca tu carta del día" |
| A3 | Bloque carta | ✅ `OracleCard` volteo + 5 mensajes |
| A4 | Captura | ✅ Form email + fecha → `/api/oracle/subscribe` |
| A5 | De-emphasize login | ✅ Solo en footer |
| A6 | Micro-magia mínima | ✅ `GoldenCursorTrail` partículas |

**Referencia copy:** `02_CONTENIDO_MAESTRO/LANDING_SOYELARANOVA_COM.md`  
**Referencia motion:** `HERO_PORTAL_ALGORITHMIC_PHILOSOPHY.md`

### Sprint B — Sistema visual (paralelo corto)

| # | Entrega |
|---|---------|
| B1 | Tokens: `--color-white-rose`, `--glow-gold`, `--glow-purple` en globals |
| B2 | Componente `OrnateFrame` extraído de hero (DRY) |
| B3 | `OracleCard` — cara A decorada, cara B mensaje |
| B4 | Tipografía: escala clamp documentada (h1, eyebrow, body) |
| B5 | Mobile: sidebar → bottom sheet; touch targets ≥ 44px |

### Sprint C — Rutas alineadas a v1

| Actual | v1 target | Acción |
|--------|-----------|--------|
| `/manifiesto` | `/sobre-elara` | Redirect o rename |
| — | `/work` | Nueva página voz Evelyn, link footer |
| `/universo` | Tienda 4 ebooks | Rediseñar cards producto + Hotmart |
| `/oraculo` | 5 cartas preview | Quitar "coming soon" plano |
| `/login` `/signup` | — | Ocultar nav v1 |

### Sprint D — Magia 3D (después de A)

R3F: luna respirando, estrellas, estela shader — según fases CONTEXT 2–4.

---

## Checklist calidad diseño (antes de merge)

- [ ] Frase ancla visible above the fold en mobile
- [ ] Un solo CTA primario dorado; secundario ghost
- [ ] Ninguna página Elara con tono "astrología genérica"
- [ ] Frame dorado + vignette en todas las escenas inmersivas
- [ ] Contraste texto sobre Midjourney ≥ WCAG AA
- [ ] Sin palabra "tarot" en UI ni meta
- [ ] Avatar Elara visible en home o carta (cuando asset listo)
- [ ] Lighthouse a11y > 95 en home

---

## Assets pendientes (designer skill)

| Asset | Estado | Acción |
|-------|--------|--------|
| hero-bg.jpg | ✅ | — |
| Avatar Elara transparente | ⚠️ `elara.jpg` | Pedir PNG cutout + glow |
| Reverso carta oráculo | ❌ | Brief Midjourney + marco dorado |
| 5 ilustraciones mini carta | ❌ | Pool v1 hardcoded |
| Favicon / OG | ❌ | Monograma EN en sello |
| Sonido voltear carta | ❌ | Tone.js clip corto |

---

## Cómo usar las skills

```
Tarea visual/copy     → @elara-designer + docs/brand.md
Texto landing/email   → @elara-copywriter + LANDING doc
Implementar en web    → @elara-ui-master + DISENO_MAESTRO sprint activo
```

**Regla:** una sprint por sesión con Evelyn (TDAH-friendly).
