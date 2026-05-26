# 🌙 ELARA NOVA · WEB "MUNDO DE HADAS"
## Brief técnico + creativo · v1 · 3 mayo 2026

> Para construir post-Madrid (semana del 7 may) usando Claude Code.
> Lockeado en sesión cowork del 3 may con Evelyn.

---

## ✨ VISIÓN

Cuando alguien escribe **soyelaranova.com**, debe sentir que **cruzó un umbral**.
No es una web — es un **portal**.

Estética Pixar 3D + Encanto + esoterismo paisa.
Morado profundo + dorado vivo + luz lavanda.
Sonido ambient sutil de campanitas y viento.
La luna respira. Las estrellas titilan. El cursor deja polvo dorado.

**Frase ancla:** *Mira todo lo que siempre fuiste capaz de ser.*

---

## 🎯 OBJETIVO ÚNICO DE LA HOME

Que la visitante:
1. Sienta el universo en 3 segundos.
2. Saque su carta del oráculo del día.
3. Quiera quedarse.
4. Entregue su email para volver mañana.

Si esto pasa = home cumple. Todo lo demás es secundario.

---

## 🏗️ STACK 2026 (lo más fresco)

### Core framework
- **Next.js 15** (App Router + Turbopack + RSC)
- **React 19** (use, transitions, optimistic UI)
- **TypeScript 5.5+**

### 3D + WebGL
- **Three.js r170+**
- **React Three Fiber (R3F)** — Three.js declarativo en React
- **@react-three/drei** — helpers (OrbitControls, Float, Stars, Sky, etc.)
- **@react-three/postprocessing** — Bloom + ChromaticAberration + Vignette (la magia visual)
- **@react-three/rapier** o **@react-three/fiber-physics** — física opcional para cartas que caen

### Animación + scroll
- **GSAP 3.12+** + **ScrollTrigger** — orquestador maestro de timing
- **Lenis 1.x** — smooth scroll silky (reemplaza Locomotive)
- **Framer Motion 11+** — UI overlays (cartas, modales, botones)
- **Theatre.js** — timeline editor visual (sin código, tipo After Effects en browser)

### Audio + voz
- **Tone.js** — ambient soundscape (campanitas, drone)
- **ElevenLabs API** — voz Elara saluda + lee mensaje del día (voice clone ya existe)

### Estilos
- **Tailwind CSS v4** — utility-first (mucho más rápido que v3, con CSS layers)
- **CSS Variables** para paleta sagrada
- **Playfair Display + Cormorant Garamond + Lato** (fonts ya lockeadas)

### Contenido + datos
- **Sanity CMS v4** — backend para 40 cartas oráculo (texto, imagen, voz)
- **Anthropic Claude API** o **OpenAI API** — mensaje del día generado dinámicamente (opcional v2)
- **Resend** — email opt-in (gratis hasta 3k/mes)

### Deploy + infra
- **Vercel** (Next.js nativo, free tier)
- **Domain:** soyelaranova.com (ya comprado en Namecheap)
- **Analytics:** Vercel Analytics + Plausible (sin cookies, GDPR-safe)

---

## 🌌 ARQUITECTURA DE PANTALLAS

### `/` — HOME (Portal de entrada)
**Hero full-screen WebGL:**
- Fondo: noche estrellada con shader procedural (Stars + Nebula)
- Luna dorada flotante con shader animado (respiración + glow)
- Avatar Elara semi-transparente, parpadea cada ~6s
- Cursor: estela dorada de partículas (Three.js Points + custom shader)
- Texto central aparece letra por letra: *"Mira todo lo que siempre fuiste capaz de ser"*
- 1 sola CTA visible: **Saca tu carta del día**

**Acción → Saca carta:**
- Mazo flotante de cartas se baraja (animación 3D)
- Una carta se levanta del mazo
- Voltea con animación cinematográfica (CSS3D + GSAP)
- Mensaje aparece (texto + opcionalmente voz Elara via ElevenLabs)
- Botón abajo: *"Recibe tu carta cada mañana"* → input email

