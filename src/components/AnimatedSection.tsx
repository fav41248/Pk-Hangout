import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Immediately reveal if already in viewport or on mobile where scroll events might trigger differently
    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 1.1 && rect.bottom >= -100) {
        setRevealed(true);
        return true;
      }
      return false;
    };

    if (checkVisibility()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          setRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(element);

    // Fallback timer for mobile browsers where IntersectionObserver might delay or miss
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id={id} ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} ${className}`}>
      {children}
    </div>
  );
};
