

import React, { useState, useEffect } from 'react';
import { OrderList } from '../data/OrderList';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Order = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="p-6 mx-auto max-w-7xl">
           <Link
        to="/"
        className="inline-block px-4 py-2 mb-6 text-sm font-medium text-white bg-orange-600 rounded hover:bg-orange-800"
      >
        ← Return to Home
      </Link>
      <h1 className="mb-6 text-3xl font-bold text-center">Food Order</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {OrderList.map((order) => (
          <div
            key={order.id}
            data-aos="fade-up"
            className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg"
          >
            <Link to={`/single/${order.id}`}>
              <img
                src={order.Image}
                alt={order.title}
                className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{order.title}</h3>
                <p className="text-lg text-gray-600">{order.price}</p>
                <p className="text-sm text-gray-700">{order.shortDescription}</p>
              </div>
            </Link>

            {/* Optional: Add-to-cart button */}
            {/* <button
              onClick={() => handleAddToCart(order)}
              className="flex items-center justify-center px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Add to cart
              <FaShoppingCart size={24} className="ml-2" />
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
