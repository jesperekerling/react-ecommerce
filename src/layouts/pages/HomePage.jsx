import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../store/features/products/productsSlice"
import { ProductList } from "../../components/ProductList"
import Categories from '../../components/Categories.jsx'
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/authContext.jsx';



function HomePage() {

  const dispatch = useDispatch()
  const { token } = useAuth();

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.productList)

  if(error) return (
    <div className="mt-4">
      <p className="text-red-600">{error}</p>
    </div>
  )

  return (
    <div className="mt-5">

      <div className="p-5 mb-5 bg-gray-100 sm:rounded-lg dark:bg-gray-800 text-black dark:text-white">
        <h1 className='m-5 text-xl font-semibold'>Hey Customer,</h1>
        {!token && (
          <p className='mb-8'>
            To purchase items, please <Link to="register" className="font-bold">register</Link> or <Link to="login" className="font-bold">log in</Link>.
          </p>
         )}
      </div>

      <h2 className="mt-10 mb-2 font-bold text-2xl">Categories</h2>
      <Categories />

      <h2 className='text-2xl font-bold mt-20 mb-10'>Products</h2>

      {
        loading 
        ? <ProductList.Skeleton />
        : <ProductList products={products} />
      }

    </div>



  )
}
export default HomePage