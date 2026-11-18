import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FaqSection from '../components/sociwave/FaqSection';
import SociFooter from '../components/sociwave/SociFooter';
import { ArrowRight } from 'lucide-react';

export default function FaqPage({ onOpenContact }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main className="flex-1">
        <FaqSection onOpenContact={onOpenContact} />

        {/* Direct Consultation Prompt */}
        <section className="py-20 px-6 md:px-12 bg-[#FFFFFF] border-t border-soci-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-soci-dark tracking-tight mb-4">
              Still have questions about your production?
            </h2>
            <p className="text-soci-muted text-base sm:text-lg max-w-2xl mx-auto font-light mb-8">
              Book a 20-minute strategy call with our Charlotte studio team to scope camera packages, timelines, and monthly retainers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-soci-coral text-white font-bold text-xs uppercase tracking-wider hover:bg-soci-dark transition-colors shadow-lg"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#F1F5F9] border border-soci-border text-soci-dark font-bold text-xs uppercase tracking-wider hover:border-soci-coral hover:text-soci-coral transition-colors"
              >
                Contact Studio Desk
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SociFooter onOpenContact={onOpenContact} />
    </div>
  );
}

