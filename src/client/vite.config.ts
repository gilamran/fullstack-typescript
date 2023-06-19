import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './src/client',
  build: {
    outDir: '../../dist/client',
    manifest: true, // generate manifest.json in outDir
    rollupOptions: {
      input: './src/client/client.tsx',
    },
  },
});
