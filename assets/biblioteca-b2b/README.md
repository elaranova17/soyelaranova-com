# Biblioteca B2B · artefactos internos

Copias maestras para **duplicar y personalizar** cuando llega un cliente nuevo. No sustituyen las URLs públicas.

| Artefacto | Archivo | URL pública (referencia) |
|-----------|---------|---------------------------|
| Plantilla propuesta HTML | `plantilla-propuesta-nuevo-cliente.html` | Solo interno — fuente: `web/templates/evelyn-b2b/propuesta-template.html` |
| Plantilla propuesta Word | `../b2b/Plantilla_Propuesta_B2B_Evelyn_Patino.docx` | — |
| Casos de éxito (público) | — | `/casos-exito` → `web/public/evelyn-b2b/propuesta.html` |

## Flujo recomendado

1. Cliente nuevo completa `/descubrimiento`.
2. Duplicás `plantilla-propuesta-nuevo-cliente.html` (o el `.docx`) y reemplazás `[Cliente]`, alcance, fechas e inversión.
3. Cuando el proyecto esté entregado y el cliente autorice, añadís un bloque en `propuesta.html` (casos de éxito).

**Sincronizar:** si editás `web/templates/evelyn-b2b/propuesta-template.html`, copiá de nuevo aquí para mantener la biblioteca al día. **No** volver a poner la plantilla en `web/public/`.
