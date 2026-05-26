# 🎬 CONCEPTO B · "POV: ERES LA MUJER QUE…"
## Producción completa · prompts JSON Gemini + Veo 3 + ElevenLabs + Capcut mínimo

**Fecha:** 26 abril 2026
**Lanzamiento:** 27 abril 2026 · 19:00 Madrid / 13:00 Bogotá
**Duración Reel:** 32 segundos · 1080×1920 vertical
**Filosofía de producción:** Veo 3 hace TODO el movimiento → Capcut solo es ensamblaje + texto

---

## 🎯 ESTRUCTURA FINAL DEL REEL · 32 segundos

| # | Tiempo | Escena | Voz Elara | Texto pantalla |
|---|---|---|---|---|
| 1 | 0–3s | Tus manos sosteniendo café · luz dorada cálida · cocina suave fondo | (sin voz · solo música) | **"POV: eres la mujer que ya no persigue a nadie."** |
| 2 | 3–7s | Pantalla negro suave · fade text dorado | *"Llevas un año esperando que vuelva."* | "(spoiler: la mujer eres tú.)" |
| 3 | 7–12s | Vela Pixar mesa de noche · mecha humea sola · velo dorado | *"Y resulta que ya volviste. Solo no lo habías visto."* | (sin texto) |
| 4 | 12–17s | Montaje rápido 5 personajes objeto · 1 seg c/u · grid Pixar | *"Tu casa lleva meses tratando de avisarte."* | (sin texto) |
| 5 | 17–22s | Avatar Elara 3D perfil · mira luna gigante en cielo nocturno | *"Hoy es el día que la escuchas."* | (sin texto) |
| 6 | 22–27s | Avatar Elara 3D mira a cámara · sonríe ligera · ojos verde hazel | *"Soy Elara. Y vine a hacerte ruido."* | "@soyelaranova" pequeño esquina |
| 7 | 27–32s | Pantalla negra · manifiesto fade dorado · luna creciente | (música cierra suave) | **"Mira todo lo que siempre fuiste capaz de ser."** 🌙 |

**Audio base:** "Messy" – Lola Young (instrumental, 30% volumen) · voz Elara 100%

---

## 🎙️ PARTE 1 · AUDIOS NUEVOS A GENERAR EN ELEVENLABS

**Voice:** Elara (Spanish · Colombiano paisa) — ya bloqueado en cuenta ElevenCreative
**Regla sagrada:** NUNCA plana, siempre con emoción real

### AUDIO B1 · "Llevas un año esperando que vuelva."
- **Tono:** íntima, cansada-amorosa, casi susurrada al final
- **Settings:** Stability **0.40** · Similarity **0.90** · Style **0.50** · Speaker Boost **ON**
- **Save as:** `voz_B1_un_ano.mp3`

### AUDIO B2 · "Y resulta que ya volviste. Solo no lo habías visto."
- **Tono:** revelación tierna, voz que abraza, ligero quiebre emocional en "ya volviste"
- **Settings:** Stability **0.40** · Similarity **0.90** · Style **0.55** · Speaker Boost **ON**
- **Save as:** `voz_B2_ya_volviste.mp3`

### AUDIO B3 · "Tu casa lleva meses tratando de avisarte."
- **Tono:** cómplice, ligera sonrisa en la voz, energía que sube
- **Settings:** Stability **0.45** · Similarity **0.90** · Style **0.55** · Speaker Boost **ON**
- **Save as:** `voz_B3_tu_casa.mp3`

### AUDIO B4 · "Hoy es el día que la escuchas."
- **Tono:** firme, íntima, declaración no súplica
- **Settings:** Stability **0.45** · Similarity **0.95** · Style **0.50** · Speaker Boost **ON**
- **Save as:** `voz_B4_hoy_es_el_dia.mp3`

### AUDIO B5 · "Soy Elara. Y vine a hacerte ruido."
- **Tono:** firme con calidez, pequeño tono travieso en "ruido"
- **Settings:** Stability **0.45** · Similarity **0.95** · Style **0.55** · Speaker Boost **ON**
- **Save as:** `voz_B5_soy_elara_ruido.mp3`

