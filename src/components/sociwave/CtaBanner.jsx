import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

export default function CtaBanner({ onOpenContact }) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F1F5F9] border-t border-soci-border">
      <div className="max-w-4xl mx-auto text-center">
        {/* Rating Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soci-card border border-soci-border shadow-sm mb-6">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
            ))}
          </div>
          <span className="font-mono text-xs font-bold text-soci-dark">5 / 5</span>
          <span className="text-soci-muted text-xs">• 18M+ Organic Views</span>
        </div>

        {/* Big CTA Headline (Exact Sociwave) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-soci-dark tracking-tight leading-[1.1] mb-6">
          Maximize your audience <br className="hidden sm:inline" />
          engagement now.
        </h2>

        <p className="text-soci-muted text-base sm:text-lg max-w-xl mx-auto font-light mb-10 leading-relaxed">
          Start your cinematic journey today and see audience retention and brand authority dramatically improve.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-soci-coral text-white font-bold text-sm uppercase tracking-wider hover:bg-soci-dark transition-colors shadow-xl shadow-soci-coral/25 flex items-center gap-2"
          >
            <span>Commission Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            to="/work"
            className="px-8 py-4 rounded-full bg-soci-card border border-soci-border text-soci-dark font-bold text-sm uppercase tracking-wider hover:bg-[#FFFFFF] hover:border-soci-coral hover:text-soci-coral transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

