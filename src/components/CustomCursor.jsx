import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor({ cursorText = "", cursorActive = false }) {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(hover: none)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Set initial positions
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) setVisible(true);

      // Instant cursor point
      gsap.to(cursor, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    // Smooth inertia follower loop
    const ticker = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      gsap.set(follower, {
        x: pos.x,
        y: pos.y
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, [visible]);

  return (
    <>
      {/* Tiny direct dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-white transition-opacity duration-300 hidden md:block ${
          visible && !cursorActive ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Outer cinematic ring / expander */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/30 backdrop-blur-[2px] flex items-center justify-center font-mono text-[10px] tracking-widest uppercase text-white transition-all duration-300 hidden md:flex ${
          cursorActive
            ? "w-24 h-24 bg-brand-blue/90 border-brand-cyan shadow-[0_0_30px_rgba(0,112,243,0.6)] scale-100"
            : "w-9 h-9 scale-100 opacity-60"
        } ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {cursorActive && (
          <span className="font-bold tracking-wider animate-pulse">
            {cursorText || "PLAY"}
          </span>
        )}
      </div>
    </>
  );
}

