import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://personal-website-963.pages.dev",
  output: "static",
  integrations: [sitemap()],
});
