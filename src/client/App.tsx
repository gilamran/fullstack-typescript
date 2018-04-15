import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// Pages
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import About from './components/About/About';
import { UsersList } from './components/UsersList/UsersList';

export const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/users-list' component={UsersList} />
      </Switch>
    </div>
  </BrowserRouter>
);
