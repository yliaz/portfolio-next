import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "技术博客", icon: "blogs", link: "/blogs/" },
  { text: "学习笔记", icon: "notes", link: "/study-notes/" },
  { text: "力扣刷题", icon: "leetcode", link: "/leetcode/" },
  { text: "读书笔记", icon: "reading", link: "/reading-notes/" },
  { text: "系列教程", icon: "tutorial", link: "/tutorial/" },
  { text: "学习资料", icon: "code", link: "/materials/" },
]);
