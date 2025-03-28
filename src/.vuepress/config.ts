import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Ming-Chieh Hu",
  description: "My portfolio website",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
