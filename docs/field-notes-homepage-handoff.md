# Handoff spec: Field Notes homepage (work-first layout)

**Implementer:** Claude Code, working inside the field-notes Astro repo.
**Design decided in claude.ai session, 2026-07-16.** Where this spec says PLACEHOLDER, resolve against the repo's actual Civic Ink v1.5 snapshot and Blue Hour tokens — do not invent new values.

## Overview

Homepage leads with the work (Toy № 001, find-a-film), not a manifesto. The thesis appears as a two-line epigraph. Structure top to bottom: masthead → epigraph → featured toy card → notes list → colophon footer.

## Governing type rule (new — Civic Ink v1.6 candidate)

- **Instrument Sans = structure/chrome.** Masthead, nav, section eyebrows, dates, deks, buttons, footer.
- **Playfair Display = voice.** Appears only where Melinda is saying something: epigraph, entry titles, and (on entry pages) prose emphasis/pull quotes.
- **Syne = the toy's voice**, confined to inside the toy card. Toy chrome stays Instrument Sans.
- **Headers on multiples of 8** (16 / 24 / 32 scale). Body and small labels align to the 8pt grid via line-height, not font size.

## Layout

- Single column. Content max-width per existing Civic Ink container conventions (mock used 600px for preview; use the repo's real measure — likely wider, ~640–720px).
- Page background: Paper token. Full-height hairline frame optional if the site already frames pages; otherwise section rules only.
- Section horizontal padding: 28px in mock — snap to the repo's spacing token nearest 24 or 32.

## Sections

### 1. Masthead
- Left: `FIELD NOTES` — Instrument Sans, 16px / 24px line-height, weight 600, letter-spacing 0.12em, uppercase, Ink.
- Right: nav — `about · greenmelinda.com` — 12px, secondary text color.
- Bottom border: 1px solid Ink.
- Padding: 20px 28px (snap to tokens).

### 2. Epigraph
- Line 1: `Judgment as craft.` — Playfair, 24px / 32px, weight 600, Ink.
- Line 2: `Notes from an AI-assisted design practice.` — Playfair italic, 16px / 24px, secondary color, max-width 40ch.
- **Watch:** "AI-assisted", not "AI-insisted". This typo already happened once.
- Spacing: 32px top padding, 8px between lines.

### 3. Featured toy card (Toy № 001)
- Container: 1px solid Ink border, 4px radius, background = Blue Hour dark ground (mock PLACEHOLDER `#1B2440` — use the real Blue Hour token from the find-a-film repo).
- Sticker badge, overlapping top-left edge (absolute, top -11px, left 20px): `TOY № 001` — Acid background (PLACEHOLDER `#D9F24B`; use real Acid token), dark text from same family, 11px, weight 600, 1px Ink border, 4px radius, `transform: rotate(-2deg)`, letter-spacing 0.06em. This is the page's single cute-ilism moment — do not add more.
- Title: `I don't know what to watch` — Syne, 24px / 32px, weight 600, Blue Hour light text (PLACEHOLDER `#F2EFE6`).
- Dek: `Tell it how you feel. It tells you what to watch.` — Instrument Sans, ~13.5px, Blue Hour muted (PLACEHOLDER `#B9C1D9`), max-width 42ch. Exactly this copy; the "mood first" phrasing is reserved for the entry title below.
- Actions row: primary button `Try it` (Acid bg, dark text, 4px radius, links to the deployed app) + text link `read the build notes` (underlined, links to the entry).
- Card padding 24px; 16px gap above actions.

### 4. Notes list
- Eyebrow: `NOTES` — 11px / 16px, weight 600, letter-spacing 0.14em, secondary color.
- Heavy rule below eyebrow: 1px solid Ink.
- Each row: flex, space-between, baseline-aligned, 16px vertical padding, bottom border 1px light hairline (PLACEHOLDER `#d8d4c8` — nearest Civic Ink hairline token).
  - Title: Playfair, 16px / 24px, weight 500, Ink. Entire row is the link target.
  - Dek: Instrument Sans 12.5px, secondary, one line.
  - Right: date, 11.5px, secondary, nowrap.
- Row 1 (live): title `Mood first, streamer second` (confirm with Melinda before hardcoding — candidate title, not final), dek `Building a film recommender when you used to be the recommender`, date `Jul 2026`, links to the find-a-film entry.
- Row 2 (ghost): `Next entry lives here` / `Soon` — muted color (~`#8a877e`), non-interactive. Render from the entries collection: ghost row appears only via an explicit flag or when count == 1; must never render if a second real entry exists.

### 5. Footer
- Flex space-between, top border 1px Ink, 16px padding: `Melinda Green` / `Built with Civic Ink v1.5` — 11.5px secondary. Update version string if v1.6 ships with the type rule.

## States and interactions

| Element | State | Behavior |
|---|---|---|
| Try it button | Hover | Slight darken of Acid or 1px Ink offset shadow per existing Civic Ink button convention — reuse, don't invent |
| Notes row | Hover | Background shift to a faint Paper-darker tint; title gains Cobalt or underline per existing link convention |
| Build-notes link | Hover | Underline thickens or color shifts per Blue Hour link style |
| All links | Focus | Visible focus ring, 2px, Cobalt — keyboard order: masthead nav → Try it → build notes → note rows |

## Responsive

| Breakpoint | Changes |
|---|---|
| ≥768px | As specced |
| <768px | Section padding to 16–20px; toy title may drop to 20px if wrapping is ugly (keep line-height on grid: 20/24 acceptable exception, prefer staying 24/32); notes rows: date drops below dek, left-aligned, rather than squeezing the title |
| <400px | Sticker stays legible; if it collides with the title, reduce rotate to 0 before shrinking text |

## Accessibility

- Masthead is a `<header>`, notes list a `<nav>` or `<section>` with list semantics; toy card heading is an `<h2>`, entry titles `<h3>` (or h2s if the epigraph is the page h1 — epigraph line 1 should be the `<h1>`).
- Sticker badge: decorative flavor — `aria-hidden` is acceptable if "Toy № 001" also appears in accessible text, otherwise leave it in the tree.
- Ghost row: `aria-hidden="true"` or omit from the accessibility tree; it is decoration.
- Contrast: verify Acid-on-dark and Blue Hour muted text against WCAG AA with the *real* token values; the mock placeholders were not tested.

## Explicitly rejected (for the record / future Field Notes entry about the site itself)

- Manifesto-first hero — rejected in favor of leading with a live artifact.
- Playfair wordmark — rejected to resolve hierarchy conflict with the epigraph; serif is now reserved for voice.
- Longer toy dek ("Mood first, streamer second" inside the card) — rejected as redundant with the entry title.
