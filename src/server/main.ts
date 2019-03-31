import * as express from 'express';
import * as path from 'path';
import { getVersion } from '../shared/utils';
import * as config from './config';
import { apiRouter } from './routes/api-router';
import { pagesRouter } from './routes/pages-router';
import { staticsRouter } from './routes/statics-router';

console.log(`The App version is ${getVersion()}`);

const app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, '..', '..', '..', 'assets')));
app.use(apiRouter());
app.use(staticsRouter());
app.use(pagesRouter());

app.listen(config.SERVER_PORT, () => {
  console.log(`App listening on port ${config.SERVER_PORT}!`);
});
