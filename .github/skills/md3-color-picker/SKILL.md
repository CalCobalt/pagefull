---
name: md3-color-picker
description: '**WORKFLOW SKILL** — Access an image and perform MD3 color extraction to save a color palette. USE FOR: extracting colors from images for Material Design 3 themes, generating color schemes from visual assets using HCT color space.'
---

# MD3 Color Picker

## Quick Checklist

1. **Access the Image**: Use the `view_image` tool to view the specified image file.
2. **Extract Colors Automatically**: Use HCT (Hue-Chroma-Tone) color space to automatically extract prominent colors from the image, mapping to MD3 roles (primary, secondary, tertiary, etc.).
3. **Format as MD3 Scheme**: Generate a complete MD3 color scheme with all required color tokens.
4. **Save Color Palette**: Save the extracted color palette in JSON format to a file (e.g., `assets/colors.json`).

## Quality Criteria

- Ensure colors follow MD3 contrast and accessibility guidelines using HCT calculations.
- Validate the color scheme by checking against MD3 documentation.
- Save the palette in JSON format for easy integration into the project.