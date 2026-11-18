const fs = require('fs');
const code = fs.readFileSync('imn_bundle.js', 'utf8');

const idx = code.indexOf('{name:"Features"');
if (idx !== -1) {
  console.log(code.substring(idx - 600, idx + 600));
}

