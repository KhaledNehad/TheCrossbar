import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/HomeFeeds/Home.tsx';
import LoginPage from './pages/Auth/LoginPage.tsx';
import SignupPage from './pages/Auth/SignupPage.tsx';

import './globalStyles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
