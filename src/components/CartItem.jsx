import { useDispatch } from "react-redux"
import { removeOne, addToCart, removeItem } from "../store/features/shoppingCart/shoppingCartSlice"
import { useCart } from "../contexts/cartContext"

export const CartItem = ({ item }) => {


  // const dispatch = useDispatch()
  const { addToCart, removeOne, removeItem } = useCart()

  const removeOneFromCart = () => {
    // dispatch(removeOne(item.product._id))
    removeOne(item.product._id)
  }

  const addOneToCart = () => {
    // dispatch(addToCart(item.product))
    addToCart(item.product)
  }

  const deleteProduct = () => {
    // dispatch(removeItem(item.product._id))
    removeItem(item.product._id)
  }

  return (
    <div className="flex justify-between items-center p-2 border-b last-of-type:border-b-0">
      <div className="flex items-center">
        <img src={item.product.images[0]} alt="product-image" className="w-[100px]" />
        <div>
          <p className="font-semibold truncate">{item.product.name}</p>
          <p className="text-sm">{item.quantity} x {item.product.price}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div>
          <button onClick={removeOneFromCart} className="bg-slate-800 text-white px-2 py-3 rounded-s-md hover:bg-slate-900 transition-colors border-r border-r-slate-600">
            <svg class="w-5 h-5 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
            </svg>
          </button>
          <button onClick={addOneToCart} className="bg-slate-800 text-white px-2 py-3 rounded-e-md hover:bg-slate-900 transition-colors">
            <svg class="w-5 h-5 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
            </svg>
            </button>
        </div>
        <button onClick={deleteProduct} className="p-1 group">
          <p className="text-red-700 group-hover:text-red-800 transition-colors w-5 h-5">
            Clear cart</p>
        </button>
      </div>
    </div>
  )
}