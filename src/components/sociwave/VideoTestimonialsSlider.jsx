import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from 'lucide-react';

/* Authentic Clipzo Exposure Meter Gauge (-2 -1 0 1 2) */
function ExposureMeter({ className = "" }) {
  return (
    <svg 
      width="338" 
      height="49" 
      viewBox="0 0 338 49" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`h-6 sm:h-8 w-auto opacity-75 ${className}`}
    >
      <mask id="path-1-inside-clipzo-exact" fill="white">
        <path d="M8.72565 0H333.726V48.4686H8.72565V0Z"/>
      </mask>
      <path d="M333.726 48.4686V47.1991H8.72565V48.4686V49.7382H333.726V48.4686Z" fill="white" fillOpacity="0.2" mask="url(#path-1-inside-clipzo-exact)"/>
      {/* -2 */}
      <path d="M-1.32548e-05 9.24689V8.08909H6.91637V9.24689H-1.32548e-05ZM8.12345 14V13.3449C8.12345 12.4613 8.25548 11.7352 8.51954 11.1664C8.7836 10.5977 9.14923 10.1305 9.61641 9.76486C10.0938 9.38908 10.6473 9.059 11.277 8.77463L12.0996 8.40901C12.7699 8.10432 13.2828 7.79963 13.6383 7.49495C13.9937 7.1801 14.1715 6.75354 14.1715 6.21526C14.1715 5.89027 14.1004 5.58558 13.9582 5.30121C13.816 5.00668 13.5824 4.77308 13.2574 4.60043C12.9426 4.41761 12.5211 4.32621 11.993 4.32621C11.4648 4.32621 11.0281 4.42777 10.6828 4.6309C10.3375 4.83402 10.0785 5.10316 9.90586 5.43831C9.73321 5.76331 9.64688 6.12894 9.64688 6.53519H8.32149C8.32149 5.81409 8.48399 5.20472 8.80899 4.70707C9.13399 4.19926 9.57071 3.81332 10.1191 3.54926C10.6777 3.2852 11.3074 3.15317 12.0082 3.15317C12.6887 3.15317 13.2879 3.26996 13.8058 3.50356C14.334 3.72699 14.7504 4.06215 15.0551 4.50902C15.3699 4.95589 15.5273 5.50433 15.5273 6.15433C15.5273 6.90589 15.2988 7.54065 14.8418 8.05862C14.3848 8.56643 13.75 9.0133 12.9375 9.39924L11.5816 10.0238C11.023 10.2777 10.5965 10.552 10.302 10.8465C10.0074 11.141 9.8043 11.4559 9.69258 11.791C9.58086 12.1262 9.525 12.4816 9.525 12.8574H15.6949V14H8.12345Z" fill="white"/>
      <path d="M8.72577 28.1562V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M29.0383 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M49.3508 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M69.6631 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      {/* -1 */}
      <path d="M81.25 9.24689V8.08909H88.1664V9.24689H81.25ZM92.725 13.4363V5.7887H89.6934V4.78324L92.0852 4.61566C92.2781 4.59535 92.4305 4.53441 92.5422 4.43285C92.6641 4.32113 92.725 4.16879 92.725 3.97582V3.33598H94.1113V13.4363H92.725ZM89.3277 14V12.8574H97.2496V14H89.3277Z" fill="white"/>
      <path d="M89.9758 28.1562V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M110.288 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M130.601 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M150.913 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      {/* 0 */}
      <path d="M171.177 14.1828C170.273 14.1828 169.506 13.9594 168.877 13.5125C168.247 13.0555 167.77 12.4156 167.445 11.593C167.12 10.7703 166.957 9.79533 166.957 8.66799C166.957 7.54065 167.12 6.56565 167.445 5.743C167.77 4.92035 168.247 4.28558 168.877 3.83871C169.506 3.38168 170.273 3.15317 171.177 3.15317C172.091 3.15317 172.858 3.38168 173.477 3.83871C174.107 4.28558 174.584 4.92035 174.909 5.743C175.234 6.56565 175.397 7.54065 175.397 8.66799C175.397 9.79533 175.234 10.7703 174.909 11.593C174.584 12.4156 174.107 13.0555 173.477 13.5125C172.858 13.9594 172.091 14.1828 171.177 14.1828ZM171.177 12.9641C172.142 12.9641 172.853 12.5934 173.31 11.852C173.767 11.1004 173.995 10.0391 173.995 8.66799C173.995 7.30706 173.767 6.25081 173.31 5.49925C172.853 4.74769 172.142 4.37191 171.177 4.37191C170.212 4.37191 169.501 4.74769 169.044 5.49925C168.587 6.25081 168.359 7.30706 168.359 8.66799C168.359 10.0391 168.587 11.1004 169.044 11.852C169.501 12.5934 170.212 12.9641 171.177 12.9641Z" fill="white"/>
      <path d="M171.226 28.1562V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M191.538 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M211.851 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M232.163 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      {/* 1 */}
      <path d="M252.061 13.4363V5.7887H249.029V4.78324L251.421 4.61566C251.614 4.59535 251.766 4.53441 251.878 4.43285C252 4.32113 252.061 4.16879 252.061 3.97582V3.33598H253.447V13.4363H252.061ZM248.664 14V12.8574H256.586V14H248.664Z" fill="white"/>
      <path d="M252.475 28.1562V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M272.788 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M293.101 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      <path d="M313.413 33.2344V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
      {/* 2 */}
      <path d="M329.959 14V13.3449C329.959 12.4613 330.091 11.7352 330.355 11.1664C330.62 10.5977 330.985 10.1305 331.452 9.76486C331.93 9.38908 332.483 9.059 333.113 8.77463L333.936 8.40901C334.606 8.10432 335.119 7.79963 335.474 7.49495C335.83 7.1801 336.007 6.75354 336.007 6.21526C336.007 5.89027 335.936 5.58558 335.794 5.30121C335.652 5.00668 335.418 4.77308 335.093 4.60043C334.779 4.41761 334.357 4.32621 333.829 4.32621C333.301 4.32621 332.864 4.42777 332.519 4.6309C332.173 4.83402 331.914 5.10316 331.742 5.43831C331.569 5.76331 331.483 6.12894 331.483 6.53519H330.157C330.157 5.81409 330.32 5.20472 330.645 4.70707C330.97 4.19926 331.407 3.81332 331.955 3.54926C332.514 3.2852 333.143 3.15317 333.844 3.15317C334.525 3.15317 335.124 3.26996 335.642 3.50356C336.17 3.72699 336.586 4.06215 336.891 4.50902C337.206 4.95589 337.363 5.50433 337.363 6.15433C337.363 6.90589 337.135 7.54065 336.678 8.05862C336.221 8.56643 335.586 9.0133 334.773 9.39924L333.418 10.0238C332.859 10.2777 332.432 10.552 332.138 10.8465C331.843 11.141 331.64 11.4559 331.529 11.791C331.417 12.1262 331.361 12.4816 331.361 12.8574H337.531V14H329.959Z" fill="white"/>
      <path d="M333.725 28.1562V48.4687" stroke="white" strokeOpacity="0.3" strokeWidth="1.26953"/>
    </svg>
  );
}

