import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './globalStyles.css';
import AllRoutes from './helper/AllRoutes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AllRoutes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
