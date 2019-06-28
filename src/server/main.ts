import * as express from 'express';
import * as path from 'path';
import { SERVER_PORT } from './config';
import { apiRouter } from './routes/api-router';
import { pagesRouter } from './routes/pages-router';
import { staticsRouter } from './routes/statics-router';

const app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(process.cwd(), 'assets')));
app.use(apiRouter());
app.use(staticsRouter());
app.use(pagesRouter());

app.listen(SERVER_PORT, () => {
  console.log(`App listening on port ${SERVER_PORT}!`);
});
