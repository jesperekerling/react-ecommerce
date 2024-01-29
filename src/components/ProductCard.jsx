import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {

  return (
    <Link to={`/products/${product._id}`} className="bg-white rounded-lg overflow-hidden" title={product.name}>
      <img src={product.images[0]} alt={product.name} />
      <div className="p-4 items-center justify-between">
        <p className='font-bold text-lg'>{product.name}</p>
        <p className='text-gray-500 text-sm mb-3'>{product.category}</p>
        <p className='text-blue-700 font-bold text-md mt-2'>{product.price} kr</p>
      </div>
    </Link>
  )
}