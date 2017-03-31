## FAST FullStack TypeScript with React starter kit.

---


#### What's included
* Client & Server in TypeScript
* React
* React router v4
* Example api communication (Using Axios)

#### How is works:
* Separated `tsconfig.json` for client and server.
* Client is bundled using Webpack, server is emitted by TypeScript.
* Client and server can share code (And types). For example: Validation.ts, IUserDTO.d.ts

#### Usage:
* `npm run dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
* `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
* `npm start` - Just runs `node ./dist/server`  

---

##### Client Tree
##### Server Tree

---

##### What's not included
* Universal
* Redux [How to add]
* Styling library [How to add]

##### Notes
* To get new version of static files, bump the version in your package.json

##### Requirements
* Node 6+




---
##### todo
* More docs
* open the browser on the first compilation
* tslint? (Only on pre-commit?)
* minify on build?
 
* client
  * static files?
  * polyfills? (For Object.assign and Promise)
  * Minimal css
  
* server
  * dev/production mode for the webapp router
  * favicon
  * refresh the browser after server compilation success

##### Licence
This code is released as is, under MIT licence. Feel free to use it for free for both commercial and private projects. No warranty provided.