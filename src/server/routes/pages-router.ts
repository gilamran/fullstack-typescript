import { Router } from 'express';
import { getManifest } from './manifest-manager';
import { IS_DEV, VITE_DEV_BASE } from '../config';

export function pagesRouter(): Router {
  const router = Router();

  router.get(`/{*path}`, async (_, res) => {
    const manifest = await getManifest();
    const renderData = { IS_DEV, manifest, viteDevBase: VITE_DEV_BASE };
    res.render('page.ejs', renderData);
  });

  return router;
}
