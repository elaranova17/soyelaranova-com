# CLAUDE.md · soyelaranova.com
> Fuente de verdad para toda sesión de desarrollo. Lee esto ANTES de codear.  
> Última actualización: mayo 2026 · Evelyn Patino

---

## 1 · QUIÉN ES EVELYN Y QUÉ CONSTRUYE

**Evelyn Patino** — ingeniera fullstack, 6 años banca (Sophos 2019-24, Bancolombia 2024-25). Stack principal Angular/Next.js/React/TypeScript/Tailwind. Vive en Suiza, mercado objetivo hispanohablante (España + LATAM). TDAH: una sola tarea por sesión, confirmar antes de pasar a la siguiente.

**El proyecto** cumple dos funciones simultáneas:
1. **Portal sagrado Elara Nova** — marca personal de bienestar/espiritualidad para mujeres latinas 25–38. Vende ebooks, captura comunidad, voz mística.
2. **Portfolio B2B oculto** — la web misma demuestra lo que Evelyn puede construir. Solo accesible desde footer (`/work`). No mezclar con voz Elara.

**Frase ancla:** *"Mira todo lo que siempre fuiste capaz de ser."*

---

## 2 · STACK LOCKEADO (no cambiar sin autorización)

```
Next.js 16 · React 19 · TypeScript 5.5+ estricto
Tailwind CSS v4 · framer-motion
three + @react-three/fiber + @react-three/drei (pendiente instalar)
gsap + ScrollTrigger · lenis smooth scroll
tone.js (audio) · ElevenLabs (voz Elara paisa)
Sanity CMS v4 (40 cartas oráculo, v2) · Resend (email)
Hotmart (checkout externo) · Vercel (deploy)
Fonts: Playfair Display / Cormorant Garamond / Lato
```

**Prohibido:** shadcn/ui · Material UI · Chakra · component libraries · `any` en TypeScript.

---

## 3 · DISEÑO TOKENS (ley, no sugerencia)

```css
--purple-deepest: #0A0010   /* fondo base, void */
--purple-night:   #1A0F3D   /* paneles, glass */
--purple-deep:    #2D1B69   /* gradientes */
--purple-mid:     #3D2580   /* acentos profundos */
--lavender:       #9B6BC4   /* luz secundaria */
--pale-lav:       #E5DBF0   /* subtítulos */
--white-rose:     #F5EEF8   /* texto suave */
--gold:           #D4AF37   /* marco, iconos, CTA */
--gold-bright:    #F2D578   /* títulos hero */
--gold-soft:      #E5C770   /* eyebrows, labels */
--gold-dark:      #B8941F   /* bordes activos */
--cream:          #FAF4E2   /* cuerpo texto */
--glow-gold:      0 0 60px rgba(212,175,55,0.5)
--glow-purple:    0 0 40px rgba(155,107,196,0.4)
```

**Prohibido:** `#000` puro · `#FFF` puro · neón · gradientes arcoíris · estética coach/TikTok.

---

## 4 · DNA VISUAL (5 pilares)

1. **Ornamental** — frame dorado, esquineros, glass pills. Nunca flat corporate.
2. **Profundidad** — parallax, mouse-tilt, capas Midjourney + vignette. Sentir volumen.
3. **Vida** — partículas doradas, luna que respira, estrellas que titilan. Nada estático.
4. **Encanto-Pixar** — nivel de detalle del avatar Elara = nivel de detalle de la UI. Cero gap.
5. **Mobile-first** — 90% tráfico móvil. Si no funciona en 390px, no está hecho.

**Sensación:** Cruzar un umbral, no visitar una web. Pixar 3D + Encanto + esoterismo paisa.

---

## 5 · TIPOGRAFÍA

| Familia | Variable CSS | Uso |
|---------|-------------|-----|
| Playfair Display | `--font-playfair` | Títulos h1/h2, wordmark |
| Cormorant Garamond | `--font-cormorant` | Citas, taglines, cursiva |
| Lato | `--font-lato` | UI labels, botones, body |

