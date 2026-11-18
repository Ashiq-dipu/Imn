import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Play, Sparkles, ArrowDown } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Hero({ onOpenShowreel, onOpenContact, onHoverCursor }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-hud", {
      opacity: 0,
      y: -15,
      duration: 0.8,
      stagger: 0.08
    })
    .from(".hero-badge", {
      scale: 0.85,
      opacity: 0,
      duration: 0.7,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(".hero-char", {
      y: 70,
      opacity: 0,
      rotateX: 40,
      stagger: 0.025,
      duration: 1.1
    }, "-=0.5")
    .from(".hero-sub", {
      y: 20,
      opacity: 0,
      duration: 0.8
    }, "-=0.7")
    .from(".hero-actions", {
      y: 20,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")
    .from(".hero-stats", {
      opacity: 0,
      y: 15,
      duration: 0.7
    }, "-=0.4");

  }, { scope: containerRef, dependencies: [] });

  const headline1 = "WHERE BRANDS";
  const headline2 = "COME ALIVE.";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 md:pb-12 px-6 md:px-12 lg:px-20 overflow-hidden bg-background"
    >
      {/* Background Ambient Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[180vw] h-[180vh] -translate-x-1/2 -translate-y-1/2 opacity-25 scale-110 pointer-events-none filter brightness-90 contrast-125"
          src="https://www.youtube.com/embed/1L9HU7yaonc?autoplay=1&mute=1&loop=1&playlist=1L9HU7yaonc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          allow="autoplay; encrypted-media"
          title="IMN Lightment Showreel Ambient"
        />

        {/* Scrims & Lighting Halos */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.18)_0%,transparent_70%)]" />
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      </div>

      {/* Viewfinder HUD Overlays */}
      <div className="relative z-10 w-full flex items-center justify-between font-mono text-[11px] text-neutral-400 tracking-wider pt-2">
        <div className="hero-hud flex items-center gap-3">
          <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-500/30 text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            REC ● 00:04:18:22
          </span>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-neutral-300">
            RAW DCI 4K
          </span>
        </div>

        <div className="hero-hud hidden md:flex items-center gap-4 text-neutral-400">
          <span>FPS: 24.000</span>
          <span>SHUTTER: 180°</span>
          <span>ISO: 800</span>
          <span className="text-brand-cyan">LUT: IMN_FILM_04</span>
        </div>

        <div className="hero-hud flex items-center gap-2">
          <span className="text-neutral-500 font-mono text-[10px] uppercase">PROJECT:</span>
          <span className="text-white font-semibold">FLAGSHIP_SHOWREEL</span>
        </div>
      </div>

      {/* Main Statement */}
      <div className="relative z-10 my-auto py-6 sm:py-8 md:py-10 max-w-5xl">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 border border-brand-blue/30 backdrop-blur-md mb-5">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          <span className="font-mono text-xs tracking-wider text-brand-cyan uppercase font-semibold">
            Stop Marketing Like 2024
          </span>
        </div>

        {/* Kinetic Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight uppercase leading-[0.92] text-white">
          <div className="overflow-hidden flex flex-wrap gap-x-3 sm:gap-x-4">
            {headline1.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="inline-block overflow-hidden">
                {word.split("").map((c, cIdx) => (
                  <span key={cIdx} className="hero-char inline-block">
                    {c}
                  </span>
                ))}
              </span>
            ))}
          </div>
          <div className="overflow-hidden flex flex-wrap gap-x-3 sm:gap-x-4 mt-1 sm:mt-2">
            {headline2.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="inline-block overflow-hidden">
                {word.split("").map((c, cIdx) => (
                  <span
                    key={cIdx}
                    className={`hero-char inline-block ${
                      wIdx === 1
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue"
                        : ""
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </h1>

        {/* Narrative subhead */}
        <p className="hero-sub mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
          Charlotte's premier creative studio engineering{" "}
          <span className="text-white font-medium">broadcast commercials, podcast systems</span>, and{" "}
          <span className="text-brand-cyan font-medium">high-leverage brand films</span> designed to command absolute authority.
        </p>

        {/* Showreel Button & Booking */}
        <div className="hero-actions mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={onOpenShowreel}
            onMouseEnter={() => onHoverCursor && onHoverCursor(true, "PLAY")}
            onMouseLeave={() => onHoverCursor && onHoverCursor(false)}
            className="group relative flex items-center gap-3.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,112,243,0.7)] hover:scale-[1.02]"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
              <Play className="w-3.5 h-3.5 fill-black text-black ml-0.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-xs font-mono text-cyan-200 uppercase tracking-widest">
                Official Reel
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider">
                Watch Showreel 2026
              </span>
            </div>
          </button>

          <button
            onClick={onOpenContact}
            className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full glass-panel hover:border-white/40 text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/[0.05]"
          >
            Book Free Brand Review
          </button>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="hero-stats relative z-10 w-full pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-neutral-400">
        <div className="flex items-center gap-6 md:gap-12">
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-2xl font-bold text-white tracking-normal">
              18M+
            </span>
            <span className="text-[10px] tracking-widest uppercase text-neutral-400">
              Organic Reel Views
            </span>
          </div>

          <div className="w-px h-8 bg-white/10" />

          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-2xl font-bold text-white tracking-normal">
              60+
            </span>
            <span className="text-[10px] tracking-widest uppercase text-neutral-400">
              Commercial Releases
            </span>
          </div>

          <div className="w-px h-8 bg-white/10 hidden sm:block" />

          <div className="hidden sm:flex flex-col">
            <span className="font-display text-lg sm:text-2xl font-bold text-brand-cyan tracking-normal">
              100%
            </span>
            <span className="text-[10px] tracking-widest uppercase text-neutral-400">
              In-House 4K Production
            </span>
          </div>
        </div>

        <a
          href="#works"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">
            Scroll to Explore
          </span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:translate-y-1 transition-all">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </section>
  );
}
