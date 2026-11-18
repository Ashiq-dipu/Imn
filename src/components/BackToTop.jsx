import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button after scrolling past 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG circular progress calculation
  // Radius = 20, Circumference = 2 * PI * 20 ≈ 125.66
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Back to top"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#07090D]/90 hover:bg-black backdrop-blur-xl border border-white/20 hover:border-soci-coral flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(0,148,239,0.55)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-soci-coral"
      >
        {/* Circular Scroll Progress Track */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 48 48"
        >
          {/* Subtle background track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-white/10"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Dynamic filled progress ring */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-soci-coral transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Arrow Up Icon with subtle hover leap */}
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 group-hover:text-soci-coral transition-all duration-300 group-hover:-translate-y-1 group-active:translate-y-0" />

        {/* Minimalist Tooltip on Hover */}
        <span className="absolute bottom-full mb-2.5 px-2.5 py-1 rounded-full bg-black/90 backdrop-blur-md text-white text-[10px] font-mono font-semibold tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/15 shadow-lg">
          TOP • {Math.round(scrollProgress)}%
        </span>
      </button>
    </div>
  );
}

