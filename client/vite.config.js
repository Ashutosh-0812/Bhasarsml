import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'https://bhasarsml-backend-ru2tyv-fd913f-72-61-171-146.traefik.me',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
      '/data': {
        target: 'https://bhasarsml-backend-ru2tyv-fd913f-72-61-171-146.traefik.me',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      }
    }
  },
  build: {
    outDir: 'dist',
  }
})
