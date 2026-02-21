import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

/**
 * Plugin para entornos locales: resuelve los imports figma:asset/* 
 * a un PNG transparente mínimo en base64, evitando errores de resolución.
 * En producción (Make/Figma CI), estos son inyectados por la plataforma.
 */
function figmaAssetPlugin(): Plugin {
  // PNG transparente 1×1 en base64 (mínimo válido)
  const PLACEHOLDER =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) return '\0' + id
    },
    load(id: string) {
      if (id.startsWith('\0figma:asset/')) {
        return `export default "${PLACEHOLDER}"`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
