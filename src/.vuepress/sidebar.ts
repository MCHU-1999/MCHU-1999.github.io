import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "",
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "Geo-visualization",
      icon: "folder-open-twotone",
      prefix: "geo-vis/",
      link: "geo-vis/",
      children: "structure",
    },
    {
      text: "Coursework",
      icon: "folder-open-twotone",
      prefix: "coursework/",
      link: "coursework/",
      children: "structure",
    },
  ],
});
