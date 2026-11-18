import React, { useState, useEffect } from 'react';
import { Film, Volume2, VolumeX, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenShowreel, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [timeCharlotte, setTimeCharlotte] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Charlotte, NC real-time clock
    const updateTime = () => {
      const now = new Date();
      setTimeCharlotte(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 md:p-6 transition-all duration-500">
      <nav
        className={`w-full max-w-7xl transition-all duration-500 rounded-2xl flex items-center justify-between px-5 md:px-8 py-3.5 ${
          scrolled
            ? 'glass-panel shadow-[0_10px_35px_rgba(0,0,0,0.8)] border-white/10 backdrop-blur-xl'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan/60 flex items-center justify-center shadow-[0_0_20px_rgba(0,112,243,0.5)] group-hover:scale-105 transition-transform duration-300">
            <Film className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm md:text-base tracking-wider text-white uppercase group-hover:text-brand-cyan transition-colors">
              IMN LIGHTMENT
            </span>
            <span className="font-mono text-[9px] tracking-widest text-neutral-400">
              PRODUCTIONS // CLT
            </span>
          </div>
        </a>

        {/* Center Live Ticker (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs font-mono text-neutral-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 text-[10px] tracking-widest font-semibold uppercase">
              STUDIO LIVE
            </span>
          </span>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-300">CHARLOTTE, NC</span>
          <span className="text-neutral-500">{timeCharlotte} EST</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-widest text-neutral-300">
          <a
            href="#works"
            className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"
          >
            Works
          </a>
          <a
            href="#services"
            className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"
          >
            About
          </a>
          <button
            onClick={onOpenShowreel}
            className="text-brand-cyan hover:text-white transition-colors flex items-center gap-1.5 font-mono text-[11px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Showreel 2026
          </button>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          {/* Ambient sound toggle indicator */}
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            title={audioEnabled ? "Mute Ambient Sound" : "Play Ambient Sound"}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-all"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-brand-cyan" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-brand-blue hover:text-white hover:shadow-[0_0_25px_rgba(0,112,243,0.6)] flex items-center gap-2"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-24 rounded-2xl glass-panel-glow p-6 md:hidden z-50 flex flex-col gap-4 font-mono text-sm">
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-neutral-200"
          >
            // 01. SELECTED WORKS
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-neutral-200"
          >
            // 02. CAPABILITIES & SERVICES
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-white/10 text-neutral-200"
          >
            // 03. THE FOUNDERS & STUDIO
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenShowreel();
            }}
            className="py-2 text-left text-brand-cyan flex items-center gap-2"
          >
            ▶ WATCH SHOWREEL 2026
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-brand-blue text-white font-bold text-center tracking-wider"
          >
            BOOK CONSULTATION
          </button>
        </div>
      )}
    </header>
  );
}

