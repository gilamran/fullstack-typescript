import fs from 'fs';
import path from 'path';
import { IS_DEV } from '../config';

let manifestCache: any;

export async function getManifest() {
  if (!manifestCache) {
    if (IS_DEV) {
      // load from vite dev server
      manifestCache = {
        '@vite/client': {
          file: 'http://localhost:5173/@vite/client',
        },
        'client.tsx': {
          file: 'http://localhost:5173/client.tsx',
        },
      };
    } else {
      // read from file system
      const manifestStr = fs
        .readFileSync(path.join(process.cwd(), 'dist', 'client', '.vite', 'manifest.json'), 'utf-8')
        .toString();
      manifestCache = JSON.parse(manifestStr);
      Object.keys(manifestCache).map((key) => {
        manifestCache[key].file = `/${manifestCache[key].file}`;
      });
    }
  }

  return manifestCache;
}
