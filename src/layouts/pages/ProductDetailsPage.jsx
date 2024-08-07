import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom";
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
        const res = await axios.get(`https://ecommerce-api.ekerling.com/api/products/${productId}`)

        setProduct(res.data)
        setLoading(false)
        
      } catch (err) {
        setError('Something went wrong!')
        console.error(err.message)
      }
    }

    getProduct()
  }, [productId])

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
    <div className="md:flex">
      <div className="md:w-3/5 sm:w-full mb-8">
      <img src={product.images[activeImg]} alt={`Product Image of ${product.name}`} className="rounded-lg text-center inline-block" />
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-4 my-2 sm:my-4 text-center">
          {product.images.map((image, index) => (
            <div key={index} onClick={() => setActiveImg(index)} className={`cursor-pointer ${index >= 3 ? 'thumbnail hide-on-mobile' : ''}`}>
              <img src={image} className="thumbnail rounded-lg w-full hover:opacity-75" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-2/5 sm:p-4 md:p-6 place-content-center md:pl-10">
        <p className='text-gray-500 text-sm dark:text-white py-0'><Link to={`/categories/${product.category}`} className="capitalize dark:text-white">{ product?.category}</Link></p>
        <h1 className="text-3xl font-bold text-center my-6">{ product.name }</h1>
        <p className='text-gray-500 dark:text-blue-300 font-semibold text-md mt-2 text-xl mb-6'>{new Intl.NumberFormat('se-SE').format(product.price)} kr</p>
        <p className="mb-10 text-gray-500 text-sm text-left dark:text-white mx-1">{product.description}</p>
        <button onClick={handleClick} className="flex justify-center items-center bg-black hover:bg-blue-700 dark:bg-black text-white my-6 py-4 px-10 dark:hover:bg-black w-full">
          <svg className="w-6 h-6 text-white pr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
          </svg>
          Add To Cart
        </button>
        
      </div>

    </div>
  )
}
export default ProductDetailsPage