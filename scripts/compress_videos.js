import ffmpegPath from 'ffmpeg-static';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Using ffmpeg at:', ffmpegPath);

const targetFile = 'public/videos/invisalign-reel.mov';
const tempOut = 'public/videos/invisalign-reel-compressed.mov';

if (!fs.existsSync(targetFile)) {
  console.error('Target file not found:', targetFile);
  process.exit(1);
}

const statsBefore = fs.statSync(targetFile);
console.log(`Original size: ${(statsBefore.size / (1024 * 1024)).toFixed(2)} MB`);

// Run ffmpeg compression: H.264 video, AAC audio, crf 23, preset medium, faststart for web
console.log('Compressing video...');
const cmd = `"${ffmpegPath}" -y -i "${targetFile}" -c:v libx264 -crf 23 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart "${tempOut}"`;
console.log('Running:', cmd);

try {
  execSync(cmd, { stdio: 'inherit' });
  const statsAfter = fs.statSync(tempOut);
  console.log(`Compressed size: ${(statsAfter.size / (1024 * 1024)).toFixed(2)} MB`);

  if (statsAfter.size < 100 * 1024 * 1024 && statsAfter.size > 0) {
    // Replace original with compressed file
    fs.unlinkSync(targetFile);
    fs.renameSync(tempOut, targetFile);
    console.log('Successfully replaced original with compressed file!');
    console.log(`Final size: ${(fs.statSync(targetFile).size / (1024 * 1024)).toFixed(2)} MB`);
  } else {
    console.error('Compressed file is still >= 100MB or empty');
  }
} catch (err) {
  console.error('Compression failed:', err);
  if (fs.existsSync(tempOut)) {
    fs.unlinkSync(tempOut);
  }
}
