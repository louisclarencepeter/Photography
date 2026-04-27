import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SITE_URL = "https://louisclarencepeter.com";
const DIST_DIR = "dist";
const ASSETS_DIR = join(DIST_DIR, "assets");
const ENTRIES_PATH = "src/data/galleryEntries.json";

const entriesJson = await readFile(ENTRIES_PATH, "utf8");
const entries = JSON.parse(entriesJson);

const assetFiles = await readdir(ASSETS_DIR);

async function findLargestJpegFor(baseName) {
  const pattern = new RegExp(`^${baseName}-[A-Za-z0-9_-]{6,}\\.jpe?g$`);
  const matches = assetFiles.filter((file) => pattern.test(file));

  if (matches.length === 0) {
    throw new Error(`No jpeg variant found for ${baseName}`);
  }

  const sized = await Promise.all(
    matches.map(async (file) => ({
      file,
      size: (await stat(join(ASSETS_DIR, file))).size
    }))
  );

  sized.sort((a, b) => b.size - a.size);
  return sized[0].file;
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const imageEntries = await Promise.all(
  entries.map(async (entry) => {
    const baseName = entry.file.replace(/\.[^.]+$/, "");
    const file = await findLargestJpegFor(baseName);
    return {
      loc: `${SITE_URL}/assets/${file}`,
      caption: escapeXml(entry.alt)
    };
  })
);

const imageBlocks = imageEntries
  .map(
    ({ loc, caption }) =>
      `    <image:image>\n      <image:loc>${loc}</image:loc>\n      <image:caption>${caption}</image:caption>\n    </image:image>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/gallery</loc>
${imageBlocks}
  </url>
</urlset>
`;

const outputPath = join(DIST_DIR, "sitemap-images.xml");
await writeFile(outputPath, xml);

console.log(`Generated ${outputPath} with ${imageEntries.length} images`);
