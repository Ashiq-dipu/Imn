const fs = require('fs');
const code = fs.readFileSync('imn_bundle.js', 'utf8');

const idx = code.indexOf('{name:"Features"');
console.log(code.substring(idx - 1500, idx));

