import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: './src/setupTests.ts',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html', 'cobertura'],
        exclude: [
          'node_modules/',
          'src/setupTests.ts',
          '**/*.config.{js,ts}',
          '**/.*',
        ],
      },
      reporters: ['default', 'junit'],
      outputFile: {
        junit: './coverage/junit.xml',
      },
    },
  })
)
