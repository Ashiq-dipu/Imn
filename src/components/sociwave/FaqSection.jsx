import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What production equipment and camera packages do you shoot on?",
      a: "We own and deploy tier-one Hollywood camera packages including ARRI Alexa Mini LF, RED V-Raptor 8K, and Sony FX6/FX9 systems paired with Cooke and Atlas anamorphic cinema lenses, professional wireless audio, and studio lighting."
    },
    {
      q: "How fast is the turnaround from shooting to final delivery?",
      a: "Standard commercial deliverables and podcast episodes are delivered within 5 to 7 business days. High-priority viral shorts and social cutdowns can be expedited through our same-day post-production pipeline."
    },
    {
      q: "Can you handle scriptwriting, creative concepts, and storyboarding?",
      a: "Yes. We provide full-stack creative direction. We write scripts, develop psychological hooks, storyboard visual sequences, and direct talent on set to ensure your core message commands immediate respect."
    },
    {
      q: "Where is the studio located, and do you travel for national shoots?",
      a: "Our primary studio and production base is in Charlotte, North Carolina. However, our field crews frequently deploy nationally for brand commercials, athlete training camps, and keynote event documentaries."
    },
    {
      q: "How do you repurpose long-form podcast recordings into viral shorts?",
      a: "Our editorial team analyzes your full session to extract high-tension moments, provocative insights, and value bombs. We add dynamic pacing, sound design, animated kinetic captions, and platform-specific formatting for TikTok, Reels, and Shorts."
    },
    {
      q: "What is the process to get started?",
      a: "Click 'Start Project' or 'Get Started' to submit your brief. We schedule a 20-minute creative strategy review, deliver a custom production roadmap, and lock in your shooting schedule."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Exact Sociwave FAQ Header) */}
          <div className="lg:col-span-5">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-4">
              Your queries Solved
            </h1>
            <p className="text-soci-muted text-base leading-relaxed mb-8 font-light">
              Get immediate answers about our cinema production processes, pricing packages, and guaranteed path to brand authority.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="px-6 py-3 rounded-full bg-soci-dark text-white font-bold text-xs uppercase tracking-wider hover:bg-soci-coral transition-colors"
              >
                See projects
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 rounded-full bg-[#FFFFFF] border border-soci-border text-soci-dark font-bold text-xs uppercase tracking-wider hover:border-soci-coral hover:text-soci-coral transition-colors"
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-soci-card rounded-2xl border border-soci-border overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-soci-dark hover:text-soci-coral transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-soci-cream flex items-center justify-center text-soci-coral flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-soci-muted leading-relaxed border-t border-soci-border/60 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

