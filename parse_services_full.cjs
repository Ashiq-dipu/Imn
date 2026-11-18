const fs = require('fs');

const services = [
  { file: 'PromotionalVideos-DpP6KhQG.js', name: 'Promotional Videos', path: '/portfolio/promotional-videos', slug: 'promotional-videos' },
  { file: 'PodcastProduction-yRgWqGkx.js', name: 'Podcast Production', path: '/portfolio/podcast-production', slug: 'podcast-production' },
  { file: 'SocialReels-BA2v-UU3.js', name: 'Social Reels', path: '/portfolio/social-reels', slug: 'social-reels' },
  { file: 'CommercialProduction-CpbC8nFi.js', name: 'Commercial Production', path: '/portfolio/commercial-production', slug: 'commercial-production' },
  { file: 'EventCoverage-BgpnVWFX.js', name: 'Event Coverage', path: '/portfolio/event-coverage', slug: 'event-coverage' },
  { file: 'SocialMediaManagement-BFAt_qlc.js', name: 'Social Media Management', path: '/portfolio/social-media-management', slug: 'social-media-management' },
  { file: 'BrandBlueprint-BT1-hTgE.js', name: 'Brand Blueprint', path: '/portfolio/brand-blueprint', slug: 'brand-blueprint' },
  { file: 'AdCampaigns-D4xO6qVC.js', name: 'Ad Campaigns', path: '/portfolio/ad-campaigns', slug: 'ad-campaigns' }
];

const allData = {};

for (const s of services) {
  const content = fs.readFileSync('scraped_pages/' + s.file, 'utf8');
  // Match the array by extracting between [ and ]
  const start = content.indexOf('const i=[');
  if (start !== -1) {
    const arrayStart = start + 8;
    let depth = 0;
    let end = arrayStart;
    for (let j = arrayStart; j < content.length; j++) {
      if (content[j] === '[') depth++;
      else if (content[j] === ']') {
        depth--;
        if (depth === 0) {
          end = j + 1;
          break;
        }
      }
    }
    const rawArray = content.substring(arrayStart, end);
    try {
      // evaluate with Function in node
      const items = new Function(`return ${rawArray}`)();
      allData[s.slug] = {
        name: s.name,
        path: s.path,
        slug: s.slug,
        items: items
      };
      console.log(`Successfully parsed ${s.name}: ${items.length} items`);
    } catch(err) {
      console.error(`Error in ${s.name}:`, err.message);
    }
  }
}

fs.writeFileSync('src/data/imn_services_data.json', JSON.stringify(allData, null, 2));
console.log('Saved all services data to src/data/imn_services_data.json');

