import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { PRICING } from '../constants';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past 600px (roughly the hero section)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 line-through">R$ {PRICING.original}</span>
          <span className="font-bold text-green-600 text-xl">R$ {PRICING.current}</span>
        </div>
        <Button text="COMPRAR AGORA" variant="sticky" className="flex-grow" />
      </div>
    </div>
  );
};