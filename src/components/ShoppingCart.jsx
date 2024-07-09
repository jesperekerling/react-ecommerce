import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { Link, NavLink } from "react-router-dom"
import { useCart } from "../contexts/cartContext"
import { useAuth } from '../contexts/authContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShoppingCart = ({ isCheckOutPage, setIsOpen }) => {

  const navigate = useNavigate();
  const { token } = useAuth();
  const { cart, totalPrice, clearCart } = useCart()

  const placeOrder = async () => {
    const response = await fetch('https://ecommerce-api.ekerling.com/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        products: cart.map(item => ({
          productId: item.product._id,
          quantity: item.quantity
        }))
      })
    });

    if (!response.ok) {
      <p>Errorrrrrr!!!</p>
    }

    // Displays answer from API in the console
    const responseData = await response.json();
    console.log(responseData);

    toast.success("Thank you, your order has been placed!");

    clearCart();

    setTimeout(() => {
      navigate('/logged-in', { state: { from: 'placeOrder' } });
    }, 1000);

  };

    return (
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white py-2 sm:py-3 px-3 sm:px-8">
      
      <div className="mb-5">
        { cart.length < 1 && (
          <div className="p-2 text-center">
            <p>Your cart is empty..</p>
            <Link to='/products'>
              <button className="py-4 bg-blue-100 my-5 px-8 font-bold text-sm text-black">
                Browse products to add
              </button>
            </Link>
          </div>
        )}
        { cart.map(item => (
          <CartItem key={`cart_${item.product._id}`} item={item} />
        ))}
      </div>
      <hr className="border-gray-400 dark:border-e-gray-700" />
      <div className="flex justify-between items-center p-2 mt-3">
        <div>
          <p className="text-black dark:text-white">Total Price: <span className="font-bold">{new Intl.NumberFormat('sv-SE').format(totalPrice)} kr</span></p>
          <small className="text-gray-600 dark:text-gray-200">Inkl. vat</small>
        </div>
        <div>
          { isCheckOutPage && token && (
            <>
              <button onClick={clearCart} className="bg-gray-200 dark:bg-gray-800s text-black dark:text-white dark:bg-slate-800 py-1.5 px-6 rounded-lg transition-colors mr-4">
                Clear cart
              </button>
              <button onClick={placeOrder} className="bg-blue-700 text-white py-1.5 px-6 rounded-lg hover:bg-slate-900 transition-colors">
                Place order
              </button>
            </>
          )}
          { !isCheckOutPage && (
            <Link onClick={() => setIsOpen(false)} to="/checkout" className="bg-blue-700 font-semibold text-white py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white">
              Checkout
            </Link>
          )}
        </div>
      </div>
      
      {!token && (
        <p className="p-5 bg-blue-100 dark:bg-gray-900 mt-5 rounded-lg">
          Please <NavLink to="/register" className="font-bold">register</NavLink> or <NavLink to="/login" className="font-bold">log in</NavLink> to proceed with your checkout.
        </p>
      )}
    </div>
    
  )
}