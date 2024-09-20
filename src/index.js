import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoutes from './routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  
      <AllRoutes />

    </BrowserRouter>
  </React.StrictMode>
);