import express, { Router } from 'express';
import path from 'path';

export function staticsRouter(): Router {
  const router = Router();

  const staticsPath = path.join(process.cwd(), 'dist', 'client', 'assets');
  router.use('/assets', express.static(staticsPath));
  return router;
}
