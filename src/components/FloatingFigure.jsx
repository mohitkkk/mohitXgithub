import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import amongUsImage1 from '../assets/among-us1.png';
import amongUsImage2 from '../assets/among-us2.png';
import amongUsImage3 from '../assets/among-us3.png';

const FloatingFigure = ({ image, text }) => {
  const figureRef = useRef(null);

  useEffect(() => {
    // Random movement animation using GSAP
    const animateFigure = () => {
      gsap.to(figureRef.current, {
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    };
    animateFigure();
  }, []);

  return (
    <div
      ref={figureRef}
      className="floating-figure w-4 h-4 absolute group"
      style={{ top: `${Math.random() * 20 + 5}%`, left: `${Math.random() * 90 + 5}%` }}
    >
      <img src={image} alt="Among Us" className="w-full h-full opacity-75 " />
      <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-0 p-2 bg-gray-900 bg-opacity-25 text-white text-xs rounded shadow-lg">
        {text}
      </div>
    </div>
  );
};

const FloatingFigures = () => {
  return (
    <>
      <FloatingFigure image={amongUsImage1} text="Website Development Specialist" />
      <FloatingFigure image={amongUsImage2} text="Software Solutions Architect" />
      <FloatingFigure image={amongUsImage3} text="Mobile App Developer" />
      <FloatingFigure image={amongUsImage1} text="IT Consultant" />
      <FloatingFigure image={amongUsImage2} text="Backend Engineer" />
      <FloatingFigure image={amongUsImage3} text="Frontend Developer" />
    </>
  );
};

export default FloatingFigures;