import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Price from './pages/Price.jsx'
import Product from './pages/Product.jsx'
import Admin from './pages/Admin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/price',
        element: <Price />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)