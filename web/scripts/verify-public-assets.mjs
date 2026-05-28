#!/usr/bin/env node
/**
 * Falla el build si public/ tiene symlinks rotos, hero/ fantasy o JPG en images/.
 * El sitio activo usa solo ilustraciones .png (Pixar/Encanto) en /images/.
 */
import { existsSync, readlinkSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), '../public')
const imagesDir = join(publicDir, 'images')
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

async function checkNoFantasyJpgInImages() {
  if (!existsSync(imagesDir)) return
  const files = await readdir(imagesDir)
  const jpgs = files.filter((f) => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'))
  for (const name of jpgs) {
    errors.push(
      `JPG prohibido en public/images/: ${name} — archivar en 06_ARCHIVO/ y usar .png ilustrado`,
    )
  }
}

async function main() {
  if (!existsSync(publicDir)) {
    console.error('verify-public-assets: no existe', publicDir)
    process.exit(1)
  }

  const publicEntries = await readdir(publicDir, { withFileTypes: true })
  for (const entry of publicEntries) {
    if (entry.isDirectory() && entry.name.toLowerCase().startsWith('hero')) {
      errors.push(
        `web/public/${entry.name}/ no debe existir (fondos Midjourney archivados en 06_ARCHIVO/).`,
      )
    }
  }

  await checkNoFantasyJpgInImages()
  await walk(publicDir)

  if (errors.length > 0) {
    console.error('\n❌ verify-public-assets falló:\n')
    for (const e of errors) console.error('  •', e)
    console.error('\nVer web/public/README.md y docs/DEPLOY.md\n')
    process.exit(1)
  }

  console.log('✓ public/ assets OK (PNG ilustrado, sin hero/ fantasy)')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
