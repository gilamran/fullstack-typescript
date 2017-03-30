import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Pages
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { UsersList } from './components/UsersList';

export const App = () => (
  <BrowserRouter>
    <div>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/users-list" component={UsersList}/>
    </div>
  </BrowserRouter>
);
