import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ankurlohachab.github.io',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
