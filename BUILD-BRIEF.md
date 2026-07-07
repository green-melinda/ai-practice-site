# Build Brief — Field Notes

**Deadline: live by Friday, July 10, 2026.** Shipped and shared beats polished and private.

## One-liner

A designer's field notes on working with AI — showing the judgment, not just the output.

## Primary job

Document my process. The site exists so that a hiring manager, a fellow designer, or a future collaborator can see *how* I work with AI: where I let it run, where I overrule it, and why. It is portfolio-adjacent but not a portfolio — my case studies live elsewhere.

## Audience, in order

1. Hiring managers and design leaders evaluating me for Senior II / Staff / Lead roles who've read "AI-fluent" on a hundred résumés and believed none of them
2. Designers figuring out their own AI practice
3. Me, six months from now, wanting a record of how this actually felt

## Point of view (the site's thesis)

AI output is raw material. Judgment is the craft. Every entry demonstrates this by showing the red pen: what was generated, what survived contact with a designer, and the reasoning in between. The intro states this once, plainly; the entries prove it; nothing on the site repeats it as a slogan.

## Information architecture

```
Home ─ thesis + 3 process entries + toy shelf preview + about teaser
├── /process/          3 entries at launch, fixed
│     ├── building-civic-ink          (design system built with Claude Code)
│     ├── le-french-club              (real client, real forms, real constraints)
│     └── teaching-claude-my-taste    (the CLAUDE.md / working-with-me setup)
├── /toys/             shelf of cards, each with a colophon
├── /about/            operating-manual style, one page
└── colophon           in footer: stack, Civic Ink v1.4, built with Claude Code
```

Five templates total: home, process index/entry, toys shelf, about. No more.

## Content plan

### Process entries (the spine, every entry, no exceptions)

1. **The problem** — real context, stakes, constraints
2. **Where AI fit** — and explicitly where it didn't
3. **What I did / what Claude did** — honest division of labor
4. **Kept / rejected / why** — the centerpiece. Concrete examples: show a rejected output and the reasoning. This section is what makes the site different from every "how I use AI" post on the internet.

Target length: 800–1,200 words. Journalism rules: written to deadline, edited once, shipped.

### Toys

Each card: name, one-sentence what-it-is, screenshot or live link, colophon (stack, build time, one honest limitation). Toys earn their place by existing, not by being impressive. Launch with whatever is real today.

### About

Who I am, how I work, what I'm looking for — operating-manual register. Links out to portfolio, working-with-me repo, LinkedIn. One page, no timeline graphics, no headshot carousel.

## Design direction

Civic Ink v1.4, applied as designed — this site is a reference implementation of the system, which is itself part of the argument.

**Signature element:** the *red pen*. In the kept/rejected sections, rejected AI output is displayed with a visible editorial treatment — struck through, margin-annotated, or marked in a way that reads as an editor's hand on a proof. One signature, executed precisely; everything else stays quiet and lets type and spacing carry the page. (Treatment to be designed Thursday against real content — don't build this speculatively.)

Motion: at most one considered moment, if any. Reduced-motion respected. Restraint is the brand.

## Out of scope for launch

- Blog machinery, RSS, tags, search, comments
- Case studies (they live in the portfolio)
- Dark mode
- Any entry requiring new project work to exist
- Custom illustrations
- Perfect

## Schedule (it's Monday)

| Day | Ship |
|-----|------|
| **Mon** | Repo + CLAUDE.md in place. Astro scaffold with Civic Ink tokens wired. Skeleton deployed to Vercel — live URL exists tonight. |
| **Tue** | Draft entries 1 and 2. Ugly drafts allowed; missing drafts are not. |
| **Wed** | Draft entry 3 + toy colophons + about page. |
| **Thu** | Content into templates. Civic Ink polish pass. Design and apply the red-pen treatment. Write the home intro last. |
| **Fri** | Accessibility + mobile pass, Lighthouse ≥ 95, colophon, ship. Post to JSC and LinkedIn same day. |

## Definition of done

- Live at the production URL
- 3 process entries, each with a real kept/rejected section
- Every page passes the quality floor in CLAUDE.md
- Announced publicly before end of Friday

## Risks and their pre-decided answers

- *"This entry needs one more pass"* → No. Edit once, ship. Post-launch edits are free.
- *"Should I add a fourth entry about—"* → `docs/later.md`.
- *"The red-pen treatment isn't perfect"* → Ship the simple version (strikethrough + margin note). Iterate after Friday.
- *"Maybe this should just be part of my portfolio"* → Decided Monday: standalone. Not reopening.
