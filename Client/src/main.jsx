import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 import ClimateSection from './ClimateSection.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <ClimateSection /> */}
  </StrictMode>,
)
