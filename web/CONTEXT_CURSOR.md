# CONTEXTO DEL PROYECTO · soyelaranova.com
**Brief consolidado para agente AI (Cursor / Claude Code / Copilot)**
v1 · 9 mayo 2026 · lockeado por Evelyn Patino

> **Copia canónica para desarrollo:** `../../soyelaranova-com/CONTEXT_CURSOR.md`  
> Edita allí cuando cambies stack, rutas o fases; Cursor lee `.cursor/rules/soyelaranova.mdc` en ese repo.

---

## 1 · QUIÉN SOY Y QUÉ CONSTRUYO

Soy Evelyn Patino. Ingeniera de software con 6 años en banca (Sophos 2019-24, Bancolombia 2024-25). Stack principal: Angular, Next.js, React, TypeScript, WordPress, Tailwind. Vivo en Suiza, mercado objetivo: hispano (España + LATAM).

**El proyecto:** `soyelaranova.com` — un sitio web que cumple **dos funciones al mismo tiempo**:

1. **Portal sagrado de Elara Nova** — mi marca personal de bienestar/espiritualidad para mujeres latinas. Vende ebooks digitales, capta comunidad, tiene voz mística.
2. **Mi mejor caso de éxito B2B** — la web misma demuestra a clientes potenciales lo que puedo construir para ellos. La capa B2B es discreta y se accede desde el footer (`/work`).

**Frase ancla de la marca:** *"Mira todo lo que siempre fuiste capaz de ser."*

**Por qué importa:** no tengo clientes B2B todavía. La web es a la vez mi producto Y mi portfolio. Si la mujer entra y queda enamorada → compra ebook. Si un emprendedor entra y queda enamorado → me contrata.

---

## 2 · STACK TÉCNICO LOCKEADO

No cambies nada de esto sin justificar el cambio:

```
Next.js 15 (App Router, RSC, Turbopack)
React 19
TypeScript 5.5+ estricto
Tailwind CSS v4 (con CSS layers)

3D + animación:
  three (r170+)
  @react-three/fiber
  @react-three/drei
  @react-three/postprocessing
  gsap + ScrollTrigger
  lenis (smooth scroll)
  framer-motion (UI overlays)

Audio + voz:
  tone.js (ambient soundscape)
  ElevenLabs API (voz Elara paisa, voice clone ya existe)

Contenido + datos:
  Sanity CMS v4 (40 cartas oráculo)
  Resend (email opt-in, free tier 3k/mes)
  Hotmart (checkout ebooks, ya externo)

Deploy:
  Vercel (free tier)
  Dominio: soyelaranova.com (Namecheap, ya comprado)
  Analytics: Vercel Analytics + Plausible (GDPR-safe)

Fonts:
  Playfair Display (display)
  Cormorant Garamond (italic / citas)
  Lato (UI / cuerpo)
```

**Budget operativo:** máximo €10/mes total stack. Todo lo de arriba cabe en free tiers.

---

## 3 · DESIGN TOKENS · LEY, NO SUGERENCIA

```css
:root {
  /* Paleta sagrada */
  --purple-deep:    #2D1B69;
  --purple-mid:     #3D2580;
  --purple-night:   #1A0F3D;
  --purple-deepest: #0A0010;
  --lavender:       #9B6BC4;
  --pale-lav:       #E5DBF0;
  --gold:           #D4AF37;
  --gold-bright:    #F2D578;
  --gold-soft:      #E5C770;
  --gold-dark:      #B8941F;
  --cream:          #FAF4E2;
  --white-rose:     #F5EEF8;

  /* Tipografía */
  --display: 'Playfair Display', serif;
  --serif:   'Cormorant Garamond', serif;
  --sans:    'Lato', sans-serif;

  /* Sombras mágicas */
  --glow-gold:   0 0 60px rgba(212,175,55,0.5);
  --glow-purple: 0 0 40px rgba(155,107,196,0.4);
}
```

**Sensación visual:** Pixar 3D + Encanto + esoterismo paisa. Morado profundo + dorado vivo + luz lavanda. La luna respira, las estrellas titilan, el cursor deja polvo dorado.

