const fs = require('fs');

const files = [
  'PromotionalVideos-DpP6KhQG.js',
  'PodcastProduction-yRgWqGkx.js',
  'SocialReels-BA2v-UU3.js',
  'CommercialProduction-CpbC8nFi.js',
  'EventCoverage-BgpnVWFX.js',
  'SocialMediaManagement-BFAt_qlc.js',
  'BrandBlueprint-BT1-hTgE.js',
  'AdCampaigns-D4xO6qVC.js',
  'BlindBrand-Cmkpj86T.js',
  'BehindTheBrand-CZSd3x3s.js',
  'About-CFhYaqw4.js',
  'Contact-B9L_R5ck.js'
];

for (const f of files) {
  const content = fs.readFileSync('scraped_pages/' + f, 'utf8');
  console.log(`\n============================= ${f} =============================`);
  // Look for video IDs (YouTube 11 chars or URLs)
  const ytIds = [...content.matchAll(/videoId:\s*"([^"]+)"/g)].map(m => m[1]);
  const ytUrls = [...content.matchAll(/(?:youtube\.com\/watch\?v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/g)].map(m => m[1]);
  console.log('YouTube IDs:', [...new Set([...ytIds, ...ytUrls])]);

  // Look for titles, descriptions, sections
  const titles = [...content.matchAll(/title:\s*"([^"]+)"/g)].map(m => m[1]);
  console.log('Titles:', titles);
  
  // Look for text fragments
  const paragraphs = [...content.matchAll(/description:\s*"([^"]+)"/g)].map(m => m[1]);
  console.log('Descriptions:', paragraphs.slice(0, 5));
}

