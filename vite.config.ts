import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/', replacement: '/src' },
      { find: '@/Assets', replacement: '/src/assets' },
      { find: '@/Components', replacement: '/src/components' },
    ],
  }
  define: {
    'process.env': {},
  },
})
