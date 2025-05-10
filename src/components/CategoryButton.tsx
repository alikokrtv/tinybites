import React from 'react';

interface CategoryButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  category, 
  isActive, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-pink-500 text-white shadow-md shadow-pink-200'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {category}
    </button>
  );
};

export default CategoryButton;