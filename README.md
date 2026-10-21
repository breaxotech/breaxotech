# Breaxo Tech — Enterprise Web Platform

**Build Smarter. Ship Faster.**

Breaxo Tech is an AI-native technology company focused on building scalable web platforms, custom AI systems, intelligent integrations, enterprise resource planning (ERP) solutions, and cloud infrastructure.

Our approach combines modern software engineering with AI-powered workflows to help businesses and startups turn ideas into reliable, production-ready solutions.

## Tech Stack & Architecture

### Core Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js with App Router |
| Language | TypeScript with strict mode |
| UI Library | React 19 |
| Styling | Vanilla CSS with a custom design system |
| Build Tooling | Turbopack |
| Deployment | Cloudflare Workers with OpenNext |

### Project Architecture

The codebase follows a modular architecture designed to keep the application maintainable, reusable, and scalable.

```text
breaxotech/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
│   ├── layout/
│   │   ├── Navigation
│   │   └── Footer
│   ├── sections/
│   │   ├── Hero
│   │   ├── Services
│   │   ├── Solutions
│   │   ├── Approach
│   │   ├── Process
│   │   ├── Products
│   │   └── Contact
│   └── ui/
│       ├── AmbientBackground
│       ├── Icons
│       ├── Toast
│       ├── CapabilityModal
│       └── WhatsAppFloat
├── lib/
│   └── hooks/
│       ├── useScrollSpy
│       ├── useHeader
│       └── useToast
├── types/
├── public/
├── open-next.config.ts
├── wrangler.json
├── package.json
└── README.md
```

*Note: The tree illustrates the intended organization. Confirm actual filenames and directories against the repository.*

### Key Architectural Components

- **App Router (`app/`)** — Application routes, shared layouts, page metadata, and SEO configuration.
- **Layout Components (`components/layout/`)** — Global navigation and footer.
- **Section Components (`components/sections/`)** — Modular homepage sections for services, solutions, process, products, and contact.
- **UI Components (`components/ui/`)** — Reusable interface elements, ambient backgrounds, notifications, capability modals, and floating WhatsApp contact.
- **Custom Hooks (`lib/hooks/`)** — Reusable logic for scroll tracking, header behavior, and toast notifications.
- **Domain Types (`types/`)** — Shared TypeScript interfaces and domain-specific data structures.

## Design System

The website uses a custom Vanilla CSS design system focused on a modern, polished, responsive user experience.

- Reusable design tokens and styling conventions.
- Responsive layouts for desktop, tablet, and mobile.
- Glassmorphism-inspired visual elements.
- Subtle transitions and micro-animations.
- Reusable UI primitives for consistent presentation.

## Getting Started

### Prerequisites

- Node.js compatible with the project's dependencies.
- npm.
- Git, if cloning the repository.

### 1. Clone the Repository

```bash
git clone https://github.com/breaxotech/breaxotech.git
cd breaxotech
```

### 2. Install Dependencies

```bash
npm install
```

For a clean installation in CI environments, use:

```bash
npm ci
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Run the Production Build Locally

```bash
npm run start
```

The production server will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables & Contact Form Security

The contact form is protected by Web3Forms, hCaptcha verification, and a hidden `botcheck` honeypot field.

Create a `.env.local` file for local development or configure environment variables in Cloudflare:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Yes (for live submission) | Public Access Key from [Web3Forms](https://web3forms.com). |
| `NEXT_PUBLIC_HCAPTCHA_SITEKEY` | Optional | Custom hCaptcha site key. When omitted, Web3Forms's zero-config free hCaptcha is used. |

> **Dashboard Setup:**
> 1. Log in to the [Web3Forms Dashboard](https://app.webforms.com).
> 2. Open form settings and activate **hCaptcha** as the CAPTCHA verification provider.
> 3. Never commit API secret keys or email credentials to repository files.

## Deployment

The project is configured for deployment to Cloudflare Workers using OpenNext.

The deployment workflow should follow the project's verified configuration:

1. Install dependencies.
2. Build the Next.js application for Cloudflare using OpenNext.
3. Deploy the generated Worker using the OpenNext Cloudflare deployment command.
4. Verify the deployed website, static assets, and SEO endpoints.

Before deploying, ensure `package.json`, `package-lock.json`, `open-next.config.ts`, and `wrangler.json` are synchronized.

## SEO & Search Visibility

The application includes SEO-related configuration and public endpoints.

- Page titles and meta descriptions.
- Canonical URLs aligned with the active production domain.
- `robots.txt` configured to permit intended search-engine crawling.
- XML sitemap containing the correct canonical URLs.
- Google Search Console ownership verification.

Verify these endpoints after each production deployment:

- `/robots.txt`
- `/sitemap.xml`

## Development Principles

- **Modularity:** Build reusable components with clear responsibilities.
- **Type Safety:** Use TypeScript to improve code reliability.
- **Maintainability:** Keep styling, UI primitives, and business logic organized.
- **Responsive Design:** Support common screen sizes and devices.
- **Performance:** Optimize rendering, assets, and loading behavior.
- **SEO Readiness:** Maintain valid metadata, canonical URLs, and crawlable pages.

## Project Status

Breaxo Tech's website serves as the company's digital presence, presenting its technology capabilities, service offerings, engineering approach, and contact options.

## Contact

**Breaxo Tech**

Email: breaxotech.contact@gmail.com

**Build Smarter. Ship Faster.**