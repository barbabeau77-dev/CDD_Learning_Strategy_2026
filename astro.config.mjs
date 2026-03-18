import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://barbabeau77-dev.github.io',
  base: '/CDD_Learning_Strategy_2026',
  trailingSlash: 'always',
  vite: {
    optimizeDeps: {
      // Work around Windows EPERM issues where esbuild prebundle cannot spawn.
      noDiscovery: true,
      include: []
    }
  }
});

