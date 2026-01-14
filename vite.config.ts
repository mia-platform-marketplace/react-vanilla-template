import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
  build: {
    outDir: 'build'
  }
})


By default, Vite uses Babel to compile React. You can switch to SWC (Speedy Web Compiler), which is written in Rust and is significantly faster (up to 20x faster than Babel).

How to do it:

Remove the default plugin: npm uninstall @vitejs/plugin-react
Install the SWC version: npm install -D @vitejs/plugin-react-swc
Update your vite.config.js:
<!-- end list -->

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Changed from @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
});




export default defineConfig({
  build: {
    target: 'esnext', // or 'es2022'
  },
});


export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: { chrome: 120, safari: 17 } // Target modern browsers
    }
  },
  build: {
    cssMinify: 'lightningcss', // Minify CSS with LightningCSS
  },
});
