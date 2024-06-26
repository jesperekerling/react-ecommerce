import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-api.ekerling.com/api/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Reduce products to one product per category
        const uniqueCategoryProducts = data.reduce((acc, current) => {
          const x = acc.find(item => item.category === current.category);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
        setCategories(uniqueCategoryProducts);
      });
  }, []);

  return (
    <div className='container grid grid-cols-2 mx-auto md:grid-cols-4'>
      {categories.map((category) => (
        <Link to={`/categories/${category.category}`} className="category" key={category._id}>
          <div className='mx-3 my-8 border-white rounded-lg' id={category._id}>
            <img src={category.images[0]} alt={category.name} title={category.name} width={300} className='text-center mx-auto mb-3 hover:opacity-50 rounded-lg' />
            <p className='lg:text-lg text-medium mb-3 capitalize font-bold'>{category.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Categories;