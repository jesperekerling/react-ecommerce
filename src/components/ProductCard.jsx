import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {

  return (
    <Link to={`/details/${product._id}`} className="bg-white rounded-lg overflow-hidden">
      <img src={product.images[0]} alt="product image" />
      <div className="p-4 flex items-center justify-between">
        <p className="font-semibold truncate">{product.name}</p>
        <p className="text-red-600 font-semibold">{product.price}:-</p>
      </div>
    </Link>
  )
}