# Decisions

One-paragraph ADRs for decisions with tradeoffs, newest first. Cheap now, gold in the retrospective — this log may itself become content.

---

## 2026-07-07 — Civic Ink tokens will be transcribed, not snapshotted

The working-with-me repo (checked on GitHub and locally) has no machine-readable tokens file — Civic Ink v1.4 exists only as documentation with embedded CSS blocks in `design-system/design-system.md`. A verbatim snapshot is therefore impossible, and transcription by hand risks drift from the source. Decision: per the build brief, transcription happens together with Melinda before any styles are written, and `docs/civic-ink-changes.md` will record anything the transcription surfaces (gaps, ambiguities, needed tokens that don't exist). Until then, `src/styles/global.css` is an empty placeholder and the skeleton ships unstyled.

## 2026-07-07 — Required judgment fields are enforced by schema, not convention

Process entries require a `rejected` frontmatter field and toys require a `limitation` field, enforced by zod schemas in `src/content.config.ts`. Tradeoff: slightly more friction when drafting (the build fails on an entry without them) in exchange for making the site's core promise — every entry names what was rejected, every toy states one honest limitation — structurally impossible to skip. Given that the kept/rejected section is the point of the entire site, the friction is the feature.
