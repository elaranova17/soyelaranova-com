# 🌙 REEL VIRAL C · AVATAR ELARA recreando @cata_fleurs
## Modelado del viral 289.7K likes · adaptado 100% a Elara Nova

**Fecha producción:** 26 abril 2026
**Lanzamiento:** 27 abril 2026 · 19:00 Madrid / 13:00 Bogotá
**Formato:** 6 segundos · vertical 1080×1920 · una sola toma · texto fijo

---

## 🎯 LO QUE COPIAMOS DEL VIRAL ORIGINAL (estructura ganadora)

| Elemento | Original cata_fleurs | Elara Nova |
|---|---|---|
| Duración | 5.5 seg | **6 seg** |
| Formato | Selfie self-handheld brazo extendido | **Avatar 3D Elara mismo gesto** |
| Cortes | 0 (una sola toma) | **0 (una sola toma)** |
| Texto pantalla | Estático todo el video | **Estático todo el video** |
| Tono visual | Sereno + sonrisa + aire libre | **Sereno + sonrisa contenida + aire libre** |
| Audio | Music trending 53 seg (usa 5.5) | **Mismo trending sound recortado a 6 seg** |
| Caption | "solo quiero tranquilidad #reflexion #motivation" | **(versión Elara abajo)** |

---

## 📝 TEXTO EN PANTALLA · OPCIÓN C CONFIRMADA

```
no necesito que vuelvas.
no necesito que me entiendas.
solo me necesito a mí —
y por primera vez,
eso alcanza.
```

**Settings de texto** (igual que viral original):
- Font: **Tw Cen MT Bold** o **Avenir Heavy** (lookalike del original)
- Tamaño: **52px**
- Color: **#FFFFFF** (blanco puro)
- Sombra: `text-shadow: 0 1px 4px rgba(0,0,0,0.35)` (sombra muy sutil)
- Posición: tercio superior centrado
- Animación: **Fade In 0.4s** al inicio · estático el resto del video

---

## 🎙️ AUDIO TRENDING · YA RECORTADO

