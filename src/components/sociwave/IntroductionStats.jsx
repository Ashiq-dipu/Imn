import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export default function IntroductionStats() {
  const stats = [
    {
      num: "998M+",
      title: "Total Impressions",
      desc: "Expert cinematic direction and multi-platform distribution deliver rapid, measurable audience growth.",
      icon: TrendingUp
    },
    {
      num: "780K+",
      title: "Follower & Audience Growth",
      desc: "Fostering unshakeable brand loyalty strongly boosts client commitment and long-term equity.",
      icon: Users
    },
    {
      num: "$12M+",
      title: "Revenue & Deal Value",
      desc: "Monetizing cinematic narratives turns social views and commercial spots into high-ticket enterprise contracts.",
      icon: DollarSign
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        {/* Big Statement Headline (Exactly like Sociwave) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-soci-dark tracking-tight leading-[1.15] max-w-4xl mb-20">
          We blend <span className="text-soci-coral">creativity</span> and <span className="underline decoration-soci-coral/40">cinema strategy</span> to transform your brand into measurable, lasting authority.
        </h2>

        {/* 3x Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-soci-card p-8 sm:p-10 rounded-3xl border border-soci-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-soci-cream border border-soci-border flex items-center justify-center text-soci-coral mb-8">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-2">
                    {stat.num}
                  </div>
                  <div className="text-base font-bold text-soci-dark mb-4">
                    {stat.title}
                  </div>
                </div>
                <p className="text-soci-muted text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