**DNA visual:** ornamental, nunca plano. Cada elemento con detalle Pixar Encanto. Cero gap de detalle entre Elara (avatar) y el resto del sitio.

---

## 4 · ARQUITECTURA DE RUTAS

```
/                  → Portal de entrada · hero R3F · CTA "Saca tu carta"
/oraculo           → 40 cartas oráculo en grid 3D · modal con interpretación + audio
/universo          → Tienda 4 ebooks digitales · checkout vía Hotmart externo
/sobre-elara       → Manifiesto + identidad · scroll storytelling
/work              → ⚠️ CIERRE B2B SUTIL · solo accesible desde footer · voz Evelyn
/luna              → 🔒 NO CONSTRUIR EN 2026 · reservado para v2 calendario menstrual-lunar
```

---

## 5 · VOZ POR SECCIÓN · NO MEZCLAR

Hay dos voces en este sitio. Nunca conviven en la misma sección.

**VOZ ELARA** (en `/`, `/oraculo`, `/universo`, `/sobre-elara`)
- Mística, íntima, hermana mayor paisa
- Frases cortas, espirituales, sin clichés New Age
- Nunca dice "mija" pero sí "hermana", "mi amor"
- Lee oráculo (mensajes intuitivos), **NUNCA tarot tradicional**
- Cita ancla: *"Mira todo lo que siempre fuiste capaz de ser."*

**VOZ EVELYN** (solo en `/work`)
- Profesional, directa, ingeniera
- Tagline: *"Pienso como diseñadora, construyo como ingeniera."*
- Lead: *"Soy de Medellín. Vivo en Suiza. Soy mamá. Vengo de seis años en banca — donde un detalle mal hecho cuesta dinero real."*
- Philosophy: *"No hay agencia detrás. Soy yo, mi laptop, mucho café y la disciplina de no decepcionarte. Esa es la oferta entera."*
- 4 servicios oficiales: Sitios web profesionales · Aplicaciones web a medida · IA aplicada al negocio · Análisis y documentación técnica

---

## 6 · INTERACCIONES SAGRADAS (lo que hace mágica la home)

1. **Cursor estela dorada** — partículas Three.js Points + custom shader que persiguen el cursor.
2. **Luna respirando** — vertex shader que infla/desinfla la esfera (sin/cos en uniform time).
3. **Estrellas reactivas** — al pasar cursor cerca, parpadean.
4. **Carta del oráculo voltable 3D** — Float + GSAP rotation. Sonido al voltearse.
5. **Avatar Elara semi-transparente** — parpadea + respira cada ~6s.
6. **Voz Elara al primer click** — ElevenLabs lee saludo en su voz paisa (después del primer click por autoplay policy).
7. **Scroll storytelling** — secciones se manifiestan con motion (fade + scale + blur out→in).

---

## 7 · OBJETIVO ÚNICO DE LA HOME

Que la visitante:
1. Sienta el universo en 3 segundos.
2. Saque su carta del oráculo del día.
3. Quiera quedarse.
4. Entregue su email **+ fecha de nacimiento** para volver mañana.

> **Importante:** capturar fecha de nacimiento desde día uno. La plataforma 2028 incluirá carta natal automática y necesitamos ese dato desde el inicio para no migrar después.

Si esto pasa = home cumple. Todo lo demás es secundario.

---

## 8 · REGLAS INVIOLABLES

- **TypeScript estricto.** Nada de `any`. Cada componente con prop types.
- **No instalar component libraries.** No shadcn/ui, no Material UI, no Chakra. Vamos custom para que se vea único.
- **No salirse de los design tokens.** Si necesitas un color nuevo, primero pregúntame.
- **Mobile-first.** 90% del tráfico va a ser móvil. Si no funciona en mobile, no está hecho.
- **Performance no negociable:** 60fps en escena hero, lighthouse >85 perf y >95 accessibility, carga <3s en 4G.
- **Voz Elara y voz Evelyn nunca se mezclan.** Si vas a escribir copy, mira la sección 5.
- **NUNCA usar la palabra "tarot".** Es "oráculo".
- **Commits pequeños** con mensaje claro: `chore:`, `feat:`, `fix:`, `refactor:`.

---

## 9 · QUÉ **NO** CONSTRUIR (todavía)

