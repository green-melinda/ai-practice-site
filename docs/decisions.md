# Decisions

One-paragraph ADRs for decisions with tradeoffs, newest first. Cheap now, gold in the retrospective — this log may itself become content.

---

## 2026-07-16 — Real masthead on every page; the whole site becomes one column

The homepage had a styled one-off masthead (wordmark + about + portfolio) while every other page fell back to an unstyled default nav — Melinda called for a real top nav. Now one shared `Masthead` component renders everywhere: wordmark → home, Process / Toys / About with an `aria-current` section marker (ink, 600, 2px underline), and the portfolio link last behind a hairline divider as the one outbound pointer. Nav type is 14px — same session set the **12px floor** (see civic-ink-changes.md), and primary navigation shouldn't sit at the floor. Supporting change: header, main, and footer all sit on `--container-narrow` globally, so chrome and content share one left edge on every page — the masthead-at-720/main-at-1200 split would have re-created the misalignment bug fixed earlier today. Wide layouts opt out per-page when one actually exists.

## 2026-07-16 — Entry pages get a spec: one flush-left column on the long-form measure

Melinda flagged that the entry page's title, date, and prose didn't share a left edge. Root cause was a bug — global.css styled bare `header`, which also caught the `<header>` inside `<article>` and indented it; landmarks are now scoped to `body >`. While fixing it, the entry page got its first deliberate spec, since neither Civic Ink nor the homepage handoff covered article layout: article on `--container-narrow` (720px, the doc's "long-form reading" measure), title at the global h1 (Playfair, display-lg), date and app link as one Instrument Sans metadata line (`--text-body-sm`, charcoal) under the title, everything flush left. Entries about a live app carry an `app` frontmatter URL, which renders a "Try the app" link and marks the entry as the homepage card's build-notes target (replacing a hardcoded slug lookup that broke on rename). Candidate for the Civic Ink doc once it survives a second entry.

## 2026-07-16 — Homepage built to the work-first handoff spec; placeholders resolved, two judgment calls

The homepage now follows `docs/field-notes-homepage-handoff.md` (designed with Melinda in a claude.ai session, same day): masthead → epigraph → featured toy card → notes list → footer. The spec's PLACEHOLDER values resolved cleanly — toy card ground/text/muted/link come from find-a-film's Blue Hour dark palette (`#0E1228` / `#E8E4F0` / `#8B8DB0` / `#7B8FD4`), and the spec's "secondary text color" maps to `--color-charcoal`, whose Night value (`#8A8478`) is visibly the mock's ghost gray — no new tokens were needed; the ghost row is charcoal at 0.55 opacity. Two deviations from the letter of the spec. First, the focus ring: the spec says Cobalt everywhere, but Cobalt on the dark card ground is ~2.8:1, under the 3:1 non-text floor — so Cobalt applies on paper sections and the global Acid ring stays inside the card. Second, the masthead nav: the spec's `greenmelinda.com` returns a 404 today, so the link points at the live portfolio (www.mynameisgreenmelinda.com) with the label matching the destination, per "a link says where it goes." Flip it back when the short domain goes live. The footer reads "Built with Civic Ink v1.6" because the v1.6 type-role addendum shipped to working-with-me the same day; entry title "Mood first, streamer second" is Melinda's own candidate and still needs her final confirmation.

## 2026-07-08 — LFC forms are off the toy shelf entirely

Brief v2's headline move — Le French Club forms becoming a toy, staged under `/toys/` — is reversed. Melinda's call, Wednesday PM: the forms are out of the launch inventory, full stop, and their files stay out of this build. The shelf leads with find-a-film (live at find-a-film-tau.vercel.app), which fills the demo slot v2 wanted from LFC. Tradeoff: the shelf launches thinner than v2 imagined, and the "self-contained demos hosted under /toys/[name]/demo/" pattern ships with no toy exercising it — first external-link-only shelf instead. Accepted per the risk table: ship what exists, shelves grow. Recorded as brief v2.1.

Civic Ink v1.4 tokens were hand-transcribed into `src/styles/tokens.css` from design-system.md @ commit 5bb4808, with the source commit recorded in the file header so drift is detectable. Two judgment calls: the dark-mode palette was left out (out of launch scope; logged in later.md rather than carried as dead weight), and the undeclared radius tokens were gap-filled from the doc's prose (logged in civic-ink-changes.md). Tradeoff of light-only: adding dark mode later means touching tokens.css again instead of it being free — accepted, because untested dark mode against a launch-week deadline is worse than absent dark mode.

## 2026-07-07 — First deploy went through the Vercel CLI, not git

The git-triggered deploy failed (exit 127) because the GitHub repo only contained the markdown docs — the Astro scaffold was never pushed, so Vercel had no `package.json` and no `astro` binary. The scaffold is now committed locally, but this machine has no GitHub credentials (previous commits were made in the GitHub web UI), so the push is blocked on Melinda authenticating. Rather than leave the day-one live URL unshipped, the skeleton was deployed directly with `vercel deploy --prod` from the local working tree. Tradeoff: the live site and the repo are temporarily out of sync, and the git → Vercel pipeline stays red until the local commits are pushed. Once they are, every merge to main deploys as designed and the CLI path retires.

## 2026-07-07 — Civic Ink tokens will be transcribed, not snapshotted

The working-with-me repo (checked on GitHub and locally) has no machine-readable tokens file — Civic Ink v1.4 exists only as documentation with embedded CSS blocks in `design-system/design-system.md`. A verbatim snapshot is therefore impossible, and transcription by hand risks drift from the source. Decision: per the build brief, transcription happens together with Melinda before any styles are written, and `docs/civic-ink-changes.md` will record anything the transcription surfaces (gaps, ambiguities, needed tokens that don't exist). Until then, `src/styles/global.css` is an empty placeholder and the skeleton ships unstyled.

## 2026-07-07 — Required judgment fields are enforced by schema, not convention

Process entries require a `rejected` frontmatter field and toys require a `limitation` field, enforced by zod schemas in `src/content.config.ts`. Tradeoff: slightly more friction when drafting (the build fails on an entry without them) in exchange for making the site's core promise — every entry names what was rejected, every toy states one honest limitation — structurally impossible to skip. Given that the kept/rejected section is the point of the entire site, the friction is the feature.
