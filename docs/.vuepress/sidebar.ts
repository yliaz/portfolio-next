import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/blogs": "structure",
  "/study-notes/": [
    {
      text: "Git 基础",
      prefix: "git/",
      icon: "git",
      collapsable: true,
      children: [
        "01-git-local",
        "02-github",
        "03-githug-game",
        {
          text: "扩展资料",
          icon: "git",
          collapsable: true,
          children: [
            {
              text: 'Git 官网',
              link: 'https://git-scm.com/',
            },
            {
              text: '常用 Git 命令清单',
              link: 'https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html',
            },
            {
              text: 'Git 教程',
              link: 'https://www.liaoxuefeng.com/wiki/896043488029600',
            },
            {
              text: 'Git 学习资料汇总',
              link: 'https://github.com/xirong/my-git',
            },
            {
              text: 'Github 秘籍',
              link: 'https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.zh-cn.md',
            },
            {
              text: 'Githug',
              link: 'https://github.com/Gazler/githug',
            },
            {
              text: 'Learn Git Branching',
              link: 'https://learngitbranching.js.org/?locale=zh_CN',
            },
            {
              text: 'Git 作弊表',
              link: 'http://ndpsoftware.com/git-cheatsheet.html',
            },
          ],
        }
      ]
    },
    {
      text: "前端学习笔记",
      prefix: "frontend/",
      icon: "programming",
      children: [
        {
          text: "Web 基础",
          prefix: "01-network/",
          collapsable: true,
          icon: "network",
          children: "structure"
        },
        {
          text: "HTML",
          prefix: "02-html/",
          collapsable: true,
          icon: "html",
          children: "structure"
        },
        {
          text: "CSS",
          prefix: "03-css/",
          collapsable: true,
          icon: "css",
          children: "structure"
        },
        {
          text: "JavaScript",
          prefix: "04-js/",
          collapsable: true,
          icon: "js",
          children: "structure"
        },
        {
          text: "TypeScript",
          prefix: "05-ts/",
          collapsable: true,
          icon: "ts",
          children: "structure"
        },
        {
          text: "Vue",
          prefix: "06-vue/",
          collapsable: true,
          icon: "vue",
          children: "structure"
        },
        {
          text: "React",
          prefix: "07-react/",
          collapsable: true,
          icon: "react",
          children: "structure"
        },
        {
          text: "DOM",
          prefix: "08-dom/",
          collapsable: true,
          icon: "site-structure",
          children: "structure"
        },
      ],
    },
    {
      text: "后端学习笔记",
      prefix: "backend/",
      icon: "server",
      children: [
        {
          text: "Rust",
          prefix: "01-rust/",
          collapsable: true,
          icon: "rust",
          children: "structure"
        },
        {
          text: "Linux",
          prefix: "02-linux/",
          collapsable: true,
          icon: "linux",
          children: "structure"
        },
      ] 
    },
    {
      text: "编程小技巧",
      prefix: "tricks/",
      icon: "magic",
      children: "structure",
    }
  ],
  "/reading-notes/": "structure",
  "/tutorial/": [
    {
      text: "Mac 使用技巧",
      prefix: "01-macbook",
      collapsable: true,
      icon: "apple",
      children: "structure"
    },
    {
      text: "VSCode 使用技巧",
      prefix: "02-vscode",
      collapsable: true,
      icon: "vscode",
      children: "structure"
    },
    {
      text: "Notion 使用技巧",
      prefix: "03-notion",
      collapsable: true,
      icon: "notion",
      children: "structure"
    },
    {
      text: "Vuepress 个人知识库",
      prefix: "04-vuepress",
      collapsable: true,
      icon: "vue",
      children: "structure"
    },
    {
      text: "Github 个人主页",
      prefix: "05-github-profile",
      collapsable: true,
      icon: "github",
      children: "structure"
    },
    {
      text: "threejs 魔方",
      prefix: "06-magic-cube",
      collapsable: true,
      icon: "cube",
      children: "structure"
    },
  ],
  "/leetcode/": "structure",
  "/materials/": "structure",
});
