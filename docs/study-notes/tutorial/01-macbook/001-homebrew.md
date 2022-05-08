---
title: Homebrew 安装与配置
---

## 使用脚本安装

我基于官方脚本封装了一个基于中科大源安装脚本，将脚本中的下载源统统改成了中科大源。

请下载[脚本](https://zhuye-1308301598.file.myqcloud.com/brew_install.txt) ，并在终端中执行下面的命令进行安装。

```bash
# 在文件的下载目录里执行
sh brew_install
```

## 安装结束后的配置

安装结束后，按照提示需要输入两个命令来添加PATH

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/zhuye/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# 刷新一下
source .zprofile
```

## 查看是否安装成功

之后可以通过查看 Homebrew 的版本，确认是否安装成功。

```bash
brew --version

# Homebrew 3.2.5
# Homebrew/homebrew-core (git revision acde438554; last commit 2021-07-27)
```

:::note 脚本的制作过程

```bash
    # 将官方的install.sh安装脚本保存到本地
    curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh >> brew_install
    
    # 替换其中的Homebrew源
    # HOMEBREW_BREW_DEFAULT_GIT_REMOTE="https://github.com/Homebrew/brew"
    HOMEBREW_BREW_DEFAULT_GIT_REMOTE="git://mirrors.ustc.edu.cn/brew.git"
    
    # 替换其中的Homebrew-core源
    # HOMEBREW_CORE_DEFAULT_GIT_REMOTE="https://github.com/Homebrew/homebrew-core"
    HOMEBREW_CORE_DEFAULT_GIT_REMOTE="git://mirrors.ustc.edu.cn/homebrew-core.git"
```

:::

## 更换 Homebrew 的下载源

> 参考中科大的相关[操作指南](https://mirrors.ustc.edu.cn/help/brew.git.html)：
>

```bash
# 更换Homebrew源
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git

# 更换Homebrew-core源
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

# 更换Homebrew Bottles源（zsh）
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```


## ARM 和 X86 两个版本 Homebrew 的共存问题

编辑 ~/.zshrc 文件，将下面的两行复制进去

```bash
# Homebrew
alias abrew='/opt/homebrew/bin/brew' # ARM Homebrew
alias ibrew='arch -x86_64 /usr/local/bin/brew' # X86 Homebrewexport PATH="/usr/local/opt/openssl@1.1/bin:$PATH"
```

之后，便可以进行区分：

- 使用 `abrew` 实际指向了 `ARM` 版本的 `Homebrew`
- 使用 `ibrew` 实际指向了 `X86` 版本的 `Homebrew`