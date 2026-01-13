import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ 
  children, 
  variant = 'primary', // primary (yellow), secondary (blue), outline (transparent)
  className, 
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-bold transition-all duration-200 rounded-none transform active:scale-95 focus:outline-none";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-black hover:bg-yellow-400 border-2 border-transparent",
    secondary: "bg-brand-blue text-white hover:bg-sky-400 border-2 border-transparent",
    outline: "bg-transparent border-2 border-brand-darkGrey text-brand-darkGrey hover:border-brand-black hover:text-brand-black",
    dark: "bg-brand-black text-white hover:bg-gray-900 border-2 border-transparent"
  };

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;