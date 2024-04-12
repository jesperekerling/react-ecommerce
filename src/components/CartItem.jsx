import { useCart } from "../contexts/cartContext"
import { toast } from "react-toastify"

export const CartItem = ({ item }) => {


  const { addToCart, removeOne, removeItem } = useCart()

  const removeOneFromCart = () => {
    removeOne(item.product._id)
    toast('One product removed form basket')
  }

  const addOneToCart = () => {
    addToCart(item.product)
    toast('Product added to basket')
  }

  const deleteProduct = () => {
    removeItem(item.product._id)
    toast('Deleted product')
  }

  return (
    <div className="flex justify-between items-center p-3 border-b last-of-type:border-b-0 mb-3">
      <div className="flex items-center">
        <img src={item.product.images[0]} alt="product-image" className="w-[100px]" />
        <div className="p-3 text-xs">
          <p className="font-semibold text-ellipis text-black dark:text-white">{item.product.name}</p>
          <p className="text-sm text-black dark:text-white">{item.quantity} x {item.product.price}</p>
        </div>
      </div>
      <div className="flex">
          <button onClick={removeOneFromCart} className="bg-slate-800 text-white p-2 mr-1 rounded-s-md hover:bg-slate-900 transition-colors border-r border-r-slate-600 dark:border-0 flex dark:text-white hover:dark:bg-slate-600">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/>
            </svg>
          </button>
          <button onClick={addOneToCart} className="bg-slate-800 text-white p-2 mr-1 rounded-s-md hover:bg-slate-900 transition-colors border-r border-r-slate-600 dark:border-0 flex dark:text-white hover:dark:bg-slate-600">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
            </svg>
            </button>
            <button onClick={deleteProduct} className="bg-slate-800 text-white p-2 mr-1 rounded-s-md hover:bg-slate-900 transition-colors border-r border-r-slate-600 dark:border-0 flex dark:text-white hover:dark:bg-slate-600">
          <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
          </svg>
        </button>

      </div>
    </div>
  )
}