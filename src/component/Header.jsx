
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo
          voluptate dolores molestiae eveniet corrupti? Itaque perspiciatis
          laborum incidunt recusandae nam maxime exercitationem, molestiae,
          dicta asperiores officia quas ipsa voluptatibus!
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
