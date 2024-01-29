import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../store/features/shoppingCart/shoppingCartSlice"
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
    <div  className="mt-10">
      {
        loading 
        ? <ProductList.Skeleton />
        : <ProductList products={products} />
      }
    </div>
  )
}
export default HomePage