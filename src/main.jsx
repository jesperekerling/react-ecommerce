import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import HomePage from './layouts/pages/HomePage.jsx'
import ProductDetailsPage from './layouts/pages/ProductDetailsPage.jsx'
import CheckoutPage from './layouts/pages/CheckoutPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "details/:productId", element: <ProductDetailsPage /> },
      { path: 'checkout', element: <CheckoutPage />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)