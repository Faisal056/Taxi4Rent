# Osmium Rentals — React + MUI website

A fully responsive single-page site for weekly private hire car rental, built with
React, Vite, and Material UI.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

The output goes to `dist/`, which you can deploy to any static host (Netlify,
Vercel, S3, etc.).

## Project structure

```
src/
  main.jsx          # React root, wraps App in the MUI theme
  theme.js           # Brand colours, typography, component overrides
  App.jsx             # Assembles all sections
  assets/
    ioniq-2023-black.jpg   # Hero photo
  components/
    Navbar.jsx        # Sticky header, responsive drawer menu on mobile
    Hero.jsx
    TrustStrip.jsx
    HowItWorks.jsx
    Fleet.jsx          # Toyota Prius & Hyundai Ioniq cards
    WhyUs.jsx
    Requirements.jsx
    Coverage.jsx
    Testimonials.jsx
    Faq.jsx             # MUI Accordion
    Contact.jsx         # Form + contact methods
    Footer.jsx
    PhotoSlot.jsx       # Reusable placeholder for missing vehicle photos
```

## Adding real photos

Two vehicle photos are still placeholders:

- **2018 Toyota Prius — Silver** (`Fleet.jsx`)
- **2019 Hyundai Ioniq — Red** (`Fleet.jsx`)

To add them:

1. Drop the image file into `src/assets/`.
2. Import it at the top of `Fleet.jsx`, e.g. `import priusSilver from '../assets/prius-2018-silver.jpg';`
3. Pass it to the relevant `<PhotoSlot src={priusSilver} ... />` — the dashed
   placeholder disappears automatically once `src` is set.

## Content still to confirm before publishing

- **Pricing** — currently shows "Call for this week's rate" on both fleet cards.
- **Deposit and insurance terms** in the FAQ are written generically — update
  with your actual policy.
- **Testimonials** are sample placeholders — replace with real driver reviews.
- **Contact form** currently opens a pre-filled email to `info@taxi4rent.com`
  since there's no backend. Wire it up to a real endpoint (e.g. Formspree,
  your own API, or a CRM) when you're ready to collect submissions properly.

## Responsiveness

The layout uses MUI's default breakpoints (`xs`, `sm`, `md`, `lg`, `xl`) throughout:

- Navbar collapses into a top drawer below `md`.
- Hero, Fleet, Requirements, and Contact grids stack to a single column on mobile.
- Font sizes scale down on small screens via `sx` breakpoint objects.
