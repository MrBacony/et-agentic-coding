/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// @ts-expect-error @tailwindcss/vite currently uses mts. TypeScript is complaining this, but it works as expected.
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: `../../node_modules/.vite`,
    build: {
      outDir: '../../dist/apps/app/client',
      reportCompressedSize: true,
      target: ['es2020'],
    },

    ssr: {
      noExternal: ['@analog-tools/auth'],
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
    plugins: [tailwindcss(), analog(), nxViteTsPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
