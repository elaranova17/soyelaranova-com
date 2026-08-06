# Regla · Assets siempre en Figma primero

> Si no está diseñado en Figma, **no se monta en la web**.
> Archivo: https://www.figma.com/design/im5h3TanW9XR2MMwwF2FAx
> Board: `Hero Scrap Assets · C3` (en página Foundations)

## Flujo obligatorio

1. Diseñar el asset en Figma (sombra, tipografía, radio, color C3)
2. Revisar screenshot del nodo
3. Export PNG @2x → `web/public/brand/scrap/figma/`
4. Montar en el hero con `<Image>` / CSS de posición
5. Nunca improvisar ventanas/stickies “a ojo” solo con CSS suelto

## Assets en el board

| Asset | Node | Uso |
|-------|------|-----|
| workflow.exe | `asset/workflow.exe` | ventana lilac |
| agent_03.py | `asset/agent_03.py` | ventana lilac |
| terminal | `asset/terminal` | ventana dark |
| sticky-quote | `asset/sticky-quote` | post-it rosa |
| note-ideas | `asset/note-ideas` | nota manuscripta |
| tape-gold / tape-lilac | tapes | cinta washi |
| polaroid-frame | marco | foto Evelyn |

## Hero live (composición limpia)

Hasta completar export de todos los PNG: collage **3 capas** (Polaroid + sticky + workflow)
con assets Figma. Sin boarding/scribble/wireframes.
