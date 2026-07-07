# Decisions

One-paragraph ADRs for decisions with tradeoffs, newest first. Cheap now, gold in the retrospective — this log may itself become content.

---

## 2026-07-07 — Tokens transcribed light-only, pinned to a source commit

Civic Ink v1.4 tokens were hand-transcribed into `src/styles/tokens.css` from design-system.md @ commit 5bb4808, with the source commit recorded in the file header so drift is detectable. Two judgment calls: the dark-mode palette was left out (out of launch scope; logged in later.md rather than carried as dead weight), and the undeclared radius tokens were gap-filled from the doc's prose (logged in civic-ink-changes.md). Tradeoff of light-only: adding dark mode later means touching tokens.css again instead of it being free — accepted, because untested dark mode against a launch-week deadline is worse than absent dark mode.

## 2026-07-07 — First deploy went through the Vercel CLI, not git

The git-triggered deploy failed (exit 127) because the GitHub repo only contained the markdown docs — the Astro scaffold was never pushed, so Vercel had no `package.json` and no `astro` binary. The scaffold is now committed locally, but this machine has no GitHub credentials (previous commits were made in the GitHub web UI), so the push is blocked on Melinda authenticating. Rather than leave the day-one live URL unshipped, the skeleton was deployed directly with `vercel deploy --prod` from the local working tree. Tradeoff: the live site and the repo are temporarily out of sync, and the git → Vercel pipeline stays red until the local commits are pushed. Once they are, every merge to main deploys as designed and the CLI path retires.

## 2026-07-07 — Civic Ink tokens will be transcribed, not snapshotted

The working-with-me repo (checked on GitHub and locally) has no machine-readable tokens file — Civic Ink v1.4 exists only as documentation with embedded CSS blocks in `design-system/design-system.md`. A verbatim snapshot is therefore impossible, and transcription by hand risks drift from the source. Decision: per the build brief, transcription happens together with Melinda before any styles are written, and `docs/civic-ink-changes.md` will record anything the transcription surfaces (gaps, ambiguities, needed tokens that don't exist). Until then, `src/styles/global.css` is an empty placeholder and the skeleton ships unstyled.

## 2026-07-07 — Required judgment fields are enforced by schema, not convention

Process entries require a `rejected` frontmatter field and toys require a `limitation` field, enforced by zod schemas in `src/content.config.ts`. Tradeoff: slightly more friction when drafting (the build fails on an entry without them) in exchange for making the site's core promise — every entry names what was rejected, every toy states one honest limitation — structurally impossible to skip. Given that the kept/rejected section is the point of the entire site, the friction is the feature.
