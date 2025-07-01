// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { OrderList } from '../data/OrderList'
// import { useCart } from '../content/CartContext'
// import SideBar from '../pages/SideBar'

// const OrderDetail = () => {
//   const [data, setData] = useState({});
//   const{each} = useParams();
//   const { addToCart } = useCart();

// useEffect(()=>{
//   const order = OrderList.find(item=> item.id===parseInt(each));
//   if(order){
//     setData(order);
//   }
// }, [each]);
// const handleAddToCart = () =>{
//   if(data && data.id){
//     addToCart(data);
//   }
  
// }
//   return (
//       <div className="max-w-3xl p-6 mx-auto bg-white rounded shadow">
        
//   {data.Image && (
//     <img
//       src={data.Image}
//       alt={data.title}
//       className="object-cover w-full h-64 mb-4 rounded"
//     />
//   )}
//   <h2 className="mb-2 text-2xl font-bold">{data.title}</h2>
//   <p className="mb-2 text-lg text-gray-600">{data.price}</p>
//   <p className="mb-4 text-gray-700">{data.description}</p>

//   <button onClick={handleAddToCart} className="items-center px-4 py-2 text-center text-white bg-red-500 rounded hover:bg-red-600">
//     {data.button || 'Add to cart'}
//   </button>
//  <SideBar/>
// </div>





//   )
// }

// export default OrderDetail


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { OrderList } from '../data/OrderList';
import { useCart } from '../content/CartContext';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

const OrderDetail = () => {
  const [data, setData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // sidebar toggle
  const { each } = useParams();
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const order = OrderList.find((item) => item.id === parseInt(each));
    if (order) {
      setData(order);
    }
  }, [each]);

  const handleAddToCart = () => {
    if (data && data.id) {
      addToCart(data);
    }
  };

  return (
    <div className="relative">
      {/* Main Order Detail Content */}
      <div className="max-w-3xl p-6 mx-auto mt-4 bg-white rounded shadow">
        {data.Image && (
          <img
            src={data.Image}
            alt={data.title}
            className="object-cover w-full h-64 mb-4 rounded"
          />
        )}
        <h2 className="mb-2 text-2xl font-bold">{data.title}</h2>
        <p className="mb-2 text-lg text-gray-600">${data.price}</p>
        <p className="mb-4 text-gray-700">{data.description}</p>

        <button
          onClick={handleAddToCart}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          {data.button || 'Add to cart'}
        </button>
      </div>

      {/* Toggle Button (Mobile only) */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed z-50 p-3 text-white bg-blue-600 rounded-full bottom-4 right-4 md:hidden"
      >
        <FaShoppingCart size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white border-l shadow-lg p-4 overflow-y-auto z-40 transition-transform duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Cart</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 rounded-full md:hidden hover:bg-gray-200"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="pb-4 mb-6 border-b">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <img
                  src={item.Image}
                  alt={item.title}
                  className="object-cover w-20 h-20 mb-2 rounded"
                />
                <p className="text-sm text-gray-600">
                  Price: ${item.price * item.quantity}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => {
            setIsSidebarOpen(false);
            navigate('/payment');
          }}
          className="w-full py-2 mt-6 text-white bg-red-600 rounded hover:bg-red-500"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
