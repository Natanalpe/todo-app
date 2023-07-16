import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './global/globalStyle';
import TodoRoutes from './routes/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <TodoRoutes />
    <a id="git-link" href="https://github.com/Natanalpe" target="_blank" rel="noreferrer" >@natanalpe</a>
  </React.StrictMode>,
);