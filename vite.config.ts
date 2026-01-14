import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 5001,
    watch: {
      usePolling: true,
      interval: 100
    },
    hmr: {
      overlay: true
    }
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: { chrome: 120, safari: 17 }
    }
  },
  build: {
    target: 'es2022', 
    outDir: 'build',
    cssMinify: 'lightningcss'
  }
})
