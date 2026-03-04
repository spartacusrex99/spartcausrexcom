# AGENTS.md - Agent Coding Guidelines

This document provides guidelines for AI agents operating in this repository.

## Project Overview

This is a simple static HTML/CSS website with no build system, package manager, or test suite.

## File Structure

```
.
├── index.html      # Home page
├── blog.html       # Blog listing page
├── style.css       # Global styles
└── blog.css        # Blog-specific styles
```

## Development Commands

### Running the Project

Since this is a static site, simply open `index.html` in a browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (Python)
python3 -m http.server 8000

# Option 3: Use a local server (Node.js)
npx serve .
```

### Linting

No linting tools are currently configured. Consider adding:
- HTML: `htmlhint` or `html-validate`
- CSS: `stylelint`

To install and run HTMLHint:
```bash
npm install --save-dev htmlhint
npx htmlhint "**/*.html"
```

To install and run Stylelint:
```bash
npm install --save-dev stylelint stylelint-config-standard
npx stylelint "**/*.css"
```

### Testing

No tests exist. For static sites, consider:
- Visual regression testing with Playwright or Cypress
- Link checking with `linkinator` or `html-validate`

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, etc.)
- Always include `lang` attribute on `<html>`
- Include `<meta charset="UTF-8">` and viewport meta tag
- Use lowercase for tags and attributes
- Quote all attribute values
- Use 4-space indentation
- Order: `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`
- Put CSS in external stylesheets (do not use inline `<style>`)
- Put JavaScript in external files (do not use inline `<script>`)
- Include `alt` attributes on all `<img>` elements
- Use self-closing tags for void elements (`<img />`, `<br />`)

### CSS

- Use 4-space indentation
- One selector per line when multiple selectors exist
- Put opening brace on same line as selector
- Use lowercase for selectors and properties
- Use hyphenated-lowercase for class names (BEM optional)
- Group related properties together
- Order properties alphabetically within groups, or use logical order
- Use shorthand properties where appropriate (`margin`, `padding`, `background`)
- Use CSS custom properties (variables) for repeated values
- Avoid !important unless absolutely necessary
- Use flexbox and grid for layouts
- Use rem/em for font sizes, px for borders and shadows
- Include fallback fonts in font-family
- Use responsive units (%, vw/vh, rem) for fluid layouts

### Naming Conventions

- Files: lowercase with hyphens (`blog-post.css`)
- Classes: lowercase with hyphens (`.blog-post`, `.read-more`)
- IDs: lowercase with hyphens (use sparingly, prefer classes)
- Custom properties: lowercase with double hyphens (`--primary-color`)

### Accessibility

- Ensure sufficient color contrast (WCAG AA minimum)
- Use focus states for interactive elements
- Include skip links for navigation
- Use proper heading hierarchy (h1 → h2 → h3)
- Make all interactive elements keyboard accessible

### Browser Support

- Target modern browsers (last 2 versions)
- Use Autoprefixer if CSS vendor prefixes needed

## Common Tasks

### Adding a New Page

1. Create new HTML file in root directory
2. Copy navigation from existing pages
3. Link to new page in nav on all pages
4. Create corresponding CSS file if needed

### Adding a New Style

1. Add to appropriate CSS file (style.css for global, blog.css for blog-specific)
2. Follow existing naming conventions
3. Test in multiple browsers/devices

### Validating Links

```bash
# Install linkinator
npm install --save-dev linkinator

# Check all links (after starting local server)
npx linkinator http://localhost:8000 --recurse
```

## Recommendations for Future Development

If this project grows, consider:

1. **Add a build system**: Use Vite, Parcel, or webpack
2. **Add TypeScript**: For type safety in any JavaScript
3. **Add a CSS preprocessor**: Sass or PostCSS
4. **Add tests**: Playwright for E2E, Vitest for unit tests
5. **Add CI/CD**: GitHub Actions for automated linting/testing
6. **Add Prettier**: For automatic code formatting
