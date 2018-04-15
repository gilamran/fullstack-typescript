import * as React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink as BSNavLink } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <Navbar>
    <NavbarBrand href='/'>Brand</NavbarBrand>
    <Nav className='pull-xs-right' navbar>
      <NavItem>
        <BSNavLink tag={NavLink} to='/'>
          <span>Home</span>
        </BSNavLink>
      </NavItem>
      <NavItem>
        <BSNavLink tag={NavLink} to='/users-list'>
          <span>Users List</span>
        </BSNavLink>
      </NavItem>
      <NavItem>
        <BSNavLink tag={NavLink} to='/about'>
          <span>About</span>
        </BSNavLink>
      </NavItem>
    </Nav>
  </Navbar>
);
