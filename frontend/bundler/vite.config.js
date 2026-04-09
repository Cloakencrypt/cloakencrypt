import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/dfinity-bundle.js'),
      name: 'DfinityBundle',
      fileName: 'dfinity-bundle',
      formats: ['es'],
    },
    outDir: '../dist/assets',
    emptyOutDir: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        entryFileNames: 'dfinity-bundle.js',
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    'global': 'globalThis',
  },
});
