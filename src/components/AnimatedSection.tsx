import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'zoom-in';
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation,
  delay = 0,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    section.style.opacity = '0';
    section.style.transform = 
      animation === 'fade-up' ? 'translateY(40px)' : 
      animation === 'slide-in-right' ? 'translateX(40px)' : 
      animation === 'slide-in-left' ? 'translateX(-40px)' : 
      animation === 'zoom-in' ? 'scale(0.9)' : 'none';
      
    const animateSection = () => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInViewport = 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0;
      
      if (isInViewport) {
        setTimeout(() => {
          section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          section.style.opacity = '1';
          section.style.transform = 'none';
        }, delay);
      }
    };
    
    animateSection(); // Initial check
    window.addEventListener('scroll', animateSection);
    
    return () => {
      window.removeEventListener('scroll', animateSection);
    };
  }, [animation, delay]);
  
  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;