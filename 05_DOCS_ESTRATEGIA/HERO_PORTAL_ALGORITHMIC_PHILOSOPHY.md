# 🌙 RESONANCIA VELADA
## Filosofía Algorítmica · Hero Portal Elara Nova
### v1 · 7 mayo 2026

> Documento de doctrina estética. Toda decisión técnica del Hero Portal —
> shaders, partículas, frecuencias, paleta, easings — debe poder derivarse
> de aquí. Si algo en el código contradice este documento, el código se
> cambia, no la filosofía.

---

## I · MANIFIESTO

**Resonancia Velada** nace de la tensión entre lo místico y lo matemático.
Es la creencia de que la magia no es ausencia de cálculo — es cálculo lo
bastante refinado como para convertirse en respiración. Cada partícula,
cada estrella, cada pulso lunar es resultado de un algoritmo meticulosamente
esculpido a lo largo de iteraciones incontables, hasta que la matemática
deja de sentirse como matemática y empieza a sentirse como aliento.

Esta filosofía rechaza la animación enlatada y exige **emergencia**:
comportamientos vivos que nunca se repiten exactos, pero siempre obedecen
a una ley íntima.

---

## II · LOS TRES PILARES COMPUTACIONALES

1. **Campos de ruido** — Perlin/Simplex multi-octava dictan el movimiento
   sutil del polvo dorado y la deriva de las estrellas. Sin ruido, no hay vida.

2. **Oscilaciones armónicas** — funciones trigonométricas con phase-shifts
   diferenciados hacen respirar a la luna y titilar a las estrellas. La
   sincronía es enemiga de la magia: cada elemento late en su propia
   frecuencia.

3. **Aleatoriedad sembrada (seeded randomness)** — cada visitante recibe
   una constelación única pero reproducible. La misma seed devuelve el
   mismo cosmos. Garantía de identidad sin pérdida de variación.

---

## III · SISTEMAS DE PARTÍCULAS ANIDADOS

Las partículas existen en tres sistemas que coexisten sin colisionar
visualmente:

- **Estela del cursor** — partículas con vida finita, ligadas por velocity
  decay y alpha falloff cuidadosamente ajustados. Vida media: ~800 ms.
  Curva: ease-out cubic.
- **Polvo cósmico de fondo** — partículas lentas que orbitan campos de
  ruido a baja velocidad, casi invisibles, encargadas de dar densidad al
  vacío.
- **Estrellas** — población inicializada con noise-warped coordinates.
  Cada estrella guarda su propia frecuencia de parpadeo (entre 0.2 y
  1.5 Hz, distribuida log-uniformemente para evitar sincronicidades
  antiestéticas).

La luna no es una esfera Lambert — es un fragment shader sobre vertices
animados, con un noise field Worley + Perlin layered que crea cráteres
etéreos sutiles.

**Todo emerge. Nada está hardcoded. Nada se importa de un Sketchfab.**

---

## IV · LA PALETA COMO LEY SAGRADA

| Token | Hex | Rol semántico |
|---|---|---|
| `--purple-night` | #1A0F3D | Vacío cósmico (background base) |
| `--purple-deep` | #2D1B69 | Profundidad del fondo (gradiente medio) |
| `--purple-mid` | #3D2580 | Plano intermedio del cielo |
| `--lavender` | #9B6BC4 | Respiración media (halo lunar) |
| `--pale-lav` | #E5DBF0 | Reflejo más alto |
| `--gold-dark` | #B8941F | Borde de magia (sombras del oro) |
| `--gold` | #D4AF37 | Núcleo del filo dorado |
| `--gold-soft` | #E5C770 | Estela cursor — base |
| `--gold-bright` | #F2D578 | Estela cursor — pico |
| `--cream` | #FAF4E2 | Texto sobre noche |

**Reglas de combinación:**

- Gradientes morados → siempre con interpolación HSL no lineal (3 curvas
  ease distintas, nunca lineal burdo).
- Dorado → siempre con bloom shader (postprocessing) + chromatic aberration
  sutil (offset 0.0008–0.0015).
- Vignette obligatorio sobre el viewport: oscurecer 35% en los bordes para
  forzar el ojo al centro y densificar la penumbra.

---

## V · EL TIEMPO ES EL CUARTO TÓKEN

| Elemento | Frecuencia / duración | Curva | Por qué |
|---|---|---|---|
| Luna respira | 0.4 Hz (≈2.5 s ciclo) | sin() puro | Ritmo de meditación humana |
| Estrellas titilan | 0.2–1.5 Hz log-uniform | sin() con phase-shift | Evita sincronicidades antiestéticas |
| Estela cursor decae | 800 ms | ease-out cubic | Mágica sin ser distractora |
| Texto aparece (typewriter) | 35 ms por caracter | linear | Contemplativo, sin prisa |
| Halo lunar pulsa | 0.4 Hz (sincronizado a la luna) | sin() | Respiración coherente |
| Bloom intensity (idle → hover) | 600 ms | ease-in-out cubic | Suave reactividad al cursor |

**Ningún número fue elegido al azar. Cada uno fue iterado contra
comportamiento humano observado.**

---

## VI · CRAFTSMANSHIP

El resultado final debe sentirse hecho a mano por un maestro de la estética
computacional, no por un automatismo. La diferencia entre "se ve bonito"
y "respira" está en la **veladura** — esas capas casi invisibles que solo
el ojo entrenado nota, pero que el corazón sin entrenar siente.

**Resonancia Velada** es eso: matemática que se ha vuelto respiración a
fuerza de meticulosidad.

---

## VII · CRITERIOS DE APROBACIÓN POR FASE

Antes de mergear cualquier PR de Hero Portal, validar contra esta lista:

- [ ] Cada animación tiene una frecuencia documentada arriba (no
      "magic numbers")
- [ ] Toda aleatoriedad usa seed (`THREE.MathUtils.seededRandom` o
      `simplex-noise` con seed)
- [ ] Postprocessing activo: Bloom + Vignette + ChromaticAberration
- [ ] Paleta solo desde tokens CSS — cero hex hardcoded en componentes
- [ ] Performance: 60 fps sostenido en MacBook Air M1 (target idle)
- [ ] Lighthouse Performance ≥ 90 en mobile
- [ ] Reducción de motion respetada (`prefers-reduced-motion`)
- [ ] Accesibilidad: el portal tiene fallback estático con CTA si JS
      desactivado
- [ ] Sin librerías 3D innecesarias (cero PMNDRS examples, cero
      modelos pesados)

---

*Documento vivo. Última edición: 7 mayo 2026.*
*Cualquier cambio a frecuencias, easings o paleta debe versionarse aquí
primero antes que en código.*
