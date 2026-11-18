const fs = require('fs');
const html = fs.readFileSync('yt_shorts.html', 'utf8');

const regex = /"entityId":"shorts-shelf-item-([a-zA-Z0-9_-]{11})","accessibilityText":"([^"]+)"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(`${m[1]} => ${m[2]}`);
}

