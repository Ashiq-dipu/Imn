const fs = require('fs');

const files = fs.readdirSync('scraped_pages');
for (const f of files) {
  const code = fs.readFileSync('scraped_pages/' + f, 'utf8');
  // Match youtube video ids (anything like videoId:"..." or id:"..." or youtube)
  const matches = [...code.matchAll(/([a-zA-Z0-9_-]{11})/g)].map(m => m[1]);
  // Also look for quotes containing youtube
  const ytMatches = [...code.matchAll(/"([^"]*youtu[^"]*)"/g)].map(m => m[1]);
  if (ytMatches.length > 0) {
    console.log(f, ytMatches);
  }
}

// Let's also search in imn_bundle.js for all youtube links
const mainBundle = fs.readFileSync('imn_bundle.js', 'utf8');
const mainYt = [...mainBundle.matchAll(/"([^"]*youtu[^"]*)"/g)].map(m => m[1]);
console.log('Main bundle YouTube links:', [...new Set(mainYt)]);

// Let's find all videoId: "..." in mainBundle
const videoIds = [...mainBundle.matchAll(/videoId:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Main bundle videoIds:', [...new Set(videoIds)]);

// Let's search for instagram links
const igLinks = [...mainBundle.matchAll(/"([^"]*instagram[^"]*)"/g)].map(m => m[1]);
console.log('Instagram links:', [...new Set(igLinks)]);

