#!/usr/bin/env node
/**
 * Falla el build si public/ tiene symlinks rotos o que salen de public/.
 * Evita deploys vacíos / errores en Vercel por assets archivados.
 */
import { existsSync, readlinkSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), '../public')
const errors = []

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isSymbolicLink()) {
      const target = readlinkSync(full)
      const resolved = resolve(dirname(full), target)
      if (!resolved.startsWith(publicDir)) {
        errors.push(`Symlink fuera de public/: ${full} → ${target}`)
        continue
      }
      if (!existsSync(resolved)) {
        errors.push(`Symlink roto: ${full} → ${target}`)
      }
      continue
    }
    if (entry.isDirectory()) {
      await walk(full)
    }
  }
}

async function main() {
  if (!existsSync(publicDir)) {
    console.error('verify-public-assets: no existe', publicDir)
    process.exit(1)
  }

  const heroDir = join(publicDir, 'hero')
  if (!existsSync(heroDir)) {
    errors.push('Falta web/public/hero/ (requerido para assets legacy en /images/)')
  }

  await walk(publicDir)

  if (errors.length > 0) {
    console.error('\n❌ verify-public-assets falló:\n')
    for (const e of errors) console.error('  •', e)
    console.error('\nVer docs/DEPLOY.md y docs/REPO_STRUCTURE.md\n')
    process.exit(1)
  }

  console.log('✓ public/ assets OK (sin symlinks rotos)')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
