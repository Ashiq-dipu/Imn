import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  X,
  Menu,
  ArrowUpRight,
  ChevronDown,
  Building2,
  Users,
  ClipboardCheck,
  HelpCircle
} from 'lucide-react';
import servicesData from '../data/imn_services_data.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function VidmoHero({ onOpenShowreel, onOpenContact }) {
  const [navOpen, setNavOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const servicesList = Object.values(servicesData);

  const primaryMenuLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/work' },
    {
      label: 'About',
      path: '/about',
      subLinks: [
        { label: 'About Studio', desc: 'Story, soundstage & production gear', path: '/about', icon: Building2 },
        { label: 'Team', desc: 'Directors, cinematographers & colorists', path: '/team', icon: Users },
        { label: 'Scorecard', desc: 'Business visibility diagnostic', path: '/business-visibility-scorecard', icon: ClipboardCheck },
        { label: 'FAQ', desc: 'Workflows, turnaround & booking answers', path: '/faq', icon: HelpCircle }
      ]
    },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blind Brand', path: '/features/blind-brand' },
    { label: 'Behind the Brand', path: '/behind-the-brand' },
    { label: 'Contact', path: '/contact' }
  ];

  // Keyboard accessibility and body scroll lock when navigation is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setNavOpen(false);
    };
    if (navOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navOpen]);

  const containerRef = useRef(null);
  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const panel3Ref = useRef(null);
  const videoRefs = useRef([]);

  // AutoPlay recovery across client-side SPA navigations & tab changes
  useEffect(() => {
    const startPlayback = () => {
      videoRefs.current.forEach((video) => {
        if (!video) return;
        video.muted = true;
        video.defaultMuted = true;
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Autoplay policy fallback: resume on first user interaction
            const unlock = () => {
              video.play().catch(() => {});
              window.removeEventListener('click', unlock);
              window.removeEventListener('scroll', unlock);
              window.removeEventListener('touchstart', unlock);
            };
            window.addEventListener('click', unlock, { once: true });
            window.addEventListener('scroll', unlock, { once: true });
            window.addEventListener('touchstart', unlock, { once: true });
          });
        }
      });
    };

    startPlayback();
    const timer = setTimeout(startPlayback, 120);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startPlayback();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Ensure currently visible slide video is playing when scrolling through panels
  useEffect(() => {
    const activeVideo = videoRefs.current[activeIdx];
    if (activeVideo && activeVideo.paused) {
      activeVideo.play().catch(() => {});
    }
  }, [activeIdx]);

  const slides = [
    {
      id: "corpcon",
      title: "BUILD YOUR BRAND 4K",
      client: "IMN Master Series",
      type: "Commercial & Cinema Master",
      year: "2026",
      industry: "Brand Architecture",
      videoId: "1L9HU7yaonc",
      videoSrc: "/videos/build-your-brand-hero.mp4"
    },
    {
      id: "charter-champions",
      title: "CONSISTENT CONTENT ENGINE",
      client: "Omnichannel Growth",
      type: "Social Velocity & Retainers",
      year: "2026",
      industry: "High-Growth Scale",
      videoId: "jBR6lkrkDbs",
      videoSrc: "/videos/consistent-content-hero.mp4"
    },
    {
      id: "dr-paul-miller",
      title: "IMN YOUR EVENT 4K",
      client: "Live Production Desk",
      type: "Cinema Event Coverage",
      year: "2026",
      industry: "Live Summits & Festivals",
      videoId: "oiu4XcBTKJI",
      videoSrc: "/videos/imn-your-event-hero.mp4"
    },
    {
      id: "operation-go",
      title: "SOCIAL IS A FULL TIME JOB",
      client: "Enterprise Authority",
      type: "Direct-Response Commercial",
      year: "2026",
      industry: "Authority Positioning",
      videoId: "vC93ZlbdDG0",
      videoSrc: "/videos/social-full-time-job-hero.mp4"
    }
  ];

  // Exact Vidmo Stacked Card Slide-Up Animation tied to Scroll
  useGSAP(() => {
    // Initial positions for incoming panels
    gsap.set(panel1Ref.current, { yPercent: 100 });
    gsap.set(panel2Ref.current, { yPercent: 100 });
    gsap.set(panel3Ref.current, { yPercent: 100 });

    ScrollTrigger.refresh();

    let lastIdx = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Silky smooth 1:1 scrub with scroll wheel
        fastScrollEnd: true,
        preventOverlaps: true,
        onUpdate: (self) => {
          // Precise index calculation based on scroll progress
          const progress = self.progress;
          let idx = 0;
          if (progress >= 0.72) idx = 3;
          else if (progress >= 0.45) idx = 2;
          else if (progress >= 0.18) idx = 1;
          
          if (idx !== lastIdx) {
            lastIdx = idx;
            setActiveIdx(idx);
          }
        }
      }
    });

    // 1. Slide 2 rises from the bottom and covers Slide 1
    tl.to(panel1Ref.current, {
      yPercent: 0,
      ease: "power1.inOut",
      duration: 1
    })
    // 2. Slide 3 rises from the bottom and covers Slide 2
    .to(panel2Ref.current, {
      yPercent: 0,
      ease: "power1.inOut",
      duration: 1
    })
    // 3. Slide 4 rises from the bottom and covers Slide 3
    .to(panel3Ref.current, {
      yPercent: 0,
      ease: "power1.inOut",
      duration: 1
    });

  }, { scope: containerRef, dependencies: [] });

  const current = slides[activeIdx];

  return (
    <div ref={containerRef} className="relative w-full h-[450vh]">
      {/* Pinned Sticky Viewport (100vh) */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none">
        
        {/* ============================================================== */}
        {/* STACKED VIDEO PANELS (Each panel slides UP over the previous)  */}
        {/* ============================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Panel 0: Base Slide (WHERE BRANDS COME ALIVE) */}
          <div className="absolute inset-0 z-10 overflow-hidden bg-black">
            <video
              ref={(el) => (videoRefs.current[0] = el)}
              autoPlay
              loop
              muted
              defaultMuted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-110"
              src={slides[0].videoSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50 pointer-events-none" />
          </div>

          {/* Panel 1: Second Slide (BEYOND THE TROPHY) */}
          <div ref={panel1Ref} className="absolute inset-0 z-20 overflow-hidden bg-black shadow-2xl will-change-transform">
            <video
              ref={(el) => (videoRefs.current[1] = el)}
              autoPlay
              loop
              muted
              defaultMuted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-110"
              src={slides[1].videoSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50 pointer-events-none" />
          </div>

          {/* Panel 2: Third Slide (THE SOVEREIGN MINDSET) */}
          <div ref={panel2Ref} className="absolute inset-0 z-30 overflow-hidden bg-black shadow-2xl will-change-transform">
            <video
              ref={(el) => (videoRefs.current[2] = el)}
              autoPlay
              loop
              muted
              defaultMuted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-110"
              src={slides[2].videoSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50 pointer-events-none" />
          </div>

          {/* Panel 3: Fourth Slide (MISSION DRIVEN) */}
          <div ref={panel3Ref} className="absolute inset-0 z-40 overflow-hidden bg-black shadow-2xl will-change-transform">
            <video
              ref={(el) => (videoRefs.current[3] = el)}
              autoPlay
              loop
              muted
              defaultMuted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-110"
              src={slides[3].videoSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50 pointer-events-none" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* TOP FLOATING NAV PILL (Exact Vidmo Style with Unified Menu)    */}
        {/* ============================================================== */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[70] flex items-center justify-center">
          <div className="flex items-center gap-4 sm:gap-6 px-5 sm:px-6 py-2 rounded-full bg-black/75 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all hover:border-white/40">
            <Link
              to="/"
              onClick={() => setNavOpen(false)}
              className="flex items-center hover:opacity-85 transition-opacity"
              aria-label="IMN Lightment Productions Home"
            >
              <img
                src="/images/imn-logo-white.png"
                alt="IMN Lightment Productions"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </Link>

            <button
              onClick={() => setNavOpen(!navOpen)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                navOpen
                  ? 'bg-soci-coral text-white shadow-[0_0_15px_rgba(0,148,239,0.5)]'
                  : 'bg-white/10 hover:bg-soci-coral text-white'
              }`}
              aria-label={navOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            >
              <span className="font-semibold">{navOpen ? 'Close' : 'Menu'}</span>
              {navOpen ? (
                <X className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <Menu className="w-4 h-4 stroke-[2.2]" />
              )}
            </button>
          </div>
        </header>

        {/* Fullscreen Nav Drawer (Exact Same Menu Items as Header.jsx) */}
        {navOpen && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setNavOpen(false);
            }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
          >
            {/* Top-Right Explicit Close Button */}
            <div className="w-full max-w-6xl mx-auto flex items-center justify-end pointer-events-auto">
              <button
                onClick={() => setNavOpen(false)}
                className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/10 hover:bg-soci-coral text-white border border-white/20 transition-all font-mono text-xs uppercase tracking-wider group cursor-pointer shadow-2xl backdrop-blur-xl"
                aria-label="Close menu"
              >
                <span className="font-semibold tracking-wider">Close Menu</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </div>

            {/* Center 2-Column Unified Navigation */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 my-auto py-8 pointer-events-auto items-start">
              {/* Left Column: Exact Header Nav Pages (Team, Scorecard & FAQ under About dropdown) */}
              <nav className="lg:col-span-6 flex flex-col gap-3 sm:gap-4">
                {primaryMenuLinks.map((item, idx) => (
                  <div key={item.path} className="flex flex-col">
                    <div className="flex items-center gap-4">
                      <Link
                        to={item.path}
                        onClick={() => {
                          setNavOpen(false);
                          setAboutOpen(false);
                        }}
                        className={`group flex items-baseline gap-4 font-condensed text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider transition-all ${
                          item.path === '/contact'
                            ? 'text-soci-coral hover:text-white'
                            : 'text-neutral-300 hover:text-white hover:translate-x-1'
                        }`}
                      >
                        <span className="font-mono text-xs text-neutral-500 group-hover:text-soci-coral">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item.label}</span>
                      </Link>

                      {item.subLinks && (
                        <button
                          type="button"
                          onClick={() => setAboutOpen((prev) => !prev)}
                          aria-expanded={aboutOpen}
                          aria-label="Toggle About submenu"
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            aboutOpen
                              ? 'bg-soci-coral border-soci-coral text-white rotate-180 shadow-[0_0_15px_rgba(0,148,239,0.4)]'
                              : 'bg-white/[0.06] border-white/15 text-neutral-300 hover:border-soci-coral hover:text-white'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                        </button>
                      )}
                    </div>

                    {item.subLinks && aboutOpen && (
                      <div className="mt-3 ml-8 max-w-md rounded-2xl bg-[#0F131A] border border-white/15 p-2 space-y-1 shadow-2xl animate-in fade-in duration-200">
                        {item.subLinks.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => {
                                setNavOpen(false);
                                setAboutOpen(false);
                              }}
                              className="p-2.5 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-soci-coral/40 transition-all flex items-center justify-between gap-3 group"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-soci-coral/15 text-soci-coral group-hover:bg-soci-coral group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-bold text-white group-hover:text-soci-coral transition-colors">
                                    {sub.label}
                                  </div>
                                  <div className="text-[11px] text-neutral-400 font-light truncate">
                                    {sub.desc}
                                  </div>
                                </div>
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-soci-coral flex-shrink-0" />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Column: Services & Portfolios Breakdown + CTA */}
              <div className="lg:col-span-6 bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
                      Services & Portfolios
                    </span>
                    <Link
                      to="/services"
                      onClick={() => setNavOpen(false)}
                      className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 hover:text-white inline-flex items-center gap-1"
                    >
                      <span>All Services</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {servicesList.map((svc) => (
                      <Link
                        key={svc.slug}
                        to={svc.path}
                        onClick={() => setNavOpen(false)}
                        className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.09] border border-white/5 hover:border-soci-coral/40 transition-all flex items-center justify-between gap-2 group"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white truncate">
                          {svc.name}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-soci-coral flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {onOpenContact && (
                  <button
                    onClick={() => {
                      setNavOpen(false);
                      onOpenContact();
                    }}
                    className="w-full py-3.5 px-6 rounded-full bg-soci-coral text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Start Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Drawer Bottom Bar Info */}
            <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 pt-6 border-t border-white/10 gap-3 pointer-events-auto">
              <span>IMN LIGHTMENT PRODUCTIONS // CHARLOTTE, NC</span>
              <span className="text-neutral-400 flex items-center gap-2">
                <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20 text-neutral-300 text-[10px]">ESC</kbd>
                <span>or click Close to dismiss</span>
              </span>
            </div>
          </div>
        )}

        {/* Spacer top */}
        <div className="relative z-40" />

        {/* ============================================================== */}
        {/* MAIN MIDDLE-BOTTOM HERO TITLE                                  */}
        {/* ============================================================== */}
        <div className="relative z-40 w-full mt-auto mb-6 sm:mb-8 flex flex-col items-center text-center gap-3">
          {/* Main Title (Changes with smooth slide blur when scrolled) */}
          <div className="max-w-5xl mx-auto overflow-hidden">
            <h1
              key={current.id}
              onClick={() => onOpenShowreel(current.videoId, `${current.client} — ${current.title}`)}
              className="font-condensed text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold uppercase leading-[0.95] tracking-tight text-white drop-shadow-2xl cursor-pointer hover:text-neutral-100 transition-colors animate-in fade-in slide-in-from-bottom-6 duration-500"
            >
              {current.title}
            </h1>
          </div>

          {/* Minimal Action Link & Dynamic Slide Index */}
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={() => onOpenShowreel(current.videoId, `${current.client} — ${current.title}`)}
              className="group inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-medium text-white hover:text-soci-coral transition-colors tracking-wide"
            >
              <span className="border-b border-white/40 group-hover:border-soci-coral pb-0.5">
                View project
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <span className="text-white/25">•</span>

            {/* Slide Index Progress */}
            <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-400 tracking-wider">
              <span className="text-white font-bold">0{activeIdx + 1}</span>
              <span className="text-neutral-600">/</span>
              <span>0{slides.length}</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM METADATA VERTICAL ROLLING DRUM (Exact Vidmo format)     */}
        {/* ============================================================== */}
        <div className="relative z-40 w-full pt-5 border-t border-white/20 flex flex-col md:flex-row md:items-center justify-between gap-6 font-sans text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-16 w-full max-w-4xl">
            {/* Column 1: Client */}
            <div>
              <div className="text-neutral-400 font-light mb-1">Client</div>
              <div className="overflow-hidden h-5">
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${activeIdx * 20}px)` }}
                >
                  {slides.map((s) => (
                    <div key={s.id} className="h-5 text-white font-semibold text-sm flex items-center">
                      {s.client}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Type */}
            <div>
              <div className="text-neutral-400 font-light mb-1">Type</div>
              <div className="overflow-hidden h-5">
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${activeIdx * 20}px)` }}
                >
                  {slides.map((s) => (
                    <div key={s.id} className="h-5 text-white font-semibold text-sm flex items-center truncate">
                      {s.type}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Year */}
            <div>
              <div className="text-neutral-400 font-light mb-1">Year</div>
              <div className="overflow-hidden h-5">
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${activeIdx * 20}px)` }}
                >
                  {slides.map((s) => (
                    <div key={s.id} className="h-5 text-white font-semibold text-sm flex items-center">
                      {s.year}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 4: Industry */}
            <div>
              <div className="text-neutral-400 font-light mb-1">Industry</div>
              <div className="overflow-hidden h-5">
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${activeIdx * 20}px)` }}
                >
                  {slides.map((s) => (
                    <div key={s.id} className="h-5 text-white font-semibold text-sm flex items-center truncate">
                      {s.industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Corner Ticker */}
          <div className="hidden lg:flex items-center gap-3 font-condensed text-base font-bold tracking-wider text-neutral-300 uppercase">
            <span>FRAMES THAT STAY WITH YOU.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
