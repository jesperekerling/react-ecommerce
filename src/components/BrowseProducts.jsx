import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"


const Fetch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://ecommerce-api.ekerling.com/api/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-10'>
      
      {products.map((product) => (
        <Link to={`/products/${product._id}`} className="product" key={`${product._id}`} >
            <div className='mx-5 my-8' id={product._id}>
                <img src={product.images[0]} alt={product.name} title={product.name} width={300} className='text-center mx-auto mb-3 hover:opacity-50' />
                <div className='mx-10'>
                <p className='font-bold text-sm md:text-base'>{product.name}</p>
                <p className='text-gray-600 dark:text-gray-300 text-xs my-2 md:text-sm'>{product.category}</p>
                <p className='text-gray-700 dark:text-blue-300 font-semibold text-xs md:text-sm'>{new Intl.NumberFormat('se-SE').format(product.price)} kr</p>
                </div>
            </div>
        </Link>
      ))}
    </div>
    
  );
};
export default Fetch;



