import React from 'react';
import { Quote, Flame, Target, Award } from 'lucide-react';

export default function BrandPhilosophy({ onOpenContact }) {
  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-20 bg-background overflow-hidden border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authority Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-widest mb-6">
              <Flame className="w-4 h-4 text-brand-amber" />
              <span>// THE IMN MANIFESTO</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-8">
              VISIBILITY BUILDS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-neutral-400">
                UNTOUCHABLE AUTHORITY.
              </span>
            </h2>

            <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                In today's hyper-saturated media market, visibility isn't optional. It is the absolute difference between commanding premium retainers and being commoditized.
              </p>
              <p>
                At <span className="text-white font-semibold">IMN Lightment Productions</span>, we don't just capture footage — we architect perception. We turn your expertise, clinical insights, and athletic accomplishments into magnetic assets that compound in value forever.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="p-4 rounded-xl glass-panel border border-white/5 flex items-start gap-3">
                <Target className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-display">Targeted Perception</h4>
                  <p className="text-xs text-neutral-400 mt-1">Every camera move and audio frequency aligns with high-ticket positioning.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/5 flex items-start gap-3">
                <Award className="w-5 h-5 text-brand-amber flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-display">Enterprise Delivery</h4>
                  <p className="text-xs text-neutral-400 mt-1">From raw script to 4K color master in days, not months.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Testimonial Spotlight */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl glass-panel-glow p-8 md:p-10 border border-brand-blue/30 overflow-hidden shadow-2xl">
              <Quote className="w-12 h-12 text-brand-cyan/30 mb-6" />

              <blockquote className="font-display text-xl sm:text-2xl text-white font-medium leading-snug mb-8">
                "IMN Lightment transformed our brand presence. The content they produce is on an entirely different level from anything in the region. They don't just shoot; they understand leverage."
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-cyan shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=200&q=80"
                    alt="Marcus Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">Marcus Johnson</div>
                  <div className="font-mono text-xs text-brand-cyan uppercase tracking-wider">
                    CEO, CHARTER CHAMPIONS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

