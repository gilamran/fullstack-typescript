import * as proxy from 'http-proxy-middleware';
import { Router } from 'express';

export function staticsDevRouter() {
  const router = Router();

// All the assets are hosted by Webpack on localhost:8080 (Webpack-dev-server)
  router.use('/public', proxy(
    {
      target: 'http://localhost:8080/'
    }));

// Any route should render the web app html (hosted by by Webpack-dev-server)
  router.use('**', proxy(
    {
      target: 'http://localhost:8080/',
      pathRewrite: path => '/public/index.html',
    }));

  return router;
}
