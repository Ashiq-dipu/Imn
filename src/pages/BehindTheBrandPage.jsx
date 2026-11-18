import React, { useState } from 'react';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import CinematicPageHero from '../components/CinematicPageHero';
import ImageLightboxModal from '../components/ImageLightboxModal';
import { threeInternationalLeaders } from '../data/three_international_data';
import { Mic, Video, Users, MessageSquare, Play, Sparkles, ArrowUpRight, Volume2, VolumeX, Camera, Award, ZoomIn } from 'lucide-react';

export default function BehindTheBrandPage({ onOpenVideo, onOpenContact }) {
  const [unmutedShort, setUnmutedShort] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const podcastShorts = [
    {
      id: "short-invisalign",
      title: "Inspire Dentistry: Invisalign Transformation",
      tag: "CLINICAL REEL",
      videoSrc: "/videos/invisalign-reel.mov",
      coverImage: "/images/invisalign-reel-cover.jpg",
      topic: "Smile Aesthetics"
    },
    {
      id: "short-expensive",
      title: "Most Expensive Thing I Own",
      tag: "VIRAL HOOK",
      videoSrc: "/videos/most-expensive-thing.mov",
      coverImage: "/images/most-expensive-thing-cover.jpg",
      topic: "Practice Value"
    },
    {
      id: "short-tooth",
      title: "Crafting Dental Precision by Hand",
      tag: "CRAFTSMANSHIP",
      videoSrc: "/videos/tooth-by-hand-reel.mov",
      coverImage: "/images/crafting-brands.jpg",
      topic: "Restorative Art"
    },
    {
      id: "short-bay",
      title: "Michael Bay Cinematic Practice Cut",
      tag: "DYNAMIC CUT",
      videoSrc: "/videos/michael-bay-tiktok.mp4",
      coverImage: "/images/sports-action-2.jpg",
      topic: "High-Octane Visuals"
    },
    {
      id: "short-1",
      title: "The Power of Visual Leverage",
      tag: "STUDIO REEL 01",
      videoSrc: "/videos/podcast-clip-1.mp4",
      coverImage: "/images/podcast-studio-wide.jpg",
      topic: "Perceived Value"
    },
    {
      id: "short-3",
      title: "Audio Mastering in Soundstage A",
      tag: "STUDIO REEL 03",
      videoSrc: "/videos/podcast-clip-3.mp4",
      coverImage: "/images/podcast-session-intimate.jpg",
      topic: "Acoustic Engineering"
    }
  ];

  const podcastEpisodes = [
    {
      id: "1gVkhCWVDM1Ly-RZoSE3QYMAAjsidfXJl",
      title: "Just-In Focus: Charlie Interview (2025 Edition)",
      speaker: "Justin Ortiz & Charlie",
      tag: "JUST-IN FOCUS",
      duration: "48 Mins",
      customImage: "/images/justin-ortiz-set.jpg",
      description: "An intimate, unfiltered founder dialogue exploring business conviction, brand momentum, and the craft of authentic visual storytelling."
    },
    {
      id: "VwcfP1qsASw",
      title: "The Expert's Edge: Brand Equity Through Cinema",
      speaker: "Justin Ortiz & Brian G.",
      tag: "EPISODE 01",
      duration: "42 Mins",
      description: "Our co-founders break down how visual framing changes client perceived value, why commodity video fails, and how to command high-ticket pricing through visual leverage."
    },
    {
      id: "aIMPZTfp1z0",
      title: "Voice of Authority: The Anatomy of High-Converting Commercials",
      speaker: "Justin Ortiz & Special Guest",
      tag: "EPISODE 02",
      duration: "38 Mins",
      description: "Deconstructing scriptwriting, pacing, anamorphic lens selection, and audience psychology for modern commercial spots."
    },
    {
      id: "FLWL1GPW88Y",
      title: "Deep Dive Session: Turning Clinical Knowledge into Media Assets",
      speaker: "Dr. Paul Miller & Justin Ortiz",
      tag: "EPISODE 03",
      duration: "51 Mins",
      description: "How top medical and enterprise executives can scale personal authority and patient acquisition with multi-camera podcast architectures."
    },
    {
      id: "GMgp5hQ_Kcg",
      title: "Thought Leadership Hour: NIL Deals & Athlete Storytelling",
      speaker: "Marcus Johnson & IMN Team",
      tag: "EPISODE 04",
      duration: "35 Mins",
      description: "How documentary storytelling helped high-performing collegiate athletes close high-ticket endorsement deals within weeks of release."
    }
  ];

  const btsStills = [
    { title: "Justin Ortiz Directing on Stage A", image: "/images/justin-ortiz-set.jpg", tag: "DIRECTING" },
    { title: "Post-Production Color Science Room", image: "/images/media-studio.jpg", tag: "DAVINCI RESOLVE" },
    { title: "Convention Center Multi-Cam Broadcast", image: "/images/main-hall-speech.png", tag: "LIVE STAGE" },
    { title: "Acoustic Multi-Cam Podcast Suite", image: "/images/podcast-studio-wide.jpg", tag: "PODCAST SUITE" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main>
        {/* ========================================================
            1. CINEMATIC PODCAST & BTS HERO
        ======================================================== */}
        <CinematicPageHero
          title="Go Behind the Lens with"
          titleHighlight="IMN Creators."
          subtitle="Explore our flagship podcast series, intimate behind-the-scenes set moments, director commentary from Justin Ortiz & Bryan Gee, and the strategic thinking behind high-growth brand perception."
          stats={[
            { value: "4", label: "Flagship Episodes" },
            { value: "Shure SM7B", label: "Acoustic Audio" },
            { value: "4K Multi-Cam", label: "Studio Setup" }
          ]}
          videoSrc="/videos/build-your-brand-hero.mp4"
          posterImage="/images/build-your-brand-poster.jpg"
          modalVideoId="VwcfP1qsASw"
          modalVideoTitle="The Expert's Edge: Brand Equity Through Cinema"
          onOpenVideo={onOpenVideo}
          onOpenContact={onOpenContact}
          primaryCtaText="Book Studio Recording"
          secondaryCtaText="Play Episode 01 (42m)"
          cleanVideo={true}
        />

        <div className="py-8 px-6 sm:px-12 max-w-6xl mx-auto">

        {/* Section 1: Official Podcast Episodes */}
        <div className="mb-24">
          <h2 className="text-3xl font-extrabold text-soci-dark mb-8">
            The IMN Podcast Series
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {podcastEpisodes.map((ep) => (
              <div
                key={ep.id}
                className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div
                  onClick={() => onOpenVideo(ep.id, ep.title)}
                  className="relative aspect-video w-full overflow-hidden bg-neutral-900 cursor-pointer"
                >
                  <img
                    src={ep.customImage || `https://img.youtube.com/vi/${ep.id}/hqdefault.jpg`}
                    alt={ep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/images/justin-ortiz-set.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-soci-coral text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    {ep.tag} • {ep.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-soci-dark flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-soci-coral group-hover:text-white transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-soci-coral font-semibold mb-1">
                      {ep.speaker}
                    </div>
                    <h3
                      onClick={() => onOpenVideo(ep.id, ep.title)}
                      className="text-xl font-bold text-soci-dark hover:text-soci-coral transition-colors cursor-pointer mb-3"
                    >
                      {ep.title}
                    </h3>
                    <p className="text-soci-muted text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {ep.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-soci-border flex items-center justify-between">
                    <span className="text-[11px] font-mono text-soci-muted">
                      Turnkey Soundstage Studio
                    </span>
                    <button
                      onClick={() => onOpenVideo(ep.id, ep.title)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-soci-coral hover:text-soci-dark transition-colors"
                    >
                      <span>Listen / Watch</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1.5: Viral Studio Podcast Reels (Direct from Google Drive Studio Archive) */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-soci-dark tracking-tight mb-2">
                Flagship Studio Reels
              </h2>
              <p className="text-soci-muted text-sm sm:text-base font-light max-w-2xl">
                Vertical 9:16 micro-narratives engineered in our Charlotte acoustic soundstage. Click any clip to toggle audio.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soci-coral/10 text-soci-coral font-mono text-xs font-bold self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-soci-coral animate-ping" />
              4K Multi-Cam Capture
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {podcastShorts.map((short) => {
              const isUnmuted = unmutedShort === short.id;
              return (
                <div
                  key={short.id}
                  onClick={() => setUnmutedShort(isUnmuted ? null : short.id)}
                  onMouseEnter={(e) => {
                    const v = e.currentTarget.querySelector('video');
                    if (v) {
                      if (!isUnmuted) v.muted = true;
                      v.play().catch(() => {});
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isUnmuted) {
                      const v = e.currentTarget.querySelector('video');
                      if (v) { v.pause(); v.currentTime = 0; }
                    }
                  }}
                  className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer relative"
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={short.coverImage || "/images/crafting-brands.jpg"}
                      alt={short.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92]"
                    />

                    <video
                      src={short.videoSrc}
                      loop
                      muted={!isUnmuted}
                      playsInline
                      preload="none"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        isUnmuted ? 'opacity-100 z-10' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />

                    {/* Subtle Bottom Gradient Scrim for Legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                    {/* Top Sound Toggle */}
                    <div className="absolute top-3 right-3 z-20">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUnmutedShort(isUnmuted ? null : short.id);
                        }}
                        className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-md group-hover:bg-soci-coral group-hover:border-soci-coral transition-colors"
                        aria-label="Toggle sound"
                      >
                        {isUnmuted ? (
                          <Volume2 className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <VolumeX className="w-3.5 h-3.5 opacity-80" />
                        )}
                      </button>
                    </div>

                    {/* Minimal Clean Title */}
                    <div className="absolute bottom-3 inset-x-3 z-10 text-white pointer-events-none">
                      <h3 className="text-xs sm:text-sm font-semibold leading-snug drop-shadow line-clamp-2 group-hover:text-soci-coral transition-colors">
                        {short.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Executive Soundstage Showcase — Three International Leadership Series */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-soci-dark tracking-tight mb-2">
                Three International — Executive Portrait Series
              </h2>
              <p className="text-soci-muted text-sm sm:text-base font-light max-w-2xl">
                Commissioned studio portraiture and executive brand assets captured on IMN Soundstage A for global nutrition & wellness leader Three International. Tap any portrait to inspect master full-resolution lighting.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soci-coral/10 text-soci-coral font-mono text-xs font-bold self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5" />
              12 Global Executives
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {threeInternationalLeaders.map((leader, idx) => (
              <div
                key={leader.id}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-2xl hover:border-soci-coral/40 transition-all duration-300 flex flex-col group cursor-pointer relative"
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

        {/* Section 3: BTS Still Production Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-soci-dark mb-4">
            The Moments Between the Takes
          </h2>
          <p className="text-soci-muted text-sm sm:text-base font-light mb-8 max-w-2xl">
            Real snapshots from our sets, lighting configurations, director monitors, and live client premieres.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {btsStills.map((st, idx) => (
              <div
                key={idx}
                className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-sm group flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={st.image}
                    alt={st.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-soci-coral block mb-1">
                    {st.tag}
                  </span>
                  <h4 className="text-sm font-bold text-soci-dark leading-snug">
                    {st.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
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

