import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Test from './Test.jsx';
import ClimateSection from './ClimateSection.jsx';
import AC_page from './pages/AC_page.jsx';
import SmartRefrigeratorPage from './pages/SmartRefrigeratorPage.jsx';  // Import SmartRefrigeratorPage
import EnergyMonitorPage from './pages/EnergyMonitorPage.jsx';  // Import EnergyMonitorPage
import LightBulbPage from './pages/LightBulbPage.jsx';  // Import LightBulbPage
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/Ac" element={<AC_page />} />
        <Route path="/refrigerator" element={<SmartRefrigeratorPage />} />  {/* Route for SmartRefrigeratorPage */}
        <Route path="/energy-monitor" element={<EnergyMonitorPage />} />  {/* Route for EnergyMonitorPage */}
        <Route path="/lightbulb" element={<LightBulbPage />} />  {/* Route for LightBulbPage */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
