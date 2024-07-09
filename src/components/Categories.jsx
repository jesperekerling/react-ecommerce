import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Step 1

  useEffect(() => {
    fetch('https://ecommerce-api.ekerling.com/api/products')
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategoryProducts = data.reduce((acc, current) => {
          const x = acc.find(item => item.category === current.category);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
        setCategories(uniqueCategoryProducts);
        setIsLoading(false); // Step 3
      });
  }, []);

  return (
    <div className='container grid grid-cols-2 mx-auto md:grid-cols-4'>
      {isLoading ? ( // Step 4
        Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="mx-3 my-8 border-white rounded-lg">
            <div className="animate-pulse bg-gray-400/50 h-64 w-full mb-3 rounded-lg"></div>
            <div className="animate-pulse h-6 bg-gray-400/50 rounded"></div>
          </div>
        ))
      ) : (
        categories.map((category) => (
          <Link to={`/categories/${category.category}`} className="category" key={category._id}>
            <div className='mx-3 my-8 border-white rounded-lg hover:opacity-50' id={category._id}>
              <img src={category.images[0]} alt={category.name} title={category.name} width={300} className='text-center mx-auto mb-3 rounded-lg' />
              <p className='lg:text-lg text-medium mb-3 capitalize font-semibold'>{category.category}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Categories;