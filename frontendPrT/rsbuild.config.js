// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Videos tutoriales',
    favicon: './public/icons8-pelicula-90.png',
  },
  server: {
    port: 3010,
  },
});
