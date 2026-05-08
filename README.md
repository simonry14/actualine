# Actualine Consults — Website

Single-page marketing website for **Actualine Consults (U) Ltd**, a
Ugandan multi-disciplinary consultancy in the built environment.

Editorial / architectural-magazine aesthetic. Vanilla HTML / CSS / JS, no
build step, deployable to any static host.

---

## Quick start

No dependencies. Pick whichever local server you have:

```bash
python3 -m http.server 8000
# or
npx serve
# or
php -S localhost:8000
```

Then open **http://localhost:8000**.

You can also open `index.html` directly in a browser, but Google Fonts
and the IntersectionObserver work better over `http://` than `file://`.

---

## Project structure

```
.
├── CLAUDE.md          ← Instructions for Claude Code (read first)
├── README.md          ← This file
├── index.html         ← Single page, all sections
├── styles.css         ← All styles, organised by section
├── script.js          ← Scroll progress, section counter, reveals
├── assets/            ← Images, logos, favicons
└── .gitignore
```

---

## Tech stack

- **HTML5** — single page, semantic
- **Modern CSS** — custom properties, grid, flexbox, `clamp()`, `aspect-ratio`
- **Vanilla JS** — no jQuery, no React, no build tooling
- **Google Fonts** — Fraunces (display), Manrope (body), JetBrains Mono (system)

---

## Design system at a glance

**Colours**

- `--cream` `#F2EDE3` (page background)
- `--ink` `#161412` (primary text, dark sections)
- `--terracotta` `#B5472D` (single accent)

**Typography**

- Display: Fraunces (italics for emphasis, terracotta-coloured)
- Body: Manrope
- Mono: JetBrains Mono (eyebrow tags, section numbers)

See `CLAUDE.md` for the full design system, section conventions, and
contribution rules.

---

## Sections

1. Hero — typographic statement + 3-tile visual + scrolling marquee
2. Trust strip — 4 stats on dark
3. About — mission, vision, values
4. Services — 6 disciplines
5. Process — 5-stage timeline
6. Capabilities — 8 sectors served
7. Featured — full-bleed case study (placeholder)
8. Why Actualine — 4 differentiators
9. Team — 4 role cards
10. Clients — 12 sector tiles (placeholder)
11. Testimonials — 2 pull quotes (placeholder copy)
12. Contact — info + form
13. Footer — CTA banner + links

---

## Deploying

This is a static site. Drop the folder into any static host:

- **Netlify:** drag-and-drop in the Netlify dashboard, or `netlify deploy --prod`
- **Vercel:** `vercel --prod` from the project root
- **GitHub Pages:** push to `main`, enable Pages on the repo
- **Cloudflare Pages:** connect the repo, no build command needed
- **GoDaddy / shared hosting:** upload via FTP to `public_html/`

No environment variables, no build command, no Node version pinning — what
you see is what gets shipped.

---

## Known TODOs

Tracked in `CLAUDE.md` § 11. The headline ones:

1. Replace placeholder testimonials with real client quotes
2. Swap the placeholder Featured Project for a real, named case study
3. Replace client category tiles with actual logos or named clients
4. Add a real office address (currently just "Kampala, Uganda")
5. Add a favicon and OG image
6. Wire the contact form to a real backend (Formspree / Netlify Forms)
7. Build a proper mobile menu (currently a `prompt()` fallback)

---

## Brand & strategy notes

The site is positioned against **TECO (teco.co.ug)**, the dominant
Ugandan consultancy. TECO wins on heritage and scale; Actualine
positions as the modern, design-led, integrated alternative.

When making content or design decisions, the test is: *does this feel
more like a curated boutique practice, or more like a generic
consultancy?* Choose the former every time. See `CLAUDE.md` § 1 for
the full positioning brief.

---

## Contact (real, hardcoded in site)

- Phone: +256 782 115 864 / +256 702 771 112
- Email: actualineconsultsltd@gmail.com
- Office: Kampala, Uganda
