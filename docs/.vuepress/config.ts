import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "zy",
  description: "zy的个人主页",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3384059_bqrq81ibu4c.css",
        // href: "https://zhuye-1308301598.file.myqcloud.com/portfolio-icons/iconfont.css"
      },
    ],
  ],

  theme: theme,
});
