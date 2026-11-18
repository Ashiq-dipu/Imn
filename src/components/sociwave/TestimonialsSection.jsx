import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const column1 = [
    {
      quote: "IMN Lightment transformed our brand presence. The content they produce is on an entirely different level from anything in the region. They understand leverage.",
      name: "Marcus Johnson",
      role: "CEO at Charter Champions",
      tag: "Docu-Series"
    },
    {
      quote: "The lighting, sound design, and speed of delivery blew our expectations away. We booked high-ticket NIL partnerships within 3 weeks of release.",
      name: "Devon Carter",
      role: "Founder at Black Hawk Live",
      tag: "Athlete Brand"
    },
    {
      quote: "They don't just shoot footage; they architect an entire distribution system. Our investor deck video secured our Series A lead within 14 days.",
      name: "Sarah Jenkins",
      role: "VP Marketing at Apex Media",
      tag: "Commercial"
    }
  ];

  const column2 = [
    {
      quote: "Working with IMN completely changed how patients and investors perceive my clinic. The podcast assets alone tripled our advisory inquiries.",
      name: "Dr. Paul Miller",
      role: "Founder at Miller Wellness",
      tag: "Podcast Series"
    },
    {
      quote: "Our brand visibility improved instantly — sharper commercials, higher organic reach, and stronger commercial conversions across the Carolinas.",
      name: "John Smith",
      role: "Owner at Smith Commercial",
      tag: "Brand Film"
    },
    {
      quote: "Justin and Brian possess an obsessive eye for detail. The camera packages and color science are indistinguishable from high-budget Netflix features.",
      name: "Andre Williams",
      role: "Managing Director at Vanguard Sports",
      tag: "Cinematography"
    }
  ];

  const column3 = [
    {
      quote: "Their cinematic storytelling captured our youth mission with unmatched dignity and power. Donor funding increased by over 300% after release.",
      name: "Marcus Bell",
      role: "Director at Operation GO",
      tag: "Non-Profit Campaign"
    },
    {
      quote: "IMN captured our craftsmanship like an indie cinema masterwork. Customers walk into our cafes specifically referencing the launch film.",
      name: "Maya Chen",
      role: "Founder at Sweetwater Coffee",
      tag: "Brand Story"
    },
    {
      quote: "From pre-production mood boards to 8K master delivery, the communication was flawless. They are our permanent production partners.",
      name: "Rachel Sterling",
      role: "Executive Producer at Horizon Tech",
      tag: "Corporate Series"
    }
  ];

  // Helper component for single card
  const TestimonialCard = ({ item }) => (
    <div className="bg-soci-card p-7 sm:p-8 rounded-3xl border border-soci-border shadow-sm hover:shadow-xl hover:border-soci-coral/40 transition-all duration-300 flex flex-col justify-between mb-6 group cursor-default">
      <div>
        {/* Header: Stars + Tag */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500" />
            ))}
          </div>
          <span className="text-[10px] font-mono font-semibold text-soci-muted uppercase px-2.5 py-0.5 rounded-full bg-neutral-100 border border-soci-border">
            {item.tag}
          </span>
        </div>

        {/* Quote */}
        <p className="text-soci-dark text-[15px] sm:text-base font-medium leading-relaxed mb-6">
          "{item.quote}"
        </p>
      </div>

      {/* Author Footer */}
      <div className="pt-5 border-t border-soci-border flex items-center justify-between">
        <div>
          <div className="font-bold text-soci-dark text-sm flex items-center gap-1.5">
            <span>{item.name}</span>
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="text-xs font-mono text-soci-muted mt-0.5">
            {item.role}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 sm:py-32 px-6 sm:px-12 bg-[#F1F5F9] border-t border-soci-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-3">
              Hear from leading brands
            </h2>
            <p className="text-soci-muted text-base sm:text-lg max-w-2xl font-light">
              Explore success stories of leaders and founders who built unshakeable market authority through our cinema assets.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-soci-muted bg-soci-card px-4 py-2 rounded-full border border-soci-border shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>CONTINUOUS FEED • HOVER TO PAUSE</span>
          </div>
        </div>

        {/* 3-Column Multi-Directional Ongoing Slider */}
        <div className="relative h-[640px] sm:h-[700px] overflow-hidden">
          {/* Top Fade Gradient Mask */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent z-10" />

          {/* Bottom Fade Gradient Mask */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent z-10" />

          {/* Columns Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {/* Column 1 - Bottom to top ongoing */}
            <div className="overflow-hidden">
              <div className="flex flex-col animate-marquee-vertical-up hover:[animation-play-state:paused]">
                {[...column1, ...column1].map((item, idx) => (
                  <TestimonialCard key={`col1-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 2 - Top to bottom ongoing */}
            <div className="hidden md:block overflow-hidden">
              <div className="flex flex-col animate-marquee-vertical hover:[animation-play-state:paused]">
                {[...column2, ...column2].map((item, idx) => (
                  <TestimonialCard key={`col2-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 3 - Bottom to top ongoing */}
            <div className="hidden lg:block overflow-hidden">
              <div className="flex flex-col animate-marquee-vertical-up-fast hover:[animation-play-state:paused]">
                {[...column3, ...column3].map((item, idx) => (
                  <TestimonialCard key={`col3-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
