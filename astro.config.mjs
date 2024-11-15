import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    isr: {
      expiration: false,
      bypassToken: "abcdefghijklmnopqrstuvwxyz0123456789",
    },
  }),
});
