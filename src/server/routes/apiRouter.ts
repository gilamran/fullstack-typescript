import * as bodyParser from 'body-parser';
import { Router } from 'express';

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/user/:userId', (req, res) => {
    res.send(`ok`);
  });

  router.post('/set-user', (req, res) => {
    res.send(`ok`);
  });

  return router;
}
