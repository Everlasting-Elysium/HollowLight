/**
 * compress-images.js
 * Generates .thumb.webp thumbnails for local images in source/img/
 * Skips files that already have an up-to-date thumbnail.
 * Run via: node .github/scripts/compress-images.js
 */

const sharp  = require('sharp')
const fs     = require('fs')
const path   = require('path')

const IMG_DIR      = path.resolve(__dirname, '../../source/img')
const THUMB_WIDTH  = 600   // px — wide enough for 2-column grids on mobile
const THUMB_QUALITY = 78   // webp quality (0-100)
const IMAGE_EXTS   = /\.(jpe?g|png|gif|webp|avif|tiff?)$/i

// ── helpers ────────────────────────────────────────────────────────────────

function isThumb(filePath) {
  return filePath.endsWith('.thumb.webp')
}

function thumbPathFor(srcPath) {
  return srcPath.replace(IMAGE_EXTS, '.thumb.webp')
}

function isUpToDate(srcPath, thumbPath) {
  if (!fs.existsSync(thumbPath)) return false
  return fs.statSync(thumbPath).mtimeMs >= fs.statSync(srcPath).mtimeMs
}

function walkImages(dir, results = []) {
  if (!fs.existsSync(dir)) return results
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkImages(full, results)
    } else if (IMAGE_EXTS.test(entry.name) && !isThumb(entry.name)) {
      results.push(full)
    }
  }
  return results
}

// ── main ───────────────────────────────────────────────────────────────────

;(async () => {
  const images = walkImages(IMG_DIR)

  if (!images.length) {
    console.log('No source images found in', IMG_DIR)
    process.exit(0)
  }

  let generated = 0
  let skipped   = 0

  for (const srcPath of images) {
    const thumbPath = thumbPathFor(srcPath)
    const rel       = path.relative(process.cwd(), srcPath)

    if (isUpToDate(srcPath, thumbPath)) {
      console.log(`  skip  ${rel}`)
      skipped++
      continue
    }

    try {
      await sharp(srcPath)
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: THUMB_QUALITY })
        .toFile(thumbPath)

      const srcKB   = Math.round(fs.statSync(srcPath).size   / 1024)
      const thumbKB = Math.round(fs.statSync(thumbPath).size / 1024)
      console.log(`  ✓  ${rel}  ${srcKB}KB → ${thumbKB}KB`)
      generated++
    } catch (err) {
      console.error(`  ✗  ${rel}:`, err.message)
    }
  }

  console.log(`\nDone — ${generated} generated, ${skipped} up-to-date`)
})()
