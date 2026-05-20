const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function createIcon() {
  const size = 512;
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d946ef;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad)" filter="url(#glow)"/>
  <text x="${size/2}" y="${size/2 + size*0.15}" font-family="Arial, sans-serif" font-size="${size*0.45}" font-weight="900" fill="white" text-anchor="middle">RS</text>
</svg>
  `.trim();

  const svgBuffer = Buffer.from(svg);

  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  
  const faviconPng = await sharp(svgBuffer).resize(64, 64).png().toBuffer();
  const icoBuffer = pngToIco(faviconPng);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('✅ Icons generated successfully!');
}

function pngToIco(pngBuffer) {
  const png = pngBuffer;
  const width = 64;
  const height = 64;
  
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  
  const dirEntry = Buffer.alloc(16);
  dirEntry[0] = width;
  dirEntry[1] = height;
  dirEntry[2] = 0;
  dirEntry[3] = 0;
  dirEntry.writeUInt16LE(1, 4);
  dirEntry.writeUInt16LE(32, 6);
  dirEntry.writeUInt32LE(22, 8);
  dirEntry.writeUInt32LE(png.length, 12);
  
  return Buffer.concat([header, dirEntry, png]);
}

createIcon().catch(console.error);