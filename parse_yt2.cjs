const fs = require('fs');
const html = fs.readFileSync('yt_channel.html', 'utf8');

const regex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
const ids = new Set();
let m;
while ((m = regex.exec(html)) !== null) {
  ids.add(m[1]);
}
console.log('Video IDs found in HTML:', [...ids]);

