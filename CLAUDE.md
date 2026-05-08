# CLAUDE.md

Instructions for Claude Code working on the Actualine Consults website.
Read this fully before making changes. Follow the conventions here unless
the user explicitly overrides them.

---

## 1. Project context

**Who:** Actualine Consults (U) Ltd — a Ugandan multi-disciplinary
consultancy firm in the built environment.

**What this site is:** A single-page marketing website (the company's
public face) that positions Actualine as the modern, design-led, integrated
alternative to larger Ugandan competitors.

**Strategic positioning (don't drift from this):**

The primary competitor is **TECO (Technology Consults Limited, teco.co.ug)**.
TECO wins on heritage (since 1992), scale (140+ consultants, 100+ projects,
UGX 100bn+ in construction value), and academic credibility (based at
Makerere University CEDAT). We can't out-heritage them. So Actualine is
positioned as:

- Modern, agile, design-led
- Boutique discipline with the polish a corporate firm lacks
- Integrated team (architects + engineers + QSs working together, not
  in silos) — this is a real differentiator
- Sustainability-focused as a baseline, not an add-on
- Editorial / architectural-magazine aesthetic (think Foster + Partners,
  BIG, Heatherwick — not corporate consultancy)

When writing copy or considering design changes, ask yourself: "Does this
make us feel more like a curated boutique practice, or more like a generic
consultancy?" Choose the former every time.

**Real company data (already in the site, don't change without confirmation):**

- Phone: +256 782 115 864 / +256 702 771 112
- Email: actualineconsultsltd@gmail.com
- Office: Kampala, Uganda
- Services: Project Management, Architecture, Engineering, Quantity Surveying,
  Construction Contract Management, Environmental Impact Assessments
- Mission: "To offer innovative, sustainable, dynamic and all-inclusive
  consultancy services in the built environment."
- Vision: "To be one of East Africa's leading consultancy firms in the
  built environment."

---

## 2. Tech stack

**Pure vanilla. No build step. No frameworks.**

- HTML5
- Modern CSS (custom properties, grid, flexbox, clamp(), aspect-ratio)
- Vanilla JS (no jQuery, no React, no Vue, no anything)
- Google Fonts via CDN (Fraunces + Manrope + JetBrains Mono)
- No npm dependencies, no package.json, no bundler

**Why:** The site is small, fast, and deployable to any static host
(Netlify drag-and-drop, GitHub Pages, GoDaddy, Vercel, S3) without
configuration. Don't introduce a framework or build step unless the user
explicitly asks for one. If they do, ask first whether they really want
the maintenance burden.

**Browser support:** Modern evergreen browsers (Chrome, Firefox, Safari,
Edge — last 2 versions). No IE11.

---

## 3. File structure

```
.
├── CLAUDE.md          ← you are here
├── README.md          ← human-readable project overview
├── index.html         ← single page, references styles.css + script.js
├── styles.css         ← all styles, organised by section
├── script.js          ← scroll progress, section counter, reveals
├── assets/            ← images, logos, favicons go here
└── .gitignore
```

**One HTML page only.** This is a single-page site by design — every
section is on `index.html` and navigation uses anchor links (`#about`,
`#services`, etc.). Don't split into multiple HTML files unless the user
explicitly asks for a multi-page site.

---

## 4. Design system

These are the design tokens. They're defined as CSS custom properties at
the top of `styles.css` under `:root`. **Reuse them** — don't introduce
new hex values for colours that already exist.

### Colour palette

| Token | Hex | Use |
|---|---|---|
| `--cream` | `#F2EDE3` | Default page background (warm off-white) |
| `--cream-deep` | `#E8DFCC` | Secondary section backgrounds (services, team) |
| `--cream-pale` | `#FAF7F0` | Tertiary backgrounds, contact section, pillars |
| `--ink` | `#161412` | Primary text, dark sections (process, featured, testimonials, footer) |
| `--ink-soft` | `#2A2723` | Body copy slightly softer than primary |
| `--ink-mid` | `#4A453E` | Tertiary text, muted labels |
| `--terracotta` | `#B5472D` | Single accent colour — eyebrows, italic emphasis, hover states, CTAs |
| `--terracotta-deep` | `#8C3520` | Darker terracotta for gradients |
| `--terracotta-pale` | `#D9876C` | Lighter terracotta for testimonial italics |
| `--muted` | `#6B6760` | Form labels, footer secondary text |
| `--rule` | `rgba(22,20,18,0.10)` | Borders on light backgrounds |
| `--rule-strong` | `rgba(22,20,18,0.18)` | Stronger borders, button outlines |
| `--rule-light` | `rgba(242,237,227,0.15)` | Borders on dark backgrounds |

**Don't add new colours.** If a section needs a different feel, lean on
the existing tokens in different combinations. The whole brand depends on
the discipline of this small palette.

### Typography

| Token | Font | Use |
|---|---|---|
| `--display` | Fraunces (serif) | All headings, hero copy, pull quotes, italic emphasis |
| `--body` | Manrope (sans-serif) | All body copy, buttons, navigation, form fields |
| `--mono` | JetBrains Mono | Eyebrow tags, section numbers, meta labels, technical accents |

**Italics matter.** Fraunces italic is part of the brand voice — use it
to punctuate key words inside headings (`<em>spaces</em>`, `<em>endure</em>`,
etc.). Always coloured with `--terracotta`.

**Don't change the fonts** without discussing first. If a third font is
genuinely needed (very rare), keep it in the same family of editorial /
architectural typography.

### Spacing & layout

- Sections use `padding: 7.5rem 2.5rem` on desktop
- Section headers always use the two-column `.section-header` pattern
  (eyebrow on left, title on right), separated by a 1px rule
- Section eyebrows auto-number via CSS `counter()` — see the
  `body { counter-reset: section; }` block in `styles.css`. **When adding
  a new section, add its `id` to the `counter-increment` rule** so the
  numbering stays sequential.

### Motion

- Animations use `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutQuint) for the
  "expensive editorial" feel — don't use linear or default ease
- Hover states transition `0.4s` to `0.5s`
- Hero typography uses `lineUp` keyframe (slide up + reveal) with
  staggered delays per line
- Scroll-triggered reveals add `.visible` to elements that have `.reveal`,
  via `IntersectionObserver` in `script.js`

---

## 5. Section pattern

Every standard content section follows this skeleton. **When adding new
sections, copy this exactly:**

```html
<section class="section" id="new-section-id">
  <div class="section-header">
    <div class="section-eyebrow">Short label</div>
    <h2 class="section-title">
      Big <em>italic-accent</em> headline statement.
    </h2>
  </div>

  <!-- section-specific content here -->
</section>
```

Then in `styles.css`:

```css
#new-section-id { counter-increment: section; }
```

(Add the new id to the existing comma-separated `counter-increment` rule.)

For dark sections (white-on-black), add `.dark` class to the section, or
override per-section via `#section-id { background: var(--ink); color: var(--cream); }`.
The dark style automatically inherits header rule colours via `.section.dark .section-header`.

---

## 6. Current sections (in order)

The site flow alternates light → dark for visual rhythm. Don't break this
rhythm without thinking about it.

1. **Hero** — light cream, big typographic statement + 3-tile visual + marquee
2. **Trust strip** — dark ink, positioning + 4 stats
3. **About** — light cream, mission/vision/values pillars
4. **Services** — cream-deep, 6-discipline grid with hover dark-fill
5. **Process** — dark ink, 5-stage horizontal timeline (NEW in v2)
6. **Capabilities** — light cream, 8-sector card grid (NEW in v2)
7. **Featured** — dark ink, full-bleed cinematic split (NEW in v2 — currently a placeholder, see TODOs)
8. **Why Actualine** — light cream, 4 differentiators in 2×2 grid (NEW in v2)
9. **Team** — cream-deep, 4 role cards
10. **Clients** — light cream, 12 sector tiles (NEW in v2 — placeholder)
11. **Testimonials** — dark ink, 2 pull quotes (NEW in v2 — placeholder copy)
12. **Contact** — cream-pale, info + form
13. **Footer** — dark ink, CTA banner + 4-column links + bottom bar

---

## 7. JavaScript (`script.js`)

Three things only:

1. **Scroll progress bar** — fills the 2px terracotta bar at the top of
   the page based on scroll position
2. **Section counter** — the vertical "01 / 10 — ABOUT" indicator on the
   left side; updates as the user scrolls past each section
3. **Reveal-on-scroll** — adds `.visible` class to `.section`, `.trust-strip`,
   `#featured` when they enter the viewport (uses IntersectionObserver)

Plus a tiny mobile menu fallback (a `prompt()` — yes, ugly, replace if
asked). Keep the JS minimal. Don't add jQuery. Don't add a framework. If
the user wants something interactive enough to need a framework, talk
about whether it actually belongs in this single-page brochure.

---

## 8. Running locally

No build step. Pick whichever you have:

```bash
# Python 3 (almost always available)
python3 -m http.server 8000

# Node (if installed)
npx serve

# PHP (if installed)
php -S localhost:8000
```

Then open `http://localhost:8000`.

You can also just open `index.html` directly in a browser, but Google Fonts
and the IntersectionObserver work better over `http://` than `file://`.

---

## 9. Conventions & patterns

### CSS
- One stylesheet, organised by section with comment dividers (`/* HERO */`,
  `/* SERVICES */`, etc.). Keep this organisation.
- Use the existing custom properties — don't hardcode colours
- Mobile-first is *not* used here; we use desktop-first with `@media (max-width: 1100px)`
  and `@media (max-width: 720px)` breakpoints. Two breakpoints. Don't add a third
  unless absolutely necessary.
- Avoid `!important`. Avoid IDs as styling hooks (use classes).

### HTML
- Semantic where possible (`<section>`, `<nav>`, `<footer>`, `<aside>`)
- The hero `<h1>` uses a `.line` / `.line-inner` wrapper structure for the
  staggered slide-up animation. Don't simplify it without understanding the
  animation depends on it.
- Use `&amp;`, `&apos;`, etc. consistently — keep entity encoding clean

### Copy / voice
- **Editorial, not corporate.** "A discipline of care" not "Industry-leading
  excellence."
- **Em dashes for rhythm:** Use `—` (Unicode em dash, not double-hyphen)
- **Italic for emphasis:** Wrap key words in `<em>` inside headings — they'll
  render in Fraunces italic in terracotta automatically
- **Short, declarative.** "Buildings that endure." Not "Construction services
  designed to maximize longevity."
- **Avoid AI-tells:** No "leverage," no "synergy," no "best-in-class," no
  "innovative solutions" as a generic phrase.

---

## 10. Things to avoid

- ❌ **Don't introduce build tools** (Webpack, Vite, Tailwind, etc.) without
  explicit permission. The whole point of the current setup is zero-friction
  deployment.
- ❌ **Don't add JavaScript frameworks.** The site is a brochure. If
  interactivity needs React, the requirement is wrong.
- ❌ **Don't change the colour palette** without confirmation. The brand depends
  on the discipline of this small set.
- ❌ **Don't replace Fraunces or Manrope** without discussion — they're brand-defining.
- ❌ **Don't add stock-photo imagery** that screams "AI-generated marketing site"
  (skyscraper at sunset, diverse-team-around-laptop, blueprint with hard hat).
  Real Actualine project photos only. If none exist yet, the current
  CSS-rendered abstract visuals are better than bad stock.
- ❌ **Don't break the section rhythm** (light → dark → light alternation).
  If you add a section, place it where the rhythm continues.
- ❌ **Don't add emoji** in copy or UI labels (unless explicitly requested).
  We use unicode glyphs sparingly: ◇, ◆, ✦, ↗, →, —. That's the visual
  vocabulary.
- ❌ **Don't add cookie banners, chat widgets, or popups** without
  discussion — they break the editorial feel.

---

## 11. Active TODOs / known gaps

These came up during the initial design and remain open. Knock these off
and the site jumps another quality tier:

1. **Replace placeholder testimonials** in the `#testimonials` section with
   real client quotes. Two slots ready. Author name + role per quote.

2. **Replace the placeholder Featured Project** (`#featured` section, currently
   "Buildings that endure...") with a real, named case study. Need:
   - Project name
   - Client (with permission)
   - Location
   - Year completed
   - Disciplines provided
   - Project value (if quotable)
   - 1–2 real photos for the `.featured-visual` panel

3. **Replace client category tiles** in the `#clients` section with real
   client logos or named institutions. The tile structure works for
   either — adjust `.client span` to hold an `<img>` instead of text if
   logos are available.

4. **Add a real office address.** Right now we say "Kampala, Uganda."
   Replace with plot + road + building once available — TECO wins on
   specificity here ("Room 200, Makerere University CEDAT"). Update both
   the contact section and the hero meta block.

5. **Add real project photography** — even one or two real photos in the
   hero tiles or capabilities cards transforms credibility.

6. **Favicon + OG image** — currently missing. Generate from the "A" logo
   mark. Add to `assets/` and reference in `index.html` `<head>`.

7. **Real team bios** — current cards describe roles generically ("Architects",
   "Engineers"). Replace with named senior team members (with photos and
   short bios) when permission is granted.

8. **Mobile menu** — currently a `prompt()` dialog. Build a proper slide-out
   drawer when there's time.

9. **Form backend** — the contact form currently `alert()`s on submit.
   Wire to Formspree, Netlify Forms, or a similar serverless endpoint.

---

## 12. Working with the user

The user is an experienced full-stack developer (React, Node.js, Python,
PHP) who builds polished production apps. They prefer:

- Direct, copy-paste-ready instructions
- Informal in prompts but expects polished, professional output
- Iterative, agentic work — drive forward, don't over-confirm trivial
  decisions
- Strategic context as part of the answer, not just code

When in doubt about scope, ship a working version with a clear note about
what's still placeholder and what would benefit from real input.
