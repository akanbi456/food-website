import React from 'react';
import { Link } from 'react-router-dom';
const Aboutus = () => {
  return (
    <div>
      <section className="px-6 py-16 text-gray-800 bg-white lg:px-32">
        <h1 className="mb-6 text-4xl font-bold text-center">About Us</h1>

        <p className="max-w-3xl mx-auto mb-10 text-lg text-center text-gray-600">
          At <span className="font-semibold text-red-500">FreshBites</span>, we believe food is more than just fuel — it's a connection to comfort, culture, and care. We’re here to serve meals that not only nourish, but also inspire joy with every bite.
        </p>

        <div className="max-w-5xl mx-auto space-y-8 leading-relaxed text-justify text-gray-700">
          
          {/* Our Journey */}
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-red-500">🌱 Our Journey</h2>
            <p>
              Founded in 2020 by food lovers and nutrition advocates, FreshBites started in a modest kitchen with one goal: to make healthy eating more accessible. Today, we’ve grown into a trusted name in meal delivery, serving thousands of satisfied customers across the region.
            </p>
            <p className="mt-4">
              What makes us different? Our commitment to real food, made by real people. Every dish is prepared by chefs who care deeply about flavor, freshness, and the little details that turn a good meal into a great one.
            </p>
          </div>

          {/* What We Stand For */}
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-red-500">💡 What We Stand For</h2>
            <ul className="pl-6 space-y-2 list-disc">
              <li><strong>Integrity:</strong> No shortcuts — just honest ingredients and transparent processes.</li>
              <li><strong>Quality:</strong> We don’t compromise. Every meal is tested for taste, freshness, and consistency.</li>
              <li><strong>Community:</strong> We partner with local farmers and producers to support our community and reduce waste.</li>
              <li><strong>Convenience:</strong> We know life is busy — that’s why we bring healthy meals to your door, ready to eat.</li>
            </ul>
          </div>

          {/* Our Kitchen Promise */}
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-red-500">👨‍🍳 Our Kitchen Promise</h2>
            <p>
              Each FreshBites meal is prepared in a certified, hygienic kitchen by trained chefs who love what they do. We use cold-chain packaging and sealed containers to ensure your food stays safe, hot, and fresh — just like it left our stove.
            </p>
            <p className="mt-4">
              Whether you're craving a hearty lunch or a light dinner, our rotating menu offers something for everyone — including vegetarian, vegan, high-protein, and gluten-free options.
            </p>
          </div>

          {/* What Customers Say */}
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-red-500">🌟 What Our Customers Say</h2>
            <p className="italic text-gray-600">
              “FreshBites saved me from fast food. I get healthy meals delivered every week, and they actually taste homemade!
            </p>
            <p className="mt-2 italic text-gray-600">
              “As a busy developer, I don’t have time to cook. FreshBites gives me back my time without sacrificing quality.
            </p>
          </div>

          {/* Join Us */}
          <div className="mt-12 text-center">
            <h3 className="mb-2 text-2xl font-semibold text-red-500">Ready to taste the difference?</h3>
            <p className="mb-4 text-gray-700">
              Join over <span className="font-bold text-red-500">10,000+</span> happy customers who trust FreshBites for everyday meals.
            </p>
            <Link to='/section'>
             <button className="px-6 py-3 mt-2 text-white transition bg-red-500 rounded hover:bg-red-600">
              Explore Our Menu
            </button>
            </Link>
           
          </div>

        </div>
      </section>
    </div>
  );
};

export default Aboutus;
