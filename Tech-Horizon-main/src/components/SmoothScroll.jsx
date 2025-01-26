// SmoothScroll.jsx
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// No default import; use the script URL directly in useEffect
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Load ScrollSmoother from the script URL
    const script = document.createElement('script');
    script.src = 'https://assets.codepen.io/16327/ScrollSmoother.min.js';
    script.async = true;
    script.onload = () => {
      const { ScrollSmoother } = window; // Access ScrollSmoother from window object
      if (ScrollSmoother) {
        const smoother = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1.5,
          effects: true,
        });

        return () => {
          if (smoother) smoother.kill();
        };
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
