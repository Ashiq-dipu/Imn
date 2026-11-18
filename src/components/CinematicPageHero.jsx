import React, { useState, useRef } from 'react';
import { Play, ArrowRight, ArrowUpRight, Sparkles, Volume2, VolumeX, ShieldCheck, Camera } from 'lucide-react';

export default function CinematicPageHero({
  badge = "CHARLOTTE, NC // CREATIVE MEDIA AGENCY",
  title = "Where Brands Come Alive",
  titleHighlight = "",
  subtitle = "We architect high-leverage visual content, turnkey podcast soundstages, and disciplined distribution systems that position category leaders.",
  stats = [],
  videoSrc = "/videos/slide-1.mp4",
  posterImage = "/images/justin-ortiz-set.jpg",
  videoBadge = "2026 SHOWREEL",
  videoCaption = "Director Justin Ortiz on Set",
  videoLocation = "Studio Stage A • Charlotte, NC",
  modalVideoId = "0pWjzLQF3Ws",
  modalVideoTitle = "Official IMN Agency Reel",
  onOpenVideo,
  onOpenContact,
  primaryCtaText = "Book Free Brand Review",
  secondaryCtaText = "Watch Agency Reel",
  telemetry = ["4K PRORES 4444", "ARRI / RED CINEMA", "CHARLOTTE SOUNDSTAGE"],
  cleanVideo = false
}) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-soci-coral/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Large Bold Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-soci-dark tracking-tight leading-[1.08] mb-6">
            {title}{' '}
            {titleHighlight && (
              <span className="text-soci-coral italic font-serif font-normal block sm:inline">
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Descriptive Narrative */}
          <p className="text-soci-muted text-lg sm:text-2xl font-light leading-relaxed max-w-2xl mb-8">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-soci-coral text-white font-medium text-sm hover:bg-[#0080CE] transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 group"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}

            {onOpenVideo && (
              <button
                onClick={() => onOpenVideo(modalVideoId, modalVideoTitle)}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white text-soci-dark font-medium text-sm border border-soci-border hover:border-soci-coral/60 transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <div className="w-5 h-5 rounded-full bg-soci-coral/10 text-soci-coral flex items-center justify-center group-hover:bg-soci-coral group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>{secondaryCtaText}</span>
              </button>
            )}
          </div>

          {/* Quick Stats Chips */}
          {stats.length > 0 && (
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-soci-border">
              {stats.map((st, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-soci-dark tracking-tight">
                    {st.value}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-soci-coral">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Interactive Cinema Reel Showcase Card */}
        <div className="lg:col-span-5 relative">
          <div
            onClick={() => onOpenVideo && onOpenVideo(modalVideoId, modalVideoTitle)}
            className="group relative aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-soci-border shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
          >
            {/* Background Looping Cinema Video */}
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterImage}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${
                cleanVideo ? '' : 'filter brightness-[0.92] group-hover:brightness-100'
              }`}
            />

            {!cleanVideo && (
              <>
                {/* Gradient Scrims */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 group-hover:via-black/10 transition-colors" />

                {/* Top Telemetry Overlay */}
                <div className="absolute top-5 inset-x-5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-soci-coral animate-ping" />
                    {videoBadge}
                  </span>

                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-white/70 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <span>HD CINEMA</span>
                  </span>
                </div>

                {/* Center Pulsing Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-soci-dark flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-soci-coral group-hover:text-white transition-all duration-300">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom Telemetry & Film Info */}
                <div className="absolute bottom-5 inset-x-5 z-10 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-soci-coral uppercase tracking-wider mb-1">
                    <span>{videoLocation}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3 group-hover:text-soci-coral transition-colors line-clamp-1">
                    {videoCaption}
                  </h3>

                  {/* Hardware Telemetry Specs */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10 text-[9px] font-mono text-white/70">
                    {telemetry.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Decorative Floating Corner Badge */}
          {!cleanVideo && (
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl border border-soci-border shadow-xl flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-soci-coral/10 text-soci-coral flex items-center justify-center flex-shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase font-bold text-soci-coral tracking-wider">
                  Full-Crew Production
                </p>
                <p className="text-xs font-bold text-soci-dark">
                  Charlotte Soundstage & Stage A
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
