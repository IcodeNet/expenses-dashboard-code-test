import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global.styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);