import React, { useState } from 'react';
import { services } from '../data/services';
import { Layers, CheckCircle2, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = services[activeTab];

  return (
    <section id="services" className="relative py-28 px-6 md:px-12 lg:px-20 bg-surface/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-widest mb-3">
            <Layers className="w-4 h-4" />
            <span>// 02. CAPABILITIES & SYSTEMS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white max-w-4xl">
            FULL-STACK VISUAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-white">
              AUTHORITY SYSTEMS
            </span>
          </h2>
        </div>

        {/* Interactive Studio Accordion / Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Service Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {services.map((service, index) => {
              const isSelected = activeTab === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "glass-panel-glow bg-surface-elevated/90 border-brand-blue"
                      : "bg-surface/60 border-white/5 hover:border-white/20 hover:bg-surface/90"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-sm text-brand-cyan font-bold">
                      {service.num} //
                    </span>
                    <span className="font-mono text-[10px] tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-400 uppercase">
                      IN-HOUSE
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mt-3 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {service.headline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage & Deliverables Display */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[560px]">
            {/* Visual Header & Deliverables */}
            <div>
              {/* Media Preview Still */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10 group shadow-2xl">
                <img
                  src={activeService.videoSnippet}
                  alt={activeService.title}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                {/* Metric pill */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-brand-cyan/40 text-brand-cyan font-mono text-xs">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{activeService.metrics}</span>
                </div>
              </div>

              {/* Service Detailed Narrative */}
              <div className="mb-8">
                <h4 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-3">
                  {activeService.headline}
                </h4>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                  {activeService.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-white/10">
                {activeService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Booking Trigger */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span>Custom packages tailored to 2026 growth targets</span>
              </div>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-brand-blue hover:text-white transition-all shadow-lg"
              >
                <span>Request Scope & Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

