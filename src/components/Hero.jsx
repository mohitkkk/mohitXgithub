import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import videoSrc from '../assets/first.mp4';
import gifSrc from '../assets/walk.gif';
import FloatingHeader from './FloatingHeader';
import featureVideo1 from '../assets/feature1.mp4';
import featureVideo2 from '../assets/feature2.mp4';
import featureVideo3 from '../assets/feature3.mp4';
import featureVideo4 from '../assets/feature4.mp4';
import Common from './Common.jsx';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const headingRef = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    console.log('Hero component mounted');
    const timer = setTimeout(() => {
      console.log('Preloader fade out started');
      gsap.to('.preloader', {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          console.log('Preloader fade out completed');
          setIsLoading(false);
        },
      });

      console.log('Animating heading');
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5 }
      );    

      const phrases = [
        'transforms ideas into reality.',
        'empowers businesses with cutting-edge solutions.',
        'delivers best-in-class development services.',
        'provides strategic IT consulting for growth.',
        'drives innovation with future-ready technology.',
        'creates scalable solutions for your success.',
        'stays ahead of trends in technology.',
        'ensures excellence in every project.',
        'bridges technology and human potential.',
        'unlocks endless possibilities for your business.',
      ];
      let phraseIndex = 0;
      let isDeleting = false;
      let charIndex = 0;

      function typePhrase() {
        const currentPhrase = phrases[phraseIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex <= currentPhrase.length) {
          typewriterRef.current.textContent = currentPhrase.substring(0, charIndex);
          charIndex++;
          setTimeout(typePhrase, typingSpeed);
        } else if (isDeleting && charIndex >= 0) {
          typewriterRef.current.textContent = currentPhrase.substring(0, charIndex);
          charIndex--;
          setTimeout(typePhrase, typingSpeed);
        } else if (!isDeleting && charIndex > currentPhrase.length) {
          isDeleting = true;
          setTimeout(typePhrase, 2000);
        } else if (isDeleting && charIndex < 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typePhrase, 500);
        }
      }

      typePhrase();
    }, 2000);

    return () => {
      console.log('Hero component unmounted, clearing timer');
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    console.log('Preloader is visible');
    return (
      <div className="preloader h-screen w-screen flex items-center justify-center bg-white">
        <img src={gifSrc} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  console.log('Hero content is now visible');
  return (
    <>
      <FloatingHeader />
      <section className="hero-section h-screen w-screen flex items-center justify-center bg-gray-900 text-white text-center relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
          src={videoSrc}
          autoPlay
          loop
          muted
          preload="auto"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-90 z-1"></div>
        <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 z-50 flex flex-col items-start justify-center">
          <h1 ref={headingRef} className="hero-heading text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 ">
            <span className="text-white">LunarEdge </span>
            <span ref={typewriterRef} className="text-blue-300"></span>
          </h1>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-purple-600 text-base md:text-lg font-semibold rounded-full hover:bg-purple-800 transition duration-300 ease-in-out flex items-center gap-2">
              Get a Demo <span className="text-xl">&rarr;</span>
            </button>
            <button className="px-6 py-3 border border-purple-600 text-base md:text-lg font-semibold rounded-full hover:bg-purple-800 hover:text-white transition duration-300 ease-in-out">
              Learn more
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-xs md:text-sm z-80">
          made by Mohit Kaushik X ChatGpt
        </div>
      </section>

      <section className="features-section py-10 bg-gray-100   text-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <video src={featureVideo1} alt="Feature One" className="w-full h-64 object-cover rounded-lg shadow-md" autoPlay loop muted />
              <h3 className="absolute top-4 right-4 bg-black bg-opacity-25 text-gray-900 text-lg font-semibold p-2 rounded">Software Solutions</h3>
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-25 text-gray-900 text-sm p-2 rounded">We offer state-of-the-art solutions to help you transform your ideas into reality with ease and efficiency.</p>
            </div>
            <div className="relative">
              <video src={featureVideo2} alt="Feature Two" className="w-full h-64 object-cover rounded-lg shadow-md" autoPlay loop muted />
              <h3 className="absolute top-4 right-4 bg-black bg-opacity-25 text-gray-900 text-lg font-semibold p-2 rounded">App Devlopment</h3>
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-25 text-gray-900 text-sm p-2 rounded">Our team is committed to delivering the highest quality service, tailored to meet your specific business needs.</p>
            </div>
            <div className="relative">
              <video src={featureVideo3} alt="Feature Three" className="w-full h-64 object-cover rounded-lg shadow-md" autoPlay loop muted />
              <h3 className="absolute top-4 right-4 bg-black bg-opacity-25 text-gray-900 text-lg font-semibold p-2 rounded">Website devlopment</h3>
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-25 text-gray-900 text-sm p-2 rounded">We provide innovative and scalable solutions that help your business stay ahead in a rapidly evolving market.</p>
            </div>
            <div className="relative">
              <video src={featureVideo4} alt="Feature Four" className="w-full h-64 object-cover rounded-lg shadow-md" autoPlay loop muted />
              <h3 className="absolute top-4 right-4 bg-black bg-opacity-25 text-gray-900 text-lg font-semibold p-2 rounded">Cyber security</h3>
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-25 text-gray-900 text-sm p-2 rounded">Our expertise ensures your business leverages the latest technology to achieve sustainable growth and success.</p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Hero;