### AUDIO B-MAESTRO · Discurso completo unido
**Texto exacto** (copiar tal cual con las pausas de puntuación):
```
Llevas un año esperando que vuelva.

Y resulta que ya volviste... solo no lo habías visto.

Tu casa lleva meses tratando de avisarte.

Hoy es el día que la escuchas.

Soy Elara. Y vine a hacerte ruido.
```
- **Tono:** flujo emocional completo, intimidad → revelación → energía
- **Settings:** Stability **0.42** · Similarity **0.92** · Style **0.55** · Speaker Boost **ON**
- **Save as:** `voz_B_MAESTRO_completo.mp3`

> **Tip de generación:** generar B-MAESTRO de PRIMERO. Si suena con buen flujo emocional, los B1–B5 pueden recortarse de ahí mismo en Capcut como respaldo. Si no, generar individuales con los settings de arriba.

---

## 🎨 PARTE 2 · PROMPTS JSON PARA GEMINI NANO BANANA / CHATGPT (imágenes base)

> **Cada escena se genera primero como IMAGEN** en Gemini/ChatGPT con estos JSON, luego se anima en Veo 3 con el prompt de movimiento de la Parte 3.

### 🖼️ ESCENA 1 · Manos sosteniendo café (0–3s)

```json
{
  "style": "cinematic photo, Pixar 3D render fusion, warm golden hour interior",
  "subject": "close-up of feminine hands holding a ceramic mug of steaming coffee",
  "hands_detail": {
    "skin": "warm peachy Latina skin tone with subtle freckles",
    "tattoos": "delicate fine-line tattoos on the back of one hand: small moon, tiny stars, minimalist florals",
    "nails": "short almond shape, nude polish",
    "no_face_visible": true
  },
  "mug": {
    "color": "deep matte purple #1A0F3D with golden rim",
    "steam": "soft visible steam rising"
  },
  "background": "blurred warm kitchen with hanging dried lavender and a window with morning golden light, slight bokeh",
  "lighting": "warm honey golden light from left, soft shadows",
  "color_palette": ["#1A0F3D deep purple", "#D4AF37 gold", "#F4E4C1 cream", "#8B6F47 warm brown"],
  "mood": "intimate, slow morning, sacred ordinary",
  "composition": "vertical 9:16, hands centered, mug at chest level",
  "camera": "shallow depth of field, 50mm lens look",
  "no_text": true,
  "no_watermark": true,
  "no_face": true,
  "aspect_ratio": "9:16",
  "resolution": "1080x1920"
}
```

---

### 🖼️ ESCENA 2 · Pantalla negro con texto (3–7s)

> **Esta NO se genera con IA** — se hace directo en Capcut con fondo negro morado #0A0518 + texto dorado. Salta a Escena 3.

---

### 🖼️ ESCENA 3 · Vela Pixar humeando sola (7–12s)

```json
{
  "style": "Pixar 3D animation render, hyper-detailed, cinematic",
  "subject": "anthropomorphized purple candle character on a wooden bedside table, the wick has just gone out and a thin curl of golden smoke rises",
  "character_design": {
    "name": "Vela",
    "body": "tall pillar candle in deep purple #1A0F3D wax with subtle golden specks",
    "face": "soft tired-loving face on the candle body, big expressive hazel green eyes with long lashes, gentle worn smile",
    "wick": "extinguished, with a single curl of magical golden smoke spiraling upward",
    "personality_in_pose": "patient, has been waiting, slight forward lean as if calling out"
  },
  "scene": {
    "location": "wooden nightstand with a small open journal, a quartz crystal, an old photograph face-down",
    "background": "blurred bedroom in warm low light, slight dust particles floating in golden beams",
    "ambient": "soft moonlight from window mixing with the residual candle warmth"
  },
  "lighting": "rim light golden from the smoke, ambient cool moonlight, contrast between purple wax and golden glow",
  "color_palette": ["#1A0F3D", "#D4AF37", "#3D2A5C", "#F4E4C1"],
  "mood": "tender, patient, the candle has been waiting for someone to come back",
  "composition": "vertical 9:16, candle slightly off-center left, smoke spiraling into the upper third",
  "no_text": true,
  "aspect_ratio": "9:16",
  "resolution": "1080x1920"
}
```

