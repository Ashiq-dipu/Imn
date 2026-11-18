const fs = require('fs');
const code = fs.readFileSync('imn_bundle.js', 'utf8');

// Let's inspect component definitions iL, K2, X2, eL, q2, J2, rL, oL, tL
const comps = {
  BlindBrand: 'iL=',
  BehindTheBrand: 'K2=',
  Scorecard: 'X2=',
  PromotionalVideos: 'eL=',
  PodcastProduction: 'q2=',
  SocialReels: 'J2=',
  BrandBlueprint: 'rL=',
  AdCampaigns: 'oL=',
  EventCoverage: 'tL=',
  About: 'F2=',
  Pricing: 'W2='
};

for (const [name, pattern] of Object.entries(comps)) {
  const idx = code.indexOf(pattern);
  console.log(`\n=================== COMPONENT ${name} (idx: ${idx}) ===================`);
  if (idx !== -1) {
    // print 1500 chars of this component
    console.log(code.substring(idx, idx + 1200));
  }
}

