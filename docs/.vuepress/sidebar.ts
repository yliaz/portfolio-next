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
          children: [
            "01-intro",
            {
              text: "通过例子学 Rust",
              prefix: "02-learn-rust-by-example",
              collapsable: true,
              icon: "rust",
              children: "structure"
            },
          ]
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
  "/leetcode/": [
    {
      text: "数组",
      prefix: "01-array/",
      // collapsable: true,
      icon: "leetcode",
      children: [
        {
          text: "二分查找",
          prefix: "01-binary-search/",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "双指针",
          prefix: "02-double-pointer",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "滑动窗口",
          prefix: "03-slide-window",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "螺旋矩阵",
          prefix: "04-spiral-matrix",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "其他",
          prefix: "05-others",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
      ],
    },
    {
      text: "链表",
      prefix: "02-linked-list/",
      icon: "leetcode",
      children: [
        {
          text: "链表基础",
          prefix: "01-basic-operations",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "链表应用",
          prefix: "02-others",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
      ]
    },
    {
      text: "哈希",
      prefix: "03-hash/",
      icon: "leetcode",
      children: [
        {
          text: "字母异位词",
          prefix: "01-anagram",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "数组交集",
          prefix: "02-array-intersection",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "n数之和",
          prefix: "03-n-sum",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "其他",
          prefix: "04-others",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
      ]
    },
    {
      text: "字符串",
      prefix: "04-string/",
      icon: "leetcode",
      children: [
        {
          text: "逆序",
          prefix: "01-reverse",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "替换",
          prefix: "02-replace",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
        {
          text: "子字符串",
          prefix: "03-substring",
          collapsable: true,
          icon: "leetcode",
          children: "structure"
        },
      ]
    }
  ],
  "/materials/": "structure",
});
