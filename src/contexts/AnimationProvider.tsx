import React, { ReactNode, useEffect } from 'react';

interface AnimationProviderProps {
  children: ReactNode;
}

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInViewport = 
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && 
          rect.bottom >= 0;
        
        if (isInViewport) {
          element.classList.add('animated');
        }
      });
    };

    // Initial check
    animateOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return <>{children}</>;
};

export default AnimationProvider;