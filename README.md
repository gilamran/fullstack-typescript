# FAST FullStack React with TypeScript starter kit.

<img src="https://github.com/gilamran/fullstack-typescript/raw/master/assets/images/logo.png" width="150">

---

### Quick Start

Just clone this repository into your own project folder. and start working

```
git clone https://github.com/gilamran/fullstack-typescript.git <MyProjectName>
cd <MyProjectName>
npm install
npm run dev
```

If you want to detach from this repository into your own repository do this:

```
git remote remove origin
git remote add origin YOUR_REPO_URL
git push -u origin master
```

## Why

- **Simple** to jump into, **Fast** because it is simple.
- Separate `tsconfig.json` for client and server.
- Client and server can share code (And types). For example: [IUserDTO.d.ts](https://github.com/gilamran/fullstack-typescript/blob/master/src/shared/IUserDTO.d.ts)
- The client is bundled using [Webpack](https://webpack.github.io/) because it goes to the browser.
- The server is emitted by [TypeScript](https://github.com/Microsoft/TypeScript) because node 6 supports es6.

<p align="center"> 
<img src="https://github.com/gilamran/fullstack-typescript/raw/master/assets/images/flow.png" width="500">
</p>

---

### Directory Layout

```
.
├── /node_modules/          # 3rd-party libraries and utilities
├── /dist/                  # All the generated files will go here, and will run from this folder
├── /src/                   # The source code of the application
│   ├── /client/            # React app
│   ├── /server/            # Express server app
│   ├── /shared/            # The shared code between the client and the server
├── /assets/                # images, css, jsons etc.
├── .babelrc                # babel configuration
├── .gitignore              # ignored git files and folders
├── .nvmrc                  # Force nodejs version
├── package.json            # The list of 3rd party libraries and utilities
└── tslint.json             # TypeScript linting configuration file
├── README.md               # This file
```

### What's included

- [React v16](https://facebook.github.io/react/)
- [React router v4](https://github.com/ReactTraining/react-router)
- [Material-ui](https://github.com/mui-org/material-ui)
- [Jest](https://github.com/facebook/jest)
- [Css modules](https://github.com/css-modules/css-modules)
- [Axios](https://github.com/mzabriskie/axios) (For Client/Server communication)

### Usage

- `npm run dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
- `npm run test` - Runs jest tests
- `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
- `npm start` - Just runs `node ./dist/server/server.js`

---

#### What's not included

- Universal (Server side rendering)
- Redux/MobX (State management)

#### Requirements

- Node 6+

---

#### Licence

This code is released as is, under MIT licence. Feel free to use it for free for both commercial and private projects. No warranty provided.
