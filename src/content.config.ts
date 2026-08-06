import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Process entries: essays about judgment. The `rejected` field is required
// by schema so no entry can ship without naming what was rejected — that
// section is the point of the entire site (see CLAUDE.md, content model).
const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      // One-line summary of the most significant AI output this entry rejects.
      rejected: z.string(),
      // Live URL of the app this entry is about, when there is one.
      app: z.string().url().optional(),
      // Colophon fields (2026-08-05): an entry about a live app now carries
      // its own colophon. The artifact and its story are one document, not
      // two cross-linked collections — see docs/decisions.md.
      stack: z.array(z.string()).optional(),
      buildTime: z.string().optional(),
      limitation: z.array(z.string()).optional(),
    })
    // The confession stays structurally impossible to skip: an entry about a
    // live app cannot build without stating at least one honest limitation.
    .refine((d) => !d.app || (d.limitation?.length ?? 0) > 0, {
      message: 'An entry with an `app` URL must state at least one `limitation`.',
      path: ['limitation'],
    }),
});

// Toys: small apps with a colophon, not an essay. The `limitation` field is
// required by schema — every toy states one honest limitation.
const toys = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/toys' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    buildTime: z.string(),
    // One thing rejected during the build — the red pen, per artifact.
    rejected: z.string(),
    // One honest limitation, stated plainly.
    limitation: z.string(),
    url: z.string().url().optional(),
    unfinished: z.boolean().default(false),
  }),
});

export const collections = { process, toys };