/* Authentic Wireframe Globe Icon from Clipzo */
function GlobeWireframe({ className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 50 50" 
      fill="none" 
      className={`text-white/85 ${className}`}
    >
      <path d="M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z" stroke="currentColor" strokeWidth="1.8" strokeMiterlimit="10"/>
      <path d="M25 1.04077V49.0001" stroke="currentColor" strokeWidth="1.8" strokeMiterlimit="10"/>
      <path d="M25 49C31.6274 49 37 38.2548 37 25C37 11.7452 31.6274 1 25 1C18.3726 1 13 11.7452 13 25C13 38.2548 18.3726 49 25 49Z" stroke="currentColor" strokeWidth="1.8" strokeMiterlimit="10"/>
      <path d="M1.04066 25H49" stroke="currentColor" strokeWidth="1.8" strokeMiterlimit="10"/>
    </svg>
  );
}

export default function VideoTestimonialsSlider({ onSelectVideo }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isUnmuted, setIsUnmuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);

  // High-production cinematic assets — ALL have full broadcast-quality AAC stereo audio tracks
  const productions = [
    {
      id: "spatial-storytelling",
      line1: "SPATIAL",
      line2: "STORYTELLING",
      client: "Executive Brand Film",
      category: "Brand Cinema",
      videoSrc: "/videos/build-your-brand-audio.mp4",
      poster: "/images/build-your-brand-poster.jpg"
    },
    {
      id: "emery-solutions",
      line1: "COMMERCIAL",
      line2: "SPOTLIGHT",
      client: "Emery Solutions Inc.",
      category: "Commercial Film",
      videoSrc: "/videos/emery-solutions-spotlight.mp4",
      poster: "/images/service-promo.webp"
    },
    {
      id: "exp-summit",
      line1: "LIVE EVENT",
      line2: "BROADCAST",
      client: "National Leadership Summit",
      category: "Event Production",
      videoSrc: "/videos/imn-your-event-audio.mp4",
      poster: "/images/showcase-event.jpg"
    },
    {
      id: "consistent-content",
      line1: "CREATOR",
      line2: "VELOCITY",
      client: "Growth Brands & Founders",
      category: "Content Engine",
      videoSrc: "/videos/consistent-content-audio.mp4",
      poster: "/images/service-reels.webp"
    },
    {
      id: "social-full-time-job",
      line1: "DIGITAL",
      line2: "DOCUMENTARY",
      client: "Founder Spotlight Series",
      category: "Docu-Commercial",
      videoSrc: "/videos/social-full-time-job-audio.mp4",
      poster: "/images/crafting-brands.jpg"
    }
  ];

  const total = productions.length;

  const goTo = useCallback((nextIdx) => {
    const wrappedIdx = ((nextIdx % total) + total) % total;
    setActiveIdx(wrappedIdx);
    setIsPlaying(true);
  }, [total]);

  // Instant mount playback trigger for initial slide
  useEffect(() => {
    const playInitial = () => {
      const v = videoRefs.current[0];
      if (v) {
        v.muted = true;
        v.defaultMuted = true;
        v.play().catch(() => {});
      }
    };
    playInitial();
    const t = setTimeout(playInitial, 150);
    return () => clearTimeout(t);
  }, [isUnmuted]);

  // Video playback & audio synchronization
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIdx) {
        video.muted = !isUnmuted;
        video.defaultMuted = true;
        if (isUnmuted) {
          video.volume = 1.0;
        }
        if (isPlaying) {
          const startPlay = () => {
            video.muted = !isUnmuted;
            video.defaultMuted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Fallback to muted autoplay if browser blocks audio
                video.muted = true;
                video.defaultMuted = true;
                video.play().catch(() => {});
              });
            }
          };

          if (video.readyState >= 2) {
            startPlay();
          } else {
            video.addEventListener('canplay', startPlay, { once: true });
            video.addEventListener('loadeddata', startPlay, { once: true });
            startPlay();
          }
        } else {
          video.pause();
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIdx, isUnmuted, isPlaying]);

  // Viewport IntersectionObserver: start playing as soon as slider comes into view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isPlaying) {
            const currentVideo = videoRefs.current[activeIdx];
            if (currentVideo && currentVideo.paused) {
              currentVideo.muted = !isUnmuted;
              currentVideo.defaultMuted = true;
              currentVideo.play().catch(() => {
                currentVideo.muted = true;
                currentVideo.defaultMuted = true;
                currentVideo.play().catch(() => {});
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [activeIdx, isPlaying, isUnmuted]);

  // First user interaction unlock listener (ensures autoplay kicks in on scroll / touch)
  useEffect(() => {
    const unlockAndPlay = () => {
      const currentVideo = videoRefs.current[activeIdx];
      if (currentVideo && currentVideo.paused && isPlaying) {
        currentVideo.muted = !isUnmuted;
        currentVideo.defaultMuted = true;
        currentVideo.play().catch(() => {});
      }
    };

    window.addEventListener('scroll', unlockAndPlay, { once: true, passive: true });
    window.addEventListener('click', unlockAndPlay, { once: true });
    window.addEventListener('touchstart', unlockAndPlay, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll', unlockAndPlay);
      window.removeEventListener('click', unlockAndPlay);
      window.removeEventListener('touchstart', unlockAndPlay);
    };
  }, [activeIdx, isPlaying, isUnmuted]);

  // Smooth Auto-Slider: automatically advances slides every 6.5s while playing
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      goTo(activeIdx + 1);
    }, 6500);

    return () => clearInterval(timer);
  }, [activeIdx, isPlaying, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goTo(activeIdx - 1);
      } else if (e.key === 'ArrowRight') {
        goTo(activeIdx + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, goTo]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goTo(activeIdx + 1);
      else goTo(activeIdx - 1);
    }
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    const nextState = !isUnmuted;
    setIsUnmuted(nextState);
    const currentVideo = videoRefs.current[activeIdx];
    if (currentVideo) {
      currentVideo.muted = !nextState;
      currentVideo.volume = 1.0;
      if (nextState && currentVideo.paused) {
        currentVideo.play().catch(() => {});
      }
    }
  };

  const active = productions[activeIdx];

  return (
    <section
      id="video-slider"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[65vh] sm:h-[78vh] lg:h-[84vh] min-h-[460px] max-h-[780px] bg-black overflow-hidden select-none group/slider"
    >
      {/* 1. Full-Bleed Edge-to-Edge Background Video for All Slides */}
      {productions.map((item, idx) => {
        const isCurrent = idx === activeIdx;

        return (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <video
              ref={(el) => {
                if (el) {
                  el.muted = !isUnmuted;
                  el.defaultMuted = true;
                }
                videoRefs.current[idx] = el;
              }}
              src={item.videoSrc}
              poster={item.poster}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onCanPlay={(e) => {
                const v = e.currentTarget;
                v.muted = !isUnmuted;
                if (idx === activeIdx && isPlaying && v.paused) {
                  v.play().catch(() => {});
                }
              }}
              onLoadedData={(e) => {
                const v = e.currentTarget;
                v.muted = !isUnmuted;
                if (idx === activeIdx && isPlaying && v.paused) {
                  v.play().catch(() => {});
                }
              }}
            />
          </div>
        );
      })}

      {/* 2. Soft Cinema Vignette Scrim */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none z-15" />

      {/* 3. Authentic 4-Corner Viewfinder Brackets (⌜ ⌝ ⌞ ⌟) */}
      <div className="absolute inset-0 pointer-events-none z-20 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
        {/* Top Corners */}
        <div className="flex justify-between items-start">
          <svg viewBox="0 0 17 17" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 text-white/80">
            <path d="M16.5 0.5H0.5V16.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg viewBox="0 0 17 17" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 text-white/80">
            <path d="M0 0.5H16V16.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Bottom Corners */}
        <div className="flex justify-between items-end">
          <svg viewBox="0 0 17 17" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 text-white/80">
            <path d="M16.5 16H0.5V0" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg viewBox="0 0 17 17" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 text-white/80">
            <path d="M0 16H16V0" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* 4. Top-Right Audio & Modal Controls + Live Slide Counter */}
      <div className="absolute top-6 right-14 sm:top-8 sm:right-16 lg:top-10 lg:right-20 z-30 flex items-center gap-2.5">
        {/* Slide Counter HUD */}
        <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/80 border border-white/20 font-mono text-[11px] font-bold tracking-wider hidden sm:flex items-center gap-1.5 shadow-lg">
          <span className="text-soci-coral">{String(activeIdx + 1).padStart(2, '0')}</span>
          <span className="text-white/40">/</span>
          <span>{String(total).padStart(2, '0')}</span>
        </div>

        {/* Sound Toggle Button */}
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isUnmuted ? 'Mute audio' : 'Unmute audio'}
          className={`px-3 py-1.5 rounded-full backdrop-blur-md text-white border flex items-center gap-2 transition-all shadow-lg active:scale-95 ${
            isUnmuted 
              ? 'bg-soci-coral/80 border-soci-coral hover:bg-soci-coral text-white font-semibold' 
              : 'bg-black/40 hover:bg-black/70 border-white/20 text-white/90'
          }`}
        >
          {isUnmuted ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider hidden sm:inline">Audio On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 opacity-80" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider hidden sm:inline">Muted</span>
            </>
          )}
        </button>

        {onSelectVideo && (
          <button
            type="button"
            onClick={() => onSelectVideo(active.videoSrc, `${active.line1} ${active.line2}`, active.videoSrc)}
            aria-label="Watch fullscreen"
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all shadow-lg active:scale-95"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 5. Left-Aligned Typography — Placed in negative space, preserving speaker visibility */}
      <div className="absolute top-[18%] sm:top-[22%] lg:top-[25%] left-7 sm:left-14 lg:left-20 max-w-[85%] sm:max-w-md lg:max-w-lg z-20 pointer-events-none">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-white tracking-[-0.03em] leading-[0.94] uppercase drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
          {active.line1}
          <br />
          {active.line2}
        </h2>
      </div>

      {/* 6. Bottom Row HUD Elements exactly matching Clipzo */}
      {/* Bottom-Left: Wireframe Globe Icon */}
      <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-12 lg:bottom-12 lg:left-14 z-20">
        <GlobeWireframe className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-md" />
      </div>

      {/* Bottom-Center: Exposure Meter Gauge (-2 -1 0 1 2) */}
      <div className="absolute bottom-7 sm:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:block">
        <ExposureMeter className="h-6 sm:h-8" />
      </div>

      {/* Bottom-Right: Clean Pause/Play Button (|| / ▶) */}
      <div className="absolute bottom-7 right-7 sm:bottom-10 sm:right-12 lg:bottom-12 lg:right-14 z-20">
        <button
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause slider' : 'Resume slider'}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-xl active:scale-95 group"
        >
          {isPlaying ? (
            /* Pause bars */
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-3.5 sm:h-4 bg-white rounded-full" />
              <span className="w-1 h-3.5 sm:h-4 bg-white rounded-full" />
            </div>
          ) : (
            <Play className="w-4 h-4 fill-white translate-x-0.5" />
          )}
        </button>
      </div>

      {/* 7. Floating Side Slider Arrows — Highly visible, elegant on hover */}
      <button
        type="button"
        onClick={() => goTo(activeIdx - 1)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-3 sm:left-6 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white border border-white/20 hover:border-white/50 flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={() => goTo(activeIdx + 1)}
        aria-label="Next slide"
        className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white border border-white/20 hover:border-white/50 flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* 8. Interactive Slide Indicators / Pagination Buttons */}
      <div className="absolute bottom-3 inset-x-0 z-30 flex justify-center items-center gap-2">
        {productions.map((p, i) => {
          const isCurrent = i === activeIdx;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${p.line1} ${p.line2}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isCurrent 
                  ? 'w-8 bg-soci-coral shadow-sm shadow-soci-coral/50' 
                  : 'w-2 bg-white/35 hover:bg-white/60 hover:w-3'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
