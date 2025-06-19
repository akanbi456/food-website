
import React from 'react';
import { SectionMenu } from '../data/SectionMenu';

const Section = () => {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h1 className="pb-10 text-3xl font-bold text-left uppercase">🍽️ Tasty Bites Menu</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {SectionMenu.map((section, index) => (
          <div
            key={index}
            className="overflow-hidden transition-shadow duration-300 border rounded-lg shadow-md hover:shadow-xl"
          >
            <img
              src={section.Image}
              alt={section.name}
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="mb-2 text-xl font-semibold">{section.name}</h3>
              
              <p className="mb-4 text-gray-600">{section.desc}</p>
              <p className="text-lg font-bold">{section.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
             