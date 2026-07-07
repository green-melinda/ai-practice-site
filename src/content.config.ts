import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Process entries: essays about judgment. The `rejected` field is required
// by schema so no entry can ship without naming what was rejected — that
// section is the point of the entire site (see CLAUDE.md, content model).
const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // One-line summary of the most significant AI output this entry rejects.
    rejected: z.string(),
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
    // One honest limitation, stated plainly.
    limitation: z.string(),
    url: z.string().url().optional(),
    unfinished: z.boolean().default(false),
  }),
});

export const collections = { process, toys };
