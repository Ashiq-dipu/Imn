import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ServicePortfolioPage from './pages/ServicePortfolioPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import BlindBrandPage from './pages/BlindBrandPage';
import BehindTheBrandPage from './pages/BehindTheBrandPage';
import ScorecardPage from './pages/ScorecardPage';
import FaqPage from './pages/FaqPage';
import TeamPage from './pages/TeamPage';
import TeamMemberPage from './pages/TeamMemberPage';
import ShowreelModal from './components/ShowreelModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState({
    id: "1L9HU7yaonc",
    title: "Official IMN Showreel",
    directSrc: null
  });

  const handleOpenVideo = (videoId = "1L9HU7yaonc", title = "Official IMN Showreel", directSrc = null) => {
    setModalVideo({ id: videoId, title, directSrc });
    setShowreelOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#FFFFFF] text-soci-dark antialiased selection:bg-soci-coral selection:text-white">
        <Routes>
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <HomePage
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* All Services & Portfolios Overview */}
          <Route
            path="/work"
            element={
              <WorkPage
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <WorkPage
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* 8 Specific Service Portfolio Pages mapped directly from imnlightmentpro.com */}
          <Route
            path="/portfolio/promotional-videos"
            element={
              <ServicePortfolioPage
                slug="promotional-videos"
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/portfolio/podcast-production"
            element={
              <ServicePortfolioPage
                slug="podcast-production"
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/portfolio/social-reels"
            element={
              <ServicePortfolioPage
                slug="social-reels"
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/portfolio/commercial-production"
            element={
              <ServicePortfolioPage
                slug="commercial-production"
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/portfolio/event-coverage"
            element={
              <ServicePortfolioPage
                slug="event-coverage"
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/portfolio/social-media-management"
            element={
              <ServicePortfolioPage
                slug="social-media-management"
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/portfolio/brand-blueprint"
            element={
              <ServicePortfolioPage
                slug="brand-blueprint"
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/portfolio/ad-campaigns"
            element={
              <ServicePortfolioPage
                slug="ad-campaigns"
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* About Studio */}
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* Real Pricing & Retainers */}
          <Route
            path="/pricing"
            element={
              <PricingPage
                onOpenContact={() => setContactOpen(true)}
                onOpenVideo={handleOpenVideo}
              />
            }
          />

          {/* Blind Brand Feature */}
          <Route
            path="/features/blind-brand"
            element={
              <BlindBrandPage
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* Behind the Brand Feature & Podcast */}
          <Route
            path="/behind-the-brand"
            element={
              <BehindTheBrandPage
                onOpenVideo={handleOpenVideo}
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* Business Visibility Scorecard Diagnostic */}
          <Route
            path="/business-visibility-scorecard"
            element={
              <ScorecardPage
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* Standalone FAQ Page */}
          <Route
            path="/faq"
            element={
              <FaqPage
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* Team Members & Individual Profiles */}
          <Route
            path="/team"
            element={
              <TeamPage
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />
          <Route
            path="/team/:slug"
            element={
              <TeamMemberPage
                onOpenContact={() => setContactOpen(true)}
              />
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <ContactPage />
            }
          />
        </Routes>

        {/* Global Cinema Theater Modal */}
        <ShowreelModal
          isOpen={showreelOpen}
          onClose={() => setShowreelOpen(false)}
          videoId={modalVideo.id}
          title={modalVideo.title}
          directSrc={modalVideo.directSrc}
        />

        {/* Global Fast-Track Contact Modal */}
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />

        {/* Global Interactive Back to Top Button */}
        <BackToTop />
      </div>
    </Router>
  );
}
