import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../store/features/products/productsSlice"
import { ProductList } from "../../components/ProductList"
import Categories from '../../app/public/Categories.jsx'


function HomePage() {

  const dispatch = useDispatch()

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
    <div className="container mx-auto bg-green-100 mt-4">
        <h1 className='m-10 text-3xl'>Hey Customer!</h1>
        <p className='mb-16'>All new customers get 10% off first order with <strong>FC10 Code</strong>.</p>


        <Categories />

        <h2 className='text-2xl font-bold mt-20 mb-10'>Products</h2>

      {
        loading 
        ? <ProductList.Skeleton />
        : <ProductList products={products} />
      }

      <h2 className='text-2xl text-blue-500 mt-10'>To do:</h2>
      <ul>
        <li className='line-through'>Lista produkter</li>
        <li className='line-through'>Visa enksild produkt</li>
        <li className='line-through'>Navigering med react-router-dom</li>
        <li className='line-through'>Kategorier</li>
        <li className='line-through'>Kontaktformulär</li>
        <li className='line-through'>Check-out-sida</li>
        <li className='line-through'>Logga in</li>
        <li className='line-through'>Registrera</li>
        <li>Logga in - Komma till en inloggad-sida.</li>
        <li>Registrera - Komma till en inloggad-sida.</li>
        <li>EXTRA: Fixa Dropdown på categories i menyn</li>
        <li>Skicka ORDER till API</li>
        <li>ADMIN: lista ordrar</li>
      </ul>
    </div>



  )
}
export default HomePage