import { AppBar, Button, Toolbar } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <AppBar position='static' color='default'>
    <Toolbar>
      <Button color='primary' component={(p: any) => <Link to='/' {...p} />}>Home</Button>
      <Button color='primary' component={(p: any) => <Link to='/users-list' {...p} />}>Example Users List</Button>
      <Button color='primary' component={(p: any) => <Link to='/about' {...p} />}>About</Button>
    </Toolbar>
  </AppBar>
);
