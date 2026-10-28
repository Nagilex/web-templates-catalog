import { build } from 'vite'
import { resolve } from 'node:path'
import { mkdir } from 'node:fs/promises'

const projectRoot = process.cwd()
const templates = ['constructora', 'electrica','tienda-online']

for (const name of templates) {
  const root = resolve(projectRoot, 'template-projects', name)
  const outDir = resolve(projectRoot, 'public', 'templates', name)

  await mkdir(outDir, { recursive: true })

  console.log(`\\nConstruyendo plantilla: ${name}`)
  await build({
    configFile: resolve(root, 'vite.config.js'),
    root,
    base: './',
    build: {
      outDir,
      emptyOutDir: true,
    },
  })
}

console.log('\\nPlantillas listas en public/templates/.')
