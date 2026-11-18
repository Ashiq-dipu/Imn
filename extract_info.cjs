const fs = require('fs');
const code = fs.readFileSync('imn_bundle.js', 'utf8');

// Find paths
const pathMatches = code.match(/path:\s*"[^"]+"/g) || [];
console.log('Paths:', [...new Set(pathMatches)]);

// Find links
const toMatches = code.match(/to:\s*"[^"]+"/g) || [];
console.log('To links:', [...new Set(toMatches)]);

// Find nav items
const navMatches = code.match(/name:\s*"[^"]+",\s*href:\s*"[^"]+"/g) || [];
console.log('Nav items:', navMatches);

// Search for services
const serviceKeywords = ['Videography', 'Photography', 'Podcasting', 'Brand Development', 'Websites', 'Blind Brand', 'Sports', 'Docu-Series', 'Commercial'];
for (const kw of serviceKeywords) {
  const count = (code.match(new RegExp(kw, 'gi')) || []).length;
  console.log(`${kw}: ${count} occurrences`);
}

