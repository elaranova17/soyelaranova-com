# Auditoría de páginas · soyelaranova.com

**Fecha:** 25 julio 2026  
**Look canónico:** CapCut glow chic (`docs/brand.md`)  
**Embudo:** Pre-análisis gratis → email → sesión 25 CHF → proyecto  

---

## Inventario (links / rutas)

### Estudio · voz Evelyn (prioridad comercial)

| Ruta | Rol en embudo | Problema principal (antes) | Prioridad |
|------|---------------|----------------------------|-----------|
| `/` | Awareness + CTA | Look canónico OK; fotos hero pendientes | P1 |
| `/servicios` | Consideración | Índice plano, cards genéricas, poco didáctico | **P0** |
| `/servicios/[slug]` | Consideración | Listas sin “qué es”, sin modelos visuales | **P0** |
| `/lp/paginas-web` | Ads / conversión | Oferta OK; falta galería de modelos + tutorial | **P0** |
| `/lp/landing-pages` | Ads / conversión | Igual: gente no entiende landing vs sitio | **P0** |
| `/lp/automatizaciones` | Ads / conversión | Copy OK; poco visual de flujo | P1 |
| `/lp/google-ads` | Ads / conversión | Copy OK; falta explicar medición simple | P1 |
| `/lp/[service]/[pack]` | Oferta hija | Hereda LP; packs sin modelos | P1 |
| `/portfolio` | Prueba social | Ya comercial (gráficos/escenas) | OK |
| `/cv` | Credibilidad | Ya comercial | OK |
| `/trabaja-conmigo` | About B2B | Hero inset + botones no canónicos; CTAs flojos | **P0** |
| `/descubrimiento` | Lead gratis | Claro; UI un poco “formulario suelto” | P1 |
| `/gracias` | Confirmación | Funcional | P2 |
| `/sesion-estrategica` | Pago 25 CHF | Explica bien; visual menos CapCut que LPs | P1 |
| `/sesion-estrategica/gracias` | Post-pago | Funcional | P2 |
| `/linktree` | Hub social | CapCut OK; pocos deep-links a LPs | P1 |
| `/legal` | Compliance | Plano (aceptable) | P2 |

### Espirituales · voz Elara (no chrome del estudio)

| Ruta | Nota | Prioridad |
|------|------|-----------|
| `/oraculo` · `/universo` · `/cursos` · `/sobre-elara` | Purple ritual OK en su mundo; no unificar al CapCut del estudio | P2 |
| `/preview/*` | Re-exports | P2 |
| `/lp/libros/[slug]` | Producto digital | P2 |

---

## Problemas transversales

1. **Educación débil:** muchos clientes no saben qué es una landing, un embudo o una automatización.
2. **Sin modelos:** las webs se venden en abstracto; falta mostrar “tipos de página” como tutorial visual.
3. **Inconsistencia de chrome:** unas páginas usan `.studio-b2b` / motion, otras Tailwind suelto + cards genéricas.
4. **CTAs desiguales:** a veces `home-button--primary` en lugar de gold canónico del embudo.
5. **Tipografía:** escala `--type-*` existe; no todas las páginas la respetan.
6. **Nav:** no lleva a portfolio/CV (viven en linktree) — OK si el hub los prioriza.

---

## Norte de diseño (por página P0)

- Heroes / cierres: `.type-lockup` + glow correcto (oscuro/claro).
- CTA principal: **Hacer mi pre-análisis** → `/descubrimiento`.
- Secundario: sesión 25 CHF o WhatsApp.
- Una idea por sección; copy Evelyn (directa, didáctica).
- Modelos de web: wireframes CapCut que enseñan estructura + resultado de negocio.
- Motion: `StudioReveal` / stagger compartido (`studio-motion`).

---

## Orden de implementación (esta ola)

1. Auditoría (este doc)
2. Librería `web-models` + galería visual + strip de embudo
3. `/servicios`, `/servicios/[slug]`, LPs web/landing, `/trabaja-conmigo`
4. Pulido `/descubrimiento` + `/sesion-estrategica` + linktree deep-links
5. Build + deploy
