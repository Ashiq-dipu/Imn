import React from 'react';
import { clientLogos } from '../data/projects';
import { ShieldCheck } from 'lucide-react';

export default function ClientMarquee() {
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative w-full py-12 border-y border-white/10 bg-surface/40 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-neutral-400 uppercase">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
          <span>TRUSTED BY INDUSTRY TITANS & FOUNDERS</span>
        </div>
        <span className="font-mono text-[10px] tracking-widest text-neutral-400 hidden md:inline-block">
          CHARLOTTE // NATIONAL SYNDICATION
        </span>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="flex w-max animate-marquee space-x-12 sm:space-x-16 items-center">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 group-hover:scale-150 transition-transform" />
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-widest text-neutral-300 group-hover:text-white uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

