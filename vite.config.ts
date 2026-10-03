import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The site is served from https://helmerbergstrom.github.io/portfolio/
  base: '/portfolio/',
})
