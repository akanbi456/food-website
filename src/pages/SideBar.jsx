
// import React from 'react';
// import { useCart } from '../content/CartContext';
// import PaymentPage from '../component/Payment';

// const SideBar = () => {
//   const { cartItems, increaseQuantity, decreaseQuantity } = useCart(0);

//   return (
//     <div className="fixed top-0 right-0 h-full p-4 overflow-y-auto bg-white border-l shadow-lg w-80">
//       <h2 className="mb-4 text-xl font-bold">Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-500">Cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id} className="pb-4 mb-6 border-b">
//               <h4 className="text-lg font-semibold">{item.title}</h4>
//               <img
//                 src={item.Image} // Adjust this if your data uses 'image' instead of 'Image'
//                 alt={item.title}
//                 className="object-cover w-20 h-20 mb-2 rounded"
//               />
//               <p className="text-sm text-gray-600">Price:${item.price * item.quantity}</p>

//               <div className="flex items-center gap-2 mt-2">
//                 <button
//                   onClick={() => decreaseQuantity(item.id)}
//                   className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
//                 >
//                   −
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => increaseQuantity(item.id)}
//                   className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600"
//                 >
//                   +
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//            <button
//             onClick={() => navigate('/payment')}
//             className="w-full py-2 mt-6 text-white bg-blue-600 rounded hover:bg-blue-700"
//           >
//             Proceed to Payment
//           </button>
        
//     </div>
//   );
// };

// export default SideBar;

import React from 'react';
import { useCart } from '../content/CartContext';
import { useNavigate } from 'react-router-dom'; // ✅ Add this

const SideBar = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart(0);
  const navigate = useNavigate(); // ✅ Define navigate

  return (
    <div className="fixed top-0 right-0 h-full p-4 overflow-y-auto bg-white border-l shadow-lg w-80">
      <h2 className="mb-4 text-xl font-bold">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="pb-4 mb-6 border-b">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <img
                src={item.Image} // make sure the property is correct: item.image or item.Image
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
        onClick={() => navigate('/payment')}
        className="w-full py-2 mt-6 text-white bg-red-600 rounded hover:bg-red-500"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default SideBar;
