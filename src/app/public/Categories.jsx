import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://js2-ecommerce-api.vercel.app/api/products')
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
    <div className='container grid grid-cols-4 mx-auto'>
      {categories.map((category) => (
        <Link to={`/categories/${category.category}`} className="category">
          <div key={category._id} className='mx-3 my-8 border-white rounded-lg' id={category._id}>
            <img src={category.images[0]} alt={category.name} title={category.name} width={300} className='text-center mx-auto mb-3 hover:opacity-50' />
            <p className='text-lg mb-3 capitalize font-bold'>{category.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Categories;