import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import './Box.css';

// Utility function (assuming it's defined elsewhere)
import { cn } from '@/lib/utils'; 
import { Button } from '@/components/ui/button';

// BentoGrid component in plain JavaScript
const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-7 grid-rows-4 gap-4 justify-items-center',
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoCard component in plain JavaScript
const BentoCard = ({ name, background, description, index, className, cta }) => (
  <div
    className={cn(
      'child w-[100px] h-[100px] bg-gray-400 bg-opacity-50 flex justify-center items-center text-center relative transition-all duration-300 hover:backdrop-blur-md',
      className
    )}
  >
    {background}
    <span className="hidden absolute group-hover:block">Hovered Item {index + 1}</span>
    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href="#">
          {cta ? cta : 'View Details'}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </div>
);

// Main Box component with animations
const Box = () => {
  useEffect(() => {
    gsap.fromTo(
      '.child',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <BentoGrid className="min-h-screen items-center justify-center">
      {Array.from({ length: 28 }).map((_, index) => (
        <BentoCard
          key={index}
          name={`Item ${index + 1}`}
          background={<div className="bg-gray-400 w-full h-full"></div>}
          description={`Description for Item ${index + 1}`}
          index={index}
          cta="Learn More"
        />
      ))}
    </BentoGrid>
  );
};

export default Box;
