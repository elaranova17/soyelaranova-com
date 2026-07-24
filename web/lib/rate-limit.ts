// Best-effort in-memory limiter: on Vercel serverless each warm instance keeps
// its own map, so this throttles naive floods but is not a hard guarantee.
// Swap for Upstash/Redis if a strict global limit is ever needed.

type Entry = { count: number; resetAt: number }

const store = new Map<string, Entry>()

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): { ok: boolean; retryAfter: number } {
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || entry.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    if (store.size > 5000) {
      for (const [k, v] of store) if (v.resetAt <= now) store.delete(k)
    }
    return { ok: true, retryAfter: 0 }
  }

  if (entry.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
  }

  entry.count += 1
  return { ok: true, retryAfter: 0 }
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return request.headers.get('x-real-ip') ?? 'unknown'
}
