import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// v0 preview provides a #root element automatically
const rootElement = document.getElementById('root') || document.body;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <App />
);
