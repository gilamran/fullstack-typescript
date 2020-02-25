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
        Fetch
      </Button>
      <Button color='primary' component={RouterLink} to='/lazy-example'>
        Lazy Loading
      </Button>
      <Button color='primary' component={RouterLink} to='/styled-example'>
        Styled Components
      </Button>
      <Button color='primary' component={RouterLink} to='/router-example/1234'>
        React-Router
      </Button>
    </Toolbar>
  </AppBar>
);
