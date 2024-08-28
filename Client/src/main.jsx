import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Test from './Test.jsx';
import ClimateSection from './ClimateSection.jsx';
import AC_page from './AC_page.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/Ac" element={<AC_page />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
