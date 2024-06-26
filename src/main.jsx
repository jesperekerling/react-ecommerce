import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import HomePage from './layouts/pages/HomePage.jsx'
import ProductDetailsPage from './layouts/pages/ProductDetailsPage.jsx'
import BrowseProducts from './app/public/BrowseProducts.jsx'
import CheckOutPage from './layouts/pages/CheckOutPage.jsx'
import BrowseCategories from './app/public/BrowseCategories.jsx'
import ShowCategory from './components/ShowCategory.jsx'
import Support from './app/public/Support.jsx'
import NotFound from './app/public/NotFound.jsx'

import Register from './app/auth/Register.jsx'
import Login from './app/auth/Login.jsx'

import LoggedInPage from './app/private/LoggedInPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
      { path: "products", element: <BrowseProducts /> },
      { path: 'checkout', element: <CheckOutPage />},
      { path: 'categories', element: <BrowseCategories />},
      { path: 'support', element: <Support />},
      { path: 'login', element: <Login />},
      { path: 'logged-in', element: <LoggedInPage />},
      { path: 'register', element: <Register />},
      { path: 'categories/:category', element: <ShowCategory />},     
    ]
  },
  { path: '*', element: <NotFound />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)