const fs = require('fs');

const services = [
  { file: 'PodcastProduction-yRgWqGkx.js', name: 'Podcast Production', slug: 'podcast-production' },
  { file: 'CommercialProduction-CpbC8nFi.js', name: 'Commercial Production', slug: 'commercial-production' },
  { file: 'SocialMediaManagement-BFAt_qlc.js', name: 'Social Media Management', slug: 'social-media-management' },
  { file: 'AdCampaigns-D4xO6qVC.js', name: 'Ad Campaigns', slug: 'ad-campaigns' }
];

for (const s of services) {
  const content = fs.readFileSync('scraped_pages/' + s.file, 'utf8');
  console.log(`\n=== ${s.name} ===`);
  const match = content.match(/=\s*(\[\s*\{[\s\S]+?\}\s*\])/);
  if (match) {
    try {
      const items = new Function(`return ${match[1]}`)();
      console.log(`Parsed ${items.length} items`);
    } catch(e) {
      console.log(`Failed:`, match[1].slice(0, 200));
    }
  } else {
    console.log('No array match. Content snippet:', content.substring(0, 400));
  }
}

