import { useEffect, useState } from 'react';

export const useIntersection = (ref: any, threshold?: number | number[]) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
    threshold: threshold || 0,
  });

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
