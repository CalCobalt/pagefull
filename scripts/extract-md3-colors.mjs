#!/usr/bin/env node

/**
 * Extract an MD3 color palette from an image using the real HCT color space.
 *
 * Pipeline: node-vibrant extracts the image's dominant color, then
 * `@material/material-color-utilities` (official HCT/CAM16) expands it into a
 * full MD3 scheme. Usage:
 *   node scripts/extract-md3-colors.mjs <image-path> [output-path]
 *
 * Defaults: image `files/avatar/donkomon.jpg`, output `assets/colors.json`.
 * The generated `assets/colors.json` is a reference; the live theme values
 * live in `_sass/themes/_md3-colors.scss` and are hand-tuned from it, so
 * re-running this script does NOT overwrite the SCSS.
 */

import Vibrant from 'node-vibrant';
import { themeFromSourceColor, argbFromRgb, hexFromArgb } from '@material/material-color-utilities';
import fs from 'fs';
import path from 'path';

// Get image path from command line
const imagePath = process.argv[2] || 'files/avatar/donkomon.jpg';
const outputPath = process.argv[3] || 'assets/colors.json';

// Fallback source color (matches the blog's brand pink #C86496) when no image
// can be read.
const FALLBACK_SOURCE = { r: 200, g: 100, b: 150 };

// MD3 scheme roles, in the order used for the JSON output.
const ROLE_LABELS = [
  'primary',
  'onPrimary',
  'primaryContainer',
  'onPrimaryContainer',
  'secondary',
  'onSecondary',
  'secondaryContainer',
  'onSecondaryContainer',
  'tertiary',
  'onTertiary',
  'tertiaryContainer',
  'onTertiaryContainer',
  'error',
  'onError',
  'errorContainer',
  'onErrorContainer',
  'background',
  'onBackground',
  'surface',
  'onSurface',
  'surfaceVariant',
  'onSurfaceVariant',
  'outline',
  'outlineVariant',
  'inverseSurface',
  'inverseOnSurface',
];

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

/** Build the {light, dark} scheme objects from an ARGB source color. */
function buildScheme(argb) {
  const schemes = {
    light: themeFromSourceColor(argb).schemes.light,
    dark: themeFromSourceColor(argb).schemes.dark,
  };
  const light = {};
  const dark = {};
  for (const label of ROLE_LABELS) {
    light[label] = hexFromArgb(schemes.light[label]).toUpperCase();
    dark[label] = hexFromArgb(schemes.dark[label]).toUpperCase();
  }
  return { light, dark };
}

async function extractSourceColor(imagePath) {
  const palette = await Vibrant.from(imagePath).getPalette();
  const swatch = palette.Vibrant || palette.DarkVibrant || palette.Muted;
  if (swatch) {
    const [r, g, b] = swatch.rgb.map((x) => Math.round(x));
    console.log(`✅ Found dominant color: rgb(${r}, ${g}, ${b})`);
    return { r, g, b };
  }
  throw new Error('No usable swatch found in image');
}

async function main() {
  console.log(`\n🎨 Extracting MD3 colors from: ${imagePath}\n`);

  let source;
  try {
    source = await extractSourceColor(imagePath);
  } catch (error) {
    console.error('⚠️ Error reading image:', error.message);
    console.error('   Falling back to the default source color #C86496.');
    source = FALLBACK_SOURCE;
  }

  const argb = argbFromRgb(source.r, source.g, source.b);
  const { light, dark } = buildScheme(argb);

  const theme = {
    sourceColor: rgbToHex(source),
    light,
    dark,
  };

  // Create output directory if it doesn't exist
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save to file
  fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2));
  console.log(`✅ Color palette saved to: ${outputPath}\n`);

  // Print colors
  console.log('📋 Light Mode Colors:');
  Object.entries(theme.light).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });

  console.log('\n📋 Dark Mode Colors:');
  Object.entries(theme.dark).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
