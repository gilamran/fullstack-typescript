import Grid from '@material-ui/core/Grid';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './components/About';
// Pages
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UsersList } from './components/UsersList';

export const App = () => (
  <BrowserRouter>
    <Grid container spacing={2}>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/users-list' component={UsersList} />
      </Switch>
    </Grid>
  </BrowserRouter>
);
