# HomePro Net Zero

A static website showcasing HomePro's circular economy and waste management initiatives, promoting sustainability through real-time environmental impact tracking.

## Overview

HomePro Net Zero is Thailand's first retail platform to integrate circular economy principles into its business model through the "Closed-Loop Circularity" program. This website serves as a digital showcase for:

- **Circular Economy Initiatives**: Product repair, trade-in programs, and sustainable product lifecycles
- **Waste Management Solutions**: Professional waste collection, sorting, and recycling services
- **Real-time Impact Tracking**: Live metrics on waste managed, carbon emissions reduced, and equivalent trees planted

## Technology Stack

This is a pure static website built with:

- **HTML5**: Semantic markup with Thai language content
- **CSS3**: Modular architecture using BEM methodology
- **Custom Font**: Prompt font family (100-900 weights) optimized for Thai content
- **No Build Process**: Direct file serving without transpilation or bundling

### CSS Architecture

The project uses a modular, import-based CSS structure:

```
styles/
├── main.css              # Entry point with @import statements
├── base.css              # Variables, fonts, base styles
├── components.css        # Shared components (hero, cards, carousels)
└── pages/
    ├── circular-economy.css   # Circular Economy page styles
    └── waste-management.css   # Waste Management page styles
```

## Project Structure

```
home-pro/
├── index.html                    # Circular Economy page
├── Waste_Management_TH.html      # Waste Management page
├── styles/
│   ├── main.css
│   ├── base.css
│   ├── components.css
│   └── pages/
│       ├── circular-economy.css
│       └── waste-management.css
├── images/
│   ├── Desktop/                  # Desktop/tablet images
│   └── Mobile/                   # Mobile-specific images
├── font/                         # Prompt font family files
├── video/                        # Video assets
└── .github/
    ├── copilot-instructions.md   # Development guidelines
    └── instructions/
        └── a11y.instructions.md  # Accessibility standards
```

## Key Features

### Circular Economy Page (`index.html`)

- Real-time impact statistics dashboard
- Service cards for repair, trade-in, and waste collection programs
- Interactive carousel showcasing circular products
- Circularity principles grid

### Waste Management Page (`Waste_Management_TH.html`)

- Embedded circular story iframe
- Video section with waste management demonstrations
- Partner organization logos carousel
- Mission statement with social impact focus

## Development Guidelines

### BEM Naming Convention

All CSS follows strict Block\_\_Element--Modifier pattern:

```css
.hero-banner                    /* Block */
/* Block */
.hero-banner__content          /* Element */
.hero-banner--circular; /* Modifier */
```

### CSS Variables

All design tokens use semantic CSS variables defined in `:root`:

```css
--color-brand-green: #367f47;
--spacing-section: 40px;
--border-radius-base: 12px;
--transition-base: 0.3s ease;
```

> [!IMPORTANT]
> Never hardcode colors, spacing, or transitions. Use existing CSS variables or create new semantic ones.

### Responsive Design

Desktop-first approach with three breakpoints:

- **Desktop**: Default styles (>1024px)
- **Tablet**: `@media (max-width: 1024px)`
- **Mobile**: `@media (max-width: 768px)`

Mobile images are stored separately in `images/Mobile/` and swapped via media queries.

## Getting Started

### Prerequisites

- Web server or local development server (e.g., VS Code Live Server)
- Modern web browser

### Running Locally

1. Clone the repository:

```bash
git clone https://github.com/tanawatchaijaroenice/home-pro.git
cd home-pro
```

2. Serve the files using any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

3. Open your browser:
   - Circular Economy: `http://localhost:8000/index.html`
   - Waste Management: `http://localhost:8000/Waste_Management_TH.html`

### Testing

Manual testing across breakpoints using browser DevTools:

1. **Desktop**: >1024px viewport
2. **Tablet**: 768-1024px viewport
3. **Mobile**: <768px viewport

## Accessibility

This project follows WCAG 2.2 Level AA guidelines:

- Semantic HTML5 landmarks (`<nav>`, `<main>`, `<section>`)
- 4.5:1 minimum contrast ratio for text
- Keyboard navigable interactive elements
- Descriptive alt text for all images
- BEM methodology for clear component semantics

Full accessibility guidelines are documented in `.github/instructions/a11y.instructions.md`.

## Git Workflow

- **`main`**: Production-ready code
- **`develop`**: Active development branch (current)

Feature development happens in `develop` and is merged to `main` for releases.

## Adding New Pages

1. Create HTML file: `New_Page_TH.html`
2. Create page-specific CSS: `styles/pages/new-page.css`
3. Import in `styles/main.css`:
   ```css
   @import url("pages/new-page.css");
   ```
4. Follow BEM naming: `.page-name__element--modifier`

## Browser Support

Modern browsers with CSS3 support:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Built with ♻️ for a sustainable future by HomePro Thailand
