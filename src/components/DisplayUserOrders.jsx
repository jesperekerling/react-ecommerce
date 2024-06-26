import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; 
import { useAuth } from '../contexts/authContext';

const DisplayUserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();

  // Initialize the product cache outside of the useEffect hook
  const productCache = {};

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        if (!token) {
          throw new Error('No token found in context');
        }
  
        const response = await axios.get('https://ecommerce-api.ekerling.com/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const ordersWithProducts = await Promise.all(
          response.data.map(async (order) => {
            const products = await Promise.all(
              order.products.map(async (productItem) => {
                if (productItem.product) {
                  // Check the cache before making a request
                  if (!productCache[productItem.product.$id]) {
                    const productResponse = await axios.get(`https://ecommerce-api.ekerling.com/api/products/${productItem.product.$id}`);
                    productCache[productItem.product.$id] = productResponse.data;
                  }
                  return { ...productCache[productItem.product.$id], quantity: productItem.quantity };
                }
              })
            );
            return { ...order, products };
          })
        );
        setOrders(ordersWithProducts);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [token]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {orders.map((order, index) => (
        <div key={index} className='bg-gray-50 dark:bg-gray-800 mt-10'>
          <div className='flex bg-blue-50 dark:bg-gray-800 pt-2 pb-2 px-10'>
            <h3 className='flex-1 font-bold text-xl py-5 mt-2 text-left'>Order number: {index + 1}</h3>
            <p className='px-10 pt-6 text-gray-500 text-xs font-semibold'>
              {order.createdAt ? format(new Date(order.createdAt), 'Pp') : 'Time not available'}
            </p>
            <p className='align-middle mt-2'>
              <span className='text-sm text-gray-500'>Total Price</span>
              <span className='block mt-2 font-bold'>{order.totalPrice} kr</span>
            </p>
          </div>
          {order.products && order.products.map((product, i) => (
            product && (
              <div key={i} className='flex justify-between items-center px-10 py-4'>
                {product.images && product.images[0] ? (
                  <img src={product.images[0]} alt={product.name} width={120} className='rounded-lg' />
                ) : (
                  <p>No image available</p>
                )}
                <h4 className='text-gray-500'>Product {i + 1}</h4>
                <p>{product.name ? product.name : 'No product name available'}</p>
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
  
};

export default DisplayUserOrders;