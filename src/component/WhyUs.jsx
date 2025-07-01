
// import React from 'react';

// const WhyUs = () => {
//   return (
//     <div className="px-6 py-16 text-gray-800 bg-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="mb-6 text-4xl font-bold">Why Choose Us?</h2>
//         <p className="mb-12 text-lg text-gray-600">
//           We're passionate about delivering exceptional food experiences that keep you coming back for more.
//         </p>

//         <div className="grid gap-10 text-left md:grid-cols-3">
//           {/* Feature 1 */}
//           <div className="p-6 transition bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
//             <h3 className="mb-2 text-2xl font-semibold">🍽️ Fresh Ingredients</h3>
//             <p>
//               We use only the freshest, locally sourced ingredients to prepare meals that are both healthy and flavorful.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="p-6 transition bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
//             <h3 className="mb-2 text-2xl font-semibold">🚚 Fast Delivery</h3>
//             <p>
//               Enjoy quick and reliable delivery that gets your food to you hot and ready—right on time, every time.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="p-6 transition bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
//             <h3 className="mb-2 text-2xl font-semibold">👨‍🍳 Expert Chefs</h3>
//             <p>
//               Our talented chefs bring culinary expertise to every dish, ensuring a restaurant-quality experience at home.
//             </p>
//           </div>
//         </div>

//         <div className="mt-16">
//           <h4 className="mb-4 text-2xl font-bold">❤️ 10,000+ Happy Customers</h4>
//           <p className="text-gray-600">
//             We’re trusted by food lovers across the region. Join our community and taste the difference.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyUs;

import React, { useEffect, useState } from 'react';

const WhyUs = () => {
  const [visible, setVisible] = useState(false);

  // Trigger animation after mount
  useEffect(() => {
    setTimeout(() => setVisible(true), 100); // Small delay for smoother animation
  }, []);

  return (
    <div className="px-6 py-16 text-gray-800 bg-white">
      <div className={`max-w-6xl mx-auto text-center transition-opacity duration-500 ${visible ? 'pop-in' : 'opacity-0'}`}>
        <h2 className="mb-6 text-4xl font-bold">Why Choose Us?</h2>
        <p className="mb-12 text-lg text-gray-600">
          We're passionate about delivering exceptional food experiences that keep you coming back for more.
        </p>

        <div className="grid gap-10 text-left md:grid-cols-3">
          {/* Feature 1 */}
          <div className={`p-6 bg-gray-100 rounded-lg shadow-md transition hover:shadow-lg ${visible ? 'pop-in' : 'opacity-0'}`}>
            <h3 className="mb-2 text-2xl font-semibold">🍽️ Fresh Ingredients</h3>
            <p>
              We use only the freshest, locally sourced ingredients to prepare meals that are both healthy and flavorful.
            </p>
          </div>

          {/* Feature 2 */}
          <div className={`p-6 bg-gray-100 rounded-lg shadow-md transition hover:shadow-lg delay-150 ${visible ? 'pop-in' : 'opacity-0'}`}>
            <h3 className="mb-2 text-2xl font-semibold">🚚 Fast Delivery</h3>
            <p>
              Enjoy quick and reliable delivery that gets your food to you hot and ready—right on time, every time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className={`p-6 bg-gray-100 rounded-lg shadow-md transition hover:shadow-lg delay-300 ${visible ? 'pop-in' : 'opacity-0'}`}>
            <h3 className="mb-2 text-2xl font-semibold">👨‍🍳 Expert Chefs</h3>
            <p>
              Our talented chefs bring culinary expertise to every dish, ensuring a restaurant-quality experience at home.
            </p>
          </div>
        </div>

        <div className={`mt-16 ${visible ? 'pop-in' : 'opacity-0'}`}>
          <h4 className="mb-4 text-2xl font-bold">❤️ 10,000+ Happy Customers</h4>
          <p className="text-gray-600">
            We’re trusted by food lovers across the region. Join our community and taste the difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
