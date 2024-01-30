import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import HomePage from './layouts/pages/HomePage.jsx'
import ProductDetailsPage from './layouts/pages/ProductDetailsPage.jsx'
import BrowseProducts from './app/public/BrowseProducts.jsx'
import CheckoutPage from './layouts/pages/CheckoutPage.jsx'
import Categories from './app/public/Categories.jsx'
import ShowCategory from './components/ShowCategory.jsx'
import Support from './app/public/Support.jsx'
import NotFound from './app/public/NotFound.jsx'

import Register from './app/auth/Register.jsx'
import Login from './app/auth/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
      { path: "products", element: <BrowseProducts /> },
      { path: 'checkout', element: <CheckoutPage />},
      { path: 'categories', element: <Categories />},
      { path: 'support', element: <Support />},
      { path: 'login', element: <Login />},
      { path: 'register', element: <Register />},
      { path: 'categories/:category', element: <ShowCategory />},     
      { path: '*', element: <NotFound />},
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)