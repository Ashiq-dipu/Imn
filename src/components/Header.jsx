import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Film,
  Radio,
  Video,
  Zap,
  Calendar,
  Layers,
  Users,
  Target,
  Building2,
  ClipboardCheck,
  HelpCircle
} from 'lucide-react';
import servicesData from '../data/imn_services_data.json';

export default function Header({ onOpenContact, theme = 'light' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const location = useLocation();

  const isDark = theme === 'dark';

  const servicesList = Object.values(servicesData);

  const aboutSubLinks = [
    {
      label: 'About Studio',
      desc: 'Story, Charlotte soundstage & production standards',
      path: '/about',
      icon: Building2
    },
    {
      label: 'Team',
      desc: 'Executive directors, cinematographers & colorists',
      path: '/team',
      icon: Users
    },
    {
      label: 'Scorecard',
      desc: 'Interactive business visibility diagnostic',
      path: '/business-visibility-scorecard',
      icon: ClipboardCheck
    },
    {
      label: 'FAQ',
      desc: 'Answers on workflows, gear & booking',
      path: '/faq',
      icon: HelpCircle
    }
  ];

  const serviceIcons = {
    'promotional-videos': Video,
    'podcast-production': Radio,
    'social-reels': Zap,
    'commercial-production': Film,
    'event-coverage': Calendar,
    'social-media-management': Users,
    'brand-blueprint': Layers,
    'ad-campaigns': Target
  };

  const mainLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blind Brand', path: '/features/blind-brand' },
    { label: 'Behind the Brand', path: '/behind-the-brand' },
    { label: 'Scorecard', path: '/business-visibility-scorecard' },
    { label: 'Contact', path: '/contact' }
  ];

  const totalFilms = servicesList.reduce((sum, s) => sum + (s.items?.length || 0), 0);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isServicesActive =
    location.pathname === '/work' ||
    location.pathname === '/services' ||
    location.pathname.startsWith('/portfolio/');

  const isAboutActive =
    location.pathname === '/about' ||
    location.pathname.startsWith('/team') ||
    location.pathname === '/business-visibility-scorecard' ||
    location.pathname === '/faq';

  const closeAllDropdowns = () => {
    setServicesDropdown(false);
    setAboutDropdown(false);
  };

  const linkClass = (active) => {
    if (isDark) {
      return `px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
        active ? 'bg-white text-black shadow-sm font-bold' : 'text-white/70 hover:text-white hover:bg-white/10'
      }`;
    }
    return `px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
      active ? 'bg-soci-dark text-white' : 'text-soci-muted hover:text-soci-dark hover:bg-neutral-100'
    }`;
  };

  return (
    <header
      onMouseLeave={closeAllDropdowns}
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-colors ${
        isDark ? 'bg-[#07090D]/90 border-b border-white/10 text-white' : 'bg-[#FFFFFF]/90 border-b border-soci-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-opacity hover:opacity-85 py-1"
          aria-label="IMN Lightment Productions Home"
        >
          <img
            src={isDark ? '/images/imn-logo-white.png' : '/images/imn-logo-dark.png'}
            alt="IMN Lightment Productions"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full border shadow-sm ${
          isDark ? 'bg-white/[0.06] border-white/15' : 'bg-soci-card border-soci-border'
        }`}>
          <Link
            to="/"
            onMouseEnter={closeAllDropdowns}
            className={linkClass(isActive('/'))}
          >
            Home
          </Link>

          {/* Services Mega Menu Trigger */}
          <div
            onMouseEnter={() => {
              setServicesDropdown(true);
              setAboutDropdown(false);
            }}
          >
            <Link
              to="/work"
              onClick={closeAllDropdowns}
              className={`${linkClass(isServicesActive)} flex items-center gap-1.5 group`}
            >
              <span>Services</span>
              <span className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                servicesDropdown
                  ? 'bg-soci-coral text-white rotate-180 shadow-sm'
                  : isDark
                    ? isServicesActive ? 'bg-black/20 text-black' : 'bg-white/15 text-white group-hover:bg-white/25'
                    : isServicesActive ? 'bg-white/20 text-white' : 'bg-neutral-200/80 text-soci-dark group-hover:bg-neutral-300'
              }`}>
                <ChevronDown className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
            </Link>
          </div>

          {/* About Dropdown Trigger (Includes About Studio, Team, Scorecard, FAQ) */}
          <div
            className="relative"
            onMouseEnter={() => {
              setAboutDropdown(true);
              setServicesDropdown(false);
            }}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <Link
              to="/about"
              onClick={closeAllDropdowns}
              className={`${linkClass(isAboutActive)} flex items-center gap-1.5 group`}
            >
              <span>About</span>
              <span className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                aboutDropdown
                  ? 'bg-soci-coral text-white rotate-180 shadow-sm'
                  : isDark
                    ? isAboutActive ? 'bg-black/20 text-black' : 'bg-white/15 text-white group-hover:bg-white/25'
                    : isAboutActive ? 'bg-white/20 text-white' : 'bg-neutral-200/80 text-soci-dark group-hover:bg-neutral-300'
              }`}>
                <ChevronDown className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
            </Link>

            {aboutDropdown && (
              <div className="absolute top-full left-0 pt-3 w-80 z-50 animate-fadeIn">
                <div className={`rounded-3xl border shadow-2xl p-3 space-y-1 ${
                  isDark
                    ? 'bg-[#0F131A] border-white/15 text-white shadow-[0_24px_60px_-15px_rgba(0,0,0,0.75)]'
                    : 'bg-white border-soci-border text-soci-dark shadow-[0_24px_60px_-15px_rgba(15,23,42,0.18)]'
                }`}>
                  {aboutSubLinks.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={closeAllDropdowns}
                        className={`p-3 rounded-2xl border border-transparent transition-all group flex items-start gap-3 ${
                          isDark
                            ? 'hover:bg-white/[0.06] hover:border-soci-coral/40'
                            : 'hover:bg-[#F1F5F9] hover:border-soci-coral/30'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-soci-coral/10 text-soci-coral group-hover:bg-soci-coral group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0 mt-0.5">
                          <SubIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-bold group-hover:text-soci-coral transition-colors ${
                            isDark ? 'text-white' : 'text-soci-dark'
                          }`}>
                            {sub.label}
                          </div>
                          <div className={`text-[11px] font-light leading-snug mt-0.5 ${
                            isDark ? 'text-neutral-400' : 'text-soci-muted'
                          }`}>
                            {sub.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/pricing"
            onMouseEnter={closeAllDropdowns}
            className={linkClass(isActive('/pricing'))}
          >
            Pricing
          </Link>

          <Link
            to="/features/blind-brand"
            onMouseEnter={closeAllDropdowns}
            className={linkClass(isActive('/features/blind-brand'))}
          >
            Blind Brand
          </Link>

          <Link
            to="/behind-the-brand"
            onMouseEnter={closeAllDropdowns}
            className={linkClass(isActive('/behind-the-brand'))}
          >
            Behind the Brand
          </Link>

          <Link
            to="/contact"
            onMouseEnter={closeAllDropdowns}
            className={linkClass(isActive('/contact'))}
          >
            Contact
          </Link>
        </nav>

        {/* Full-Width Desktop Mega Menu for Services */}
        {servicesDropdown && (
          <div className="hidden xl:block absolute top-full left-6 right-6 pt-2 z-50 animate-fadeIn">
            <div className={`rounded-3xl border shadow-2xl p-6 grid grid-cols-12 gap-6 ${
              isDark
                ? 'bg-[#0F131A] border-white/15 text-white shadow-[0_24px_60px_-15px_rgba(0,0,0,0.75)]'
                : 'bg-white border-soci-border text-soci-dark shadow-[0_24px_60px_-15px_rgba(15,23,42,0.18)]'
            }`}>
              {/* Left 8 Columns: All 8 Services Visible in a 2x4 Grid */}
              <div className="col-span-8 flex flex-col">
                <div className={`pb-3 mb-4 flex items-center justify-between border-b ${
                  isDark ? 'border-white/10' : 'border-soci-border/70'
                }`}>
                  <span className="text-[11px] font-mono uppercase font-bold text-soci-coral tracking-widest">
                    Production Portfolios & Capabilities
                  </span>
                  <span className={`text-[11px] font-mono font-semibold ${
                    isDark ? 'text-neutral-400' : 'text-soci-muted'
                  }`}>
                    {totalFilms}+ Productions Across {servicesList.length} Disciplines
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {servicesList.map((svc) => {
                    const Icon = serviceIcons[svc.slug] || Film;
                    return (
                      <Link
                        key={svc.slug}
                        to={svc.path}
                        onClick={() => setServicesDropdown(false)}
                        className={`p-3.5 rounded-2xl border border-transparent transition-all group flex items-start gap-3.5 ${
                          isDark
                            ? 'hover:bg-white/[0.06] hover:border-soci-coral/40'
                            : 'hover:bg-[#F1F5F9] hover:border-soci-coral/30'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-soci-coral/10 text-soci-coral group-hover:bg-soci-coral group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-sm font-bold group-hover:text-soci-coral transition-colors truncate ${
                              isDark ? 'text-white' : 'text-soci-dark'
                            }`}>
                              {svc.name}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full flex-shrink-0 ${
                              isDark
                                ? 'bg-white/10 text-neutral-300'
                                : 'bg-neutral-100 text-soci-muted group-hover:bg-white group-hover:text-soci-dark'
                            }`}>
                              {svc.items?.length || 0} films
                            </span>
                          </div>
                          <span className={`text-xs line-clamp-2 font-light block mt-1 leading-relaxed ${
                            isDark ? 'text-neutral-400' : 'text-soci-muted'
                          }`}>
                            {svc.description}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Right 4 Columns: Featured Studio Overview & Quick Links */}
              <div className={`col-span-4 rounded-2xl p-5 flex flex-col justify-between border ${
                isDark
                  ? 'bg-white/[0.04] border-white/10'
                  : 'bg-[#F1F5F9] border-soci-border/70'
              }`}>
                <div>
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-neutral-900">
                    <img
                      src="/images/media-studio.jpg"
                      alt="IMN Lightment Soundstage"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <span className="absolute bottom-2.5 left-3 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-white font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-soci-coral" />
                      Charlotte Soundstage A
                    </span>
                  </div>

                  <h4 className={`text-base font-extrabold tracking-tight mb-1.5 ${
                    isDark ? 'text-white' : 'text-soci-dark'
                  }`}>
                    Turnkey Cinema & Brand Systems
                  </h4>
                  <p className={`text-xs font-light leading-relaxed ${
                    isDark ? 'text-neutral-400' : 'text-soci-muted'
                  }`}>
                    Explore full production packages, RED/ARRI camera specs, soundstage portraits, and client work.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 mt-5">
                  <Link
                    to="/services"
                    onClick={() => setServicesDropdown(false)}
                    className="w-full py-2.5 px-4 rounded-xl bg-soci-coral text-white hover:bg-[#0080CE] transition-all text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between shadow-sm"
                  >
                    <span>All Services & Specs</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/work"
                    onClick={() => setServicesDropdown(false)}
                    className={`w-full py-2.5 px-4 rounded-xl border transition-all text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between ${
                      isDark
                        ? 'bg-white/5 border-white/15 text-white hover:border-soci-coral hover:text-soci-coral'
                        : 'bg-white border-soci-border text-soci-dark hover:border-soci-coral hover:text-soci-coral'
                    }`}
                  >
                    <span>Full Portfolio Hub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-sm ${
              isDark
                ? 'bg-white text-black hover:bg-neutral-200'
                : 'bg-soci-coral text-white hover:bg-soci-dark'
            }`}
          >
            <span>{isDark ? 'Book a Call' : 'Start Project'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`xl:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-sm active:scale-95 border ${
            isDark
              ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              : 'bg-white border-soci-border text-soci-dark hover:text-soci-coral hover:border-soci-coral/50'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 stroke-[2.2] transition-transform rotate-90" />
          ) : (
            <Menu className="w-5 h-5 stroke-[2.2]" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`xl:hidden border-b px-6 py-6 max-h-[85vh] overflow-y-auto animate-fadeIn ${
          isDark ? 'bg-[#07090D] border-white/10 text-white' : 'bg-[#FFFFFF] border-soci-border'
        }`}>
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl text-sm font-mono font-semibold text-soci-dark hover:bg-neutral-200"
            >
              Home
            </Link>

            <div className="py-2 px-3 text-xs font-mono font-bold text-soci-coral uppercase tracking-wider">
              Services & Portfolios:
            </div>
            <div className="grid grid-cols-1 gap-1 pl-3 border-l-2 border-soci-coral/30 mb-2">
              <Link
                to="/work"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg text-xs font-bold text-soci-dark hover:bg-neutral-200"
              >
                All Services Overview
              </Link>
              {servicesList.map((svc) => (
                <Link
                  key={svc.slug}
                  to={svc.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-3 rounded-lg text-xs text-soci-muted hover:text-soci-dark hover:bg-neutral-200"
                >
                  {svc.name}
                </Link>
              ))}
            </div>

            <div className="py-2 px-3 text-xs font-mono font-bold text-soci-coral uppercase tracking-wider">
              About IMN:
            </div>
            <div className="grid grid-cols-1 gap-1 pl-3 border-l-2 border-soci-coral/30 mb-2">
              {aboutSubLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-3 rounded-lg text-xs text-soci-muted hover:text-soci-dark hover:bg-neutral-200"
                >
                  {sub.label}
                </Link>
              ))}
            </div>

            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl text-sm font-mono font-semibold text-soci-dark hover:bg-neutral-200"
            >
              Pricing & Retainers
            </Link>

            <Link
              to="/features/blind-brand"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl text-sm font-mono font-semibold text-soci-dark hover:bg-neutral-200"
            >
              Blind Brand Feature
            </Link>

            <Link
              to="/behind-the-brand"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl text-sm font-mono font-semibold text-soci-dark hover:bg-neutral-200"
            >
              Behind the Brand
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl text-sm font-mono font-semibold text-soci-dark hover:bg-neutral-200"
            >
              Contact & Commission
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-3 w-full py-3.5 rounded-full bg-soci-coral text-white font-mono text-xs uppercase tracking-wider font-bold text-center"
            >
              Start Project
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
