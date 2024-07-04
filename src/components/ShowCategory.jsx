import { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from "react-router-dom";

const ShowCategory = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams(); // Get category from route parameters

  useEffect(() => {
    fetch('https://ecommerce-api.ekerling.com/api/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Filter products based on category
        const filteredProducts = data.filter(product => product.category === category);
        setProducts(filteredProducts);
      });
  }, [category]);

  return (
    <div>

        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:pl-24 justify-center">
                <li className="me-2">
                  <NavLink to="/categories/laptop" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clipRule="evenodd"/>
                    <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z" clipRule="evenodd"/>
                  </svg>
                    Laptop
                  </NavLink>
                </li>
                <li className="me-2">
                  <NavLink to="/categories/mobiltelefoner" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd"/>
                    </svg>Mobiltelefoner
                  </NavLink>
                </li>
                <li className="me-2">
                  <NavLink to="/categories/dammsugare" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5c1 0 2.1.4 3 1h0V8a3 3 0 0 0-6 0v2h0a5 5 0 0 1 3-1Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2 0h-2M7 18H6a1 1 0 0 0-1 1v2m12-3h1a1 1 0 0 1 1 1v2m-3-10h1a1 1 0 0 0 1-1V8M8 11H7a1 1 0 0 1-1-1V8"/>
                    </svg>Dammsugare
                  </NavLink>
                </li>
                <li className="me-2">
                  <NavLink to="/categories/TV" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6v12m8-12v12l-8-6 8-6Z"/>
                  </svg>TV
                  </NavLink>
                </li>
            </ul>
        </div>
      <h1 className='capitalize my-10'>{category}</h1>
      <div className='container grid grid-cols-2 md:grid-cols-3 mx-auto'>
        {products.map((product) => (
        <Link to={`/products/${product._id}`} className="product" key={product._id}>
        <div className='mx-3 my-8 border-white rounded-lg' id={product._id}>
            <img src={product.images[0]} alt={product.name} title={product.name} width={300} height={225} className='text-center mx-auto mb-3 hover:opacity-50' />
            <p className='font-bold lg:text-lg md:text-medium text-sm'>{product.name}</p>
            <p className='text-blue-700 dark:text-blue-200 font-bold text-md mt-2'>{product.price} kr</p>
        </div>
    </Link>
        ))}
      </div>
    </div>
  );
};
export default ShowCategory;