
import React from "react";
import img1 from '../image/image1.jpg';
import { Link } from "react-router-dom";

import Carousel from "./Image";

const Header = () => {
  return (
    <div className="flex flex-col items-center h-auto p-5 bg-red-100 border md:flex-row md:items-start">
      
      <div className="px-4 py-10 text-center animate-slide-in-left md:py-16 md:text-left md:ml-10 lg:ml-40 md:px-0">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
          Elevate Your Inner Foodie with Every Bite
        </h1>
        <p className="text-lg text-gray-700 md:text-2xl">
                    Discover a world of rich flavors and handcrafted meals, made with love from the freshest ingredients. Whether you're craving comfort food or something bold and exciting, we serve dishes that satisfy every craving and leave you coming back for more.

        </p>
        <Link to='/order'>
         <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-[50px] text-base md:text-lg hover:bg-red-600 transition duration-300">
          Order Now
        </button></Link>
        
      </div>
      
        <Carousel />
      




    </div>
  );
};

export default Header;
