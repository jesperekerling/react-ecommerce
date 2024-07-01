import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

function Footer() {

  const location = useLocation(); // Check if Footer is on Support Page, then hide the Footer text about Support

  if (location.pathname === '/support') {
    return null;
  }

  return (


    
    <footer className='sm:p-3'>
      <div className='sm:rounded-lg bg-blue-950 dark:bg-black p-10 text-white dark:text-white mt-10'>
        <h2 className="text-center text-2xl font-bold mt-5 mb-10">
          Support
        </h2>
        <p>
          Contact us for more information or questions.
        </p>
        <Link to='/support'>
          <button className="font-semibold bg-white text-black dark:bg-gray-900 dark:text-white my-10 hover:bg-blue-200 hover:text-black">
            Customer Support
          </button>
        </Link>
      </div>
      <p className='p-10 text-sm text-gray-700 dark:text-white'>
        <a href="https://github.com/jesperekerling/react-ecommerce" target='_blank'>React Ecommerce</a> by <a href="https://ekerling.com/" target='_blank' className='font-bold text-blue-900 dark:text-blue-200'>ekerling.com</a>
      </p>
    </footer>
  )
}

export default Footer

