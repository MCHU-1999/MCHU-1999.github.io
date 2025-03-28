import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    sidebar: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "Projects",
        link: "/projects/",
      },
      {
        text: "Research",
        link: "/research/",
      },
    ],
    navbar: ['/', '/get-started', "/projects", "/research"],
  }),

  themeConfig: {
    heroImage: '/overfit.jpeg',  // Reference the image from the public folder
    heroText: "Ming-Chieh Hu",
    tagline: "MSc Geomatics | TU Delft",
  },

  bundler: viteBundler(),
})
