import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // This helps Vite handle mixed import/require code
    },
  },
   server: {
      proxy: {
        '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        },
      },
  },
})
