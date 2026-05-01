import { StyledEngineProvider } from '@mui/material';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Container with the "app" id was not found');
}

const root = createRoot(container);
root.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
);
