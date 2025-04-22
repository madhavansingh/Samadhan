import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Home.jsx'; 
import LoginPage from './login.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage />
    <HomePage />
  </React.StrictMode>
);