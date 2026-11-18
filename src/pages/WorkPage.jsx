import React, { useState } from 'react';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import CinematicPageHero from '../components/CinematicPageHero';
import {
  Film,
  Radio,
  Video,
  Zap,
  Calendar,
  Layers,
  Users,
  Target,
  ArrowUpRight,
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  Camera,
  Mic,
  Clock,
  ShieldCheck,
  Star,
  BarChart3,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageLightboxModal from '../components/ImageLightboxModal';
import { threeInternationalLeaders } from '../data/three_international_data';

export default function WorkPage({ onOpenVideo, onOpenContact }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Rich Artemis-style structured services catalog mapping to all 116 real IMN productions
  const services = [
    {
      id: "commercial-production",
      number: "01",
      slug: "commercial-production",
      category: "COMMERCIALS",
      tag: "BROADCAST & CINEMA",
      title: "Commercial & Narrative Production",
      subtitle: "Emery Solutions, QC Signs & High-Concept Dominance",
      description: "We don't make generic corporate videos. We shoot high-concept narrative commercials using cinema camera packages, dynamic automotive tracking, anamorphic optics, and DaVinci Resolve color mastering.",
      format: "4K / 8K Cinema DCP",
      equipment: "ARRI Alexa Mini LF / RED V-Raptor",
      turnaround: "14–21 Days",
      productionCount: 31,
      topVideoId: "emery-spotlight",
      videoSrc: "/videos/emery-solutions-spotlight.mp4",
      previewImage: "/images/service-commercial-real.jpg",
      deliverables: [
        "Full narrative scripting, treatments & storyboard direction",
        "Hollywood cinema camera packages & lighting trucks",
        "Automotive & on-location multi-crew production",
        "Broadcast-grade mastering (TV spots, streaming, digital campaigns)"
      ]
    },
    {
      id: "podcast-production",
      number: "02",
      slug: "podcast-production",
      category: "PODCASTS",
      tag: "BROADCAST INFRASTRUCTURE",
      title: "Turnkey Podcast Soundstages",
      subtitle: "Multi-Cam Acoustic Studio & Syndication Engine",
      description: "Turn your thought leadership into a top-charting media engine. We engineer custom 4K multi-camera soundstages, acoustically treated studio spaces, Shure broadcast audio chains, and turnkey episodic syndication.",
      format: "Multi-Angle 4K Episodic",
      equipment: "Sony FX-Line Rigs & Shure SM7B Broadcast",
      turnaround: "48–72 Hours Post-Record",
      productionCount: 9,
      topVideoId: "oiu4XcBTKJI",
      videoSrc: "/videos/podcast-clip-1.mp4",
      previewImage: "/images/media-studio.jpg",
      deliverables: [
        "Multi-angle 4K camera switching & robotic tracking",
        "Acoustically tuned soundstage with broadcast preamps",
        "Full episodic editorial & audiophile sound mastering",
        "Optimized exports for Apple Podcasts, Spotify & YouTube"
      ]
    },
    {
      id: "promotional-videos",
      number: "03",
      slug: "promotional-videos",
      category: "BRAND STORIES",
      tag: "AUTHORITY VIDEO",
      title: "Promotional & Brand Story Videos",
      subtitle: "Inspire Dentistry & High-Growth Brand Curation",
      description: "Compelling brand stories and service showcases crafted to convert cold audiences into devoted advocates. Featuring Inspire Dentistry practice showcases, leadership conviction, and clinical transformations.",
      format: "High-Retention Brand Film",
      equipment: "Cinema Prime Optics & Gimbal Rigging",
      turnaround: "7–14 Days",
      productionCount: 33,
      topVideoId: "inspire-practice",
      videoSrc: "/videos/build-your-brand-hero.mp4",
      previewImage: "/images/service-promo-real.jpg",
      deliverables: [
        "Brand story architecture & executive interview curation",
        "Cinematic B-roll capturing facilities, team & leadership",
        "DaVinci Resolve custom film emulation color grading",
        "High-conversion digital ad cuts & website hero headers"
      ]
    },
    {
      id: "social-reels",
      number: "04",
      slug: "social-reels",
      category: "REELS",
      tag: "HIGH-VELOCITY SHORT-FORM",
      title: "Viral Short-Form Reels Engine",
      subtitle: "Inspire Dentistry Invisalign & High-Retention 9:16 Assets",
      description: "High-velocity 9:16 assets that capture attention in the first three seconds and drive continuous inbound scale across Instagram Reels, TikTok, and YouTube Shorts. Kinetic typography and punchy narratives.",
      format: "9:16 Vertical Video Matrix",
      equipment: "High-Speed Dynamic Tracking & Wireless Mic Systems",
      turnaround: "Weekly Turnkey Drops",
      productionCount: 18,
      topVideoId: "inspire-invisalign",
      videoSrc: "/videos/social-full-time-job-hero.mp4",
      previewImage: "/images/service-reels-real.jpg",
      deliverables: [
        "15–60 high-retention vertical reels delivered monthly",
        "Dynamic kinetic subtitles & custom sound design",
        "Hook-rate optimization & thumbnail design",
        "Omnichannel syndication strategy & analytics review"
      ]
    },
    {
      id: "event-coverage",
      number: "05",
      slug: "event-coverage",
      category: "LIVE EVENTS",
      tag: "REAL-TIME MEDIA",
      title: "Live Event & Arena Coverage",
      subtitle: "Multi-Camera Spectacles, QC Signs Tour & Zero-Latency Feeds",
      description: "Capture the electrifying energy of your conferences, summits, and arena spectacles. Multi-camera coverage, zero-latency broadcast feeds, facility tour vlogs, and rapid-turnaround highlight reels delivered while audience buzz is peaking.",
      format: "Arena Multi-Cam & Keynote Feed",
      equipment: "Wireless Low-Latency Transmitters & Stabilized Gimbals",
      turnaround: "24–48 Hours Same-Event",
      productionCount: 16,
      topVideoId: "imn-your-event",
      videoSrc: "/videos/imn-your-event-hero.mp4",
      previewImage: "/images/service-event-real.jpg",
      deliverables: [
        "Multi-cam stage coverage & audience reaction tracking",
        "Wireless low-latency video transmission for big screens",
        "Same-day highlight reels for immediate social push",
        "Full keynote documentation & executive sound feeds"
      ]
    },
    {
      id: "brand-blueprint",
      number: "06",
      slug: "brand-blueprint",
      category: "STRATEGY",
      tag: "POSITIONING ARCHITECTURE",
      title: "Brand Blueprint & Perception Strategy",
      subtitle: "Strategic Foundations Before Principal Photography",
      description: "Before you shoot, define the narrative. We conduct in-depth stakeholder audits, competitor perception mapping, and visual brand identity frameworks that ensure every production dollar compounds in enterprise value.",
      format: "Comprehensive Strategic Blueprint",
      equipment: "Executive Advisory & Perception Audits",
      turnaround: "10 Business Days",
      productionCount: 6,
      topVideoId: "0pWjzLQF3Ws",
      videoSrc: "/videos/consistent-content-hero.mp4",
      previewImage: "/images/brand-blueprint-package.webp",
      deliverables: [
        "Competitor perception & audience resonance audit",
        "Core narrative pillars & brand manifesto creation",
        "Visual moodboards, palette & art direction guidelines",
        "6-Month multi-platform distribution roadmap"
      ]
    },
    {
      id: "social-media-management",
      number: "07",
      slug: "social-media-management",
      category: "DISTRIBUTION",
      tag: "MANAGED CHANNELS",
      title: "Social Media Architecture & Management",
      subtitle: "Full-Funnel Distribution & Community Growth",
      description: "We don't just shoot content—we manage the entire distribution machine. From daily publishing schedules and platform-specific copywriting to community interaction, hashtag architecture, and paid amplification.",
      format: "Monthly Retainer Execution",
      equipment: "Dedicated Social Director & Growth Analytics",
      turnaround: "Continuous Weekly Cadence",
      productionCount: 3,
      topVideoId: "F16GSV9lt7Q",
      videoSrc: "/videos/consistent-content-hero.mp4",
      previewImage: "/images/service-blueprint-real.jpg",
      deliverables: [
        "Monthly content calendar & scheduled publishing",
        "Platform-specific copy, hashtags & keyword optimization",
        "Community management & audience engagement",
        "Monthly ROI & organic reach analytics reporting"
      ]
    },
    {
      id: "ad-campaigns",
      number: "08",
      slug: "ad-campaigns",
      category: "AD CAMPAIGNS",
      tag: "PERFORMANCE MARKETING",
      title: "Paid Video Ad Campaigns",
      subtitle: "High-Converting Commercials for Meta & YouTube",
      description: "Direct-response video creative built specifically to scale customer acquisition on Meta, YouTube, and LinkedIn. High-converting hooks, clear problem/solution frameworks, and disciplined split-testing.",
      format: "Multi-Variant Direct Response",
      equipment: "Multi-Ratio Ad Packaging (9:16, 1:1, 16:9)",
      turnaround: "Rapid Iterative Testing",
      productionCount: 3,
      topVideoId: "9mfkKdCe8bU",
      videoSrc: "/videos/hero-reel-drp.mp4",
      previewImage: "/images/build-your-brand-poster.jpg",
      deliverables: [
        "3 to 5 unique hook variations per campaign",
        "Direct-response CTA scripting & on-screen graphics",
        "Vertical (9:16) & horizontal (16:9) multi-aspect exports",
        "Creative fatigue monitoring & quarterly creative refreshes"
      ]
    }
  ];

  const filterCategories = [
    { label: "All Services", value: "ALL" },
    { label: "Commercials", value: "COMMERCIALS" },
    { label: "Podcasts", value: "PODCASTS" },
    { label: "Brand Stories", value: "BRAND STORIES" },
    { label: "Reels", value: "REELS" },
    { label: "Live Events", value: "LIVE EVENTS" },
    { label: "Strategy & Ads", value: "STRATEGY" }
  ];

  const filteredServices = activeFilter === 'ALL'
    ? services
    : services.filter(s => {
        if (activeFilter === 'STRATEGY') return s.category === 'STRATEGY' || s.category === 'DISTRIBUTION' || s.category === 'AD CAMPAIGNS';
        return s.category === activeFilter;
      });

  const capabilities = [
    {
      step: "01",
      title: "Narrative & Strategy",
      desc: "Stakeholder perception audits, competitor positioning, and cinematic scriptwriting crafted to solve revenue objectives."
    },
    {
      step: "02",
      title: "Hollywood Production",
      desc: "ARRI Alexa Mini LF, RED V-Raptor 8K, Cooke Anamorphic glass, soundstage facilities, and executive on-set direction."
    },
    {
      step: "03",
      title: "Color Science & Sound",
      desc: "DaVinci Resolve color suites calibrated for broadcast, DCP theatrical mastering, and custom audiophile sound design."
    },
    {
      step: "04",
      title: "Omnichannel Rollout",
      desc: "Platform-optimized 9:16 social cuts, YouTube SEO framing, paid ad variations, and disciplined distribution management."
    }
  ];

  const heroShorts = [
    {
      id: "f1-miami",
      videoId: "9mfkKdCe8bU",
      client: "Red Bull Miami F1",
      creator: "Justin Ortiz",
      creatorAvatar: "/images/justin-ortiz.jpg",
      tag: "F1 MIAMI",
      badge: "Cinematic Reel",
      title: "Ashaunte McLean Red Bull Miami F1",
      views: "18.4K",
      rotation: "rotate-[-3deg] md:rotate-[-4deg]",
      translateClass: "translate-y-2 sm:translate-y-4",
      timestamp: "0:45"
    },
    {
      id: "shoot360-clt",
      videoId: "sjIOG-eivgc",
      client: "Shoot 360 CLT",
      creator: "Shoot 360",
      creatorAvatar: "/images/justin-ortiz-set.jpg",
      tag: "SHOOT 360",
      badge: "Featured Short",
      title: "Charlotte Basketball Tryout Prep Clinic",
      views: "32.1K",
      isCenter: true,
      rotation: "rotate-0",
      translateClass: "translate-y-0",
      timestamp: "0:58"
    },
    {
      id: "docu-series",
      videoId: "RC5_Uxq3KJg",
      client: "Coach Mark Slay",
      creator: "IMN Productions",
      creatorAvatar: "/images/bryan-gee.jpg",
      tag: "DOCU-REEL",
      badge: "Trending",
      title: "Coach Mark Slay Docu-Series",
      views: "24.6K",
      rotation: "rotate-[3deg] md:rotate-[4deg]",
      translateClass: "translate-y-2 sm:translate-y-4",
      timestamp: "0:52"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main>
        {/* ========================================================
            1. REEL.AI-STYLE EDITORIAL HERO WITH 3 MOBILE SCREENS
        ======================================================== */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden relative">
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
            {/* Bold Centered Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-[#111111] leading-[1.12] mb-4 font-display">
              AI-Driven Conversion <br />
              Growth Right Away
            </h1>

            {/* Centered Subtitle */}
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed mb-6 font-light">
              From concept to conversion — manage and scale cinema video production, podcast installations, and high-converting ads seamlessly.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#111111] text-white font-medium text-sm hover:bg-soci-coral transition-all shadow-md hover:scale-105 active:scale-95"
              >
                Start a Project
              </button>

              <button
                onClick={() => onOpenVideo?.('1L9HU7yaonc', 'IMN Official Showreel')}
                className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-neutral-900 border border-neutral-300 font-medium text-sm hover:bg-neutral-50 transition-all shadow-sm active:scale-95"
              >
                Watch Agency Reel
              </button>
            </div>
          </div>

          {/* ========================================================
              3 MOBILE SCREENS HERO SHOWCASE (YouTube Shorts from @imnlightmentpro)
          ======================================================== */}
          <div className="relative max-w-5xl mx-auto my-4 sm:my-8 px-4 py-8 sm:py-14">
            {/* Ambient Sunburst Gradient Dome & Circular Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[760px] h-[320px] sm:h-[440px] bg-gradient-to-t from-amber-100/50 via-rose-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] border border-neutral-200/50 rounded-full pointer-events-none -z-10" />

            {/* 3 Mobile Screens Grid / Flex */}
            <div className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
              {heroShorts.map((phone) => (
                <div
                  key={phone.id}
                  onClick={() => onOpenVideo?.(phone.videoId, phone.title)}
                  className={`relative ${
                    phone.isCenter
                      ? 'w-[125px] xs:w-[145px] sm:w-[210px] md:w-[245px] lg:w-[265px] z-20 scale-[1.04] sm:scale-105 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)]'
                      : 'w-[110px] xs:w-[128px] sm:w-[185px] md:w-[215px] lg:w-[235px] z-10 shadow-2xl opacity-95 hover:opacity-100'
                  } aspect-[9/18.5] bg-neutral-950 rounded-[1.8rem] sm:rounded-[2.6rem] md:rounded-[2.9rem] p-1.5 sm:p-2.5 border-3 sm:border-4 border-neutral-800 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.08] hover:rotate-0 hover:z-30 hover:border-soci-coral ${phone.rotation} ${phone.translateClass}`}
                  title={`${phone.title} - Click to play with sound`}
                >
                  {/* Top Dynamic Island / Speaker Notch */}
                  <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-2 sm:h-3 bg-neutral-900 rounded-full z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 ml-auto mr-1" />
                  </div>

                  {/* Phone Screen with Auto-Playing YouTube Short */}
                  <div className="relative w-full h-full rounded-[1.4rem] sm:rounded-[2.1rem] md:rounded-[2.3rem] overflow-hidden bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${phone.videoId}?autoplay=1&mute=1&loop=1&playlist=${phone.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                      title={phone.title}
                      className="w-full h-full object-cover scale-[1.38] pointer-events-none select-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                      tabIndex={-1}
                    />

                    {/* Subtle Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/60 pointer-events-none" />

                    {/* Top Mobile Bar: Creator Info & Shorts / Live Badge */}
                    <div className="absolute top-4 sm:top-6 inset-x-1.5 sm:inset-x-2.5 z-10 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10 max-w-[70%] truncate">
                        <img
                          src={phone.creatorAvatar}
                          alt={phone.creator}
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full object-cover flex-shrink-0"
                        />
                        <span className="text-[8px] sm:text-[9px] font-medium text-white truncate">
                          {phone.creator}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-red-600/90 text-[7px] sm:text-[8px] font-bold text-white shadow-sm flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        {phone.isCenter ? 'Live' : 'Shorts'}
                      </span>
                    </div>

                    {/* Bottom Mobile Bar: Title & Views */}
                    <div className="absolute bottom-2.5 sm:bottom-4 inset-x-2 sm:inset-x-3 z-10 flex flex-col gap-0.5 sm:gap-1 pointer-events-none text-left">
                      <span className="text-[7px] sm:text-[10px] font-mono uppercase tracking-wider text-soci-coral font-bold line-clamp-1">
                        {phone.tag}
                      </span>
                      <p className="text-[8px] sm:text-[11px] font-semibold text-white leading-tight line-clamp-2 drop-shadow-md">
                        {phone.title}
                      </p>
                      <div className="flex items-center justify-between pt-1 border-t border-white/15 text-[7px] sm:text-[9px] font-mono text-neutral-300">
                        <span>{phone.views} views</span>
                        <span className="text-white font-bold group-hover:text-soci-coral transition-colors flex items-center gap-0.5">
                          ▶ Play
                        </span>
                      </div>
                    </div>

                    {/* Hover Click-to-Play Ripple Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-20">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-soci-coral text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-white font-bold bg-black/70 px-2.5 py-0.5 rounded-full border border-white/20">
                        Watch with Sound
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              BOTTOM: CLIENT LOGO STRIP (Matching Reel.ai Footer Bar)
          ======================================================== */}
          <div className="mt-10 sm:mt-16 pt-10 sm:pt-14 pb-2 border-t border-soci-border/60 max-w-5xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">ProcuraFind</span>
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">Marcus Johnson</span>
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">The Sovereign Mindset</span>
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">Edceptional Summit</span>
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">Frozen Kups</span>
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase">Charlotte Metro</span>
            </div>
          </div>
        </section>

        {/* Artemis Horizontal Filter Pills Bar */}
        <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-6 border-b border-soci-border">
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 border ${
                  activeFilter === cat.value
                    ? 'bg-soci-dark text-white border-soci-dark shadow-sm'
                    : 'bg-white text-soci-muted border-soci-border hover:border-soci-coral/60 hover:text-soci-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ========================================================
            2. THE ARTEMIS SIGNATURE 2-COLUMN SERVICE SHOWCASES
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-7xl mx-auto py-12">
          <div className="divide-y divide-soci-border">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
              >
                {/* Left Column: Context, Narrative & Strategic Specs */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Index & Category Tag */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono font-bold text-soci-coral tracking-widest">
                        {svc.number}
                      </span>
                      <span className="text-soci-border text-sm">/</span>
                      <span className="px-3 py-1 rounded-full bg-soci-cream border border-soci-border text-[11px] font-mono font-bold text-soci-dark uppercase tracking-wider">
                        {svc.tag}
                      </span>
                      <span className="text-xs font-mono text-soci-muted">
                        • {svc.productionCount} Productions
                      </span>
                    </div>

                    {/* Service Title */}
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-soci-dark tracking-tight mb-2 group-hover:text-soci-coral transition-colors">
                      <Link to={`/portfolio/${svc.slug}`}>
                        {svc.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm font-mono text-soci-coral font-medium uppercase tracking-wider mb-4">
                      {svc.subtitle}
                    </p>

                    {/* Narrative Description */}
                    <p className="text-soci-muted text-sm sm:text-base font-light leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mb-8 space-y-2.5 bg-white p-5 rounded-2xl border border-soci-border">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-soci-dark block mb-2">
                        Included Deliverables & Capabilities:
                      </span>
                      {svc.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-soci-dark leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-soci-coral flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs Pills Strip */}
                    <div className="flex flex-wrap items-center gap-2 mb-8 text-[11px] font-mono text-soci-muted">
                      <span className="px-3 py-1.5 rounded-xl bg-white border border-soci-border flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-soci-coral" />
                        <span>{svc.equipment}</span>
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-white border border-soci-border flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-soci-coral" />
                        <span>{svc.turnaround}</span>
                      </span>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      to={`/portfolio/${svc.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-soci-dark text-white font-medium text-xs font-mono uppercase tracking-wider hover:bg-soci-coral transition-all duration-200 shadow-sm"
                    >
                      <span>Explore Portfolio ({svc.productionCount} Films)</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-soci-dark font-medium text-xs font-mono uppercase tracking-wider border border-soci-border hover:border-soci-coral transition-all duration-200 shadow-sm"
                    >
                      <span>Commission Scope</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: High-Impact Artemis Showcase Media Container */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() => onOpenVideo(svc.topVideoId, svc.title, svc.videoSrc)}
                    onMouseEnter={(e) => {
                      const v = e.currentTarget.querySelector('video');
                      if (v) {
                        v.currentTime = 0;
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
                    className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-900 border border-soci-border shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group/media"
                  >
                    <img
                      src={
                        svc.previewImage ||
                        (svc.topVideoId && svc.topVideoId.length > 20
                          ? "/images/brand-blueprint-package.webp"
                          : `https://img.youtube.com/vi/${svc.topVideoId}/hqdefault.jpg`)
                      }
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover/media:brightness-100"
                      onError={(e) => {
                        e.currentTarget.src = svc.previewImage || "/images/brand-blueprint-package.webp";
                      }}
                    />

                    {svc.videoSrc && (
                      <video
                        src={svc.videoSrc}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 pointer-events-none"
                      />
                    )}

                    {/* Scrim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover/media:opacity-80 transition-opacity pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider border border-white/10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-soci-coral animate-pulse" />
                        Featured Reel
                      </span>

                      <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider border border-white/10">
                        {svc.format}
                      </span>
                    </div>

                    {/* Center Big Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-soci-dark flex items-center justify-center shadow-2xl group-hover/media:scale-110 group-hover/media:bg-soci-coral group-hover/media:text-white transition-all duration-300">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Bottom Floating Info */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] font-mono text-white/70 block uppercase tracking-wider">
                          Click to Launch Showreel
                        </span>
                        <h4 className="text-base sm:text-lg font-bold group-hover/media:text-soci-coral transition-colors line-clamp-1">
                          {svc.title} Showcase
                        </h4>
                      </div>

                      <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-soci-coral bg-black/60 px-3 py-1 rounded-full border border-white/10">
                        <span>FULL SCREEN 4K</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            2.5 EXECUTIVE SOUNDSTAGE PHOTOGRAPHY SHOWCASE (Three International)
        ======================================================== */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 bg-[#F1F5F9] border-t border-soci-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <Camera className="w-4 h-4 text-soci-coral" />
                  <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
                    EXECUTIVE BRAND PHOTOGRAPHY • SOUNDSTAGE A
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight">
                  Three International — Leadership Series
                </h2>
                <p className="text-soci-muted text-base sm:text-lg font-light mt-3">
                  High-converting executive portraits and brand authority photography captured in our Charlotte studio for global health enterprise Three International. Click any portrait for full-resolution preview.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-soci-coral bg-white px-4 py-2 rounded-full border border-soci-border shadow-sm self-start sm:self-auto">
                <Sparkles className="w-4 h-4" />
                <span>12 Global Executive Portraits</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {threeInternationalLeaders.map((leader, idx) => (
                <div
                  key={leader.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className="bg-white rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-2xl hover:border-soci-coral/40 transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-900 relative">
                    <img
                      src={leader.thumb}
                      alt={`${leader.name} - ${leader.role}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 group-hover:bg-soci-coral group-hover:border-soci-coral transition-colors shadow-lg scale-95 group-hover:scale-105">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>

                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-mono uppercase font-bold text-white border border-white/10 shadow-sm">
                      {leader.tag}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
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
        </section>

        {/* ========================================================
            3. TECHNICAL ARCHITECTURE & PRODUCTION MATRIX
        ======================================================== */}
        <section className="py-24 px-6 sm:px-12 bg-white border-y border-soci-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-3">
                END-TO-END EXECUTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight">
                Our Production Architecture
              </h2>
              <p className="text-soci-muted text-base sm:text-lg font-light mt-3">
                Every service adheres to disciplined filmmaking standards that ensure repeatable, scalable brand prestige.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-soci-cream border border-soci-border hover:border-soci-coral/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-soci-coral/40 font-mono block mb-4">
                      {cap.step}
                    </span>
                    <h3 className="text-xl font-bold text-soci-dark mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-soci-muted text-xs sm:text-sm font-light leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            4. ARTEMIS HIGH-CONVERTING BOTTOM CONVERSION SECTION
        ======================================================== */}
        <section className="py-24 sm:py-32 px-6 sm:px-12 bg-soci-dark text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Have a Project in Mind? Let&apos;s Build Together.
            </h2>

            <p className="text-white/70 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you need a national commercial campaign, an executive podcast soundstage, or high-velocity reels syndication, we engineer media that moves markets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-soci-coral text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0080CE] transition-all duration-200 shadow-xl hover:scale-105"
              >
                BOOK YOUR FREE BRAND REVIEW
              </button>

              <Link
                to="/business-visibility-scorecard"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider font-medium hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Calculate Visibility Score →
              </Link>
            </div>
          </div>
        </section>
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