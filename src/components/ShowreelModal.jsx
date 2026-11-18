import React, { useEffect } from 'react';
import { X, Film, Volume2 } from 'lucide-react';

const LOCAL_VIDEO_MAP = {
  'imn-your-event': '/videos/imn-your-event-audio.mp4',
  'consistent-content-foundation': '/videos/consistent-content-hero.mp4',
  'inspire-practice': '/videos/build-your-brand-hero.mp4',
  'inspire-handcraft': '/videos/tooth-by-hand-reel.mov',
  'inspire-invisalign': '/videos/invisalign-reel.mov',
  'inspire-most-expensive': '/videos/most-expensive-thing.mov',
  'inspire-michael-bay': '/videos/michael-bay-tiktok.mp4',
  'sugar-daddies-reel': '/videos/sugar-daddies.mp4',
  'inspire-tiktok-care': '/videos/i-love-you-tiktok.mp4',
  'inspire-handcraft-reel': '/videos/tooth-by-hand-reel.mov',
  'inspire-invisalign-ad': '/videos/invisalign-reel.mov',
  'emery-spotlight': '/videos/emery-solutions-spotlight.mp4',
  'build-your-brand': '/videos/build-your-brand-hero.mp4',
  'pfKaClJF5NU': '/videos/imn-your-event-audio.mp4'
};

export default function ShowreelModal({ isOpen, onClose, videoId = "1L9HU7yaonc", title = "Official IMN Showreel 2026", directSrc = null }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resolvedDirectSrc =
    directSrc ||
    LOCAL_VIDEO_MAP[videoId] ||
    (videoId && (videoId.endsWith('.mp4') || videoId.endsWith('.mov') || videoId.startsWith('/videos/')) ? videoId : null);

  const isDirect = !!resolvedDirectSrc;
  const isDrive = !isDirect && videoId && (videoId.startsWith('gdrive:') || /^1[a-zA-Z0-9_-]{25,45}$/.test(videoId));
  const driveId = isDrive ? videoId.replace('gdrive:', '') : null;
  const isYoutube = !isDirect && !isDrive && videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId);
  const videoSource = resolvedDirectSrc || (!isDrive && !isYoutube ? '/videos/imn-your-event-audio.mp4' : null);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.25)_0%,transparent_70%)] pointer-events-none" />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden glass-panel-glow border border-brand-cyan/40 shadow-[0_0_80px_rgba(0,112,243,0.4)]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface-elevated/90 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping" />
            <span className="text-white font-bold uppercase tracking-wider">{title}</span>
            <span className="text-neutral-500 hidden sm:inline-block">| DCI 4K STREAM</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          {isDirect ? (
            <video
              src={videoSource}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          ) : isDrive ? (
            <iframe
              className="w-full h-full"
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              title={title}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          ) : isYoutube ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1&enablejsapi=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoSource || '/videos/imn-your-event-audio.mp4'}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          )}
        </div>

        {/* Bottom Specs Bar */}
        <div className="px-6 py-3 bg-surface border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-400">
          <span>IMN LIGHTMENT PRODUCTIONS // CHARLOTTE, NC</span>
          <span className="text-brand-cyan uppercase">PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}

