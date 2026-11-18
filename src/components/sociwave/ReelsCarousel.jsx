import React, { useState } from 'react';
import { Play, ArrowUpRight, Eye, DollarSign, ShieldCheck, TrendingUp } from 'lucide-react';
import { InstagramIcon } from '../SocialIcons';

export default function ReelsCarousel({ onSelectVideo }) {
  const [hoveredReel, setHoveredReel] = useState(null);

  const reels = [
    {
      id: "shoot360",
      tag: "SPORTS",
      title: "Shoot 360 Charlotte",
      videoId: "sjIOG-eivgc",
      views: "2.4M views",
      metric: "$48k sales",
      handle: "shoot360clt",
      avatar: "/images/sports-hero-portrait.jpg"
    },
    {
      id: "redbull-f1",
      tag: "F1 MIAMI",
      title: "Red Bull Experience",
      videoId: "9mfkKdCe8bU",
      views: "4.8M views",
      metric: "+320% reach",
      handle: "redbullracing",
      avatar: "/images/field-event-crowd.webp"
    },
    {
      id: "coach-mark-slay",
      tag: "DOCU-REEL",
      title: "Coach Mark Slay",
      videoId: "RC5_Uxq3KJg",
      views: "1.2M views",
      metric: "6.2x ROAS",
      handle: "coachmarkslay",
      avatar: "/images/bryan-gee.jpg"
    },
    {
      id: "frozen-kups",
      tag: "BRAND",
      title: "Frozen Kups",
      videoId: "F16GSV9lt7Q",
      views: "980K views",
      metric: "$34k sales",
      handle: "frozenkups",
      avatar: "/images/service-promo.webp"
    },
    {
      id: "edceptional-drpaul",
      tag: "SUMMIT",
      title: "Edceptional Summit",
      videoId: "q_jbXNudGuA",
      views: "1.6M views",
      metric: "94% booked",
      handle: "edceptional",
      avatar: "/images/showcase-event.jpg"
    },
    {
      id: "dr-paul-sovereign",
      tag: "PODCAST",
      title: "The Sovereign Mindset",
      videoId: "oiu4XcBTKJI",
      views: "3.1M views",
      metric: "120k subs",
      handle: "drpaulmiller",
      avatar: "/images/podcast-session-intimate.jpg"
    },
    {
      id: "charter-champions",
      tag: "DOCU-SERIES",
      title: "Beyond The Trophy",
      videoId: "jBR6lkrkDbs",
      views: "2.9M views",
      metric: "+450% leads",
      handle: "charterchampions",
      avatar: "/images/field-bts-director.webp"
    },
    {
      id: "corpcon-brand",
      tag: "CONFERENCE",
      title: "Corpcon Annual",
      videoId: "1L9HU7yaonc",
      views: "1.4M views",
      metric: "$110k closed",
      handle: "corpcon",
      avatar: "/images/main-hall-speech.png"
    }
  ];

  // Alternating indices that auto-play simultaneously so that across the visible screen (4-6 cards),
  // at least 2 to 3 reels are always actively playing video in motion.
  const AUTO_PLAY_INDICES = [1, 3, 5, 7];

  // Duplicate for seamless infinite auto-scroll
  const loopReels = [...reels, ...reels];

  return (
    <section id="reels" className="pt-24 pb-20 sm:pt-32 sm:pb-24 bg-[#F1F5F9] overflow-hidden border-b border-soci-border">
      {/* Videfo-style Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 sm:mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-soci-border mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-soci-coral animate-pulse" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-soci-dark">
                Recent Works • Short-Form Engine
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight leading-[1.1] mb-3">
              High-Converting Short-Form Assets that turn{' '}
              <span className="text-soci-coral underline decoration-soci-coral/30 underline-offset-8">
                views
              </span>{' '}
              into customers
            </h2>
            <p className="text-soci-muted text-base sm:text-lg font-light max-w-2xl">
              The power of high-retention cinematic hooks and everyday use in building unshakeable audience trust.
            </p>
          </div>

          {/* Social link pill */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start lg:self-end">
            <a
              href="https://www.instagram.com/imnlightment/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-soci-border text-xs font-mono font-bold text-soci-dark hover:border-soci-coral hover:text-soci-coral transition-all shadow-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-soci-coral" />
              <span>@imnlightment/reels</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2 font-mono text-xs text-soci-muted bg-white/60 px-3 py-1.5 rounded-full border border-soci-border">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-bold text-soci-dark">AUTOPLAYING</span>
              <span>• HOVER TO PAUSE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Slider with Videfo Card Styling */}
      <div className="w-full overflow-hidden group select-none">
        <div className="flex w-max space-x-5 sm:space-x-6 animate-marquee group-hover:[animation-play-state:paused] py-4">
          {loopReels.map((reel, idx) => {
            const isHovered = hoveredReel === `${reel.id}-${idx}`;
            const isAutoPlaying = AUTO_PLAY_INDICES.includes(idx % reels.length);
            const isPlaying = isHovered || isAutoPlaying;

            return (
              <div
                key={`${reel.id}-${idx}`}
                onMouseEnter={() => setHoveredReel(`${reel.id}-${idx}`)}
                onMouseLeave={() => setHoveredReel(null)}
                onClick={() => onSelectVideo(reel.videoId, reel.title)}
                className={`relative flex-shrink-0 w-[220px] sm:w-[250px] aspect-[9/15] rounded-[1.75rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] bg-neutral-950 border ${
                  isPlaying ? 'border-soci-coral/70 ring-2 ring-soci-coral/20' : 'border-black/20'
                }`}
              >
                {/* 1. Fast, High-Performance Poster Image (underneath) */}
                <img
                  src={`https://img.youtube.com/vi/${reel.videoId}/hqdefault.jpg`}
                  alt={reel.title}
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-105"
                  loading="lazy"
                />

                {/* 2. Embedded Video (Autoplaying for designated reels + hovered) */}
                {isPlaying && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none animate-fadeIn">
                    <iframe
                      className="w-[300%] h-[100%] -ml-[100%] scale-150 pointer-events-none filter brightness-95 contrast-105"
                      src={`https://www.youtube.com/embed/${reel.videoId}?autoplay=1&mute=1&loop=1&playlist=${reel.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                      allow="autoplay; encrypted-media"
                      title={reel.title}
                    />
                  </div>
                )}

                {/* Scrim overlays (Top & Bottom dark gradient for maximum readability) */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Top Videfo Metric Badges: Views & Sales/ROAS */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
                  {/* Views badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white shadow-sm">
                    <Eye className="w-3 h-3 text-soci-coral" />
                    <span className="font-mono text-[10px] font-bold tracking-tight">
                      {reel.views}
                    </span>
                  </div>

                  {/* Revenue / ROAS badge */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-emerald-400 shadow-sm">
                    <TrendingUp className="w-3 h-3" />
                    <span className="font-mono text-[10px] font-bold tracking-tight">
                      {reel.metric}
                    </span>
                  </div>
                </div>

                {/* Center Hover Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none">
                  <div className="w-13 h-13 rounded-full bg-white/90 text-soci-dark flex items-center justify-center shadow-2xl backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 fill-soci-dark ml-0.5 text-soci-dark" />
                  </div>
                </div>

                {/* Bottom Videfo Author Pill */}
                <div className="absolute bottom-3.5 inset-x-3.5 z-10 pointer-events-none flex items-center justify-between gap-2 p-2 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 text-white shadow-lg">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={reel.avatar}
                      alt={reel.handle}
                      className="w-7 h-7 rounded-full object-cover border border-white/20 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate tracking-tight">
                        {reel.handle}
                      </p>
                      <p className="text-[9px] font-mono text-white/60 truncate uppercase">
                        {reel.title}
                      </p>
                    </div>
                  </div>

                  {/* Verified Trust Shield Icon */}
                  <div className="flex-shrink-0 text-soci-coral">
                    <ShieldCheck className="w-4 h-4 fill-soci-coral/20" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}