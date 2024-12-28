import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "rounded-full px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2";
  const variantStyles = {
    primary: "bg-[#1DB954] text-white hover:bg-[#1ed760]",
    secondary: "bg-white/10 text-white hover:bg-white/20"
  };
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}