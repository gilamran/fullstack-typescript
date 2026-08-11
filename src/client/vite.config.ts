import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'path';

const shouldUseReactCompiler = process.env.REACT_COMPILER === 'true';

export default defineConfig(({ command }) => ({
  // In dev everything is served through the express server (single origin), which proxies
  // this dev server under the `/vite-dev` prefix. Must match VITE_DEV_BASE in src/server/config.ts.
  // The production build keeps the default base.
  base: command === 'serve' ? '/vite-dev/' : undefined,
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../src/shared'),
    },
  },
  plugins: [
    react(),
    ...(shouldUseReactCompiler
      ? [
          babel({
            presets: [reactCompilerPreset()],
          }),
        ]
      : []),
  ],
  root: './src/client',
  server: {
    port: 5173,
    strictPort: true,
    // The page is loaded from the express server, so the HMR websocket must dial that port
    // (the proxy forwards the upgrade request to this dev server).
    hmr: {
      clientPort: Number(process.env.PORT) || 3000,
    },
  },
  build: {
    outDir: '../../dist/client',
    emptyOutDir: true,
    manifest: true, // generate manifest.json in outDir
    rolldownOptions: {
      input: './src/client/client.tsx',
    },
  },
}));
