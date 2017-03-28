import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history'

// Pages
import {Home} from './components/Home';
import {UsersList} from './components/UsersList';
import {About} from './components/About';

const browserHistory = createBrowserHistory();

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={UsersList}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>
), document.getElementById('app'));
