const fs = require('fs');

const files = fs.readdirSync('scraped_pages');
for (const f of files) {
  const content = fs.readFileSync('scraped_pages/' + f, 'utf8');
  // Match any 11 char alphanumeric string that looks like a youtube video ID
  const matches = [...content.matchAll(/(?:youtubeId|videoId|id|src):\s*["']([a-zA-Z0-9_-]{11})["']/g)].map(m => m[1]);
  if (matches.length > 0) {
    console.log(f, [...new Set(matches)]);
  }
}

