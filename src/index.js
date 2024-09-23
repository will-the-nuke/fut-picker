import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoutes from './routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Header from './components/multiPageComponents/header.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <div style={{marginTop: '100px'}}></div>
      <Header />
      <AllRoutes />

    </BrowserRouter>
  </React.StrictMode>
);