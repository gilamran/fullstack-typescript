import { StylesProvider } from '@mui/styles';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Container with the "app" id was not found');
}

const root = createRoot(container);
root.render(
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>,
);
