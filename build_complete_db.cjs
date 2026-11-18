const fs = require('fs');

const services = [
  { file: 'PromotionalVideos-DpP6KhQG.js', name: 'Promotional Videos', path: '/portfolio/promotional-videos', slug: 'promotional-videos', description: 'High-impact video content for your brand. 1 & 2 camera setups, cinematic filming, color correction, sound design.' },
  { file: 'PodcastProduction-yRgWqGkx.js', name: 'Podcast Production', path: '/portfolio/podcast-production', slug: 'podcast-production', description: 'End-to-end podcast creation and management. Multi-camera setups (1, 2, or 3 cameras), high-fidelity audio engineering, and social clips.' },
  { file: 'SocialReels-BA2v-UU3.js', name: 'Social Reels', path: '/portfolio/social-reels', slug: 'social-reels', description: 'Short-form content optimized for engagement on Instagram, TikTok, and YouTube Shorts. 30 reels/mo packages available.' },
  { file: 'CommercialProduction-CpbC8nFi.js', name: 'Commercial Production', path: '/portfolio/commercial-production', slug: 'commercial-production', description: 'Standard and multi-day commercial productions built for advertising campaigns, broadcast TV, websites, and marketing.' },
  { file: 'EventCoverage-BgpnVWFX.js', name: 'Event Coverage', path: '/portfolio/event-coverage', slug: 'event-coverage', description: 'Professional event documentation, summits, conferences, galas, and live festival highlight reels across the Carolinas.' },
  { file: 'SocialMediaManagement-BFAt_qlc.js', name: 'Social Media Management', path: '/portfolio/social-media-management', slug: 'social-media-management', description: 'Strategic content calendar execution, cross-platform distribution, scheduling, and engagement-driven audience growth.' },
  { file: 'BrandBlueprint-BT1-hTgE.js', name: 'Brand Blueprint', path: '/portfolio/brand-blueprint', slug: 'brand-blueprint', description: 'Comprehensive brand identity, positioning strategy, promotional assets, podcast episodes, and social reels package.' },
  { file: 'AdCampaigns-D4xO6qVC.js', name: 'Ad Campaigns', path: '/portfolio/ad-campaigns', slug: 'ad-campaigns', description: 'Targeted advertising campaigns designed to maximize ROI, drive clicks, generate leads, and boost revenue.' }
];

const allData = {};

for (const s of services) {
  const content = fs.readFileSync('scraped_pages/' + s.file, 'utf8');
  // Match array between [ and ]
  const match = content.match(/=\s*(\[\s*\{[\s\S]+?\}\s*\])/);
  if (match) {
    try {
      const items = new Function(`return ${match[1]}`)();
      allData[s.slug] = {
        name: s.name,
        path: s.path,
        slug: s.slug,
        description: s.description,
        items: items
      };
      console.log(`Saved ${s.name}: ${items.length} items`);
    } catch(e) {
      console.error(`Failed ${s.name}:`, e.message);
    }
  }
}

fs.writeFileSync('src/data/imn_services_data.json', JSON.stringify(allData, null, 2));
console.log('Complete services database written to src/data/imn_services_data.json');

