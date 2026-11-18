import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, UserCheck } from 'lucide-react';

export default function ImageLightboxModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onSelectIndex
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1) {
        onSelectIndex((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight" && images.length > 1) {
        onSelectIndex((currentIndex + 1) % images.length);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, currentIndex, images.length, onSelectIndex]);

  if (!isOpen || !images.length) return null;

  const current = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Background radial accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,148,239,0.18)_0%,transparent_75%)] pointer-events-none" />

      {/* Main Container - Hugs content cleanly */}
      <div className="relative w-auto max-w-[95vw] md:max-w-3xl flex flex-col rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.85)] z-10">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0094EF] animate-pulse" />
            <span className="text-white font-bold tracking-wider uppercase">
              {current.name || "Executive Portrait"}
            </span>
            <span className="text-white/40 hidden sm:inline-block">|</span>
            <span className="text-[#0094EF] hidden sm:inline-block font-semibold">
              Three International Leadership Series
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/50 text-[11px] font-mono">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Central Image Viewer - Guaranteed Native Proportion with Zero Cropping */}
        <div className="relative flex items-center justify-center bg-black/95 p-3 sm:p-5 overflow-hidden">
          <img
            src={current.src}
            alt={current.name}
            className="rounded-xl shadow-2xl select-none mx-auto transition-all duration-300 block"
            style={{
              maxHeight: 'min(68vh, 650px)',
              maxWidth: 'min(82vw, 550px)',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              aspectRatio: 'auto'
            }}
          />

          {/* Left Arrow */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectIndex((currentIndex - 1 + images.length) % images.length);
              }}
              className="absolute left-3 sm:left-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-[#0094EF] text-white flex items-center justify-center border border-white/20 shadow-xl transition-all duration-200"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectIndex((currentIndex + 1) % images.length);
              }}
              className="absolute right-3 sm:right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-[#0094EF] text-white flex items-center justify-center border border-white/20 shadow-xl transition-all duration-200"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Information Strip */}
        <div className="px-5 py-3 sm:py-3.5 bg-neutral-950 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0094EF]/20 border border-[#0094EF]/30 flex items-center justify-center text-[#0094EF] flex-shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                {current.name}
              </h3>
              <p className="text-white/60 text-[11px] font-mono">
                {current.role || "Executive Leadership"} • Three International
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-white/50">
            <span className="flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#0094EF]" />
              IMN Soundstage A
            </span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
              Ultra 4K WebP
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
