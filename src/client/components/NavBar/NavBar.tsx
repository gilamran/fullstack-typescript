import * as React from 'react';
import { NavLink } from 'react-router-dom';
const css = require('./NavBar.css');

export const NavBar = () => (
  <ul className={css.list}>
    <li>
      <NavLink activeClassName='active' exact to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/users-list'>Users List</NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/about'>About</NavLink>
    </li>
  </ul>
);
