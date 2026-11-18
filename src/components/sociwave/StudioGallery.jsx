import React, { useState } from 'react';
import { Camera, Maximize2, X, Sparkles, MapPin } from 'lucide-react';

export default function StudioGallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Justin Ortiz Directing On Set",
      category: "ON SET",
      tag: "Directing",
      location: "Studio Stage A • Charlotte",
      image: "/images/justin-ortiz-set.jpg",
      span: "md:col-span-2 md:row-span-2",
      description: "Founder & Director Justin Ortiz leading production on stage with cinema lighting and multi-cam tracking."
    },
    {
      id: 2,
      title: "Director Justin Ortiz on Set",
      category: "ON SET",
      tag: "Directing",
      location: "Studio Stage A",
      image: "/images/justin-ortiz-set.jpg",
      span: "md:col-span-1 md:row-span-1",
      description: "Justin Ortiz directing high-profile talent and crafting intimate character beats."
    },
    {
      id: 3,
      title: "Keynote & Arena Multi-Cam Broadcast",
      category: "LIVE",
      tag: "Live Production",
      location: "Metro Convention Center",
      image: "/images/main-hall-speech.png",
      span: "md:col-span-1 md:row-span-1",
      description: "Multi-angle 4K broadcast feed capturing executive keynotes with zero latency."
    },
    {
      id: 4,
      title: "Post-Production & Color Suite",
      category: "STUDIO",
      tag: "DaVinci Resolve",
      location: "IMN Media Lab",
      image: "/images/media-studio.jpg",
      span: "md:col-span-1 md:row-span-1",
      description: "Color-calibrated mastering suite calibrated for broadcast and streaming standards."
    },
    {
      id: 5,
      title: "Showcase Event & Festival Production",
      category: "LIVE",
      tag: "Stage & Lights",
      location: "Live Pavilion",
      image: "/images/showcase-event.jpg",
      span: "md:col-span-1 md:row-span-1",
      description: "Dynamic stage lighting choreography paired with cinema-rig camera coverage."
    },
    {
      id: 6,
      title: "Anamorphic Cinema Rig & Motion Lab",
      category: "ON SET",
      tag: "Gear & Optics",
      location: "Creative Rig Lab",
      image: "/images/production-rig.jpg",
      span: "md:col-span-2 md:row-span-1",
      description: "High-speed stabilized gimbal and prime glass designed for athletic tracking and narrative impact."
    }
  ];

  const categories = ['ALL', 'ON SET', 'LIVE', 'STUDIO', 'PREMIERE'];

  const filteredItems = activeFilter === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 px-6 sm:px-12 bg-[#FFFFFF] border-b border-soci-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-soci-coral" />
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
                PRODUCTION GALLERY & SET STILLS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight">
              Behind the Lens at IMN
            </h2>
            <p className="text-soci-muted text-base sm:text-lg max-w-xl font-light mt-3">
              From packed cinema premieres and high-stakes arena keynotes to intimate director setups and mastering suites.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 border ${
                  activeFilter === cat
                    ? 'bg-soci-dark text-white border-soci-dark shadow-sm'
                    : 'bg-soci-card text-soci-muted border-soci-border hover:border-soci-coral/50 hover:text-soci-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[280px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item)}
              className={`group relative rounded-3xl overflow-hidden border border-soci-border bg-neutral-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${
                activeFilter === 'ALL' ? item.span : 'col-span-1'
              }`}
            >
              {/* Photo Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-100"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-soci-coral" />
                  {item.tag}
                </span>

                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                <div className="flex items-center gap-1 text-[11px] font-mono text-white/60 mb-1">
                  <MapPin className="w-3 h-3 text-soci-coral" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-soci-coral transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light mt-1.5 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-10 p-6 sm:p-8 bg-soci-cream rounded-3xl border border-soci-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-soci-coral/10 text-soci-coral flex items-center justify-center flex-shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase font-bold text-soci-coral tracking-wider">
                Full Cinema Gear Packages
              </p>
              <p className="text-sm font-semibold text-soci-dark">
                ARRI Alexa Mini LF, RED V-Raptor 8K, Cooke Anamorphic Primes, and heavy-duty Ronin 2 stabilization.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-soci-dark uppercase">
            <Sparkles className="w-4 h-4 text-soci-coral" />
            <span>Turnkey Production Worldwide</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-soci-coral transition-colors flex items-center justify-center"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[75vh] w-full flex items-center justify-center bg-black">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Caption in Lightbox */}
            <div className="p-6 bg-neutral-900 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-soci-coral mb-1">
                  <span>{lightboxImg.tag}</span>
                  <span>•</span>
                  <span>{lightboxImg.location}</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {lightboxImg.title}
                </h4>
                <p className="text-xs text-white/70 font-light mt-1">
                  {lightboxImg.description}
                </p>
              </div>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider flex-shrink-0">
                {lightboxImg.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

