const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  'BlindBrand-Cmkpj86T.js',
  'BehindTheBrand-CZSd3x3s.js',
  'BusinessVisibilityScorecard-BoZdz1Jd.js',
  'PodcastProduction-yRgWqGkx.js',
  'CommercialProduction-CpbC8nFi.js',
  'SocialReels-BA2v-UU3.js',
  'PromotionalVideos-DpP6KhQG.js',
  'EventCoverage-BgpnVWFX.js',
  'SocialMediaManagement-BFAt_qlc.js',
  'BrandBlueprint-BT1-hTgE.js',
  'AdCampaigns-D4xO6qVC.js',
  'About-CFhYaqw4.js',
  'Pricing-RMWGMRYu.js',
  'Contact-B9L_R5ck.js',
  'ClientPricing-CAYpiF-a.js'
];

if (!fs.existsSync('scraped_pages')) {
  fs.mkdirSync('scraped_pages');
}

async function download(file) {
  return new Promise((resolve, reject) => {
    const filePath = path.join('scraped_pages', file);
    const fileStream = fs.createWriteStream(filePath);
    https.get(`https://imnlightmentpro.com/assets/${file}`, (res) => {
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        const size = fs.statSync(filePath).size;
        console.log(`Downloaded ${file}: ${size} bytes`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${file}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const f of files) {
    await download(f);
  }
}

run();

