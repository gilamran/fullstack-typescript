import fs from 'fs';
import path from 'path';
import { IS_DEV, WEBPACK_PORT } from '../config';

function getManifestFromWebpack(): Promise<any> {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const request = require('request');
    request.get(`http://localhost:${WEBPACK_PORT}/statics/manifest.json`, {}, (err, data) =>
      err ? reject(err) : resolve(data.body),
    );
  });
}

export async function getManifest() {
  let manifestStr: string;
  if (IS_DEV) {
    // load from webpack dev server
    manifestStr = await getManifestFromWebpack();
  } else {
    // read from file system
    manifestStr = fs.readFileSync(path.join(process.cwd(), 'dist', 'statics', 'manifest.json'), 'utf-8').toString();
  }
  const manifest = JSON.parse(manifestStr);
  return manifest;
}
