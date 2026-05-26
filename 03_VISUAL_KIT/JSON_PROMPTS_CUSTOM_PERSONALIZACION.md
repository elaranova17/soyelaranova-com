# 🌙 JSON PROMPTS · personalización completa de plataformas
## Banners · covers · highlights · backgrounds — todo en UN SOLO chat Gemini

**Importante (optimización créditos):** copia cada JSON dentro del **MISMO chat** de Gemini Nano Banana. Un chat = un proyecto. Iterar dentro del mismo chat = NO genera nueva conversación = ahorra créditos.

**Reglas aplicadas a TODOS los prompts:**
- Paleta marca: `#1A0F3D` morado profundo · `#D4AF37` dorado · `#F4E4C1` cream · `#7B5A8A` lavanda
- Tipografía marca (cuando aparezca texto): **Playfair Display** · **Lato** · **Cormorant Italic**
- Avatar Elara canon: bob negro + flequillo recto + ojos hazel + maquillaje místico + **aro nostril LATERAL (NO septum)** + piel peachy con pecas
- Sin watermark · sin sparkles decorativos · sin texto incrustado en imagen (texto se agrega en Capcut/Canva después)
- Pixar 3D animation render, hyper-detailed, cinematic golden hour

---

## 1️⃣ BANNER YOUTUBE · 2560×1440 px

**Especificación crítica:** YouTube muestra distintos crops según device:
- **TV:** todo el banner 2560×1440
- **Desktop:** 2560×423 (centro horizontal)
- **Mobile:** 1546×423 (centro)
- **Safe area (siempre visible):** **1235×338 px en el CENTRO**

Por eso el TEXTO/elementos clave deben estar en el centro del frame.

**Prompt JSON:**

```json
{
  "purpose": "YouTube channel banner — Elara Nova",
  "style": "Pixar 3D animation render, mystical wellness brand, cinematic golden hour",
  "aspect_ratio": "2560:1440 horizontal",
  "resolution": "max",
  "composition": "horizontal landscape with critical visual elements concentrated in the CENTER 1235x338 px safe area for cross-device visibility",
  "scene": {
    "background": "expansive deep purple #1A0F3D night sky transitioning to soft lavender #7B5A8A at horizon, subtle starfield with golden particles floating",
    "central_focal": "large detailed crescent moon in golden #D4AF37 cream #F4E4C1 ivory occupying upper-center, surrounded by soft halo and tiny stars",
    "left_third": "ethereal flowing curtain of warm light, jacaranda branches with violet flowers extending from edge",
    "right_third": "constellation outlines connecting to subtle moon phases sequence (waxing crescent → full → waning), all in delicate gold linework",
    "ground_implied": "soft cloud-like mist at the bottom edge, dust motes catching light",
    "no_human_figure": true
  },
  "lighting": "golden hour warmth radiating from the central moon outward, cool deep purple shadows, subtle sun-flare bokeh from the upper-right",
  "color_palette": {
    "primary": "#1A0F3D deep purple",
    "secondary": "#D4AF37 gold",
    "tertiary": "#F4E4C1 cream",
    "accent": "#7B5A8A soft lavender"
  },
  "mood": "sacred, intimate, woman walking lightly under the moon, brand promise of self-recovery",
  "negative_prompts": [
    "no text, no typography, no logos",
    "no human face, no body",
    "no watermarks",
    "no sparkles or magical bursts",
    "no pixelated edges"
  ],
  "post_production_note": "Text 'Elara Nova' + tagline 'Mira todo lo que siempre fuiste capaz de ser' will be added in Canva over the central safe area in Playfair Display Italic gold"
}
```

---

## 2️⃣ FACEBOOK COVER · 1640×624 px

**Especificación:** FB cover muestra horizontal 1640×624 desktop, recortado en mobile a centro 820×312. Mantener elementos clave en CENTRO horizontal.

**Prompt JSON:**

