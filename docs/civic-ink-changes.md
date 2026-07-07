# Civic Ink changes

Gaps, ambiguities, or needed tokens found in Civic Ink v1.4 while building this site — candidates to feed back into the working-with-me repo.

---

- 2026-07-07 — Gap-fill: declared `--radius-sm: 4px` and `--radius-pill: 100px` in `src/styles/tokens.css`. The v1.4 doc references both throughout its components but never declares them; values taken from its border rules prose. Forcing page: the token transcription itself (every page uses the layout). Candidate to add to the source doc's border tokens block.
- 2026-07-07 — No machine-readable tokens file exists in the repo; v1.4 tokens live only as CSS blocks inside `design-system/design-system.md`. Extracting them into a canonical `tokens.css` in the source repo would let downstream projects snapshot instead of transcribe.
- 2026-07-07 — The design-system.md header and footer say v1.4, but the changelog's latest entry is v1.3. Whatever changed in v1.4 is undocumented.
  - Resolved same day: v1.4 (committed 2026-05-21, "uploaded v1.4") reduced `--text-display-xl` 72px → 64px and `--text-display-lg` 48px → 40px. The current doc already carries these values; only the changelog entry is missing in the working-with-me repo.
