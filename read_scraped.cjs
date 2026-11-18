const fs = require('fs');

const files = fs.readdirSync('scraped_pages');
for (const f of files) {
  const content = fs.readFileSync('scraped_pages/' + f, 'utf8');
  console.log(`\n=================== FILE: ${f} ===================`);
  // Extract strings or text from content
  const strings = [...content.matchAll(/"([^"]{15,150})"/g)].map(m => m[1]);
  console.log(strings.slice(0, 15).join('\n---\n'));
}

