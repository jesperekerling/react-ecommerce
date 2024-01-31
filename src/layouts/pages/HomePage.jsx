import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../store/features/products/productsSlice"
import { ProductList } from "../../components/ProductList"
import Categories from '../../app/public/Categories.jsx'
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
    <div className="container mx-auto mt-4">


      <div className="p-5 bg-gray-100 rounded">
        <h1 className='m-10 text-3xl'>Hey Customer!</h1>
        {!token && (
          <p className='mb-16'>
            If you want to purchase. Please <Link to="register" className="font-bold">register</Link> or <Link to="login" className="font-bold">log in</Link>.
          </p>
         )}
      </div>

        <h2 className="mt-8 mb-2 font-bold text-2xl">Categories</h2>
        <Categories />

        <h2 className='text-2xl font-bold mt-20 mb-10'>Products</h2>

      {
        loading 
        ? <ProductList.Skeleton />
        : <ProductList products={products} />
      }

      <h2 className='text-2xl text-blue-500 mt-10'>To do:</h2>
      <ul>
        <li>Skicka ORDER till API</li>
        <li>Roligare readme-fil</li>
        <li className='line-through'>Gör logged-in så ingen kan se den som inte är inloggad.</li>
        <li className='line-through'>ADMIN: lista ordrar</li>
        <li className='line-through'>Logga in - Komma till en inloggad-sida.</li>
        <li className='line-through'>Registrera - Komma till en inloggad-sida.</li>
        <li className='line-through'>Lista produkter</li>
        <li className='line-through'>Visa enksild produkt</li>
        <li className='line-through'>Navigering med react-router-dom</li>
        <li className='line-through'>Kategorier</li>
        <li className='line-through'>Kontaktformulär</li>
        <li className='line-through'>Check-out-sida</li>
        <li className='line-through'>Logga in</li>
        <li className='line-through'>Registrera</li>
        <li className='line-through'>EXTRA: Fixa Dropdown på categories i menyn</li>
      </ul>
    </div>



  )
}
export default HomePage