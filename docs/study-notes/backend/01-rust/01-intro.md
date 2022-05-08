---
index: 1
title: 初尝试
description: 初尝试
icon: rust
date: 2022-03-05
category:
  - 学习笔记
tag:
  - Rust
---

## 安装

参照[官网](https://www.rust-lang.org/zh-CN/tools/install)进行安装

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## 第一个程序

1. 创建 main.rs 并用 VS Code 打开所在文件夹

```shell
mkdir hello_world
cd hello_world
touch main.rs
code .
```

2. 编写程序

```rust
fn main() {
    println!("Hello, world!");
}
```

3. 运行程序

```shell
rustc main.rs
./main
# 屏幕打印：Hello, world!
```

## 使用 Cargo

使用 cargo 创建一个新项目

```shell
cargo new hello_cargo
cd hello_cargo
```

hello_cargo 项目目录如下：

![image-20220304172633305](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220304172633305.png) 

构建项目

```shell
cargo build
```

可以看到，项目中多了一个 target 文件夹

![image-20220304173252720](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220304173252720.png) 

运行项目

```shell
./target/debug/hello_cargo
# Hello, world!
```

同时编译并运行项目

```shell
cargo run
```

检查代码

```shell
cargo check
```

## 总结

|       条目       |         命令          |
| :--------------: | :-------------------: |
|    创建新项目    |       cargo new       |
|     构建项目     |      cargo build      |
|  构建并运行项目  |       cargo run       |
|     检查代码     |      cargo check      |
| 构建可发布的项目 | cargo build --release |

