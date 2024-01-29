import { IoLogoOctocat } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { useSelector } from "react-redux";
import { useCart } from "../contexts/cartContext";

export const Navbar = () => {

  // const { totalQuantity } = useSelector(state => state.shoppingCart)
  const { totalQuantity } = useCart()

  return (
    <header className="w-full mb-44">
      <nav className="bg-white dark-bg-gray-900 fixed w-full z-20 top-0 border-0 broder-gray-200 dark:border-gray-600">

      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <NavLink to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
              <img src='/src/assets/icons/computer.gif' alt='Flowbite Logo' width='50' height='50' />
              <span className='self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white hover:opacity-50'>
                Tech Shop</span>
        </NavLink>

        <div className="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <NavLink to='/support'>
            <button type='button' className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none font-medium">
              Support
            </button>
          </NavLink>


          <Dropdown>

            <button type="button" class="relative inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z"/>
            </svg>
            <span class="sr-only">Check out here</span>
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              { totalQuantity > 0 && <div className="absolute right-0 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full z-10">
                <p className="text-xs">{ totalQuantity }</p>
              </div>}
              </div>
            </button>
          </Dropdown>
        

        </div>


        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            
              <NavLink to='/' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                <li>Home</li>
              </NavLink>
            
            <li>
              <NavLink to='/products' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to='/categories' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                Categories
              </NavLink>
            </li>
          </ul>
        </div>

      </div>


      </nav>
    </header>
  )
}