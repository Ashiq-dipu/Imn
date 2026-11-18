import React from 'react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

export default function CaseStudiesSection({ onSelectVideo }) {
  const caseStudies = [
    {
      id: "charter-champions",
      client: "Charter Champions",
      campaign: "Beyond The Trophy Docu-Series",
      industry: "Athletics & Leadership",
      stat1: "128K",
      stat1Label: "Organic Views",
      stat2: "+245%",
      stat2Label: "Audience Reach",
      stat3: "+189%",
      stat3Label: "Brand Inquiries",
      image: "/images/sports-action-1.jpg",
      videoId: "jBR6lkrkDbs"
    },
    {
      id: "dr-paul-miller",
      client: "Miller Wellness & Advisory",
      campaign: "The Sovereign Mindset Podcast",
      industry: "Executive Healthcare",
      stat1: "94K",
      stat1Label: "Episode Plays",
      stat2: "+278%",
      stat2Label: "Consult Requests",
      stat3: "+225%",
      stat3Label: "Patient Loyalty",
      image: "/images/podcast-studio-wide.jpg",
      videoId: "oiu4XcBTKJI"
    },
    {
      id: "operation-go",
      client: "Operation GO",
      campaign: "Mission Driven Youth Campaign",
      industry: "Non-Profit Foundation",
      stat1: "150K",
      stat1Label: "Video Reach",
      stat2: "+320%",
      stat2Label: "Donor Funding",
      stat3: "+250%",
      stat3Label: "Community Growth",
      image: "/images/showcase-event.jpg",
      videoId: "vC93ZlbdDG0"
    },
    {
      id: "hyatt-corpcon",
      client: "ProcuraFind & Hyatt Centric",
      campaign: "Where Brands Come Alive Annual Summit",
      industry: "Corporate & Tech",
      stat1: "112K",
      stat1Label: "Target Impressions",
      stat2: "+290%",
      stat2Label: "Executive Leads",
      stat3: "+215%",
      stat3Label: "Sponsor Renewals",
      image: "/images/main-hall-speech.png",
      videoId: "1L9HU7yaonc"
    }
  ];

  return (
    <section id="case-studies" className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-4">
            Our results speak louder than words
          </h2>
          <p className="text-soci-muted text-base sm:text-lg max-w-2xl font-light">
            Take a look at how we've helped founders and athletes expand reach, elevate positioning, and unlock measurable revenue.
          </p>
        </div>

        {/* 2x2 Detailed Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Video Trigger Box */}
              <div
                onClick={() => onSelectVideo(cs.videoId, cs.campaign)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 cursor-pointer"
              >
                <img
                  src={cs.image}
                  alt={cs.campaign}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors" />

                {/* Center Play Button Pill */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-md text-soci-dark flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-soci-coral group-hover:text-white transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider border border-white/10">
                    {cs.industry}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-xs font-mono uppercase font-semibold text-soci-coral mb-1">
                      {cs.client}
                    </div>
                    <h3
                      onClick={() => onSelectVideo(cs.videoId, cs.campaign)}
                      className="text-2xl font-bold text-soci-dark hover:text-soci-coral transition-colors cursor-pointer"
                    >
                      {cs.campaign}
                    </h3>
                  </div>

                  <button
                    onClick={() => onSelectVideo(cs.videoId, cs.campaign)}
                    className="w-10 h-10 rounded-full border border-soci-border flex items-center justify-center text-soci-dark hover:bg-soci-dark hover:text-white transition-colors flex-shrink-0"
                    aria-label="View case study"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 3 Metric Progress / Stat Bars */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-soci-border">
                  <div>
                    <div className="text-2xl font-extrabold text-soci-dark font-sans">
                      {cs.stat1}
                    </div>
                    <div className="text-[11px] font-mono text-soci-muted uppercase mt-0.5">
                      {cs.stat1Label}
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-extrabold text-soci-coral font-sans">
                      {cs.stat2}
                    </div>
                    <div className="text-[11px] font-mono text-soci-muted uppercase mt-0.5">
                      {cs.stat2Label}
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-extrabold text-soci-dark font-sans">
                      {cs.stat3}
                    </div>
                    <div className="text-[11px] font-mono text-soci-muted uppercase mt-0.5">
                      {cs.stat3Label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
