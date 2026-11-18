const fs = require('fs');
const content = fs.readFileSync('scraped_pages/About-CFhYaqw4.js', 'utf8');

// Print all text strings longer than 20 chars
const strings = [...content.matchAll(/"([^"]{20,500})"/g)].map(m => m[1]);
console.log('Total strings found:', strings.length);
console.log(strings.join('\n---\n'));

