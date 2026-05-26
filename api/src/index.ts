import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', logger())
app.use(
  '*',
  cors({
    origin: (process.env.CORS_ORIGIN ?? 'http://localhost:3000').split(','),
    credentials: true,
  }),
)

app.get('/', (c) => c.json({ name: 'elara-api', status: 'ok' }))
app.get('/health', (c) => c.json({ status: 'ok', uptime: process.uptime() }))

const port = Number(process.env.PORT ?? 3001)
serve({ fetch: app.fetch, port }, (info) => {
  console.log(`elara-api listening on http://localhost:${info.port}`)
})
