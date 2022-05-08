---
title: Node 和 Yarn 安装与配置
---

# Node 和 Yarn 安装与配置

> 本文是 Mac 环境下的安装，不适用于 Windows。

## 1. 安装 nvm

> nvm 用来管理多个版本的 node

### 1.1 使用 Homebrew 安装 nvm

```bash
# 安装
brew install nvm

# 查看版本（是否安装成功）
nvm --version
```

### 1.2 配置环境变量

修改 `~/.zshrc` 文件

```bash
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

## 2. 安装 nrm 管理npm源

> nrm 用来管理 npm 的下载源

### 2.1 安装

```bash
# 安装
npm install -g nrm

# 查看版本
nrm --version
```

![image-20220419145432093](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419145432093.png)

![image-20220419145441271](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419145441271.png)

### 2.2 切换npm源

```bash
# 查看可用源
nrm ls

# 切换淘宝源（国内访问比较快）
nrm use taobao
```



## 3. 安装 node（Mac）

> node 15 以上版本安装方法和 node ≤ 14 版本安装方法有所不同

### 3.1 node ≥ 15 版本安装

```bash
# 安装 node 16
nvm install 16
```

### 3.2 node ≤ 14 版本安装 👻

```bash
# 切换成 Rosetta（x86） 模式
arch -x86_64 zsh

# 安装 node 14
node install 14
```

> 建议将 ARM64 和 Rosetta（X86） 的切换记成更简便的指令。
>
> 需要在 ~/.zshrc 文件中加入以下的内容：
>
> ```
> alias x64="arch -arm64 zsh"
> alias x86="arch -x86_64 zsh"
> ```
>
> 之后便可以通过 `x64` 和 `x86` 切换两种模式，简便一点。
>
> 

### 3.3 查看已安装的node版本

```bash
nvm list
```

![image-20220419145801662](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419145801662.png)

### 3.4 修改npm下载源

```bash
# 修改
npm config set registry '<https://registry.npm.taobao.org>'

# 查看结果
npm config get registry
```

![image-20220419145824021](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419145824021.png)

## 4. 安装 yarn

### 4.1 安装

使用 homebrew 安装 yarn

```bash
brew install yarn

# 如果不想安装特定版本的node
brew install yarn --ignore-dependencies
```

### 4.2 修改源

```bash
yarn config set registry '<https://registry.npm.taobao.org>'
```