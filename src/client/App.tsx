import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

require('bootstrap/dist/css/bootstrap.css');

// Pages
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { UsersList } from './components/UsersList/UsersList';

export const App = () => (
  <BrowserRouter>
    <div>
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/users-list' component={UsersList}/>
    </div>
  </BrowserRouter>
);
