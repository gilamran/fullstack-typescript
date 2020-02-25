import { CssBaseline, makeStyles } from '@material-ui/core';
import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UsersList } from './components/UsersList';
import { LazyLoadingExample } from './components/LazyLoadingExample';
import { StyledComponentsExample } from './components/StyledComponentsExample';
import { RouterExample } from './components/RouterExample';

const useStyles = makeStyles(() => ({
  main: {
    margin: 8,
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
          <Route path='/users-list' component={UsersList} />
          <Route path='/lazy-example' component={LazyLoadingExample} />
          <Route path='/styled-example' component={StyledComponentsExample} />
          <Route path='/router-example/:slug' component={RouterExample} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
