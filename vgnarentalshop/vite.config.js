import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vgnarentalshop/',
  build: {
    outDir: '../docs/vgnarentalshop',
    assetsDir: 'assets',
  }
})
