---
index: 2
title: iTerm2 安装与配置指南
description: Macbook 中 iTerm2 安装与配置指南
icon: iterm2
date: 2021-10-15
category:
  - 系列教程
tag:
  - Macbook 使用技巧
---

## 1. 安装

[官网](https://iterm2.com/) 点击下载（Download）进行安装

## 2. 简单配置

### 2.1 配置打开 iTerm2 的快捷键

我选的是 ⌘ + i 和 连按两下 ⌘ 均可以打开

![image-20211119120211439](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211119120211439.png)

### 2.2 修改一下窗口和字体

1. 建议设置一下窗口的大小，我设为了 110 x 30，13寸打开时感觉大小刚刚好。

![image-20211119120408805](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211119120408805.png)

1. 建议把字体大小调大一点，不那么累眼睛

![image-20211119120422068](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211119120422068.png)

## 3. 安装 oh-my-zsh

`oh-my-zsh`  = 更好看的主题 + 好用的插件管理

进入[官网](https://ohmyz.sh/) ，使用官网脚本一键安装👇。

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

> 如果无法安装，一般是 raw.github.com 的 DNS 污染导致的，可以 Google，有多种处理方法。



## 4. 配置主题和配色

> 安装主题前需要先安装好 oh-my-zsh

### 4.1 更换配色

#### 4.1.1 选择配色

打开[这个网站](https://iterm2colorschemes.com/)，选择你喜欢的配色主题，我使用的是 `midnight-in-mojave`

#### 4.1.2 保存主题和配置文件

点击主题的名字，会弹出一个 新的窗口，将整个文件保存

![image-20220419143041043](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143041043.png)

注意下载时需要去掉默认给出的 txt 后缀，并将格式选择为**所有文件**

![image-20220419143115573](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143115573.png)

#### 4.1.3 更换配色

打开已经下载好的 `iTerm2`

![image-20220419143342788](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143342788.png)

按下快捷键 `Command + i`，打开 `Preference`，依次点击 `Colors` ⇒ `Color Presets` ⇒ `Import`

![image-20220419143407475](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143407475.png)

选中刚刚下载好的文件

![](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143424373.png)

> 建议把配色文件全部集中存放在某个地方

在下拉框中选中主题即可

![image-20220419143517546](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143517546.png)

### 4.2 更换主题

#### 4.2.1选择自己喜欢的主题

在下面的网站可以选择自己喜欢的主题，当然不是很全，网上还有很多mod版，可以自己找一找。

我之前用的是 `lambda`，选择 `Powerlevel10k` 的人也比较多，自定义程度比较高，不过 `random`貌似也不错？

这里我以 `Powerlevel10k` 为例，其他主题下载过程不同，安装过程类似。

#### 4.2.2 安装 Powerlevel10k

1. 运行脚本，下载主题

```bash
# 运行下面的脚本（由于用的国内库，应该会比较快）
git clone --depth=1 <https://gitee.com/romkatv/powerlevel10k.git> ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

2. 修改 `~/.zshrc` 文件的内容

3. 刷新配置

```bash
source ~/.zshrc
```

4. 之后会出现主题的配置提示，是了几次字体都没安装成功，所以我们先跳过，等手动把字体安装好了之后再回来配置

### 4.3 安装 Nerd Font 字体

Powerlevel10k 默认会装 Meslo Nerd Font，不过我们还可以[这个网站](https://www.nerdfonts.com/font-downloads)中挑选其他的自己喜欢的字体的 Nerd Font 扩展包。

下载好了之后，双击要安装字体对应的ttf文件，点击安装字体就可以了。

![image-20220419142109193](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419142109193.png)

### 4.4 配置 Powerlevel10k

按照自己喜欢的一步一步选择就可以，这里不详细列了。由于我们手动安装了自己想要的Nerd Font，因此第一步字体安装可以按 n 跳过了。

![image-20220419142151600](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419142151600.png)

都选完了，就配置完成了。展示一下我的效果，感觉还不错！

![image-20220419142953663](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419142953663.png)

## 5. 安装插件

我安装的插件列表：

![image-20221128113742457](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20221128113742457.png)

> 插件安装涉及到修改 `~/.zshrc` 文件中的 `plugin` 。如果没有需要自行加入。zshrc 文件中大致如下图所示，会有一些注释提示插件写在哪里。

![image-20221128160331552](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20221128160331552.png)

### 5.1 自带插件

自带插件不需要安装，只需要修改 `~/.zshrc` 文件中的 `plugin` 即可启用。[这里是官方给出的插件列表](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)，数量不少，可以按需启用。

> 注意：修改完插件后，即 zshrc 文件后，需要运行 `source ~/.zshrc` 更改才可以生效。

#### 5.1.1 git

> 插件地址：[git plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git)

在 `plugin`中加入 `git` 即可启用。主要是一些 alias，用于简化 git 参数输入，具体用法可以查看[插件介绍](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git)。

#### 5.1.2 osx

> 插件地址：[MacOS Plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/macos)

在 `plugin`中加入 `osx` 即可启用。具体用法可以查看[插件介绍](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git)。

#### 5.1.3 brew

> 插件地址：[brew plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/brew)

在 `plugin`中加入 `brew` 即可启用。装不装都行，好像没啥大用。

#### 5.1.4 colored-man-pages

> 插件地址：[colored-man-pages](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/colored-man-pages)

在 `plugin`中加入 `colored-man-pages` 即可启用。可以展示更好看的 man 帮助页面。

#### 5.1.5 sudo

> 插件地址：[sudo plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo)

在 `plugin`中加入 `sudo` 即可启用。在输入任何命令时，按两下 `ESC` 键即可在该命令前加上 `sudo` 前缀。

#### 5.1.6 cp

> 插件地址：[cp plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/cp)

在 `plugin`中加入 `cp` 即可启用。增强 `cp` 命令。

#### 5.1.7 command-not-found

> 插件地址：[command-not-found plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/command-not-found)

尝试执行未找到的命令时，会提示应该安装哪些东西（通过 Homebrew）才可以使用对应命令。

#### 5.1.8 safe-paste

> 插件地址：[safe-paste plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/safe-paste)

直接在终端中粘贴其他地方复制过来的命令时，会自动去掉末尾的回车，防止未经检查就直接执行。不过好像有时候会失效。



### 5.2 先安装再启用的插件

#### 5.2.1 zsh-sutosuggestions（推断命令）

> [插件地址](https://github.com/zsh-users/zsh-autosuggestions)
>
> [安装说明（英文版）](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh)

**安装步骤：**

（1）将代码仓库克隆到本地的 `$ZSH_CUSTOM/plugins` 目录（默认是 `~/.oh-my-zsh/custom/plugins`）

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

（2）在 `plugin`中加入 `zsh-autosuggestions` 以启用。

**效果：**

输入命令时，插件会根据历史，推断出可能得完整命令。按键盘的 `→` 键即可自动补全。

![image-20221128153408877](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20221128153408877.png)



#### 5.2.2 zsh-syntax-highlighting（高亮命令提示）

> [插件地址](https://github.com/zsh-users/zsh-syntax-highlighting)
>
> [安装说明（英文版）](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)

安装步骤：

（1）将代码仓库克隆到本地。

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

（2）在 `plugin`中加入 `zsh-syntax-highlighting` 以启用。

效果：

命令会有高亮效果。最明显的就是，可执行命令为绿色，不可执行为红色。

![image-20221128154858239](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20221128154858239.png)



#### 5.2.3 autojump（推断想访问的目录）

**安装：**

（1）用 Homebrew 装会方便一点

```shell
brew install autojump
```

（2）在 `plugin`中加入 `autojump` 以启用。

**效果：**

幻影移形！会根据历史访问过的目录推断你想要去的地方。

![image-20221128160453759](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20221128160453759.png)