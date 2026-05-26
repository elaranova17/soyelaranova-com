# 🃏 REEL CARTA 12 · LA FEMME FAITE DE FLEURS · TRANSFORMACIÓN

**Proyecto CapCut:** 0427
**Fecha trabajo:** 28 abr 2026
**Status:** Borrador armado · necesita 6 ajustes para publicar

---

## 🎴 LA CARTA

**Carta 12 del oráculo Le Bois Sacré** (Bosque Sagrado)
- **Nombre:** La Femme Faite de Fleurs (La Mujer Hecha de Flores)
- **Galés:** Blodeuwedd
- **Tema:** TRANSFORMACIÓN
- **Categoría:** Les Énergiteurs

**🌟 Match perfecto con marca Elara:**
- La mujer de la carta tiene **bob + flequillo + ojos hazel** (canon Elara ✓)
- Transformación = manifiesto Elara *"Mira todo lo que siempre fuiste capaz de ser"*
- Es ORÁCULO (no tarot) → respeta regla de marca

---

## 📂 Archivos organizados

```
12_carta/
├── audio/
│   └── ElevenLabs_..._sb95_v3.mp3  (591KB · 34.8s)
├── visual/
│   └── Card_reveal_with_..._202.mp4  (22MB · 8s original → 24s con slow 0.3X)
├── proyecto_capcut/
│   └── (proyecto CapCut completo backup · 34 archivos)
└── exportado/
    └── (vacío — destino del MP4 final)
```

**Portada del proyecto:** `proyecto_capcut/draft_cover.jpg` (preciosa, mujer entre flores con bob+flequillo)

---

## 📊 Diagnóstico del edit actual

### Lo que YA TIENE ✅

| Elemento | Status | Nota |
|----------|--------|------|
| Canvas 1080×1920 (9:16 vertical) | ✅ | Formato correcto reel |
| Video carta reveal | ✅ | Hermoso, slow-mo 0.3X funciona |
| Audio voz Elara | ✅ | Voice clone profesional (sb95 stability 45) |
| 30 FPS | ✅ | Estándar |
| Tema TRANSFORMACIÓN | ✅ | On-brand al 100% |

### Lo que LE FALTA 🔴

| # | Falta | Impacto |
|---|-------|---------|
| 1 | **TEXTO EN PANTALLA (hook)** | 🔴 Crítico — sin esto no para el scroll |
| 2 | **CTA con keyword LUNA** | 🔴 Crítico — sin esto no genera DMs |
| 3 | **Duración 24s** (muy larga) | 🟠 Alto — recortar a 9-12s |
| 4 | Audio se corta antes que el video (34.8s > 24s) | 🟠 Alto — recortar audio también |
| 5 | Stickers decorativos | 🟡 Medio — usar 2-3 del library |
| 6 | Cover personalizado | 🟡 Medio — el actual sirve pero falta texto |

---

## 🛠️ AJUSTES EN CAPCUT (paso a paso)

### Edit 1 · CORTAR A 12 SEGUNDOS
1. En la timeline, click sobre el video `Card_reveal_with...mp4`
2. Move playhead a `00:00:12:00`
3. Click derecho → **Dividir** (o Cmd+B)
4. Selecciona la parte derecha → Delete
5. Lo mismo con el audio: divide en `00:00:12:00` y borra el resto

### Edit 2 · AGREGAR TEXTO HOOK (primeros 3 segundos)
1. Click en pestaña **Texto** arriba a la izquierda
2. Click **Agregar texto**
3. Escribe: **`TU CARTA HOY:`**
4. Aparece en `00:00:00` → arrastra a `00:00:00:00 - 00:00:02:00` (2 segundos)
5. **Estilo del texto:**
   - Fuente: Playfair Display Black o similar serif elegante
   - Tamaño: **120pt**
   - Color: **#F8F1E4** (cream)
   - Sombra: 0 4 8 negro
   - Posición: Centrado horizontal, **300px desde arriba**
6. Animación entrada: "Aparecer" 0.5s

### Edit 3 · TEXTO PRINCIPAL (segundos 3-9)
1. Otro texto: **`TRANSFORMACIÓN`**
2. Tiempo: `00:00:03:00 - 00:00:09:00` (6 segundos)
3. Estilo:
   - Fuente: Playfair Display Black
   - Tamaño: **180pt** (HERO grande)
   - Color: **#D4A857** (dorado)
   - Stroke dorado: 2px
   - Sombra dorada glow
   - Posición: Centrado, **400px desde arriba**
4. Animación: "Crecer suave" 0.8s entrada · "Desvanecer" 0.5s salida

### Edit 4 · SUBTÍTULO (segundos 9-12)
1. Texto: **`Es tu momento.`**
2. Tiempo: `00:00:09:00 - 00:00:12:00`
3. Estilo:
   - Fuente: Allura Script o Pinyon Script
   - Tamaño: 90pt
   - Color: dorado #F4D77A
   - Posición: centrado, **350px desde abajo**
4. Animación: "Aparecer letra por letra"

### Edit 5 · CTA INFERIOR (segundos 8-12)
1. Texto: **`comentá LUNA`**
2. Tiempo: `00:00:08:00 - 00:00:12:00`
3. Estilo:
   - Fuente: Cormorant Italic SemiBold
   - Tamaño: 70pt
   - Color: blanco cálido #F8F1E4
   - Background: rectángulo morado #3D1A4A redondeado
   - Posición: **150px desde abajo** centrado
4. Animación: "Aparecer desde abajo" en segundo 8