✅ Listo en workspace:
- [`trending_sound_6seg.mp3`](computer:///sessions/practical-beautiful-ptolemy/mnt/Elara nova -- Fullest/viral_modelado/cata_fleurs/trending_sound_6seg.mp3) — 6.03 seg (versión final)
- [`trending_sound_7seg.mp3`](computer:///sessions/practical-beautiful-ptolemy/mnt/Elara nova -- Fullest/viral_modelado/cata_fleurs/trending_sound_7seg.mp3) — 7.03 seg (alternativa con respiro)

**En Capcut:** importar al 100% volumen. NO bajar al 30% — este es el sound trending y necesita estar audible para que el algoritmo lo identifique.

---

## 🎨 PROMPT JSON · GEMINI NANO BANANA / CHATGPT (imagen base avatar Elara)

Pega este JSON en Gemini para generar la imagen base del avatar Elara caminando:

```json
{
  "style": "Pixar 3D animation render, hyper-detailed character, soft cinematic golden hour lighting, MUST match Elara character canon IMG_0227",
  "subject": "young Latin woman walking down a tree-lined urban street at golden hour, holding an invisible selfie camera with her arm extended forward and slightly up, captured mid-stride with serene contained smile",
  "character": {
    "name": "Elara",
    "hair": "sharp glossy black bob with straight blunt fringe just above the eyebrows, ends just below jawline, slight movement from walking",
    "skin": "warm peachy Latina with delicate freckles across nose bridge and cheekbones",
    "eyes": "large hazel green Pixar-style eyes, slightly closed in a serene smile, looking up toward the trees with peace",
    "makeup": "dramatic mystical: dark smoky eye, defined brow, deep berry plum lip, subtle highlight on cheekbones",
    "piercing": "small gold septum ring, tiny gold hoop in ear",
    "tattoos_visible": "delicate moon phases on inner forearm visible as the arm extends, small constellation behind ear",
    "outfit": "oversized cream-lavender knit sweater, soft cozy texture, slightly off shoulder showing collarbone, paired with cream wide-leg trousers, beige tote bag on opposite shoulder",
    "pose": "mid-walk, arm extended forward holding invisible phone for selfie, head tilted slightly back looking up at the tree canopy, contained peaceful smile, hair softly swaying"
  },
  "scene": {
    "location": "tree-lined urban sidewalk in a residential city neighborhood, blooming jacaranda or similar trees with small purple/lavender flowers above her head creating a natural canopy",
    "background": "blurred mid-rise apartment buildings beyond the trees, soft golden hour sky in pale peach and lavender tones, parked cars further back slightly out of focus",
    "ground": "concrete sidewalk with patches of fallen lavender petals, hint of green grass strip beside",
    "time_of_day": "golden hour just before sunset, warm honey light angled from the right, long soft shadows"
  },
  "lighting": "warm honey golden light from upper-right hitting her face and shoulder, rim light along jaw and bob hair edge, ambient cool sky-blue light filling shadows, sun-flare bokeh through tree branches",
  "color_palette": ["#F4E4C1 cream/honey", "#D4AF37 gold accent", "#7B5A8A soft lavender", "#5C4A3A warm tree brown", "#1A0F3D deep purple in shadows"],
  "mood": "serene self-possessed peace, sacred ordinary moment, woman who has chosen herself and is walking lightly because of it",
  "composition": "vertical 9:16, character centered slightly lower-left, tree canopy filling upper third, pathway leading depth into background, room above her head for text overlay",
  "camera": "selfie POV-style perspective, slight low angle looking up, shallow depth of field with bokeh trees, 35mm lens equivalent, natural handheld feel",
  "no_text_in_image": true,
  "no_watermark": true,
  "aspect_ratio": "9:16",
  "resolution": "1080x1920"
}
```

> **TIP:** Si tienes la imagen `00_Elara_Avatar_Canon.jpg` en el workspace, **subla a Gemini junto al prompt** y di: "match this character design exactly — same hair, eyes, freckles, makeup, vibe."

---

## 🎬 PROMPT VEO 3 · ANIMAR EL VIDEO (6 segundos)

Sube la imagen generada arriba a Veo 3 y pega este prompt de movimiento:

```
Pixar 3D animated young Latin woman with sharp black bob walking down a tree-lined sidewalk at golden hour, holding an invisible selfie camera with arm extended forward. Over 6 seconds: she walks naturally with smooth forward momentum, her bob hair softly sways, her sweater shifts gently with the walking motion. She tilts her head slightly back looking up at the tree canopy with a contained serene smile, eyes briefly closing then opening. Tree leaves above her flutter slightly in a soft breeze. Dappled golden light shifts across her face and shoulders as she moves. Tiny lavender petals drift down through the frame. The background buildings shift parallax slightly indicating forward motion. Camera follows her in selfie-style perspective, locked but with the subtle organic movement of a handheld phone. Mood: serene self-possession, sacred ordinary, the lightness of choosing yourself. 9:16 vertical. No camera shake, no cuts, no zoom — one continuous take. Soft natural ambient with golden hour color grade.
```

**Settings Veo 3:**
- Duración: **6 segundos**
- Aspect: **9:16 vertical**
- Sin audio (lo agregamos en Capcut)

---

## ✏️ MONTAJE CAPCUT · 15 minutos máximo

### Step 1 · Importar (2 min)
- Video animado de Veo 3 → pista V1
- `trending_sound_6seg.mp3` → pista A1 al 100% volumen

### Step 2 · Texto overlay (5 min)
Capcut → Text → Default. Pega:
```
no necesito que vuelvas.
no necesito que me entiendas.
solo me necesito a mí —
y por primera vez,
eso alcanza.
```
- Font: **Tw Cen MT Bold** (si no, **Avenir Heavy** o **Montserrat Bold**)
- Tamaño: **48-52px**
- Color: **blanco #FFFFFF**
- Sombra ligera: opacity 25%, distance 2, blur 4
- Posición: centro tercio superior
- **Animación in:** Fade In 0.4s
- **Animación out:** ninguna (texto se queda fijo todo el video)
- **Duración del texto:** desde segundo 0.3 hasta el final del video

### Step 3 · Ajustes (3 min)
- Asegurar audio NO satura (peak < -3dB)
- Verificar texto se lee claramente sobre cualquier frame del video
- Si una zona del texto se confunde con el fondo claro, aumenta sombra o opacity del fondo de texto

### Step 4 · Exportar (2 min)
- Resolution: **1080×1920**
- Frame rate: **30fps**
- Format: **MP4**
- Save as: `REEL_VIRAL_C_AVATAR_ELARA.mp4`

---

## 📱 CAPTION INSTAGRAM (copy-paste optimizado · marketing digital aplicado)

```
solo quiero tranquilidad. 🌙

no la que se compra,
no la que se finge,
no la que llega cuando alguien al fin contesta.

la otra. la que llega cuando dejé de esperar.

—

soy elara. y aquí no fingimos luz, aquí la encontramos.

→ link en bio · 7 días gratis para empezar a quedarte contigo

#elaranova #soloquierotranquilidad #healingera #mujerlatinaenproceso #reinvencionfemenina #hermanamayor #autoamor #soltar #saneresamar #mujerautentica #brujamoderna #lunallena #autoconocimiento #reflexion #motivation #mujerempoderada #mujerlibre #healingjourney #spiritualawakening #mujerdivina
```

### 🎯 ESTRATEGIA DE HASHTAGS · pirámide óptima 2026

**Capa 1 · Top trending (millones de posts) · 4 hashtags**
`#reflexion #motivation #healingera #mujerlatinaenproceso`

**Capa 2 · Medianos del nicho (cientos de miles) · 6 hashtags**
`#reinvencionfemenina #autoamor #soltar #autoconocimiento #brujamoderna #mujerempoderada`

**Capa 3 · Específicos / branded (decenas de miles) · 7 hashtags**
`#elaranova #soloquierotranquilidad #hermanamayor #saneresamar #mujerautentica #lunallena #healingjourney`

**Capa 4 · Bridge a audiencia anglo (opcional · 3 hashtags)**
`#spiritualawakening #mujerdivina #mujerlibre`

**Por qué esta pirámide:** mezcla de hashtags amplios para discovery + nicho para fidelidad + branded para tu universo + crossover anglo para alcance internacional. Total: 20 hashtags (límite IG es 30, óptimo viral 2026 es 15-25).

---

## 🚀 BONUS · 3 historias para acompañar el lanzamiento

**Story 1 (10 min antes del Reel · 18:50)**
> Imagen: pantalla negra morada con texto blanco
> *"hoy, antes de que se ponga el sol en Madrid, algo nace."*
> *"déjame mostrarte qué."*
> Sticker: countdown a las 19:00

**Story 2 (5 min después del Reel · 19:05)**
> Imagen: el frame del avatar Elara mirando arriba
> *"si te identificaste, deslízame el corazón 💜"*
> Sticker: link al Reel

**Story 3 (45 min después · 19:45)**
> Imagen: captura del Reel con métricas iniciales
> *"todavía no me lo creo. gracias."*
> Sticker: pregunta abierta "¿qué te llevas tú?"

---

## ✅ CHECKLIST FINAL ANTES DE PUBLICAR

- [ ] Imagen avatar Elara generada en Gemini · ojos hazel + bob + maquillaje místico verificado
- [ ] Video animado en Veo 3 · 6 seg · una sola toma · sin cortes
- [ ] Texto pantalla legible sobre todos los frames
- [ ] Audio trending al 100% sin saturar
- [ ] Caption + 20 hashtags pegados en Notas iPhone listos
- [ ] Story 1 programada o lista para subir 18:50
- [ ] Reglas sagradas verificadas: avatar 3D OK con rostro · Evelyn física no aparece · paleta morado+dorado · sin "mija"
- [ ] Test en celular (no solo laptop)
- [ ] Cuenta @soyelaranova lista con bio + foto + link bio Linktree

---

## 🌙 POR QUÉ ESTA VERSIÓN PUEDE SUPERAR AL ORIGINAL

1. **Universo único** — la cata_fleurs es UNA chica caminando · Elara es un PERSONAJE 3D animado con identidad de marca = más memorable
2. **Audio trending bien recortado** — 6 seg perfectos con la música ya popular
3. **Texto más fuerte** — el original termina en "tranquila" (genérico) · el tuyo termina en "eso alcanza" (revelación)
4. **Hashtag mix profesional** — el original usa 2 hashtags · tú usas 20 con pirámide óptima
5. **Caption con hook + CTA** — el original solo tiene caption corto · el tuyo tiene gancho emocional + venta del lead magnet
6. **Brand consistency** — esto NO es un Reel suelto, es la presentación de una marca que tendrá 30+ Reels más con el mismo universo Pixar

---

🌙 *"Mira todo lo que siempre fuiste capaz de ser."*

*Elara Nova · 27 abril 2026 · primer Reel viral modelado*
