import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/', 
        '**/*.config.{js,ts}', 
        '**/dist/**',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/setupTests.ts',
        '**/main.tsx',
        '**/vite-env.d.ts',
        '**/src/lib/**',
        '**/src/store/**',
      ],
      all: true,
      lines: 99,
      functions: 100,
      branches: 97,
      statements: 99,
    },
  },
})
