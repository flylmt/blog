import { sidebar } from "vuepress-theme-hope";
import { project } from "./project.js"
import { books } from "./books.js";
export default sidebar({
// 应该把更精确的路径放置在前边
 "/project/": project,
 "/books/": books,

  "/": [

    {
      text: "Java",
      icon: "java",
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "基础",
          prefix: "JavaSE/",
          icon: "basic",
          children: [
            "java-basic-questions-01",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "serialization",
                "reflection",
                "proxy",
              ],
            },
          ],
        },
      ],
    },
    {
      text: "工具",
      icon: "tool",
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "Maven",
          icon: "configuration",
          prefix: "maven/",
          children: ["maven-core-concepts", "maven-best-practices"],
        },
        // {
        //   text: "Gradle",
        //   icon: "gradle",
        //   prefix: "gradle/",
        //   children: ["gradle-core-concepts"],
        // },
        {
          text: "Git",
          icon: "git",
          prefix: "git/",
          children: ["git-intro", "github-tips"],
        },
        {
          text: "Docker",
          icon: "docker1",
          prefix: "docker/",
          children: ["docker-intro", "docker-in-action"],
        },
        {
          text: "IDEA",
          icon: "intellijidea",
          link: "",
        },
      ],
    },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
