import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import { teamMembers } from '../data/team_data';
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';

export default function TeamPage({ onOpenContact }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main className="flex-1">
        {/* Page Header Band (#FFFFFF) */}
        <section className="py-16 sm:py-24 px-6 sm:px-12 bg-[#FFFFFF] border-b border-soci-border">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-soci-dark tracking-tight leading-[1.08] mb-5">
                Meet the <span className="text-soci-coral">IMN team.</span>
              </h1>
              <p className="text-soci-muted text-base sm:text-xl font-light max-w-2xl leading-relaxed">
                Directors, cinematographers, and color scientists dedicated to growing your brand through cinema-grade storytelling and disciplined distribution.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-soci-coral text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-soci-dark transition-colors shadow-md shadow-soci-coral/20"
              >
                <span>Work With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F1F5F9] border border-soci-border text-soci-dark font-mono text-xs font-bold uppercase tracking-wider hover:border-soci-coral hover:text-soci-coral transition-colors"
              >
                <span>Studio Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Full Team Roster Grid (#F1F5F9) */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 bg-[#F1F5F9]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug}
                  to={`/team/${member.slug}`}
                  className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-xl hover:border-soci-coral/40 transition-all duration-300 group grid grid-cols-1 sm:grid-cols-12 items-stretch"
                >
                  {/* Portrait Image (Locked 1:1 aspect ratio so square graphics never crop) */}
                  <div className="sm:col-span-5 bg-[#121316] flex items-center justify-center overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                    </div>
                  </div>

                  {/* Bio & Specialties */}
                  <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-soci-muted flex items-center gap-1 whitespace-nowrap">
                          <MapPin className="w-3 h-3 text-soci-coral" />
                          {member.location}
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-soci-dark font-semibold whitespace-nowrap">
                          {member.department}
                        </span>
                      </div>

                      <h2 className="text-2xl font-extrabold text-soci-dark group-hover:text-soci-coral transition-colors mb-1">
                        {member.name}
                      </h2>
                      <div className="text-xs font-mono font-bold text-soci-coral uppercase tracking-wider mb-4">
                        {member.role}
                      </div>

                      <p className="text-soci-muted text-sm leading-relaxed font-light mb-5">
                        {member.fullBio}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {member.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-[#F1F5F9] text-soci-dark font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-soci-border/70 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-soci-dark group-hover:text-soci-coral transition-colors">
                      <span>View Full Profile</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Direct Partner Banner (#FFFFFF) */}
        <section className="py-20 px-6 sm:px-12 bg-[#FFFFFF] border-t border-soci-border">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#F1F5F9] rounded-3xl p-8 sm:p-12 border border-soci-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-soci-dark mb-2">
                  Want to partner directly with our directors?
                </h2>
                <p className="text-soci-muted text-sm sm:text-base font-light max-w-xl">
                  Send your project brief, retainer goals, or studio production request straight to our leadership desk in Charlotte, NC.
                </p>
              </div>

              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-full bg-soci-coral text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-soci-dark transition-colors flex items-center gap-2 whitespace-nowrap shadow-md shadow-soci-coral/20"
              >
                <span>Email Us</span>
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <SociFooter onOpenContact={onOpenContact} />
    </div>
  );
}
