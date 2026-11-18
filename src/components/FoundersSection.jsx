import React from 'react';
import { Camera, Clapperboard, MapPin, Users } from 'lucide-react';

export default function FoundersSection() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 lg:px-20 bg-surface/20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Real Studio Imagery & Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-2 shadow-2xl">
              <img
                src="https://imnlightmentpro.com/__l5e/assets-v1/e5b55013-7f07-466d-bcbf-430ddb150470/team-about.jpg"
                alt="Justin Ortiz and Brian G., founders of IMN Lightment Productions"
                className="w-full h-auto rounded-2xl object-cover filter brightness-95 contrast-105"
                onError={(e) => {
                  // Fallback high quality creative director image if external proxy throttles
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 font-mono text-xs flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-sm">JUSTIN ORTIZ & BRIAN G.</div>
                  <div className="text-brand-cyan text-[10px] tracking-wider uppercase">FOUNDERS // EXECUTIVE DIRECTORS</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-brand-blue/30 text-brand-cyan text-[10px] uppercase font-bold">
                  CLT EST.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-widest mb-4">
              <Users className="w-4 h-4" />
              <span>// 03. BEHIND THE CAMERA</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
              WE CREATE THE CONTENT THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                CREATES LEADERS.
              </span>
            </h2>

            <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light mb-6">
              IMN Lightment Productions was founded in Charlotte, NC with a relentless vision: to eliminate the friction between extraordinary talent and world-class cinema.
            </p>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
              We operate not as an outsourced vendor, but as your embedded media arm. Whether it's directing high-concept commercial shoots on ARRI & RED cameras, engineering broadcast podcast stages, or curating seven-figure personal brands for athletes and entrepreneurs, our work speaks with singular intensity.
            </p>

            {/* Studio Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="flex flex-col">
                <span className="text-neutral-500 uppercase tracking-wider">HEADQUARTERS</span>
                <span className="text-white font-semibold mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-cyan" /> Charlotte, NC
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-neutral-500 uppercase tracking-wider">HARDWARE</span>
                <span className="text-white font-semibold mt-1 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-brand-blue" /> ARRI, RED, Sony
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-neutral-500 uppercase tracking-wider">CAPACITY</span>
                <span className="text-white font-semibold mt-1 flex items-center gap-1.5">
                  <Clapperboard className="w-3.5 h-3.5 text-brand-amber" /> 4K Broadcast Multi-Cam
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

