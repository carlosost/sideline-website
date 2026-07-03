# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project

**Sideline Group** — Institutional investment firm website for the "Offline Economy" thesis.

## Tech Stack

- **Build**: Vite 6
- **Framework**: React 18
- **Styling**: Tailwind CSS v3 (`tailwind.config.js`)
- **Fonts**: Google Fonts — Playfair Display (serif, variable 400–900), JetBrains Mono
- **Animations**: Intersection Observer API + CSS only (no GSAP)

## Design Tokens

Defined in `tailwind.config.js`:
- `canvas` → `#F9F6F0` (Sun-Bleached Cream background)
- `iron` → `#1A1B1C` (Deep Iron Charcoal text)
- `clay` → `#D65A31` (Terracotta accent — use sparingly)
- `font-serif` → Playfair Display (headlines)
- `font-mono` → JetBrains Mono (body, tags)

## Project Structure

```
src/
  App.jsx                          # Root — mounts grain overlay + 4 sections
  index.css                        # Tailwind directives + keyframes + custom props
  hooks/
    useScrollVelocity.js           # rAF loop → --heading-weight CSS variable
    useIntersectionObserver.js     # Reusable IO hook (ref + isVisible)
  components/
    GrainOverlay.jsx               # Fixed SVG feTurbulence noise layer
    ui/
      MetaTag.jsx                  # [ NYC / 2026 ] monospace badge
      LetterReveal.jsx             # Hard-snap letter-by-letter text reveal
      CategoryCard.jsx             # Thesis grid card
    sections/
      SectionDeclaration.jsx       # § 01 — above fold, cream bg
      SectionBlueLight.jsx         # § 02 — dark inversion, terracotta accent
      SectionThesisGrid.jsx        # § 03 — 4-category asymmetric grid
      SectionMandate.jsx           # § 04 — institutional footer/CTA
```

## Dev Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
```

## Key Patterns

- **Section reveals**: `useIntersectionObserver` returns `[ref, isVisible]`; apply `is-visible` class to trigger `.section-content` opacity/transform transition (defined in `index.css`)
- **Scroll velocity font weight**: `useScrollVelocity` updates `--heading-weight` on `:root`; headlines use `heading-dynamic` class which reads it via `font-variation-settings`
- **Dark section snap**: Section 02 adds `section-dark` class on IO entry — that class has no `transition` property, so the background flips in a single paint frame (intentional)
- **Grain overlay**: Fixed `GrainOverlay` with SVG `feTurbulence` filter at `opacity: 0.045, mix-blend-mode: multiply`
