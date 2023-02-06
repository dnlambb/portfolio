import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  site: "https://dnlambb.com",
  base: "/",
  build: {
    format: "directory"
  },
  server: {
    host: "localhost",
    port: 3000,
  },
  integrations: [tailwind(), react()]
});