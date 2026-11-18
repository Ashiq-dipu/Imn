const fs = require('fs');
const content = fs.readFileSync('scraped_pages/About-CFhYaqw4.js', 'utf8');

const matches = [...content.matchAll(/youtubeId:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('About YouTube IDs:', matches);

const idMatches = [...content.matchAll(/id:\s*"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
console.log('Other 11-char IDs:', idMatches);

// Let's print the array in About-CFhYaqw4
const idx = content.indexOf('youtubeId:');
if (idx !== -1) {
  console.log(content.substring(idx - 200, idx + 800));
}

