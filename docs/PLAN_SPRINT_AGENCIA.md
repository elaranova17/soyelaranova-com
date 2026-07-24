# Plan de Sprint · Pivote a AGENCIA

> Fuente de verdad operativa para el pivote de julio 2026.
> Reemplaza a `CONTEXT_CURSOR.md` (que describe el portal místico viejo y está **desfasado**).
> Creado: 2026-07-09 · Deadline: domingo 2026-07-12 · Lunes = empezar a buscar clientes.

---

## 1 · Posicionamiento (la decisión)

El sitio pasa de "portal místico" a **agencia dev/UX/automatización que VENDE**.

- **Lidera Evelyn (ingeniera):** *"Automatizo y construyo lo que tu negocio necesita para vender más y ahorrar tiempo."*
- **Oferta en orden de fuerza:**
  1. **Automatizaciones** (producto estrella)
  2. **Landing pages / sitios** para comercios (+ Google Ads como add-on)
  3. Ebooks / cursos pequeños y específicos ("aprendé a automatizar X para tu negocio") — **congelado hasta después del lunes**
- **Elara** no se mata: se reubica como personalidad de marca / voz creativa y para los productos pequeños. NO el místico-infantil.
- **Prueba de trabajo:** `val-debarras` (ex-cliente suizo) = caso de éxito.
- **Precios:** base **España (EUR)** para competir contra lo suizo y quedar competitivas en Europa. Ver `docs/OFERTA_SERVICIOS.md`.

---

## 2 · Filtro brutal del sprint

Pregunta única: **¿qué necesito DE VERDAD para pitchear clientes el lunes?**

✅ Se hace: sitio que vende agencia · oferta con precios · kit de prospección.
❄️ Se congela: oráculo interactivo, escenas 3D/R3F, ebooks grandes, `/luna`, login/cuentas, Hotmart.

---

## 3 · Roadmap por días

| Sprint | Día | Objetivo | Entregable |
|--------|-----|----------|------------|
| **0** | Jue 9 | Depuración + seguridad + oferta | Formularios blindados, oferta con precios, este roadmap |
| **1** | Vie 10 | Reescribir home + página de servicios en voz comercial | Home agency-first + caso `val-debarras` |
| **2** | Sáb 11 | Kit de outreach + pulido + deploy | Mensajes en frío, one-pager, lista de prospectos, quitar modo mantenimiento |
| **3** | Dom 12 | QA + deploy final + ensayo pitch | Sitio live que vende + pitch listo |

**Regla:** terminar y confirmar cada sprint antes del siguiente (Evelyn tiene TDAH — paso a paso, no saturar).

---

## 4 · Sesiones en paralelo (recomendado)

No chocan porque una toca código y las otras tocan docs distintos.

| Sesión | Alcance | Toca | Skills |
|--------|---------|------|--------|
| **A · Código** | Rebuild home, servicios, seguridad, limpieza | `web/` | `elara-ui-master`, `cyber-neo` |
| **B · Oferta & copy** | Paquetes+precios, copy comercial | `docs/`, copy | `elara-market-research`, `elara-copywriter` |
| **C · Outreach** | Prospección, pitch, one-pager | `docs/` | `elara-marketing`, `elara-ads-analyst` |

Productos pequeños (`elara-ebooks`) → post-lunes.

---

## 5 · Estado Sprint 0 (jue 9)

- [x] Rate-limit + sanitización en `/api/discovery` y `/api/oracle/subscribe` (util nuevo `web/lib/rate-limit.ts`, 5 req / 10 min por IP)
- [x] Oferta con precios España → `docs/OFERTA_SERVICIOS.md`
- [x] Roadmap (este doc)
- [ ] **Modo mantenimiento** (`web/proxy.ts` → 503 en todo el sitio): mantener hasta que la home nueva esté lista; quitar en Sprint 2–3
- [ ] Limpiar código muerto (`api/` Hono, `supabase/` placeholder) — pendiente OK de Evelyn
- [ ] Confirmar supuestos de precio (ver `OFERTA_SERVICIOS.md`)

---

## 6 · Hallazgos técnicos clave

- **Sitio en modo mantenimiento:** `web/proxy.ts` (middleware Next 16) devuelve 503 `noindex` en todas las rutas. El sitio real está oculto. Quitar al hacer deploy de la home nueva.
- **Sin secretos filtrados** (bien). `.env*` en `.gitignore`.
- **Código muerto:** carpeta `api/` (Hono) y `supabase/` no parecen wired a la app.
- **`CONTEXT_CURSOR.md` desfasado:** describe la visión mística vieja; no usarlo como fuente de verdad.
