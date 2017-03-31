import * as express from 'express';
import { apiRouter } from './routes/apiRouter';
import { webAppRouter } from './routes/webAppRouter';
import { webAppDevRouter } from './routes/webAppDevRouter';

const app = express();

app.use(apiRouter());
app.use(false ? webAppDevRouter() : webAppRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});