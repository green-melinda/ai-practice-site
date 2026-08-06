# Field Notes <!-- placeholder — rename when the site gets its real name -->

A designer's field notes on working with AI — showing the judgment, not just the output.

This is a standalone microsite documenting how I apply AI in my design practice: where I let it run, where I overrule it, and why. It's an archive with an opinion, not a blog. The site is also its own evidence — built with [Claude Code](https://claude.com/claude-code), styled with my design system, with the collaboration logged as it happened.

**Live site:** <https://field-notes-beryl.vercel.app>

## What's here

One page per thing I've built. Right now that is one thing.

- **The artifact** — a working app, up top, so you can try it before reading a word about it.
- **The story** — what the problem was, where AI fit, and what I overruled.
- **The colophon** — what I rejected during the build, and what the thing still can't do. Artifacts launch as they exist; the colophon confesses the state.
- **About** — how I work, operating-manual style.

The artifact and its story used to sit in separate sections, cross-linked. That split is gone — with one app it fragmented the only thing here, and the homepage ended up listing it twice. The reasoning is in `docs/decisions.md` (2026-08-05).

## Design system

Styled with **Civic Ink v1.6**, my design system, developed in the open at [`green-melinda/working-with-me`](https://github.com/green-melinda/working-with-me).

Tokens are snapshotted into `src/styles/tokens.css` — copied verbatim from upstream, never edited here. When this build exposes a gap in the system (a token or component real content demanded), the fix is logged in `docs/civic-ink-changes.md` and proposed upstream. Several have landed: v1.5 restored two radius tokens the doc had dropped, and added the machine-readable `tokens.css` this site now snapshots instead of transcribing by hand. The site consumes the system; the system stays canonical.

## The logs

The `docs/` directory is part of the work, not housekeeping:

- **`decisions.md`** — lightweight ADR log. What was decided, what it traded off.
- **`rejections.md`** — every time I overruled Claude during this build, recorded in the moment: what it generated, why it didn't survive. Source material for the kept/rejected sections, kept as receipts rather than recollection.
- **`civic-ink-changes.md`** — the design system evolving under the pressure of real content.
- **`later.md`** — where scope creep waits its turn.

## Stack

- [Astro](https://astro.build) — static output, content collections
- Civic Ink v1.6 as the CSS custom-property layer
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

Entries are markdown with schema-enforced frontmatter (`src/content.config.ts`). No entry builds without a `rejected` field, and an entry carrying a live `app` URL cannot build without at least one `limitation` — a zod `refine` enforces it. The schema is the style guide with teeth.

## Colophon

Designed and edited by Melinda Green, who you should hire as your next product designer. Built in collaboration with Claude Code — the division of labor is documented in the entries themselves. Type is Playfair Display and Schibsted Grotesk, with Syne appearing only inside the find-a-film card — the toy keeps its own voice on its own surface. Launched July 2026.
