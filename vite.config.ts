import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js',
  }
};

export default defineConfig({
  test: vitestConfig.test,
  build: {
    rollupOptions: {
        external: ['qs']
      }
  },
  plugins: [
    eslint({
      lintOnStart: true,
      fix: true,
      failOnError: false,
    }),
    react()
  ]
});