```json
{
  "purpose": "Facebook fanpage cover — Elara Nova",
  "style": "Pixar 3D animation render, mystical wellness brand, golden hour cinematic",
  "aspect_ratio": "1640:624 horizontal",
  "resolution": "max",
  "composition": "horizontal banner, key elements centered for mobile crop safety",
  "scene": {
    "background": "soft gradient from deep purple #1A0F3D top-left to warm honey #F4E4C1 bottom-right, like a sunset transitioning to night",
    "left_side": "stylized 3D Pixar candle in deep purple wax with soft golden flame, sitting on a wooden surface, dust motes floating",
    "center_left": "open journal with handwritten cursive (illegible / blurred), tarot cards face-down with golden moon embossing on backs",
    "center_right": "bouquet of dried lavender and white sage tied with gold ribbon, partial vase",
    "right_side": "potted lavender plant with violet flowers, small crystal cluster (clear quartz with golden tint) in front",
    "atmospheric": "thin tendrils of incense smoke connecting elements, soft golden particles floating throughout, slight bokeh"
  },
  "lighting": "warm honey golden hour from upper-right, candle adding warm orange glow, cool blue ambient fill in shadows",
  "color_palette": {
    "primary": "#1A0F3D deep purple",
    "secondary": "#D4AF37 gold",
    "tertiary": "#F4E4C1 cream",
    "accent": "#7B5A8A lavender"
  },
  "mood": "sacred altar, woman's intimate ritual space, contemplative wellness",
  "no_human": true,
  "no_text_in_image": true,
  "no_watermark": true,
  "post_production_note": "Brand wordmark 'Elara Nova' goes top-center over the gradient sky in Playfair Display"
}
```

---

## 3️⃣ LINKTREE BACKGROUND · 1080×1920 vertical

**Especificación:** background mobile-first 9:16 que se vea bien detrás de los botones blancos. Mantener composición SOFT con espacio negativo en el centro.

**Prompt JSON:**

```json
{
  "purpose": "Linktree page background — Elara Nova",
  "style": "Pixar 3D atmospheric, soft vertical landscape composition",
  "aspect_ratio": "9:16 vertical",
  "resolution": "1080x1920",
  "composition": "vertical scroll-friendly, with subtle visual interest at top and bottom, neutral middle for button overlay",
  "scene": {
    "top_third": "deep purple #1A0F3D night sky with golden crescent moon upper-right, scattered stars, soft constellation",
    "middle_third": "soft cloud-like mist transitioning from purple to warm lavender #7B5A8A, very minimal detail (this is where buttons will be placed)",
    "bottom_third": "abstract jacaranda branches with violet flowers extending up from edge, golden petals slowly falling, soft golden bokeh"
  },
  "lighting": "moonlight glow from top-right, ambient soft fill, dreamy",
  "color_palette": {
    "dominant": "#1A0F3D deep purple",
    "accent": "#D4AF37 gold",
    "soft_fill": "#7B5A8A lavender"
  },
  "mood": "intimate sacred night, the user feels held while browsing the page",
  "negative_prompts": [
    "no busy patterns in middle third",
    "no faces or figures",
    "no text or logos",
    "no harsh contrasts that would clash with white/cream Linktree buttons"
  ],
  "post_production_note": "Linktree free plan does NOT allow custom backgrounds. This image is for PRO plan or for use on other platforms (story background, lock screen, etc.)"
}
```

> ⚠️ **Nota importante Linktree FREE:** el plan free **NO permite cambiar background** — solo themes presets. Este JSON es útil si hacemos upgrade a PRO ($6/mes) más adelante. Por ahora, el theme default funciona bien.

---

## 4️⃣ HIGHLIGHTS COVERS INSTAGRAM · 4 piezas 1080×1920

Los Highlights de IG aparecen como círculos pequeños 161×161 en el perfil, pero se suben como 1080×1920. El contenido debe estar **centrado** en el frame.

### A) 🌙 manifiesto

```json
{
  "purpose": "Instagram Highlight cover · MANIFIESTO",
  "style": "minimalist mystical illustration, Pixar 3D fusion",
  "aspect_ratio": "9:16",
  "resolution": "1080x1920",
  "composition": "icon centered in frame, generous padding, will be cropped to circle",
  "subject": "single elegant golden crescent moon icon, centered, with delicate constellation lines around it forming abstract feminine silhouette",
  "background": "solid deep purple #1A0F3D",
  "icon_color": "warm gold #D4AF37",
  "no_text": true,
  "mood": "sacred, foundational"
}
```

### B) ✨ rituales

```json
{
  "purpose": "Instagram Highlight cover · RITUALES",
  "style": "minimalist mystical illustration",
  "aspect_ratio": "9:16",
  "resolution": "1080x1920",
  "subject": "single lit candle icon with smoke curling up, centered, gold linework",
  "background": "solid deep purple #1A0F3D",
  "icon_color": "warm gold #D4AF37",
  "composition": "centered with breathing room",
  "no_text": true,
  "mood": "intimate, contemplative"
}
```

### C) 🃏 tarot del día

```json
{
  "purpose": "Instagram Highlight cover · TAROT",
  "style": "minimalist mystical illustration",
  "aspect_ratio": "9:16",
  "resolution": "1080x1920",
  "subject": "single tarot card icon (rectangular silhouette) with crescent moon and stars on its face, centered, gold linework on dark purple",
  "background": "solid deep purple #1A0F3D",
  "icon_color": "warm gold #D4AF37",
  "no_text": true,
  "mood": "mystical, daily"
}
```

