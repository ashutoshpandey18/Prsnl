import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Heart } from 'lucide-react';

export const FloatingHearts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createHeart = () => {
      if (!containerRef.current) return;

      const heart = document.createElement('div');
      heart.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';
      heart.className = 'absolute text-pink-500 opacity-80';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.bottom = '-20px';
      containerRef.current.appendChild(heart);

      gsap.to(heart, {
        y: -(window.innerHeight + 100),
        x: 'random(-100, 100)',
        rotation: 'random(-90, 90)',
        duration: 'random(4, 6)',
        ease: 'power1.out',
        opacity: 0,
        onComplete: () => {
          if (containerRef.current?.contains(heart)) {
            containerRef.current.removeChild(heart);
          }
        }
      });
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
};