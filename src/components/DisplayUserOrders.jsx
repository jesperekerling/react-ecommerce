import { useAuth } from '../contexts/authContext'
import React, { useEffect, useState } from 'react';

function DisplayUserOrders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

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
      {orders.map((order, index) => (
        <div key={index}>
          <h3 className='font-bold text-xl p-5 text-left'>Order number: {index + 1}</h3>
          <p>Total Price: {order.totalPrice} kr</p>
          {order.products.map((product, i) => (
            <div key={i} className='flex justify-between items-center p-4'>
              <img src={product.product.images[0]} alt={product.product.name} width={120} />
              <h4>Product {i + 1}</h4>
              <p>Name: {product.product.name}</p>
              <p>Price: {product.product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DisplayUserOrders;