### D) 💌 testimonios

```json
{
  "purpose": "Instagram Highlight cover · TESTIMONIOS",
  "style": "minimalist illustration",
  "aspect_ratio": "9:16",
  "resolution": "1080x1920",
  "subject": "single envelope icon with a small crescent moon emerging from inside (like a letter being opened), centered, gold linework on dark purple",
  "background": "solid deep purple #1A0F3D",
  "icon_color": "warm gold #D4AF37",
  "no_text": true,
  "mood": "intimate, communal"
}
```

---

## 5️⃣ STORY TEMPLATE REUSABLE · 1080×1920

Para futuros teasers, lanzamientos, anuncios. Plantilla genérica con espacio para texto que se agrega después.

```json
{
  "purpose": "Instagram/FB Story template — Elara Nova brand",
  "style": "Pixar 3D atmospheric, branded",
  "aspect_ratio": "9:16",
  "resolution": "1080x1920",
  "composition": "vertical with empty center for text overlay, decorative elements at top and bottom edges only",
  "scene": {
    "top_edge": "soft golden crescent moon icon top-center with delicate stars scattered around, occupying top 15% of frame",
    "middle_60_percent": "minimal abstract gradient deep purple to lavender, very subtle texture, NO busy elements (this is where text overlay goes)",
    "bottom_edge": "subtle jacaranda branch with violet flowers from one side, golden petals falling, occupying bottom 15%"
  },
  "color_palette": {
    "primary": "#1A0F3D deep purple",
    "secondary": "#D4AF37 gold",
    "tertiary": "#7B5A8A soft lavender"
  },
  "mood": "sacred, on-brand, ready for any short message",
  "no_text_in_image": true,
  "no_human": true,
  "post_production_note": "Text added in Canva or directly in IG/FB story editor"
}
```

---

## 6️⃣ POST CARD GENÉRICO · 1080×1080 cuadrado

Para posts de feed IG cuando no es Reel. Ideal para frases del manifiesto, citas, calendario lunar, etc.

```json
{
  "purpose": "Instagram feed post template — Elara Nova",
  "style": "Pixar 3D minimalist, on-brand",
  "aspect_ratio": "1:1 square",
  "resolution": "1080x1080",
  "composition": "decorative frame with empty center for text",
  "scene": {
    "frame_corners": "delicate golden constellation linework in 4 corners",
    "top_center": "small crescent moon golden icon",
    "center": "empty deep purple #1A0F3D space for text overlay (~70% of canvas)",
    "bottom_center": "small triple-dot delimiter in gold"
  },
  "color_palette": {
    "primary": "#1A0F3D",
    "accent": "#D4AF37",
    "text_safe_zone": "#1A0F3D solid in center 70%"
  },
  "no_text_in_image": true,
  "no_human": true
}
```

---

## 🎨 INSTRUCCIONES DE USO · paso a paso

**1. Abre tu chat existente de Gemini (el de la imagen del Reel) o crea UN solo chat nuevo.**

**2. Pega el primer JSON (el del banner YouTube).**

**3. Cuando Gemini genere, descarga la imagen.**

**4. En el MISMO chat, escribe:** "ahora genera la imagen B (Facebook cover)" + pega el JSON #2.

**5. Repite para cada uno.**

**6. Si una sale mal, dile en el mismo chat:** "regenera la última con [cambio específico]" → NO abras nuevo chat.

---

## 💰 COSTO ESTIMADO

| Imagen | Plan Gemini Pro |
|---|---|
| YouTube banner | 0 créditos (incluido en Pro) |
| Facebook cover | 0 créditos |
| Linktree background | 0 créditos |
| 4 highlights covers | 0 créditos cada uno |
| Story template | 0 créditos |
| Post card | 0 créditos |
| **TOTAL** | **gratis dentro de tu plan Gemini Pro** |

---

## 📋 CHECKLIST POST-GENERACIÓN

- [ ] Banner YouTube subido en youtube.com/account → Customize channel → Banner
- [ ] Cover Facebook subido en fanpage Elara Nova → Edit cover photo
- [ ] 4 Highlights covers subidos en IG (cuando publiques las primeras stories)
- [ ] Story template guardado en iPhone → Camera Roll para usar en stories diarias
- [ ] Post card template usado en próximo post de feed (manifiesto frase corta)

---

🌙 *"Mira todo lo que siempre fuiste capaz de ser."*

*Prompts JSON optimizados · Elara Nova · 27 abril 2026*