> **NOTA:** Si ya tienes la imagen `01_Vela.png` del kit de personajes, **úsala como referencia visual** y dile a Gemini "match this character design" subiéndola junto al prompt.

---

### 🖼️ ESCENA 4 · Grid de los 5 personajes objeto (12–17s)

> **Esta escena NO requiere generar imagen nueva** — son los 5 personajes que YA EXISTEN en `Imagenes/`:
> - `01_Vela.png` — Vela de Meditación
> - `02_Celular.png` — Celular en Mute
> - `03_Tapete.png` — Tapete de Yoga
> - `04_Olla.png` — Olla Colombiana
> - `05_Carta.png` — Carta del Tarot
>
> En Capcut: **montaje rápido 1 seg cada uno** con corte tipo "whip pan" o "flash" entre cada uno. Total 5 segundos.

**Si quieres generar UNA imagen grid 2×3 con los 5 personajes juntos** (alternativa visual potente):

```json
{
  "style": "Pixar 3D animation render, family group portrait composition",
  "subject": "five anthropomorphized objects together in a cozy mystical room, like a family photo",
  "characters": [
    "purple candle with hazel green eyes, tired-loving expression",
    "smartphone with lavender glowing screen, big sleepy hazel green eyes, lying on its side",
    "rolled yoga mat in dusty rose color, drama-queen face peeking out, hazel green eyes",
    "Colombian clay olla pot in terracotta, festive face, hazel green eyes, steam rising",
    "tarot card with crescent moon design, wise hazel green eyes peeking from card center"
  ],
  "shared_signature": "all characters have the same hazel green eyes — the family signature",
  "scene": "intimate altar room with deep purple walls, golden afternoon light from a window, white cotton candle smoke connecting the characters subtly",
  "color_palette": ["#1A0F3D deep purple", "#D4AF37 gold", "#F4E4C1 cream", "#3D2A5C plum"],
  "mood": "warm chosen family, mystical Pixar warmth, like a grandmother's altar full of life",
  "composition": "vertical 9:16, characters arranged in a loose semi-circle, all looking slightly up as if listening",
  "no_text": true,
  "aspect_ratio": "9:16",
  "resolution": "1080x1920"
}
```

---

### 🖼️ ESCENA 5 · Avatar Elara perfil mirando luna gigante (17–22s)

```json
{
  "style": "Pixar 3D animation render, mystical cinematic, MUST match character canon IMG_0227",
  "subject": "young Latin woman in profile silhouette looking up at a giant glowing moon",
  "character": {
    "name": "Elara",
    "hair": "sharp black bob with straight blunt fringe, glossy with subtle blue undertones",
    "skin": "warm peachy Latina with delicate freckles across nose and cheeks",
    "eyes": "hazel green, viewed in profile (only one visible)",
    "makeup": "dramatic mystical: dark smoky eye, defined brow, deep berry lip",
    "piercing": "small gold septum ring, tiny gold studs in ear",
    "tattoos_visible": "moon phases on inner forearm, small constellation behind ear",
    "outfit": "lavender silk kimono-style robe with gold embroidered moons, slightly off shoulder"
  },
  "pose": "standing, three-quarter back to camera but face in clean profile, chin lifted up gently, lips slightly parted as if about to speak to the moon",
  "scene": {
    "background": "deep night sky deep purple #1A0F3D with a giant detailed moon filling the upper third",
    "moon_detail": "creamy ivory with visible craters, surrounded by soft golden halo and tiny golden stars",
    "ground": "balcony with potted lavender, smoke from incense curling upward",
    "particles": "fine golden dust floating in the air, soft volumetric light"
  },
  "lighting": "moonlight from the moon hitting her face in profile, rim light along jaw and cheekbone, warm amber from below balancing the cool moon",
  "color_palette": ["#1A0F3D", "#D4AF37", "#F4E4C1 moon ivory", "#5C3D7A"],
  "mood": "sacred, intimate, woman in conversation with the moon",
  "composition": "vertical 9:16, Elara on lower-right third, moon dominates upper-left",
  "no_text": true,
  "aspect_ratio": "9:16",
  "resolution": "1080x1920"
}
```

