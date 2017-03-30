import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <div>
    <NavLink activeClassName='active' exact to='/'>Home</NavLink>
    <NavLink activeClassName='active' to='/users-list'>Users List</NavLink>
    <NavLink activeClassName='active' to='/about'>About</NavLink>
  </div>
);
