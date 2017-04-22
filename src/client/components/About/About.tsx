import * as React from 'react';
import { Panel } from 'react-bootstrap';

const css = require('./About.css');

export const About = () => (
  <Panel className={css.title} header='About'>
    <h1>Created by Gil Amran.</h1>
    <h2>You can find information at <a href='http://github.com/gilamran/fullstack-typescript'>github</a></h2>
  </Panel>
);
