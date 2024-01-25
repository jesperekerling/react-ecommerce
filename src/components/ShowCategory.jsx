import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

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
      <h1 className='capitalize'>{category}</h1>
      <div className='container grid grid-cols-2 mx-auto'>
        {products.map((product) => (
        <Link to={`/products/${product._id}`} className="product">
        <div key={product._id} className='mx-3 my-8 hover:border hover:border-blue-500 border-white rounded-lg' id={product._id}>
            <img src={product.images[0]} alt={product.name} title={product.name} width={300} className='text-center mx-auto mb-3' />
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