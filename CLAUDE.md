# CLAUDE.md — Field Notes

## What this is

Because Squarespace isn't cutting it anymore — A standalone microsite documenting how Melinda Green, a staff product designer, applies AI in her design practice. It is an **archive with an opinion**, not a blog. Launch scope is fixed: a toy apps shelf (the lead), two process entries, and an about page. Nothing on the site promises future content.

The site itself is evidence: it is built with Claude Code, using Civic Ink, and that fact should be visible in the colophon — but the site should never feel like a demo of AI. It should feel like a designer's field notes.

## Stack

- **Framework:** Astro (static output, content collections for entries)
- **Styling:** Civic Ink v1.5 tokens as the CSS custom-property layer. Do not invent token values. Snapshot them from `design-system/tokens.css` in `github.com/green-melinda/working-with-me` — if a needed token doesn't exist there, stop and ask before creating one.
- **JS:** Vanilla, minimal, progressive enhancement only. The site must be fully readable with JS disabled.
- **Deploy:** Vercel. A deployed skeleton goes live on day one; every merge to main deploys.
- **No:** CMS, component framework, CSS framework, analytics beyond the lightest privacy-respecting option (or none), cookie banners (don't collect anything that needs one), newsletter capture.

## Design system rules (Civic Ink)

- Typefaces: Playfair Display (display) + Instrument Sans (body/UI). **Never Arial. Never a system-font fallback stack that lands on Arial.**
- Palette: Ink / Paper / Acid / Cobalt, from the token file. Acid is an accent, spent sparingly — one job per page.
- 4px border radius, everywhere, no exceptions.
- 8pt spacing grid.
- Forms (if any ever appear): no asterisks on required fields; mark optional fields instead. Inline errors in Civic Ink voice — errors explain what happened and how to fix it, never apologize, never vague.
- Editorial brutalism means restraint, not noise: hairlines, generous margins, type doing the heavy lifting. If a page needs decoration to feel finished, the content isn't finished.

## Content model

Three collections:

1. **`process/`** — essays about judgment. Each entry follows a fixed spine:
   - The problem
   - Where AI actually fit (and where it didn't)
   - What I did / what Claude did
   - **What I kept, what I rejected, and why** ← this section is mandatory and is the point of the entire site
2. **`toys/`** — small apps built with AI. Each toy gets a card + a short **colophon**, not an essay: what it is, why it exists, stack, build time, one thing rejected during the build, one honest limitation. Toys are allowed to be unfinished; the colophon says so plainly.
3. **`about/`** — one page. Operating-manual register, consistent with the public `working-with-me` repo. Not a résumé; the résumé lives elsewhere and gets one link.

**Bucket boundary rule:** if a piece of work could be both a process entry and a toy, the *essay about the judgment* goes in `process/` and the *artifact* goes in `toys/`, cross-linked. Never duplicate content between them.

## Voice and words

- Words are design. Copy gets the same review rigor as layout.
- Register: plain, specific, first person, journalist's economy. Confident without hedging, honest without false modesty.
- Sentence case everywhere. Active voice. A link says where it goes.
- No AI-hype vocabulary: never "leverage," "supercharge," "10x," "the future of design." Never "I'm passionate about."
- Entry titles are declarative statements, not listicles or questions.

## Workflow rules for Claude Code

- Propose before you build. For any new page or component: a short plan (structure, tokens used, copy skeleton) gets a yes before code is written.
- Small commits, imperative mood messages, one concern per commit.
- Decisions with tradeoffs get a one-paragraph ADR in `docs/decisions.md`. Cheap now, gold in the retrospective — this site is *about* process, and the ADR log may itself become content.
- When Melinda rejects something you generated, note what was rejected and her stated reason in `docs/rejections.md`. This is source material for the "what I rejected and why" sections. Do this without being asked.
- Never mark a task complete until it's verified in the browser at mobile and desktop widths.

## Quality floor (non-negotiable, never announced)

- WCAG 2.1 AA minimum: contrast, focus visible, touch targets, semantic landmarks, one `h1` per page, skip link.
- Keyboard navigable end to end.
- `prefers-reduced-motion` respected; motion is opt-in enhancement only.
- Lighthouse accessibility and performance ≥ 95 before launch.
- Real content only. No lorem ipsum ever appears in a commit.

## Launch scope (closed)

- Toy shelf with the toys that exist today, leading the home page
- 2 process entries, drawn from existing work only
- About page
- Colophon (footer or page): stack, Civic Ink version, "built with Claude Code," link to working-with-me repo

## Design system changes during this build

- Gap-fills (new tokens/components demanded by real content): allowed.
  Timebox 30 min, log in docs/civic-ink-changes.md with the forcing page.
- Redefinitions of existing tokens, type, radius, or palette: not this week.
  One-sentence note in docs/later.md, then back to the build.
- When Melinda proposes a change, ask which category it is before implementing.

Anything not on this list is post-launch. If it feels urgent, it goes in `docs/later.md`, not in the build.
