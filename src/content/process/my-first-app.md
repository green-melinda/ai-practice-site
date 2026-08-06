---
title: "I don't know what to watch"
description: "Building a film recommender when you used to be the recommender"
date: 2026-07-16
rejected: "Leading with 'choose your streaming services' — explored, quickly dismissed; it went against the crux of the experience. Mood first, then choose."
app: "https://find-a-film-tau.vercel.app/"
# Colophon. Limitations are verbatim from the 2026-07-16 merged draft, whose
# `limitation` fields the process/toys split had stranded. buildTime is still
# owed (build brief: "colophon facts owed") — omitted rather than invented.
stack:
  - "Plain Node http server. No framework, no build step."
  - "Claude writes the candidates and the why-this-fits line."
  - "TMDB verifies every title and whether it actually streams where you say."
limitation:
  - "No login and no saved queries yet. Nothing about a session persists."
  - "Feature roadmap not yet published — being prioritized from friend-tester feedback."
---

Was even a film critic for a few years when free daily newspapers were still a thing in big U.S. cities. I also spent 13 years as a concierge and programmer for the Boston Underground Film Festival and have even appeared in a few films. As you might (correctly) assume, my watchlists on my various streaming apps are extensive.

Yet when I go to watch something, I usually end up grabbing something random that caught my eye when I opened the app. Or I can't think of anything at all. COVID made it even more obvious that my mood impacted what I could or 'couldn't' watch in the comfort of my home.

Mood continues to be the primary factor in determining what I want to watch, and it can feel like a slog to skim through the various streamers. This is why 'describe what you're feeling' leads the entire experience. I explored leading with 'choose your streaming services' but quickly dismissed it because it went against the crux of the experience.

This is the first app I've built using AI because it's the app I have long wanted to build. I will admit that using AI-generated copy so prominently in the results made me feel a little dirty, but the output has thus far exceeded my expectations. The machine is less likely to get florid or hallucinate when brevity is a restraint.

Since going live, I've been testing the MVP with friends — particularly the ones with very particular tastes and pop culture knowledge. There is no login, nor am I saving any of the queries right now. I am currently determining the next features to tackle based upon both user feedback and my own hopes & dreams.
