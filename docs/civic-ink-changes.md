# Civic Ink changes

Gaps, ambiguities, or needed tokens found in Civic Ink while building this site — candidates to feed back into the working-with-me repo.

---

- 2026-07-07 — Gap-fill: declared `--radius-sm: 4px` and `--radius-pill: 100px` in `src/styles/tokens.css`. The v1.4 doc references both throughout its components but never declares them; values taken from its border rules prose. Forcing page: the token transcription itself (every page uses the layout).
  - Landed upstream in v1.5 (commit dfc3239): declarations restored to the doc's border tokens block. The changelog shows they were added in v1.3, so the doc dropping them was a regression, not a design decision.
- 2026-07-07 — No machine-readable tokens file exists in the repo; tokens live only as CSS blocks inside `design-system/design-system.md`. Extracting them into a canonical `tokens.css` in the source repo would let downstream projects snapshot instead of transcribe.
  - Landed upstream in v1.5 (commit dfc3239): `design-system/tokens.css` added, light + dark. This site now snapshots it (minus the dark block — launch scope).
- 2026-07-16 — **Rule: 12px type floor** (`--text-body-xs`); nothing renders below it. Melinda's call, ratifying what the build already did: the homepage handoff specced 11px twice (sticker badge, NOTES eyebrow) and both shipped at the 12px token. Candidate rule for the Civic Ink doc — the scale's smallest step should be documented as a floor, not just a size.
- 2026-07-07 — The design-system.md header and footer say v1.4, but the changelog's latest entry is v1.3. Whatever changed in v1.4 is undocumented.
  - Resolved same day: v1.4 (committed 2026-05-21, "uploaded v1.4") reduced `--text-display-xl` 72px → 64px and `--text-display-lg` 48px → 40px.
  - Correction: the upstream changelog already had the v1.4 entry — only the local copy of the repo was stale. The finding was real when logged but was already fixed at the source.
