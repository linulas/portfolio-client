import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | undefined>(undefined);
  const [prevOffset, setPrevOffset] = useState(0);
  const toggleScrollDirection = () => {
    const scrollY = window.scrollY;
    if (scrollY === 0) {
      setScrollDirection(undefined);
    }
    if (scrollY > prevOffset) {
      setScrollDirection('down');
    } else if (scrollY < prevOffset) {
      setScrollDirection('up');
    }
    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollDirection);
    return () => {
      window.removeEventListener('scroll', toggleScrollDirection);
    };
  });

  return scrollDirection;
};
