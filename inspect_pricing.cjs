const fs = require('fs');
const content = fs.readFileSync('scraped_pages/Pricing-RMWGMRYu.js', 'utf8');

// Find all matches of pricing text
const matches = [...content.matchAll(/title:\s*"([^"]+)",[^}]*price:\s*"([^"]+)"/g)];
console.log('Matches:', matches.map(m => `${m[1]} => ${m[2]}`));

// Also print chunks with dollar signs
const dollarMatches = [...content.matchAll(/("[^"]*\$[0-9,]+[^"]*")/g)].map(m => m[1]);
console.log('Dollar matches:', [...new Set(dollarMatches)]);

// Print headings
const headings = [...content.matchAll(/heading:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Headings:', headings);

console.log('Full content snippet:');
console.log(content.substring(0, 3000));

