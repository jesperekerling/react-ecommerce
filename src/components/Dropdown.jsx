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
        <button onClick={() => setIsOpen(state => !state)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold " id="menu-button" aria-expanded="true" aria-haspopup="true">
          {children}
        </button>
      </div>

      { isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-[450px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
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