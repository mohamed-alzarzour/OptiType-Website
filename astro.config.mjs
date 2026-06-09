// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mohamed-alzarzour.github.io',
  base: '/OptiType-Website',
  vite: {
    plugins: [tailwindcss()]
  }
});
