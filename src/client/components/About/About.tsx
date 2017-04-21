import * as React from 'react';
const css = require('./About.css');

export const About = () => (
  <div className={css.title}>
    <h1>You can find information <a href="http://github.com/gilamran/fullstack-typescript">here</a></h1>
  </div>
);
