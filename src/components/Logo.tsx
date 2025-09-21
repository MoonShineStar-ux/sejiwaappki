import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.jpeg" 
        alt="SEJIWAAPP Logo"
        className={`${sizeClasses[size]} object-contain mr-2 rounded-lg`}
        onError={(e) => {
          // Fallback jika gambar tidak ditemukan
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      <span className={`${textSizes[size]} font-bold text-gray-900`}>sejiwaapp</span>
    </div>
  );
};

export default Logo;