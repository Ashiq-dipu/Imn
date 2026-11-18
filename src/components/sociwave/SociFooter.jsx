import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../SocialIcons';
import servicesData from '../../data/imn_services_data.json';

export default function SociFooter({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = Object.values(servicesData);

  return (
    <footer className="bg-soci-dark text-white pt-20 pb-12 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-4 hover:opacity-85 transition-opacity" aria-label="IMN Lightment Productions Home">
              <img
                src="/images/imn-logo-white.png"
                alt="IMN Lightment Productions"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6 font-light">
              Where brands come alive. Charlotte's premier creative agency for video production, podcasting, photography, and brand development for athletes and enterprises.
            </p>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-full bg-soci-coral text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-soci-dark transition-colors shadow-lg"
            >
              Start Your Project
            </button>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h5 className="font-mono text-xs text-neutral-400 uppercase tracking-widest font-bold mb-4">
              Explore
            </h5>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li><Link to="/about" className="hover:text-soci-coral transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-soci-coral transition-colors">Team</Link></li>
              <li><Link to="/pricing" className="hover:text-soci-coral transition-colors">Pricing & Retainers</Link></li>
              <li><Link to="/features/blind-brand" className="hover:text-soci-coral transition-colors">Blind Brand</Link></li>
              <li><Link to="/behind-the-brand" className="hover:text-soci-coral transition-colors">Behind the Brand</Link></li>
              <li><Link to="/business-visibility-scorecard" className="hover:text-soci-coral transition-colors">Visibility Scorecard</Link></li>
              <li><Link to="/faq" className="hover:text-soci-coral transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-soci-coral transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Real Services Portfolios */}
          <div className="md:col-span-3">
            <h5 className="font-mono text-xs text-neutral-400 uppercase tracking-widest font-bold mb-4">
              Production Services
            </h5>
            <ul className="space-y-2 text-xs text-neutral-300">
              {servicesList.map((s) => (
                <li key={s.slug}>
                  <Link to={s.path} className="hover:text-soci-coral transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Headquarters */}
          <div className="md:col-span-3">
            <h5 className="font-mono text-xs text-neutral-400 uppercase tracking-widest font-bold mb-4">
              Official Channels
            </h5>
            <ul className="space-y-2.5 text-sm text-neutral-300 mb-6">
              <li>
                <a
                  href="https://www.youtube.com/@imnlightmentpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-soci-coral transition-colors flex items-center gap-2"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>YouTube (@imnlightmentpro)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/imnlightment/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-soci-coral transition-colors flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Instagram (@imnlightment/reels)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Imnlightment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-soci-coral transition-colors flex items-center gap-2"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-500" />
                  <span>Facebook (Imnlightment)</span>
                </a>
              </li>
            </ul>

            <div className="text-xs text-neutral-400 font-light border-t border-neutral-800 pt-4">
              <div className="text-white font-medium">Charlotte Soundstage & Studio</div>
              <div>Charlotte, North Carolina, USA</div>
              <div className="text-soci-coral font-mono text-[11px] mt-1">35.2271° N, 80.8431° W</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} IMN Lightment Productions. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