---

### 🖼️ ESCENA 6 · Avatar Elara mira a cámara · sonrisa ligera (22–27s)

```json
{
  "style": "Pixar 3D animation render, intimate portrait, MUST match character canon IMG_0227",
  "subject": "young Latin woman portrait, looking directly at camera with a small contained smile",
  "character": {
    "name": "Elara",
    "hair": "sharp black bob with straight blunt fringe just above the eyes, glossy",
    "skin": "warm peachy Latina with delicate freckles",
    "eyes": "hazel green, large expressive Pixar-style, looking directly into camera with warmth and a hint of mischief",
    "makeup": "dramatic mystical: dark smoky eye, defined brow, deep berry lip",
    "piercing": "small gold septum ring",
    "expression": "small contained smile, the kind a wise older sister gives, eyes slightly crinkled",
    "outfit": "lavender silk kimono robe with gold embroidered moons, slightly off shoulder"
  },
  "pose": "head and shoulders portrait, slight head tilt right, looking straight into camera",
  "scene": {
    "background": "soft blurred mystical room, deep purple gradient, golden bokeh particles, single candle out of focus on the right",
    "atmosphere": "warm, intimate, like she just turned to look at you"
  },
  "lighting": "soft warm key light from upper-left, golden rim along right cheek and shoulder, eyes catch a tiny golden reflection",
  "color_palette": ["#1A0F3D", "#D4AF37", "#F4E4C1", "#7B5A8A"],
  "mood": "sacred trust, the moment a friend says something true to you, warm complicity",
  "composition": "vertical 9:16, face centered upper-third, frame from collarbone up",
  "no_text": true,
  "aspect_ratio": "9:16",
  "resolution": "1080x1920"
}
```

---

### 🖼️ ESCENA 7 · Manifiesto pantalla cierre (27–32s)

> **Esta NO se genera con IA** — se hace en Capcut. Fondo negro morado profundo `#0A0518` con luna creciente dorada pequeña + texto manifiesto en Playfair Display dorado.
>
> Texto exacto: **"Mira todo lo que siempre fuiste capaz de ser."** 🌙
>
> Debajo en Cormorant Italic más pequeño: *@soyelaranova*

---

## 🎞️ PARTE 3 · PROMPTS VEO 3 PARA ANIMAR CADA ESCENA

> **Workflow:** subes la imagen generada en Gemini/ChatGPT → pegas el prompt Veo 3 → genera 5–8 seg de video animado → descargas → arrastras a Capcut. **Sin animar manualmente nada.**

### 🎬 VEO 3 · ESCENA 1 (manos café · 3 seg)

**Prompt:**
```
Cinematic close-up of feminine hands holding a deep purple ceramic mug of steaming coffee. Warm golden morning light. The hands stay mostly still — only the steam from the coffee rises slowly and curls naturally. One subtle finger adjustment as if she's about to take a sip but pauses. Camera does an extremely slow push-in (5% zoom over 3 seconds). Bokeh background with hanging dried lavender swaying barely perceptible. Dust motes floating in the golden light. Mood: intimate, slow morning, sacred ordinary. No face visible. 9:16 vertical. Realistic Pixar 3D fusion style.
```

**Duración:** 3 segundos · **Aspect:** 9:16 · **Sin audio**

---

### 🎬 VEO 3 · ESCENA 3 (vela humeando · 5 seg)

**Prompt:**
```
Pixar 3D animated purple candle character on a wooden nightstand. The candle's wick has just been extinguished — a single thin curl of golden magical smoke rises and spirals slowly upward over 5 seconds. The candle's tired-loving hazel green eyes blink slowly twice with subtle emotion, like she's been patiently waiting. Soft dust particles float through cool moonlight beams from the window. Camera holds steady with a barely perceptible push-in. The wax body has subtle golden specks that catch the light. Mood: tender, patient, the candle has been waiting for someone to come back. 9:16 vertical. No camera shake.
```

