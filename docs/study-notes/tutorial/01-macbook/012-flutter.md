---
title: Flutter 安装与配置
---

# Flutter 安装与配置

## 1. 安装 fvm

> fvm 可用于管理本地多个不同的Flutter版本，方便在各个版本之间切换

### 1.1 安装

```bash
// 添加homebrew tap
brew tap xinfeng-tech/fvm

// 安装 fvm
brew install fvm
```

### 1.2 添加环境变量

将下面的几行复制到 ~/.zshrc 文件中

> [【附】如何编辑 ~/.zshrc 文件](https://www.notion.so/zshrc-dec138384c7e48b1862d64fad0289bc8)

```bash
# fvm
export PUB_HOSTED_URL="<https://pub.flutter-io.cn>"
export FLUTTER_STORAGE_BASE_URL="<https://storage.flutter-io.cn>"
export FVM_DIR="$HOME/.fvm"
source "/opt/homebrew/opt/fvm/init.sh"  # This loads fvm
```

### 1.3 查看fvm是否安装成功

```bash
fvm --version
```

![image-20220419150145573](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150145573.png)

## 2. 安装特定版本的 Flutter

```bash
# 安装
fvm install 1.22.6

# 查看已安装的所有版本
fvm list
```

![image-20220419150154041](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150154041.png)

## 3. 运行 Flutter doctor

查看是否具备 flutter 的开发环境

```bash
flutter doctor
```

![image-20220419150206139](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150206139.png)

如果有报错，按照对应的提示处理即可。基本上我遇到的所有问题谷歌都能搜索到解决方案。