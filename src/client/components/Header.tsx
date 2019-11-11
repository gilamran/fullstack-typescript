import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent = () => (
  <AppBar position='static' color='default'>
    <Toolbar>
      <Button color='primary' component={(p: any) => <Link to='/' {...p} />}>
        Home
      </Button>
      <Button color='primary' component={(p: any) => <Link to='/users-list' {...p} />}>
        Example Users List
      </Button>
      <Button color='primary' component={(p: any) => <Link to='/about' {...p} />}>
        About
      </Button>
    </Toolbar>
  </AppBar>
);
