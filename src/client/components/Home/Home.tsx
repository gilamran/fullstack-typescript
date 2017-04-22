import * as React from 'react';
const css = require('./Home.css');
const logoImg = require('../../../../assets/images/logo.png');

export const Home = () => (
  <div className={css.title}>
    <img src={logoImg} className={css.logo}/>
    <h1>Welcome to the FAST FullStack React with TypeScript starter kit.</h1>
  </div>
);
