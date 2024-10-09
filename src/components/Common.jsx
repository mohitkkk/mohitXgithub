import React, { useState, useEffect } from 'react';
import FloatingHeader from './FloatingHeader';
import FloatingFigures from './FloatingFigure.jsx';
import Background from '../assets/background.png';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaSun, FaMoon } from 'react-icons/fa';

const Common = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(userPrefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <FloatingHeader />
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-30 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      <section
        className={`under-development h-screen w-screen flex flex-col items-center justify-start pt-36 relative overflow-hidden ${isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-100 text-gray-900'}`}
        style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: {
                color: isDarkMode ? "#000000" : "#ffffff",
                opacity: 0,
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "repulse" },
                  resize: true,
                },
                modes: {
                  push: { particles_nb: 4 },
                  repulse: { distance: 200, duration: 0.4 },
                },
              },
              particles: {
                color: { value: isDarkMode ? "#ffffff" : "#000000" },
                links: {
                  color: isDarkMode ? "#ffffff" : "#000000",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: { enable: true },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: { density: { enable: true, area: 800 }, value: 80 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { random: true, value: 5 },
              },
              detectRetina: true,
            }}
            className="absolute w-full h-full"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-1/2 z-10">
          <FloatingFigures />
        </div>
        
        <div className="text-center z-20">
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
    </div>
  );
};

export default Common;