Todo esto es 2027+. Si surge tentación, parar.

- `/luna` calendario menstrual-lunar
- Carta natal interactiva
- Login área miembros
- Sanity con 40 cartas (en v1 son 5 hardcoded)
- Cohortes con foro
- App móvil iOS / Android
- Suscripción SaaS $9/mes

---

## 10 · PLAN DE FASES (orden estricto)

```
FASE 1 — Setup base (1 sesión · ~2h)
        Next.js + Tailwind v4 + R3F deps + design tokens
        Repo GitHub + Vercel + dominio Namecheap
        Placeholder "hello world" con paleta aplicada

FASE 2 — Hero Portal (2 sesiones · ~4h)
        Escena R3F: cielo estrellado + nebula + luna respirando
        Cursor estela dorada (Points custom shader)
        Texto ancla con typewriter
        CTA "Saca tu carta del día"

FASE 3 — Carta del Oráculo (2 sesiones · ~4h)
        Modelo 3D carta con face A (decorada) y face B (mensaje)
        Animación baraja → levantar → voltear con GSAP timeline
        Pool inicial 5 mensajes hardcoded
        Sonido al voltearse (Tone.js)
        Form email + fecha nacimiento → Resend

FASE 4 — Sound + Voz (1 sesión · ~2h)
        Ambient soundscape Tone.js (drone + campanitas)
        ElevenLabs API: voz Elara saluda al primer click
        Toggle on/off de sonido en esquina superior derecha

FASE 5 — Tienda + /work + Polish (2 sesiones · ~4h)
        Página /universo con 4 ebooks → Hotmart
        Página /work (cierre B2B sutil voz Evelyn)
        Postprocessing: Bloom + Vignette + ChromaticAberration sutil
        Lenis smooth scroll
        Performance audit + deploy final
```

**Regla de oro entre fases:** terminar una completamente antes de empezar la siguiente. No saltar.

---

## 11 · CRITERIOS DE ÉXITO v1

- [ ] Carga en <3s en 4G
- [ ] Responsive mobile (90% del tráfico)
- [ ] 60fps en escena hero
- [ ] La carta voltea sin lag
- [ ] Al menos 5 mensajes únicos del oráculo
- [ ] Email + fecha nacimiento opt-in funciona end-to-end
- [ ] Frase ancla visible: *"Mira todo lo que siempre fuiste capaz de ser."*
- [ ] Una persona random siente "wow" en los primeros 5 segundos
- [ ] Lighthouse: >85 performance, >95 accessibility
- [ ] Página `/work` con voz Evelyn cargada y CTA contacto funciona

---

## 12 · CÓMO TRABAJAR CONMIGO

- Soy ingeniera con TDAH. Paso a paso, no me satures con 10 cosas a la vez.
- Critícame honesto. Si propongo algo malo, dímelo.
- Si encuentras un bug, lee el error completo antes de proponer fix. La mayoría de bugs R3F son orden de imports o versión Three.
- Commits frecuentes para que pueda revertir si rompes algo.
- Si necesitas instalar algo fuera del stack listado, pregúntame primero.
- Cuando termines una fase, **para y confirma**. No sigas a la siguiente sin mi luz verde.

---

## 13 · DOCUMENTOS DE REFERENCIA EN EL REPO

Si necesitas más contexto, lee (en orden de prioridad):

```
05_DOCS_ESTRATEGIA/ELARA_WEB_FAIRY_WORLD_BRIEF.md   ← Brief técnico completo
05_DOCS_ESTRATEGIA/PLAN_TRABAJO_WEB_MAESTRO.html    ← Cronograma + decisiones
02_CONTENIDO_MAESTRO/LANDING_SOYELARANOVA_COM.md    ← Copy completo en voz Elara
05_DOCS_ESTRATEGIA/HERO_PORTAL_ALGORITHMIC_PHILOSOPHY.md ← Filosofía del hero
03_VISUAL_KIT/Imagenes/                             ← Avatar Elara + 5 personajes objeto + logos
```

---

*Este documento es la fuente de verdad. Si algo en el código contradice este doc, gana el doc.*
*"Mira todo lo que siempre fuiste capaz de ser." — Elara Nova*
