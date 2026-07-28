# Plan de diseño en Figma · Elara Nova

> Spec para construir/actualizar el sistema visual en Figma.
> **Tool-agnóstico:** sirve para diseñar desde cualquier agente/IDE (Antigravity/Gemini, o el MCP de Figma de Claude cuando se re-autentique con seat de edición).
> Fuente de verdad de marca: [`brand.md`](brand.md). Si algo choca, **gana brand.md**.

---

## 0. Estado actual en tu Figma (ya existe)

Archivo **"Elara Nova · Sistema de Diseño"** (fileKey `r5xXF5ttJsDlem0EaWGfha`), página **Fundamentos**.

Variables **ya creadas y verificadas 1:1 con el código** (28 jul 2026):

- **Editorial · Color** (13): smoke `E7E1DC` · ivory `F8F3EA` · aubergine `2B1735` · champan `F2EAD9` · lino `E8DEDF` · ink `18131A` · cacao `6B5147` · lavender `B9A1C8` · plum `4A2D57` · gold `B89A58` · lila `9A66D9` · lila-deep `7C46C0` · stone `B8AEA7`.
- **Editorial · Tipografía** (4): display=Bebas Neue · sans=Outfit · serif=Cormorant Garamond · script=Great Vibes.

✅ No hay que recrear tokens base. Solo construir componentes y pantallas encima.

---

## 1. Decisiones de diseño recientes (deben quedar reflejadas)

Estas son las decisiones que tomamos y que Figma **todavía no tiene**:

1. **Botón primary = ciruela** (`--editorial-plum` #4A2D57), sin glow morado. **Ya NO lila.** Hover → aubergine.
2. **Great Vibes solo en grande** (logo, hero, headers de sección ≥ ~29px). En **títulos chicos** (pasos de método, tarjetas de servicio, cards de modelos) → **Cormorant Garamond itálica** (~0.66em, weight 500). Great Vibes a 14–18px es ilegible.
3. **Home · Intro = problema→solución:** columna derecha son 3 *señales/dolores* ("¿Te suena?"), no una lista de servicios repetida.
4. **Home · Pre-análisis = sección CLARA** (champán→smoke, hairlines), no banda oscura — para romper el tramo oscuro y diferenciarla del cierre.
5. **Servicios · Hero 2-col:** copy izquierda + **diagrama "el sistema que vende solo"** (4 pasos: Anuncio → Web → Se registra solo → Medición · "↻ Corre solo 24/7").
6. **Hero home:** foto de Evelyn centrada en la cara + blur placeholder.

---

## 2. Componentes a crear en Figma (como Components + variantes)

| Componente | Variantes / notas |
|---|---|
| **Type Lockup** | `impact` (Bebas caps) + `script`. Prop `glow` / `glow-soft`. Prop `script-font`: **Great Vibes** (grande) vs **Cormorant italic** (chico). |
| **Botón** | `primary` (ciruela) · `gold` · `quiet` (borde cacao) · `light` (borde ivory). Pill, uppercase, tracking 0.18em. |
| **Eyebrow** | línea gold + label Outfit uppercase. Variante `light` (sobre oscuro). |
| **Service tile** | eyebrow + lockup (script Cormorant) + whatIs + meta + CTA "Ver detalle →". Borde gold 25%. |
| **System-flow** | card aubergine→plum + radial gold; 4 pasos con nodo gold numerado + línea conectora; remate "↻ Corre solo, 24/7". |
| **Nav** | barra aubergine, logo Great Vibes, botón gold "+ Pre-análisis", hamburguesa. |

---

## 3. Pantallas a diseñar (frames)

Hacer cada una en **desktop 1440** y **mobile 390** (mobile-first).

- **Home** — 9 secciones: Hero · Tesis · Intro (problema→solución) · Método · Oferta (cards) · Recursos (oscuro) · Pre-análisis (**claro**) · Sobre mí · Cierre (oscuro).
- **Servicios** — Hero 2-col (+ system-flow) · grid 4 servicios · Web vs Landing · Modelos de webs · Franja embudo.
- **Trabaja conmigo** — Hero foto full-bleed · Criterio de banca + 3 razones · Qué construir · Cierre.
- **Descubrimiento** — Hero + wizard 5 pasos (aside embudo + formulario).

Ritmo de fondos home: claro → claro → claro → claro(método) → claro → **oscuro**(recursos) → **claro**(pre-análisis) → claro(sobre mí) → **oscuro**(cierre).

---

## 4. Reglas duras (no romper)

- Solo tokens `--editorial-*`. **No inventar colores.** Hex prohibidos: `#7B4FB5`, `#C49AD4`, `#000`/`#FFF` puros.
- Una sola navbar (aubergine) en todas las páginas del estudio. LP (`/lp/*`) sin nav y autónomas.
- Voz Evelyn (ingeniera) en todo B2B; voz Elara (mística) solo en `/oraculo /universo /cursos /sobre-elara`. Nunca mezclar. Nunca "tarot".
- Mobile-first. Sin librerías de componentes (shadcn/MUI/Chakra).

---

## 5. Sincronía entre herramientas (importante)

- El repo `soyelaranova-com/` es compartido. **Que un solo agente edite código a la vez** (Claude Code *o* Antigravity/Gemini), para no generar conflictos de merge.
- Diseño en Figma (Antigravity) ↔ implementación en código pueden ir en paralelo **si** el que toca código es uno solo.
- Al terminar un bloque, commitear y (si trabajás en varias máquinas/herramientas) **pushear** para que todos vean lo mismo.
