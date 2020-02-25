import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Header: React.FunctionComponent = () => (
  <AppBar position='static' color='default'>
    <Toolbar>
      <Button color='primary' component={RouterLink} to='/'>
        Home
      </Button>
      <Button color='primary' component={RouterLink} to='/users-list'>
        Fetch Example
      </Button>
      <Button color='primary' component={RouterLink} to='/lazy-example'>
        Lazy example
      </Button>
      <Button color='primary' component={RouterLink} to='/about'>
        About
      </Button>
    </Toolbar>
  </AppBar>
);
