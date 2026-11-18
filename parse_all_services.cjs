const fs = require('fs');

const services = [
  { file: 'PromotionalVideos-DpP6KhQG.js', name: 'Promotional Videos', path: '/portfolio/promotional-videos' },
  { file: 'PodcastProduction-yRgWqGkx.js', name: 'Podcast Production', path: '/portfolio/podcast-production' },
  { file: 'SocialReels-BA2v-UU3.js', name: 'Social Reels', path: '/portfolio/social-reels' },
  { file: 'CommercialProduction-CpbC8nFi.js', name: 'Commercial Production', path: '/portfolio/commercial-production' },
  { file: 'EventCoverage-BgpnVWFX.js', name: 'Event Coverage', path: '/portfolio/event-coverage' },
  { file: 'SocialMediaManagement-BFAt_qlc.js', name: 'Social Media Management', path: '/portfolio/social-media-management' },
  { file: 'BrandBlueprint-BT1-hTgE.js', name: 'Brand Blueprint', path: '/portfolio/brand-blueprint' },
  { file: 'AdCampaigns-D4xO6qVC.js', name: 'Ad Campaigns', path: '/portfolio/ad-campaigns' }
];

const allData = {};

for (const s of services) {
  const content = fs.readFileSync('scraped_pages/' + s.file, 'utf8');
  // Match const i=[...]
  const match = content.match(/const\s+i\s*=\s*(\[[^\]]+\])/);
  if (match) {
    try {
      // evaluate JSON-like string
      const jsonStr = match[1].replace(/([a-zA-Z0-9_]+):/g, '"$1":');
      const items = JSON.parse(jsonStr);
      allData[s.path] = { name: s.name, items };
      console.log(`${s.name}: ${items.length} items parsed`);
    } catch(e) {
      console.log(`Failed to parse ${s.name}:`, e.message);
    }
  }
}

fs.writeFileSync('src/data/imn_services_data.json', JSON.stringify(allData, null, 2));
console.log('Saved to src/data/imn_services_data.json');

