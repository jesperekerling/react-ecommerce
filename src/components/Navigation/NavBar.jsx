import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "../Dropdown";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from '../../contexts/authContext'


export const Navbar = () => {

  const { token, logout} = useAuth()


  // const { totalQuantity } = useSelector(state => state.shoppingCart)
  const { totalQuantity } = useCart()

  return (
    <header className="w-full mb-20">
      <nav className="w-full bg-white dark:bg-slate-800 z-20 dark-bg-gray-900 fixed top-0 border-0 broder-gray-200 dark:border-gray-600 container">

        <div className='flex flex-wrap items-center justify-between p-3 mx-4 lg:mx-7'>

          <NavLink to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>  
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 60" xmlSpace="preserve" width={45} className="pt-3 fill-gray-800"><path d="M15.6885738,21.0874329h-0.4928217c-0.6617804,0-1.1982603-0.5364799-1.1982603-1.1982613v-0.4928207  c0-0.6617813,0.5364799-1.1982594,1.1982603-1.1982594h0.4928217c0.6617794,0,1.1982594,0.536478,1.1982594,1.1982594v0.4928207  C16.8868332,20.5509529,16.3503532,21.0874329,15.6885738,21.0874329z M21.7171364,19.8891716v-0.4928207  c0-0.6617813-0.5364799-1.1982594-1.1982594-1.1982594h-0.4928226c-0.6617794,0-1.1982594,0.536478-1.1982594,1.1982594v0.4928207  c0,0.6617813,0.5364799,1.1982613,1.1982594,1.1982613h0.4928226  C21.1806564,21.0874329,21.7171364,20.5509529,21.7171364,19.8891716z M26.5474396,19.8891716v-0.4928207  c0-0.6617813-0.5364799-1.1982594-1.1982613-1.1982594h-0.4928207c-0.6617813,0-1.1982594,0.536478-1.1982594,1.1982594v0.4928207  c0,0.6617813,0.536478,1.1982613,1.1982594,1.1982613h0.4928207C26.0109596,21.0874329,26.5474396,20.5509529,26.5474396,19.8891716  z M45.9443359,21.0307617v16.5053711c0,1.8339844-1.4921875,3.3261719-3.3261719,3.3261719h-9.6152344  c-1.8339844,0-3.3261719-1.4921875-3.3261719-3.3261719v-5.9863281h-6.8310547l0.0210571,3.1660156h4.4447632  c0.5527344,0,1,0.4472656,1,1s-0.4472656,1-1,1H12.3056641c-0.5522461,0-1-0.4472656-1-1s0.4477539-1,1-1h4.324646  l0.0210571-3.1660156H7.7001953c-3.1928711,0-5.7900391-2.5976563-5.7900391-5.7900391V12.1201172  c0-3.1928711,2.597168-5.7900391,5.7900391-5.7900391h25.1396484c3.1923828,0,5.7900391,2.597168,5.7900391,5.7900391v5.5839844  h3.9882813C44.4521484,17.7041016,45.9443359,19.1962891,45.9443359,21.0307617z M42.6181641,19.7041016h-9.6152344  c-0.6132202,0-1.107605,0.4268799-1.258728,0.9931641h12.1326904C43.725769,20.1309814,43.2313843,19.7041016,42.6181641,19.7041016  z M31.6767578,33.5732422h12.2675781V22.6972656H31.6767578V33.5732422z M20.8455811,31.5498047h-2.1940918l-0.0210571,3.1660156  h2.2362061L20.8455811,31.5498047z M29.6767578,29.5498047v-8.519043c0-1.8344727,1.4921875-3.3266602,3.3261719-3.3266602  h3.6269531v-5.5839844c0-2.0898438-1.7001953-3.7900391-3.7900391-3.7900391H7.7001953  c-2.0898438,0-3.7900391,1.7001953-3.7900391,3.7900391v13.6396484c0,2.0898438,1.7001953,3.7900391,3.7900391,3.7900391H29.6767578  z M43.9443359,37.5361328v-1.9628906H31.6767578v1.9628906c0,0.7314453,0.5947266,1.3261719,1.3261719,1.3261719h9.6152344  C43.3496094,38.8623047,43.9443359,38.2675781,43.9443359,37.5361328z M40.4521484,36.3574219h-5.2841797  c-0.5527344,0-1,0.4472656-1,1s0.4472656,1,1,1h5.2841797c0.5527344,0,1-0.4472656,1-1S41.0048828,36.3574219,40.4521484,36.3574219  z"/></svg>

            <span className='self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white hover:opacity-50'>
              Tech Shop
            </span>
          </NavLink>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button data-collapse-toggle='navbar-sticky' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-white text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' aria-controls='navbar-sticky' aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15'/>
                </svg>
            </button>

            <Dropdown>
              <svg className="w-7 h-7 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700'>
              <li>
                <NavLink to='/products' className='block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to='/categories' className='block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Categories
                </NavLink>
              </li>
              <li>
                {!token && <NavLink to='/login' className='block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Log in</NavLink>}
                {token && <NavLink to='/logged-in' className='block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>My Orders</NavLink>}
              </li>
              <li>
                {token && <Link to='/' onClick={logout} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Log out</Link>
                }
              </li>
              <li className="md:hidden block">
                <NavLink to='/Support' className='block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
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