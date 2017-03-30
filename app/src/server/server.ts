import * as express from 'express';
import { apiRouter } from './routes/apiRouter';
import { webAppRouter } from './routes/webAppRouter';

const app = express();

app.use('/', webAppRouter());
app.use('/api', apiRouter());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});