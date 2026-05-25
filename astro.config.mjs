import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://streamoji.stream',
  integrations: [
    // Emits /sitemap-index.xml + /sitemap-0.xml at build, listing every page
    // Astro generates. robots.txt (in /public) points at the index URL so
    // Google/Bing find every route in one shot.
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // emit smaller HTML
    inlineStylesheets: 'auto',
  },
});
