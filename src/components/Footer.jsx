import React from 'react';
import { Film, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-20 bg-surface border-t border-white/10 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Studio Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
                <Film className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-lg text-white uppercase tracking-wider">
                IMN LIGHTMENT PRODUCTIONS
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm text-sm font-sans leading-relaxed mb-6 font-light">
              Where brands come alive. Full-service cinematic video production, broadcast podcast infrastructure, and visual authority based in Charlotte, North Carolina.
            </p>
            <div className="text-[11px] text-brand-cyan">
              COORDINATES: 35.2271° N, 80.8431° W // EST
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-3">
            <h5 className="text-white font-bold uppercase tracking-wider mb-4">Navigation</h5>
            <ul className="space-y-2.5">
              <li><a href="#works" className="hover:text-white transition-colors">01. Selected Works</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">02. Capabilities</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">03. The Founders</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">04. Commission Studio</a></li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h5 className="text-white font-bold uppercase tracking-wider mb-4">Broadcast & Channels</h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-blue hover:border-brand-cyan transition-all"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-blue hover:border-brand-cyan transition-all"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <polygon points="10 15 15 12 10 9 10 15"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-blue hover:border-brand-cyan transition-all"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mt-8 group cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:-translate-y-1 transition-all">
                <ArrowUp className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} IMN Lightment Productions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>CHARLOTTE, NC</span>
            <span>CINEMATIC ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
