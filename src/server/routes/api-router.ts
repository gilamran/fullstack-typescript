import bodyParser from 'body-parser';
import { Router } from 'express';
import { users, getUserById } from '../db';
import { getUserFullName } from '@shared/utils';

export function apiRouter(): Router {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/users', (req, res) => {
    res.json(users);
  });

  router.get('/api/user/:userId', (req, res) => {
    const userId = req.params.userId;
    const user = getUserById(userId);
    if (!user) {
      res.status(404).send(`User ${userId} not found`);
      return;
    }
    console.log(`Found ${getUserFullName(user)}`);
    res.json(user);
  });

  router.post('/api/set-user', (req, res) => {
    res.send(`ok`);
  });

  return router;
}
