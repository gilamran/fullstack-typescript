import * as React from 'react';
import { Jumbotron } from 'reactstrap';

const css = require('./Home.css');
const logoImg = require('../../../../assets/images/logo.png');

export const Home = () => (
  <Jumbotron>
    <img src={logoImg} className={css.logo}/>
    <h1>FullStack React with TypeScript</h1>
    <p>This is a starter kit to get you up and running with React with TypeScript.</p>
  </Jumbotron>
);
