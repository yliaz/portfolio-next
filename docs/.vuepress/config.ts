import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "尴尬风流的个人主页",
  description: "尴尬风流的个人主页",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3384059_u2r2zljcg9s.css",
      },
    ],
  ],

  theme: theme,
});
