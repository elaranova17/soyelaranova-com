# Auditoria de procesos · La Aranoa Studio

**Fecha:** 23 junio 2026  
**Alcance:** flujo comercial web, rutas, CTAs, formulario de descubrimiento, medicion base y preparacion para Ads.

---

## Resumen ejecutivo

El sitio ya tiene un flujo comercial minimo:

1. Home profesional.
2. Servicios y landings por servicio.
3. Diagnostico en `/descubrimiento`.
4. Salida por email o WhatsApp.
5. Pagina de gracias.
6. Legal visible en rutas comerciales.

El flujo aun no es una automatizacion completa porque no existe backend de leads ni integracion con CRM/email marketing. La version actual es una fase intermedia razonable: reduce friccion, permite medir clics y prepara el siguiente sprint.

---

## Mapa del embudo actual

### Entrada organica o Ads

- `/`
- `/servicios`
- `/servicios/sitios-web`
- `/servicios/landing-pages`
- `/servicios/automatizaciones`
- `/servicios/google-ads`

### Accion comercial

- CTA principal: `/descubrimiento`
- CTA secundario segun pagina: portfolio, servicios, email

### Captura / contacto

- `/descubrimiento`
- El usuario completa formulario.
- El sitio prepara respuestas.
- El usuario elige email o WhatsApp.
- Luego puede confirmar con `/gracias`.

### Confianza y cumplimiento

- `/legal`
- Visible desde home, servicios, landings, descubrimiento y gracias.

---

## Eventos disponibles

Los eventos no dependen de una herramienta unica. Si existen `dataLayer`, `gtag` o `plausible`, se envian automaticamente.

| Evento | Cuando ocurre | Uso |
|--------|---------------|-----|
| `cta_click` | Click en CTAs principales | Medir interes comercial |
| `discovery_prepare` | Formulario completado e intento de envio iniciado | Medir intencion alta, no conversion final |
| `generate_lead` | API confirma envio interno del diagnostico | Conversion primaria |
| `lead_email_click` | Fallback: click en enviar por email | Conversion secundaria |
| `lead_whatsapp_click` | Fallback: click en abrir WhatsApp | Conversion secundaria |
| `lead_confirmed` | Fallback: click en "Ya lo envie" hacia `/gracias` | Confirmacion blanda |

**Nota:** Para Ads, conviene usar `generate_lead` como conversion primaria. `lead_email_click` y `lead_whatsapp_click` quedan como respaldo si Resend no esta configurado o falla.

---

## Hallazgos

### P0 · Falta persistencia/CRM de leads

El formulario ya envia a `POST /api/discovery` y puede notificar a Evelyn por Resend. Todavia no guarda una copia en base de datos o CRM.

Recomendacion:

- Guardar copia en Supabase, Airtable, Google Sheets o Notion.
- Mantener email interno como notificacion.
- Crear vista simple de leads cuando exista persistencia.

### P0 · Ads necesita conversion final confiable

La conversion real debe ser envio exitoso del formulario. Ya existe `generate_lead` cuando el API confirma envio interno; falta configurar la herramienta de medicion en produccion.

Recomendacion:

- Configurar GTM/GA4 o Plausible.
- Marcar `generate_lead` como conversion primaria.
- Mantener `lead_whatsapp_click` como conversion secundaria.

### P1 · Legal base existe, pero requiere revision cuando haya pagos

`/legal` cubre privacidad, medicion, terceros y terminos basicos. Para venta de libros/cursos con checkout, habra que sumar devoluciones, entrega digital, jurisdiccion y facturacion.

### P1 · Rutas legacy estan controladas, pero aun conviven marcas

La Aranoa ya manda en home/servicios/contacto. Elara queda viva en `/universo`, `/oraculo`, `/sobre-elara`. Esto sirve como transicion, pero despues conviene decidir si se archivan, se rediseñan como biblioteca o se ocultan de navegacion principal.

### P2 · Portfolio sigue en HTML estatico

`/portfolio`, `/cv`, `/casos-exito` siguen como HTML en `web/public/evelyn-b2b`. Funcionan, pero no comparten sistema visual ni medicion de CTAs.

Recomendacion:

- Migrar portfolio a Next.
- Reusar tokens `studio-*`.
- Trackear clicks de contacto.

---

## Quick wins ya corregidos

- `/descubrimiento` ahora es pagina Next real, no HTML estatico.
- El formulario envia a `POST /api/discovery` y redirige a `/gracias` si Resend confirma.
- El formulario separa eventos de preparacion, lead generado, email, WhatsApp y confirmacion.
- `/legal` es visible desde rutas comerciales.
- Rutas antiguas de descubrimiento redirigen a la nueva.
- `/servicios` y landings individuales estan generadas como rutas estaticas.
- `public/hero/` fantasy no queda en produccion cuando corre `verify:assets`.

---

## Backlog recomendado

### Sprint 1 · Persistencia de leads

1. Crear tabla `discovery_leads` en Supabase o Google Sheet destino.
2. Guardar payload validado desde `POST /api/discovery`.
3. Registrar estado `emailSent`.
4. Añadir proteccion anti-spam ligera.
5. Crear export o vista interna.

### Sprint 2 · Medicion real

1. Definir herramienta: Google Tag Manager + GA4 o Plausible.
2. Instalar script en `layout.tsx`.
3. Configurar eventos:
   - `cta_click`
   - `discovery_prepare`
   - `generate_lead`
   - `lead_whatsapp_click`
4. Marcar conversiones primarias/secundarias.

### Sprint 3 · Landings para Ads

1. Ajustar `/servicios/google-ads` para busquedas de Google Ads.
2. Crear variante `/servicios/landing-pages` con copy mas directo para campaña.
3. Añadir FAQ de precio/plazos.
4. Añadir prueba/portfolio especifico.

### Sprint 4 · Portfolio Next

1. Migrar `/portfolio`.
2. Crear casos por tipo de servicio.
3. Conectar CTAs a `/descubrimiento`.

---

## Criterio de listo para Ads

Antes de invertir fuerte:

- [ ] Formulario envia a Evelyn sin depender de mailto.
- [ ] Lead queda guardado.
- [ ] `/gracias` se abre solo tras envio exitoso.
- [ ] Evento `generate_lead` configurado como conversion.
- [ ] `/legal` revisado y visible.
- [ ] Landing por intencion, no una sola pagina para todo.
- [ ] Velocidad mobile verificada despues de instalar scripts.
