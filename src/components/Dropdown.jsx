import ReactDOM from 'react-dom'
import { useState } from "react"
import { ShoppingCart } from "./ShoppingCart"

export const Dropdown = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    { isOpen && <DropdownBg setIsOpen={setIsOpen} />}
    <div className="relative inline-block text-left">
      <div>
        <button onClick={() => setIsOpen(state => !state)} type="button" className="w-full justify-center relative inline-flex items-center py-1 px-2 text-sm font-medium text-center text-black bg-white rounded-md hover:bg-gray-100 hover:text-white ml-0" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {children}
        </button>
      </div>

      { isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-[380px] sm:w-[550px] origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <ShoppingCart setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
      
    </div>
  </>
  )
}


const DropdownBg = ({setIsOpen}) => {
  return ReactDOM.createPortal((
    <div className="absolute inset-0 bg-transparent " onClick={() => setIsOpen(false)}/>
  ), document.querySelector('#modal'))
}