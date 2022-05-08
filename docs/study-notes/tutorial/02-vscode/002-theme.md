---
title: 更换主题和字体
---

## 更换主题

直接在 `扩展` 里将过滤设置为 `theme` 类别，之后便可以选择自己喜欢的主题进行安装了。

我一直在使用的是 `One Dark Pro Italic Vivid`。

## 更换图标

非常推荐你安装 `Material Icon Theme` 这个插件，会让你的项目文件列表看起来很舒服。

## 更换字体

我一直在使用的是 Jetbrain 家的字体，你可以下载并使用[普通版本](https://github.com/JetBrains/JetBrainsMono)的 Jetbrains Mono 字体。我使用的是另外一个版本（[JetBrainsMono Nerd Font](https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/JetBrainsMono/Ligatures/Regular/complete/JetBrains%20Mono%20Regular%20Nerd%20Font%20Complete%20Mono.ttf)），这是一个包含了一些图标的版本。

同时最好再附带一个备用字体，我选择了很多人喜欢的 Fira Code。

修改字体并开启连字，你可以在 settings.json 中看到下面的两行（如果没有，可以手动添加进去）。

```
"editor.fontFamily": "JetBrainsMono Nerd Font, Fira Code",
"editor.fontLigatures": true,
```

## 括号配对

安装 `Bracket Pair Colorizer` 插件，这是一个括号提示插件，当括号层级较多时，可以直观地看到哪两个括号是一对的。
