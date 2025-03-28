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
      icon: "book-open-text",
      prefix: "coursework/",
      link: "coursework/",
      children: "structure",
    },
  ],
});
