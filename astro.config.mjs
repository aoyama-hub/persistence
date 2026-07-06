import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aoyama-hub.github.io',
  base: '/persistence',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});