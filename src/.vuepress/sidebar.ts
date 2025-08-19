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
      text: "Internship",
      icon: "folder-open-twotone",
      prefix: "intern/",
      link: "intern/",
      children: "structure",
    },
    {
      text: "Computational Geometry",
      icon: "folder-open-twotone",
      prefix: "comp-geom/",
      link: "comp-geom/",
      children: "structure",
    },
    {
      text: "Geo-visualization",
      icon: "folder-open-twotone",
      prefix: "geo-vis/",
      link: "geo-vis/",
      children: "structure",
    },
    {
      text: "Other Coursework",
      icon: "folder-open-twotone",
      prefix: "coursework/",
      link: "coursework/",
      children: "structure",
    },
  ],
});
