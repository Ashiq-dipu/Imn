import React from 'react';
import VidmoHero from '../components/VidmoHero';
import VisibilitySection from '../components/sociwave/VisibilitySection';
import ReelsCarousel from '../components/sociwave/ReelsCarousel';
import IntroductionStats from '../components/sociwave/IntroductionStats';
import ServicesGrid from '../components/sociwave/ServicesGrid';
import SocialFeedSection from '../components/sociwave/SocialFeedSection';
import TestimonialsSection from '../components/sociwave/TestimonialsSection';
import VideoTestimonialsSlider from '../components/sociwave/VideoTestimonialsSlider';
import CtaBanner from '../components/sociwave/CtaBanner';
import SociFooter from '../components/sociwave/SociFooter';

export default function HomePage({ onOpenVideo, onOpenContact }) {
  return (
    <>
      {/* 1. Exact Vidmo Hero Section */}
      <VidmoHero onOpenShowreel={onOpenVideo} onOpenContact={onOpenContact} />

      {/* 2. Visibility Builds Authority Showcase */}
      <main>
        <VisibilitySection onOpenContact={onOpenContact} />

        {/* Story / Reel Cards Carousel - Auto-scrolling YouTube Shorts / Instagram Reels */}
        <ReelsCarousel onSelectVideo={onOpenVideo} />

        {/* Agency Introduction & Big Metric Counters */}
        <IntroductionStats />

        {/* Rich Services Grid with Stills & Tags */}
        <ServicesGrid />

        {/* Live Social Feeds & Production Photography from Instagram & Facebook */}
        <SocialFeedSection onSelectVideo={onOpenVideo} />

        {/* Original 3-Column Client Testimonials Feed */}
        <TestimonialsSection />

        {/* Full-Width Organic Video Testimonial Slider */}
        <VideoTestimonialsSlider onSelectVideo={onOpenVideo} />

        {/* High-Impact Final CTA */}
        <CtaBanner onOpenContact={onOpenContact} />
      </main>

      {/* Clean Sociwave-style Footer */}
      <SociFooter onOpenContact={onOpenContact} />
    </>
  );
}
