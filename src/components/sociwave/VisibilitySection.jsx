import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Film, Zap, Sparkles } from 'lucide-react';

export default function VisibilitySection({ onOpenContact }) {
  const pillars = [
    {
      icon: Film,
      title: "Cinema & Podcast Authority",
      desc: "Promotional films and studio podcasts crafted with intention to position you as a category leader."
    },
    {
      icon: Zap,
      title: "Consistent Social Velocity",
      desc: "High-performing Instagram Reels and full-scale distribution built to keep your brand unforgettable."
    },
    {
      icon: Sparkles,
      title: "Search & AI Trust Signals",
      desc: "A cohesive digital footprint earning credibility across audiences, modern search, and AI platforms."
    }
  ];

  return (
    <section
      id="visibility-authority"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFFFF] border-b border-soci-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline + Bento Pillar Cards + Pill CTAs */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-[52px] font-extrabold text-soci-dark tracking-tight leading-[1.1] mb-5">
              Visibility builds{' '}
              <span className="text-soci-coral">lasting authority.</span>
            </h2>

            <p className="text-soci-muted text-base sm:text-lg leading-relaxed font-light mb-8">
              In today’s market, visibility isn’t optional — it’s the difference between commanding attention and being overlooked. We partner with ambitious brands to engineer strategic films, podcasts, and social engines that strengthen perception and elevate your category standing.
            </p>

            {/* 3 Scannable Bento Cards Matching Current Site Design */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-9">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F1F5F9] border border-soci-border hover:border-soci-coral/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] text-soci-coral border border-soci-border/70 flex items-center justify-center mb-3.5 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-soci-dark leading-snug mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-soci-muted leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rounded Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-soci-coral text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-soci-dark transition-colors shadow-md shadow-soci-coral/20"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <Link
                to="/work"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F1F5F9] border border-soci-border text-soci-dark font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FFFFFF] hover:border-soci-coral hover:text-soci-coral transition-colors"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Studio Portrait Matching Site Card Language */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-soci-border bg-[#FFFFFF] shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <img
                src="/images/team-visibility.webp"
                alt="IMN Lightment Director operating cinema camera rig"
                width="1200"
                height="1748"
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
