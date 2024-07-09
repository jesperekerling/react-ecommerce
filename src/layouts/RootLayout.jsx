import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navigation/NavBar"
import Providers from "../components/Providers"
import Footer from "../components/Navigation/Footer"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function RootLayout() {
  return (
    
    <Providers>
      <ToastContainer
        stacked
        position="bottom-center"
        autoClose={3000}
        theme="colored"
       />
      <Navbar />
      <main className="p-3">
        
        <Outlet />
        
      </main>
      <Footer />
    </Providers>
  )
}
export default RootLayout