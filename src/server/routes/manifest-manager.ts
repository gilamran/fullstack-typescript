import { IS_PRODUCTION, WEBPACK_PORT } from '../config';
import * as request from 'request';
import * as fs from 'fs';
import * as path from 'path';

function getManifestFromWebpack(): Promise<any> {
  return new Promise((resolve, reject) => {
    request.get(`http://localhost:${WEBPACK_PORT}/statics/manifest.json`, {}, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data.body);
    });
  });
}

export async function getManifest() {
  let manifestStr: string;
  if (IS_PRODUCTION) {
    // read from file system
    manifestStr = fs
      .readFileSync(path.join(__dirname, '..', '..', '..', 'statics', 'manifest.json'), 'utf-8')
      .toString();
  } else {
    // load from webpack dev server
    manifestStr = await getManifestFromWebpack();
  }
  const manifest = JSON.parse(manifestStr);
  return manifest;
}
