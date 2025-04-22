import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Home.jsx'; 
import LoginPage from './login.jsx';
import VerificationPage from './verifi.jsx';
import ProfilePage from './profile.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage />
    <VerificationPage />
    <HomePage />
    <ProfilePage />
  </React.StrictMode>
);