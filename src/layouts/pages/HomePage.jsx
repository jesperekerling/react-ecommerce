import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../store/features/products/productsSlice"
import { ProductList } from "../../components/ProductList"

function HomePage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.productList)

  if(error) return (
    <div className="mt-10">
      <p className="text-red-600">{error}</p>
    </div>
  )

  return (
    <div className="container mx-auto bg-green-100 mt-10">
      {
        loading 
        ? <ProductList.Skeleton />
        : <ProductList products={products} />
      }

      <h2 className='text-2xl text-blue-500 mt-10'>
      To do:
      </h2>
      <ul>
        <li className='line-through'>Lista produkter</li>
        <li className='line-through'>Visa enksild produkt</li>
        <li className='line-through'>Navigering med react-router-dom</li>
        <li className='line-through'>Kategorier</li>
        <li>Kontaktformulär</li>
        <li>EXTRA: Fixa Dropdown på categories i menyn</li>
        <li>Check-out-sida</li>
        <li>Varukorg i Zustand</li>
        <li>Logga in</li>
        <li>Registrera</li>
        <li>ADMIN: lista ordrar</li>
        <li>Egeninlärning: Redux Toolkit</li>
      </ul>
    </div>



  )
}
export default HomePage