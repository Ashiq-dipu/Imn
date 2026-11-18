import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import { teamMembers } from '../data/team_data';
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, CheckCircle2, MapPin } from 'lucide-react';

export default function TeamMemberPage({ onOpenContact }) {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug) || teamMembers[0];
  const otherMembers = teamMembers.filter((m) => m.slug !== member.slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={onOpenContact} />

      <main className="flex-1">
        {/* Individual Team Member Hero Profile (#FFFFFF) */}
        <section className="py-12 sm:py-20 px-6 sm:px-12 bg-[#FFFFFF] border-b border-soci-border">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-soci-muted hover:text-soci-coral transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Team Members</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left: Portrait */}
              <div className="lg:col-span-5">
                <div className="aspect-square w-full rounded-3xl overflow-hidden border border-soci-border bg-neutral-900 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
              </div>

              {/* Right: Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F1F5F9] border border-soci-border text-[11px] font-mono font-bold uppercase tracking-wider text-soci-dark">
                    {member.department}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-soci-muted">
                    <MapPin className="w-3.5 h-3.5 text-soci-coral" />
                    {member.location}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-soci-dark tracking-tight leading-[1.08] mb-2">
                  {member.name}
                </h1>
                <div className="text-sm sm:text-base font-mono font-bold text-soci-coral uppercase tracking-wider mb-6">
                  {member.role}
                </div>

                <p className="text-soci-muted text-base sm:text-lg leading-relaxed font-light mb-8">
                  {member.fullBio}
                </p>

                {/* Specialties Grid */}
                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-soci-muted font-bold mb-3">
                    Core Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {member.specialties.map((spec) => (
                      <div
                        key={spec}
                        className="p-4 rounded-2xl bg-[#F1F5F9] border border-soci-border flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-soci-coral flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-soci-dark leading-snug">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hardware & Studio Focus */}
                <div className="p-5 rounded-2xl bg-[#F1F5F9] border border-soci-border flex items-start gap-3.5 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] text-soci-coral border border-soci-border/70 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase font-bold text-soci-muted">
                      Primary Workflow & Studio Gear
                    </div>
                    <div className="text-sm font-bold text-soci-dark mt-0.5">
                      {member.focus}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-soci-coral text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-soci-dark transition-colors shadow-md shadow-soci-coral/20"
                  >
                    <span>Book Project With {member.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F1F5F9] border border-soci-border text-soci-dark font-mono text-xs font-bold uppercase tracking-wider hover:border-soci-coral hover:text-soci-coral transition-colors"
                  >
                    <span>View Studio Work</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Team Members Strip (#F1F5F9) */}
        <section className="py-20 px-6 sm:px-12 bg-[#F1F5F9]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-soci-dark tracking-tight">
                  More IMN Creative Leadership
                </h2>
                <p className="text-soci-muted text-sm font-light mt-1">
                  Explore the specialists behind every IMN production.
                </p>
              </div>
              <Link
                to="/team"
                className="text-xs font-mono font-bold uppercase tracking-wider text-soci-coral hover:text-soci-dark transition-colors inline-flex items-center gap-1"
              >
                <span>All Team Members</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherMembers.map((other) => (
                <Link
                  key={other.slug}
                  to={`/team/${other.slug}`}
                  className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-soci-border shadow-sm hover:shadow-lg hover:border-soci-coral/40 transition-all group flex flex-col"
                >
                  <div className="aspect-square w-full overflow-hidden bg-neutral-900">
                    <img
                      src={other.image}
                      alt={other.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-soci-dark group-hover:text-soci-coral transition-colors">
                      {other.name}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-soci-coral uppercase tracking-wider mt-0.5 mb-2">
                      {other.role}
                    </div>
                    <p className="text-soci-muted text-xs leading-relaxed line-clamp-2">
                      {other.shortBio}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SociFooter onOpenContact={onOpenContact} />
    </div>
  );
}
