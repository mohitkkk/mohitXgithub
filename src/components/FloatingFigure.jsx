import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import amongUsImage1 from '../assets/among-us1.png';
import amongUsImage2 from '../assets/among-us2.png';
import amongUsImage3 from '../assets/among-us3.png';

// Registering the Draggable plugin with GSAP
gsap.registerPlugin(Draggable);

const FloatingFigure = ({ image, text, figureRefs }) => {
  const figureRef = useRef(null);

  useEffect(() => {
    // Function to create random movement animation using GSAP
    const animateFigure = () => {
      gsap.to(figureRef.current, {
        x: 'random(-50, 50)', // Random movement along the x-axis
        y: 'random(-50, 50)', // Random movement along the y-axis
        duration: 5, // Duration of each animation cycle
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverses the animation back and forth
        ease: 'power1.inOut', // Easing function for smoother motion
        onUpdate: () => {
          handleCollision(); // Check for collisions on each update
        },
      });
    };

    // Function to handle collision detection and repulsion between figures
    const handleCollision = () => {
      figureRefs.forEach(ref => {
        if (ref.current && ref.current !== figureRef.current) {
          const rect1 = figureRef.current.getBoundingClientRect(); // Get bounding box of the current figure
          const rect2 = ref.current.getBoundingClientRect(); // Get bounding box of the other figure

          // Check if the figures are within 5 pixels of each other
          if (
            Math.abs(rect1.x - rect2.x) < 5 &&
            Math.abs(rect1.y - rect2.y) < 5
          ) {
            const dx = rect1.x - rect2.x; // Difference in x-coordinates
            const dy = rect1.y - rect2.y; // Difference in y-coordinates
            const distance = Math.sqrt(dx * dx + dy * dy); // Calculate the distance between figures
            if (distance < 5) {
              const angle = Math.atan2(dy, dx); // Calculate the angle between the figures
              const repelDistance = 10; // Distance to move figures apart

              // Move the current figure away from the collision
              gsap.to(figureRef.current, {
                x: "+=" + repelDistance * Math.cos(angle),
                y: "+=" + repelDistance * Math.sin(angle),
                duration: 0.5, // Duration of the repulsion movement
              });

              // Move the other figure away from the collision
              gsap.to(ref.current, {
                x: "-=" + repelDistance * Math.cos(angle),
                y: "-=" + repelDistance * Math.sin(angle),
                duration: 0.5, // Duration of the repulsion movement
              });
            }
          }
        }
      });
    };

    // Start the animation when the component mounts
    animateFigure();
  }, [figureRefs]);

  return (
    <div
      ref={figureRef}
      className="floating-figure w-4 h-4 absolute group"
      style={{
        top: `${Math.random() * 20 + 5}%`,
        left: `${Math.random() * 90 + 5}%`,
      }}
    >
      <img
        src={image}
        alt="Among Us"
        className="w-full h-full opacity-75"
      />
      <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-0 p-2 bg-gray-900 bg-opacity-25 text-white text-xs rounded shadow-lg">
        {text} {/* Display the text when hovered */}
      </div>
    </div>
  );
};

const FloatingFigures = () => {
  // Create an array of refs for each floating figure
  const figureRefs = Array.from({ length: 12 }, () => useRef(null));

  return (
    <>
      {figureRefs.map((ref, index) => {
        // Define the images and texts to be used for the figures
        const images = [amongUsImage1, amongUsImage2, amongUsImage3];
        const texts = [
          "Website Development Specialist",
          "Software Solutions Architect",
          "Mobile App Developer",
          "IT Consultant",
          "Backend Engineer",
          "Frontend Developer",
          "DevOps Engineer",
          "Data Scientist",
          "UI/UX Designer",
          "Project Manager",
          "Quality Assurance Specialist",
          "Cloud Architect",
        ];
        return (
          <FloatingFigure
            key={index}
            image={images[index % images.length]} // Cycle through images
            text={texts[index]} // Assign text for each figure
            figureRefs={figureRefs} // Pass all figure refs for collision detection
            ref={ref} // Reference for the current figure
          />
        );
      })}
    </>
  );
};

export default FloatingFigures;