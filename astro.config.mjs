// @ts-check
import { defineConfig } from 'astro/config';

// Static output, no integrations. Deploys to Vercel as plain static files.
export default defineConfig({
  output: 'static',
});
