# Portfolio Website

Personal portfolio website built with Astro 5 and Tailwind CSS v4.

**Live Site**: [isrofilamar.site](https://isrofilamar.site)

---

## Tech Stack

- **Framework**: Astro 5.0
- **Styling**: Tailwind CSS v4
- **Hosting**: Cloudflare Pages
- **Fonts**: Google Fonts (Poppins, JetBrains Mono)

---

## Features

- 🎨 Minimalist clean design
- 🌓 Light/Dark mode toggle
- 📱 Fully responsive (mobile-first)
- ⚡ Static site generation (SSG)
- 🔒 Security headers configured
- ♿ Accessibility compliant

---

## Project Structure

```
portfolio-v1/
├── public/
│   ├── _headers          # Cloudflare Pages headers
│   ├── robots.txt
│   └── images/           # Static assets
├── src/
│   ├── components/       # Reusable components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes (index, about, contact)
│   └── styles/           # Global styles
├── astro.config.mjs      # Astro configuration
└── package.json
```

---

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Dev server runs at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Output directory: `dist/`

---

## Deployment

Deployed on **Cloudflare Pages** with continuous deployment from GitHub.

- **Build command**: `npm run build`
- **Build output**: `dist`
- **Branch**: `main`

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup instructions.

---

## Pages

- **Home** (`/`) - Hero section, brief intro, featured certifications
- **About** (`/about`) - Career narrative, skills, certifications
- **Contact** (`/contact`) - Contact information and social links

---

## License

© 2026 Isrofil Amar. All rights reserved.
