import { CssBaseline, makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Pages
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Home } from './components/Home';
import { Usage } from './components/Usage';
import { LazyLoadingExample } from './components/LazyLoadingExample';
import { RouterExample } from './components/RouterExample';
import { StyledComponentsExample } from './components/StyledComponentsExample';
import { UsersList } from './components/UsersList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }),
);

export const App = () => {
  const classes = useStyles({});

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <SideMenu />
        <main className={classes.main}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/usage' element={<Usage />} />
            <Route path='/fetch-example' element={<UsersList />} />
            <Route path='/lazy-example' element={<LazyLoadingExample />} />
            <Route path='/styled-example' element={<StyledComponentsExample />} />
            <Route path='/router-example/:slug' element={<RouterExample />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
