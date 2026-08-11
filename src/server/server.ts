import express from 'express';
import path from 'path';
import { apiRouter } from './routes/api-router';
import { pagesRouter } from './routes/pages-router';
import { staticsRouter } from './routes/statics-router';
import { createViteDevProxy } from './vite-dev-proxy';
import * as config from './config';

async function bootstrap() {
  console.log(`*******************************************`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`config: ${JSON.stringify(config, null, 2)}`);
  console.log(`*******************************************`);

  const app = express();
  app.set('view engine', 'ejs');

  app.use('/assets', express.static(path.join(process.cwd(), 'assets')));
  if (config.IS_DEV) {
    // must be mounted before the pages router (SPA catch-all)
    app.use(await createViteDevProxy());
  }
  app.use(apiRouter());
  app.use(staticsRouter());
  app.use(pagesRouter());

  app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on http://localhost:${config.SERVER_PORT}`);
  });

}

bootstrap();
