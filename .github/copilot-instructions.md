# HomePro Net Zero - AI Coding Instructions

## Project Overview

Static website for HomePro's circular economy and waste management initiatives. Built with vanilla HTML/CSS, focused on sustainability messaging with Thai language content.

## Architecture & File Structure

### CSS Architecture (BEM + Modular)

CSS is organized in a modular, import-based structure via `styles/main.css`:

```css
@import url("base.css"); /* Variables, fonts, base styles */
@import url("components.css"); /* Shared components */
@import url("pages/circular-economy.css");
@import url("pages/waste-management.css");
```

**Key principle**: Page-specific styles go in `styles/pages/`, shared components in `components.css`, global config in `base.css`.

### HTML Pages

- `index.html` → Circular Economy page (imports `pages/circular-economy.css`)
- `Waste_Management_TH.html` → Waste Management page (imports `pages/waste-management.css`)

## Critical Patterns & Conventions

### BEM Naming Convention

Strictly follows Block\_\_Element--Modifier pattern:

```css
.hero-banner                    /* Block */
/* Block */
.hero-banner__content          /* Element */
.hero-banner--circular         /* Modifier */
.hero-banner--waste; /* Modifier */
```

**Examples from codebase**:

- `.stats-card__label`, `.stats-card__value`, `.stats-card__header`
- `.service-card--repair`, `.service-card--tradein`, `.service-card--waste`
- `.circularity-item__title`, `.circularity-item__description`

### CSS Variables System

All magic numbers replaced with semantic CSS variables in `:root`:

```css
--color-brand-green: #367f47;
--spacing-section: 40px;
--border-radius-base: 12px;
--transition-base: 0.3s ease;
```

**Rule**: Never hardcode colors, spacing, or transitions. Use existing variables or add new semantic ones.

### Responsive Strategy (Mobile-First Mindset)

Three breakpoints with desktop-first approach:

- Default: Desktop styles (>1024px)
- `@media (max-width: 1024px)`: Tablet adjustments
- `@media (max-width: 768px)`: Mobile overhaul

**Mobile-specific pattern**: `.mobile-only` class hides content on desktop, shows on mobile:

```css
.mobile-only {
  display: none;
} /* Desktop default */
@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }
}
```

### Background Image Patterns

Background images use `::before` pseudo-elements with layered approach:

```css
.section {
  position: relative;
}
.section::before {
  content: "";
  position: absolute;
  background-image: url("../../images/Desktop/image.jpg");
  background-size: cover;
  z-index: 1;
}
.section__content {
  position: relative;
  z-index: 3; /* Content above background */
}
```

**Mobile images**: Swap desktop images for mobile versions in media queries:

```css
@media (max-width: 768px) {
  .hero-banner--circular::before {
    background-image: url("../../images/Mobile/01-Hp\ Net\ zero.jpg");
  }
}
```

### Component Modifier System

Page-specific component variants use BEM modifiers:

```css
/* Base component in components.css */
.service-card {
  /* shared styles */
}

/* Page-specific variants in pages/circular-economy.css */
.service-card--repair {
  background-image: url("...");
}
.service-card--tradein {
  background-image: url("...");
}
```

## Typography & Fonts

Custom Thai font "Prompt" with full weight range (100-900). All weights defined as `@font-face` in `base.css`:

```css
font-family: "Prompt";
font-weight: 100-900; /* Thin to Black */
```

## Image Organization

- `images/Desktop/` → Desktop/tablet images
- `images/Mobile/` → Mobile-specific images
- Convention: Mobile images often prefixed with numbers (e.g., `01-`, `02-`)

## Accessibility Compliance

Project includes `.github/instructions/a11y.instructions.md` with WCAG 2.2 Level AA guidelines:

- Use semantic HTML landmarks (`<nav>`, `<main>`, `<section>`)
- Ensure 4.5:1 contrast ratio for text
- All interactive elements must be keyboard navigable
- Images need appropriate `alt` attributes
- Follow BEM for clear component semantics

## Development Workflow

### Git Branching

- `main` → Production branch
- `develop` → Active development (current branch)
- Pattern: Feature work in `develop`, merge to `main` for releases

### No Build Process

Pure static site—no transpilation, bundling, or build step. Files are served as-written.

### Testing Approach

Manual testing across breakpoints. Use browser DevTools to test:

1. Desktop view (>1024px)
2. Tablet view (768-1024px)
3. Mobile view (<768px)

## Common Tasks

### Adding New Page

1. Create HTML file (e.g., `New_Page_TH.html`)
2. Create CSS in `styles/pages/new-page.css`
3. Import in `styles/main.css`: `@import url("pages/new-page.css");`
4. Follow BEM naming: `.page-specific-block`, `.page-specific-block__element`

### Adding Shared Component

1. Add base styles to `styles/components.css`
2. Use BEM: `.component-name`, `.component-name__element`
3. Page-specific variants go in page CSS with `--modifier`

### Modifying Responsive Behavior

1. Check desktop styles first (no media query)
2. Override in `@media (max-width: 1024px)` for tablet
3. Override in `@media (max-width: 768px)` for mobile
4. Mobile often requires different images from `images/Mobile/`

## Key Files Reference

- `styles/base.css` → Variables, fonts, utilities
- `styles/components.css` → Hero banners, stats cards, service cards, video sections, carousels
- `styles/pages/circular-economy.css` → Circularity grid, intro section
- `styles/pages/waste-management.css` → Waste info, solution cards, partner logos, mission section
- `.github/instructions/a11y.instructions.md` → Accessibility guidelines

## Don't

- ❌ Use inline styles
- ❌ Add JavaScript without discussion (currently JS-free)
- ❌ Hardcode colors/spacing (use CSS variables)
- ❌ Break BEM naming convention
- ❌ Skip mobile testing
- ❌ Forget to add mobile image variants
