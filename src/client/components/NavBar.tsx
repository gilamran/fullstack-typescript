import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <ul>
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
