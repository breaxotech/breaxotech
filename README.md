# Breaxo Tech — Enterprise Web Platform

AI-native technology company building scalable web platforms, custom AI systems, integrations, ERPs, and cloud infrastructure.

## Tech Stack & Architecture
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **UI Library**: React 19
- **Styling**: Vanilla CSS Design System with custom glassmorphism, responsive tokens, and micro-animations
- **Architecture**:
  - `app/` — App Router entry points, layout, metadata, SEO schemas
  - `components/layout/` — Global navigation (Dynamic Island), Footer
  - `components/sections/` — Modular sections (Hero, Services, Solutions, Approach, Process, Products, Contact)
  - `components/ui/` — Design primitives (AmbientBackground, Icons, Toast, CapabilityModal, WhatsAppFloat)
  - `lib/hooks/` — Custom hooks (`useScrollSpy`, `useHeader`, `useToast`)
  - `types/` — Domain data interfaces

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Production Build
```bash
npm run build
npm run start
```
