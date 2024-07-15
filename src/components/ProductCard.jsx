import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {

  return (
    <Link to={`/products/${product._id}`} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:opacity-70" title={product.name}>
      <img src={product.images[0]} alt={product.name} />
      <div className="p-4 items-center justify-between">
        <p className='font-bold text-sm md:text-base hover:text-gray-500'>{product.name}</p>
        <p className='text-gray-600 dark:text-gray-300 text-xs my-2 md:text-sm'>{product.category}</p>
        <p className='text-gray-700 dark:text-blue-300 font-semibold text-xs md:text-sm'>
          {new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(product.price)}
        </p>
      </div>
    </Link>
  )
}