const fs = require('fs');
const code = fs.readFileSync('imn_bundle.js', 'utf8');

// Search for each page's content
const pages = [
  'Blind Brand',
  'Behind the Brand',
  'Business Visibility Scorecard',
  'Promotional Videos',
  'Podcast Production',
  'Social Reels',
  'Brand Blueprint',
  'Ad Campaigns',
  'Event Coverage',
  'Commercial Production',
  'Social Media Management'
];

for (const p of pages) {
  let idx = 0;
  console.log(`\n=================== PAGE: ${p} ===================`);
  while ((idx = code.indexOf(p, idx)) !== -1) {
    console.log(code.substring(Math.max(0, idx - 100), Math.min(code.length, idx + 400)));
    idx += p.length;
    break; // just first match
  }
}

