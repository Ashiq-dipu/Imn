import React from 'react';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import { Eye, Film, Sparkles, MapPin, Play, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function BlindBrandPage({ onOpenVideo, onOpenContact }) {
  const blindProjects = [
    {
      client: "Charlotte Artisan Roastery",
      category: "Food & Beverage",
      location: "Charlotte, NC",
      description: "We surprised an independent coffee roaster at dawn, capturing the meticulous bean selection, roasting fires, and morning rush unannounced. The resulting brand film generated immediate regional acclaim.",
      revealVideoId: "ZTQQOBXucwg",
      btsVideoId: "H0DqRtLzvsw",
      tag: "FEATURE EPISODE 01"
    },
    {
      client: "Metrolina Athletic Training Facility",
      category: "Sports & Performance",
      location: "Charlotte, NC",
      description: "Our crew walked in during a high-stakes combine training clinic with zero advance warning. We captured the raw sweat, explosive drills, and athlete camaraderie in 8K high-speed cinema optics.",
      revealVideoId: "sjIOG-eivgc",
      btsVideoId: "RC5_Uxq3KJg",
      tag: "FEATURE EPISODE 02"
    },
    {
      client: "Apex Executive Advisory",
      category: "Professional Services",
      location: "Uptown Charlotte, NC",
      description: "Capturing the fast-paced strategy room of an executive leadership firm without prior rehearsals. Authentic client meetings and partner deliberations edited into a commanding authority piece.",
      revealVideoId: "1L9HU7yaonc",
      btsVideoId: "VwcfP1qsASw",
      tag: "FEATURE EPISODE 03"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main className="py-16 sm:py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-soci-coral" />
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
              EXCLUSIVE IMN ORIGINAL SERIES
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-soci-dark tracking-tight mb-4">
            Blind Brand. Unscripted. Unannounced.
          </h1>
          <p className="text-soci-muted text-lg sm:text-xl max-w-3xl font-light leading-relaxed">
            We surprise a business, film unannounced, and deliver a cinematic master mix from their raw day-to-day operations. Each project features the official reveal video and the behind-the-scenes breakdown.
          </p>
        </div>

        {/* Feature Episodes Grid */}
        <div className="space-y-16 mb-24">
          {blindProjects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-soci-card rounded-3xl p-8 sm:p-12 border border-soci-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-soci-border">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-soci-coral font-bold uppercase mb-1">
                    <span>{proj.tag}</span>
                    <span>•</span>
                    <span className="text-soci-muted flex items-center gap-1 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      {proj.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-soci-dark">
                    {proj.client}
                  </h3>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-soci-cream border border-soci-border text-xs font-mono text-soci-dark w-fit">
                  {proj.category}
                </span>
              </div>

              <p className="text-soci-muted text-sm sm:text-base leading-relaxed mb-8 max-w-3xl font-light">
                {proj.description}
              </p>

              {/* Dual Video Showcase: The Reveal + Making Of */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reveal Film */}
                <div
                  onClick={() => onOpenVideo(proj.revealVideoId, `${proj.client} — The Reveal`)}
                  className="group relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer border border-soci-border"
                >
                  <img
                    src={`https://img.youtube.com/vi/${proj.revealVideoId}/hqdefault.jpg`}
                    alt={`${proj.client} Reveal`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-soci-coral text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    01. The Reveal Video
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-soci-dark flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-soci-coral group-hover:text-white transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Making Of BTS */}
                <div
                  onClick={() => onOpenVideo(proj.btsVideoId, `${proj.client} — Making of the Reveal`)}
                  className="group relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer border border-soci-border"
                >
                  <img
                    src={`https://img.youtube.com/vi/${proj.btsVideoId}/hqdefault.jpg`}
                    alt={`${proj.client} Making Of`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20">
                    02. Making of the Reveal (BTS)
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-soci-dark flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-soci-coral group-hover:text-white transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nominate a Business Callout */}
        <div className="p-10 sm:p-14 bg-soci-dark text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div>
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
              NOMINATE A BUSINESS
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-1 mb-2">
              Want us to surprise your favorite brand?
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl">
              Nominate a passionate local founder, artisan workshop, or training facility in the Charlotte region for our next Blind Brand episode.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-soci-coral text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-white hover:text-soci-dark transition-colors flex-shrink-0"
          >
            Submit Nomination
          </button>
        </div>
      </main>

      <SociFooter onOpenContact={onOpenContact} />
    </div>
  );
}
