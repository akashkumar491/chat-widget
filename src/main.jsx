import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('chat-widget-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
