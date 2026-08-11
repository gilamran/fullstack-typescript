# FAST FullStack React with TypeScript starter kit.

<img src="https://github.com/gilamran/fullstack-typescript/raw/master/assets/images/logo.png" width="150">

---

## Quick Start

If you're using Github, you can click on the "Use this template" button to create a new repository based on this starter kit.

## Clean example code
The repo comes with some examples on how to do basic stuff. As this is not really needed in real projects, you can remove them by running:
```
pnpm clean-up-example-code
```

## Manual clone
clone this repository into your own project folder. and start working

```bash
git clone https://github.com/gilamran/fullstack-typescript.git <MyProjectName>
cd <MyProjectName>
pnpm install
pnpm dev
```

If you want to detach from this repository into your own repository do this:

```bash
git remote remove origin
git remote add origin YOUR_REPO_URL
git push -u origin master
```

## Why

- **Simple** to jump into, **Fast** because it is simple.
- Separate `tsconfig.json` for client and server.
- Client and server can share code (And types). For example: [IUserDTO.d.ts](https://github.com/gilamran/fullstack-typescript/blob/master/src/shared/IUserDTO.d.ts)
- The client is bundled using [Vite](https://github.com/vitejs/vite) because it goes to the browser.
- The server is emitted by [TypeScript](https://github.com/Microsoft/TypeScript) because node now supports es6.

<p align="center"> 
<img src="https://github.com/gilamran/fullstack-typescript/raw/master/assets/images/flow.png" width="500">
</p>

---

## Requirements

- `NodeJs 24.14.+`, `Chrome 79+` or `FireFox 72+`

### Directory Layout

```bash
.
├── /node_modules/                    # 3rd-party libraries and utilities
├── /dist/                            # All the generated files will go here, and will run from this folder
├── /src/                             # The source code of the application
│   ├── /client/                      # React app
│   ├── /server/                      # Express server app
│   ├── /shared/                      # The shared code between the client and the server
├── /assets/                          # images, css, jsons etc.
├── /views/                           # EJS templates for server-rendered pages
├── eslint.config.mjs                 # ESLint configuration
├── .prettierrc.json                  # prettier configuration
├── .gitignore                        # ignored git files and folders
├── .nvmrc                            # Force nodejs version
├── .env                              # (ignored) Can be used to override environment variables
├── index.js                          # The server's entry point
├── package.json                      # The list of 3rd party libraries and utilities
├── README.md                         # This file
```

### What's included

- [React v19](https://facebook.github.io/react/)
- [React router v7](https://github.com/ReactTraining/react-router)
- [MUI (Material UI) v9](https://github.com/mui/material-ui)
- [emotion](https://emotion.sh/docs/introduction)

### Usage

- `pnpm dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
- `pnpm lint` - Runs es-lint
- `pnpm build` - `dist` folder will include all the needed files, both client (Bundle) and server.
- `pnpm start` - Just runs `node index.js`
- `pnpm start:prod` - sets `NODE_ENV` to `production` and then runs `node index.js`. (Bypassing vite)

### Ports in dev

In dev, port `3000` (the express server) is the **single origin** for everything: the HTML page, the API, and the client modules. The vite dev server runs on `5173` but stays **loopback only** — express proxies it under the `/vite-dev` prefix (including the HMR websocket), so the browser never talks to `5173` directly.

That means the app is reachable from other devices on your network at `http://<machine-ip>:3000` (as long as your OS firewall allows inbound connections on port `3000`).

The prefix is defined in two places that must stay in sync: `VITE_DEV_BASE` in [src/server/config.ts](src/server/config.ts) and `base` in [src/client/vite.config.ts](src/client/vite.config.ts).

None of this applies to production, where the client is a static bundle served by express.

### Config

All applications require a config mechanism, for example, `SLACK_API_TOKEN`. Things that you don't want in your git history, you want a different environment to have different value (dev/staging/production). This repo uses the file `config.ts` to access all your app variables. And a `.env` file to override variable in dev environment. This file is ignored from git.

---

#### What's not included

- Server side rendering
- Redux/MobX/Zustand (State management)

---

#### License

This code is released as is, under MIT license. Feel free to use it for free for both commercial and private projects. No warranty provided.