**Escala recomendada:**
- Hero h1: `clamp(2.8rem, 5.8vw, 5.2rem)` · tracking -0.02em
- Section h2: `clamp(2rem, 4vw, 3.6rem)`
- Eyebrow: `10px` · tracking `0.38em` · uppercase · Lato
- Body: `16-18px` · line-height 1.7 · Cormorant italic o Lato regular
- Buttons: `10-11px` · tracking `0.28em` · uppercase · Lato bold

---

## 6 · COMPONENTES DE VOZ

### Voz Elara (en `/`, `/oraculo`, `/universo`, `/sobre-elara`)
- Mística, íntima, hermana mayor paisa
- Frases cortas, espirituales, sin clichés New Age
- Puede: "hermana", "mi amor" — nunca "mija"
- Siempre: **oráculo** — NUNCA: tarot
- Evitar: girlboss, mindset, manifestar, vibes, diosa, abundancia, universo (como cliché)
- Palabras permitidas: carta, ciclo, alma, intuición, saber, recordar, camino, volver

### Voz Evelyn (solo `/work`)
- Directa, profesional, ingeniera
- *"Pienso como diseñadora, construyo como ingeniera."*
- *"Soy de Medellín. Vivo en Suiza. Vengo de seis años en banca."*

---

## 7 · ESTADO ACTUAL (mayo 2026)

### ✅ Hecho y funcionando
- Home con hero full-bleed Pixar, headline, CTAs, 6 feature cards con imágenes
- Nav con UNIRME glass, links + dividers, hamburger
- 6 secciones inmersivas (portal, archivo-astral, codice, circulo, atelier, manifiesto)
- Página herramientas, comunidad, cursos, productos, sobre-mí, recursos, login, signup
- Design tokens en globals.css
- MagicParticles, ElaraIcons (30+), ElaraButton, LenisProvider
- `pnpm build` pasa sin errores

### ❌ Pendiente crítico (bloquea conversión)
- `OracleCard` — componente flip 3D con 5 mensajes (CORE del producto)
- Form email + fecha nacimiento → `/api/oracle/subscribe` (Resend)
- `/sobre-elara` y `/work` rutas funcionales
- Links Hotmart reales en /universo
- Cursor estela dorada (Three.js shader)
- Lenis smooth scroll
- Luna 3D que respira (R3F)

### ⚠️ Pendiente mejora visual
- Tabs Recursos Digitales funcionales ✅ (recién arreglado)
- OracleCard reverso (asset Midjourney)
- Favicon monograma EN
- OG image

---

## 8 · OBJETIVO ÚNICO DE LA HOME (NUNCA PERDER DE VISTA)

```
1. Sentir el universo en 3 segundos
2. Sacar carta del oráculo del día  ← CORE KPI
3. Querer quedarse
4. Entregar email + fecha de nacimiento  ← LEAD PRINCIPAL
```

Todo lo demás es secundario. Si la home no convierte email+fecha, no cumplió.

---

## 9 · ARQUITECTURA DE RUTAS v1

```
/                 → Hero + OracleCard + email form
/oraculo          → 40 cartas oráculo (v2) / 5 hardcoded (v1)
/universo         → Tienda 4 ebooks → Hotmart
/sobre-elara      → Manifiesto + identidad Elara
/herramientas     → Herramientas de autoconocimiento
/comunidad        → El Círculo (comunidad pagada)
/cursos           → 3 cursos online
/recursos         → Recursos digitales (ebooks, journals, etc.)
/login /signup    → Ocultos en nav v1; existen como stub
/work             → SOLO footer; voz Evelyn; portfolio B2B
```

---

## 10 · INTERACCIONES SAGRADAS (roadmap, en orden)

