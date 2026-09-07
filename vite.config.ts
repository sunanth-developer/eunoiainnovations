import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/eunoiainnovations/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
})
