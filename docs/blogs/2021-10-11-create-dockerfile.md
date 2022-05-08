---
index: -20211011
title: 自制一个 Docker 镜像
description: 这篇文章教你如何自制一个 Docker 镜像
icon: docker2
date: 2021-10-11
category:
  - 技术博客
tag:
  - Docker
---

## 1. 新建一个 Dockerfile

```bash
# 新建dockerfile-demo文件夹并进入
mkdir dockerfile-demo
cd dockerfile-demo

# 新建Dockerfile并查看
touch Dockerfile
ls

# 使用VSCode打开当前目录
code .
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled-20211208181608180.png)

## 2. 编写 Dockerfile

我只简单的增加了一些基础工具，并安装了一下ruby的运行环境

```bash
FROM alpine:3.14.1

ARG not_in_china
ENV nic=${not_in_china} 
WORKDIR /tmp
ENV SHELL /bin/bash

# Speed up for Chinese users
RUN [ -z "$nic" ] && sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
# end

# basic tools
RUN apk update
RUN apk --no-cache --update add build-base \
        ca-certificates cmake bash git vim \
        libffi-dev openssl-dev alpine-sdk
ENV EDITOR=/usr/bin/vim
ENV VISUAL=/usr/bin/vim
# end

# Ruby
RUN apk add --no-cache ruby=~2.7 ruby-dev=~2.7 ruby-full &&\
    echo "gem: \"--no-document --verbose\"" > /root/.gemrc &&\
    [ -z "$nic"] && gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/;\
    gem update --system &&\
    gem install bundler --version '~>2.2' &&\
    [ -z "$nic"] || echo "gem: \"--no-document --verbose\"" > /root/.gemrc; \
    [ -z "$nic"] && bundle config mirror.https://rubygems.org https://gems.ruby-china.com;
# end
```

我还新建了一个 `.gemrc` 文件，内容如下

```bash
gem: "--no-document --verbose"
```

现在我的当前目录如下：

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%201.png)

## 3. 从 Dockerfile 得到镜像

```bash
# docker build
docker build . -t my-dockerfile-demo:0.1
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%202.png)

可以在docker软件中查看得到的镜像

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%203.png)

## 4. 由镜像得到容器

```bash
# docker run
docker run -dit my-dockerfile-demo:0.1
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%204.png)

在 docker 软件里查看

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%205.png)

## 5. 进入docker容器

```bash
# docker exec
docker exec -it d18f32 bash

# 退出容器bash
exit
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%206.png)

## 6. 上传镜像到 Docker Hub

```bash
# 登录，需要先去 Docker Hub 注册一个帐号
docker login
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%207.png)

```bash
# 重新build，顺便打个正经标签
docker build . -t zhuye256/my-dockerfile-demo:0.1
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%208.png)

```bash
# 上传镜像，会比较慢docker push zhuye256/my-dockerfile-demo:0.1
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%209.png)

```bash
# 把当前版本标记为最新版，并上传docker tag zhuye256/my-dockerfile-demo:0.1 zhuye256/my-dockerfile-demo:latestdocker push zhuye256/my-dockerfile-demo:latest
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%2010.png)

去Docker Hub 登录自己的帐号就能查看到对应的Docker镜像

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%2011.png)

## 7. 使用别人的镜像

```bash
docker pull zhuye256/my-dockerfile-demodocker run -dit zhuye256/my-dockerfile-demodocker exec -it 936f41 bash
```

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%2012.png)

## 8. 总结

![Untitled](https://zhuye-1308301598.file.myqcloud.com/markdown/Untitled%2013-20211208181608682.png)