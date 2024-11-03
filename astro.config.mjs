import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://KunalMaverick.github.io',
  base: '/KunalMaverick.github.io'',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
