import React from 'react';
import { ButtonProps } from '@/interface/interface';


const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type,
  size="md",
  className,
  disabled = false,
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={
        `font-bold py-2 px-4 rounded-xl disabled:opacity-50 
        ${className}
        ${type==="primary" && 'bg-primary-500 hover:bg-primary-700 focus:bg-primary-800 text-white disabled:hover:bg-primary-500'}
        ${type==="secondary" && 'bg-white text-primary-500'}
        ${size==="lg" && 'w-64 py-3 text-lg'}
        ${size==="md" && 'w-48'}
        ${size==="sm" && 'w-28'}
        `}
    >
      {title}
    </button>
  );
};

export default Button;
