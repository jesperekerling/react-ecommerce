import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "../Dropdown";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from '../../contexts/authContext'
import imgUrl from '/src/assets/icons/computer.gif'


export const Navbar = () => {

  const {login, token, logout} = useAuth()


  // const { totalQuantity } = useSelector(state => state.shoppingCart)
  const { totalQuantity } = useCart()

  return (
    <header className="w-full mb-20">
      <nav className="w-full bg-white dark:bg-slate-800 z-20 dark-bg-gray-900 fixed top-0 border-0 broder-gray-200 dark:border-gray-600 container">

        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3'>


          <NavLink to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
                <img src={imgUrl} alt='Shop Logo' width='50' height='50' id="logo" />
                <span className='self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white hover:opacity-50'>
                  Tech Shop</span>
          </NavLink>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <NavLink to='/support'>
              <button type='button' className="text-black dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 sm:focus:ring-4 focus:outline-none font-medium md:block hidden">
                Support
              </button>
            </NavLink>

            <button data-collapse-toggle='navbar-sticky' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' aria-controls='navbar-sticky' aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15'/>
                </svg>
            </button>

            <Dropdown>
                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z"/>
                </svg>
                <span className="sr-only">Check out here</span>

                { totalQuantity > 0 && (
                  <div id="cartNumber" className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                    <div className="absolute right-0 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full z-10">
                      <p className="text-xs">{ totalQuantity }</p>
                    </div>
                  </div>
                )}
            </Dropdown>
          
          </div>

          <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700'>
              <li>
                <NavLink to='/' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Home
                </NavLink>
              </li>
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
              <li>
                {!token && <NavLink to='/login' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Log in</NavLink>}
                {token && <NavLink to='/logged-in' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>My Orders</NavLink>}
              </li>
              <li>
                {token && <Link to='/' onClick={logout} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Log out</Link>
                
                }
              </li>
              <li className="md:hidden block">
                <NavLink to='/Support' className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Support
                </NavLink>
              </li>
            </ul>
          </div>









        </div>
      </nav>
    </header>
  )
}