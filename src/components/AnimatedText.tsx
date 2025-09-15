'use client';

import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'typewriter' | 'fadeInWords' | 'slideUpWords';
  speed?: number;
  delay?: number;
}

export default function AnimatedText({ 
  text, 
  className = '', 
  animation = 'fadeInWords',
  speed = 100,
  delay = 0
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    if (animation === 'typewriter') {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      }
    } else if (animation === 'fadeInWords') {
      const words = text.split(' ');
      if (currentIndex < words.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + (prev ? ' ' : '') + words[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      }
    }
  }, [currentIndex, text, speed, isVisible, animation]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-500 ease-out';
    
    switch (animation) {
      case 'typewriter':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'fadeInWords':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slideUpWords':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;
      default:
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  return (
    <span className={`${getAnimationClasses()} ${className}`}>
      {animation === 'slideUpWords' ? text : displayedText}
      {animation === 'typewriter' && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
