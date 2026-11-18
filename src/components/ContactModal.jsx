import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Commercial Video Production");
  const [selectedBudget, setSelectedBudget] = useState("$5,000 — $10,000");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-soci-card rounded-3xl p-8 sm:p-10 border border-soci-border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-soci-cream border border-soci-border flex items-center justify-center text-soci-dark hover:bg-soci-dark hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-soci-dark mb-2">
              PROJECT BRIEF RECEIVED
            </h3>
            <p className="text-soci-muted text-sm max-w-md">
              Justin and the IMN directing team have received your project details. We will reach out within 24 hours to schedule your strategy review.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-8 px-6 py-2.5 rounded-full bg-soci-dark text-white font-bold text-xs uppercase"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-soci-coral" />
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
                COMMISSION STUDIO
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-soci-dark tracking-tight mb-2">
              Tell us about your project
            </h3>
            <p className="text-soci-muted text-sm mb-6">
              Fill out this quick brief and our directors will prepare a custom creative roadmap.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-soci-muted mb-2">
                  Target Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Commercial Video Production",
                    "Podcast Studio & Viral Shorts",
                    "Athlete / Personal Brand",
                    "Documentary & Live Event"
                  ].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSelectedService(s)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                        selectedService === s
                          ? "bg-soci-dark text-white border-soci-dark"
                          : "bg-soci-cream text-soci-dark border-soci-border hover:bg-soci-card"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-soci-muted mb-2">
                  Budget Target
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["$2,500 — $5k", "$5k — $10k", "$10k — $25k", "$25k+"].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all ${
                        selectedBudget === b
                          ? "bg-soci-coral text-white border-soci-coral"
                          : "bg-soci-cream text-soci-dark border-soci-border hover:bg-soci-card"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-soci-muted mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Marcus Miller"
                    className="w-full px-4 py-3 rounded-xl bg-soci-cream border border-soci-border text-soci-dark placeholder-soci-muted text-sm focus:outline-none focus:border-soci-coral"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-soci-muted mb-1.5">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="marcus@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-soci-cream border border-soci-border text-soci-dark placeholder-soci-muted text-sm focus:outline-none focus:border-soci-coral"
                  />
                </div>
              </div>

              {/* Vision */}
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-soci-muted mb-1.5">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your brand goals, target release date, or location..."
                  className="w-full px-4 py-3 rounded-xl bg-soci-cream border border-soci-border text-soci-dark placeholder-soci-muted text-sm focus:outline-none focus:border-soci-coral resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-soci-coral text-white font-bold text-sm uppercase tracking-wider hover:bg-soci-dark transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Submit Brief</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

