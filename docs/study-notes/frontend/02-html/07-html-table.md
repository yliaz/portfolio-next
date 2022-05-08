---
index: 7
title: HTML 表格
description: HTML 表格
icon: html
date: 2020-04-17
category:
  - 学习笔记
tag:
  - HTML
---

包含了表格大部分用法的一个例子

- 所有内容在一个 `table` 元素内；
- 表格标题使用 `caption` 元素；
- 表格可以结构化用 `thead`、`tbody`、`tfoot` 表示；
- `<tr>` 表示行（row），`<th>` 表示列标题，`<td>` 为内容；
- 可用 `colspan` 或 `rowspan` 跨行、列；
- 表格可以嵌套

```html
<table id="table1" style="background: red">
  <caption>表格标题</caption>
  <colgroup>
    <col>
    <!-- 第二列背景色为黄色 -->
    <col style="background-color: yellow">
  </colgroup>
  <thead>
    <tr>
      <th colspan="2">跨列标题</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2">跨行标题</th>
      <td>第一行内容</td>
    </tr>
    <tr>
      <td id="nested">
        <table id="table2">
          <tr>
            <td>嵌套表格第一列</td>
            <td>嵌套表格第二列</td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">页脚</td>
    </tr>
  </tfoot>
</table>
```