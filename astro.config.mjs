import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://isrofilamar.site',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
