import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '',
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-primary-600`} />
      {text && (
        <p className="mt-2 text-sm text-secondary-600">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner; 