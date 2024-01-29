import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BiSolidCartAdd } from "react-icons/bi";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../store/features/shoppingCart/shoppingCartSlice";
import { useCart } from "../../contexts/cartContext";


function ProductDetailsPage() {

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
  }

  if(loading) {
    return (
      <p>Loading...</p>
    )
  }

  if(!product) return null

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10">
      <div className="lg:max-w-[50%] mb-8">
        <img src={product.images[activeImg]} alt="product image" className="rounded-lg" />
        <div className="flex gap-2 mt-2">
          {product.images.map((image, index) => (
            <div key={index} onClick={() => setActiveImg(index)} className="cursor-pointer">
              <img src={image} className="rounded-lg"/>
            </div>
          ))}

        </div>
      </div>
      <div className="lg:max-w-[50%] text-white">
        <h1 className="text-3xl font-bold text-center mb-8">{ product.name }</h1>
        <p>{product.description}</p>
        <div className="flex items-center justify-between mt-12">
          <p>Price: {product.price}</p>
          <button onClick={handleClick} className="flex items-center gap-4 bg-slate-800 px-10 py-2 rounded-lg hover:bg-slate-900 transition-colors">
            Add To Cart 
            <BiSolidCartAdd className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetailsPage