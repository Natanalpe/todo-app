import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './global/globalStyle';
import TodoRoutes from './routes/index';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <TodoRoutes />
      <a id="git-link" href="https://github.com/Natanalpe" target="_blank" rel="noreferrer" >@natanalpe</a>
    </HashRouter>
  </React.StrictMode>,
);