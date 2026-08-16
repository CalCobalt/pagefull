---
name: md3-color-picker
description: '**WORKFLOW SKILL** — Extract MD3 colors from an image into a JSON palette. USE FOR: generating Material Design 3 color schemes from visual assets using the HCT color space.'
---

# MD3 Color Picker

## Quick Checklist

1. **Access the Image**: Read the image file at the given path (e.g. with the Read tool).
2. **Extract Colors Automatically**: Run the bundled extractor to get a real HCT scheme:
   `npm install` then `node scripts/extract-md3-colors.mjs <image-path> [output-path]`.
3. **Refresh the Theme**: The SCSS theme in `_sass/themes/_md3-colors.scss` is hand-tuned
   from the generated palette. Copy the new primary/secondary/tertiary roles over the
   `$md3-light-*` / `$md3-dark-*` variables, keeping the hand-tuned brand values where the
   generated ones are too muted. Check every on-* color keeps ≥ 4.5:1 contrast against its
   background.
4. **Save Color Palette**: The script writes the palette to `assets/colors.json` by default.

## Quality Criteria

- Use the official `@material/material-color-utilities` HCT pipeline, not HSL approximations.
- Verify WCAG contrast (≥ 4.5:1 for body text) for every on-* / container pairing.
- Keep `assets/colors.json` and `_sass/themes/_md3-colors.scss` in sync.
