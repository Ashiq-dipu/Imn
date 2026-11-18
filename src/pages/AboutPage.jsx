import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Play,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
  Camera,
  Mic,
  Sliders,
  ShieldCheck,
  Award,
  Video,
  Layers,
  MapPin,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function AboutPage({ onOpenVideo, onOpenContact }) {
  const reelRailRef = useRef(null);
  const heroSliderRef = useRef(null);
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);

  const heroCards = [
    {
      caption: "As a dynamic video studio",
      image: "/images/field-crew-bryan.jpg",
      videoId: "/videos/hero-reel-drp.mp4",
      title: "Official IMN Field Crew & Agency Reel"
    },
    {
      caption: "Video production studio",
      image: "/images/media-studio.jpg",
      videoId: "/videos/social-full-time-job-audio.mp4",
      title: "Multi-Cam Documentary & Studio Suite"
    },
    {
      caption: "Commercial film",
      image: "/images/service-commercial-real.jpg",
      videoId: "/videos/emery-solutions-spotlight.mp4",
      title: "Dr. Emery Solutions Commercial Film"
    },
    {
      caption: "Founder content engine",
      image: "/images/field-founders-real.jpg",
      videoId: "/videos/consistent-content-audio.mp4",
      title: "Justin & Bryan Founder Content Engine"
    },
    {
      caption: "Keynote & live summit",
      image: "/images/service-event-real.jpg",
      videoId: "/videos/imn-your-event-audio.mp4",
      title: "National Leadership Summit Arena Keynote"
    }
  ];

  const slideHero = (direction) => {
    if (heroSliderRef.current) {
      const scrollAmount = direction === 'left' ? -270 : 270;
      heroSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setActiveHeroIdx((prev) => {
        if (direction === 'left') return Math.max(0, prev - 1);
        return Math.min(heroCards.length - 1, prev + 1);
      });
    }
  };

  const scrollRail = (direction) => {
    if (reelRailRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      reelRailRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Authentic 3-Phase Method from original IMN Lightment production bundle
  const methodology = [
    {
      number: "01",
      step: "Collaborate",
      title: "Aligning on Vision & Business Objectives",
      description: "We partner with you on your goals and mission. Your vision becomes our shared objective—working side by side to understand your brand, audience, and what success looks like for you.",
      deliverables: ["Stakeholder Strategy Call", "Audience Perception Audit", "Narrative Treatment & Scripting"]
    },
    {
      number: "02",
      step: "Curate",
      title: "Tailored Production & Distribution Strategy",
      description: "We craft the perfect strategy and services tailored to your needs. From concept development to platform optimization, we curate every element to maximize your impact.",
      deliverables: ["Multi-Format Content Matrix", "Cinematic Camera & Lighting Design", "Platform-Specific Hooks"]
    },
    {
      number: "03",
      step: "Create",
      title: "Cinema-Grade Revenue-Generating Content",
      description: "We produce revenue-generating content that positions you as the leader. Videos, podcasts, social media—all designed to get you seen and drive real business results.",
      deliverables: ["4K/8K Hollywood Master Files", "DaVinci Resolve Color Grade", "Short-Form Syndication Cuts"]
    }
  ];

  // Authentic videos featured on the original IMN Lightment About page
  const featuredAboutReels = [
    { id: "FLWL1GPW88Y", title: "Podcast Episode", category: "Podcast Production", duration: "Full Episode" },
    { id: "VwcfP1qsASw", title: "Podcast Conversation", category: "Studio Conversation", duration: "Studio Talk" },
    { id: "H0DqRtLzvsw", title: "Behind the Scenes", category: "On Set BTS", duration: "Behind The Scenes" },
    { id: "0pWjzLQF3Ws", title: "Agency Reel", category: "Commercial Reel", duration: "Agency Reel" },
    { id: "e9_m-ASdFks", title: "Our Vision", category: "Brand Story", duration: "Brand Story" },
    { id: "UK2yNSZLZjI", title: "Commercial Work", category: "Client Film", duration: "Commercial" }
  ];

  // Studio Stills for Editorial Showcase
  const studioMoments = [
    {
      title: "Director Justin Ortiz on Set",
      subtitle: "Studio Stage A • Charlotte, NC",
      tag: "Directing & Leadership",
      image: "/images/justin-ortiz-set.jpg",
      className: "md:col-span-8 md:row-span-2 min-h-[380px] sm:min-h-[440px]"
    },
    {
      title: "Camera Rigging & Handheld Stabilization",
      subtitle: "Field Cinematography & Operator Gear",
      tag: "Rigging Suite",
      image: "/images/team-visibility.webp",
      className: "md:col-span-4 min-h-[220px]"
    },
    {
      title: "DaVinci Resolve Color & Mastering",
      subtitle: "Color Science & Post-Production",
      tag: "Mastering Suite",
      image: "/images/brand-blueprint-package.webp",
      className: "md:col-span-4 min-h-[220px]"
    },
    {
      title: "Keynote & Multi-Cam Arena Broadcast",
      subtitle: "Live Event Keynote Production",
      tag: "Live Production",
      image: "/images/service-event-real.jpg",
      className: "md:col-span-6 min-h-[260px]"
    },
    {
      title: "Cinema Rigging & Commercial Production Set",
      subtitle: "Clinical & Commercial Brand Cinema",
      tag: "Commercial Cinema",
      image: "/images/service-commercial-real.jpg",
      className: "md:col-span-6 min-h-[260px]"
    }
  ];

  // Authentic Leadership Team
  const founders = [
    {
      name: "Justin Ortiz",
      role: "Founder / Executive Director",
      image: "/images/justin-ortiz.jpg",
      bio: "Visionary creative director and founder architecting high-leverage brand perception for enterprises, athletes, and fast-growth businesses. Justin pairs strategic commercial positioning with cinematic storytelling to turn company leaders into category authorities.",
      specialties: ["Executive Creative Direction", "Commercial Narrative Scripting", "Brand Perception Architecture"]
    },
    {
      name: "Bryan Gee",
      role: "Co-Founder & Head of Production",
      image: "/images/bryan-gee.jpg",
      bio: "Head of production operations and cinema technical workflows. Bryan engineers multi-camera studio installations, manages broadcast-grade ARRI and RED cinema packages, and ensures every frame delivered meets uncompromising theatrical standards.",
      specialties: ["Technical Cinematography", "Multi-Cam Studio Engineering", "Acoustic Podcast Systems"]
    }
  ];

  const agencyStats = [
    { value: "15+", label: "Years of Excellence", desc: "Proven track record in commercial filmmaking" },
    { value: "116+", label: "Delivered Productions", desc: "Commercials, docu-series, & podcast seasons" },
    { value: "10M+", label: "Organic Views", desc: "Generated across client digital ecosystems" },
    { value: "4K / 8K", label: "Cinema Standards", desc: "Mastered on Hollywood-grade sensor packages" }
  ];

  const gearSpecs = [
    {
      icon: Camera,
      title: "Cinema Camera Systems",
      detail: "ARRI Alexa Mini LF, RED V-Raptor 8K, Sony FX9 & FX6 packages with cinema prime glass."
    },
    {
      icon: Mic,
      title: "Broadcast Audio Chains",
      detail: "Shure SM7B microphones, Cloudlifters, Sound Devices 32-bit float preamps, and Sennheiser shotguns."
    },
    {
      icon: Sliders,
      title: "DaVinci Color Grading",
      detail: "Dedicated color suites with calibrated 10-bit reference displays and custom film emulation LUTs."
    },
    {
      icon: Cpu,
      title: "Turnkey Studio Infrastructure",
      detail: "Private acoustic podcast soundstage, dynamic RGB lighting grid, teleprompter, and live switcher."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} theme="dark" />

      <main>
        {/* ========================================================
            1. CINEMATIC DARK HERO (Matching Framer Reference Layout)
        ======================================================== */}
        <section className="relative min-h-[640px] lg:min-h-[720px] bg-[#07090D] text-white overflow-hidden flex items-center mb-24">
          {/* Ambient Background Video / Imagery */}
          <div className="absolute inset-0 z-0">
            <video
              src="/videos/build-your-brand-hero.mp4"
              poster="/images/build-your-brand-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-center filter brightness-[0.62]"
            />
            {/* Cinematic Gradient Scrim for Contrast & Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090D] via-[#07090D]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-[#07090D]/50" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Typography & CTAs */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {/* Eyebrow */}
                <p className="text-xs sm:text-sm font-medium text-white/80 tracking-wide mb-3 sm:mb-4">
                  Every Cut. Crafted to Perfection.
                </p>

                {/* Headline with Signature Curly Brackets */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.08] mb-4 sm:mb-5">
                  We create <span className="font-light text-white/90 font-serif italic">&#123; Producing &#125;</span> <br />
                  videos for brands.
                </h1>

                {/* Subtitle */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mb-8 font-light">
                  We help startups, enterprises, and agencies create high-impact video content that converts, scales, and builds brand authority.
                </p>

                {/* Dual Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onOpenContact}
                    className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg hover:scale-105 active:scale-95"
                  >
                    Book a Call
                  </button>

                  <Link
                    to="/work"
                    className="px-7 py-3.5 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all hover:border-white/60 active:scale-95"
                  >
                    View More Works
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Video Cards Rail */}
              <div className="lg:col-span-7 flex flex-col justify-center overflow-hidden">
                {/* Horizontal Rail of Cards */}
                <div
                  ref={heroSliderRef}
                  className="flex items-center gap-4 sm:gap-5 overflow-x-auto scrollbar-none scroll-smooth pb-3 pr-8"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {heroCards.map((card, idx) => (
                    <div
                      key={idx}
                      onClick={() => onOpenVideo?.(card.videoId, card.title)}
                      className="group relative w-[220px] sm:w-[250px] md:w-[270px] h-[320px] sm:h-[370px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer border border-white/15 shadow-2xl bg-neutral-900 transition-all duration-300 hover:scale-[1.02] hover:border-white/40"
                    >
                      <img
                        src={card.image}
                        alt={card.caption}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] group-hover:brightness-100"
                        loading="lazy"
                      />

                      {/* Scrim Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20 group-hover:via-black/10 transition-all" />

                      {/* Top-Left Play Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all shadow-md">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Caption */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <p className="text-white text-xs sm:text-sm font-medium leading-snug group-hover:text-soci-coral transition-colors">
                          {card.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Navigation: Circular Buttons + Progress Bar */}
                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={() => slideHero('left')}
                    disabled={activeHeroIdx === 0}
                    className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous card"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => slideHero('right')}
                    disabled={activeHeroIdx >= heroCards.length - 2}
                    className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Next card"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Progress Line */}
                  <div className="flex-1 max-w-[260px] h-[2px] bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-300"
                      style={{
                        width: `${Math.min(100, ((activeHeroIdx + 1) / (heroCards.length - 1)) * 100)}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. EDITORIAL STUDIO MOSAIC (Visual Proof of Craft)
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {studioMoments.map((item, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl overflow-hidden border border-soci-border bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-500 ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 group-hover:via-black/15 transition-all duration-300" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-white border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-soci-coral" />
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end">
                  <span className="text-[11px] font-mono text-white/60 mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-soci-coral transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            3. KEY STATS BANNER
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 sm:p-10 rounded-3xl bg-white border border-soci-border shadow-sm">
            {agencyStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-soci-coral mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-soci-muted font-light">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. THE MANIFESTO / CORE PHILOSOPHY BLOCKQUOTE
        ======================================================== */}
        <section className="py-20 px-6 sm:px-12 bg-soci-cream border-y border-soci-border mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-soci-coral/10 text-soci-coral flex items-center justify-center mx-auto mb-6">
              <Quote className="w-6 h-6 fill-current" />
            </div>

            <blockquote className="text-2xl sm:text-4xl font-serif text-soci-dark leading-snug sm:leading-snug tracking-tight mb-8">
              &ldquo;We have the systems, processes, and capabilities of a full-scale agency—with the personal, intimate connection of a small business—perfectly crafted to address all needs from small business to higher-level corporate contracts.&rdquo;
            </blockquote>

            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-soci-dark uppercase tracking-wider">
                IMN Lightment Productions Manifesto
              </span>
              <span className="text-xs font-mono text-soci-coral mt-1">
                Founded in Charlotte, NC • Serving Clients Nationwide
              </span>
            </div>

            <div className="mt-10 max-w-2xl mx-auto text-left text-soci-muted text-base sm:text-lg font-light leading-relaxed space-y-4 pt-8 border-t border-soci-border">
              <p>
                We collaborate with you on your goals and your mission by offering our services and doing business with you to create <strong className="font-semibold text-soci-dark">revenue-generating video production</strong> and revenue-generating optimization abilities to your media content we create and manage—to get you seen in 2026.
              </p>
              <p>
                IMN Lightment Productions is Charlotte&apos;s fastest growing media agency. We produce promotional videos, podcasts, Instagram Reels, commercials, and manage complete social media strategies. We do not just make content—we build the visibility systems that position you as the authority in your space.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. THE 3-PHASE EXECUTION METHODOLOGY
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-6xl mx-auto mb-28">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-2">
              OUR PROCESS • HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight">
              Collaborate. Curate. Create.
            </h2>
            <p className="text-soci-muted text-base sm:text-lg font-light mt-3">
              A structured three-phase blueprint engineered to turn your brand mission into market-leading visual authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodology.map((m, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-9 rounded-3xl border border-soci-border shadow-sm hover:shadow-lg hover:border-soci-coral/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-6xl font-extrabold text-soci-cream select-none pointer-events-none group-hover:text-soci-coral/10 transition-colors">
                  {m.number}
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-soci-coral" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-soci-coral">
                      Phase {m.number} • {m.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-soci-dark mb-3 group-hover:text-soci-coral transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-soci-muted text-sm font-light leading-relaxed mb-6">
                    {m.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-soci-border">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-soci-muted block mb-3">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {m.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-soci-dark">
                        <CheckCircle2 className="w-3.5 h-3.5 text-soci-coral flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            6. "INSIDE THE AGENCY" - HORIZONTAL VIDEO REEL RAIL
        ======================================================== */}
        <section className="py-20 px-6 sm:px-12 bg-white border-y border-soci-border mb-28 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-2">
                  INSIDE THE AGENCY
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight">
                  Behind the Brand
                </h2>
                <p className="text-soci-muted text-base sm:text-lg font-light mt-2 max-w-xl">
                  Get a glimpse into our process, philosophy, and the real work we do with clients. From podcast conversations to behind-the-scenes moments.
                </p>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollRail('left')}
                  aria-label="Scroll left"
                  className="w-11 h-11 rounded-full border border-soci-border bg-[#FFFFFF] text-soci-dark flex items-center justify-center hover:border-soci-coral hover:text-soci-coral transition-all duration-200 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollRail('right')}
                  aria-label="Scroll right"
                  className="w-11 h-11 rounded-full border border-soci-border bg-[#FFFFFF] text-soci-dark flex items-center justify-center hover:border-soci-coral hover:text-soci-coral transition-all duration-200 shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Horizontal Rail */}
            <div
              ref={reelRailRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredAboutReels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => onOpenVideo(reel.id, reel.title)}
                  className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-900 border border-soci-border shadow-sm group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={`https://img.youtube.com/vi/${reel.id}/hqdefault.jpg`}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider border border-white/10">
                        {reel.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-soci-dark flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-soci-coral group-hover:text-white transition-all">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono text-white/70 block mb-0.5 uppercase tracking-wider">
                        {reel.duration}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold group-hover:text-soci-coral transition-colors line-clamp-1">
                        {reel.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            7. MEET THE FOUNDERS & LEADERSHIP
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-6xl mx-auto mb-28">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-2">
              LEADERSHIP & DIRECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight">
              Meet The Founders
            </h2>
            <p className="text-soci-muted text-base sm:text-lg font-light mt-3">
              The visionary directors and technical cinematographers leading IMN Lightment Productions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-soci-coral block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-soci-muted text-sm sm:text-base leading-relaxed font-light mb-6">
                    {member.bio}
                  </p>

                  <div className="pt-6 border-t border-soci-border">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-soci-muted block mb-3">
                      Core Specializations:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-full bg-soci-cream text-soci-dark text-xs font-medium border border-soci-border"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            8. STUDIO GEAR & INFRASTRUCTURE STANDARDS
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-6xl mx-auto mb-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-soci-cream border border-soci-border">
            <div className="max-w-2xl mb-10">
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-2">
                TECHNICAL INFRASTRUCTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-soci-dark tracking-tight">
                Hollywood Standards. Zero Shortcuts.
              </h2>
              <p className="text-soci-muted text-sm sm:text-base font-light mt-2">
                We invest in top-tier cinematic optics, dedicated soundstage facilities, and calibrated color science to guarantee broadcast delivery on every engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gearSpecs.map((spec, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-soci-border shadow-sm flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-soci-coral/10 text-soci-coral flex items-center justify-center mb-4">
                    <spec.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-soci-dark mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-soci-muted text-xs leading-relaxed font-light">
                    {spec.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            9. HIGH-CONVERTING SOCIWAVE FINAL CTA
        ======================================================== */}
        <section className="py-24 sm:py-32 px-6 sm:px-12 bg-soci-dark text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Ready to Be Seen in 2026?
            </h2>

            <p className="text-white/70 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Let&apos;s collaborate on your next project and create content that positions you as the undisputed leader in your industry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-soci-coral text-white font-bold text-sm tracking-wide uppercase hover:bg-[#0080CE] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                BOOK YOUR FREE BRAND REVIEW
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SociFooter onOpenContact={onOpenContact} />
    </div>
  );
}