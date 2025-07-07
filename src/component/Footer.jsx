import React from 'react';
import { BiRestaurant } from 'react-icons/bi';
import { FaPhone, FaTiktok } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-white bg-red-400">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

        <div>
            <div className='flex flex-row items-center gap-2 text-lg'>
             <BiRestaurant size={32} className="text-2xl text-red-500" /><h1 className='text-xl font-semibold text-gray-800'>Foodieweb</h1>
             </div>
             {/* <FaPhone scale={400} size={34} /> */}
             
          <ul className="space-y-2 text-sm">
            
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-red-500">Our Menu</h4>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>View Full Menu</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Drinks</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-red-500">Order Online</h4>
          <ul className="space-y-2 text-sm">
            <li>Delivery</li>
            <li>Takeout</li>
            <li>Catering</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-red-500 cursor-pointer">Locations</h4>
          <ul className="space-y-2 text-sm">
            <li>Find a Location</li>
            <li>Hours & Contact</li>
            <li>Book a Table</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-red-500">Support</h4>
          <ul className="space-y-2 text-sm cursor-pointer">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Allergy Info</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-red-500">Social</h4>
          <ul className="flex flex-row items-center justify-between text-sm cursor-pointer fle space-y-s2">
           <a href=""><FaInstagram size={24}/></a> 
            <a href=""><FaFacebook size={24}/></a>
            <a href=""><FaTwitter size={24}/></a>
           <a href=""> <FaTiktok size={24}/></a>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-sm text-center text-white-400">
        © {new Date().getFullYear()} Your Food Brand. All rights reserved.
        
      </div>
    </footer>
  );
};

export default Footer;