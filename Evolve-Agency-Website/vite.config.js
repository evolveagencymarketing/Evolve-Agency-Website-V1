import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // keep '/' since you'll use your own domain
  build: { outDir: 'dist' }
})
