import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context-api';
import App from './MainHome';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

import { BrowserRouter } from 'react-router-dom';

React.Component.prototype.UNSAFE_componentDidMount = React.Component.prototype.componentDidMount;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
