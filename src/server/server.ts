import * as express from 'express';
import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import { IS_PRODUCTION } from './config';

const app = express();

app.use(apiRouter());
app.use(IS_PRODUCTION ? staticsRouter() : staticsDevRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});