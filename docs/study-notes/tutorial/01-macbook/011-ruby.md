---
title: Ruby 和 Rails 安装与配置
---

# Ruby 和 Rails 安装与配置

> 因 rvm 多次安装均以失败告终，最后使用了 rbenv

## 0. 确保 Homebrew（ARM版本） 已经可用

```bash
brew --version
```

![image-20220419150638444](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150638444.png)

## 1. 使用 Homebrew 安装rbenv、readline和openssl

```bash
# 安装
brew install rbenv readline openssl

# 如果提示已经安装，就重装一下
brew reinstall rbenv readline openssl
```

## 2. 修改 ~/.zshrc

将下面的内容加入到 `~/.zshrc` 文件的末尾

```bash
# rbenv
export RBENV_ROOT=/opt/homebrew/opt/rbenv
export PATH=$RBENV_ROOT/bin:$PATH
eval "$(rbenv init -)"
# Use native openssl libraries for building
export PATH="/opt/homebrew/opt/openssl@1.1/bin:$PATH"
export LDFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib"
export CPPFLAGS="-I/opt/homebrew/opt/openssl@1.1/include"
export PKG_CONFIG_PATH="/opt/homebrew/opt/openssl@1.1/lib/pkgconfig"
export RUBY_CONFIGURE_OPTS="--with-openssl-dir=/opt/homebrew/opt/openssl@1.1"
```

命令行中输入以下命令刷新，使环境变量生效

```bash
source ~/.zshrc
```

## 3. 安装 Ruby

### 3.0 修改源为 Ruby-china 源

> 能稍微快一点

```bash
git clone <https://github.com/andorchen/rbenv-china-mirror.git> "$(rbenv root)"/plugins/rbenv-china-mirror
```

![image-20220419150657720](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150657720.png)

### 3.1 安装 ≥ 2.7.2 版本

```bash
# 安装
rbenv install 3.0.2
```

![image-20220419150705582](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150705582.png)

```bash
# 切换版本
rbenv global 3.0.2
rbenv rehash
```

![image-20220419150712769](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150712769.png)

### 3.2 安装 < 2.7.2 版本 👻

```bash
# 安装
RUBY_CFLAGS="-Wno-error=implicit-function-declaration" rbenv install 2.6.2
```

![image-20220419150728960](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150728960.png)

> 这里的截图没有换Ruby-china源，也能安装成功，只不过稍微慢一点点。

```bash
# 切换版本，同上
rbenv global 2.6.2
rbenv rehash
```

![image-20220419150739099](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150739099.png)

### 3.3. 全部完成

```bash
# 查看所有已安装版本
rbenv versions
```

![image-20220419150801607](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150801607.png)

| 命令                | 作用                                                         |
| ------------------- | ------------------------------------------------------------ |
| rbenv install x.x.x | 安装指定版本                                                 |
| rbenv global x.x.x  | 全局使用某一版本                                             |
| rbenv versions      | 查看所有已安装的版本                                         |
| rbenv version       | 查看当前版本                                                 |
| rbenv rehash        | 每当切换 ruby 版本和执行 bundle install 之后必须执行这个命令 |
| rbenv which irb     | 列出irb的路径                                                |
| rbenv whence irb    | 列出所有包含irb的版本                                        |

## 4. 安装Rails

```bash
# 安装
gem install rails -v 6.1.3.2

rbenv rehash
rails -v
```

![image-20220419150959709](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419150959709.png)