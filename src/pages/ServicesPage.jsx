import React, { useState } from 'react';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import ImageLightboxModal from '../components/ImageLightboxModal';
import { threeInternationalLeaders } from '../data/three_international_data';
import { Film, Radio, Video, Zap, Check, ArrowRight, ShieldCheck, Sliders, Layers, Camera, Sparkles, ArrowUpRight, ZoomIn } from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const services = [
    {
      id: "commercials",
      icon: Film,
      tag: "FLAGSHIP",
      title: "Commercial & Narrative Films",
      summary: "Cinema-grade brand films designed to establish immediate category dominance.",
      description: "We don't make generic corporate videos. We shoot high-concept narrative commercials using cinema cameras (ARRI Alexa, RED V-Raptor), anamorphic optics, custom score composition, and DaVinci Resolve color mastering.",
      image: "/images/production-rig.jpg",
      video: "/videos/build-your-brand.mov",
      deliverables: [
        "Scriptwriting, treatments & storyboard direction",
        "Hollywood cinema camera packages & lighting trucks",
        "On-location multi-crew production & talent direction",
        "Broadcast-grade mastering (TV spots, digital, theatre DCP)"
      ]
    },
    {
      id: "docu-series",
      icon: Video,
      tag: "LONG-FORM",
      title: "Turnkey Docu-Series & Founder Profiles",
      summary: "Episodic storytelling that builds deep emotional resonance and legacy.",
      description: "Our signature docu-series format captures the relentless dedication of elite founders, athletes, and organizations. We build multi-episode narrative arcs that elevate personal brands into cultural forces.",
      image: "/images/crafting-brands.jpg",
      video: "/videos/consistent-content.mov",
      deliverables: [
        "Full-season episodic structure (4 to 8 episodes)",
        "Intimate cinema interviews & cinematic B-roll",
        "Historical & archival asset integration",
        "Private cinema screening & premiere coordination"
      ]
    },
    {
      id: "podcasts",
      icon: Radio,
      tag: "INFRASTRUCTURE",
      title: "High-Performance Podcast Architecture",
      summary: "Broadcast-quality multi-cam podcast engineering and syndication.",
      description: "Turn your thought leadership into a top-charting media engine. We engineer custom 4K multi-camera soundstages, broadcast-grade audio setups, and turnkey episodic publishing workflows.",
      image: "/images/podcast-studio-wide.jpg",
      video: "/videos/podcast-clip-1.mp4",
      deliverables: [
        "Multi-angle 4K camera switching (Sony FX-line rigs)",
        "Broadcast Shure microphones & acoustical tuning",
        "Full episodic editorial & audiophile sound mastering",
        "Optimized audio exports for Apple Podcasts, Spotify & YouTube"
      ]
    },
    {
      id: "short-form",
      icon: Zap,
      tag: "VIRAL ENGINE",
      title: "Viral Short-Form Syndication",
      summary: "High-velocity 9:16 assets that capture attention and drive inbound scale.",
      description: "Every shoot generates a library of high-converting micro-content. Featuring Inspire Dentistry Invisalign reels, practice hooks, and punchy narratives optimized for TikTok, Instagram Reels, and YouTube Shorts.",
      image: "/images/invisalign-reel-cover.jpg",
      video: "/videos/invisalign-reel.mov",
      deliverables: [
        "15–60 high-retention vertical reels delivered monthly",
        "Dynamic kinetic subtitles & audio sound design",
        "Hook-rate optimization & thumbnail design",
        "Omnichannel syndication strategy & analytics reviews"
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Creative Treatment & Strategy",
      desc: "We dissect your brand positioning, define target audience resonance, and architect detailed narrative scripts and visual mood boards."
    },
    {
      number: "02",
      title: "Pre-Production & Logistics",
      desc: "Location scouting, casting, crew assignments, equipment package preparation, and meticulous call sheets to guarantee seamless shoot days."
    },
    {
      number: "03",
      title: "Principal Photography",
      desc: "Executive directors Justin Ortiz and Brian G. direct every frame on set, utilizing industry-standard cinema cameras, lighting, and sound gear."
    },
    {
      number: "04",
      title: "Editorial, Color & Syndication",
      desc: "Assembly, sound design, licensed orchestral score, DaVinci Resolve color science, and omnichannel export formatting for rapid rollout."
    }
  ];

  const gearSpecs = [
    { category: "Camera Systems", items: "ARRI Alexa Mini LF, RED V-Raptor 8K VV, Sony FX6 / FX9 Rigs" },
    { category: "Optics & Glass", items: "Cooke Anamorphic /i Full Frame, Zeiss Supreme Primes, Angénieux EZ Zooms" },
    { category: "Stabilization", items: "DJI Ronin 2 Professional Gimbal, Ready Rig ProArm, Cinema Sliders & Jibs" },
    { category: "Audio Engineering", items: "Sound Devices 833 Mixers, Sennheiser MKH-416 Shotgun, Shure SM7B Mics" },
    { category: "Post-Production", items: "DaVinci Resolve Studio Color Calibration, Pro Tools Sound Design, 8K RAID Storage" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main className="py-16 sm:py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-soci-dark tracking-tight mb-4">
            End-to-end cinema production and distribution.
          </h1>
          <p className="text-soci-muted text-lg sm:text-xl max-w-3xl font-light">
            We operate as an integrated media studio — combining Hollywood camera packages with modern digital distribution to make your brand impossible to ignore.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-soci-card rounded-3xl border border-soci-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {svc.video && (
                    <div
                      className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-soci-border group/media cursor-pointer"
                      onMouseEnter={(e) => {
                        const v = e.currentTarget.querySelector('video');
                        if (v) {
                          v.muted = true;
                          v.play().catch(() => {});
                        }
                      }}
                      onMouseLeave={(e) => {
                        const v = e.currentTarget.querySelector('video');
                        if (v) {
                          v.pause();
                          v.currentTime = 0;
                        }
                      }}
                    >
                      <img
                        src={svc.image}
                        alt={svc.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.94]"
                      />
                      <video
                        src={svc.video}
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 filter brightness-[0.92] pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                          {svc.tag}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-8 sm:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-soci-cream border border-soci-border flex items-center justify-center text-soci-coral">
                        <Icon className="w-6 h-6" />
                      </div>
                      {!svc.video && (
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-soci-coral px-3 py-1 rounded-full bg-soci-coral/10">
                          {svc.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-soci-dark mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-soci-dark font-medium text-sm mb-4">
                      {svc.summary}
                    </p>
                    <p className="text-soci-muted text-sm leading-relaxed mb-8">
                      {svc.description}
                    </p>

                    {/* Deliverables List */}
                  <div className="space-y-3 pt-6 border-t border-soci-border">
                    <div className="text-xs font-mono uppercase tracking-wider font-bold text-soci-dark mb-2">
                      Key Deliverables
                    </div>
                    {svc.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-soci-muted">
                        <Check className="w-4 h-4 text-soci-coral flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-3.5 rounded-full bg-neutral-100 hover:bg-soci-dark hover:text-white text-soci-dark font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            EXECUTIVE BRAND PHOTOGRAPHY: THREE INTERNATIONAL (3 Columns)
        ======================================================== */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-3">
                Three International — Executive Portrait Series
              </h2>
              <p className="text-soci-muted text-base sm:text-lg font-light max-w-2xl">
                Commissioned studio portraiture and executive brand assets captured on IMN Soundstage A for global nutrition & wellness leader Three International. Tap any portrait to inspect master full-resolution lighting.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soci-coral/10 text-soci-coral font-mono text-xs font-bold self-start sm:self-auto border border-soci-coral/20">
              <Sparkles className="w-4 h-4" />
              12 Global Executives
            </span>
          </div>

          {/* Clean 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {threeInternationalLeaders.map((leader, idx) => (
              <div
                key={leader.id}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-2xl hover:border-soci-coral/40 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-900 relative">
                  <img
                    src={leader.thumb}
                    alt={`${leader.name} - ${leader.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 group-hover:bg-soci-coral group-hover:border-soci-coral transition-all duration-200 shadow-xl scale-95 group-hover:scale-105">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-mono uppercase font-bold text-white border border-white/10 shadow-sm">
                    {leader.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-soci-dark group-hover:text-soci-coral transition-colors leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-soci-muted mt-1.5">
                      {leader.role} • Three International
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-soci-border/60 flex items-center justify-between text-xs font-mono text-soci-muted">
                    <span>Soundstage A</span>
                    <span className="text-soci-coral font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Inspect Portrait <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight">
              Our 4-step production framework
            </h2>
            <p className="text-soci-muted text-base sm:text-lg max-w-2xl font-light mt-2">
              A disciplined, timeline-guaranteed framework ensuring cinematic excellence from concept to distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.number}
                className="bg-soci-card p-7 rounded-3xl border border-soci-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-extrabold text-soci-coral font-mono mb-4">
                    {st.number}
                  </div>
                  <h3 className="text-lg font-bold text-soci-dark mb-2">
                    {st.title}
                  </h3>
                  <p className="text-soci-muted text-xs sm:text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cinema Gear & Technical Specifications */}
        <div className="p-8 sm:p-12 bg-soci-dark text-white rounded-3xl mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-neutral-800">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Studio Gear & Optics Inventory
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md font-light">
              We own and operate Hollywood-grade camera packages to ensure pristine fidelity and maximum image latitude.
            </p>
          </div>

          <div className="space-y-4">
            {gearSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-sm gap-2"
              >
                <span className="font-mono text-xs uppercase font-bold text-soci-coral w-48">
                  {spec.category}
                </span>
                <span className="text-neutral-300 font-light flex-1">
                  {spec.items}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 sm:p-14 bg-soci-cream rounded-3xl border border-soci-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-soci-dark mb-2">
              Have a custom production requirement?
            </h3>
            <p className="text-soci-muted text-sm sm:text-base font-light">
              We accommodate specialized multi-day commercial shoots, national tour coverage, and custom retainer structures.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-soci-coral text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-soci-dark transition-colors flex-shrink-0"
          >
            Request Custom Scope
          </button>
        </div>
      </main>

      <ImageLightboxModal
        isOpen={selectedPhotoIndex !== null}
        onClose={() => setSelectedPhotoIndex(null)}
        images={threeInternationalLeaders}
        currentIndex={selectedPhotoIndex || 0}
        onSelectIndex={setSelectedPhotoIndex}
      />

      <SociFooter onOpenContact={onOpenContact} />
    </div>
  );
}

