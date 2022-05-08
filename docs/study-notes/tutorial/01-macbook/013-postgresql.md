---
title: Postgresql 安装与初始化
---

# Postgresql 安装与初始化

## 1. 安装 Postgresql

```bash
# 使用 Homebrew 安装 Postgresql
brew install postgresql

# 查看是否安装成功
pg_ctl -V
which pg_ctl
```

![image-20220419162817899](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419162817899.png)

> 这个是m1芯片的mac的安装路径

## 2. 配置

```bash
# 初始化数据库
initdb /usr/local/var/postgres

# 手动启动数据库
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

# 查看数据库状态
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log status

# 停止数据库
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log stop -s -m fast

# 查看数据库进程
ps -ef |grep postgres
```

![image-20220419162830215](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419162830215.png)

## 3. 创建用户

```bash
# 创建一个名为postgres的用户
/opt/homebrew/bin/createuser -s postgres

# 进入控制台
psql

# 查看所有创建了的数据库
\l

# 查看所有用role
\du

# 创建一个名为dbname的数据库
CREATE DATABASE dbname OWNER postgres;

# 给postgres用户操作这个数据库的权限
GRANT ALL PRIVILEGES ON DATABASE postgres to postgres;

# 给postgres用户添加创建数据库权限
ALTER ROLE postgres CREATEDB;
```

![image-20220419162841163](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419162841163.png)

![image-20220419162850391](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220419162850391.png)

## 4. rails 中创建数据库

```bash
rails db:setup
rails db:migrate
```