### `/oraculo` — Oráculo completo (40 cartas)
- Galería de las 40 cartas en grid 3D flotante
- Click en carta → modal con interpretación completa
- Tirada de 3 cartas (pasado, presente, futuro)
- Producto digital de venta (27-47 CHF)

### `/universo` — Productos + ebooks
- Sistema Ciclo Nova (28 días × 4 fases lunares)
- Ebooks Hotmart
- Comunidad Premium

### `/sobre-elara` — Manifiesto + identidad de marca
- Avatar Elara animado en escena 3D
- Manifiesto en scroll storytelling

### `/luna` — Calendario menstrual-lunar (v2)
- Carta natal interactiva
- Tirada por mensaje

---

## 🔮 7 INTERACCIONES SAGRADAS (lo que la hace MÁGICA)

1. **Cursor estela dorada** — partículas Three.js que persiguen cursor + se desvanecen.
2. **Luna respirando** — vertex shader que infla/desinfla la esfera (sin/cos en tiempo).
3. **Estrellas reactivas** — al pasar cursor cerca de una estrella, parpadea.
4. **Carta del oráculo voltable 3D** — Float + GSAP + 3D rotation. Sonido al voltearse.
5. **Avatar Elara que parpadea + respira** — sprite animado o GLB modelo 3D simple.
6. **Voz Elara al entrar** — después del primer click del usuario (autoplay policy), ElevenLabs lee el saludo en su voz paisa.
7. **Scroll storytelling** — al hacer scroll, las secciones se "manifiestan" con motion (fade + scale + blur out → in).

---

## 🎨 DESIGN TOKENS (lockeados)

```css
/* Paleta sagrada Elara */
--purple-deep:   #2D1B69;
--purple-mid:    #3D2580;
--purple-night:  #1A0F3D;
--lavender:      #9B6BC4;
--pale-lav:      #E5DBF0;
--gold:          #D4AF37;
--gold-bright:   #F2D578;
--gold-soft:     #E5C770;
--gold-dark:     #B8941F;
--cream:         #FAF4E2;

/* Tipografía */
--display: 'Playfair Display', serif;   /* títulos */
--serif:   'Cormorant Garamond', serif; /* citas */
--sans:    'Lato', sans-serif;           /* UI */

/* Sombras mágicas */
--glow-gold: 0 0 60px rgba(212,175,55,0.5);
--glow-purple: 0 0 40px rgba(155,107,196,0.4);
```

---

## 🔌 INTEGRACIONES "CONECTADAS" (lo que pidió Evelyn)

| Sistema | Para qué | Cómo conectar |
|---|---|---|
| **Sanity CMS** | Contenido 40 cartas oráculo (texto + imagen + audio) | `next-sanity` package, fetch en RSC |
| **ElevenLabs** | Voz Elara genera audio de cada carta + saludo | API key en `.env.local`, fetch dinámico o pre-generado |
| **Claude API** | Mensaje del día personalizado (opcional v2) | `@anthropic-ai/sdk`, server action |
| **Resend** | Email opt-in + newsletter | API + webhook a Sanity |
| **Vercel Analytics** | Tracking de cuántas sacaron carta | Auto |
| **GitHub** | Repo `soyelaranova-com` ya existe | Push automático → deploy Vercel |
| **Notion API** (opcional) | Calendario editorial Elara conectado | `@notionhq/client` |
| **Google Calendar API** (opcional) | Fases lunares + rituales programados | OAuth |

---

## 📋 BRIEF PARA CLAUDE CODE

### Cómo usarlo:
1. Abrí Claude Code en VS Code (o Terminal con `claude`)
2. Estás en `~/Documents/Claude/Projects/Elara nova -- Fullest/soyelaranova-com/`
3. Pegás el siguiente prompt completo:

---