**Duración:** 5 segundos · **Aspect:** 9:16 · **Sin audio**

---

### 🎬 VEO 3 · ESCENA 4 (grid 5 personajes · 5 seg)

**OPCIÓN A** — usar las 5 imágenes existentes con whip-pan (no necesitas Veo 3, lo hace Capcut directo)

**OPCIÓN B** — animar el grid en Veo 3:
```
Pixar 3D animated family scene: five anthropomorphized objects in a cozy mystical altar room. Each character does ONE micro-gesture in sequence over 5 seconds: the purple candle's flame flickers gently, the smartphone's screen pulses lavender once, the rolled yoga mat shifts as if waking, the Colombian clay olla releases a puff of steam, the tarot card rotates 5 degrees. All have matching hazel green eyes that blink in sync at the end. Warm golden afternoon light from a window. Soft floating dust motes. Camera does a slow gentle pan from left to right across the group. Mood: warm chosen family, like a grandmother's altar full of life. 9:16 vertical.
```

**Duración:** 5 segundos · **Aspect:** 9:16 · **Sin audio**

---

### 🎬 VEO 3 · ESCENA 5 (Elara perfil mirando luna · 5 seg)

**Prompt:**
```
Pixar 3D animated young Latin woman in profile, looking up at a giant glowing moon in deep purple night sky. Sharp black bob haircut with straight blunt fringe. Hazel green eye visible in profile. Lavender silk kimono robe with gold embroidered moons. She breathes slowly — chest rises and falls once visibly. Her lips part slightly as if about to whisper to the moon. The moon glows softly with subtle pulse. Fine golden dust particles drift through the air. Light incense smoke from below curls upward past her face. Cool moonlight rim-lights her profile while warm amber light catches her cheekbone from below. Camera is locked, no movement, just atmosphere alive. Mood: sacred, intimate conversation with the moon. 9:16 vertical.
```

**Duración:** 5 segundos · **Aspect:** 9:16 · **Sin audio**

---

### 🎬 VEO 3 · ESCENA 6 (Elara mira a cámara · 5 seg)

**Prompt:**
```
Pixar 3D animated young Latin woman portrait, looking directly into camera. Sharp black bob with blunt fringe. Hazel green expressive Pixar eyes. Warm peachy Latina skin with delicate freckles. Deep berry lipstick. Lavender silk kimono robe. Over 5 seconds: she blinks slowly once, then a small contained smile spreads — the kind of smile a wise older sister gives when she sees you. Eyes crinkle slightly with warmth. Her head tilts barely 2 degrees to the right at the end. Soft golden bokeh particles drift in the background. A single candle out of focus flickers behind her right shoulder. Warm key light from upper-left, golden rim along right cheek. Camera is locked. Mood: sacred trust, warm complicity, "I see you." 9:16 vertical.
```

**Duración:** 5 segundos · **Aspect:** 9:16 · **Sin audio**

---

## 🎬 PARTE 4 · CAPCUT · EDICIÓN MÍNIMA (45 minutos)

> **Filosofía:** todo el movimiento ya viene resuelto desde Veo 3. Capcut SOLO ensambla, agrega texto, mezcla audio.

### 📥 STEP 1 · Importar todos los assets (5 min)

Crea una carpeta `Imagenes/Reel_B_Final/` y pon ahí:
- `escena_1_manos.mp4` (de Veo 3)
- `escena_3_vela.mp4` (de Veo 3)
- `escena_4_grid.mp4` (de Veo 3) — O las 5 imágenes individuales
- `escena_5_elara_luna.mp4` (de Veo 3)
- `escena_6_elara_camara.mp4` (de Veo 3)
- `voz_B1_un_ano.mp3`
- `voz_B2_ya_volviste.mp3`
- `voz_B3_tu_casa.mp3`
- `voz_B4_hoy_es_el_dia.mp3`
- `voz_B5_soy_elara_ruido.mp3`
- `voz_B_MAESTRO_completo.mp3`
- `messy_lola_young_instrumental.mp3` (descargar de YouTube/Spotify para uso editorial)

