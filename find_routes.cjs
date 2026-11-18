const fs = require('fs');
const code = fs.readFileSync('imn_bundle.js', 'utf8');

// Let's search for route definitions in the bundle to see the components or titles
const routeRegex = /path:\s*"([^"]+)",\s*element:\s*([^\}]+)/g;
let match;
while ((match = routeRegex.exec(code)) !== null) {
  console.log(`Route: ${match[1]} => ${match[2].slice(0, 100)}`);
}

