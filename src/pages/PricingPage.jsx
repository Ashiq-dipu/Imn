import React, { useState } from 'react';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ChevronDown, 
  Film, 
  Clock, 
  ShieldCheck, 
  Repeat, 
  ArrowUpRight
} from 'lucide-react';

export default function PricingPage({ onOpenContact, onOpenVideo }) {
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL' | 'PRODUCTION' | 'RETAINER'
  const [openFaq, setOpenFaq] = useState(null);

  // All 6 Production & Retainer Packages kept intact
  const servicePackages = [
    {
      id: "promo-1cam",
      type: "PRODUCTION",
      badge: "Single Shoot",
      title: "1 Camera Promotional Video",
      subtitle: "Foundational Brand Story",
      description: "Professional cinematic brand video with on-location interviews, B-roll, studio lighting, audio capture, and master color grading.",
      turnaround: "5–7 Days",
      deliverable: "1 Core Brand Video + Social Cutdown",
      specs: [
        "1 Senior Videographer on location",
        "Cinematic 4K filming & interview framing",
        "Studio lighting package & wireless lapel audio",
        "Professional narrative assembly & editing",
        "Master DaVinci Resolve color correction & sound design",
        "100% Raw camera files & export ownership"
      ]
    },
    {
      id: "promo-2cam",
      type: "PRODUCTION",
      badge: "Multi-Angle",
      title: "2 Camera Promotional Video",
      subtitle: "High-Impact Commercial Story",
      description: "Enhanced multi-angle production capturing simultaneous speaking angles, dynamic B-roll cutaways, and cinematic pacing.",
      turnaround: "7–10 Days",
      deliverable: "1 Extended Brand Film + 2 Social Teasers",
      specs: [
        "2 Senior Videographers & camera operators",
        "Simultaneous multi-angle cinema 4K coverage",
        "Dynamic pacing with seamless cutaway switching",
        "Enhanced storytelling narrative & licensed music score",
        "Master sound mix & full color grading suite",
        "Full project stems & raw footage handoff"
      ]
    },
    {
      id: "reels-monthly",
      type: "RETAINER",
      isPopular: true,
      badge: "Agency Signature • Most Popular",
      title: "30 Reels / Month Content Engine",
      subtitle: "Omnichannel Social Domination",
      description: "Our signature monthly filming session engineered to flood Instagram, TikTok, and YouTube Shorts with high-converting short-form assets.",
      turnaround: "Delivered in Weekly Batches",
      deliverable: "30 Produced 9:16 Vertical Reels / Month",
      specs: [
        "Monthly dedicated half-day or full-day studio/location shoot",
        "30 High-retention 9:16 vertical reels edited & color-graded",
        "Talking heads, authority clips, testimonials & trending hooks",
        "Kinetic subtitles, B-roll overlays & licensed audio curation",
        "Flexible 1, 3, 6, and 12-month commitment schedules",
        "Turnkey content calendar & delivery directly to your team"
      ]
    },
    {
      id: "standard-commercial",
      type: "PRODUCTION",
      badge: "Broadcast Ready",
      title: "Standard Commercial Production",
      subtitle: "Scripted Brand Commercial",
      description: "High-end scripted commercials engineered for digital advertising campaigns, websites, regional television, and OTT streaming platforms.",
      turnaround: "10–14 Days",
      deliverable: "60s Hero Commercial + 30s & 15s Ad Cuts",
      specs: [
        "Creative treatment, scriptwriting & storyboard direction",
        "2–3 Cinema camera operators, gaffer & audio engineer",
        "On-location lighting design & cinema prime lenses",
        "Professional voiceover casting & sound mixing",
        "Broadcast-grade DaVinci Resolve color mastering",
        "Delivered in 16:9, 1:1, and 9:16 multi-platform aspect ratios"
      ]
    },
    {
      id: "multi-day-commercial",
      type: "PRODUCTION",
      badge: "Cinema Scale",
      title: "Multi-Day Commercial Production",
      subtitle: "Large-Scale Brand Campaign",
      description: "Comprehensive multi-location cinematic production with full Hollywood cinema camera packages, specialized rigging, and dedicated crew.",
      turnaround: "Custom Milestone Schedule",
      deliverable: "Full Campaign Suite + Theatrical & Broadcast Masters",
      specs: [
        "Multi-day stage & on-location principal photography",
        "Full cinema crew (Director, DP, Gaffer, Sound Mixer, Grip)",
        "Advanced stabilization (Ronin 2, heavy jibs, car rigging)",
        "Theatrical 4K master exports & national broadcast deliverables",
        "Complete archival drive with all raw ProRes/RAW camera media",
        "Executive producer oversight & dedicated post-production lead"
      ]
    },
    {
      id: "podcast-turnkey",
      type: "RETAINER",
      badge: "Studio A Broadcast",
      title: "Podcast Production & Studio Bundles",
      subtitle: "Topical Authority & Video Podcasting",
      description: "Turnkey multi-camera video podcast production on IMN Soundstage A. Single episode pilot sessions, 4-episode bundles, and monthly retainers.",
      turnaround: "48–72h Per Episode",
      deliverable: "Full Video Episodes + Audiophile Master + Short Clips",
      specs: [
        "1, 2, or 3 Camera 4K podcast setups in Soundstage A",
        "Shure SM7B studio broadcast microphones & multi-track audio",
        "Live multi-cam switching or post-edit multi-angle assembly",
        "Full audiophile vocal mastering (EQ, compression, noise removal)",
        "3–5 Viral vertical video cutdowns with subtitles per episode",
        "Monthly retainer and single session bundle options available"
      ]
    }
  ];

  const filteredPackages = activeTab === 'ALL'
    ? servicePackages
    : servicePackages.filter(p => p.type === activeTab);

  const retainerTerms = [
    {
      id: "1-month",
      term: "1 Month Jumpstart",
      reelsCount: "30 Reels Total",
      commitment: "Single Month Trial",
      benefit: "Immediate social velocity with zero long-term contract"
    },
    {
      id: "3-months",
      term: "3 Months (Quarterly)",
      reelsCount: "90 Reels Total",
      commitment: "Quarterly Growth Engine",
      benefit: "Locked production dates & consistent audience compounding",
      isPopular: true
    },
    {
      id: "6-months",
      term: "6 Months (Biannual)",
      reelsCount: "180 Reels Total",
      commitment: "Priority Studio Partner",
      benefit: "Priority Soundstage A booking & dedicated post-production team"
    },
    {
      id: "12-months",
      term: "12 Months (Annual)",
      reelsCount: "365 Reels Total",
      commitment: "Daily Brand Domination",
      benefit: "Complete turnkey daily social presence & maximum partner rate"
    }
  ];

  const faqs = [
    {
      q: "How are IMN's production proposals scoped?",
      a: "Every custom proposal reflects the exact cinema camera packages (Sony FX cinema line, prime optics), dedicated crew members (directors, cinematographers, sound mixers, gaffers), licensed scoring, and DaVinci Resolve color calibration required for your campaign goals."
    },
    {
      q: "Do we own the raw video footage and project masters?",
      a: "Yes, 100%. Unlike conventional agencies that charge ongoing licensing fees or withhold raw camera files, all raw footage, project stems, and master exports are 100% yours in perpetuity."
    },
    {
      q: "How does the 30 Reels Per Month retainer work?",
      a: "We book a half-day or full-day shoot each month, batch-film talking heads, BTS, brand hooks, and founder insights, and edit 30 high-retention 9:16 vertical reels delivered weekly with kinetic typography and sound design."
    },
    {
      q: "Can we combine a Brand Commercial shoot with social reels?",
      a: "Yes! Many of our enterprise and dental clients pair a 1-day or 2-day flagship commercial shoot with a dedicated social BTS crew to capture 30+ vertical reels simultaneously during production."
    },
    {
      q: "Do you offer custom multi-location or regional tour quotes?",
      a: "Yes. For clients requiring multi-state commercial tours or stadium event coverage across the Carolinas and beyond, we provide custom line-item production budgets."
    }
  ];

  const clientLogos = [
    "ProcuraFind",
    "Marcus Johnson",
    "The Sovereign Mindset",
    "Shoot 360",
    "Frozen Kups",
    "QC Signs",
    "Charlotte Metro"
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main>
        {/* ========================================================
            1. STREAMLINED EDITORIAL HERO (Clean & Focused)
        ======================================================== */}
        <section className="pt-28 sm:pt-36 pb-12 px-6 sm:px-12 max-w-6xl mx-auto text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soci-coral/10 border border-soci-coral/20 text-soci-coral text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Client Scoping</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-soci-dark leading-[1.08] mb-6">
            Simple, Scalable <br className="hidden sm:inline" />
            Production Packages
          </h1>

          {/* Subtitle */}
          <p className="text-soci-muted text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
            From single high-impact commercial shoots to ongoing monthly media retainers — submit an inquiry for a custom proposal tailored to your vision, deliverables, and timeline.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full bg-soci-dark text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-soci-coral transition-all shadow-md hover:scale-105 active:scale-95"
            >
              Request Custom Proposal
            </button>

            <button
              onClick={() => onOpenVideo?.('/videos/imn-your-event-audio.mp4', 'Official IMN Showreel', '/videos/imn-your-event-audio.mp4')}
              className="px-8 py-3.5 rounded-full bg-white text-soci-dark border border-soci-border font-mono text-xs uppercase tracking-wider font-bold hover:border-soci-coral hover:text-soci-coral transition-all shadow-sm active:scale-95"
            >
              Watch Showreel Reel
            </button>
          </div>

          {/* 3 Core Value Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-soci-border/60 text-left max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
              <ShieldCheck className="w-5 h-5 text-soci-coral flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-soci-dark block">100% Perpetual Ownership</span>
                <span className="text-[11px] text-soci-muted font-light">All raw footage, stems & 4K masters are yours forever.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
              <Film className="w-5 h-5 text-soci-coral flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-soci-dark block">Cinema-Grade Production</span>
                <span className="text-[11px] text-soci-muted font-light">Sony cinema line, prime glass & Soundstage A studio.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
              <Clock className="w-5 h-5 text-soci-coral flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-soci-dark block">Rapid Turnaround Sprints</span>
                <span className="text-[11px] text-soci-muted font-light">Weekly retainer batches & 7–10 day commercial cuts.</span>
              </div>
            </div>
          </div>

          {/* Client Logo Strip */}
          <div className="mt-12 pt-8 border-t border-soci-border/40">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-soci-muted block mb-4">
              Trusted by Ambitious Brands Across the Carolinas
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 grayscale hover:grayscale-0 transition-all">
              {clientLogos.map((client) => (
                <span key={client} className="font-mono text-xs sm:text-sm font-bold tracking-wider text-soci-dark">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            2. UNIFIED PACKAGES SECTION (Clean 3-Tab Filter)
        ======================================================== */}
        <section className="px-6 sm:px-12 max-w-7xl mx-auto py-12">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-soci-border">
            <div>
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-2">
                PRODUCTION CATALOGUE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-soci-dark tracking-tight">
                All Production Packages ({filteredPackages.length})
              </h2>
            </div>

            {/* Clean 3-Tab Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-100 border border-neutral-200 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('ALL')}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                  activeTab === 'ALL'
                    ? 'bg-soci-dark text-white shadow-sm'
                    : 'text-soci-muted hover:text-soci-dark'
                }`}
              >
                All Packages (6)
              </button>
              <button
                onClick={() => setActiveTab('PRODUCTION')}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                  activeTab === 'PRODUCTION'
                    ? 'bg-soci-dark text-white shadow-sm'
                    : 'text-soci-muted hover:text-soci-dark'
                }`}
              >
                Commercial Shoots (4)
              </button>
              <button
                onClick={() => setActiveTab('RETAINER')}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                  activeTab === 'RETAINER'
                    ? 'bg-soci-dark text-white shadow-sm'
                    : 'text-soci-muted hover:text-soci-dark'
                }`}
              >
                Monthly Retainers (2)
              </button>
            </div>
          </div>

          {/* Packages 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPackages.map((pkg) => {
              const isRetainer = pkg.type === 'RETAINER';

              return (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    pkg.isPopular
                      ? 'bg-neutral-900 text-white shadow-xl ring-2 ring-soci-coral/60'
                      : 'bg-white text-soci-dark border border-soci-border shadow-sm hover:shadow-xl'
                  }`}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full ${
                        pkg.isPopular
                          ? 'bg-soci-coral text-white'
                          : isRetainer
                          ? 'bg-soci-coral/10 text-soci-coral'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}>
                        {pkg.badge}
                      </span>
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                        pkg.isPopular ? 'text-soci-coral' : 'text-soci-muted'
                      }`}>
                        {isRetainer ? 'MONTHLY' : 'PROJECT'}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-1 ${
                      pkg.isPopular ? 'text-white' : 'text-soci-dark'
                    }`}>
                      {pkg.title}
                    </h3>
                    
                    <span className={`text-xs font-mono block mb-3 ${
                      pkg.isPopular ? 'text-neutral-400' : 'text-soci-coral font-semibold'
                    }`}>
                      {pkg.subtitle}
                    </span>

                    <p className={`text-xs leading-relaxed font-light mb-6 ${
                      pkg.isPopular ? 'text-neutral-300' : 'text-soci-muted'
                    }`}>
                      {pkg.description}
                    </p>

                    {/* Deliverable & Turnaround Pill */}
                    <div className={`p-3.5 rounded-2xl mb-6 flex items-center justify-between text-xs font-mono ${
                      pkg.isPopular
                        ? 'bg-neutral-800/80 border border-neutral-700 text-neutral-300'
                        : 'bg-neutral-50 border border-neutral-200 text-soci-dark'
                    }`}>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-soci-coral flex-shrink-0" />
                        <span className="truncate">{pkg.turnaround}</span>
                      </div>
                      <span className="text-[10px] font-bold text-soci-coral uppercase tracking-wider">Custom Scope</span>
                    </div>

                    {/* Specs Checklist */}
                    <div className="space-y-2.5 mb-8">
                      {pkg.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs leading-snug">
                          <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                            pkg.isPopular ? 'text-soci-coral' : 'text-soci-coral'
                          }`} />
                          <span className={pkg.isPopular ? 'text-neutral-200' : 'text-soci-dark'}>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <button
                    onClick={onOpenContact}
                    className={`w-full py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-sm flex items-center justify-center gap-2 ${
                      pkg.isPopular
                        ? 'bg-soci-coral text-white hover:bg-white hover:text-soci-dark'
                        : 'bg-soci-dark text-white hover:bg-soci-coral'
                    }`}
                  >
                    <span>Inquire & Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* ========================================================
              3. INTEGRATED MULTI-MONTH RETAINER SCHEDULE (Cleaned Up)
          ======================================================== */}
          <div className="bg-soci-dark text-white rounded-3xl p-8 sm:p-12 mb-20 border border-neutral-800 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-neutral-800">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soci-coral/20 text-soci-coral text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
                  <Repeat className="w-3.5 h-3.5" />
                  <span>Retainer Agreement Options</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  30 Reels / Month Multi-Month Commitment Terms
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-2 font-light leading-relaxed">
                  Lock in dedicated production days each month with volume agreement terms. Select a schedule below to explore custom scoping.
                </p>
              </div>

              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-full bg-soci-coral text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-soci-dark transition-colors flex items-center gap-2 whitespace-nowrap w-fit self-start md:self-auto"
              >
                <span>Book Retainer Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Term Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {retainerTerms.map((term) => (
                <div
                  key={term.id}
                  onClick={onOpenContact}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                    term.isPopular
                      ? 'bg-neutral-800/90 border-soci-coral shadow-lg'
                      : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        {term.commitment}
                      </span>
                      {term.isPopular && (
                        <span className="px-2 py-0.5 rounded-full bg-soci-coral text-[9px] font-mono font-bold text-white uppercase">
                          Best Value
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-soci-coral transition-colors">
                      {term.term}
                    </h4>
                    <div className="text-xs font-mono text-soci-coral font-bold mb-3">
                      {term.reelsCount}
                    </div>
                    <p className="text-neutral-400 text-xs font-light leading-relaxed">
                      {term.benefit}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300 group-hover:text-soci-coral transition-colors">
                    <span>Inquire for Terms</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              4. HOW WE WORK (3-Step Clear Production Process)
          ======================================================== */}
          <div className="mb-20 pt-10 border-t border-soci-border">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-2">
                SEAMLESS PROCESS
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-soci-dark tracking-tight">
                How an IMN Production Unfolds
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-extrabold font-mono text-soci-coral block mb-4">01</span>
                  <h4 className="text-xl font-bold text-soci-dark mb-2">Discovery & Creative Blueprint</h4>
                  <p className="text-soci-muted text-xs leading-relaxed font-light">
                    We align on your brand story, core audience resonance, script treatment, storyboard framing, and exact milestone delivery dates.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-extrabold font-mono text-soci-coral block mb-4">02</span>
                  <h4 className="text-xl font-bold text-soci-dark mb-2">Principal Photography & Audio</h4>
                  <p className="text-soci-muted text-xs leading-relaxed font-light">
                    Our senior cinema crew captures your shoot on location or inside Soundstage A with 4K multi-cam rigs, studio lighting, and pro sound design.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-extrabold font-mono text-soci-coral block mb-4">03</span>
                  <h4 className="text-xl font-bold text-soci-dark mb-2">Color Grading & 100% Rights</h4>
                  <p className="text-soci-muted text-xs leading-relaxed font-light">
                    DaVinci Resolve film color calibration, custom sound scoring, revision rounds, and a complete handoff of all raw camera files and 4K masters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              5. PRICING FAQS (Clean Accordions)
          ======================================================== */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral block mb-2">
                COMMONLY ASKED
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-soci-dark tracking-tight">
                Frequently Asked Pricing Questions
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-soci-card rounded-2xl border border-soci-border overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-soci-dark text-base hover:text-soci-coral transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-soci-coral' : 'text-soci-muted'}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-sm text-soci-muted leading-relaxed font-light border-t border-soci-border/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Inquire Card */}
            <div className="mt-12 p-8 rounded-3xl bg-neutral-50 border border-soci-border text-center">
              <h4 className="text-xl font-bold text-soci-dark mb-2">Need a custom scope or multi-state tour budget?</h4>
              <p className="text-soci-muted text-xs font-light max-w-lg mx-auto mb-6">
                Tell us about your shoot dates, locations, and campaign goals. We turn around detailed line-item proposals within 24 business hours.
              </p>
              <button
                onClick={onOpenContact}
                className="px-8 py-3.5 rounded-full bg-soci-dark text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-soci-coral transition-all shadow-sm"
              >
                Inquire About a Custom Quote
              </button>
            </div>
          </div>
        </section>
      </main>

      <SociFooter onOpenContact={onOpenContact} />
    </div>
  );
}
