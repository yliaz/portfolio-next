---
index: 1
title: Git 本地仓库
description: 本文介绍 Git 本地仓库的使用
icon: git
date: 2020-04-01
category:
  - 技术博客
tag:
  - Git
---

![3.1 Git本地仓库的使用.png](https://zhuye-1308301598.file.myqcloud.com/markdown/1586441846551-8d3b93da-8e31-4185-8226-8032f6a65e27-20211120214200359.png)

> 括号中的标注了 **Oh-my-zsh** 简写命令。

## 配置 Git

```shell
git config --global user.name zhuye						# 用户名称
git config --global user.email zhuye256@163.com		# 邮箱
git config --global push.default simple						# 只能推送到与本地分支名一致的upstream分支中
git config --global core.quotepath false					
git config --global core.editor "code --wait"
git config --global core.autocrlf input
```


> [【Git】git push.default 简析](https://www.jianshu.com/p/b7ba3d954eb0)

## 常用 Git 命令

### git init「新建」


- `git init` : 在当前目录新建一个**Git代码库**，用于容纳代码快照



### git status「状态」


- `git status` : 显示有**变更**的文件（**gst**）
- `git status -sb` : 简洁版status（**gsb**）



### git log「日志」


- `git log` : 显示当前分支的**版本历史**
- `git log --stat` : 显示commit历史，以及每次commit发生变更的文件（**glg**）
- `git reflog` : 显示当前分支的最近几次**提交**



### git add「暂存」


- `git add [file1] [file2]` : 将指定文件纳入版本管理（**ga**）
- `git add [dir]` : 将指定目录纳入版本管理，包括子目录（**ga**）


:::tip 对于不需要提交的文件
新建.gitignore文件，在其中加入不需要提交的文件的文件名
常见：
- **node_modules**
- **.DS_Store**
- **.idea**
- **.vscode**
:::

### git commit「提交」


- `git commit -m [message]` : 提交暂存区到**仓库区**（**gcmsg**）
- `git commit -v` : 提交时显示所有diff信息（后添加message）（**gc**）



> - 后一种方式可以帮助回顾刚刚改了什么，也会迫使自己把提交理由写得更详细一些



### git reset「重置」


- `git reset --hard [commit]` : **重置**当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致

:::note
慎用
:::



### git branch「分支操作」


- `git branch [branch-name]` : 新建一个分支，但依然停留在当前分支（**gb**）
- `git checkout -b [branch]` : 新建一个分支，并切换到该分支（**gcb**）
- `git checkout [branch-name]` : 切换到指定分支，并更新工作区（**gco**）



> 当前目录有未提交代码，只要跟另一个分支不冲突，就不需要理会
> 如果冲突，可用`git stash`，也可以合并冲突



### git merge「分支合并操作」


- `git merge [brange-name]` : 合并分支到当前分支（**gm**）



## 解决冲突的办法:


### 发现冲突

- 在合并分支时，会得到Conflict
- 使用 `git status -sb` 查看哪些文件冲突

### 解决冲突

1. 依次打开每个文件
2. 搜索====
3. 在上下两部分中选择需要保留的代码
4. 删除不用的代码
5. 使用 `git add` 对应文件
6. 再次 `git status -sb`，解决下一个冲突
7. 直到没有冲突，再使用 `git commit`（无参数）提交

## Git 高级功能

### 使用 zsh alias 简化命令

```shell
$ touch ~/.zshrc
$ echo 'alias ga="git add"'>> ~/.zshrc
$ echo 'alias gc="git commit -v"'>> ~/.zshrc
$ echo 'alias gl="git pull"'>> ~/.zshrc
$ echo 'alias gp="git push"'>> ~/.zshrc
$ echo 'alias gco="git checkout"'>> ~/.zshrc
$ echo 'alias gst="git status -sb"'>> ~/.zshrc
```


> Oh-my-zsh 自带 git 插件，可以不用配置，参考: [Oh-my-zsh下的 git 快捷键](https://www.jianshu.com/p/8bdef56df024)

### 使用rebase合并提交记录

```shell
$ git rebase -i [提交号]
```


> 参考: [彻底搞懂 git rebase](http://jartto.wang/2018/12/11/git-rebase/)



### 使用stash保存和恢复进度

```shell
$ git stash      # 保存当前工作进度，会把暂存区和工作区的改动保存起来
$ git stash pop  # 恢复最新的进度到工作区
```


> 参考: [使用 git stash 命令保存和恢复进度](https://blog.csdn.net/daguanjia11/article/details/73810577)

:::note 
参考资料：[常用 Git 命令清单 - 阮一峰](https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
:::

