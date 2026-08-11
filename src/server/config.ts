import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const IS_DEV = process.env.NODE_ENV !== 'production';

if (IS_DEV) {
  dotenv.config({ path: path.join(process.cwd(), '.env') });
}

const packageJsonPath = path.join(process.cwd(), 'package.json');
const rawPackageJson = fs.readFileSync(packageJsonPath).toString();
const PackageJson = JSON.parse(rawPackageJson);
const { version: VERSION } = PackageJson;

// server
const SERVER_PORT = process.env.PORT || 3000;

// dev only: the vite dev server is proxied under this prefix so that everything is served
// from a single origin (this server). Must match `base` in src/client/vite.config.ts.
const VITE_DEV_BASE = '/vite-dev';
const VITE_DEV_SERVER_URL = 'http://localhost:5173';

export { IS_DEV, VERSION, SERVER_PORT, VITE_DEV_BASE, VITE_DEV_SERVER_URL };
