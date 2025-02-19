import { StrictMode } from 'react'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { GlobalProvider } from './components/GlobalProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
)
