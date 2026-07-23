[README.md](https://github.com/user-attachments/files/29761012/README.md)
# Field Notes <!-- placeholder — rename when the site gets its real name -->

A designer's field notes on working with AI — showing the judgment, not just the output.

This is a standalone microsite documenting how I apply AI in my design practice: where I let it run, where I overrule it, and why. It's an archive with an opinion, not a blog. The site is also its own evidence — built with [Claude Code](https://claude.com/claude-code), styled with my design system, with the collaboration logged as it happened.

**Live site:** _URL after first deploy_

## What's here

- **Process entries** — essays about judgment. Every entry ends with what I kept, what I rejected, and why. That section is the point of the whole site.
- **Toys** — small apps built with AI. Each one carries a colophon: stack, build time, and one honest limitation. Toys are allowed to be unfinished; the colophon says so.
- **About** — how I work, operating-manual style.

## Design system

Styled with **Civic Ink v1.4**, my design system, developed in the open at [`green-melinda/working-with-me`](https://github.com/green-melinda/working-with-me).

Tokens are snapshotted into `src/styles/tokens.css` — copied verbatim from upstream, never edited here. When this build exposes a gap in the system (a token or component real content demanded), the fix is logged in `docs/civic-ink-changes.md` and proposed upstream as part of v1.5. The site consumes the system; the system stays canonical.

## The logs

The `docs/` directory is part of the work, not housekeeping:

- **`decisions.md`** — lightweight ADR log. What was decided, what it traded off.
- **`rejections.md`** — every time I overruled Claude during this build, recorded in the moment: what it generated, why it didn't survive. Source material for the kept/rejected sections, kept as receipts rather than recollection.
- **`civic-ink-changes.md`** — the design system evolving under the pressure of real content.
- **`later.md`** — where scope creep waits its turn.

## Stack

- [Astro](https://astro.build) — static output, content collections
- Civic Ink v1.4 as the CSS custom-property layer
- Vanilla JS, progressive enhancement only — fully readable with JS off
- Deployed on Vercel

No CMS, no frameworks-on-frameworks, no analytics worth a cookie banner.

## Running locally

```bash
npm install
npm run dev        # localhost:4321
npm run build      # production build to ./dist
```

## Content model

Entries are markdown with schema-enforced frontmatter (`src/content/config.ts`). A process entry cannot build without a `rejected` field; a toy cannot ship without a `limitation`. The schema is the style guide with teeth.

## Colophon

Designed and edited by Melinda Green, who you should hire as your next product designer. Built in collaboration with Claude Code — the division of labor is documented in the entries themselves. Type is Playfair Display and Schibsted Grotesk. Launched July 2026. 
