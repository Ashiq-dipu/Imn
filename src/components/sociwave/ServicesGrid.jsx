import React from 'react';
import { Film, Clapperboard, Mic, Target, Award, Video, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesGrid() {
  const services = [
    {
      title: "Commercials & Brand Films",
      icon: Film,
      tags: ["Ideation", "Cinematography", "ARRI / RED", "4K Mastering"],
      desc: "We craft engaging, on-brand cinematic commercials built for advertising campaigns, websites, and broadcast TV.",
      image: "/images/service-commercial-real.jpg",
      video: "/videos/emery-solutions-spotlight.mp4",
      link: "/portfolio/commercial-production"
    },
    {
      title: "Podcast Studio Production",
      icon: Mic,
      tags: ["Multi-Cam", "Mastering", "Shorts", "Soundstage"],
      desc: "Broadcast-grade 4K multi-camera studio recording, acoustic audio mastering, and automated viral repurposing.",
      image: "/images/media-studio.jpg",
      video: "/videos/podcast-clip-1.mp4",
      link: "/portfolio/podcast-production"
    },
    {
      title: "Promotional Video Content",
      icon: Target,
      tags: ["1 & 2 Camera", "Interviews", "Brand Stories", "Color Grading"],
      desc: "Cinematic brand spotlights and founder interviews that connect emotionally and position your business as an industry benchmark.",
      image: "/images/service-promo-real.jpg",
      video: "/videos/build-your-brand-hero.mp4",
      link: "/portfolio/promotional-videos"
    },
    {
      title: "Viral Social Reels & Short-Form",
      icon: Award,
      tags: ["30 Reels / Mo", "9:16 Matrix", "Kinetic Hooks", "Algorithm Velocity"],
      desc: "High-retention 9:16 social reels engineered to disrupt feeds, drive conversions, and build digital authority.",
      image: "/images/service-reels-real.jpg",
      video: "/videos/social-full-time-job-hero.mp4",
      link: "/portfolio/social-reels"
    },
    {
      title: "Live Event & Summit Coverage",
      icon: Video,
      tags: ["Field Directing", "Mainstage", "Interviews", "Recaps"],
      desc: "Multi-angle 4K coverage capturing executive keynotes, festivals, and galas with the energy of a live broadcast.",
      image: "/images/service-event-real.jpg",
      video: "/videos/imn-your-event-hero.mp4",
      link: "/portfolio/event-coverage"
    },
    {
      title: "Brand Blueprint & Strategy",
      icon: Clapperboard,
      tags: ["Positioning", "Omnichannel", "Ad Rollout", "Turnkey"],
      desc: "Comprehensive brand identity, promotional film assets, podcast episodes, and 30 reels/mo distribution engine.",
      image: "/images/brand-blueprint-package.webp",
      video: "/videos/consistent-content-hero.mp4",
      link: "/portfolio/brand-blueprint"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-soci-cream border-y border-soci-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-4">
              Grow with IMN services
            </h2>
            <p className="text-soci-muted text-base sm:text-lg max-w-2xl font-light">
              We engineer cinema-grade visual content & manage distribution systems that transform brand perception into enterprise revenue.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-soci-dark text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-soci-coral transition-colors w-fit flex-shrink-0"
          >
            <span>Explore All 8 Portfolios</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6x Rich Image + Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo / Video Header with Zero-Latency Hover Playback */}
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 group/media cursor-pointer"
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
                      src={srv.image}
                      alt={srv.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-[0.94]"
                    />
                    {srv.video && (
                      <video
                        src={srv.video}
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 filter brightness-[0.92] pointer-events-none"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-soci-coral shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-soci-dark mb-2 group-hover:text-soci-coral transition-colors">
                      <Link to={srv.link}>{srv.title}</Link>
                    </h3>
                    <p className="text-soci-muted text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {srv.desc}
                    </p>

                    {/* Pill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-soci-border">
                      {srv.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full bg-[#F1F5F9] border border-soci-border text-[11px] font-mono text-soci-muted font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-7 pb-6">
                  <Link
                    to={srv.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-soci-coral hover:text-soci-dark transition-colors"
                  >
                    <span>View Portfolio Reel</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
