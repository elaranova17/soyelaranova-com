# Rediseño Elara Nova 2026 · referencia

Archivos fuente (Downloads) copiados al repo:

| Archivo | En el repo |
|---------|------------|
| `elara-nova-rediseno.css` | `web/public/elara-nova-rediseno.css` |
| `elara-nova-animations.js` | `web/public/elara-nova-animations.js` |
| `elara-nova-estructura.html` | `web/reference/elara-nova-estructura.html` |

## Implementación Next.js

| Sección HTML | Estado | Componente |
|--------------|--------|------------|
| 1 Herramientas de alma (cajones + timeline) | ✅ | `ElaraToolsSection` · `#herramientas` |
| Portal 9 herramientas Pixar | ✅ | `HerramientasExplorarSection` · `#explorar-herramientas` |
| 2 Cursos | ✅ | `ElaraCursosSection` |
| 3 Productos | ✅ | `ElaraProductosSection` + `ElaraDivider` |
| 4 Timeline proceso | ✅ | `ElaraProcessSection` · `#proceso` |
| 5 Bio Evelyn | Pendiente | — |
| 6 Clientes | Pendiente | — |

## Imágenes WordPress

Usar `resolveImageSrc()` en `web/lib/resolve-image-src.ts` para rutas `/wp-content/uploads/...` → `/images/...`.
