import React from 'react';
import logoSrc from '../assets/Logo.png';

const FloatingHeader = ({ isLoading }) => {
  // Only display the header when the preloader is not active
  if (isLoading) {
    return null; // Ensure header is hidden during preloader
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white flex items-center justify-between p-4 shadow-md z-100">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logoSrc} alt="Logo" className="w-12 h-12" />
      </div>

      {/* Navigation Menu in the middle */}
      <nav className="hidden md:flex gap-8 text-gray-800 font-semibold">
        <a href="#" className="hover:text-blue-500 transition duration-300">Home</a>
        <a href="#" className="hover:text-blue-500 transition duration-300">Services</a>
        <a href="#" className="hover:text-blue-500 transition duration-300">About</a>
      </nav>

      {/* Contact Us button on the right */}
      <div className="flex items-center">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default FloatingHeader;