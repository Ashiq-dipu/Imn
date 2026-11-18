const fs = require('fs');
const code = fs.readFileSync('imn_bundle.js', 'utf8');

// Look at the navigation definition
const navIndex = code.indexOf('name:"Work"');
if (navIndex !== -1) {
  console.log('=== NAVIGATION STRUCTURE ===');
  console.log(code.substring(navIndex - 200, navIndex + 1200));
}

