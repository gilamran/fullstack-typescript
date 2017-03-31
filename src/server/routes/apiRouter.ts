import * as bodyParser from 'body-parser';
import { Router } from 'express';
import { IUserDTO } from '../../shared/IUserDTO';

const users: IUserDTO[] = [
  {
    userId: '1',
    userName: 'Gil Amran',
    imageUrl: 'http://localhost:3000/public/gil.jpg'
  },
  {
    userId: '2',
    userName: 'Noa Tevel',
    imageUrl: 'http://localhost:3000/public/gil.jpg'
  },
  {
    userId: '3',
    userName: 'John Doe',
    imageUrl: 'http://localhost:3000/public/john.jpg'
  },
];

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/users', (req, res) => {
    res.json(users);
  });

  router.get('/api/user/:userId', (req, res) => {
    const userId = req.params.userId;
    const user: IUserDTO = users.find(u => u.userId == userId);
    res.json(user);
  });

  router.post('/api/set-user', (req, res) => {
    res.send(`ok`);
  });

  return router;
}
