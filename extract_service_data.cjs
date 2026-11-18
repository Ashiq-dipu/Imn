const fs = require('fs');

const services = [
  'PromotionalVideos-DpP6KhQG.js',
  'PodcastProduction-yRgWqGkx.js',
  'SocialReels-BA2v-UU3.js',
  'CommercialProduction-CpbC8nFi.js',
  'EventCoverage-BgpnVWFX.js',
  'SocialMediaManagement-BFAt_qlc.js',
  'BrandBlueprint-BT1-hTgE.js',
  'AdCampaigns-D4xO6qVC.js'
];

for (const s of services) {
  const content = fs.readFileSync('scraped_pages/' + s, 'utf8');
  // Match the items array
  const itemMatches = [...content.matchAll(/id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*description:\s*"([^"]+)"/g)];
  console.log(`\n=== ${s} === (${itemMatches.length} items)`);
  for (const m of itemMatches.slice(0, 4)) {
    console.log(`- ${m[2]} (${m[3]}): ${m[4].slice(0, 80)}... [id: ${m[1]}]`);
  }
}

