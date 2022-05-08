---
index: -20201209
title: Mac 终端科学上网
description: 这篇文章介绍一下 Mac 终端如何实现科学上网
icon: iterm2
date: 2020-12-09
category:
  - 技术博客
tag:
  - 科学上网
---

## 设置 zshrc 文件

1. 获取端口

我是用的科学上网软件是 trojan，其他软件请自行查询。

![image-20211209212732217](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211209212732217.png)

2. 修改 `~/.zshrc` 文件

将一下内容拷贝到 `~/.zshrc` 文件中：

```shell
# Proxy
function proxy_on(){
    export http_proxy=http://127.0.0.1:58591
    export https_proxy=http://127.0.0.1:58591
    echo -e "已开启代理"
}
function proxy_off(){
    unset http_proxy
    unset https_proxy
    echo -e "已关闭代理"
}
```

3. 开启代理并进行测试

```shell
proxy_on
curl cip.cc
```

![image-20211209213031389](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211209213031389.png)

4. 关闭代理并进行测试

```shell
proxy_off
curl cip.cc
```

![image-20211209213138137](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211209213138137.png)
