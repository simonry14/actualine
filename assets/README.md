# /assets

Images, logos, favicons, and other static media.

## What goes here

- Project photography (real Actualine work) — preferred filenames:
  `project-{slug}-{n}.jpg` (e.g. `project-bukoto-residence-01.jpg`)
- Client logos — `client-{slug}.svg` (SVG preferred for crispness at any size)
- Team headshots — `team-{firstname-lastname}.jpg`
- Favicon set — `favicon.ico`, `favicon-32.png`, `favicon-180.png`,
  `apple-touch-icon.png`
- Open Graph image — `og-image.png` (1200×630px, used for link previews)

## Optimisation

Before committing:

- Compress JPEGs to ~80% quality
- Convert PNGs to WebP if size matters (`cwebp` or any online tool)
- SVG: run through SVGO to strip metadata (`npx svgo file.svg`)

Aim for individual images under 200 KB. The whole site loads in <100 KB
of HTML/CSS/JS today — keep it that way.

## When real photography lands

Replace the CSS-rendered abstract visuals in:

- `.hero-tile-a/b/c` (hero, three small tiles)
- `.featured-visual` (Featured Project section — biggest visual real estate)
- `.cap-card` (Capabilities — could include small images instead of `◇` icons)
- `.team-avatar` (currently letter monograms; swap for headshots)
- `.client span` (currently text; swap for logo `<img>`s)

See `CLAUDE.md` § 11 for the full active-TODO list.
