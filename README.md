## FAST FullStack React with TypeScript starter kit.
<img src="https://github.com/gilamran/fullstack-typescript/raw/master/logo.png" width="150">
---


### What's included
* Client & Server in TypeScript
* React
* React router v4
* Example api communication (Using Axios)

### How is works:
* Separate `tsconfig.json` for client and server.
* Client is bundled using Webpack, server is emitted by TypeScript.
* Client and server can share code (And types). For example: [IUserDTO.d.ts](https://github.com/gilamran/fullstack-typescript/blob/master/src/shared/IUserDTO.d.ts)

### Usage:
* `npm run dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
* `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
* `npm start` - Just runs `node ./dist/server`  


---

##### What's not included
* Universal
* Redux [How to add]
* Styling library [How to add]

##### Requirements
* Node 6+



---

##### Licence
This code is released as is, under MIT licence. Feel free to use it for free for both commercial and private projects. No warranty provided.
