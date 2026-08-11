import fs from 'fs';
import path from 'path';
import { IS_DEV, VITE_DEV_BASE } from '../config';

let manifestCache: any;

export async function getManifest() {
  if (!manifestCache) {
    if (IS_DEV) {
      // load from the vite dev server, through this server's proxy (same origin)
      manifestCache = {
        '@vite/client': {
          file: `${VITE_DEV_BASE}/@vite/client`,
        },
        'client.tsx': {
          file: `${VITE_DEV_BASE}/client.tsx`,
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
