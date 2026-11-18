const fs = require('fs');
const content = fs.readFileSync('scraped_pages/PromotionalVideos-DpP6KhQG.js', 'utf8');
console.log(content.substring(0, 1500));

