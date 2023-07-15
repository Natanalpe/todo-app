import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './global/globalStyle';
import TodoRoutes from './routes/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <TodoRoutes />
    <a id="git-link" href="https://github.com/Natanalpe" target="_blank">@natanalpe</a>
  </React.StrictMode>,
)