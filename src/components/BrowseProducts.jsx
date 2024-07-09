import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Fetch = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Step 1

  useEffect(() => {
    fetch('https://ecommerce-api.ekerling.com/api/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setIsLoading(false); // Step 3
      });
  }, []);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-2 p-5'>
      {isLoading ? ( // Step 4
        Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="mx-5 my-8 animate-pulse">
            <div className="bg-gray-300 h-64 w-full mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))
      ) : (
        products.map((product) => (
          <Link to={`/products/${product._id}`} className="product" key={product._id}>
            <div className='mx-5 my-8' id={product._id}>
              <img src={product.images[0]} alt={product.name} title={product.name} width={300} className='text-center mx-auto mb-3 hover:opacity-50' />
              <p className='font-bold text-sm md:text-base hover:text-gray-500'>{product.name}</p>
              <p className='text-gray-600 dark:text-gray-300 text-xs my-2 md:text-sm'>{product.category}</p>
              <p className='text-gray-700 dark:text-blue-300 font-semibold text-xs md:text-sm'>{new Intl.NumberFormat('se-SE').format(product.price)} kr</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Fetch;