import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname

  if (
    path.startsWith('/_next/') ||
    path === '/favicon.ico' ||
    /\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|txt|xml)$/.test(path)
  ) {
    return NextResponse.next()
  }

  return new NextResponse(
    `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Elara Nova | En construccion</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #171717;
        --muted: #6b625c;
        --paper: #f7f3ee;
        --line: #ded4c8;
        --accent: #9d6b4f;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: var(--paper);
        color: var(--ink);
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      }
      main {
        width: min(680px, calc(100vw - 40px));
        padding: 56px 0;
      }
      .eyebrow {
        margin: 0 0 18px;
        color: var(--accent);
        font: 700 12px/1.2 ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        letter-spacing: .16em;
        text-transform: uppercase;
      }
      h1 {
        margin: 0;
        font-size: clamp(44px, 8vw, 78px);
        line-height: .92;
        letter-spacing: 0;
      }
      p {
        max-width: 560px;
        margin: 24px 0 0;
        color: var(--muted);
        font: 400 18px/1.65 ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      .line {
        width: 100%;
        height: 1px;
        margin-top: 34px;
        background: var(--line);
      }
      a {
        color: var(--ink);
        text-decoration-color: var(--accent);
        text-underline-offset: 5px;
      }
    </style>
  </head>
  <body>
    <main>
      <p class="eyebrow">Elara Nova</p>
      <h1>Sitio en construccion.</h1>
      <p>Estamos reorganizando la casa antes de volver a abrir. Para e-books, cursos o proyectos digitales, escribe a <a href="mailto:elaranova.17@gmail.com">elaranova.17@gmail.com</a>.</p>
      <div class="line" aria-hidden="true"></div>
    </main>
  </body>
</html>`,
    {
      status: 503,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'Retry-After': '86400',
      },
    },
  )
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|html)$).*)',
  ],
}
