// import React from 'react'
// import { useCart } from '../content/CartContext';


// const AdminPage = () => {
//   const { cartItems } = useCart();

//   return (
//     <div className="max-w-5xl p-6 mx-auto mt-10 bg-white rounded shadow-lg">
//       <h1 className="mb-6 text-3xl font-bold text-center text-red-600">Admin Cart Overview</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-600">No items have been added to the cart yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex gap-4 p-4 border rounded shadow">
//               <img
//                 src={item.Image}
//                 alt={item.title}
//                 className="object-cover w-24 h-24 rounded"
//               />
//               <div>
//                 <h2 className="text-xl font-semibold">{item.title}</h2>
//                 <p className="text-gray-600">Quantity: {item.quantity}</p>
//                 <p className="font-medium text-gray-700">
//                   Total: ${item.quantity * item.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
  
// }

// export default AdminPage