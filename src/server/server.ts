import * as express from 'express';
import { apiRouter } from './routes/apiRouter';
import { webAppRouter } from './routes/webAppRouter';
import * as proxy from 'http-proxy-middleware';

const app = express();


app.use(apiRouter());

// app.use('/public', express.static('dist/public'));
app.use('/public', proxy(
  {
    target: 'http://localhost:8080/'
  }));

// app.use('**', render('public/index.html');
app.use('**', proxy(
  {
    target: 'http://localhost:8080/',
    pathRewrite: path => '/public/index.html',
  }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});