import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "尴尬风流的技术博客",
  description: "尴尬风流的技术博客",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3384059_3an7lxlbmvh.css",
      },
    ],
  ],

  theme,
});
