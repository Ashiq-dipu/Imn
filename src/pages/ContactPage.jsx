import React, { useState } from 'react';
import Header from '../components/Header';
import SociFooter from '../components/sociwave/SociFooter';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/SocialIcons';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Promotional Videos',
    budget: '$2,645 – $5,750',
    timeline: 'Within 30 Days',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-soci-dark">
      <Header onOpenContact={() => {}} />

      <main className="py-16 sm:py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-soci-coral" />
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
              COMMISSION INQUIRY
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-soci-dark tracking-tight mb-4">
            Schedule Your Brand Review
          </h1>
          <p className="text-soci-muted text-lg sm:text-xl max-w-3xl font-light">
            Get in touch with IMN Lightment Productions. Start your project, schedule a free brand review, or chat with our team in Charlotte, NC.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Form */}
          <div className="lg:col-span-7 bg-soci-card p-8 sm:p-12 rounded-3xl border border-soci-border shadow-sm">
            {submitted ? (
              <div className="py-16 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-soci-dark mb-2">
                  Brand Audit Request Received!
                </h3>
                <p className="text-soci-muted text-sm max-w-md mx-auto mb-8 font-light">
                  Thank you, <span className="font-semibold text-soci-dark">{formData.name}</span>. Justin Ortiz and the IMN production desk will review your submission and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-soci-border text-xs font-mono font-bold hover:bg-neutral-100 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-soci-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Justin Ortiz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-soci-border text-soci-dark placeholder:text-neutral-400 focus:outline-none focus:border-soci-coral transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-soci-dark mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="justin@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-soci-border text-soci-dark placeholder:text-neutral-400 focus:outline-none focus:border-soci-coral transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-soci-dark mb-2">
                      Business / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Brands"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-soci-border text-soci-dark placeholder:text-neutral-400 focus:outline-none focus:border-soci-coral transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-soci-dark mb-2">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-soci-border text-soci-dark text-sm focus:outline-none focus:border-soci-coral"
                    >
                      <option>Promotional Videos</option>
                      <option>Podcast Production</option>
                      <option>Social Reels (30 Reels / mo)</option>
                      <option>Commercial Production</option>
                      <option>Event Coverage</option>
                      <option>Brand Blueprint</option>
                      <option>Blind Brand Feature</option>
                      <option>Social Media Management</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-soci-dark mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-soci-border text-soci-dark text-sm focus:outline-none focus:border-soci-coral"
                    >
                      <option>$2,645 – $5,750 (Promotional)</option>
                      <option>$4,025 – $10,350 (Social Reels)</option>
                      <option>$7,475 – $23,000+ (Commercials)</option>
                      <option>$25,000+ (Multi-Platform / Retainer)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-soci-dark mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-soci-border text-soci-dark text-sm focus:outline-none focus:border-soci-coral"
                    >
                      <option>Under 30 Days</option>
                      <option>30 – 60 Days</option>
                      <option>Next Quarter</option>
                      <option>Monthly Retainer Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-soci-dark mb-2">
                    Tell us about your brand & vision *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What goals are you looking to achieve with this production?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-soci-border text-soci-dark placeholder:text-neutral-400 focus:outline-none focus:border-soci-coral transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-soci-coral text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-soci-dark transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Details & Official Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-soci-dark text-white p-8 sm:p-10 rounded-3xl">
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-soci-coral">
                HEADQUARTERS
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-6">
                Studio Coordinates
              </h3>

              <div className="space-y-6 text-sm text-neutral-300 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-soci-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Charlotte Soundstage & Studio</div>
                    <div>Charlotte, North Carolina, USA</div>
                    <div className="text-xs font-mono text-neutral-500 mt-1">35.2271° N, 80.8431° W</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-soci-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Production Inquiries</div>
                    <a href="mailto:hello@imnlightmentpro.com" className="hover:text-soci-coral transition-colors">
                      hello@imnlightmentpro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-soci-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Operating Hours</div>
                    <div>Monday – Friday: 9:00 AM – 6:00 PM EST</div>
                    <div className="text-xs text-neutral-500 mt-0.5">Shoots scheduled by appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="bg-soci-cream p-8 rounded-3xl border border-soci-border">
              <div className="text-xs font-mono text-soci-coral font-bold uppercase mb-2">
                Official Channels
              </div>
              <h4 className="text-xl font-bold text-soci-dark mb-4">
                Connect Across Platforms
              </h4>

              <div className="space-y-3">
                <a
                  href="https://www.youtube.com/@imnlightmentpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-soci-border hover:border-soci-coral text-xs font-mono font-bold text-soci-dark hover:text-soci-coral transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <YoutubeIcon className="w-4 h-4 text-red-600" />
                    <span>YouTube (@imnlightmentpro)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.instagram.com/imnlightment/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-soci-border hover:border-soci-coral text-xs font-mono font-bold text-soci-dark hover:text-soci-coral transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-pink-600" />
                    <span>Instagram (@imnlightment/reels)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.facebook.com/Imnlightment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-soci-border hover:border-soci-coral text-xs font-mono font-bold text-soci-dark hover:text-soci-coral transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FacebookIcon className="w-4 h-4 text-blue-600" />
                    <span>Facebook (Imnlightment)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SociFooter onOpenContact={() => {}} />
    </div>
  );
}
