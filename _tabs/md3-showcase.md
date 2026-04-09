---
layout: page
title: Material Design 3 Showcase
icon: fas fa-palette
order: 99
---

# Material Design 3 Design System

Welcome to the comprehensive Material Design 3 showcase. This page demonstrates all available MD3 components and styling.

## Color System

### Light Mode Colors
<div class="md3-grid md3-grid-3">
  <div class="md3-card">
    <div style="background-color: var(--md3-primary); height: 60px; border-radius: 8px 8px 0 0;"></div>
    <div class="md3-card-content">
      <strong>Primary</strong><br/>
      <code>var(--md3-primary)</code>
    </div>
  </div>
  <div class="md3-card">
    <div style="background-color: var(--md3-secondary); height: 60px; border-radius: 8px 8px 0 0;"></div>
    <div class="md3-card-content">
      <strong>Secondary</strong><br/>
      <code>var(--md3-secondary)</code>
    </div>
  </div>
  <div class="md3-card">
    <div style="background-color: var(--md3-tertiary); height: 60px; border-radius: 8px 8px 0 0;"></div>
    <div class="md3-card-content">
      <strong>Tertiary</strong><br/>
      <code>var(--md3-tertiary)</code>
    </div>
  </div>
</div>

## Buttons

### Button Variants
<div class="md3-flex md3-flex-wrap" style="gap: 12px;">
  <button class="md3-button md3-button-filled">Filled Button</button>
  <button class="md3-button md3-button-outlined">Outlined Button</button>
  <button class="md3-button md3-button-text">Text Button</button>
  <button class="md3-button md3-button-tonal">Tonal Button</button>
</div>

## Cards

### Card Examples
<div class="md3-grid md3-grid-2">
  <div class="md3-card">
    <div class="md3-card-header">
      <h3 style="margin: 0;">Elevated Card</h3>
    </div>
    <div class="md3-card-content">
      This is a standard elevated card with a subtle shadow.
    </div>
    <div class="md3-card-actions">
      <button class="md3-button md3-button-text">Action 1</button>
      <button class="md3-button md3-button-text">Action 2</button>
    </div>
  </div>

  <div class="md3-card md3-card-outlined">
    <div class="md3-card-header">
      <h3 style="margin: 0;">Outlined Card</h3>
    </div>
    <div class="md3-card-content">
      This is an outlined card with a border instead of shadow.
    </div>
    <div class="md3-card-actions">
      <button class="md3-button md3-button-text">Action 1</button>
      <button class="md3-button md3-button-text">Action 2</button>
    </div>
  </div>
</div>

## Text Fields

<div style="max-width: 400px;">
  <div class="md3-text-field">
    <label>Standard Text Field</label>
    <input type="text" placeholder="Enter text here...">
  </div>

  <div class="md3-text-field md3-text-field-outlined">
    <label>Outlined Text Field</label>
    <input type="text" placeholder="Enter text here...">
  </div>

  <div class="md3-text-field">
    <label>Message</label>
    <textarea placeholder="Enter your message..."></textarea>
  </div>
</div>

## Chips

<div style="margin: 24px 0;">
  <div class="md3-chip">Default Chip</div>
  <div class="md3-chip md3-chip-filled">Filled Chip</div>
  <div class="md3-chip md3-chip-selected">Selected Chip</div>
</div>

## Lists

<ul class="md3-list">
  <li class="md3-list-item">
    <div class="md3-list-item-icon">📝</div>
    <div class="md3-list-item-content">
      <div class="md3-list-item-headline">First Item</div>
      <div class="md3-list-item-supporting-text">Supporting text for the first item</div>
    </div>
  </li>
  <li class="md3-list-item">
    <div class="md3-list-item-icon">🎨</div>
    <div class="md3-list-item-content">
      <div class="md3-list-item-headline">Second Item</div>
      <div class="md3-list-item-supporting-text">Supporting text for the second item</div>
    </div>
  </li>
  <li class="md3-list-item">
    <div class="md3-list-item-icon">✨</div>
    <div class="md3-list-item-content">
      <div class="md3-list-item-headline">Third Item</div>
      <div class="md3-list-item-supporting-text">Supporting text for the third item</div>
    </div>
  </li>
</ul>

## Typography

<div class="md3-card" style="margin: 24px 0;">
  <div class="md3-card-content">
    <div class="md3-display-large">Display Large</div>
    <div class="md3-display-medium">Display Medium</div>
    <div class="md3-display-small">Display Small</div>
    
    <div class="md3-headline-large" style="margin-top: 24px;">Headline Large</div>
    <div class="md3-headline-medium">Headline Medium</div>
    <div class="md3-headline-small">Headline Small</div>
    
    <div class="md3-title-large" style="margin-top: 24px;">Title Large</div>
    <div class="md3-title-medium">Title Medium</div>
    <div class="md3-title-small">Title Small</div>
    
    <div class="md3-body-large" style="margin-top: 24px;">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div class="md3-body-medium">Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div class="md3-body-small">Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </div>
</div>

## Tags

<div class="tags-group" style="margin: 24px 0;">
  <a href="#" class="tag">Design System</a>
  <a href="#" class="tag">Material Design 3</a>
  <a href="#" class="tag">UI Components</a>
  <a href="#" class="tag">Typography</a>
  <a href="#" class="tag">Colors</a>
</div>

## Badges

<div style="margin: 24px 0; display: flex; gap: 12px; align-items: center;">
  <span>Notifications:</span>
  <span class="md3-badge">5</span>
  <span class="md3-badge">12</span>
  <span class="md3-badge md3-badge-small"></span>
</div>

## Responsive Grid

<div class="md3-grid md3-grid-3">
  <div class="md3-card">
    <div class="md3-card-content">
      <div class="md3-title-medium">Grid Item 1</div>
      <div class="md3-body-small">This is a responsive grid item</div>
    </div>
  </div>
  <div class="md3-card">
    <div class="md3-card-content">
      <div class="md3-title-medium">Grid Item 2</div>
      <div class="md3-body-small">This is a responsive grid item</div>
    </div>
  </div>
  <div class="md3-card">
    <div class="md3-card-content">
      <div class="md3-title-medium">Grid Item 3</div>
      <div class="md3-body-small">This is a responsive grid item</div>
    </div>
  </div>
</div>

---

## Design Principles

Material Design 3 is built on the following principles:

1. **Adaptable** - The design system works across all screen sizes
2. **Accessible** - Components are built with accessibility in mind
3. **Consistent** - Unified visual language across all pages
4. **Delightful** - Smooth animations and interactions
5. **Dynamic** - Colors adapt to user preferences

## Installation & Usage

All MD3 components are available through CSS classes:

```html
<!-- Primary Button -->
<button class="md3-button md3-button-filled">Click Me</button>

<!-- Card -->
<div class="md3-card">
  <div class="md3-card-header">Header</div>
  <div class="md3-card-content">Content</div>
</div>

<!-- Grid -->
<div class="md3-grid md3-grid-3">
  <div class="md3-card">Item 1</div>
  <div class="md3-card">Item 2</div>
  <div class="md3-card">Item 3</div>
</div>
```

Enjoy the Material Design 3 experience! 🎨
