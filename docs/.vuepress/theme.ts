import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://zhuye.dev",

  author: {
    name: "尴尬风流",
    url: "https://zhuye.dev",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "yliaz/portfolio-vuepress",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "欢迎来到尴尬风流的技术博客",

  displayFooter: true,

  copyright: "Copyright © 2022 <a href='https://zhuye.dev' target='_blank'>尴尬风流</a>",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  darkmode: "switch",

  themeColor: false,

  // GitHub
  docsRepo: "yliaz/portfolio-vuepress",
  docsBranch: "master",
  docsDir: "docs",

  blog: {
    name: "尴尬风流",
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      // Email: "mailto:zhuyestu@gmail.com",
      // Facebook: "https://example.com",
      GitHub: "https://github.com/yliaz",
      Gmail: "mailto:zhuyestu@gmail.com",
      // Instagram: "https://example.com",
      // Rss: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      Bilibili: "https://space.bilibili.com/2001085527"
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
