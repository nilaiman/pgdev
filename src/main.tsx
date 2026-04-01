import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SiteExperienceProvider } from './components/context/SiteExperienceContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SiteExperienceProvider>
      <App />
    </SiteExperienceProvider>
  </React.StrictMode>,
)