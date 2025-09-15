'use client';

import { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'rotate';
  delay?: number;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  hoverEffect = 'lift',
  delay = 0
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverClasses = () => {
    const baseClasses = 'transition-all duration-300 ease-out';
    
    switch (hoverEffect) {
      case 'lift':
        return `${baseClasses} ${isHovered ? 'transform -translate-y-2 shadow-2xl' : 'shadow-lg'}`;
      case 'glow':
        return `${baseClasses} ${isHovered ? 'shadow-[0_0_30px_rgba(124,58,237,0.3)]' : 'shadow-lg'}`;
      case 'scale':
        return `${baseClasses} ${isHovered ? 'transform scale-105 shadow-xl' : 'shadow-lg'}`;
      case 'rotate':
        return `${baseClasses} ${isHovered ? 'transform rotate-1 shadow-xl' : 'shadow-lg'}`;
      default:
        return `${baseClasses} ${isHovered ? 'transform -translate-y-2 shadow-2xl' : 'shadow-lg'}`;
    }
  };

  return (
    <div 
      className={`${getHoverClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
