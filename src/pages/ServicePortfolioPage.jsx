import React, { useState } from 'react';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import {
  Play,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Camera,
  Mic,
  Clock,
  Sliders,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import servicesData from '../data/imn_services_data.json';
import ImageLightboxModal from '../components/ImageLightboxModal';
import { threeInternationalLeaders } from '../data/three_international_data';

export default function ServicePortfolioPage({ slug, onOpenVideo, onOpenContact }) {
  const service = servicesData[slug] || servicesData['promotional-videos'];
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const isVertical = slug === 'social-reels';

  const serviceFallbacks = {
    'promotional-videos': '/images/service-promo-real.jpg',
    'commercial-production': '/images/service-commercial-real.jpg',
    'podcast-production': '/images/media-studio.jpg',
    'social-reels': '/images/invisalign-reel-cover.jpg',
    'event-coverage': '/images/service-event-real.jpg',
    'brand-blueprint': '/images/brand-blueprint-package.webp',
    'social-media-management': '/images/field-founders-real.jpg',
    'ad-campaigns': '/images/field-commercial-real.jpg'
  };
  const fallbackImg = serviceFallbacks[slug] || '/images/service-event-real.jpg';

  const items = service.items || [];
  const categories = ['ALL', ...new Set(items.map(it => it.category).filter(Boolean))];

  const filteredItems = activeCategory === 'ALL'
    ? items
    : items.filter(it => it.category === activeCategory);

  const featuredVideo = items[0] || { id: "1L9HU7yaonc", title: service.name };

  // All service keys for next-service pagination
  const serviceKeys = Object.keys(servicesData);
  const currentIdx = serviceKeys.indexOf(slug);
  const nextKey = serviceKeys[(currentIdx + 1) % serviceKeys.length];
  const nextService = servicesData[nextKey];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main>
        {/* ========================================================
            1. ARTEMIS-STYLE PROJECT DETAIL HERO
        ======================================================== */}
        <section className="pt-28 sm:pt-36 pb-12 px-6 sm:px-12 max-w-7xl mx-auto border-b border-soci-border">
          {/* Back Navigation & Breadcrumb */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-soci-muted hover:text-soci-coral transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>
          </div>

          {/* Editorial Title */}
          <div className="max-w-4xl mb-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-soci-dark tracking-tight leading-[1.08] mb-6">
              {service.name}
            </h1>
            <p className="text-soci-muted text-lg sm:text-2xl font-light leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Artemis Metadata Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-soci-border shadow-sm mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-soci-muted block mb-1">
                Standard Package
              </span>
              <span className="text-sm sm:text-base font-bold text-soci-dark flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-soci-coral" />
                4K / 8K Cinema Setup
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-soci-muted block mb-1">
                Audio & Color
              </span>
              <span className="text-sm sm:text-base font-bold text-soci-dark flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-soci-coral" />
                DaVinci Resolve
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-soci-muted block mb-1">
                Typical Turnaround
              </span>
              <span className="text-sm sm:text-base font-bold text-soci-dark flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-soci-coral" />
                7–14 Business Days
              </span>
            </div>

            <div className="flex items-center md:justify-end">
              <button
                onClick={onOpenContact}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-soci-coral text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0080CE] transition-all shadow-sm"
              >
                Book This Service
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. FEATURED SHOWCASE CINEMA / REEL PLAYER
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-7xl mx-auto py-12">
          <div
            onClick={() => {
              if (featuredVideo.isPhoto) {
                setSelectedPhotoIndex(0);
              } else {
                onOpenVideo(featuredVideo.id, featuredVideo.title, featuredVideo.videoSrc);
              }
            }}
            className={`relative rounded-3xl overflow-hidden bg-neutral-900 border border-soci-border shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
              isVertical ? 'aspect-[16/10] sm:aspect-[21/9]' : 'aspect-video sm:aspect-[21/9]'
            }`}
          >
            {isVertical ? (
              <>
                {/* Ambient Blurred Backdrop */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={featuredVideo.coverImage || fallbackImg}
                    alt=""
                    className="w-full h-full object-cover blur-3xl opacity-35 scale-125 brightness-50"
                  />
                </div>
                {/* Centered Vertical 9:16 Frame */}
                <div className="relative z-10 w-full h-full flex items-center justify-center py-6 sm:py-8">
                  <div className="relative h-full max-h-[380px] sm:max-h-[440px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={featuredVideo.coverImage || fallbackImg}
                      alt={featuredVideo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white text-soci-dark flex items-center justify-center shadow-2xl group-hover:bg-soci-coral group-hover:text-white transition-all">
                        <Play className="w-6 sm:w-7 h-6 sm:h-7 fill-current ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono tracking-wider border border-white/10">
                      9:16 4K REEL
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <img
                  src={
                    featuredVideo.coverImage ||
                    featuredVideo.image ||
                    (featuredVideo.id?.length > 20 || !featuredVideo.id?.match(/^[a-zA-Z0-9_-]{11}$/)
                      ? fallbackImg
                      : `https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`)
                  }
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92]"
                  onError={(e) => {
                    e.currentTarget.src = featuredVideo.coverImage || fallbackImg;
                  }}
                  onLoad={(e) => {
                    if (e.currentTarget.naturalWidth <= 120 && !featuredVideo.coverImage) {
                      e.currentTarget.src = fallbackImg;
                    }
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

                {/* Center Action Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white text-soci-dark flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-soci-coral group-hover:text-white transition-all duration-300">
                    {featuredVideo.isPhoto ? (
                      <Camera className="w-7 sm:w-10 h-7 sm:h-10 text-current" />
                    ) : (
                      <Play className="w-7 sm:w-10 h-7 sm:h-10 fill-current ml-1" />
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-soci-coral animate-pulse" />
                Featured Flagship {featuredVideo.isPhoto ? 'Gallery' : (isVertical ? 'Reel' : 'Film')}
              </span>
              <span className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider border border-white/10">
                {featuredVideo.isPhoto ? '12 Commercial Portraits' : (isVertical ? 'Vertical 9:16 Master' : '4K Cinema Master')}
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between text-white pointer-events-none">
              <div>
                <span className="text-xs font-mono text-white/70 block uppercase tracking-wider mb-1">
                  {featuredVideo.isPhoto ? 'Click to Inspect Gallery' : 'Click to Play in Full Screen'}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold tracking-tight">
                  {featuredVideo.title}
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold text-soci-coral bg-black/60 px-4 py-2 rounded-full border border-white/10">
                <span>{featuredVideo.isPhoto ? 'INSPECT 4K GALLERY' : (isVertical ? 'EXPAND 4K REEL' : 'EXPAND 4K SHOWREEL')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. COMPLETE CLIENT PRODUCTIONS GRID (All Real Videos)
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-7xl mx-auto py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-soci-border">
            <div>
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-2">
                FULL CATALOGUE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-soci-dark tracking-tight">
                All {service.name} Productions ({filteredItems.length})
              </h2>
            </div>

            {categories.length > 1 && (
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 border ${
                      activeCategory === cat
                        ? 'bg-soci-dark text-white border-soci-dark shadow-sm'
                        : 'bg-white text-soci-muted border-soci-border hover:border-soci-coral hover:text-soci-dark'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            className={`grid mb-20 ${
              isVertical
                ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
            }`}
          >
            {filteredItems.map((item, idx) => {
              const videoId = item.id;
              const isYoutubeId = videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId) && !item.videoSrc;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => {
                    if (item.isPhoto) {
                      setSelectedPhotoIndex(0);
                    } else {
                      onOpenVideo(videoId, item.title, item.videoSrc);
                    }
                  }}
                  className="bg-white rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  <div
                    className={`relative w-full overflow-hidden bg-neutral-900 ${
                      isVertical ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-video'
                    }`}
                  >
                    <img
                      src={
                        item.coverImage ||
                        item.image ||
                        (isYoutubeId
                          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                          : fallbackImg)
                      }
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.94]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = item.coverImage || fallbackImg;
                      }}
                      onLoad={(e) => {
                        if (e.currentTarget.naturalWidth <= 120 && !item.coverImage) {
                          e.currentTarget.src = fallbackImg;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`rounded-full bg-white text-soci-dark flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-soci-coral group-hover:text-white transition-all duration-300 ${
                        isVertical ? 'w-10 sm:w-12 h-10 sm:h-12' : 'w-12 h-12'
                      }`}>
                        {item.isPhoto ? (
                          <Camera className="w-5 h-5 text-current" />
                        ) : (
                          <Play className={`fill-current ml-0.5 ${isVertical ? 'w-4 sm:w-5 h-4 sm:h-5' : 'w-5 h-5'}`} />
                        )}
                      </div>
                    </div>

                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono uppercase tracking-wider border border-white/10">
                        {item.isPhoto ? '12 Portraits • Studio A' : (item.category || (isVertical ? `Reel #${idx + 1}` : `Film #${idx + 1}`))}
                      </span>
                    </div>
                  </div>

                  <div className={`flex-1 flex flex-col justify-between ${isVertical ? 'p-4 sm:p-5' : 'p-6'}`}>
                    <div>
                      <h4 className={`font-bold text-soci-dark mb-1 group-hover:text-soci-coral transition-colors line-clamp-1 ${
                        isVertical ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-soci-muted leading-relaxed font-light line-clamp-2 ${
                        isVertical ? 'text-[11px] sm:text-xs' : 'text-xs'
                      }`}>
                        {item.description || "Official production mastered and delivered by IMN Lightment Productions."}
                      </p>
                    </div>

                    <div className={`border-t border-soci-border flex items-center justify-between text-xs font-mono text-soci-coral font-bold ${
                      isVertical ? 'pt-3 mt-3' : 'pt-4 mt-4'
                    }`}>
                      <span>{item.isPhoto ? 'INSPECT GALLERY (12 PHOTOS)' : (isVertical ? 'WATCH REEL' : 'WATCH FILM')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            4. NEXT SERVICE PAGINATION (Artemis Style)
        ======================================================== */}
        {nextService && (
          <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-24">
            <Link
              to={`/portfolio/${nextKey}`}
              className="block p-8 sm:p-12 rounded-3xl bg-soci-dark text-white hover:bg-neutral-900 border border-neutral-800 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-soci-coral block mb-2">
                    NEXT SERVICE CAPABILITY →
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight group-hover:text-soci-coral transition-colors">
                    {nextService.name}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light mt-1">
                    Explore {nextService.items?.length || 0} additional production works
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-soci-coral transition-all">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          </section>
        )}
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