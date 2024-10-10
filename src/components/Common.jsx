import React from 'react';
import FloatingHeader from './FloatingHeader';
import FloatingFigures from './FloatingFigure.jsx';
import Background from '../assets/background.png';

const Common = () => {
  return (
    <>
      <FloatingHeader />
      <section
        className="under-development h-screen w-screen flex flex-col items-center justify-start pt-36 bg-gray-950 text-gray-800 relative"
        style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <FloatingFigures />
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">The Page Is Currently</h1>
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Down For Maintenance</h1>
          <p className="text-lg md:text-2xl mb-8">We are working hard to bring you new features. Stay tuned!</p>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Go Back Home
            </span>
            <span className="relative invisible">Go Back Home</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Common;