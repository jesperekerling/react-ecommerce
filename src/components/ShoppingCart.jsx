import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"
// import { clearCart } from "../store/features/shoppingCart/shoppingCartSlice"
import { useCart } from "../contexts/cartContext"


export const ShoppingCart = ({ isCheckoutPage, setIsOpen }) => {

  // const { cart, totalPrice } = useSelector(state => state.shoppingCart)

  const { cart, totalPrice, clearCart } = useCart()

  const dispatch = useDispatch()

  return (
    <div className="bg-white">
      <div>
        { cart.length < 1 && (
          <div className="p-2 text-center">
            <p>Your cart is empty</p>
          </div>
        )}
        { cart.map(item => (
          <CartItem key={`cart_${item.product._id}`} item={item} />
        ))}
      </div>
      <hr className="border-gray-400" />
      <div className="flex justify-between items-center p-2">
        <div>
          <p>Total Price: { totalPrice } </p>
          <small className="text-gray-600">Inkl. vat</small>
        </div>
        <div>
          { isCheckoutPage
            ? (
              <>
                <button onClick={clearCart} className="bg-yellow-600 text-white py-1.5 px-6 rounded-lg hover:bg-yellow-700 transition-colors mr-4">Clear Cart</button>
                <button className="bg-slate-800 text-white py-1.5 px-6 rounded-lg hover:bg-slate-900 transition-colors">Place order</button>
              </>
            )
            : <Link onClick={() => setIsOpen(false)} to="/checkout" className="bg-slate-800 text-white py-1.5 px-6 rounded-lg hover:bg-slate-900 transition-colors">Checkout</Link>
          }
          
        </div>
      </div>
    </div>
  )
}