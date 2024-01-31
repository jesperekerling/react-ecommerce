import { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from "react-router-dom";

const ShowCategory = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams(); // Get category from route parameters

  useEffect(() => {
    fetch('https://js2-ecommerce-api.vercel.app/api/products')
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

        <div class="border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li class="me-2">
                  <NavLink to="/categories/laptop" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                        <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>Laptop
                        </NavLink>
                </li>
                <li class="me-2">
                  <NavLink to="/categories/mobiltelefoner">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clip-rule="evenodd"/>
                    </svg>
                    Mobiltelefoner
                  </NavLink>
                </li>
                <li class="me-2">
                  <NavLink to="/categories/dammsugare" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5c1 0 2.1.4 3 1h0V8a3 3 0 0 0-6 0v2h0a5 5 0 0 1 3-1Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2 0h-2M7 18H6a1 1 0 0 0-1 1v2m12-3h1a1 1 0 0 1 1 1v2m-3-10h1a1 1 0 0 0 1-1V8M8 11H7a1 1 0 0 1-1-1V8"/>
                    </svg>Dammsugare
                  </NavLink>
                </li>
                <li class="me-2">
                  <NavLink to="/categories/TV">
                        <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                        </svg>TV
                        </NavLink>
                </li>
            </ul>
        </div>
      <h1 className='capitalize'>{category}</h1>
      <div className='container grid grid-cols-3 mx-auto'>
        {products.map((product) => (
        <Link to={`/products/${product._id}`} className="product" key={product._id}>
        <div className='mx-3 my-8 border-white rounded-lg' id={product._id}>
            <img src={product.images[0]} alt={product.name} title={product.name} width={300} className='text-center mx-auto mb-3 hover:opacity-50' />
            <p className='font-bold text-lg'>{product.name}</p>
            <p className='text-blue-700 font-bold text-md mt-2'>{product.price} kr</p>
        </div>
    </Link>
        ))}
      </div>
    </div>
  );
};
export default ShowCategory;