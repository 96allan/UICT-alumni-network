import React, { useRef, ReactNode } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`${className || ''} transition-opacity ease-in duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
