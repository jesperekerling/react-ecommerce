import { useAuth } from '../contexts/authContext'
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function DisplayUserOrders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const location = useLocation();
  const justPlacedOrder = location.state?.from === 'placeOrder';

  useEffect(() => {
    fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => setOrders(data))
    .catch(error => console.error('Error:', error));
  }, [token]);

  return (
    <div>
      
      {justPlacedOrder && <p className='bg-blue-800 text-white p-10 rounded-lg font-semibold'>Thank you for your order. Have a excellent day!</p>}
      
      {orders.map((order, index) => (
        <div key={index} className='bg-gray-50 mt-10'>
          <div className='flex bg-blue-50 pt-2 pb-2 px-10 '>
            <h3 className='flex-1 font-bold text-xl py-5 mt-2 text-left'>Order number: {index + 1}</h3>
            <p className='align-middle mt-2'>
              <span className='text-sm text-gray-500'>Total Price</span>
              <span className='block mt-2 font-bold'>{order.totalPrice} kr</span>
            </p>
          </div>
          {order.products.map((product, i) => (
            <div key={i} className='flex justify-between items-center px-10 py-4'>
              <img src={product.product.images[0]} alt={product.product.name} width={120} className='rounded-lg' />
              <h4 className='text-gray-500'>Product {i + 1}</h4>
              <p>{product.product.name}</p>
              <p className='text-gray-500'>{product.product.price} kr</p>
              <p className='text-gray-500'>Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DisplayUserOrders;