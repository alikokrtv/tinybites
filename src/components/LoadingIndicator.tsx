import React, { useEffect, useState } from 'react';

interface LoadingIndicatorProps {
  isVisible: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isVisible }) => {
  const [fadeOut, setFadeOut] = useState(false);
  
  // Handle fade animation
  useEffect(() => {
    if (!isVisible) {
      setFadeOut(true);
      const timer = setTimeout(() => setFadeOut(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  if (!isVisible && !fadeOut) {
    return null;
  }
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${!isVisible && fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Simple semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Minimal loading indicator */}
      <div className="relative bg-white p-4 rounded-md shadow-md w-16 h-16 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-primary-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
