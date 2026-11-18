const fs = require('fs');
const html = fs.readFileSync('fb.html', 'utf8');

// Search for scontent or fbcdn image URLs
const regex = /(https:\/\/[^"'\\]+fbcdn\.net[^"'\\]+)/g;
const urls = new Set();
let m;
while ((m = regex.exec(html)) !== null) {
  // unescape unicode or entities
  let u = m[1].replace(/\\u0026/g, '&').replace(/\\/g, '');
  if (u.includes('jpg') || u.includes('png') || u.includes('webp')) {
    urls.add(u);
  }
}

console.log('Facebook CDN Image URLs found:', urls.size);
for (const u of [...urls].slice(0, 15)) {
  console.log(u);
}

