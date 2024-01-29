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
    <nav className="border-b">
      <div className="h-16 container m-auto flex items-center justify-between">
        <Link to="/">
          
        </Link>


        <ul className="flex items-center gap-4">
          <li><NavLink to="/" className="text-white">Home</NavLink></li>
          <li className="relative">
            { totalQuantity > 0 && <div className="absolute right-0 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full z-10">
              <p className="text-xs">{ totalQuantity }</p>
            </div>}
            <Dropdown>
              hjej
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  )
}