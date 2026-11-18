const https = require('https');
const fs = require('fs');
const path = require('path');

const videos = [
  { name: 'slide-1.mp4', url: 'https://framerusercontent.com/assets/kUSMlRcp8Or0yKh4PxZsWLtgL8k.mp4' },
  { name: 'slide-2.mp4', url: 'https://framerusercontent.com/assets/DbSAf6EQK8eBQtEsgLtCg1pI7Io.mp4' },
  { name: 'slide-3.mp4', url: 'https://framerusercontent.com/assets/8scrWcitN7Kw3M5AKKVjQrG9k.mp4' },
  { name: 'slide-4.mp4', url: 'https://framerusercontent.com/assets/Ht0swRmLzQt4nBZEw8F9p1SVAfk.mp4' }
];

async function download(item) {
  const dest = path.join('public', 'videos', item.name);
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(item.url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Finished ${item.name}: ${fs.statSync(dest).size} bytes`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(err.message);
      resolve();
    });
  });
}

async function main() {
  for (const v of videos) {
    await download(v);
  }
}

main();

