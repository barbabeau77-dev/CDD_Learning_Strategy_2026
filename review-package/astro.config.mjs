import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  vite: {
    optimizeDeps: {
      // Work around Windows EPERM issues where esbuild prebundle cannot spawn.
      noDiscovery: true,
      include: []
    }
  }
});

