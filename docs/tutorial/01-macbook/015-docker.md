---
index: 15
title: Docker 安装与使用
description: Docker 安装与使用
icon: docker
date: 2021-10-16
category:
  - 系列教程
tag:
  - Macbook 使用技巧
---

## 1. 下载安装

进入[官网](https://docs.docker.com/desktop/mac/install/)下载安装

> M1需要选择 apple chip 的版本

## 2. 查看是否安装成功

在终端输入 `docker info` 查看docker的信息和状态

![image-20220419163033963](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419163033963.png){width=500}

## 3. 找一个镜像测试一下

```bash
# 2048小游戏的镜像
docker run -d -p 2048:80 alexwhen/docker-2048
```

在浏览器中打开 `localhost:2048` 即可访问2048小游戏