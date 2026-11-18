const fs = require('fs');
const html = fs.readFileSync('yt_shorts.html', 'utf8');

const id = 'sjIOG-eivgc';
const pos = html.indexOf(id);
if (pos !== -1) {
  console.log(html.substring(pos - 100, pos + 500));
}

