// https://astro.build/config
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  prefetch: true,
  adapter: netlify()
});