import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './app/public/Home'
import Support from './app/public/Support'
import NotFound from './app/public/NotFound'
import Categories from './app/public/Categories'
import BrowseProducts from './app/public/BrowseProducts'
import CheckOut from './app/public/CheckOut'


import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'
import ShowCategory from './components/ShowCategory'




function App() {
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)


  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/products' element={<BrowseProducts />} />
            <Route path='/support' element={<Support />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/categories/' element={<Categories />} />
            <Route path='/categories/:category' element={<ShowCategory />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>        

        <Footer />

      </Router>
    </>
  )
}

export default App
