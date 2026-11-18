import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection({ isOpenModal, onCloseModal }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Commercial & Brand Film");
  const [selectedBudget, setSelectedBudget] = useState("$5k — $10k");

  const servicesList = [
    "Commercial & Brand Film",
    "Podcast Studio & Repurposing",
    "Athlete / Personal Brand",
    "Documentary & Event"
  ];

  const budgetList = [
    "$3k — $5k",
    "$5k — $10k",
    "$10k — $25k",
    "$25k+"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const content = (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Studio Direct Info */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span>// 04. COMMISSION THE STUDIO</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-none mb-6">
            READY TO MAKE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue">
              YOUR BRAND ALIVE?
            </span>
          </h2>

          <p className="text-neutral-300 text-base leading-relaxed mb-8 font-light">
            Tell us about your campaign goals, production scope, or podcast ambitions. We will review your project and deliver a tailored creative blueprint within 24 hours.
          </p>

          {/* Direct channels */}
          <div className="space-y-4 pt-6 border-t border-white/10 font-mono text-xs text-neutral-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-neutral-500 uppercase">STUDIO LOCATION</div>
                <div className="text-white font-semibold">Charlotte, North Carolina</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-neutral-500 uppercase">DIRECT INQUIRIES</div>
                <div className="text-white font-semibold">hello@imnlightmentpro.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Interactive Form */}
        <div className="lg:col-span-7 glass-panel-glow rounded-3xl p-8 sm:p-12 border border-brand-blue/30 relative shadow-2xl">
          {submitted ? (
            <div className="py-16 text-center flex flex-col items-center justify-center animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(52,211,153,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white uppercase mb-2">
                PROJECT BRIEF TRANSMITTED
              </h3>
              <p className="text-neutral-400 text-sm max-w-md">
                Justin and the IMN directing team have received your details. We will reach out within 24 hours to schedule your creative review.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Select Service Pills */}
              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2.5">
                  1. Primary Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesList.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setSelectedService(srv)}
                      className={`px-4 py-2.5 rounded-xl text-left text-xs font-medium transition-all ${
                        selectedService === srv
                          ? "bg-brand-blue text-white font-semibold border-brand-cyan border"
                          : "bg-surface/80 text-neutral-300 hover:bg-surface-elevated border border-white/5"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Budget Range */}
              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2.5">
                  2. Target Investment
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetList.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`px-3 py-2 rounded-xl text-center font-mono text-xs transition-all ${
                        selectedBudget === b
                          ? "bg-brand-blue text-white font-bold border-brand-cyan border"
                          : "bg-surface/80 text-neutral-400 hover:text-white border border-white/5"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Marcus Miller"
                    className="w-full px-4 py-3 rounded-xl bg-surface/90 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-blue text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="marcus@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface/90 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-blue text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Project Vision & Target Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your core goal, audience, or desired launch date..."
                  className="w-full px-4 py-3 rounded-xl bg-surface/90 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-blue text-sm resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue via-brand-blue to-brand-cyan text-white font-display font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(0,112,243,0.7)] transition-all flex items-center justify-center gap-3"
              >
                <span>Submit Creative Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 lg:px-20 bg-background border-t border-white/10">
      {content}
    </section>
  );
}

