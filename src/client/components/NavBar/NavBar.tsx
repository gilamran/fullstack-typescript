import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const css = require('./NavBar.css');

export const NavBar = () => (
  <Navbar>
    <Nav bsStyle='pills'>
      <LinkContainer exact to='/'>
        <NavItem eventKey={1}>Home</NavItem>
      </LinkContainer>
      <LinkContainer to='/users-list'>
        <NavItem eventKey={2}>Users List</NavItem>
      </LinkContainer>
      <LinkContainer exact to='/about'>
        <NavItem eventKey={3}>About</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);
