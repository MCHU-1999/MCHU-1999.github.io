---
home: true
icon: house
title: About
heroImage: https://theme-hope-assets.vuejs.press/logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Ming-Chieh Hu
tagline: You can place the description of the project here.
actions:
  - text: How to Use
    icon: lightbulb
    link: ./demo/
    type: primary

  - text: Docs
    link: ./guide/

highlights:
  - header: Easy to install
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: Run <code>pnpm create vuepress-theme-hope hope-project</code> to create a new project with this theme.
      - title: Run <code>pnpm create vuepress-theme-hope add .</code> in your project root to create a new project with this theme.

  - header: Add things you want in markdown
    description: We extended the standard commonMark specification and added tons of new features for you.
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: Links Check
        icon: clipboard-check
        details: Check markdown links
        link: https://theme-hope.vuejs.press/guide/markdown/others.html#link-check

      - title: Hint box
        icon: box-archive
        details: Decorate Markdown content with styles
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/hint.html

      - title: GFM alerts
        icon: bell
        details: GFM alert box
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html

      - title: Tabs
        icon: table-columns
        details: Group similar content with tabs and switch them together
        link: https://theme-hope.vuejs.press/guide/markdown/content/tabs.html

      - title: Code Tabs
        icon: code
        details: Group similar codes with tabs
        link: https://theme-hope.vuejs.press/guide/markdown/code/code-tabs.html

      - title: Custom Align
        icon: align-center
        details: Let you decide to align paragraphs in the way you like
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/align.html

      - title: Attrs
        icon: code
        details: Allow you to add attributes for Markdown content
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/attrs.html

      - title: Superscript and subscript
        icon: superscript
        details: Inserting superscript and subscript
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/sup-sub.html

  - header: Customizable UI
    description: Customizable outlook with full a11y support.
    image: /assets/image/ui.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/9-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/9-dark.svg
    highlights:
      - title: Dark Mode
        icon: circle-half-stroke
        details: Switch between light and dark modes freely
        link: https://theme-hope.vuejs.press/guide/interface/darkmode.html

      - title: Customizable Theme Color
        icon: palette
        details: Set theme color with the brand color and even a picker
        link: https://theme-hope.vuejs.press/guide/interface/theme-color.html

      - title: More
        icon: ellipsis
        details: RTL layout, print support, fullscreen button, etc.
        link: https://theme-hope.vuejs.press/guide/interface/others.html

  - header: Improved layouts
    description: An awesome responsive layout
    image: /assets/image/layout.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: Navbar
        icon: window-maximize
        details: Fully customizable navbar with improved mobile support
        link: https://theme-hope.vuejs.press/guide/layout/navbar.html

      - title: Sidebar
        icon: fas fa-window-maximize fa-rotate-270
        details: Generate sidebar based on page headings and file structure
        link: https://theme-hope.vuejs.press/guide/layout/sidebar.html

      - title: Slide Page
        icon: person-chalkboard
        details: Adding slide pages to display things you like
        link: https://theme-hope.vuejs.press/guide/layout/slides.html

      - title: Other Layout Improvement
        icon: object-group
        details: Improved page nav and new breadcrumb, footer and toc. We also bring you a brand new homepage.
        link: https://theme-hope.vuejs.press/guide/layout/

  - header: New features
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: Catalog Page
        icon: network-wired
        details: Auto generating catalog page and out of box catalog component
        link: https://theme-hope.vuejs.press/guide/feature/catalog.html

      - title: Pageviews and Comments
        icon: comment-dots
        details: Pageview statistics and comment support with 4 comment service
        link: https://theme-hope.vuejs.press/guide/feature/comment.html

      - title: Article Information
        icon: circle-info
        details: Add author, writing date, reading time, word count and other information to your article
        link: https://theme-hope.vuejs.press/guide/feature/page-info.html

      - title: Article Encryption
        icon: lock
        details: Encrypt you articles based on page links, so that only the one you want could see them
        link: https://theme-hope.vuejs.press/guide/feature/encrypt.html

      - title: Search
        icon: search
        details: Support docsearch and client search
        link: https://theme-hope.vuejs.press/guide/feature/search.html

      - title: Code Block
        icon: code
        details: Customize code block themes, line number, highlight lines, copy button, etc.
        link: https://theme-hope.vuejs.press/guide/markdown/code/fence.html.html

      - title: Image Preview
        icon: image
        details: Support viewing, zooming, sharing your page images like a gallery
        link: https://theme-hope.vuejs.press/guide/feature/photo-swipe.html


copyright: false
# footer: Theme by <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope
---

This is an example of a project homepage. You can place your main content here.

To use this layout, you need to set `home: true` in the page front matter.

For related descriptions of configuration items, please see [Project HomePage Layout Config](https://theme-hope.vuejs.press/guide/layout/home/).
