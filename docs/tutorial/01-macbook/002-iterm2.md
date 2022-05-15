---
index: 2
title: iTerm2 安装与配置
description: Macbook 中 iTerm2 安装与配置
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

![image-20211119120211439](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211119120211439.png){width=500}

### 2.2 修改一下窗口和字体

1. 建议设置一下窗口的大小，我设为了 110 x 30，13寸打开时感觉大小刚刚好。

![image-20211119120408805](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211119120408805.png){width=500}

2. 建议把字体大小调大一点，不那么累眼睛

![image-20211119120422068](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20211119120422068.png){width=500}

## 3. 安装 oh-my-zsh

进入[官网](https://ohmyz.sh/) 

使用官网脚本一键安装👇

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```



## 4. 配置主题和配色

> 安装主题前需要先安装好 oh-my-zsh

### 4.1 更换配色

#### 4.1.1 选择配色

打开[这个网站](https://iterm2colorschemes.com/)，选择你喜欢的配色主题，我使用的是 `midnight-in-mojave`

#### 4.1.2 保存主题和配置文件

点击主题的名字，会弹出一个 新的窗口，将整个文件保存

![image-20220419143041043](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143041043.png){width=500}

注意下载时需要去掉默认给出的 txt 后缀，并将格式选择为**所有文件**

![image-20220419143115573](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143115573.png){width=300}

#### 4.1.3 更换配色

打开已经下载好的 `iTerm2`

![image-20220419143342788](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143342788.png){width=200}

按下快捷键 `Command + i`，打开 `Preference`，依次点击 `Colors` ⇒ `Color Presets` ⇒ `Import`

![image-20220419143407475](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143407475.png){width=500}

选中刚刚下载好的文件

![](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143424373.png){width=500}

> 建议把配色文件全部集中存放在某个地方

在下拉框中选中主题即可

![image-20220419143517546](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419143517546.png){width=500}

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

Powerlevel10k 默认会装 Meslo Nerd Font，不过我们还可以在下面的[网站](https://www.nerdfonts.com/font-downloads)中挑选其他的自己喜欢的字体的 Nerd Font 扩展包。

下载好了之后，双击要安装字体对应的ttf文件，点击安装字体就可以了。

![image-20220419142109193](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419142109193.png){width=300}

### 4.4 配置 Powerlevel10k

按照自己喜欢的一步一步选择就可以，这里不详细列了。由于我们手动安装了自己想要的Nerd Font，因此第一步字体安装可以按 n 跳过了。

![image-20220419142151600](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419142151600.png){width=500}

都选完了，就配置完成了。展示一下我的效果，感觉还不错！

![image-20220419142953663](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419142953663.png)
