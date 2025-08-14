// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact()],
  site: 'https://seandsun.github.io/monorepo-zero-astro/01-news-homepage/',
  base: '/monorepo-zero-astro/01-news-homepage/',
  trailingSlash: 'always',
  outDir: '../../dist/01-news-homepage',
});
