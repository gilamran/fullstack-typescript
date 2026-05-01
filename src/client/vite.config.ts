import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../src/shared'),
    },
  },
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  root: './src/client',
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: '../../dist/client',
    emptyOutDir: true,
    manifest: true, // generate manifest.json in outDir
    rolldownOptions: {
      input: './src/client/client.tsx',
    },
  },
});
