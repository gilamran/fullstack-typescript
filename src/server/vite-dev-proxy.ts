import type { RequestHandler } from 'express';
import { VITE_DEV_BASE, VITE_DEV_SERVER_URL } from './config';

// Dev only. Proxies the vite dev server (loopback only) under VITE_DEV_BASE, so the browser
// only ever talks to this server. That's what makes the app reachable from other machines
// on the LAN (http://<machine-ip>:3000).
export async function createViteDevProxy(): Promise<RequestHandler> {
  // http-proxy-middleware is ESM only, and this server is emitted as CommonJS, so it is
  // loaded dynamically. It also keeps this dev dependency out of the production code path.
  const { createProxyMiddleware } = await import('http-proxy-middleware');

  return createProxyMiddleware({
    target: VITE_DEV_SERVER_URL,
    pathFilter: VITE_DEV_BASE, // prefix match, upgrade requests included
    changeOrigin: true, // sends Host: localhost, which vite's host allow-list accepts
    ws: true, // HMR websocket, subscribes to the http server's upgrade event on the first proxied request
  });
}
