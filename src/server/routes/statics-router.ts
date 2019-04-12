import * as path from 'path';
import * as express from 'express';
import { Router } from 'express';
import * as proxy from 'http-proxy-middleware';
import * as config from '../config';

export function staticsRouter() {
  const router = Router();

  if (config.IS_PRODUCTION) {
    const staticsPath = path.join(__dirname, '..', '..', '..', 'statics');

    // All the assets are in "statics" folder (Done by Webpack during the build phase)
    router.use('/statics', express.static(staticsPath));
  } else {
    // All the assets are hosted by Webpack on localhost:${config.WEBPACK_PORT} (Webpack-dev-server)
    router.use(
      '/statics',
      proxy({
        target: `http://localhost:${config.WEBPACK_PORT}/`,
      }),
    );
  }
  return router;
}
