import * as express from 'express';
import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import * as config from './config';

const app = express();

app.use(apiRouter());
app.use(config.IS_PRODUCTION ? staticsRouter() : staticsDevRouter());

app.listen(config.SERVER_PORT, () => {
  console.log(`App listening on port ${config.SERVER_PORT}!`);
});