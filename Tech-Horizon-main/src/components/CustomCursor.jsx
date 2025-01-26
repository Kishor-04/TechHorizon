// src/components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';
import defaultCursorImage from '../assets/rocket.png'; // Default custom cursor image

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOut = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`fixed w-10 h-10 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out ${isVisible ? 'block' : 'hidden'}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <img src={defaultCursorImage} alt="Custom Cursor" className="w-full h-full" />
    </div>
  );
};

export default CustomCursor;
