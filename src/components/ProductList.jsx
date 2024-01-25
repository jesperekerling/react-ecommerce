import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import Cart from './Cart.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"


const Fetch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://js2-ecommerce-api.vercel.app/api/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className='container grid grid-cols-3 mx-auto'>
      
      {products.map((product) => (
        <Link to={`/products/${product._id}`} className="product" key={`${product._id}`} >
            <div className='mx-3 my-8 border-white rounded-lg' id={product._id}>
                <img src={product.images[0]} alt={product.name} title={product.name} width={300} className='text-center mx-auto mb-3 hover:opacity-50' />
                <p className='font-bold text-lg'>{product.name}</p>
                <p className='text-gray-500 text-sm mb-3'>{product.category}</p>
                <p className='text-blue-700 font-bold text-md mt-2'>{product.price} kr</p>
            </div>
        </Link>
      ))}
    </div>
    
  );
};
export default Fetch;



