---
index: 2
title: GitHub 基础操作
description: 本文介绍 Github 基础操作
icon: github
date: 2020-04-02
category:
  - 技术博客
tag:
  - Git
  - GitHub
---

![github](https://zhuye-1308301598.file.myqcloud.com/markdown/1586441919541-135a1cc1-b42b-451e-82cf-648ec5d146a4.png)

## 生成新 SSH 密钥

### 使用SSH Key验证

```shell
# 下面一条命令用于生成ssh-key
ssh-keygen -t rsa -b 4096 -C zhuye256@163.com  
# 秘钥的目录是`~/.ssh`
cd ~/.ssh
cat ~/.ssh/id_rsa.pub
```


![image.png](https://zhuye-1308301598.file.myqcloud.com/markdown/1586311071691-906fb90c-6661-42c8-8b3e-197fc0257e7e.png)


> 其中:
>
> - **id_rsa**: 私钥
> - **id_rsa.pub**: 公钥



## 上传代码到Github


### 新建仓库

新建仓库，并复制其ssh地址

- 仓库ssh地址：`git@github.com:BarrryZhu/[仓库名].git`

![image.png](https://zhuye-1308301598.file.myqcloud.com/markdown/1586311434457-a39e9a26-85f9-4f54-b6f4-b15dbf8d6e98.png)


### 在本地添加远程仓库地址


```shell
git remote add origin git@github.com:BarrryZhu/[仓库名].git
```


> - 添加后，远程库的名字就是origin，这是Git默认的叫法
> - 如果想上传到两个远程仓库，那么可以将第二个origin更改为其他名字（repo2等）

### 初次推送

初次推送本地master分支到远程origin的master分支


```shell
git push -u origin master
```


> - 如果提示应`git pull`，则pull一下
>   `git pull`将远程分支合并到本地分支，如果远程分支没有更新过，则可以省略`git pull`

> - 由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令

### 再次推送


- 把本地master分支的最新修改推送至GitHub



```shell
git push origin master
```


> 参考: [添加Github远程仓库并从本地仓库上传代码 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600/898732864121440)



## 下载代码到本地

### 下载源代码


```shell
git clone git@[仓库地址].git
```


> - 如果是不同机器，要上传新的ssh key（一机一Key）



1. 使用 `cd [目标路径]` 进入目标路径
1. 四连操作



```shell
git add
git ommit
git pull    # 可选
git push
```


### 下载某个分支

- 要下载某个分支，则先下载整个仓库，再 `git checkout [分支名]` 切换到分支



### git clone 的几种形式


- 直接克隆

```shell
# 以原仓库名创建一个新目录并克隆至该目录
git clone git@github.com:BarrryZhu/[仓库名].git  
```


- 自定义目录

```shell
# 在当前目录中创建yyy目录为克隆目录
git clone git@github.com:BarrryZhu/[仓库名].git yyy  
```


- 使用当前目录

```shell
# 以当前所在目录为克隆目录
git clone git@[仓库地址]/xxx.git .  
```


> 参考: [从Github远程仓库克隆代码到本地仓库 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600/898732792973664)

:::tip 小结
- 要克隆一个仓库，首先必须知道仓库的地址，然后使用git clone命令克隆。
- Git支持多种协议，包括https，但通过ssh支持的原生git协议速度最快。
:::