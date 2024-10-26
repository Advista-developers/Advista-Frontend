import React, { useState } from 'react';
import AccountSwitcher from './AccountSwitcher.jsx';

import { useAuth } from '../../API/auth.jsx';
const Hero = () => {

    const {user} =useAuth();
    console.log("User",user);
    
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

  return (
    <div className="p-5 font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center p-3 bg-gray-50 border border-gray-300">
        <div className="flex items-center space-x-5">
          <div className="font-bold text-red-600 border border-red-600 p-2">Advista.in</div>
          <div className="text-lg">Welcome, Kirtan Pawar</div>
        </div>

        <div
          className="flex items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="bg-gray-100 border border-gray-300 px-5 py-2 rounded hover:bg-gray-200 transition-colors ease-in-out">
            Switch Ad Account
          </button>
          <img
            src="path_to_profile_image.jpg"
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover ml-3 transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          {isDropdownVisible && (
            <AccountSwitcher closeDropdown={handleMouseLeave} />
          )}
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="flex my-3 py-3 border-b border-gray-300 space-x-12">
        <a href="#" className="text-black font-bold px-3 py-2 hover:bg-gray-200 rounded transition-transform transform hover:-translate-y-1">
          About
        </a>
        <a href="#" className="text-black font-bold px-3 py-2 hover:bg-gray-200 rounded transition-transform transform hover:-translate-y-1">
          Meta Dashboard
        </a>
        <a href="#" className="text-black font-bold px-3 py-2 hover:bg-gray-200 rounded transition-transform transform hover:-translate-y-1">
          Targeting Insights
        </a>
        <a href="#" className="text-black font-bold px-3 py-2 hover:bg-gray-200 rounded transition-transform transform hover:-translate-y-1">
          Creative Insights
        </a>
        <a href="#" className="text-black font-bold px-3 py-2 hover:bg-gray-200 rounded transition-transform transform hover:-translate-y-1">
          Contact Us
        </a>
      </nav>

      {/* Main Section */}
      <div className="flex justify-between items-center p-3 border border-gray-300 mt-3 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
        <button className="bg-lime-600 text-white px-6 py-3 rounded hover:bg-lime-700 transition-transform transform hover:scale-105">
          + New Campaign
        </button>
        <input
          type="text"
          placeholder="Last Date Modified"
          className="border border-gray-300 p-2 rounded"
        />
      </div>

      {/* Campaign Content */}
      <div className="border border-gray-300 mt-5 p-5 min-h-[300px] transform transition-transform hover:scale-105 hover:shadow-lg">
        {/* Add content here for the campaigns */}
      </div>
    </div>
  );
};

export default Hero;
