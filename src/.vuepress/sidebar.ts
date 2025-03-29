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
      text: "Coursework",
      icon: "folder-open-twotone",
      prefix: "coursework/",
      link: "coursework/",
      children: "structure",
    },
  ],
});
