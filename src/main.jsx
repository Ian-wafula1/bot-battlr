import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset/modern-normalize.css'
import './reset/custom-reset.css'
import './css/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'

const router = createBrowserRouter(routes) 

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
