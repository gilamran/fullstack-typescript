## FAST FullStack React with TypeScript starter kit.
<img src="https://github.com/gilamran/fullstack-typescript/raw/master/assets/images/logo.png" width="150">

---

### Why?
* **Simple** to jump into, **Fast** because it is simple.
* Separate `tsconfig.json` for client and server.
* Client and server can share code (And types). For example: [IUserDTO.d.ts](https://github.com/gilamran/fullstack-typescript/blob/master/src/shared/IUserDTO.d.ts)
* The client is bundled using [Webpack](https://webpack.github.io/) because it goes to the browser.
* The server is emitted by [TypeScript](https://github.com/Microsoft/TypeScript) because node 6 supports es6.


<p align="center"> 
<img src="https://github.com/gilamran/fullstack-typescript/raw/master/assets/images/flow.png" width="500">
</p>

---


### What's included
* [React](https://facebook.github.io/react/)
* [React router v4](https://github.com/ReactTraining/react-router)
* [React bootstrap](https://react-bootstrap.github.io/)
* [Css modules](https://github.com/css-modules/css-modules)
* [Axios](https://github.com/mzabriskie/axios) (For Client/Server communication)

### Usage:
* `npm run dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
* `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
* `npm start` - Just runs `node ./dist/server/server.js`  

### Notes:
* [tslint](https://palantir.github.io/tslint/) runs only on pre-commit

---

##### What's not included
* Tests
* Universal
* Redux/MobX

##### Requirements
* Node 6+



---

##### Licence
This code is released as is, under MIT licence. Feel free to use it for free for both commercial and private projects. No warranty provided.
