import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

function Footer() {

  const location = useLocation(); // Check if Footer is on Support Page, then hide the Footer text about Support

  if (location.pathname === '/support') {
    return null;
  }

  return (


    
    <footer className='p-12'>
      <div className='bg-blue-800 p-10 text-white mt-10'>
        <h2 className="text-center text-2xl font-bold mt-5 mb-10">
          Support
        </h2>
        <p>
          Contact us for more information or questions.
        </p>
        <Link to='/support'>
          <button className="bg-black text-white my-10 hover:bg-blue-200 hover:text-black">
            Go to Customer Support
            </button>
        </Link>
      </div>
      <p className='p-10'>Tech Shop by <a href="https://ekerling.com/" target='_blank' className='font-bold text-blue-900'>ekerling.com</a></p>
    </footer>
  )
}

export default Footer

