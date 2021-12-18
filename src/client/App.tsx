import { Box, CssBaseline, Toolbar } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Pages
import { Header } from './components/Header';
import { Home } from './components/Home';
import { LazyLoadingExample } from './components/LazyLoadingExample';
import { RouterExample } from './components/RouterExample';
import { SideMenu } from './components/SideMenu';
import { StyledComponentExample } from './components/StyledComponentExample';
import { Usage } from './components/Usage';
import { UsersList } from './components/UsersList';

export const App = () => {

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <SideMenu />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/usage' element={<Usage />} />
            <Route path='/fetch-example' element={<UsersList />} />
            <Route path='/lazy-example' element={<LazyLoadingExample />} />
            <Route path='/styled-example' element={<StyledComponentExample />} />
            <Route path='/router-example/:slug' element={<RouterExample />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};
