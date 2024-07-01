import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {

  return (
    <Link to={`/products/${product._id}`} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:opacity-70" title={product.name}>
      <img src={product.images[0]} alt={product.name} />
      <div className="p-4 items-center justify-between">
        <p className='text-black dark:text-white font-bold text-sm md:text-lg'>{product.name}</p>
        <p className='text-gray-500 dark:text-gray-200 text-sm mb-3'>{product.category}</p>
        <p className='text-blue-700 dark:text-blue-300 font-bold text-sm sm:text-md mt-1'>{product.price} kr</p>
      </div>
    </Link>
  )
}