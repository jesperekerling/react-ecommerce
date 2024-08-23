import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { format } from 'date-fns';

const DisplayUserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://ecommerce-api.ekerling.com/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Log response status and headers
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if the response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }

        const data = await response.json();
        const ordersWithProducts = await Promise.all(
          data.map(async (order) => {
            const products = await Promise.all(
              order.products.map(async (productId) => {
                const productResponse = await fetch(`/api/products/${productId}`);
                if (!productResponse.ok) {
                  return null;
                }
                return await productResponse.json();
              })
            );
            return { ...order, products: products.filter(product => product !== null) };
          })
        );
        console.log('Orders with products:', ordersWithProducts); // Log the orders with products
        setOrders(ordersWithProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
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
          {order.products && order.products.length > 0 ? (
            order.products.map((product, i) => {
              console.log('Product:', product);
              return (
                product && (
                  <div key={i} className='flex justify-between items-center px-10 py-4'>
                    {product.images && product.images[0] ? (
                      <img src={product.images[0]} alt={product.name} width={120} className='rounded-lg' />
                    ) : (
                      <p>No image available</p>
                    )}
                    <h4 className='text-gray-500'>Product {i + 1}</h4>
                    <p>{product.name ? product.name : 'No product name available'}</p>
                    <p>{product.price ? `${product.price} kr` : 'No price available'}</p>
                  </div>
                )
              );
            })
          ) : (
            <p>No products available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayUserOrders;