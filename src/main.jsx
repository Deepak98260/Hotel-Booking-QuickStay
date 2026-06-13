import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'

const PUBLISHABLE_KEY = "YOUR_CLERK_PUBLISHABLE_KEY"

createRoot(document.getElementById('root')).render(
  
    <ClerkProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  
)