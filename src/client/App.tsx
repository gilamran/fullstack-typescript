import { CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './components/About';
// Pages
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UsersList } from './components/UsersList';

const useStyles = makeStyles(() => ({
  main: {
    margin: 8
  },
}));

export const App = () => {
  const classes = useStyles({});

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <main className={classes.main}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users-list' component={UsersList} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
