import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingSection({ onOpenContact }) {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-soci-cream border-y border-soci-border">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-4">
            Discover your perfect plan
          </h2>
          <p className="text-soci-muted text-base sm:text-lg font-light">
            Choose the strategic media plan for continuous market optimization, guaranteeing growth and authority.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="inline-flex items-center gap-2 bg-soci-card p-1.5 rounded-full border border-soci-border mt-8 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-soci-dark text-white'
                  : 'text-soci-muted hover:text-soci-dark'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-soci-coral text-white'
                  : 'text-soci-muted hover:text-soci-dark'
              }`}
            >
              <span>Annual Partnership</span>
              <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[10px]">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (Exact 2-Card Sociwave Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Plan 1: Basic */}
          <div className="bg-soci-card rounded-3xl p-8 sm:p-10 border border-soci-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-soci-muted mb-2">
                For Initial Brands
              </div>
              <h3 className="text-2xl font-bold text-soci-dark mb-4">
                Starter Authority
              </h3>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold text-soci-dark">
                  {billingCycle === 'monthly' ? '$2,500' : '$2,000'}
                </span>
                <span className="text-soci-muted text-sm font-medium">
                  / month
                </span>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-3.5 rounded-2xl bg-soci-cream border border-soci-border text-soci-dark font-bold text-sm hover:bg-soci-dark hover:text-white transition-colors mb-8 shadow-sm"
              >
                Get Started
              </button>

              <div className="text-xs font-mono uppercase tracking-wider text-soci-dark font-bold mb-4">
                Features included:
              </div>
              <ul className="space-y-3.5 text-sm text-soci-muted">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>Visual brand & media platform audit</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>1 Full commercial spot or 6 podcast cutdowns</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>4K cinema grade & broadcast audio mastering</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>Monthly content calendar & distribution map</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>Direct creator support (24hr response)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Plan 2: Popular Scale Plan */}
          <div className="bg-soci-card rounded-3xl p-8 sm:p-10 border-2 border-soci-coral shadow-xl flex flex-col justify-between relative">
            {/* Popular Badge */}
            <div className="absolute -top-3.5 right-8 px-3.5 py-1 rounded-full bg-soci-coral text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-md">
              POPULAR PARTNERSHIP
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-soci-coral font-bold mb-2">
                For Scaling Growth
              </div>
              <h3 className="text-2xl font-bold text-soci-dark mb-4">
                Full-Throttle Media Arm
              </h3>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold text-soci-dark">
                  {billingCycle === 'monthly' ? '$5,500' : '$4,400'}
                </span>
                <span className="text-soci-muted text-sm font-medium">
                  / month
                </span>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-3.5 rounded-2xl bg-soci-coral text-white font-bold text-sm hover:bg-soci-dark transition-colors mb-8 shadow-lg shadow-soci-coral/25"
              >
                Commission Full Team
              </button>

              <div className="text-xs font-mono uppercase tracking-wider text-soci-dark font-bold mb-4">
                Features included:
              </div>
              <ul className="space-y-3.5 text-sm text-soci-dark font-medium">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>Full 4K multi-camera studio production</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>20+ viral short-form assets engineered per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>Dedicated creative director & post-production lead</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>Paid media ad cutdowns & high-conversion hook testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>Athlete & Executive personal brand PR assets</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-soci-coral flex-shrink-0" />
                  <span>Priority same-day revision pipeline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

