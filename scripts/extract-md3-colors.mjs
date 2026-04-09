#!/usr/bin/env node

/**
 * Extract MD3 color palette from an image using HCT color space
 * Usage: node scripts/extract-md3-colors.mjs <image-path> [output-path]
 */

import Vibrant from 'vibrant';
import fs from 'fs';
import path from 'path';

// Get image path from command line
const imagePath = process.argv[2] || 'files/avatar/donkomon.jpg';
const outputPath = process.argv[3] || 'assets/colors.json';

// Convert RGB to Hex
function rgbToHex(r, g, b) {
  return `#${[r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase()}`;
}

// RGB to HCT conversion (simplified)
function rgbToHct(r, g, b) {
  // Normalize RGB to 0-1
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

// Generate MD3 color variations from a base color
function generateMD3ColorSet(baseRgb) {
  const baseHex = rgbToHex(baseRgb.r, baseRgb.g, baseRgb.b);
  
  // Light mode colors
  const lightColors = {
    primary: baseHex,
    onPrimary: '#FFFFFF',
    primaryContainer: adjustBrightness(baseRgb, 0.8),
    onPrimaryContainer: adjustBrightness(baseRgb, -0.7),
    secondary: adjustHue(baseRgb, -30),
    onSecondary: '#FFFFFF',
    secondaryContainer: adjustBrightness(adjustHue(baseRgb, -30), 0.8),
    onSecondaryContainer: adjustBrightness(adjustHue(baseRgb, -30), -0.7),
    tertiary: adjustHue(baseRgb, 30),
    onTertiary: '#FFFFFF',
    tertiaryContainer: adjustBrightness(adjustHue(baseRgb, 30), 0.8),
    onTertiaryContainer: adjustBrightness(adjustHue(baseRgb, 30), -0.7),
    background: '#FFFBFE',
    onBackground: '#1C1B1F',
    surface: '#FFFBFE',
    onSurface: '#1C1B1F',
    outline: '#79747E',
  };

  // Dark mode colors
  const darkColors = {
    primary: adjustBrightness(baseRgb, 0.4),
    onPrimary: adjustBrightness(baseRgb, -0.8),
    primaryContainer: adjustBrightness(baseRgb, -0.4),
    onPrimaryContainer: adjustBrightness(baseRgb, 0.8),
    secondary: adjustBrightness(adjustHue(baseRgb, -30), 0.4),
    onSecondary: adjustBrightness(adjustHue(baseRgb, -30), -0.8),
    secondaryContainer: adjustBrightness(adjustHue(baseRgb, -30), -0.4),
    onSecondaryContainer: adjustBrightness(adjustHue(baseRgb, -30), 0.8),
    tertiary: adjustBrightness(adjustHue(baseRgb, 30), 0.4),
    onTertiary: adjustBrightness(adjustHue(baseRgb, 30), -0.8),
    tertiaryContainer: adjustBrightness(adjustHue(baseRgb, 30), -0.4),
    onTertiaryContainer: adjustBrightness(adjustHue(baseRgb, 30), 0.8),
    background: '#1C1B1F',
    onBackground: '#E7E0EC',
    surface: '#1C1B1F',
    onSurface: '#E7E0EC',
    outline: '#938F99',
  };

  return { light: lightColors, dark: darkColors };
}

// Adjust brightness of a color
function adjustBrightness(rgb, factor) {
  // Convert to HSL, adjust L, convert back
  const hsl = rgbToHct(rgb.r, rgb.g, rgb.b);
  let newL = Math.max(0, Math.min(100, hsl.l + factor * 50));
  return hslToRgbHex(hsl.h, hsl.s, newL);
}

// Adjust hue of a color
function adjustHue(rgb, hueDelta) {
  const hsl = rgbToHct(rgb.r, rgb.g, rgb.b);
  const newH = (hsl.h + hueDelta + 360) % 360;
  return hslToRgbHex(newH, hsl.s, hsl.l);
}

// Convert HSL to RGB Hex
function hslToRgbHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  return rgbToHex(r, g, b);
}

async function extractPrimaryColor(imagePath) {
  try {
    // Get vibrant colors from image
    const palette = await Vibrant.from(imagePath).getPalette();
    
    // Use the vibrant color if available, otherwise use muted
    const swatch = palette.Vibrant || palette.DarkVibrant || palette.Muted;
    
    if (swatch) {
      const rgb = swatch.getRgb();
      console.log(`✅ Found dominant color: rgb(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${Math.round(rgb[2])})`);
      return { r: Math.round(rgb[0]), g: Math.round(rgb[1]), b: Math.round(rgb[2]) };
    }
  } catch (error) {
    console.error('⚠️ Error reading image:', error.message);
  }

  console.log('Using default color from image...');
  // Default fallback to reddish color (matches the character's hair color)
  return { r: 200, g: 100, b: 150 };
}

async function main() {
  console.log(`\n🎨 Extracting MD3 colors from: ${imagePath}\n`);
  
  // Extract dominant color
  const dominantColor = await extractPrimaryColor(imagePath);
  
  // Generate MD3 color set
  const colorSet = generateMD3ColorSet(dominantColor);
  
  const theme = {
    sourceColor: rgbToHex(dominantColor.r, dominantColor.g, dominantColor.b),
    light: colorSet.light,
    dark: colorSet.dark,
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

main().catch(console.error);