Abre Capcut → New Project → Resolution **1080×1920** vertical → 30fps.

Drag & drop la carpeta entera al timeline.

---

### 🎬 STEP 2 · Ensamblar timeline (15 min)

Pega los clips en este orden exacto sobre la pista de video:

| Pista video | Inicio | Duración | Clip |
|---|---|---|---|
| V1 | 0s | 3s | `escena_1_manos.mp4` |
| V1 | 3s | 4s | **fondo negro morado #0A0518** (genera con Capcut Background → solid color) |
| V1 | 7s | 5s | `escena_3_vela.mp4` |
| V1 | 12s | 5s | `escena_4_grid.mp4` (o 5 fotos × 1seg con whip pan) |
| V1 | 17s | 5s | `escena_5_elara_luna.mp4` |
| V1 | 22s | 5s | `escena_6_elara_camara.mp4` |
| V1 | 27s | 5s | **fondo negro morado #0A0518** |

**Audio voz** sobre pista A1 (alinear con tiempos de la tabla maestra):
- 3s–7s → `voz_B1_un_ano.mp3`
- 7s–12s → `voz_B2_ya_volviste.mp3`
- 12s–17s → `voz_B3_tu_casa.mp3`
- 17s–22s → `voz_B4_hoy_es_el_dia.mp3`
- 22s–27s → `voz_B5_soy_elara_ruido.mp3`

> **Tip:** si usas el `voz_B_MAESTRO_completo.mp3` directo en una sola pista A1, ajusta los visuales a su flujo natural en lugar de los tiempos exactos. Suele dar mejor resultado emocional.

**Audio música** sobre pista A2:
- 0s–32s → `messy_lola_young_instrumental.mp3` al **30% volumen**, con fade-in 0–1s y fade-out 30s–32s

---

### ✏️ STEP 3 · Texto en pantalla (10 min)

Capcut → Text → Default → escribir:

**Texto 1 (0–3s):** sobre escena_1_manos.mp4
```
POV: eres la mujer que
ya no persigue a nadie.
```
- Font: **Playfair Display Bold**
- Tamaño: **80px**
- Color: **#F4E4C1** (cream/dorado claro)
- Posición: centro inferior
- Animación in: **Fade In** (0.3s)
- Animación out: **Fade Out** (0.3s)

**Texto 2 (3–7s):** sobre fondo negro
```
Llevas un año esperando que vuelva.
```
- Font: **Playfair Display Italic**
- Tamaño: **65px**
- Color: **#D4AF37** (dorado)
- Posición: centro
- Animación in: **Fade In** (0.5s)

Y debajo, tamaño 40px en Cormorant Italic:
```
(spoiler: la mujer eres tú.)
```
- Color: **#F4E4C1**
- Aparece a los 5s con fade

**Texto 3 (22–27s):** esquina inferior izquierda durante escena Elara cámara
```
@soyelaranova
```
- Font: **Lato Regular**
- Tamaño: **30px**
- Color: **#D4AF37**
- Animación: **Fade In** suave a los 24s

**Texto 4 (27–32s):** manifiesto sobre fondo negro
```
Mira todo lo que siempre fuiste capaz de ser.
🌙
```
- Font: **Playfair Display Regular**
- Tamaño: **70px**
- Color: **#D4AF37**
- Posición: centro
- Animación in: **Typewriter** o **Fade In Up** (1s)
- La luna 🌙 aparece 1 segundo después con fade

---

### 🔄 STEP 4 · Transiciones (5 min)

Solo 2 tipos de transición — Capcut → Transitions:

