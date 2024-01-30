import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, NavLink } from "react-router-dom";
import { addToCart } from "../../store/features/shoppingCart/shoppingCartSlice";
import { useCart } from "../../contexts/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ProductDetailsPage() {

  const successMsg = () => toast("");

  const { productId } = useParams()

  // const dispatch = useDispatch()

  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)

        setProduct(res.data)
        setLoading(false)
        
      } catch (err) {
        setError('Something went wrong!')
        console.error(err.message)
      }
    }

    getProduct()
  }, [])

  const handleClick = () => {
    // dispatch(addToCart(product))
    addToCart(product)
    toast('Added to cart!')
  }

  if(loading) {
    return (
      <p>Loading...</p>
    )
  }

  if(!product) return null

  return (
    <div className="flex">
      <div className="md:w-3/5 mb-8">
        <img src={product.images[activeImg]} alt="product image" className="rounded-lg" />
        <div className="flex gap-2 mt-2">
          {product.images.map((image, index) => (
            <div key={index} onClick={() => setActiveImg(index)} className="cursor-pointer">
              <img src={image} className="rounded-lg w-full" />
            </div>
          ))}

        </div>
      </div>
      <div className="md:w-2/5">
        <p className='text-gray-500 text-sm mb-3'><Link to={`/categories/${product.category}`}>{ product?.category}</Link></p>
        <h1 className="text-3xl font-bold text-center mb-8">{ product.name }</h1>
        <p className='text-blue-700 font-bold text-md mt-2 text-xl mb-6'>{product.price} kr</p>
        <p className="mb-10">{product.description}</p>
        <button onClick={handleClick} className="flex bg-blue-800 text-white my-6 py-4 px-10 hover:bg-black w-full">
          <svg className="w-6 h-6 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
          </svg>
          Add To Cart  
        </button>
        
      </div>
      <ToastContainer
          position="top-center"
          autoClose={15000}
        />
    </div>
  )
}
export default ProductDetailsPage