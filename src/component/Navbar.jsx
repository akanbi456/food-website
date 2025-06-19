import React, { useState } from 'react';
import { BiRestaurant, BiMenu } from 'react-icons/bi';
import { NavData } from '../data/NavData';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <nav className='flex items-center justify-between px-6 py-4'>
        <div className='flex flex-row items-center gap-2 text-lg'>
          <BiRestaurant size={32} className="text-2xl text-red-500" />
          <h1 className='text-xl font-semibold text-gray-800'>Foodieweb</h1>
        </div>

        <ul className="items-center hidden gap-6 md:flex">
          {NavData.map((data, index) => (
            <li key={index} className='transition cursor-pointer hover:text-red-500'>
              <NavLink to={data.Link}>{data.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className='z-50 md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          <BiMenu size={24} className='text-3xl text-gray-800 cursor-pointer' />
        </div>
      </nav>

      {menuOpen && (
        <ul className='absolute left-0 z-40 flex flex-col items-start w-full gap-4 px-6 py-4 bg-white shadow-md top-16 md:hidden'>
          {NavData.map((data, index) => (
            <li key={index} className='transition cursor-pointer hover:text-red-500'>
              <NavLink 
                to={data.Link} 
                onClick={() => setMenuOpen(false)} 
              >
                {data.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
