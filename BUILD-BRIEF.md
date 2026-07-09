# Build Brief v2 — Field Notes (greenmelinda.com)

**Deadline: live by Friday, July 10, 2026.** Shipped and shared beats polished and private.

> **v2 changes (Tue night):** Toys are now the main event; process entries drop from 3 to 2 (Le French Club exits process/, its forms become a toy). Schedule compressed one day. Site is positioned as the eventual successor to the Squarespace portfolio. v1 is superseded; this file is canonical.
>
> **v2.1 changes (Wed PM):** LFC forms are off the shelf entirely — out of the toy inventory, files out of the build (see docs/decisions.md, 2026-07-08). The shelf leads with find-a-film, live and linkable. Inventory below is now real, not placeholder.

## One-liner

Working things I've built with AI — and the judgment that shaped them.

## Primary job

Demonstrate the practice with live artifacts. The toys are the proof; the process entries and colophons supply the judgment story. A visitor should be able to *touch something working* within one click of arriving.

## Site strategy (two-site model)

- **Squarespace portfolio** — the résumé's front door: case studies, career proof. Unchanged this week.
- **Field Notes (this site)** — the practice: live demos, process, the red pen. Linked from LinkedIn and the Friday launch post.
- Each site links to the other, once, clearly.
- **Succession plan:** Field Notes is expected to become the main portfolio eventually. This week's only obligation to that future: clean URL structure (no toy-specific junk at root level), and no architectural decisions that would fight a future `/work/` section. Migration itself is explicitly not a this-month project.

## Audience, in order

1. Hiring managers and design leaders evaluating me for Senior II / Staff / Lead roles — who've read "AI-fluent" on a hundred résumés and can verify it here in one click
2. Designers figuring out their own AI practice
3. Me, six months from now

## Point of view (unchanged, relocated)

AI output is raw material; judgment is the craft. In v2 this thesis lives primarily in the **toy colophons** — every toy states what it is, what I rejected while building it, and one honest limitation — and secondarily in two process essays. The red pen is now a per-artifact habit, not just an essay device.

## Information architecture

```
Home ─ thesis line + TOY SHELF (the lead) + 2 process entries + about teaser
├── /toys/             the main event. cards → live demos
│     └── [each toy]   card: name, one-liner, screenshot, live link,
│                      colophon (stack · build time · rejected · limitation)
├── /process/          2 essays at launch, fixed
│     ├── building-civic-ink
│     └── teaching-claude-my-taste
├── /about/            operating-manual style, one page
└── colophon           footer: stack, Civic Ink version, built with Claude Code
```

Toy demos that are self-contained are hosted within this site under
/toys/[name]/demo/ as static assets; anything already deployed elsewhere just
links out. No new deploy infrastructure per toy. (At launch, no toy exercises
the embedded pattern — find-a-film links out.)

## Content plan

### Toys (the lead)

Launch inventory (locked Wed PM, v2.1):

1. **find-a-film** — mood-based film finder. Live: https://find-a-film-tau.vercel.app/ (colophon facts owed: build time, one rejected, one limitation)

Removed from candidacy: Le French Club forms (off the shelf entirely, per decisions.md 2026-07-08).

Each toy card carries, without exception:
- One-sentence what-it-is
- Live demo link or embedded demo
- Colophon: stack · build time in honest units · **one thing I rejected during the build** · **one honest limitation**

Rule: toys launch as they exist today. No toy gets "finished up" before Friday.
The colophon confesses the state; that confession is the brand.

### Process entries (two, fixed)

Same mandatory spine: problem → where AI fit (and didn't) → what I did / what
Claude did → **kept / rejected / why**. 800–1,200 words. Edited once, shipped.
The Field Notes build itself feeds both essays via docs/rejections.md.

### About

One page, operating-manual register. Links: Squarespace portfolio,
working-with-me repo, LinkedIn. Notes the two-site arrangement in one line.

## Design direction

Civic Ink applied as designed — this site remains a reference implementation.
Version: **v1.5** (tokens.css transcription + reconstructed v1.4 changelog,
per Wed morning session). Signature element: the red pen, now appearing on
every toy colophon as well as in essays. One signature, executed precisely.

## Out of scope for launch

- Finishing or polishing any toy
- Case studies / portfolio migration
- Blog machinery, RSS, tags, search, comments, dark mode
- Custom illustrations
- Perfect

## Schedule (revised — it's Tuesday night)

| Day | Ship |
|-----|------|
| **Wed AM** | Tokens transcribed → Civic Ink v1.5. Version gap documented. Basic type/spacing applied so the site stops hurting. |
| **Wed PM** | Toy inventory locked. All toy cards + colophons drafted. LFC forms staged under /toys/. |
| **Thu** | Draft both process essays. About page. Content into templates. |
| **Fri** | Red-pen treatment, Civic Ink polish, a11y + mobile pass, Lighthouse ≥ 95, domain live at greenmelinda.com, ship, post to JSC + LinkedIn. |

## Definition of done

- Live at greenmelinda.com
- Every toy has a working demo link and a complete colophon
- 2 process entries with real kept/rejected sections
- Quality floor (CLAUDE.md) passes on every page
- Announced publicly before end of Friday

## Risks and their pre-decided answers

- *"Let me just fix this one thing in the toy first"* → No. Colophon confesses it. Ship.
- *"Should the shelf have a third… fourth… entry?"* → Ship what exists. Shelves grow.
- *"Maybe I should start the portfolio migration while I'm in here"* → docs/later.md. Not this month.
- *"Is two sites confusing?"* → No. Case studies prove the career; Field Notes proves the practice. One line on the about page says so.
