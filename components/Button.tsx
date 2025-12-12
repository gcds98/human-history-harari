import React from 'react';
import { LINKS } from '../constants';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'sticky';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', className = '', fullWidth = false }) => {
  const baseStyles = "font-bold rounded shadow-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center text-center cursor-pointer no-underline";
  
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white text-lg md:text-2xl py-4 px-8 border-b-4 border-orange-800",
    secondary: "bg-green-600 hover:bg-green-700 text-white text-xl md:text-3xl py-5 px-10 border-b-4 border-green-800 shadow-xl",
    sticky: "bg-green-600 hover:bg-green-700 text-white text-base py-3 px-6 shadow-none"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto inline-block";

  return (
    <a 
      href={LINKS.checkout} 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {text}
    </a>
  );
};