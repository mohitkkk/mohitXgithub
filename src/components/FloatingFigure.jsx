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
        x: 'random(-20, 20)',
        y: 'random(-20, 20)',
        duration: 3,
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
      className="floating-figure w-16 h-16 absolute group"
      style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` }}
    >
      <img src={image} alt="Among Us" className="w-full h-full" />
      <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs rounded shadow-lg">
        {text}
      </div>
    </div>
  );
};

const FloatingFigures = () => {
  return (
    <>
      <FloatingFigure image={amongUsImage1} text="Figure 1: Security Expert" />
      <FloatingFigure image={amongUsImage2} text="Figure 2: DevOps Specialist" />
      <FloatingFigure image={amongUsImage3} text="Figure 3: Cloud Architect" />
    </>
  );
};

export default FloatingFigures;