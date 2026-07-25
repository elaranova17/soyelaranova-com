#!/usr/bin/env node
/**
 * Falla el build si public/ tiene symlinks rotos, hero/ fantasy, JPG en images/
 * o archivos legacy eliminados en la limpieza de julio 2026 (CSS/JS ritual,
 * avatar/stickers de Elara). Ver docs/brand.md (marca estudio 2026).
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

/** Archivos y carpetas legacy que no deben volver a public/ (limpieza julio 2026). */
const bannedPaths = [
  'elara', // avatar + stickers Elara (muñequitos prohibidos como UI del estudio)
  'site-nav-ritual.css',
  'site-nav-ritual.js',
  'elara-nova-rediseno.css',
  'elara-nova-animations.js',
  'elara-cursos-productos.css',
  '_assets/photos/kit-web-real', // kit IA / Higgs — purgado jul 2026
  '_assets/photos/evelyn-real', // selfies phone — también prohibidas
  '_assets/photos/evelyn_pro_hero.jpg',
  '_assets/photos/evelyn_pro_perfil.jpg',
  '_assets/photos/evelyn_me_portrait.webp',
]

function checkNoLegacyFiles() {
  for (const name of bannedPaths) {
    if (existsSync(join(publicDir, name))) {
      errors.push(
        `Legacy prohibido en public/: ${name} — eliminado en julio 2026, no reintroducir (ver docs/brand.md).`,
      )
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

  checkNoLegacyFiles()
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
