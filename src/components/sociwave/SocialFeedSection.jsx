import React from 'react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../SocialIcons';
import { ArrowUpRight, Play, Heart, MessageCircle, ExternalLink } from 'lucide-react';

export default function SocialFeedSection({ onSelectVideo }) {
  const socialPosts = [
    {
      id: "ig-1",
      platform: "instagram",
      type: "FOUNDER STRATEGY",
      title: "Justin Ortiz & Bryan Gee — Content Engine",
      caption: "IMN founders breaking down omni-channel distribution systems and cinema-grade brand architecture for enterprise founders.",
      image: "/images/field-founders-real.jpg",
      link: "https://www.instagram.com/imnlightment/reels/",
      likes: "1,420",
      comments: "108",
      videoId: "/videos/consistent-content-audio.mp4"
    },
    {
      id: "ig-2",
      platform: "instagram",
      type: "COMMERCIAL FILM",
      title: "Dr. Emery & Emery Solutions Commercial Spotlight",
      caption: "Cinema-grade commercial production capturing Dr. Emery's clinical wellness line and healthcare authority.",
      image: "/images/field-commercial-real.jpg",
      link: "https://www.instagram.com/imnlightment/reels/",
      likes: "1,180",
      comments: "86",
      videoId: "/videos/emery-solutions-spotlight.mp4"
    },
    {
      id: "fb-1",
      platform: "facebook",
      type: "LIVE EVENT & KEYNOTE",
      title: "National Leadership Summit Arena Keynote",
      caption: "Multi-angle 4K arena coverage capturing executive mainstage keynotes and live leadership summit energy.",
      image: "/images/field-event-keynote-real.jpg",
      link: "https://www.facebook.com/Imnlightment/",
      likes: "640",
      comments: "52",
      videoId: "/videos/imn-your-event-audio.mp4"
    },
    {
      id: "fb-2",
      platform: "facebook",
      type: "VIRAL SOCIAL REELS",
      title: "High-Velocity 9:16 Social Campaign Engine",
      caption: "High-retention mobile short-form reels engineered to disrupt feeds, drive conversions, and command digital authority.",
      image: "/images/field-social-reels-real.jpg",
      link: "https://www.facebook.com/Imnlightment/",
      likes: "895",
      comments: "74",
      videoId: "/videos/social-full-time-job-audio.mp4"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFFFF] border-t border-soci-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-4">
              Real Moments from the Field
            </h2>
            <p className="text-soci-muted text-base sm:text-lg max-w-2xl font-light">
              Follow along as our crew travels across sets, sports facilities, soundstages, and premiere screenings across the Carolinas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/imnlightment/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-soci-card border border-soci-border text-xs font-mono font-bold text-soci-dark hover:border-soci-coral hover:text-soci-coral transition-colors shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.facebook.com/Imnlightment/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-soci-card border border-soci-border text-xs font-mono font-bold text-soci-dark hover:border-soci-coral hover:text-soci-coral transition-colors shadow-sm"
            >
              <FacebookIcon className="w-4 h-4 text-blue-600" />
              <span>Facebook</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4x Grid of Real Social Production Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image / Video Box */}
              <div
                onClick={() => onSelectVideo(post.videoId, post.title)}
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
                className="relative aspect-square w-full overflow-hidden bg-neutral-900 cursor-pointer group/media"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <video
                  src={post.videoId}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors pointer-events-none" />

                {/* Top Badge: Platform */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase flex items-center gap-1.5 border border-white/10">
                    {post.platform === 'instagram' ? (
                      <InstagramIcon className="w-3 h-3 text-pink-500" />
                    ) : (
                      <FacebookIcon className="w-3 h-3 text-blue-500" />
                    )}
                    <span>{post.type}</span>
                  </span>

                  <div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-soci-dark opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Engagement Overlay on Hover */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="flex items-center gap-3 font-mono text-[11px] bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-soci-coral fill-soci-coral" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-soci-dark text-sm leading-snug mb-2 group-hover:text-soci-coral transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-soci-muted text-xs leading-relaxed font-light line-clamp-2">
                    {post.caption}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-soci-border flex items-center justify-between">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-soci-coral hover:text-soci-dark font-semibold flex items-center gap-1"
                  >
                    <span>View on {post.platform === 'instagram' ? 'Instagram' : 'Facebook'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

