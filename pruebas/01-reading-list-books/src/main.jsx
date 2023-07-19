import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'

// Importamos el contexto para que toda mi app pueda utilizar sus estados globales
import { DataProvider } from './context/DataContext.jsx'
import { router } from './routes/Routes.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
