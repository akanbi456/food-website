
// import React, { useEffect, useRef, useState } from 'react';

// const WhyUs = () => {
//   const [count, setCount] = useState(0);
//   const [countStarted, setCountStarted] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const countRef = useRef();

//   // Count-up only when in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !countStarted) {
//           startCounting();
//           setCountStarted(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (countRef.current) observer.observe(countRef.current);

//     return () => {
//       if (countRef.current) observer.unobserve(countRef.current);
//     };
//   }, [countStarted]);

//   const startCounting = () => {
//     let start = 0;
//     const end = 10000;
//     const duration = 1500;
//     const increment = Math.ceil(end / (duration / 30));

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         clearInterval(counter);
//         setCount(end);
//       } else {
//         setCount(start);
//       }
//     }, 30);
//   };

//   // Trigger animation after initial mount
//   useEffect(() => {
//     setTimeout(() => setVisible(true), 100);
//   }, []);

//   return (
//     <div className="px-6 py-16 text-gray-800 bg-white">
//       <div className={`max-w-6xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//         <h2 className="mb-6 text-4xl font-bold">Why Choose Us?</h2>
//         <p className="mb-12 text-lg text-gray-600">
//           We're passionate about delivering exceptional food experiences that keep you coming back for more.
//         </p>

//         <div className="grid gap-10 text-left md:grid-cols-3">
//           {/* Feature 1 */}
//           <div className={`p-6 bg-gray-100 rounded-lg shadow-md transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <h3 className="mb-2 text-2xl font-semibold">🍽️ Fresh Ingredients</h3>
//             <p>
//               We use only the freshest, locally sourced ingredients to prepare meals that are both healthy and flavorful.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className={`p-6 bg-gray-100 rounded-lg shadow-md transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <h3 className="mb-2 text-2xl font-semibold">🚚 Fast Delivery</h3>
//             <p>
//               Enjoy quick and reliable delivery that gets your food to you hot and ready—right on time, every time.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className={`p-6 bg-gray-100 rounded-lg shadow-md transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <h3 className="mb-2 text-2xl font-semibold">👨‍🍳 Expert Chefs</h3>
//             <p>
//               Our talented chefs bring culinary expertise to every dish, ensuring a restaurant-quality experience at home.
//             </p>
//           </div>
//         </div>

//         {/* Count Up */}
//         <div ref={countRef} className={`mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <h4 className="mb-4 text-2xl font-bold">
//             ❤️ {count.toLocaleString()}+ Happy Customers
//           </h4>
//           <p className="text-gray-600">
//             We’re trusted by food lovers across the region. Join our community and taste the difference.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyUs;
import React, { useEffect, useRef, useState } from 'react';


const WhyUs = () => {
  const [count, setCount] = useState(0);
  const [countStarted, setCountStarted] = useState(false);
  const countRef = useRef();

  const cardRefs = useRef([]); // store refs for each card

  // Animate feature cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('animate-pop');
          }
        });
      },
      { threshold: 0.4 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Count-up on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countStarted) {
          startCounting();
          setCountStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [countStarted]);

  const startCounting = () => {
    let start = 0;
    const end = 10000;
    const duration = 1500;
    const increment = Math.ceil(end / (duration / 30));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 30);
  };

  return (
    <div className="px-6 py-16 text-gray-800 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold">Why Choose Us?</h2>
        <p className="mb-12 text-lg text-gray-600">
          We're passionate about delivering exceptional food experiences that keep you coming back for more.
        </p>

        <div className="grid gap-10 text-left md:grid-cols-3">
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="p-6 transition-all bg-gray-100 rounded-lg shadow-md card"
          >
            <h3 className="mb-2 text-2xl font-semibold">🍽️ Fresh Ingredients</h3>
            <p>
              We use only the freshest, locally sourced ingredients to prepare meals that are both healthy and flavorful.
            </p>
          </div>

          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="p-6 transition-all bg-gray-100 rounded-lg shadow-md card"
          >
            <h3 className="mb-2 text-2xl font-semibold">🚚 Fast Delivery</h3>
            <p>
              Enjoy quick and reliable delivery that gets your food to you hot and ready—right on time, every time.
            </p>
          </div>

          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="p-6 transition-all bg-gray-100 rounded-lg shadow-md card"
          >
            <h3 className="mb-2 text-2xl font-semibold">👨‍🍳 Expert Chefs</h3>
            <p>
              Our talented chefs bring culinary expertise to every dish, ensuring a restaurant-quality experience at home.
            </p>
          </div>
        </div>

        <div ref={countRef} className="mt-16 transition-all">
          <h4 className="mb-4 text-2xl font-bold">
            ❤️ {count.toLocaleString()}+ Happy Customers
          </h4>
          <p className="text-gray-600">
            We’re trusted by food lovers across the region. Join our community and taste the difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
