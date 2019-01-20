import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getVersion } from '../shared/utils';
import { About } from './components/About';
// Pages
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UsersList } from './components/UsersList';

console.log(`The App version is ${getVersion()}`);

const AppImpl = () => (
  <BrowserRouter>
    <div>
      <Grid container spacing={24}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users-list' component={UsersList} />
        </Switch>
      </Grid>
    </div>
  </BrowserRouter>
);

export const App = hot(module)(AppImpl);
