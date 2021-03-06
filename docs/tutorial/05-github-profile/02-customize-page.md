---
index: 2
title: 如何自定义个人主页
description: Github 如何自定义个人主页？
icon: github
date: 2021-12-23
category:
  - 系列教程
tag:
  - Github 主页
---

想要实现这样的一个内容比较丰富的 Github 个人主页，我们首先需要知道如何来修改这个页面，因为默认情况下，比方说你是一个刚刚注册的 Github 新用户，那么当你点开自己的 profile 页面实际上是这个样子的，只会展示一些我们的仓库，还有我们的一些近期活动。



想要自定义这个页面，总共分3步。

第一步，也是最关键的一步，我们需要新建一个仓库，需要特别注意的是，这个仓库的名字要跟你的用户名一模一样。

你会发现，他这里有个提示，告诉你，你这个仓库里的 `README.md` 文件会出现在个人主页，这个正是我们想要的。我们创建完这个仓库，第一步就算完成了。



第二步，我们打算在本地新建一个项目，一会推送到这个仓库。我们新建一个文件夹 `github-profile`，然后呢，里面新建一个文件 `README.md` ，随便写点东西，方便一会测试。

```shell
mkdir github-profile
cd github-profile
code .
```



第三步，把本地项目推送到远程仓库，先初始化一下 `git` 仓库，然后推送到远程。我们刷新一下 `Github` 仓库页面，已经有了，然后看一下这个个人主页。可以看到，已经出现我们写的东西了。

```shell
git add .
git commit -m "init"
git remote add origin git@github.com:yliaz/yliaz.git
git push -u origin master
```

这个说明什么呢。说明我们写在这个 README 文件里的东西，都会出现在 github 主页上，下面我们就可以发挥自己的创造力，一点一点做出自己觉得还不错的 `Github` 个人主页。
