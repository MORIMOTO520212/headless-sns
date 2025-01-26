// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://morimoto520212.github.io/headless-sns",
  outDir: "./docs",
  compressHTML: false,
  build: {
    assets: "assets",
    assetsPrefix: ".",
  },
  integrations: [
    starlight({
      title: "Headless SNS",
      social: {
        github: "https://github.com/MORIMOTO520212/headless-sns",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
