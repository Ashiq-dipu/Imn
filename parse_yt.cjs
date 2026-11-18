const fs = require('fs');
const html = fs.readFileSync('yt_channel.html', 'utf8');

// Find video IDs and titles
const matches = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"[^}]+"text":"([^"]+)"/g)];
const list = [];
for (const m of matches) {
  if (!list.find(x => x.id === m[1])) {
    list.push({ id: m[1], title: m[2] });
  }
}

console.log('Found YouTube videos count:', list.length);
console.log('First 20:');
console.log(list.slice(0, 20));

