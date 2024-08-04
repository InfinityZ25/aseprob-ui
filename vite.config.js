import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'out/index.html'),
        dashboard: resolve(__dirname, 'out/dashboard/index.html'),
        login: resolve(__dirname, 'out/login/index.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '/_next': resolve(__dirname, 'out/_next'),
    },
  },
});
