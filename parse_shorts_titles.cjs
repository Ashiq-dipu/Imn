const fs = require('fs');
const html = fs.readFileSync('yt_shorts.html', 'utf8');

// Match title text near shorts
const matches = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"[^}]+"headline":{"simpleText":"([^"]+)"}/g)];
console.log('Matches simpleText:', matches.map(m => `${m[1]} => ${m[2]}`));

// Also match accessibility title
const access = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"[^}]+"accessibilityData":{"label":"([^"]+)"}/g)];
console.log('Access:', access.slice(0, 10).map(m => `${m[1]} => ${m[2]}`));

