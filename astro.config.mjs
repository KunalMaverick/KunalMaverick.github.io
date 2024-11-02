import { defineConfig } from 'astro/config';

export default defineConfig({
  // Other configurations
  build: {
    rollupOptions: {
      external: ['astro/app']  // Exclude astro/app if it’s causing issues
    }
  }
});
