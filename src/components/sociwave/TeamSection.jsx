import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { teamMembers } from '../../data/team_data';

export default function TeamSection({ onOpenContact }) {
  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-12 bg-[#F1F5F9] border-t border-soci-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-soci-dark tracking-tight mb-4">
              Meet the IMN team
            </h2>
            <p className="text-soci-muted text-base sm:text-lg max-w-2xl font-light">
              A passionate group dedicated to growing your brand through cinema-grade storytelling and disciplined distribution.
            </p>
          </div>

          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-soci-dark text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-soci-coral transition-colors w-fit flex-shrink-0"
          >
            <span>View Full Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4x Team Cards Grid (Exact Sociwave team card style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              to={`/team/${member.slug}`}
              className="bg-soci-card rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-md hover:border-soci-coral/40 transition-all group flex flex-col justify-between"
            >
              <div className="aspect-square w-full overflow-hidden bg-neutral-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-soci-dark group-hover:text-soci-coral transition-colors mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-soci-coral uppercase tracking-wider mb-3">
                    {member.role}
                  </div>
                  <p className="text-soci-muted text-xs leading-relaxed">
                    {member.shortBio}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Callout Banner (Exact Sociwave application/partner banner) */}
        <div className="bg-soci-card rounded-3xl p-8 sm:p-10 border border-soci-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-xl font-bold text-soci-dark mb-1">
              Want to partner with our studio?
            </h4>
            <p className="text-soci-muted text-sm">
              Send your project brief or campaign deck directly to the directors.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-full bg-soci-coral text-white font-bold text-xs uppercase tracking-wider hover:bg-soci-dark transition-colors flex items-center gap-2 whitespace-nowrap shadow-md shadow-soci-coral/20"
          >
            <span>Email Us</span>
            <Mail className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
