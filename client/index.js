import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import { createRoot } from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import Cookies from 'js-cookie';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// react render
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<CookiesProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</CookiesProvider>
);
