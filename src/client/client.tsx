import { StylesProvider } from '@mui/styles';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>,
);