| Entre | Tipo | Duración |
|---|---|---|
| Escena 1 → 2 (manos → negro) | **Fade to Black** | 0.5s |
| Escena 2 → 3 (negro → vela) | **Fade In** | 0.5s |
| Escena 3 → 4 (vela → grid) | **Whip Pan Right** | 0.3s |
| Escena 4 → 5 (grid → Elara luna) | **Cross Dissolve** | 0.8s |
| Escena 5 → 6 (Elara luna → cámara) | **Cross Dissolve** | 1s |
| Escena 6 → 7 (Elara cámara → manifiesto) | **Fade to Black** | 1s |

---

### 🔊 STEP 5 · Audio mix final (5 min)

- Voz Elara (A1): **100% volumen** (peak alrededor -3dB, no satura)
- Música Lola Young (A2): **30% volumen** (peak alrededor -18dB)
- Música fade-in 0→1s, fade-out 30→32s

Listen al Reel 3 veces seguidas con audífonos y verifica:
- ✅ La voz se entiende clarísima
- ✅ La música no la tapa
- ✅ Los textos aparecen sincrónicos
- ✅ Las transiciones no son abruptas

---

### 📤 STEP 6 · Exportar (5 min)

Capcut → Export:
- **Resolution:** 1080×1920
- **Frame rate:** 30fps
- **Bitrate:** Recomendado (Capcut auto)
- **Format:** MP4
- **Save to:** `/Imagenes/Reel_B_Final/REEL_FUNDADOR_FINAL.mp4`

---

## 📝 CAPTION FINAL PARA INSTAGRAM (copiar y pegar)

```
un año esperando que vuelva.

resulta que la mujer en cuestión soy yo.

y mientras tanto, mi vela llevaba un mes intentando hablarme. mi tapete de yoga lleva más. mi celular se cansó de stalkear por mí. mi olla colombiana sigue cocinándome con paciencia. y la carta que jalé esta mañana ya sabía que iba a llegar.

hoy las escucho.

🌙 mira todo lo que siempre fuiste capaz de ser.

—

soy elara. esto es elara nova.
una marca para mujeres que ya no esperan rescate
y empiezan a contestarse a sí mismas.

→ link en bio para los 7 días de elara (gratis)

#elaranova #mujerlatinaenproceso #reinvencion #hermanamayor #mujersagrada #poderfemenino #latinasenelmundo #mujerautentica
```

---

## ✅ CHECKLIST PRE-PUBLICACIÓN

- [ ] Los 6 audios generados y descargados (5 individuales + 1 maestro)
- [ ] Las 5 imágenes generadas en Gemini/ChatGPT
- [ ] Las 5 escenas animadas en Veo 3
- [ ] Imagen Vela existente respetada como canon (no reinventar)
- [ ] Avatar Elara coincide con IMG_0227 canon (bob negro + flequillo + ojos hazel + piercing + tatuajes)
- [ ] Voz Elara colombiana paisa con emoción real (NO plana)
- [ ] Sin "mija" en ningún audio
- [ ] Sin rostro frontal de Evelyn física en ningún momento
- [ ] Hijo NO mencionado, NO referenciado
- [ ] Paleta morado #1A0F3D + dorado #D4AF37 respetada
- [ ] Texto pantalla en Playfair Display + Cormorant + Lato
- [ ] Música Lola Young al 30%, voz al 100%
- [ ] Total Reel: 32 segundos
- [ ] Resolución: 1080×1920
- [ ] Test en celular (no solo laptop)
- [ ] Caption preparado en Notas iPhone

---

## 🔄 ORDEN DE PRODUCCIÓN ÓPTIMO (3 horas total)

| Bloque | Tiempo | Actividad |
|---|---|---|
| 1 | 30 min | Generar los 6 audios en ElevenLabs (ya estás logueada) |
| 2 | 45 min | Generar 5 imágenes en Gemini Nano Banana / ChatGPT con los JSON |
| 3 | 60 min | Generar 5 videos en Veo 3 con los prompts |
| 4 | 45 min | Ensamblar en Capcut (steps 1–6 arriba) |

---

🌙 *"Mira todo lo que siempre fuiste capaz de ser."*

*Concepto B viral · 32 seg · POV Emocional · Producción 27 abril 2026*