1. **Cursor estela dorada** — Points Three.js custom shader que persiguen el mouse
2. **Luna respirando** — vertex shader infla/desinfla esfera
3. **Estrellas reactivas** — parpadean al acercar cursor
4. **OracleCard flip 3D** — GSAP rotation, sonido Tone.js al voltear
5. **Avatar Elara** — parpadea y respira cada ~6s
6. **Voz Elara al primer click** — ElevenLabs saludo paisa
7. **Scroll storytelling** — secciones aparecen con fade+scale+blur

---

## 11 · COPY HERO ACTUAL (APROBADO)

**Eyebrow:** ✦ Lo que siempre pudiste hacer ✦  
**H1 línea 1:** Tu alma ya sabe.  
**H1 línea 2:** *Vos solo aprendés* (Cormorant italic, color #B58CFF)  
**H1 línea 3:** a escucharla.  
**Descripción:** Herramientas de autoconocimiento para mujeres que eligen vivirse desde adentro.  
**CTA primario:** ✦ Descubrí tu camino (velvet purple pill)  
**CTA secundario:** 🌙 Entrar al Círculo (glass dark pill)  
**Overlay imagen:** Tu magia. / Tu camino. / Tu nueva vida. (faded, desktop only)  
**Tagline footer cards:** ✦ Este es tu lugar. Volvé siempre a vos. ✦

---

## 12 · 6 FEATURE CARDS HOME (APROBADAS)

| Orden | Título | Descripción | Ícono | Imagen |
|-------|--------|-------------|-------|--------|
| 1 | Lecturas de oráculo | Hacé tu pregunta. Tu mensaje en 24h. | Oraculo | /hero/tarot-elara-cartas.jpg |
| 2 | Calendario lunar | Conectate con la energía de cada fase. | Luna | /hero/portal-lunar-bg.jpg |
| 3 | El Círculo | Comunidad de mujeres que se sostienen. | Comunidad | /hero/circulo-bg.jpg |
| 4 | Herramientas de alma | Calculá tu carta, leé tus ciclos, entendete. | Estrellas | /hero/herramientas-elara-orbe.jpg |
| 5 | Recursos digitales | Ebooks, journals y planificadores para vos. | Ebook | /hero/archivo-astral-bg.jpg |
| 6 | Cursos | Formaciones para aprender de verdad. | Cursos | /hero/codice-bg.jpg |

---

## 13 · REGLAS INVIOLABLES

- Un solo CTA primario dorado por pantalla; secundario siempre ghost
- Nunca `border-radius: 0` en botones (siempre pill o rounded-2xl mínimo)
- `pnpm build` debe pasar ANTES de cada PR
- No `any` en TypeScript
- Commits pequeños: `feat(sección):` `fix(a11y):` `feat(oracle):`
- Mobile: touch targets ≥ 44px; sidebar desktop → bottom sheet mobile
- Lighthouse: >85 perf · >95 accessibility
- La palabra **tarot** NO existe en este sitio. Solo **oráculo**.
- No instalar nuevas librerías UI sin aprobación de Evelyn

---

## 14 · MEJORAS COMERCIALES PENDIENTES (próximas sesiones)

### Alta prioridad (conversión directa)
1. **OracleCard** en home — flip 3D + 5 mensajes + form email+nacimiento
2. **Precios visibles** en cards de cursos y ebooks (CTA "Comprar $X USD")
3. **Social proof** — número de mujeres en el Círculo, reviews testimonios
4. **Urgencia** — "Solo X lugares disponibles" en cursos live
5. **Hotmart links reales** — reemplazar #email por URLs reales de pago

### Media prioridad (trust y calidad)
6. **Sobre Elara** — página completa con historia personal, foto real, misión
7. **FAQ** — objeciones más comunes de la audiencia
8. **Garantía** — "14 días o te devuelvo" visible en productos
9. **Newsletter preview** — mostrar sample de qué recibe quien se suscribe

### Mejoras visuales (polish)
10. **Glassmorphism más pronunciado** en nav y cards
11. **Micro-animaciones** en cada card al hover (elevación, brillo dorado)
12. **Separadores ornamentales** entre secciones (línea dorada con ornamento central)
13. **Footer completo** — links, legal, redes sociales, /work sutil