### Edit 6 · STICKERS DECORATIVOS (opcional)
Subí 2 stickers desde tu library:
- **Esquina superior izquierda:** `A01_luna_creciente.png` tamaño 80px
- **Esquina inferior izquierda:** `A05_estrella_4puntas.png` tamaño 50px

(Aparecen toda la duración con opacidad 70%)

### Edit 7 · COVER PERSONALIZADO
1. Click en **Portada** abajo a la izquierda de timeline
2. Selecciona el frame del segundo **00:00:04** (cuando la carta está completa visible)
3. Agrega texto: **`CARTA 12`** + **`TRANSFORMACIÓN`**
4. Guarda como cover

---

## 📤 EXPORTAR

1. Click **Exportar** arriba a la derecha
2. Configuración:
   - Resolución: **1080p**
   - Frame rate: **30 fps**
   - Calidad: **Recomendada** o **Alta**
   - Codec: H.264
   - Formato: MP4
3. Nombre: `ElaraNova_Reel_Carta12_Transformacion_v1.mp4`
4. Carpeta destino: `04_PRODUCCION_REEL/cartas_oraculo/12_carta/exportado/`
5. Click Exportar (~2 minutos)

---

## 📱 PUBLICACIÓN INSTAGRAM

### Caption (paste-ready):

```
La Femme Faite de Fleurs me apareció hoy. 🌸

No es coincidencia que el oráculo te la muestre justo ahora.

12 — TRANSFORMACIÓN.
Lo que estaba dormido en ti, ya empezó a abrir.

No tienes que entenderla.
Solo tienes que dejarla pasar.

✨

¿Sentís que algo dentro tuyo ya empezó a cambiar?
Comentá la palabra LUNA y te paso 7 días gratis para acompañarte el proceso.
```

### Hashtags (exactos, en este orden):

```
#oraculo #cartadeldia #transformacionpersonal #mujerlatinaenproceso #reinvencionfemenina #brujamoderna #hermanamayor #elaranova #healingjourney #lebois sacre
```

→ 10 hashtags, mezcla de generales (oraculo, cartadeldia) + específicos de marca (elaranova, hermanamayor) + nicho (lebois sacre)

### Hora de publicación

**Recomendado:** 8:30 PM hora Colombia / 10 PM hora Madrid → audiencia mujer latina online en pico nocturno

### Cover de publicación

Usar el cover que armaste en CapCut (Edit 7) o seleccionar el frame de la carta completa con texto "CARTA 12 · TRANSFORMACIÓN" sobreimpuesto.

---

## 🎯 POR QUÉ ESTE REEL PUEDE SER EL VIRAL

| Elemento viral | Tu reel ✓/✗ |
|----------------|-------------|
| Hook de curiosity (carta del día) | ✅ "Tu carta hoy" |
| Visual hipnótico (slow-mo carta floral) | ✅ Card reveal 0.3X |
| Voz autoridad (voice clone elegante) | ✅ ElevenLabs profesional |
| Tema universal (transformación) | ✅ Resuena en todas |
| Duración óptima (9-12s) | 🟡 Después del Edit 1 |
| Texto sobreimpuesto | 🔴 Edit 2-5 |
| CTA claro keyword | 🔴 Edit 5 |

**Score actual:** 4/7 · **Después de los edits:** 7/7

Compara con el reel de magia.divina.kd (750K likes) — mismo estilo místico AI, voz autoritativa, tema de alma. **Tu producto está al nivel viral.** Solo falta el frame text + CTA.

---

## 🔁 SI ESTO PEGA

Tienes 70+ cartas más en el oráculo Le Bois Sacré → **70 reels potenciales** con la misma fórmula:
1. Card reveal + slow-mo
2. Voz Elara narrando el significado
3. Texto sobreimpuesto: número + nombre + tema
4. CTA "comentá LUNA"

Si la carta 12 pega bien (>5K views en 24h), automatiza la producción de las próximas 5 cartas semana siguiente.

**Cronograma sugerido:**
- Esta semana: carta 12 publicada
- Si pega: cartas 1, 7, 13, 22, 33 (números simbólicos)
- Si no pega: revisar hook texto, no la idea

---

## ✅ CHECKLIST FINAL ANTES DE PUBLICAR

- [ ] Edit 1 · cortado a 12s
- [ ] Edit 2 · texto "TU CARTA HOY"
- [ ] Edit 3 · texto "TRANSFORMACIÓN"
- [ ] Edit 4 · subtítulo "Es tu momento."
- [ ] Edit 5 · CTA "comentá LUNA"
- [ ] Edit 6 · 2 stickers decorativos (opcional)
- [ ] Edit 7 · cover personalizado
- [ ] Exportado MP4 1080p en /exportado/
- [ ] Caption pegado
- [ ] Hashtags pegados
- [ ] Cover seleccionado
- [ ] Publicado a las 8:30 PM
- [ ] Activado ManyChat para responder DMs "LUNA" (cuando llegues a 1.5K seguidores)

---

## 💎 INSIGHT FINAL

Este reel es 80% mejor que el primero que publicaste (el de "solo quiero tranquilidad"). Por dos razones:

1. **Tiene gancho específico** ("carta del oráculo del día" tiene curiosity mucho más alta que un manifiesto general)
2. **Es serie** (cartas 1-72 = contenido eterno) en lugar de pieza única

Si publicas 3 reels de cartas a la semana durante el primer mes, el algoritmo te etiqueta como "creadora de oráculo latino" — categoría con audiencia hambrienta y poca competencia en español.
