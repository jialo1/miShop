'use client';

import { useTheme } from '../contexts/ThemeContext';
import { useEffect } from 'react';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { theme } = useTheme();

  useEffect(() => {
    // Apply theme class to body for global styles
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return <>{children}</>;
}
