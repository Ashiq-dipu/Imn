const fs = require('fs');
const code = fs.readFileSync('imn_bundle.js', 'utf8');

// Function to find strings around a pattern
function findContext(pattern, maxLen = 300) {
  let pos = 0;
  const results = [];
  while ((pos = code.indexOf(pattern, pos)) !== -1) {
    const start = Math.max(0, pos - 100);
    const end = Math.min(code.length, pos + pattern.length + maxLen);
    results.push(code.substring(start, end));
    pos += pattern.length;
    if (results.length > 5) break;
  }
  return results;
}

console.log('=== BLIND BRAND ===');
console.log(findContext('blind-brand'));

console.log('=== BEHIND THE BRAND ===');
console.log(findContext('behind-the-brand'));

console.log('=== SCORECARD ===');
console.log(findContext('business-visibility-scorecard'));

console.log('=== SERVICES / PORTFOLIO ===');
console.log(findContext('portfolio/podcast-production'));
console.log(findContext('portfolio/commercial-production'));

