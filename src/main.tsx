import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { myApi } from './redux/api.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <ApiProvider api={myApi}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
  </ApiProvider>

)
