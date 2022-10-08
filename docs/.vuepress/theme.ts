import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://zhuye.dev",

  author: {
    name: "zy",
    url: "https://github.com/yliaz",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "yliaz/portfolio-next",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "欢迎来到zy的个人主页",

  displayFooter: true,

  copyright: "Copyright © 2022 <a href='https://github.com/yliaz' target='_blank'>zy</a>",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  darkmode: "switch",

  themeColor: false,

  fullscreen: false,

  // GitHub
  docsRepo: "yliaz/portfolio-next",
  docsBranch: "master",
  docsDir: "docs",
  lastUpdated: false,
  contributors: false,

  blog: {
    name: "zy",
    description: "一个95后搬砖少年",
    intro: "https://github.com/yliaz",
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
      'Ada字幕组': ["https://space.bilibili.com/2001085527", 'docs/.vuepress/public/icons/bilibili.svg'],
      '掘金': ["https://juejin.cn/user/2911162522934215", "docs/.vuepress/public/icons/juejin.svg"],
      '微信': ["/wechat", "docs/.vuepress/public/icons/wechat.svg"],
    },
  },

  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "yliaz/portfolio-next",
      repoId: "R_kgDOHTAusg",
      category: "Announcements",
      categoryId: "DIC_kwDOHTAuss4CO-0U",
      
    },

    copyright: {
      hostname: "https://zhuye.dev",
      author: "zy",
      license: "MIT",
      global: false,
    },

    feed: {
      rss: true,
      count: 5,
      sorter: (pageA, pageB) => new Date(pageB.date).getTime() - new Date(pageA.date).getTime(),
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      gfm: true,
    },

    readingTime: {
      wordPerMinute: 100
    },
  },
});