```
Quiero construir la web soyelaranova.com como una experiencia 3D inmersiva
estilo "mundo de hadas". Lee el brief completo en
05_DOCS_ESTRATEGIA/ELARA_WEB_FAIRY_WORLD_BRIEF.md y actuemos en este orden:

FASE 1 — Setup base (1 sesión, ~2h):
1. Inicializa proyecto Next.js 15 con App Router y TypeScript en
   /soyelaranova-com/web/ (no toques /docs/, ese es el sitio actual)
2. Instala: react three @react-three/fiber @react-three/drei
   @react-three/postprocessing gsap lenis framer-motion
   tailwindcss@latest @types/three
3. Configura Tailwind v4 con los design tokens del brief
4. Setup deploy a Vercel con dominio soyelaranova.com

FASE 2 — Hero Portal (2 sesiones, ~4h):
5. Crear componente <Portal /> con escena R3F
6. Cielo nocturno con Stars (drei) + nebula procedural (custom shader)
7. Luna dorada con respiración (Float + uniform time en shader)
8. Cursor con estela de partículas (Points custom)
9. Texto "Mira todo lo que siempre fuiste capaz de ser" con typewriter

FASE 3 — Carta del Oráculo (2 sesiones, ~4h):
10. Modelo 3D de carta con face A (decorada) y face B (mensaje)
11. Animación de baraja → levantar → voltear con GSAP timeline
12. Pool inicial de 5 mensajes hardcoded (luego Sanity)
13. Sonido al voltearse (Tone.js)
14. Después de mostrar, CTA email con Resend

FASE 4 — Sound + Voz (1 sesión, ~2h):
15. Ambient soundscape Tone.js (drone + campanitas suaves)
16. Integrar ElevenLabs API: voice Elara saluda al primer click
17. Toggle on/off de sonido en esquina superior derecha

FASE 5 — Polish + Deploy (1 sesión, ~2h):
18. Postprocessing: Bloom + Vignette + ChromaticAberration sutil
19. Lenis smooth scroll
20. Performance audit: 60fps target, lighthouse > 85
21. Deploy a Vercel + conectar dominio Namecheap

REGLAS:
- TODO en TypeScript estricto
- Nunca rompas el design system (tokens del brief)
- Cada componente con prop types
- Tests unitarios solo en lógica crítica (no en visual)
- Commits cada fase con mensaje claro
```

---

## ⏱️ TIEMPO ESTIMADO TOTAL

| Fase | Sesiones cowork | Horas |
|---|---|---|
| 1 — Setup | 1 | 2h |
| 2 — Hero portal | 2 | 4h |
| 3 — Carta oráculo | 2 | 4h |
| 4 — Sound + voz | 1 | 2h |
| 5 — Polish + deploy | 1 | 2h |
| **TOTAL v1** | **7 sesiones** | **~14-16h** |

Coincide con la estimación original: 7 sesiones × ~2h = 14h.

Empezamos miércoles 7 may al volver de Madrid.

---

## 🚦 CRITERIOS DE ÉXITO v1

- ✅ Carga en <3s en 4G
- ✅ Funciona en mobile (responsive)
- ✅ 60fps en escena hero
- ✅ La carta voltea sin lag
- ✅ Hay al menos 5 mensajes únicos del oráculo
- ✅ Email opt-in funciona end-to-end
- ✅ La frase ancla está visible
- ✅ Una persona random siente "wow" en los primeros 5 segundos
- ✅ Lighthouse score > 85 (performance) > 95 (accessibility)

---

## 🌒 v2 (post-lanzamiento, semana 9-10)

- Sanity CMS conectado con 40 cartas reales
- Tirada de 3 cartas
- Calendario menstrual-lunar (`/luna`)
- Comunidad premium login
- Carta natal interactiva

---

*Documento vivo. Última edición: 3 may 2026 21:45 CET.*
*Lockeado por Evelyn + Claude · sesión cowork pre-Madrid.*
