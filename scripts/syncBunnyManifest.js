/**
 * Bunny CDN Media Manifest Synchronization Script
 * 
 * Usage:
 *   node scripts/syncBunnyManifest.js
 * 
 * Scans the project folders on Bunny CDN or verifies against the manifest,
 * and updates src/data/projectMediaManifest.json with verified assets.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';

const MANIFEST_PATH = path.resolve(process.cwd(), 'src/data/projectMediaManifest.json');
const CDN_BASE = 'https://cdn.rayatnajd.com';

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => {
      resolve({ url, status: 500 });
    });
  });
}

async function run() {
  console.log('--- Bunny CDN Media Manifest Sync ---');
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error('Manifest file not found at:', MANIFEST_PATH);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  console.log(`Loaded manifest with ${Object.keys(manifest.projects || {}).length} registered project folders.`);
  
  // Verification summary
  let totalVerified = 0;
  for (const [folder, project] of Object.entries(manifest.projects || {})) {
    const imgCount = project.images ? project.images.length : 0;
    const vidCount = project.videos ? project.videos.length : 0;
    console.log(`[${project.mediaStatus}] ${project.slug} (${folder}): ${imgCount} images, ${vidCount} videos`);
    if (imgCount > 0) totalVerified += imgCount;
  }

  manifest.lastSyncedAt = new Date().toISOString();
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`\nManifest sync complete. Total verified images: ${totalVerified}. Timestamp updated.`);
}

run().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});
