import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Play, Film, ArrowUpRight, Filter } from 'lucide-react';

export default function WorksSection({ onSelectVideo, onHoverCursor }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Docu-Series & Narrative",
    "Podcast Studio",
    "Commercial & Promo",
    "Athlete Branding"
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="works" className="relative py-28 px-6 md:px-12 lg:px-20 bg-background overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-widest mb-3">
              <Film className="w-4 h-4" />
              <span>// 01. SELECTED FILMOGRAPHY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white">
              SEE THE WORK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-neutral-400">
                IN CINEMATIC MOTION
              </span>
            </h2>
          </div>

          <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
            Every cut is engineered to establish market dominance. From high-octane commercial campaigns to broadcast podcast infrastructure.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 uppercase tracking-wider ${
                activeCategory === cat
                  ? "bg-brand-blue text-white shadow-[0_0_20px_rgba(0,112,243,0.6)] font-bold"
                  : "bg-surface/80 text-neutral-400 hover:text-white hover:bg-surface-elevated border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectVideo(project.videoId, project.title)}
              onMouseEnter={() => onHoverCursor && onHoverCursor(true, "PLAY")}
              onMouseLeave={() => onHoverCursor && onHoverCursor(false)}
              className="group relative cursor-pointer flex flex-col rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-brand-blue/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,112,243,0.25)]"
            >
              {/* Media Container with 16:9 or 2.39:1 aspect styling */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                />

                {/* Ambient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Floating Aspect & Tech Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-brand-cyan">
                    {project.aspectRatio}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-neutral-300 hidden sm:inline-block">
                    {project.camera}
                  </span>
                </div>

                {/* Year tag */}
                <div className="absolute top-4 right-4 z-10 font-mono text-[11px] text-neutral-300 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                  {project.year}
                </div>

                {/* Hover Play Button Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/90 border border-brand-cyan/80 text-white flex items-center justify-center transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_40px_rgba(0,112,243,0.8)]">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Project Card Footer & Specs */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                    <span className="text-brand-cyan font-semibold uppercase">{project.category}</span>
                    <span>{project.client}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-brand-cyan transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tags and Watch CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-white/[0.04] text-[10px] font-mono text-neutral-400 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1 font-mono text-xs text-white group-hover:text-brand-cyan transition-colors font-semibold">
                    PLAY REEL <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

